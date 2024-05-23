import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Datetime from "react-datetime";
import { useRouter } from 'next/router';
import "react-datetime/css/react-datetime.css";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { API_KEY, Domain_Secrete_Code } from "../../config/config";
import { getLocalStorageItem, setLocalStorageItem } from "../../config/localStorage";
import { LocationData } from "../../config/location";
import fetchAstrologyData from '../../config/getAstroAPI';
import { formatDate } from '../../config/formatDatetoAstrologyAPI';
import { COMPILER_NAMES } from "next/dist/shared/lib/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Banner(props) {
    const router = useRouter();
  const { BannerData, AltName } = props;

  const GenderType = [
    { id: "RepMale", title: "Male" },
    { id: "RepFemale", title: "Female" },
  ];

  
  const [SearchLocation, setSearchLocation] = useState("");
  const [selectedBirthLocation, setSelectedBirthLocation] = useState(null);
  const [Gender, setGender] = useState("Male");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  useEffect(() => {
    const GetUserData = async () => {
      const savedInputValue = getLocalStorageItem("UserInfoDataKey");
      if (savedInputValue !== null) {
        setName(savedInputValue.name);
        // setSelectedDate(savedInputValue.dob);
        // setSelectedTime(savedInputValue.dob);
        setSelectedBirthLocation({
          city_name: savedInputValue.birth_place,
          latitude: savedInputValue.birth_place_latitude,
          longitude: savedInputValue.birth_place_longitude,
        });
      }
    };
    GetUserData();
  }, []);

  const [selectedDateTime, setselectedDateTime] = useState("Please Select DOB");

  const handleDateChange = (date) => {
    setselectedDateTime(date);
  };

  let inputProps = {
    placeholder: selectedDateTime,
  };

  function filterPeople(LocationData, SearchLocation) {
    return LocationData.filter((person) => {
      if (
        SearchLocation.length > 3 &&
        person.city_name.toLowerCase().includes(SearchLocation.toLowerCase())
      ) {
        return person;
      } else {
        return false;
      }
    });
  }
  const filteredPeople = filterPeople(LocationData, SearchLocation);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedDateTime || selectedDateTime) {
      if (!selectedDateTime) console.log("date not entered");
      if (!selectedDateTime) console.log("time not entered");
    

    //   function convertDateTime(dateTimeStr) {
    //     const date = new Date(dateTimeStr);
      
    //     const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
    //     const day = String(date.getUTCDate()).padStart(2, '0');
    //     const year = String(date.getUTCFullYear()).slice(2); 
    //     const hours = String(date.getUTCHours()).padStart(2, '0');
    //     const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    //     const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    //     const formattedDate = `${month}-${day}-${year}`;
    //     const formattedTime = `${hours}:${minutes}:${seconds}`;
    //     const result = `${formattedDate} ${formattedTime}`;
      
    //     return result;
    //   }
        const convertDateTime = (dateTimeStr) => {
            const date = new Date(dateTimeStr);
            const updatedDate = date.toISOString().split('T')[0];
            const timeParts = date.toISOString().split('T')[1].split('.')[0];
            return `${updatedDate} ${timeParts}`;
        };

        const formattedDateTime = convertDateTime(selectedDateTime.toISOString())

          function formatDateIn(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${month}-${day}-${year} ${hours}:${minutes}`;
          }
          const CurrentDate = formatDateIn(new Date());
          console.log(formattedDateTime);

          const [DatePart] = formattedDateTime.split(" ");
          const dataForTimeZone = {
              latitude:  selectedBirthLocation.latitude,
              longitude: selectedBirthLocation.longitude,
              date: DatePart,
          };
        

        let TimeZone;
        try {
            const astrologyData = await fetchAstrologyData(dataForTimeZone, "timezone_with_dst");
            if(astrologyData.status === true ){
                TimeZone = astrologyData.timezone
            }
        } catch (error) {}


        const DateFormateforAstrologyAPI = formatDate(formattedDateTime);

        const data = {
            apiKey: API_KEY,
            dob: formattedDateTime,
            birth_place_longitude: selectedBirthLocation.latitude,
            birth_place_latitude: selectedBirthLocation.longitude,
            cdate: CurrentDate,
        };
    
        const UserInfoData = {
            name: Name,
            dob: formattedDateTime,
            birth_place_longitude: selectedBirthLocation.latitude,
            birth_place_latitude: selectedBirthLocation.longitude,
        };

        const UserData = JSON.stringify(data);
        const AstroDataBack = {
            dobData: DateFormateforAstrologyAPI,
            birth_place_longitude: selectedBirthLocation.latitude,
            birth_place_latitude: selectedBirthLocation.longitude,
            tzone: TimeZone,

        }
        
        try {
            setLocalStorageItem("KundliFromDataKey", data);
            setLocalStorageItem("UserInfoDataKey", UserInfoData);
            setLocalStorageItem("AstroAPIHitDataKey", AstroDataBack);
            router.push("/kundli-report.php");
        } catch (error) {
            console.log("Not set");
            console.log(error);
        }
    }



  };

  return (
    <>
      <form className="z-50 relative">
        <div></div>
        <h3 className="text-xl font-bold">
          Free <span className="text-orange-500">Kundli</span>
        </h3>
        <div className="space-y-4 mt-5 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {GenderType.map((item) => (
            <div key={item?.id} className="flex items-center">
              <input
                id={item?.id}
                name="gender"
                type="radio"
                onChange={() => setGender(item?.title)}
                className="h-4 w-4 border-gray-300 px-2 text-orange-500 focus:ring-orange-500"
              />
              <label
                htmlFor={item?.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {item?.title}
              </label>
            </div>
          ))}
        </div>
        <div className="relative mt-7">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={Name}
            onChange={(value) => setName(value.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Vinay Bajrangi"
          />
        </div>
        <Combobox as="div" value={selectedBirthLocation} onChange={setSelectedBirthLocation}>
          <Combobox.Label className="block text-sm font-medium leading-6 mt-5 text-gray-900">
            Birth location
          </Combobox.Label>
          <div className="relative mt-2">
            <Combobox.Input
              className="w-full rounded-md border-0 bg-white py-1.5 px-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setSearchLocation(event.target.value)}
              displayValue={(person) => person?.city_name}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>

            {filteredPeople.length > 3 ? (
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPeople.map((person, index) => (
                  <Combobox.Option
                    key={index}
                    value={person}
                    className={({ active }) =>
                      classNames(
                        "relative cursor-default select-none py-2 px-4 pl-10",
                        active ? "bg-orange-500 text-white" : "text-gray-900",
                      )
                    }>
                    {({ active, selected }) => (
                      <>
                        <span className={classNames("block truncate", selected && "font-semibold")}>
                          {person?.city_name}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              "absolute inset-y-0 left-0 flex items-center pl-1.5",
                              active ? "text-white" : "text-indigo-600",
                            )}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            ) : (
              <>
                {filteredPeople[0] ? (
                  <>
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      <Combobox.Option
                        value={filteredPeople[0]}
                        className={({ active }) =>
                          classNames(
                            "relative cursor-default select-none py-2 px-4 pl-10",
                            active ? "bg-orange-500 text-white" : "text-gray-900",
                          )
                        }>
                        {({ active, selected }) => (
                          <>
                            <span
                              className={classNames("block truncate", selected && "font-semibold")}>
                              {filteredPeople[0].city_name}
                            </span>

                            {selected && (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                  active ? "text-white" : "text-indigo-600",
                                )}>
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    </Combobox.Options>
                  </>
                ) : (
                  <>
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      <Combobox.Option
                        value={filteredPeople}
                        className={({ active }) =>
                          classNames(
                            "relative cursor-default select-none py-2 px-4 pl-10",
                            active ? "bg-orange-500 text-white" : "text-gray-900",
                          )
                        }>
                        {({ active, selected }) => (
                          <>
                            <span
                              className={classNames("block truncate", selected && "font-semibold")}>
                              {filteredPeople}
                            </span>
                            {selected && (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                  active ? "text-white" : "text-indigo-600",
                                )}>
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            )}
                          </>
                        )}
                        <span className={classNames("block truncate font-semibold")}>
                          {filteredPeople}
                        </span>
                      </Combobox.Option>
                    </Combobox.Options>
                  </>
                )}
              </>
            )}
          </div>
        </Combobox>

        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900">
              Date of Birth
            </label>
            <div className="mt-2">
              <Datetime
                inputProps={inputProps}
                onChange={handleDateChange}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <br />
        <button
          type="button"
          onClick={handleSubmit}
          className="w-[100%] inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
          Submit
        </button>
      </form>
    </>
  );
}

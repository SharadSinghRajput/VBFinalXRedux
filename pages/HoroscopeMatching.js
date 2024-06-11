"use client"; 
import { useState, useEffect } from 'react';
import { EnvelopeIcon, UserIcon, } from '@heroicons/react/20/solid'
// import Datepicker from "react-tailwindcss-datepicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Alert } from "flowbite-react";
import { Male } from '../config/SvgConst';
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { LocationData } from "../config/location";
import Datetime from "react-datetime";
import fetchAstrologyData from '../config/getAstroAPI';
import { formatDate } from '../config/formatDatetoAstrologyAPI';
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";


const notificationMethods = [
    { Name: 'Male' },
    { Name: 'Female' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function HoroscopeMatching() {   

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



    const [TabActive, setTabActive] = useState("Male");


    const [MaleName, setMaleName] = useState("");
    const [MaleDob, setMaleDob] = useState("Please Select DOB");
    let MaleinputProps = {
        placeholder: MaleDob,
        value: MaleDob,
        class: "w-full bg-gray-100 placeholder:text-gray-900"
    };
    const [selectedBirthLocation, setSelectedBirthLocation] = useState(null);
    const [SearchLocation, setSearchLocation] = useState("");
    const filteredPeople = filterPeople(LocationData, SearchLocation);



    const [FemaleName, setFemaleName] = useState("");
    const [FemaleDob, setFemaleDob] = useState("Please Select DOB");
    let FemaleinputProps = {
        placeholder: FemaleDob,
        value: FemaleDob,
        class: "w-full bg-gray-100 placeholder:text-gray-900"
    };
    const [FBirthLocation, setFBirthLocation] = useState(null);
    const [SearchFLocation, setSearchFLocation] = useState("");
    const filteredFLocation = filterPeople(LocationData, SearchFLocation);


    useEffect(() => {
        const GetUserData = async () => {
          const savedInputValue = getLocalStorageItem("HMMaleKey");
          if (savedInputValue !== null) {
            setMaleName(savedInputValue.name);
            setMaleDob(savedInputValue.dob);
            setSelectedBirthLocation(savedInputValue.birth_place);
          }
          const FemaleGetData = getLocalStorageItem("HMFemaleKey");
          if (FemaleGetData !== null) {
            setFemaleName(FemaleGetData.name);
            setFemaleDob(FemaleGetData.dob);
            setFBirthLocation(FemaleGetData.birth_place);
          }
        };
        GetUserData();
      }, []);
      
    


    const Match = async () => {
        if (
            MaleName === "" ||
            MaleDob === "Please Select DOB" ||
            selectedBirthLocation === "" ||
            selectedBirthLocation === null ||
            FemaleName === "" ||
            FemaleDob === "Please Select DOB" ||
            FBirthLocation === "" ||
            FBirthLocation === null
        ) {

        alert("Please check that all fields are filled in.");
        return;

        }

        const convertDateTime = (dateTimeStr) => {
            const date = new Date(dateTimeStr);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
          
            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            return formattedDate;
            
          };

          const MaleFormattedDOB = convertDateTime(MaleDob);
          const FemaleFormattedDOB = convertDateTime(FemaleDob);

          
        // Male Time Zone 
          const [DatePart] = MaleFormattedDOB.split(" ");
          const dataForTimeZone = {
              latitude:  selectedBirthLocation.latitude,
              longitude: selectedBirthLocation.longitude,
              date: DatePart,
          };

          
        let MaleTimeZone;
        try {
            const astrologyData = await fetchAstrologyData(dataForTimeZone, "timezone_with_dst");
            if(astrologyData.status === true ){
                MaleTimeZone = astrologyData.timezone
            }
        } catch (error) {}
        
        // Male Time Zone 

        // Female Time Zone 
          const [FDatePart] = MaleFormattedDOB.split(" ");
          const FdataForTimeZone = {
              latitude:  selectedBirthLocation.latitude,
              longitude: selectedBirthLocation.longitude,
              date: FDatePart,
          };

          
        let FemaleTimeZone;
        try {
            const GetfTimeZone = await fetchAstrologyData(FdataForTimeZone, "timezone_with_dst");
            if(GetfTimeZone.status === true ){
                FemaleTimeZone = GetfTimeZone.timezone
            }
        } catch (error) {}
        // Female Time Zone 

        const DateFormateforAstrologyAPIMale = formatDate(MaleFormattedDOB);
        const DateFormateforAstrologyAPIFemale = formatDate(FemaleFormattedDOB);

        const HMMale = {
            name: MaleName,
            birth_place: {city_name: selectedBirthLocation.city_name, latitude: selectedBirthLocation.latitude, longitude: selectedBirthLocation.longitude},
            dob: MaleFormattedDOB,
          };
        const HMFemale = {
            name: FemaleName,
            birth_place: {city_name: FBirthLocation.city_name, latitude: FBirthLocation.latitude, longitude: FBirthLocation.longitude},
            dob: FemaleFormattedDOB,
          };

        try {
            setLocalStorageItem("HMMaleKey", HMMale);
            setLocalStorageItem("HMFemaleKey", HMFemale);
            
        }catch (error) {}

        
    }



  return (
    
    <>
    <div className='drop-shadow-2xl bg-white p-5 rounded-xl'>
        <form>
            <h3 className='text-xl font-bold'>Free <span className='text-orange-500'> Horoscope Matching</span></h3>
            <div className='flex'>
                {notificationMethods.map((item, index)=>(
                    <button key={index}
                    type='button'
                    onClick={()=> setTabActive(item.Name)}
                    className={`${TabActive === item.Name ? "bg-orange-100 text-gray-900 border-b-4 border-b-orange-500" : "bg-white border border-b-0 text-gray-800"} px-4 py-2 text-base`}>{item.Name}</button>
                ))}
            </div>
            <div className='bg-orange-100 p-4 rounded-b-lg rounded-e-lg'>
                {TabActive === "Male" ? <>
                    <div>
                        <div className="relative mt-7">
                            <label
                                htmlFor="name"
                                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={MaleName}
                                onChange={(value) => setMaleName(value.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Jane Smith"
                            />
                        </div>
                        <Combobox as="div" value={selectedBirthLocation} onChange={setSelectedBirthLocation}>
                            <Combobox.Label className="block text-sm font-medium leading-6 mt-5 text-gray-900">
                                Birth location
                            </Combobox.Label>
                            <div className="relative mt-2">
                                <Combobox.Input
                                className="w-full rounded-md border-0 bg-gray-100 py-1.5 px-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                    inputProps={MaleinputProps}
                                    // onChange={handleDateChange}
                                    onChange={(e)=> setMaleDob(e.toString())}
                                    closeOnClickOutside={true}
                                    className="block w-full bg-gray-100 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </>:<>    
                    <div>
                        <div className="relative mt-7">
                            <label
                                htmlFor="name"
                                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={FemaleName}
                                onChange={(value) => setFemaleName(value.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Jane Smith"
                            />
                        </div>
                        <Combobox as="div" value={FBirthLocation} onChange={setFBirthLocation}>
                            <Combobox.Label className="block text-sm font-medium leading-6 mt-5 text-gray-900">
                                Birth location
                            </Combobox.Label>
                            <div className="relative mt-2">
                                <Combobox.Input
                                className="w-full rounded-md border-0 bg-gray-100 py-1.5 px-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(event) => setSearchFLocation(event.target.value)}
                                displayValue={(person) => person?.city_name}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Combobox.Button>

                                {filteredFLocation.length > 3 ? (
                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredFLocation.map((person, index) => (
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
                                    {filteredFLocation[0] ? (
                                    <>
                                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <Combobox.Option
                                            value={filteredFLocation[0]}
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
                                                {filteredFLocation[0].city_name}
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
                                            value={filteredFLocation}
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
                                                {filteredFLocation}
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
                                            {filteredFLocation}
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
                                    inputProps={FemaleinputProps}
                                    // onChange={handleDateChange}
                                    onChange={(e)=> setFemaleDob(e.toString())}
                                    closeOnClickOutside={true}
                                    className="block w-full bg-gray-100 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </>}
            </div>
            <button type="button" onClick={Match} className="w-[100%] mt-5 inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Match</button>
        </form>
        <div>
    </div>
    </div>
    </>
  )
}
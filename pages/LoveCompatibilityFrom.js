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
import { MAIN_URL, MAIN_URL_HINDI } from '../config/config';
import { useRouter } from 'next/router';

const notificationMethods = [
    { Name: 'Male',NameHindi: "पुरुष" },
    { Name: 'Female',NameHindi: "महिला"  },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function HoroscopeMatching({language = "English", routing}) {   
    const router = useRouter();
    const [mainURL, setMainURL] = useState(MAIN_URL);
    const [Loading, setLoading] = useState(false);

    

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
    const [MatchingDate, setMatchingDate] = useState("");
    const [MatchingTime, setMatchingTime] = useState("");

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
    const [MatchingDateSec, setMatchingDateSec] = useState("");
    const [MatchingTimeSec, setMatchingTimeSec] = useState("");

    const [ShowFormData, setShowFormData] = useState(false);
    const [FormShowHide, setFormShowHide] = useState(false);
    const [ShowNoDataText, setShowNoDataText] = useState(false);
    const [LCReport, setLCReport] = useState("");

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
          const savedInputValue = getLocalStorageItem("LCHMMaleKey");
          if (savedInputValue !== null) {
            setMaleName(savedInputValue.name);
            setMaleDob(savedInputValue.dob);
            setMatchingDate(savedInputValue.dob);
            setMatchingTime(savedInputValue.tob);
            setSelectedBirthLocation(savedInputValue.birth_place);
          }
          const FemaleGetData = getLocalStorageItem("LCHMFemaleKey");
          if (FemaleGetData !== null) {
            setFemaleName(FemaleGetData.name);
            setFemaleDob(FemaleGetData.dob);
            setMatchingDateSec(savedInputValue.dob);
            setMatchingTimeSec(savedInputValue.tob);
            setFBirthLocation(FemaleGetData.birth_place);
          }
        };
        GetUserData();
        if(language === "Hindi"){
            setMainURL(MAIN_URL_HINDI)
        }
      }, [language]);
      
      const handleClick = (e, url) => {
        e.preventDefault(); // Prevent the default anchor behavior
        router.push(`${mainURL}${url}`);
    };
    


    const CheckData = async () => {

        if (
            MaleName === "" ||
            MatchingDate === "" ||
            MatchingTime === "" ||
            selectedBirthLocation === "" ||
            selectedBirthLocation === null ||
            FemaleName === "" ||
            MatchingDateSec === "" ||
            MatchingTimeSec === "" ||
            FBirthLocation === "" ||
            FBirthLocation === null
        ) {
            setShowNoDataText(true);
        return;
        }else{
            setShowFormData(true)
            setFormShowHide(false)
        }
    }
    const Match = async () => {
        setLoading(true)
        
        
        // Male Time Zone 
          const dataForTimeZone = {
              latitude:  selectedBirthLocation.latitude,
              longitude: selectedBirthLocation.longitude,
              date: MatchingDate,
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
          const FdataForTimeZone = {
              latitude:  selectedBirthLocation.latitude,
              longitude: selectedBirthLocation.longitude,
              date: MatchingDateSec,
          };

          
        let FemaleTimeZone;
        try {
            const GetfTimeZone = await fetchAstrologyData(FdataForTimeZone, "timezone_with_dst");
            if(GetfTimeZone.status === true ){
                FemaleTimeZone = GetfTimeZone.timezone
            }
        } catch (error) {}
        // Female Time Zone 

        const MaleNewDateTime = MatchingDate + " " + MatchingTime ;
        const FemaleNewDateTime = MatchingDateSec + " " + MatchingTimeSec ;
        const DateFormateforAstrologyAPIMale = formatDate(MaleNewDateTime);
        const DateFormateforAstrologyAPIFemale = formatDate(FemaleNewDateTime);

        const HMMale = {
            name: MaleName,
            birth_place: {city_name: selectedBirthLocation.city_name, latitude: selectedBirthLocation.latitude, longitude: selectedBirthLocation.longitude},
            dob: MatchingDate,
            tob: MatchingTime,
          };

        const HMFemale = {
            name: FemaleName,
            birth_place: {city_name: FBirthLocation.city_name, latitude: FBirthLocation.latitude, longitude: FBirthLocation.longitude},
            dob: MatchingDateSec,
            tob: MatchingTimeSec,
          };


          const data = {
            p_day: DateFormateforAstrologyAPIMale.day,
            p_month: DateFormateforAstrologyAPIMale.month,
            p_year: DateFormateforAstrologyAPIMale.year,
            p_hour: DateFormateforAstrologyAPIMale.hour,
            p_min: DateFormateforAstrologyAPIMale.min,
            p_lat: selectedBirthLocation.latitude,
            p_lon: selectedBirthLocation.longitude,
            p_tzone: MaleTimeZone,
            s_day: DateFormateforAstrologyAPIFemale.day,
            s_month: DateFormateforAstrologyAPIFemale.month,
            s_year: DateFormateforAstrologyAPIFemale.year,
            s_hour: DateFormateforAstrologyAPIFemale.hour,
            s_min: DateFormateforAstrologyAPIFemale.min,
            s_lat: FBirthLocation.latitude,
            s_lon:  FBirthLocation.longitude,
            s_tzone: FemaleTimeZone,
          };

        try {
            setLocalStorageItem("LCHMMaleKey", HMMale);
            setLocalStorageItem("LCHMFemaleKey", HMFemale);
            setLoading(false)
            const GetLCReport = await fetchAstrologyData(data, "love_compatibility_report/tropical");
            setLCReport(GetLCReport)
            
        }catch (error) {
            setLoading(false)
        }

        
    }

    const HandleTabActive = () =>{
        if(
            MaleName === "" ||
            MatchingDate === "" ||
            MatchingTime === "" ||
            selectedBirthLocation === "" ||
            selectedBirthLocation === null
        ) {
            alert("Please check that all fields are filled in.");
            setLoading(false)
            return;
        }
        setTabActive("Female")
    }



  return (
    
    <>
    <div className=' bg-white p-5 rounded-xl'>
        <div>
            <div>
                <div className='bg-orange-500 p-2'>
                    <p className='border border-white p-5 pb-8 text-xl font-bold text-center uppercase text-white'>Love Calculator</p>
                </div>
                {ShowNoDataText ?
                <>
                <p>We do not have your and your partner details. Kindly provide your and your partner details for exact calculations. Please </p>
                <button onClick={()=> {setShowNoDataText(false); setFormShowHide(true)}} className='py-2 px-5 bg-blue-500 text-white'>Click here</button>
                </>
                : <></>}
                {ShowFormData ?<>
                {!LCReport ? <>
                    <div className='bg-blue-500 p-5'>
                        <p className='text-white'>Dear {MaleName}, As per our record your Dob is {MatchingDate} and time {MatchingTime} and
                            place of birth is {selectedBirthLocation.city_name} and your partner {FemaleName} DOB
                            is {MatchingDateSec} and time {MatchingTimeSec} and place of birth is {FBirthLocation.city_name}. Is this
                            <button onClick={Match} className='py-1 px-4 bg-white text-gray-800 text-sm mx-2'> Correct </button>or 
                            <button onClick={()=> {setFormShowHide(!FormShowHide); setShowFormData(false) } } className='py-1 px-4 text-sm  bg-white text-gray-800 mx-2'> Not </button>
                            </p>
                    </div>
                </> : <></>}
                </>: <>
                    {FormShowHide || ShowNoDataText ?  <></> : 
                    <button onClick={CheckData} className='py-2 px-5 -mt-7 rounded-full mx-auto block text-white bg-green-500'> Calculate Now </button>
                    }
                </>}
                {LCReport ? 
                    <button onClick={()=> {CheckData(); setLCReport("")}} className='py-2 px-5 -mt-7 mb-5 rounded-full mx-auto block text-white bg-green-500'> Calculate Another</button>
                 : null}

            </div>
            {LCReport ?<>
            <div className='bg-blue-300 p-5'>
                <p className='p-2 bg-blue-800 text-center text-white text-lg uppercase font-pt-serif'>{MaleName} with {FemaleName}</p>
                <ul>
                    {LCReport.love_report.map((item, index)=>(
                        <li className='text-base list-decimal ml-4 my-2 text-blue-800 font-light text-justify' key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            </>: <></>}
            {FormShowHide ?
                <div >
                    <form>
                        <div className='flex mt-2'>
                            {notificationMethods.map((item, index)=>(
                                <button key={index}
                                type='button'
                                className={`${TabActive === item.Name ? "bg-orange-100 text-gray-900 border-b-4 border-b-orange-500" : "bg-white border border-b-0 text-gray-800"} px-4 py-1 text-sm`}>{ language === "Hindi" ? ( item.NameHindi ) : ( item.Name ) }</button>
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
                                            { language === "Hindi" ? ( <>नाम</> ) : ( <>Name</> ) }
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
                                        { language === "Hindi" ? ( <>जन्म स्थान</> ) : ( <>Birth location</> ) }
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
                                    <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8">
                                        <div className="col-span-1">
                                            <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            { language === "Hindi" ? ( <>जन्म की तारीख</> ) : ( <>Date of Birth</> ) }
                                            </label>
                                            <div className="mt-2">
                                            {/* <Datetime
                                                inputProps={MaleinputProps}
                                                // onChange={handleDateChange}
                                                onChange={(e)=> setMaleDob(e.toString())}
                                                closeOnClickOutside={true}
                                                className="block w-full bg-gray-100 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                            /> */}
                                            <input
                                                type="date"
                                                name="name"
                                                id="name"
                                                value={MatchingDate}
                                                onChange={(value) => {setMatchingDate(value.target.value);}}
                                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Jane Smith"
                                            />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            { language === "Hindi" ? ( <>जन्म की तारीख</> ) : ( <>Date of Birth</> ) }
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="time"
                                                    name="name"
                                                    id="name"
                                                    value={MatchingTime}
                                                    onChange={(value) => {setMatchingTime(value.target.value); }}
                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Jane Smith"
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
                                            { language === "Hindi" ? ( <>नाम</> ) : ( <>Name</> ) }
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
                                        { language === "Hindi" ? ( <>जन्म स्थान</> ) : ( <>Birth location</> ) }
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
                                    <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8">
                                        <div className="col-span-1">
                                            <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            { language === "Hindi" ? ( <>जन्म की तारीख</> ) : ( <>Date of Birth</> ) }
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="date"
                                                    name="name"
                                                    id="name"
                                                    value={MatchingDateSec}
                                                    onChange={(value) => {setMatchingDateSec(value.target.value); }}
                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Jane Smith"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium leading-6 text-gray-900">
                                            { language === "Hindi" ? ( <>जन्म की तारीख</> ) : ( <>Date of Birth</> ) }
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="time"
                                                    name="name"
                                                    id="name"
                                                    value={MatchingTimeSec}
                                                    onChange={(value) => {setMatchingTimeSec(value.target.value);}}
                                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Jane Smith"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </>}
                        </div>
                        <div className='flex gap-5 items-center mt-5'>
                            {TabActive === "Male" ?
                            <button type="button" onClick={HandleTabActive} className="w-[100%] inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">{ language === "Hindi" ? ( <>आगे बढ़े</> ) : ( <>Next</> ) }</button>
                            :<>
                                <button type="button" onClick={()=> setTabActive("Male")} className="w-[100%] inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">{ language === "Hindi" ? ( <>पिछला</> ) : ( <>Prev</> ) }</button>
                                <button type="button" onClick={CheckData} className="w-[100%] inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">{ language === "Hindi" ? ( <>मिलाये</> ) : ( <>Match</> ) }</button>
                                {Loading ?
                                    <div role="status" className='flex justify-center items-center' >
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                    </div>
                                : null}
                            </>}
                        </div>
                    </form>
                </div>
            : <></>}
        </div>
        <div>
    </div>
    </div>
    </>
  )
}
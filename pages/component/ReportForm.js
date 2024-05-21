"use client"; 
import { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
// import Datepicker from "react-tailwindcss-datepicker";
import {API_KEY, Domain_Secrete_Code} from '../../config/config'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Alert } from "flowbite-react";
import { Male } from '../../config/SvgConst';
import getUserLocation from '../../config/GetLocation';
import { Combobox } from '@headlessui/react'
import { LocationData } from '../../config/location'



const GenderType = [
    { id: 'RepMale', title: 'Male' },
    { id: 'RepFemale', title: 'Female' },
  ]
  const people = [
    { id: 1, name: 'Leslie Alexander' },
    // More users...
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  
  export default function Questions() {  
    const [SearchLocation, setSearchLocation] = useState('')
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [Gender, setGender] = useState("Male");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [selectedBirthLocation, setSelectedBirthLocation] = useState(null)

    const [FormLoder, setFormLoder] = useState(false)
    const [FormHide, setFormHide] = useState(false)
    const [RegenRateButton, setRegenRateButton] = useState(false)

    const [Report, setReport] = useState("");


    // const filteredPeople = SearchLocation.length > 3 ? LocationData.filter((person) => { return person.city_name.toLowerCase().includes(SearchLocation.toLowerCase()) }) : SearchLocation ;
    // const filteredPeople = SearchLocation.length > 3
    // ? LocationData.filter((person) => person.city_name.toLowerCase().includes(SearchLocation.toLowerCase()))
    // : SearchLocation;

    function filterPeople(LocationData, SearchLocation) {
        return LocationData.filter((person) => {
            if (SearchLocation.length > 3 && person.city_name.toLowerCase().includes(SearchLocation.toLowerCase())) {
                return person;
            } else {
                return false;
            }
        });
    }
    // Then use the filterPeople function to get the filtered array
    const filteredPeople = filterPeople(LocationData, SearchLocation);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleChanges = date => {
    setSelectedDate(date);
  };

    const HandleReportSubmit = async (event) => {
        event.preventDefault();
        // setReport("")
        setFormLoder(true)


        // Current Location
        let Latitude
        let Longitude
        //  getUserLocation(function(location) {
        //     Latitude = location.Latitude; 
        //     Longitude = location.Longitude; 
        //     console.log(location.Longitude);
        // });

        // Promisify getUserLocation
        const getUserLocationPromise = () => {
            return new Promise((resolve, reject) => {
                getUserLocation(function(location) {
                    resolve(location);
                });
            });
        };
    
        // Await the location
        const location = await getUserLocationPromise();
    
        // Convert latitude and longitude to floating-point numbers
        Latitude = parseFloat(location.Latitude);
        Longitude = parseFloat(location.Longitude);
       

        // Date Formate 
        var formattedDateTime = ""
        if(selectedDate || selectedTime){
            if(!selectedDate) console.log("date not entered");
            if(!selectedTime) console.log("time not entered");
            const formattedDate = selectedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            const parts = formattedDate.split("/");
            const month = parts[0];
            const day = parts[1];
            const year = parts[2];
            const date = new Date(year, month - 1, day);
            const UpdatedDate = date.toISOString().slice(0,10);
            const formattedTime = selectedTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            formattedDateTime = `${UpdatedDate} ${formattedTime}`;
        }
    

        
        if (Latitude != '' && Longitude != '') {
            const data = {
                "apiKey": API_KEY,
                "name" : Name,
                "mobile" : parseInt(Mobile),
                "email" : Email,
                "userid" : 0,
                "reportid" : 2753207,
                "dob": formattedDateTime,
                "birthLatitude" : selectedBirthLocation.latitude,
                "birthLongitude" : selectedBirthLocation.longitude,
                "birthLocation" : selectedBirthLocation.city_name,
                "currentLongitude" : Longitude,
                "currentLatitude" : Latitude,
                "currentLocation" : "Noida",
                "shortReport": true
            }
            const apiUrl = "https://www.aapkikismat.com/report-api.php"
            try { 
            const response = await fetch(apiUrl, {
                method: "POST",
                headers:{
                'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responsezData = await response.json();
            console.log(responsezData);
            if(responsezData.success === true){
                setReport(responsezData.repotData)
                console.log(responsezData.repotData)
                setFormLoder(false)
                setFormHide(true)
                setRegenRateButton(false)
            }
            }catch (error) {
                console.log("here", error);
                setFormLoder(false)
                setFormHide(false)
            }
        }

    }
  return (    
    <>
    <div className='bg-white p-10 pt-5 rounded-xl'>
        {FormHide ? <></> : <>
            <form  className='relative'>
                {FormLoder ? <>
                    <div className='absolute w-full h-full z-50 backdrop-blur-sm flex justify-center items-center'>
                        <button type="button" class="bg-orange-500 text-white flex py-3 px-4 rounded-lg" disabled>
                            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader"><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg>
                            </svg>
                            <span>Processing...</span>
                        </button>
                    </div>
                </>:<></> }
                <div className={`${FormLoder ? "p-5" : "" }`}>
                    <h3 className='text-xl font-bold'>Generate <span className='text-orange-500'>Reports</span></h3>
                    <div className="space-y-4 mt-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        {GenderType.map((item) => (
                            <div key={item.id} className="flex items-center">
                            <input
                                id={item.id}
                                name="gender"
                                type="radio"
                                onChange={()=> setGender(item.title)}
                                className="h-4 w-4 border-gray-300 text-orange-500 focus:ring-orange-500"
                            />
                            <label htmlFor={item.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                {item.title}
                            </label>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className="relative mt-4">
                            <label htmlFor="first-name" className="block mb-2 text-sm font-medium leading-6 text-gray-900"> Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={Name}
                                onChange={(value)=>setName(value.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Vinay Bajrangi"
                            />
                        </div>
                        <div className="relative mt-4">
                            <label htmlFor="first-name" className="block mb-2 text-sm font-medium leading-6 text-gray-900">Email </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={Email}
                                onChange={(e) =>setEmail(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="VinayBajrangi@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="relative mt-4">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium leading-6 text-gray-900">Mobile</label>
                        <input
                            type="number"
                            name="mobile"
                            id="mobile"
                            value={Mobile}
                            onChange={(e) =>setMobile(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="+91 982497XXXX"
                        />
                    </div>
                    <Combobox as="div" value={selectedBirthLocation} onChange={setSelectedBirthLocation}>
                        <Combobox.Label className="block text-sm font-medium leading-6 mt-5 text-gray-900">Birth location</Combobox.Label>
                        <div className="relative mt-2">
                            <Combobox.Input
                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                            'relative cursor-default select-none py-2 px-4 pl-10',
                                            active ? 'bg-orange-500 text-white' : 'text-gray-900'
                                        )
                                        }
                                    >
                                        {({ active, selected }) => (
                                        <>
                                            <span className={classNames('block truncate', selected && 'font-semibold')}>{person.city_name}</span>

                                            {selected && (
                                            <span
                                                className={classNames(
                                                'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                active ? 'text-white' : 'text-indigo-600'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            )}
                                        </>
                                        )}
                                    </Combobox.Option>
                                    ))}
                                </Combobox.Options>
                            ): (
                                <>
                                {filteredPeople[0] ? <>
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <Combobox.Option                                    
                                            value={filteredPeople[0]}
                                            className={({ active }) =>
                                            classNames(
                                                'relative cursor-default select-none py-2 px-4 pl-10',
                                                active ? 'bg-orange-500 text-white' : 'text-gray-900'
                                            )
                                            }
                                        >
                                            {({ active, selected }) => (
                                            <>
                                                <span className={classNames('block truncate', selected && 'font-semibold')}>{filteredPeople[0].city_name}</span>

                                                {selected && (
                                                <span
                                                    className={classNames(
                                                    'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                    active ? 'text-white' : 'text-indigo-600'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                )}
                                            </>
                                            )}
                                        </Combobox.Option>
                                    </Combobox.Options>
                                    </>:<>
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <Combobox.Option
                                            value={filteredPeople}
                                            className={({ active }) =>
                                            classNames(
                                                'relative cursor-default select-none py-2 px-4 pl-10',
                                                active ? 'bg-orange-500 text-white' : 'text-gray-900'
                                            )
                                            }
                                        >
                                            {({ active, selected }) => (
                                                <>
                                                    <span className={classNames('block truncate', selected && 'font-semibold')}>{filteredPeople}</span>
                                                    {selected && (
                                                    <span
                                                        className={classNames(
                                                        'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                        active ? 'text-white' : 'text-indigo-600'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                    )}
                                                </>
                                            )}
                                            <span className={classNames('block truncate font-semibold')}>{filteredPeople}</span>
                                        </Combobox.Option>
                                    </Combobox.Options>
                                    </>}
                                </>
                            )}
                        </div>
                        </Combobox>
                    
                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                        <div className="">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Time of Birth
                            </label>
                            <div className="mt-2 flex">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleChanges}
                                    dateFormat="dd/MM/yyyy" 
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Time of Birth
                            </label>
                            <div className="mt-2 flex">
                                <DatePicker
                                    selected={selectedTime}
                                    onChange={handleTimeChange}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="h:mm aa"
                                    timeCaption="Time"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button onClick={HandleReportSubmit} type="submit" className="w-[100%] inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Submit</button>
                </div>
            </form>
        </>}
        {Report ? <>
            <div className='pt-10'>
                <div className='flex gap-5 pb-5'>
                    {RegenRateButton ? <></>:<>
                        <button type='button' className='rounded-md bg-orange-500 p-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        onClick={() => {setFormHide(false), setRegenRateButton(true)}}>Modify birth details</button>
                    </>}
                    {/* <button type='button' className='rounded-md bg-orange-500  p-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={HandleReportSubmit}>Refresh Report</button> */}
                </div>
                <p className='text-sm mt-5 text-justify'>{Report}</p>
            </div>
        </>:<></>}
        <div>
    </div>
    </div>
    </>
  )
}
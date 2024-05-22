import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { getLocalStorageItem, setLocalStorageItem } from "../../config/localStorage";
import CountryCode from "../../config/CountryCode"


import { API_KEY, Domain_Secrete_Code, API_NEW_URL } from "../../config/config";
import { LocationData } from "../../config/location";

("use client");

const GenderType = [
  { id: "RepMale", title: "Male" },
  { id: "RepFemale", title: "Female" },
];
const people = [
  { id: 1, name: "Leslie Alexander" },
  // More users...
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Questions({ reportID }) {
  const [SearchLocation, setSearchLocation] = useState("");
  const [Gender, setGender] = useState("Male");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [selectedBirthLocation, setSelectedBirthLocation] = useState(null);
  const [FormLoder, setFormLoder] = useState(false);
  const [FormHide, setFormHide] = useState(false);
  const [RegenRateButton, setRegenRateButton] = useState(false);
  const [Report, setReport] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  function filterPeople(LocationData, SearchLocation) {
    return LocationData.filter((person) => {
      if (
        SearchLocation.length > 2 &&
        person.city_name.toLowerCase().includes(SearchLocation.toLowerCase())
      ) {
        return person;
      } else {
        return false;
      }
    });
  }
  const filteredPeople = filterPeople(LocationData, SearchLocation);
  const [selectedDateTime, setselectedDateTime] = useState("Please Select DOB");
  const [SessionAction, setSessionAction] = useState(false)
  const [Otp, setOtp] = useState("");
  const [verifyOtpLoder, setVerifyOtpLoder] = useState(false);
  const [ShowOtp, setShowOtp] = useState(false)
  const [NewUser, setNewUser] = useState(false);
  const [NewUserData, setNewUserData] = useState(false);


  const [value, setValue] = useState("+91");
  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const handleDateChange = (date) => {
    setselectedDateTime(date);
  };

  let inputProps = {
    placeholder: selectedDateTime,
  };


  useEffect(()=>{
    const GetUserData = async () => {
        const SessionToken = getLocalStorageItem('tokenKey');
            if(SessionToken !== null) {
                setSessionAction(true)
            }
        };
    GetUserData()
},[])



const [otpSent, setOtpSent] = useState(false);
const [timer, setTimer] = useState(0);

useEffect(() => {
  let interval;
  if (otpSent) {
    setTimer(20); 
    interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setOtpSent(false)
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  }

  return () => clearInterval(interval);
}, [otpSent]);







  const HandleReportSubmit = async (event) => {



    let errorMessages = [];
    if (Name === "") {
      errorMessages.push("Please Enter Name");
    }
    if (Email === "") {
      errorMessages.push("Please Enter Your Email ID");
    }
    if (Mobile === "") {
      errorMessages.push("Please Enter Your Phone Number");
    }
    if (!selectedBirthLocation) {
      errorMessages.push("Please select Birth Location");
    }
    if (!selectedDateTime) {
      errorMessages.push("Please select Your Date of Birth");
    }

    setErrorMessage(errorMessages);

    if (errorMessages.length > 0) {
      setFormLoder(false);
      return;
    }

    setFormLoder(true);

    if(!SessionAction){
        const mobileData = {
            apiKey: API_KEY,
            mobile: parseInt(Mobile),
            countryCode: value.replace(/\+/g, '').replace(/\s/g, ''),
        };
        const apiUrl = `${API_NEW_URL}send-otp.php`;
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(mobileData),
          });
    
          const data = await response.json();

          if (data.success === true) {
            setOtpSent(true)
            if(data.newUser === true){
               setNewUser(true)
            }
            setShowOtp(true)
          }
          
        } catch (error) {}

        setFormLoder(false);
        return;
    }


    
    const convertDateTime = (dateTimeStr) => {
        const date = new Date(dateTimeStr);
        const updatedDate = date.toISOString().split('T')[0];
        const timeParts = date.toISOString().split('T')[1].split('.')[0];
        return `${updatedDate} ${timeParts}`;
    };

    const formattedDateTime = convertDateTime(selectedDateTime.toISOString())


    const data = {
      apiKey: API_KEY,
      name: Name,
      mobile: parseInt(Mobile),
      email: Email,
      userid: 0,
      reportid: reportID,
      dob: formattedDateTime,
      birthLatitude: selectedBirthLocation.latitude,
      birthLongitude: selectedBirthLocation.longitude,
      birthLocation: selectedBirthLocation.city_name,
      currentLongitude: Longitude,
      currentLatitude: Latitude,
      currentLocation: "",
      shortReport: true,
    };

    const apiUrl = "https://www.aapkikismat.com/report-api.php";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responsezData = await response.json();
      console.log(responsezData);
      if (responsezData.success === true) {
        setReport(responsezData.repotData);
        console.log(responsezData.repotData);
        setFormLoder(false);
        setFormHide(true);
        setRegenRateButton(false);
      }
    } catch (error) {
      console.log("here", error);
      setFormLoder(false);
      setFormHide(false);
    }
  };




  const VerifyOtp = async () => {
    setVerifyOtpLoder(true)

    const otpData = {
      mobile: parseInt(Mobile),
      otp: parseInt(Otp),
      apiKey: API_KEY,
    };

    const apiUrl = `${API_NEW_URL}login-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(otpData),
      });

      const data = await response.json();
      if(data.success === true){
        if(data.user){
            setUserId(data.user.id)
            setLocalStorageItem('UserDataKey', data.user)
        }
        if(NewUser === true ){
            setNewUserData(true)
        }else{
            setVerifyOtpLoder(false)
            if(pageslug === "login"){
                router.push("dashboard");
            }else{
                setAllProcessComplete(true);
            }
            const tokenLength = 32;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let token = '';
            for (let i = 0; i < tokenLength; i++) {
              token += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            setLocalStorageItem('tokenKey', token)
        }
      }
    } catch (error) {
      setVerifyOtpLoder(false)
    }
  };


  



  return (
    <>
        {NewUserData ?
            <form action="#" method="POST" className="space-y-6">
                <div className="space-y-4 mt-5 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {notificationMethods.map((notificationMethod) => (
                        <div key={notificationMethod.id} className="flex items-center">
                        <input
                            id={notificationMethod.id}
                            name="notification-method"
                            type="radio"
                            defaultChecked={notificationMethod.id === 'HmMale'}
                            onChange={(e)=> setGender(e.target.title)}
                            className="h-4 w-4 p-2 border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                            {notificationMethod.title}
                        </label>
                        </div>
                    ))}
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div className="mt-2 flex">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={Name}
                        onChange={(e) => {setName(e.target.value)}}
                        required
                        className="block flex-1 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Date of Birth
                        </label>
                        <div className="mt-2">
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleChanges}
                                dateFormat="dd/MM/yyyy" 
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Time of Birth
                        </label>
                        <div className="mt-2">
                            <DatePicker
                                selected={selectedTime}
                                onChange={handleTimeChange}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                dateFormat="h:mm aa"
                                timeCaption="Time"
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-5 ">
                    <button type="button"
                    onClick={UpdatedInfo}
                    className="flex w-max items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 focus-visible:ring-transparent">
                    Updated Info
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                </div>
            </form>
        : null}
      {ShowOtp ? <>
        <div className="flex flex-col justify-center items-center">
            <div className="max-w-96 w-full mb-2 mt-10">
                <p className="text-xl font-bold">Enter the otp sent on:</p>
                <p className="text-xl font-bold text-blue-800">{Mobile}</p>
            </div>
            
            <form action="#" method="POST" className="space-y-6 max-w-96 w-full">
                <div>
                    <div className="mt-2 flex">
                    <input
                        id="otp"
                        name="otp"
                        type="tel"
                        value={Otp}
                        placeholder='Enter Otp'
                        onChange={(e) => {setOtp(e.target.value)}}
                        autoComplete="tel"
                        required
                        className="block flex-1 p-2 rounded-r-md rounded-l-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    {verifyOtpLoder ? <>
                    <div role="status" className='flex justify-center items-center' >
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                        </div>
                    </>:<>
                    <button type="button"
                    onClick={VerifyOtp}
                    className="flex w-max items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 focus-visible:ring-transparent">
                    Verify Otp
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                    </>}
                    <div className="max-w-96 w-full mb-5">
                        {timer > 0 ? (
                        <p className="text-xs font-bold text-blue-800">Resend OTP in {timer} seconds</p>
                        ) : (
                        <button type="button" className='text-xs font-bold text-blue-800' onClick={() => HandleReportSubmit()}>Resend OTP</button>
                        )}
                    </div>
                </div>
            </form>
        </div>
      </>:<>
        <div className="bg-white p-10 pt-5 rounded-xl">
            {FormHide ? (
            <></>
            ) : (
            <>
                <form className="relative">
                {FormLoder ? (
                    <>
                    <div className="absolute w-full h-full z-50 backdrop-blur-sm flex justify-center items-center">
                        <button
                        type="button"
                        class="bg-orange-500 text-white flex py-3 px-4 rounded-lg"
                        disabled>
                        <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-loader">
                            <line x1="12" x2="12" y1="2" y2="6" />
                            <line x1="12" x2="12" y1="18" y2="22" />
                            <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                            <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                            <line x1="2" x2="6" y1="12" y2="12" />
                            <line x1="18" x2="22" y1="12" y2="12" />
                            <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                            <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                            </svg>
                        </svg>
                        <span>Processing...</span>
                        </button>
                    </div>
                    </>
                ) : (
                    <></>
                )}
                <div className={`${FormLoder ? "p-5" : ""}`}>
                    <h3 className="text-xl font-bold">
                    Generate <span className="text-orange-500">Reports</span>
                    </h3>
                    {ErrorMessage.length > 0 ? (
                    <div className="rounded-md bg-red-50 p-4">
                        <div className="flex">
                        <div className="flex-shrink-0">
                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">
                            There were {ErrorMessage.length} errors with your submission
                            </h3>
                            <div className="mt-2 text-sm text-red-700">
                            <ul role="list" className="list-disc space-y-1 pl-5">
                                {ErrorMessage.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    ) : null}
                    <div className="space-y-4 mt-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {GenderType.map((item) => (
                        <div key={item.id} className="flex items-center">
                        <input
                            id={item.id}
                            name="gender"
                            type="radio"
                            onChange={() => setGender(item.title)}
                            className="h-4 w-4 px-2 border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <label
                            htmlFor={item.id}
                            className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                            {item.title}
                        </label>
                        </div>
                    ))}
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                    <div className="relative mt-4">
                        <label
                        htmlFor="first-name"
                        className="block mb-2 text-sm font-medium leading-6 text-gray-900">
                        {" "}
                        Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        value={Name}
                        onChange={(value) => setName(value.target.value)}
                        className="block w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Vinay Bajrangi"
                        />
                    </div>
                    <div className="relative mt-4">
                        <label
                        htmlFor="first-name"
                        className="block mb-2 text-sm font-medium leading-6 text-gray-900">
                        Email{" "}
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="VinayBajrangi@gmail.com"
                        />
                    </div>
                    </div>
                    <div className="relative mt-4">
                        <label
                            htmlFor="first-name"
                            className="block mb-2 text-sm font-medium leading-6 text-gray-900">
                            Mobile
                        </label>
                        <div className="mt-2 flex">
                            <select
                                id="countryCode"
                                name="countryCode"
                                value={value} 
                                onChange={(e) => handleChange(e)}
                                className="block w-1/4 rounded-l-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2
                                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                {CountryCode.map((item, index)=>(
                                    <option key={index} value={item.code}>{item.code} {item.name}</option>
                                ))}
                            </select>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={Mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                autoComplete="tel"
                                required
                                className="block flex-1 rounded-r-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 
                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <Combobox
                    as="div"
                    value={selectedBirthLocation}
                    onChange={setSelectedBirthLocation}>
                    <Combobox.Label className="block text-sm font-medium leading-6 mt-5 text-gray-900">
                        Birth location
                    </Combobox.Label>
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
                                    "relative cursor-default select-none py-2 px-4 pl-10",
                                    active ? "bg-orange-500 text-white" : "text-gray-900",
                                )
                                }>
                                {({ active, selected }) => (
                                <>
                                    <span
                                    className={classNames(
                                        "block truncate",
                                        selected && "font-semibold",
                                    )}>
                                    {person.city_name}
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
                                        className={classNames(
                                            "block truncate",
                                            selected && "font-semibold",
                                        )}>
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
                                        className={classNames(
                                            "block truncate",
                                            selected && "font-semibold",
                                        )}>
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

                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div className="">
                        <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Date of Birth and Time
                        </label>
                        <div className="mt-2 flex">
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
                    onClick={HandleReportSubmit}
                    type="submit"
                    className="w-[100%] inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                    Submit
                    </button>
                </div>
                </form>
            </>
            )}
            {Report ? (
            <>
                <div className="pt-10">
                <div className="flex gap-5 pb-5">
                    {RegenRateButton ? (
                    <></>
                    ) : (
                    <>
                        <button
                        type="button"
                        className="rounded-md bg-orange-500 p-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => {
                            setFormHide(false), setRegenRateButton(true);
                        }}>
                        Modify birth details
                        </button>
                    </>
                    )}
                    {/* <button type='button' className='rounded-md bg-orange-500  p-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        onClick={HandleReportSubmit}>Refresh Report</button> */}
                </div>
                <p className="text-sm mt-5 text-justify">{Report}</p>
                </div>
            </>
            ) : (
            <></>
            )}
            <div></div>
        </div>
      </>}
        
    </>
  );
}

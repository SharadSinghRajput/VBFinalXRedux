import { useState, useEffect} from 'react'
import CountryCode from "../config/CountryCode"
import {API_KEY, API_NEW_URL, API_NEW_URL_LOGIN} from '../config/config'
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import Datetime from 'react-datetime';


import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';


const notificationMethods = [
    { id: 'HmMale', title: 'Male' },
    { id: 'HmFemale', title: 'Female' },
  ]

export default function Login({pageslug}) {
    const router = useRouter();
    const [value, setValue] = useState("+91");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [SendOtpLoder, setSendOtpLoder] = useState(false);
    const [verifyOtpLoder, setVerifyOtpLoder] = useState(false);
    const [OtpShow, setOtpShow] = useState(false);
    const [Otp, setOtp] = useState("");
    const [LogSucessFull, setLogSucessFull] = useState(false);
    const [NewUser, setNewUser] = useState(false);
    const [NewUserData, setNewUserData] = useState(false);

    const [Gender, setGender] = useState('Male');
    const [Name, setName] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [UserId, setUserId] = useState("");
    const [AllProcessComplete, setAllProcessComplete] = useState(false);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  
  const handleChanges = date => {
    setSelectedDate(date);
  };

  

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const SendOtp = async (ResendSignal) => {
    setSendOtpLoder(true)
    console.log(ResendSignal)
    if(ResendSignal){
      setOtpSent(true)
    }
    const mobileData = {
      apiKey: API_KEY,
      mobile: parseInt(phoneNumber),
      countryCode: value.replace(/\+/g, '').replace(/\s/g, ''),
    };


    if(mobileData.mobile === '') {
      setSendOtpLoder(false)
      return;
    }

    if (!/^\d{10}$/.test(mobileData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      setSendOtpLoder(false)
      return;
    }
    
    const apiUrl = `${API_NEW_URL_LOGIN}send-otp.php`;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mobileData),
      });

      const data = await response.json();
      console.log(data);
      
      if (data.success === true) {
        setOtpSent(true)
        if(data.newUser === true){
           setNewUser(true)
        }
        setOtpShow(true)
        setSendOtpLoder(false)
      }
      else {
        setSendOtpLoder(false)
      }
    } catch (error) {
      setSendOtpLoder(false)
    }
  };


  const VerifyOtp = async (e) => {
    e.preventDefault();
    setVerifyOtpLoder(true)

    const otpData = {
      mobile: parseInt(phoneNumber),
      otp: parseInt(Otp),
      apiKey: API_KEY,
    };


    if (otpData.mobile === '') {
      setVerifyOtpLoder(false)
      return;
    }

    if (!/^\d{10}$/.test(otpData.mobile)) {
      setVerifyOtpLoder(false)
      return;
    }
    const apiUrl = `${API_NEW_URL_LOGIN}login-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(otpData),
      });

      const data = await response.json();
      console.log(data)
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
      }else{
        alert( "Please check the OTP you entered.");
        setVerifyOtpLoder(false)
        return;
      }
    } catch (error) {
      setVerifyOtpLoder(false)
    }
  };



  const UpdatedInfo = async () => {

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


    const requestData = {
        apiKey : API_KEY,
        sid : UserId,
        name : Name,
        gender : Gender,
        dob : formattedDateTime,
        emailid : "",
        password : "",
        place_of_birth :"",
        birth_place_longitude : "",
        birth_place_latitude : "",
        current_location : "",
        current_clongitude : "",
        current_clatitude : "",
      };

      if (requestData.gender === "") {
        alert("Please choose your gender.", "", "error");
        return;
      }

      if (requestData.name === "") {
        alert( "Please enter your name.", "", "error");
        return;
      }
      console.log(requestData);

     

    const API_URL = `${API_NEW_URL}update-profile-api.php`;
    try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        const data = await response.json();
        console.log(data)
        if (data.success === true) {
            const tokenLength = 32;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let token = '';
            for (let i = 0; i < tokenLength; i++) {
              token += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            setLocalStorageItem('tokenKey', token)

            if(pageslug === "login"){
                router.push("dashboard");
            }else{
                setAllProcessComplete(true);
            }
        } else {
            alert( "Something went wrong. Please try again.", "", "error");
        }
      } catch (error) {
        alert( "Something went wrong. Please try again.", "", "error");
      }
  };

  

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
  
      

    return (
      <>      
      {AllProcessComplete ? <>
      <div className='flex-col flex justify-center items-center text-green-500 w-full'>

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
        
      </div>
      </>:<>
      {NewUserData ? <>
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
      </>:<>
        <form action="#" method="POST" className="space-y-6">
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
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
                value={phoneNumber}
                onChange={(e) => {setPhoneNumber(e.target.value)}}
                autoComplete="tel"
                required
                className="block flex-1 rounded-r-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
            </div>
            </div>
            {OtpShow ? <>
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
            <div>
              <div className="mt-2 flex">
                <div>
                  {timer > 0 ? (
                    <p>Resend OTP in {timer} seconds</p>
                  ) : (
                    <button type="button" className='text-sm' onClick={() => SendOtp("ResendSignal")}>Resend OTP</button>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
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
            </div>
            </>:<></>}

            {OtpShow ? <></>:<>
            <div className="flex justify-end">
                {SendOtpLoder ? <>
                <div role="status" className='flex justify-center items-center' >
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                    </div>
                </>:<>
                <button type="button"
                onClick={SendOtp}
                className="flex w-max items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 focus-visible:ring-transparent">
                Send Otp 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                </>}
            </div>
            </>}
        </form>
      </>}
      </>}
      </>
    )
  }
  
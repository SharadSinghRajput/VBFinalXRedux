import { useState } from 'react'
import { Switch } from '@headlessui/react'
import CountryCode from "../config/CountryCode"
import {API_KEY, API_NEW_URL} from '../config/config'
import { useRouter } from 'next/router';
import Image from 'next/image';
import LoginImage from './assets/images/4812.jpg';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const notificationMethods = [
  { id: 'HmMale', title: 'Male' },
  { id: 'HmFemale', title: 'Female' },
]


export default function Login() {
  const router = useRouter();
  const [value, setValue] = useState("+91");
  const [enabled, setEnabled] = useState(false)
  
  const [Name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Gender, setGender] = useState('Male');

  const [SecPassword, setSecPassword] = useState('');
  const [Password, setPassword] = useState('');
  const [isStrong, setIsStrong] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? 'text' : 'password';
  const [MatchedPassword, setMatchedPassword] = useState(false);
  const [ShowMatchMessage, setShowMatchMessage] = useState(false);
  const [FinalPassword, setFinalPassword] = useState("");

  const [ShowOTP, setShowOTP] = useState(false);
  const [verifyOtpLoder, setVerifyOtpLoder] = useState(false);
  const [Otp, setOtp] = useState("");



  const [ErrorMessage, setErrorMessage] = useState("");
  const [ShowUserExistent, setShowUserExistent] = useState(false);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const checkPasswordStrength = () => {
    if (Password.length < 8) {
      setIsStrong('low');
      return;
    }

  // Character types check
    const hasLowercase = /[a-z]/.test(Password);
    const hasUppercase = /[A-Z]/.test(Password);
    const hasDigit = /\d/.test(Password);
    const hasSpecial = /[!@#$%^&*()_=\[\]\-+{};:|<>,.?/]/.test(Password);

    // Determine strength level
    if (hasLowercase && hasUppercase && hasDigit && hasSpecial) {
      setIsStrong('strong');
    } else if ((hasLowercase || hasUppercase) && hasDigit) {
      setIsStrong('medium');
    } else {
      setIsStrong('low');
    }
  };
  
  const matchBothPassword = (SecPass) => {
    if (Password.length > 3) {
      if(Password === SecPass){
        setMatchedPassword(true)
        setFinalPassword(Password)
      }else{
        setMatchedPassword(false)
      }
      setShowMatchMessage(true)
    }else{
      setShowMatchMessage(false)
    }
  };


  const showMessage = (text) => {
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };
  


  const handleSignUp = async () => {
    const trimmedName = Name.trim();
    const trimmedEmail = Email.trim();
    const trimmedMob = phoneNumber.trim();
    const trimmedPassword = FinalPassword;

    if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      showMessage("Please enter a valid name");
      return;
    }
    if (!/^\d{10}$/.test(trimmedMob)) {
      showMessage("Please enter a valid 10-digit mobile number");
      setLoading(false);
      return;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmedEmail)) {
      showMessage( "Invalid email",);
      return;
    }
    console.log("step 1");

    const formData = {
      apiKey: API_KEY,
      name: trimmedName,
      email: trimmedEmail,
      phone: parseInt(trimmedMob),
      gender: Gender,
      password: trimmedPassword,
      dob: "1994-08-09 18:50"
    };
    const apiUrl = `${API_NEW_URL}/registration-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if(data.success === true){
        if(data.otpSentStatus === true){
          setShowOTP(true)
        }
      }else if(data.message === "User Already Exist") {
        setShowUserExistent("User already exists. Simply log in to explore.");
        // setTimeout(() => {
        //   router.push('login')
        // }, 3000);
      }
    } catch (error) {
      
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
        setVerifyOtpLoder(false)
        router.push("dashboard")
      }
    } catch (error) {
      setVerifyOtpLoder(false)
    }
  };

    return (
      <>
        <div className="flex min-h-[70vh] flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 py-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              {ShowOTP ? 
              <>
              <div>
                <p className='text-sm font-normal'>We have sent an OTP to your mobile number = {phoneNumber}. Please enter it to verify.</p>
                <div className="mt-10 flex">
                  <input
                    id="otp"
                    name="otp"
                    type="tel"
                    value={Otp}
                    placeholder='Enter Otp'
                    onChange={(e) => {setOtp(e.target.value)}}
                    autoComplete="tel"
                    required
                    className="block flex-1 rounded-r-md rounded-l-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
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
              </>
              :
              <div>
              <div>
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
              </div>
              <div className='mt-4'>
                {ErrorMessage? <p className='text-sm text-red-500'>{ErrorMessage}</p>:null}
              </div>
              <div className="mt-10">
                <div>
                  <form action="#" method="POST" className="space-y-3">
                  <div className="space-y-4 mt-5 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {notificationMethods.map((notificationMethod) => (
                        <div key={notificationMethod.id} className="flex items-center">
                        <input
                            id={notificationMethod.id}
                            name="notification-method"
                            type="radio"
                            defaultChecked={notificationMethod.id === 'HmMale'}
                            onChange={(e)=> setGender(e.target.title)}
                            className="h-4 w-4 border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                            {notificationMethod.title}
                        </label>
                        </div>
                    ))}
                    </div>
                    {/* <div>
                    <Switch.Group as="div" className="flex items-center gap-4">
                      <Switch.Label as="span" className="text-sm text-sky-500">
                        <span className="font-medium text-sky-500">Male</span>{' '}
                      </Switch.Label>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={classNames(
                          enabled ? 'bg-pink-500' : 'bg-sky-500',
                          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            enabled ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                      <Switch.Label as="span" className="text-sm text-pink-500">
                        <span className="font-medium text-pink-500">Female</span>{' '}
                      </Switch.Label>
                    </Switch.Group>
                    </div> */}

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

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                      <div className="mt-2 flex">
                        <select
                          id="countryCode"
                          name="countryCode"
                          value={value} 
                          onChange={(e) => handleChange(e)}
                          className="block w-1/4 rounded-l-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2
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
                          className="block flex-1 rounded-r-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                      <div className="mt-2 flex">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={Email}
                          onChange={(e) => {setEmail(e.target.value)}}
                          autoComplete="email"
                          required
                          className="block flex-1 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className='relative'>
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Create password</label>
                      <div className="mt-2 flex">
                        <input
                          id="password"
                          name="password"
                          type={inputType}
                          value={Password}
                          onChange={(e) => {setPassword(e.target.value), checkPasswordStrength()}}
                          autoComplete="email"
                          requtext-sm text-orange-500ired
                          className="block flex-1 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                        <button
                          type="button"
                          onClick={()=> setShowPassword(!showPassword)}
                          className="ml-2 bg-transparent border-0 p-0 cursor-pointer focus:outline-none absolute right-5 top-10 "
                        >
                          {showPassword ? 
                          <><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                          </>
                          
                           : <><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                           </>}
                        </button>
                      </div>
                      <div className='flex justify-end'>
                        {isStrong ?
                          <div className={`rounded-md ${isStrong === "low" ? "bg-red-100" : isStrong === "medium" ? "bg-orange-100"
                          : isStrong === "strong" ? "bg-green-100" : ""} p-1 px-4 mt-4`}>
                              <p className={`text-sm ${isStrong === "low" ? "text-red-500" : isStrong === "medium" ? "text-orange-500"
                          : isStrong === "strong" ? "text-green-500" : ""}`}>Password strength is <span className='font-bold'>{isStrong}</span></p>
                          </div>
                        :null}
                        
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Reenter Password</label>
                      <div className="mt-2 flex">
                        <input
                          id="SecPassword"
                          name="SecPassword"
                          type="password"
                          value={SecPassword}
                          onChange={(e) => {setSecPassword(e.target.value), matchBothPassword(e.target.value)}}
                          autoComplete="email"
                          required
                          className="block flex-1 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className='flex justify-end'>
                        {ShowMatchMessage ?
                          <div className={`rounded-md ${MatchedPassword ? "bg-green-100": "bg-red-100"} p-1 px-4 mt-4`}>
                              <p className={`text-sm ${MatchedPassword ? "text-green-500" : "text-red-500"}`}>{MatchedPassword ? "Password Matched" : "Password not Matched"}</p>
                          </div>
                        :null}
                      </div>
                    </div>
                    
                    
                    <button type="button"
                    onClick={handleSignUp}
                    className="flex w-max items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 focus-visible:ring-transparent">
                    Register
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                    {ShowUserExistent ? 
                      <div className='mt-14'>
                        <p className='text-sm font-medium mb-4'>{ShowUserExistent}</p>
                          <button type="button"
                          onClick={()=>router.push("login")}
                          className="flex w-max items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 focus-visible:ring-transparent">
                          Go to login page
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                          </button>
                      </div>
                    : null}
                  </form>
                </div>
              </div>
              </div>

              }
            </div>



          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
          <Image
              width={1200}
              height={500}
              className="absolute inset-0 h-full w-full object-cover"
              src={LoginImage}
              alt="Signup"
            />
          </div>
        </div>
      </>
    )
  }
  
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useDispatch, useSelector } from "react-redux";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { COMPILER_NAMES } from "next/dist/shared/lib/constants";
import { useRouter } from "next/router";
import { API_KEY, API_NEW_URL, API_NEW_URL_LOGIN, Domain_Secrete_Code } from "../config/config";
import { formatDate } from "../config/formatDatetoAstrologyAPI";
import fetchAstrologyData from "../config/getAstroAPI";
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";
import { LocationData } from "../config/location";
import { toggleStartSession } from "../redux/sessionSlice";
import LoginForm from "./LoginForm";
import MetaData from './pageAssets/MetaData';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AskQueForm({ data, role }) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [SearchLocation, setSearchLocation] = useState("");
  const [selectedBirthLocation, setSelectedBirthLocation] = useState(null);
  const [Gender, setGender] = useState("Male");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Question, setQuestion] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [selectedDateTime, setselectedDateTime] = useState("Please Select DOB");
  const [Loding, setLoding] = useState(false);
  const [HideFormShowPayment, setHideFormShowPayment] = useState(false);
  const [UnderId, setUnderId] = useState(false);
  const dispatch = useDispatch();
  
  const [GenratedData, setGenratedData] = useState("");
  const [CartReturnData, setCartReturnData] = useState("");
  const [PaymentSuccess, setPaymentSuccess] = useState(false);
  const [SessionAction, setSessionAction] = useState(false);
  const [MakePaymentLoder, setMakePaymentLoder] = useState(false);

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

  let inputProps = {
    placeholder: selectedDateTime,
    class: "w-full bg-gray-100 placeholder:text-gray-900",
  };

  const GetSession = async () => {
    const SessionToken = getLocalStorageItem("tokenKey");
    if (SessionToken !== null) {
      setSessionAction(true);
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };

  useEffect(() => {
    GetSession();
  }, []);

  const GetUserDetails = async () => {
    const UserDetails = getLocalStorageItem("UserDataKey");
    if (UserDetails !== null) {
      setUnderId(UserDetails.id);
    }
  };

  useEffect(() => {
    GetUserDetails();
  }, []);

  useEffect(() => {
    const GetUserData = async () => {
      const savedInputValue = getLocalStorageItem("AutoFill_ASKQ_Form");
      if (savedInputValue !== null) {
        setName(savedInputValue.name);
        setEmail(savedInputValue.email);
        setMobile(savedInputValue.mobile);
        setselectedDateTime(savedInputValue.dob);
        setSelectedBirthLocation(savedInputValue.BirthLocation);
        setQuestion(savedInputValue.question);
      }
    };
    GetUserData();
  }, []);

  const handleCancle = async (e) => {
    e.preventDefault();
    setHideFormShowPayment(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoding(true);
    let errorMessages = [];
    if (selectedDateTime === "Please Select DOB" || selectedDateTime === "")
      errorMessages.push("Please select your date of birth.");
    if (Name === "") errorMessages.push("Could you please enter your name?");
    if (selectedBirthLocation === "" || selectedBirthLocation === null)
      errorMessages.push("Please choose your place of birth.");
    if (Mobile === "") errorMessages.push("Can you enter your phone number?");
    if (Email === "") errorMessages.push("Please provide your email address.");
    if (Question === "") errorMessages.push("What question do you have?");

    setErrorMessage(errorMessages);
    if (errorMessages.length > 0) {
      setLoding(false);
      return;
    }

    const convertDateTime = (dateTimeStr) => {
      const date = new Date(dateTimeStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
      return formattedDate;
    };

    const dataHit = {
      apiKey: API_KEY,
      name: Name,
      mobile: parseInt(Mobile),
      email: Email,
      location: selectedBirthLocation.city_name,
      birthLongitude: selectedBirthLocation.latitude,
      birthLatitude: selectedBirthLocation.longitude,
      dob: convertDateTime(selectedDateTime),
      currentDateTime: convertDateTime(new Date()),
      question: Question,
    };

    const dataStore = {
      name: Name,
      mobile: parseInt(Mobile),
      email: Email,
      BirthLocation: selectedBirthLocation,
      dob: convertDateTime(selectedDateTime),
      question: Question,
    };

    const dataToAdd = {
      apiKey: API_KEY,
      domainSecreteCode: Domain_Secrete_Code,
      user_id: UnderId,
      page_id: role === "popup" ? 6890712 : data.reportID,
      quantity: 1,
      price: role === "popup" ? 151 : data.price[0].price,
      miniCart : true
    };

    setLocalStorageItem("AutoFill_ASKQ_Form", dataStore);
    const apiUrlCart = `${API_NEW_URL_LOGIN}cart-api.php`;
    try {
      const response = await fetch(apiUrlCart, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToAdd),
      });
      const dataAdd = await response.json();
      if(dataAdd.success === true){
        setCartReturnData(dataAdd.data)
      }

    } catch (error) {}
    const apiUrl = `${API_NEW_URL_LOGIN}ask-que-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataHit),
      });
      const data = await response.json();
      if (data.success === true) {
        setGenratedData(data)
        setLoding(false);
        setHideFormShowPayment(true);
      } else {
        setLoding(false);
      }
    } catch (error) {
      console.log(error);
      setLoding(false);
    }
  };

  const PlaceOrder = async () => {
    setMakePaymentLoder(true)
    const DataforForm = {
      apiKey: API_KEY,
      domainSecreteCode: Domain_Secrete_Code,
      userId: UnderId,
      cartId: CartReturnData[0].cartId,
      mobileNumer: Mobile,
      emailId: Email,
      personName: Name,
      address: "",
      state: "",
      city: "",
      pincode: "",
      country: "",
    };

    const apiUrl = `${API_NEW_URL_LOGIN}order-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DataforForm),
      });
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        setMakePaymentLoder(false)
        openPayModal();
      }else if(data.message === "Order Already Created") {
        openPayModal();
        setMakePaymentLoder(false)
        alert(data.message);
      }else{
        setMakePaymentLoder(false)
        alert("Something went wrong please try again");

      }
    } catch (error) {}
  };

  const options = {
    key: "rzp_test_bJShg4py6mnQe0",
    amount: data?.price[0]?.price * 100,
    name: "Vinay Bajrangi",
    description:
      "One should know how to judge a good astrologer than going by the name. The best astrologer is the one who believes more in Astrology based on the Karmic theory than only following rituals and remedies...",
    image: "https://www.vinaybajrangi.com/asset_frontend/img/logo.png",
    handler: function (response) {
      if(response.razorpay_payment_id){
        setPaymentSuccess(true)
      }
      // setLocalStorageItem('Pay_IDKey', response.razorpay_payment_id)
      // router.replace('/cart/place-order/order-details');
      console.log(response);
    },
    prefill: {
      name: Name,
      contact: Mobile,
      email: Email,
    },
    theme: {
      color: "#ea580c",
      hide_topbar: false,
    },
  };

  const openPayModal = () => {
    if (window.Razorpay) {
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
    };
    script.onerror = () => {
      console.log("Error loading Razorpay script");
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {data ? <MetaData data={data} />  : ""}
      <div className="pt-5">
        <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 pt-5 mb-5 rounded-lg`}>
          {role !== "popup" ?
            <>
              {data?.title ? (
                <>
                  <h1 className="text-lg font-bold mb-5">{data?.title}</h1>
                </>
              ) : (
                <></>
              )}
            </>
          : null}
          <div className="flex flex-col relative rounded-lg overflow-hidden">
            {HideFormShowPayment ? (
              <>
                <div className="mt-0 flow-root rounded-lg shadow-lg m-5 p-5">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                              Question
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                {PaymentSuccess ? "Answer" : "Price"}
                              
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                              {Question}
                            </td>
                            {PaymentSuccess ?
                            <>
                              <td className="whitespace-nowrap px-3 py-4 text-lg font-bold text-gray-900">
                                {GenratedData.data}
                              </td>
                            </>
                          : <>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {role === "popup" ? <>
                              151
                              </>:<>
                                {data ? (
                                  data.price[0] ? (
                                    <>
                                      {data.price[0].icon}
                                      {data.price[0].price}
                                    </>
                                  ) : (
                                    <></>
                                  )
                                ) : (
                                  <></>
                                )}
                              </>}
                              </td>
                          </>}
                          </tr>
                          
                        </tbody>
                      </table>
                      <div className="gap-5 flex justify-end mt-5">
                        {PaymentSuccess ?
                        <>
                          <button
                            className="bg-blue-600 p-2 px-4 text-white rounded-md"
                            onClick={()=> window.location.reload()}>
                            Ask another question
                          </button>
                        </>
                        : <>
                          <button
                            onClick={handleCancle}
                            className="bg-red-600 p-2 px-4 text-white rounded-md">
                            Cancel
                          </button>
                          <button
                            className="bg-blue-600 p-2 px-4 text-white rounded-md"
                            onClick={PlaceOrder}>
                            Make Payment
                          </button>
                          {MakePaymentLoder ?<>
                            <div role="status" className="flex justify-center items-center">
                              <svg
                                aria-hidden="true"
                                className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                              <span className="sr-only">Loading...</span>
                            </div>
                          </>:<></>}
                        </>}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {Loding ? (
                  <div className="absolute z-10 w-full h-full backdrop-blur-sm flex justify-center items-center">
                    <div role="status" className="flex justify-center items-center">
                      <svg
                        aria-hidden="true"
                        className="w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : null}
                <form
                  className={`z-0 relative transition-all ease-in duration-300 ${
                    Loding ? "p-5" : ""
                  } pt-0`}>
                  {ErrorMessage.length > 0 ? (
                    <div className="rounded-md bg-red-50 p-4 mb-10">
                      <div className="flex w-full">
                        <div className="flex-shrink-0">
                          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 flex-1">
                          <h3 className="text-sm font-medium text-red-800">
                            There were {ErrorMessage.length} errors with your submission
                          </h3>
                          <div className="mt-2 text-sm text-red-700">
                            <ul
                              role="list"
                              className="list-disc space-y-1 grid grid-cols-1 md:grid-cols-2 ml-5">
                              {ErrorMessage.map((item, index) => (
                                <li className="col-span-1" key={index}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 mb-1 text-gray-900">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full bg-gray-100 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium leading-6 mb-1 text-gray-900">
                        Mobile
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        value={Mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="block w-full bg-gray-100 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Your Mobile"
                      />
                    </div>
                    <div className="relative ">
                      <label
                        htmlFor="Email"
                        className="block text-sm font-medium leading-6 mb-1 text-gray-900">
                        Email
                      </label>
                      <input
                        type="text"
                        name="Email"
                        id="Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full bg-gray-100 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <Combobox
                      as="div"
                      value={selectedBirthLocation}
                      onChange={setSelectedBirthLocation}>
                      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
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
                                    <span
                                      className={classNames(
                                        "block truncate",
                                        selected && "font-semibold",
                                      )}>
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
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Date of Birth
                      </label>
                      <div className="mt-2">
                        <Datetime
                          inputProps={inputProps}
                          onChange={(e) => setselectedDateTime(e.toString())}
                          closeOnClickOutside={true}
                          className="block w-full bg-gray-100 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5"></div>

                  <div className="relative mt-7">
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Enter Your Question
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        value={Question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."></textarea>
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
            )}
            <div className="rounded-md bg-blue-50 p-4 mt-5">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    <b>Note:</b> Mind you that the answer will only be in 'Yes', 'No' or May be.
                    "Put in your question considering this."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openModal ? (
          <>
            <div className="flex flex-col justify-center items-center z-30 backdrop-blur-md bg-white/20 fixed left-0 top-0 w-full h-full">
              <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 w-96">
                <LoginForm />
              </div>
              <button
                onClick={() => {
                    setOpenModal(false),
                    GetSession(),
                    GetUserDetails(),
                    dispatch(toggleStartSession());
                }}
                className="-mt-5 w-96 flex items-center justify-center gap-2 rounded-b-md bg-white px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 focus-visible:ring-transparent">
                Close
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

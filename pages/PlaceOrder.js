
"use client"; 
import Image from 'next/image';
import {useEffect, useState, Fragment} from 'react'
import { getLocalStorageItem, setLocalStorageItem } from '../config/localStorage';
import {API_KEY, Domain_Secrete_Code, API_NEW_URL} from '../config/config'
import { useDispatch, useSelector } from 'react-redux';


import { useRouter } from 'next/router';

import { CheckIcon, ChevronUpDownIcon, XCircleIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const people = [
    { id: 1, name: 'Leslie Alexander' },
    // More users...
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Cart() {
    const router = useRouter();
    const countries = [
        {"name": "Afghanistan", "code": "AF"},
    {"name": "Åland Islands", "code": "AX"},
    {"name": "Albania", "code": "AL"},
    {"name": "Algeria", "code": "DZ"},
    {"name": "American Samoa", "code": "AS"},
    {"name": "AndorrA", "code": "AD"},
    {"name": "Angola", "code": "AO"},
    {"name": "Anguilla", "code": "AI"},
    {"name": "Antarctica", "code": "AQ"},
    {"name": "Antigua and Barbuda", "code": "AG"},
    {"name": "Argentina", "code": "AR"},
    {"name": "Armenia", "code": "AM"},
    {"name": "Aruba", "code": "AW"},
    {"name": "Australia", "code": "AU"},
    {"name": "Austria", "code": "AT"},
    {"name": "Azerbaijan", "code": "AZ"},
    {"name": "Bahamas", "code": "BS"},
    {"name": "Bahrain", "code": "BH"},
    {"name": "Bangladesh", "code": "BD"},
    {"name": "Barbados", "code": "BB"},
    {"name": "Belarus", "code": "BY"},
    {"name": "Belgium", "code": "BE"},
    {"name": "Belize", "code": "BZ"},
    {"name": "Benin", "code": "BJ"},
    {"name": "Bermuda", "code": "BM"},
    {"name": "Bhutan", "code": "BT"},
    {"name": "Bolivia", "code": "BO"},
    {"name": "Bosnia and Herzegovina", "code": "BA"},
    {"name": "Botswana", "code": "BW"},
    {"name": "Bouvet Island", "code": "BV"},
    {"name": "Brazil", "code": "BR"},
    {"name": "British Indian Ocean Territory", "code": "IO"},
    {"name": "Brunei Darussalam", "code": "BN"},
    {"name": "Bulgaria", "code": "BG"},
    {"name": "Burkina Faso", "code": "BF"},
    {"name": "Burundi", "code": "BI"},
    {"name": "Cambodia", "code": "KH"},
    {"name": "Cameroon", "code": "CM"},
    {"name": "Canada", "code": "CA"},
    {"name": "Cape Verde", "code": "CV"},
    {"name": "Cayman Islands", "code": "KY"},
    {"name": "Central African Republic", "code": "CF"},
    {"name": "Chad", "code": "TD"},
    {"name": "Chile", "code": "CL"},
    {"name": "China", "code": "CN"},
    {"name": "Christmas Island", "code": "CX"},
    {"name": "Cocos (Keeling) Islands", "code": "CC"},
    {"name": "Colombia", "code": "CO"},
    {"name": "Comoros", "code": "KM"},
    {"name": "Congo", "code": "CG"},
    {"name": "Congo, The Democratic Republic of the", "code": "CD"},
    {"name": "Cook Islands", "code": "CK"},
    {"name": "Costa Rica", "code": "CR"},
    {"name": "Croatia", "code": "HR"},
    {"name": "Cuba", "code": "CU"},
    {"name": "Cyprus", "code": "CY"},
    {"name": "Czech Republic", "code": "CZ"},
    {"name": "Denmark", "code": "DK"},
    {"name": "Djibouti", "code": "DJ"},
    {"name": "Dominica", "code": "DM"},
    {"name": "Dominican Republic", "code": "DO"},
    {"name": "Ecuador", "code": "EC"},
    {"name": "Egypt", "code": "EG"},
    {"name": "El Salvador", "code": "SV"},
    {"name": "Equatorial Guinea", "code": "GQ"},
    {"name": "Eritrea", "code": "ER"},
    {"name": "Estonia", "code": "EE"},
    {"name": "Ethiopia", "code": "ET"},
    {"name": "Falkland Islands (Malvinas)", "code": "FK"},
    {"name": "Faroe Islands", "code": "FO"},
    {"name": "Fiji", "code": "FJ"},
    {"name": "Finland", "code": "FI"},
    {"name": "France", "code": "FR"},
    {"name": "French Guiana", "code": "GF"},
    {"name": "French Polynesia", "code": "PF"},
    {"name": "French Southern Territories", "code": "TF"},
    {"name": "Gabon", "code": "GA"},
    {"name": "Gambia", "code": "GM"},
    {"name": "Georgia", "code": "GE"},
    {"name": "Germany", "code": "DE"},
    {"name": "Ghana", "code": "GH"},
    {"name": "Gibraltar", "code": "GI"},
    {"name": "Greece", "code": "GR"},
    {"name": "Greenland", "code": "GL"},
    {"name": "Grenada", "code": "GD"},
    {"name": "Guadeloupe", "code": "GP"},
    {"name": "Guam", "code": "GU"},
    {"name": "Guatemala", "code": "GT"},
    {"name": "Guernsey", "code": "GG"},
    {"name": "Guinea", "code": "GN"},
    {"name": "Guinea-Bissau", "code": "GW"},
    {"name": "Guyana", "code": "GY"},
    {"name": "Haiti", "code": "HT"},
    {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
    {"name": "Holy See (Vatican City State)", "code": "VA"},
    {"name": "Honduras", "code": "HN"},
    {"name": "Hong Kong", "code": "HK"},
    {"name": "Hungary", "code": "HU"},
    {"name": "Iceland", "code": "IS"},
    {"name": "India", "code": "IN"},
    {"name": "Indonesia", "code": "ID"},
    {"name": "Iran, Islamic Republic Of", "code": "IR"},
    {"name": "Iraq", "code": "IQ"},
    {"name": "Ireland", "code": "IE"},
    {"name": "Isle of Man", "code": "IM"},
    {"name": "Israel", "code": "IL"},
    {"name": "Italy", "code": "IT"},
    {"name": "Jamaica", "code": "JM"},
    {"name": "Japan", "code": "JP"},
    {"name": "Jersey", "code": "JE"},
    {"name": "Jordan", "code": "JO"},
    {"name": "Kazakhstan", "code": "KZ"},
    {"name": "Kenya", "code": "KE"},
    {"name": "Kiribati", "code": "KI"},
    {"name": "Korea, Republic of", "code": "KR"},
    {"name": "Kuwait", "code": "KW"},
    {"name": "Kyrgyzstan", "code": "KG"},
    {"name": "Latvia", "code": "LV"},
    {"name": "Lebanon", "code": "LB"},
    {"name": "Lesotho", "code": "LS"},
    {"name": "Liberia", "code": "LR"},
    {"name": "Libyan Arab Jamahiriya", "code": "LY"},
    {"name": "Liechtenstein", "code": "LI"},
    {"name": "Lithuania", "code": "LT"},
    {"name": "Luxembourg", "code": "LU"},
    {"name": "Macao", "code": "MO"},
    {"name": "North Macedonia", "code": "MK"},
    {"name": "Madagascar", "code": "MG"},
    {"name": "Malawi", "code": "MW"},
    {"name": "Malaysia", "code": "MY"},
    {"name": "Maldives", "code": "MV"},
    {"name": "Mali", "code": "ML"},
    {"name": "Malta", "code": "MT"},
    {"name": "Marshall Islands", "code": "MH"},
    {"name": "Martinique", "code": "MQ"},
    {"name": "Mauritania", "code": "MR"},
    {"name": "Mauritius", "code": "MU"},
    {"name": "Mayotte", "code": "YT"},
    {"name": "Mexico", "code": "MX"},
    {"name": "Micronesia, Federated States of", "code": "FM"},
    {"name": "Moldova, Republic of", "code": "MD"},
    {"name": "Monaco", "code": "MC"},
    {"name": "Mongolia", "code": "MN"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"},
    {"name": "Mozambique", "code": "MZ"},
    {"name": "Myanmar", "code": "MM"},
    {"name": "Namibia", "code": "NA"},
    {"name": "Nauru", "code": "NR"},
    {"name": "Nepal", "code": "NP"},
    {"name": "Netherlands", "code": "NL"},
    {"name": "Netherlands Antilles", "code": "AN"},
    {"name": "New Caledonia", "code": "NC"},
    {"name": "New Zealand", "code": "NZ"},
    {"name": "Nicaragua", "code": "NI"},
    {"name": "Niger", "code": "NE"},
    {"name": "Nigeria", "code": "NG"},
    {"name": "Niue", "code": "NU"},
    {"name": "Norfolk Island", "code": "NF"},
    {"name": "Northern Mariana Islands", "code": "MP"},
    {"name": "Norway", "code": "NO"},
    {"name": "Oman", "code": "OM"},
    {"name": "Pakistan", "code": "PK"},
    {"name": "Palau", "code": "PW"},
    {"name": "Palestinian Territory, Occupied", "code": "PS"},
    {"name": "Panama", "code": "PA"},
    {"name": "Papua New Guinea", "code": "PG"},
    {"name": "Paraguay", "code": "PY"},
    {"name": "Peru", "code": "PE"},
    {"name": "Philippines", "code": "PH"},
    {"name": "Pitcairn Islands", "code": "PN"},
    {"name": "Poland", "code": "PL"},
    {"name": "Portugal", "code": "PT"},
    {"name": "Puerto Rico", "code": "PR"},
    {"name": "Qatar", "code": "QA"},
    {"name": "Reunion", "code": "RE"},
    {"name": "Romania", "code": "RO"},
    {"name": "Russian Federation", "code": "RU"},
    {"name": "Rwanda", "code": "RW"},
    {"name": "Saint Helena", "code": "SH"},
    {"name": "Saint Kitts and Nevis", "code": "KN"},
    {"name": "Saint Lucia", "code": "LC"},
    {"name": "Saint Pierre and Miquelon", "code": "PM"},
    {"name": "Saint Vincent and the Grenadines", "code": "VC"},
    {"name": "Samoa", "code": "WS"},
    {"name": "San Marino", "code": "SM"},
    {"name": "Sao Tome and Principe", "code": "ST"},
    {"name": "Saudi Arabia", "code": "SA"},
    {"name": "Senegal", "code": "SN"},
    {"name": "Serbia and Montenegro", "code": "CS"},
    {"name": "Seychelles", "code": "SC"},
    {"name": "Sierra Leone", "code": "SL"},
    {"name": "Singapore", "code": "SG"},
    {"name": "Slovakia", "code": "SK"},
    {"name": "Slovenia", "code": "SI"},
    {"name": "Solomon Islands", "code": "SB"},
    {"name": "Somalia", "code": "SO"},
    {"name": "South Africa", "code": "ZA"},
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
    {"name": "Spain", "code": "ES"},
    {"name": "Sri Lanka", "code": "LK"},
    {"name": "Sudan", "code": "SD"},
    {"name": "Suriname", "code": "SR"},
    {"name": "Svalbard and Jan Mayen", "code": "SJ"},
    {"name": "Swaziland", "code": "SZ"},
    {"name": "Sweden", "code": "SE"},
    {"name": "Switzerland", "code": "CH"},
    {"name": "Syrian Arab Republic", "code": "SY"},
    {"name": "Taiwan", "code": "TW"},
    {"name": "Tajikistan", "code": "TJ"},
    {"name": "Tanzania, United Republic of", "code": "TZ"},
    {"name": "Thailand", "code": "TH"},
    {"name": "Timor-Leste", "code": "TL"},
    {"name": "Togo", "code": "TG"},
    {"name": "Tokelau", "code": "TK"},
    {"name": "Tonga", "code": "TO"},
    {"name": "Trinidad and Tobago", "code": "TT"},
    {"name": "Tunisia", "code": "TN"},
    {"name": "Turkey", "code": "TR"},
    {"name": "Turkmenistan", "code": "TM"},
    {"name": "Turks and Caicos Islands", "code": "TC"},
    {"name": "Tuvalu", "code": "TV"},
    {"name": "Uganda", "code": "UG"},
    {"name": "Ukraine", "code": "UA"},
    {"name": "United Arab Emirates", "code": "AE"},
    {"name": "United Kingdom", "code": "GB"},
    {"name": "United States", "code": "US"},
    {"name": "United States Minor Outlying Islands", "code": "UM"},
    {"name": "Uruguay", "code": "UY"},
    {"name": "Uzbekistan", "code": "UZ"},
    {"name": "Vanuatu", "code": "VU"},
    {"name": "Venezuela", "code": "VE"},
    {"name": "Vietnam", "code": "VN"},
    {"name": "Virgin Islands, British", "code": "VG"},
    {"name": "Virgin Islands, U.S.", "code": "VI"},
    {"name": "Wallis and Futuna", "code": "WF"},
    {"name": "Western Sahara", "code": "EH"},
    {"name": "Yemen", "code": "YE"},
    {"name": "Zambia", "code": "ZM"},
    {"name": "Zimbabwe","code": "ZN"}
    ]


    const [query, setQuery] = useState('')
    const [selectedPerson, setSelectedPerson] = useState(null)
  
    const filteredPeople =
      query === ''
        ? countries
        : countries.filter((person) => {
            return person.name.toLowerCase().includes(query.toLowerCase())
          })
  

          
    const products = useSelector(state => state.adProduct.products);
    const dispatch = useDispatch()
    console.log(products);

    const [productId, setProductId] = useState([])
    const [UnderId, setUnderId] = useState(false)
    const [cartId, setcartId] = useState("")
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [Address, setAddress] = useState("")
    const [City, setCity] = useState("")
    const [State, setState] = useState("")
    const [PostalCode, setPostalCode] = useState("")
    const [ErrorMessage, setErrorMessage] = useState("")
    const [PaymentLoder, setPaymentLoder] = useState(false)



    useEffect(() => {
        if (products && products.length > 0) {
            setcartId(products[0].cartId);
        } else{
            router.push("cart")
        }

    }, [products]); 


    useEffect(()=>{
        const GetUserDetails = async () => {
            const UserDetails = getLocalStorageItem('UserDataKey');
            if(UserDetails !== null) {
                setUnderId(UserDetails.id)
                setName(UserDetails.name)
                setPhone(UserDetails.phone)
                setEmail(UserDetails.email)
            }
        };
        GetUserDetails();
    },[])

    useEffect(()=>{
        const GetUserData = async () => {
            const SessionToken = getLocalStorageItem('tokenKey');
                if(SessionToken !== null) {
                }else{
                    router.push('login')
                }
            };
        GetUserData()
    },[])


    useEffect(() => {
        const updatedProductIds = products.map(item=> item.productId)
        setProductId(updatedProductIds)
    }, [products]);


    const [totalPrice, setTotalPrice] = useState(0);
    const [DealPrice, setDealPrice] = useState(0);
    const [MIcon, setMIcon] = useState("");

    useEffect(() => {
        if(products && products !== null && products[0] !== false){
            let totalPrice = 0;
            let DealPrice = 0;
            products.forEach(item => {
                if(item.productData?.repotPrice[0]){
                    totalPrice += item.productData?.repotPrice[0].price;
                    DealPrice += Number(item.productData?.repotPrice[0].dealPrice) || Number(item.productData?.repotPrice[0].price);
                    if(item.productData?.repotPrice[0].icon){
                        setMIcon(item.productData?.repotPrice[0].icon)
                    }
                }
            });
            setTotalPrice(totalPrice);
            setDealPrice(DealPrice);
        }
    }, [products]);

   

    const PlaceOrder = async () => {
        setPaymentLoder(true)
        const DataforForm = {
            apiKey : API_KEY,
            domainSecreteCode : Domain_Secrete_Code,
            userId : UnderId,
            cartId : cartId,
            mobileNumer : phone,
            emailId : email,
            personName : Name,
            address : Address,
            state : State,
            city : City,
            pincode : PostalCode,
            country : selectedPerson ? selectedPerson.name : ""
        }

            let errorMessages = [];
          if (DataforForm.mobileNumer === '') {
            errorMessages.push("Please Enter Mobile Number");
          }
          if (DataforForm.emailId === '') {
            errorMessages.push("Please Enter Your Email ID");
          }
          if (DataforForm.personName === '') {
            errorMessages.push("Please Enter Name");
          }
          if (DataforForm.address === '') {
            errorMessages.push("Please Enter Your Full Address, Including Street Name and Number");
          }
          if (DataforForm.state === '') {
            errorMessages.push("Please Enter the State or Province");
          }
          if (DataforForm.city === '') {
            errorMessages.push("Please Enter the City or Town Name");
          }
          if (DataforForm.pincode === '') {
            errorMessages.push("Please Enter the Postal Code or ZIP Code");
          }
          if (DataforForm.country === '') {
            errorMessages.push("Please Select Your Country from the Dropdown Menu");
          }
          
          setErrorMessage(errorMessages)
          if (errorMessages.length > 0) {
              setPaymentLoder(false)
              return;
            }
            
          


        console.log("DataforForm", DataforForm)
        const apiUrl = `${API_NEW_URL}order-api.php`
        try { 
            const response = await fetch(apiUrl, {
                method: "POST",
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(DataforForm)
            });
            const data = await response.json();
            if(data.success === true){
                setPaymentLoder(false)
                openPayModal()
                setLocalStorageItem('OrderDetailsKey', data.data)
            }else if(data.message === "Order Already Created"){
                openPayModal()
                setPaymentLoder(false)
                setLocalStorageItem('OrderDetailsKey', data.data)
            } else{
                setPaymentLoder(false)
                Alert("Something went wrong please try again")
            }
            console.log(data);
        }catch (error) {}
    }
    
    const options = {
        key: "rzp_test_bJShg4py6mnQe0",
        amount: DealPrice*100,
        name: "Vinay Bajrangi",
        description: "One should know how to judge a good astrologer than going by the name. The best astrologer is the one who believes more in Astrology based on the Karmic theory than only following rituals and remedies...",
        image: "https://www.vinaybajrangi.com/asset_frontend/img/logo.png",
        handler: function(response) {
            setLocalStorageItem('Pay_IDKey', response.razorpay_payment_id)
            router.replace('/cart/place-order/order-details');
        },
        prefill: {
            name: Name,
            contact: phone,
            email: email
        },
        notes: {
            address: Address
        },
        theme: {
            color: "#ea580c",
            hide_topbar: false
        }
    };


    const openPayModal = () => {
        if (window.Razorpay) {
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } else {
            console.log("Razorpay script not loaded");
        }
    };

        useEffect(() => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;
            script.onload = () => {
                console.log("Razorpay script loaded successfully");
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
        <div className="max-w-6xl mx-auto shadow-2xl bg-white p-10 mt-5 mb-5 rounded-lg">
            <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                <section aria-labelledby="cart-heading" className="lg:col-span-7">
                    <h2 id="cart-heading" className="sr-only">services In your Cart</h2>
                    <table className="min-w-full divide-y divide-gray-300">
                    {products ? <>
                        <thead>
                            <tr>
                                <td className=" py-2 text-lg text-gray-800 font-bold">Product</td>
                                <td className=" py-2 text-lg text-gray-800 font-bold">Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) => (
                            item.productData ?
                                <tr key={index}>
                                    <td className="py-2 text-xs text-gray-800"><h4 className="text-sm">{item.productData.question}</h4></td>
                                    <td className=" py-2 text-xs text-gray-800 flex font-bold">{MIcon && MIcon} {item.productData.repotPrice[0] && item.productData.repotPrice[0].price}</td>
                                </tr>
                            :null))}
                        </tbody>
                    </>:<></>}
                    </table>
                    <div className="flex justify-end pl-5" >
                    <button
                        type="button"
                        onClick={()=> router.push('cart')} 
                        className=" text-sm flex gap-2 font-normal text-orange-500 mt-5" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        Add more items</button>
                    </div>
                    <div className="bg-orange-50/50 p-5 mt-5">
                        <div className="pb-8">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Shipping Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                            {ErrorMessage.length > 0 ?
                                <div className="rounded-md bg-red-50 p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800">There were {ErrorMessage.length} errors with your submission</h3>
                                        <div className="mt-2 text-sm text-red-700">
                                            <ul role="list" className="list-disc space-y-1 pl-5">
                                                {ErrorMessage.map((item, index)=>(
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            : null}
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-xs font-normal leading-5 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            value={Name}
                                            onChange={(e)=> setName(e.target.value)}
                                            className="block w-full rounded-md border-[1px] border-orange-200 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="phone" className="block text-xs font-normal leading-5 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="number"
                                            value={phone}
                                            onChange={(e)=> setPhone(e.target.value)}
                                            className="block w-full rounded-md border-[1px] border-orange-200 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-xs font-normal leading-5 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={(e)=> setEmail(e.target.value)}
                                            className="block w-full rounded-md border-[1px] border-orange-200 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-xs font-normal leading-5 text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            value={Address}
                                            onChange={(e)=> setAddress(e.target.value)}
                                            className="block w-full rounded-md border-[1px] border-orange-200 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <div className="">
                                        <Combobox
                                            as="div"
                                            value={selectedPerson}
                                            onChange={(person) => {
                                                setQuery('')
                                                setSelectedPerson(person)
                                            }}
                                            >
                                            <Combobox.Label className="block text-xs font-normal leading-5 text-gray-900">Country</Combobox.Label>
                                            <div className="relative mt-2">
                                                <Combobox.Input
                                                className="block w-full rounded-md border-[1px] border-orange-200 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                                onChange={(event) => setQuery(event.target.value)}
                                                onBlur={() => setQuery('')}
                                                displayValue={(person) => person?.name}
                                                />
                                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </Combobox.Button>

                                                {filteredPeople.length > 0 && (
                                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {filteredPeople.map((person) => (
                                                    <Combobox.Option
                                                        key={person.id}
                                                        value={person}
                                                        className={({ active }) =>
                                                        classNames(
                                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                                        )
                                                        }
                                                    >
                                                        {({ active, selected }) => (
                                                        <>
                                                            <span className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

                                                            {selected && (
                                                            <span
                                                                className={classNames(
                                                                'absolute inset-y-0 right-0 flex items-center pr-4',
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
                                                )}
                                            </div>
                                        </Combobox>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-xs font-normal leading-5 text-gray-900">
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="region"
                                            id="region"
                                            value={State}
                                            onChange={(e)=> setState(e.target.value)}
                                            className="block w-full rounded-md border-[1px] border-orange-200 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="city" className="block text-xs font-normal leading-5 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            value={City}
                                            onChange={(e)=> setCity(e.target.value)}
                                            className="block w-full rounded-md border-[1px] border-orange-200 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="postal-code" className="block text-xs font-normal leading-5 text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            value={PostalCode}
                                            onChange={(e)=> setPostalCode(e.target.value)}
                                            className="block w-full rounded-md border-[1px] border-orange-200 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section
                    aria-labelledby="summary-heading"
                    className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                >
                    <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Price Details</h2>
                    <dl className="mt-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Price ({products.length} items)</dt>
                            <dd className="text-sm font-medium text-gray-900">{MIcon ? MIcon : null} {totalPrice}</dd>
                        </div>
                        {totalPrice - DealPrice === 0 ? <></>: <>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600"><span>Discount</span></dt>
                                <dd className="text-sm font-medium text-green-400">{MIcon ? MIcon : null} {totalPrice - DealPrice}</dd>
                            </div>
                        </>}
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                            <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                            <dd className="text-base font-medium text-gray-900">{MIcon ? MIcon : null} {DealPrice}</dd>
                        </div>
                        {totalPrice - DealPrice === 0 ? <></>: <>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-green-400">You will save {MIcon ? MIcon : null} {totalPrice - DealPrice} on this order</dt>
                            </div>
                        </>}
                    </dl>

                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={PlaceOrder}
                            className="w-full rounded-md border border-transparent bg-orange-500 px-4 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                            {PaymentLoder ?
                            <>
                            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                            </svg>

                            </>
                            :"Continue to payment"}
                        </button>
                    </div>
                </section>
            </form>
        </div>
    );
}
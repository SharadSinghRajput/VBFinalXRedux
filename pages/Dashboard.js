"use client"; 
import Image from 'next/image';
import {useEffect, useState, Fragment } from 'react'
import { getLocalStorageItem, setLocalStorageItem } from '../config/localStorage';
import { useRouter } from 'next/router';
import {  ArrowPathIcon, ArrowDownCircleIcon, ArrowUpCircleIcon, PlusSmallIcon,} from '@heroicons/react/20/solid'
import {API_KEY, API_NEW_URL, Domain_Secrete_Code} from '../config/config'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Invoices', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'Expenses', href: '#' },
]




export default function Dashboard({data}) {
  const [open, setOpen] = useState(false)
  const router = useRouter();
  const imageUrl = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80';
  const [UserId, setUserId] = useState("");
  const [Name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [gender, setGender] = useState("")
  const [MySavedReport, setMySavedReport] = useState("")
  const [DataShowinPopup, setDataShowinPopup] = useState("")

console.log(MySavedReport);
  
  const SavedReport = [
    { name: 'SavedReport', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
    { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
    { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
    { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
  ]
  const WishlistReport = [
    { name: 'WishlistReport', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
    { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
    { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
    { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
  ]
  const UpayCenter = [
    { name: 'UpayCenter', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
    { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
    { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
    { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
  ]
  
  const secondaryNavigation = [
    { name: 'My Saved Report', href: '#', current: true, TabValue: "SavedReport" },
    { name: 'Wishlist Report', href: '#', current: false, TabValue: "WishlistReport"},
    { name: 'Upay center', href: '#', current: false, TabValue: "UpayCenter"},
  ]
  
  const [TabChange, setTabChange] = useState("SavedReport")


  function formatDate(dateString) {
    const date = new Date(dateString);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Combine the parts into the desired format
    return `${day} ${month} ${year} - ${hours}:${minutes} ${ampm}`;
}
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


  useEffect(()=>{
    const GetUserDetails = async () => {
        const UserDetails = getLocalStorageItem('UserDataKey');
        if(UserDetails !== null) {
          console.log(UserDetails);
          setUserId(UserDetails.id)
          setName(UserDetails.name)
          setPhone(UserDetails.phone)
          setEmail(UserDetails.email)
          setDob(UserDetails.dob)
          setGender(UserDetails.gender)
        }
    };
    GetUserDetails();
},[])



const [OrderDetailsData, setOrderDetailsData] = useState("")
console.log(OrderDetailsData);
  useEffect(()=>{
    if(UserId){

      const OrderHistory = async () => {
        const dataToGet = {
          apiKey: API_KEY,
          domainSecreteCode: Domain_Secrete_Code,
          userId: UserId,
          returnOrder: true
        }

        const apiUrl = `${API_NEW_URL}order-api.php`;

        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToGet),
          });

          const data = await response.json();
          if(data.success){
            setOrderDetailsData(data.data);
          }
        } catch (error) {}

      };
      OrderHistory();

      const getUserDetails = async () => {
        const formData = {
          apiKey : API_KEY,
          userId : UserId
        };
        const apiUrl = `${API_NEW_URL}recent-generated-report-api.php`;
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          // console.log("data", data)
          if (data.success === true) {
            if(data.data){
              setMySavedReport(data.data)
              console.log(data.data)
            }
          } else {
            console.log(data.message, "", "error");
          }
        } catch (error) {
          console.log(error);
        };
      };
      getUserDetails();
    }
},[UserId])


const people = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

console.log("DataShowinPopup", DataShowinPopup )
  return (
    <>
    <div className='bg-white max-w-7xl mx-auto mt-5'>
      <div class="relative pb-32 pt-8 mt-6 flex items-center overflow-hidden rounded-2xl bg-[url('https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/assets/img/curved-images/curved0.jpg')] bg-cover bg-center p-0">
        {data ?
          data.breadcrumb ?
            <ol class="flex flex-wrap pt-1 pl-2 pr-4 mr-12 ml-5 bg-transparent rounded-lg sm:mr-16">
              <li class="leading-normal text-sm"><button class="text-white opacity-50" onClick={()=> router.push("/")}>Home</button></li>
              {data.breadcrumb.map((item, index)=>(
                <li key={index} onClick={()=> router.push(item.path)} class="text-sm pl-2 capitalize text-white leading-normal before:float-left before:pr-2 before:content-['/']" aria-current="page">{item.name}</li>
              ))}
            </ol>
          : null
        : null}
      </div>
      <div className="relative min-h-24 flex flex-auto justify-between min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-lg dark:shadow-soft-dark-xl dark:bg-gray-950 rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
        <div className='flex justify-start items-start gap-5'>
          <div class="text-base ease-soft-in-out h-19 w-19 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
          <Image src={imageUrl} width={50} height={50} alt="profile_image" class="w-full shadow-soft-sm rounded-xl" />
          </div>
          <div class="h-full">
            <h5 class="mb-1 dark:text-white">{Name}</h5>
            <p class="mb-0 font-normal leading-normal text-sm dark:text-white dark:opacity-60">{formatDate(dob)}</p>
          </div>
        </div>
        <div className='flex justify-end gap-5 items-center'>
          <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-ruler"><path d="m15 5 4 4"/><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/></svg>
            <p className='text-sm font-normal'>Edit Profile</p>
          </div>
          
        </div>
      </div>
      <div className="">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-12">
          <div className='shadow-2xl p-5 sm:col-span-12 rounded-2xl'>
            <div className="relative isolate overflow-hidden pt-5">
              
              <header className="pb-4 sm:pb-6">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 sm:flex-nowrap">
                  <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:leading-7">
                    {secondaryNavigation.map((item, index) => (
                      <button
                      onClick={()=> setTabChange(item.TabValue)} 
                      key={index} href={item.href} className={TabChange === item.TabValue ? 'text-orange-500' : 'text-gray-700'}>
                        {item.name}
                      </button>
                    ))}
                  </div>
                  <div className='flex gap-5'>
                    <button
                    onClick={()=> router.push("horoscope/daily-horoscope/aries.php")}
                      className="ml-auto flex items-center gap-x-1 rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm" >
                      <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />View Horoscope</button>
                    <button
                    onClick={()=> router.push("kundli.php")}
                      className="ml-auto flex items-center gap-x-1 rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm" >
                      <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />View Kundali Report</button>
                  </div>
                </div>
              </header>

              <div className="">
                <dl className="mx-auto flex max-w-7xl ">
                  <div
                    type="button"
                    className={`relative block ${TabChange === "SavedReport" ? "w-full p-12 border-[1px] border-dashed border-gray-300 opacity-100" : " opacity-0 w-0 p-0 overflow-hidden" }
                    transition-all ease-in-out duration-500 rounded-lg text-center flex flex-col gap-4 justify-center items-center`}
                  >
                    {MySavedReport ?
                      <ul
                        role="list"
                        className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                      >
                        {MySavedReport.map((item, index) => (
                          <li key={index}>
                            <button
                            onClick={()=> {setDataShowinPopup(item); setOpen(!open)}}
                            >
                              {item.featuredImage ?
                                <Image width={128} height={96} className="h-24 w-32 rounded-lg object-cover" src={item.featuredImage} alt={item.name} />
                                : 
                                <Image width={128} height={96} className="h-24 w-32 rounded-lg object-cover" src={item.bannerImage} alt={item.name} />
                              }
                              <h3 className="text-sm text-left tracking-tight mt-2 text-gray-900">{item.name}</h3>
                              <p className="text-xs text-left text-gray-600">{item.category}</p>
                            </button>
                          </li>
                        ))}
                      </ul>
                    : 
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-x"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9.5 10.5 5 5"/><path d="m14.5 10.5-5 5"/></svg>
                      <span className="mt-2 block text-sm font-semibold text-gray-900">No Data to Show Here</span>
                    </>
                    }
                  </div>
                  <button
                    type="button"
                    className={`relative block ${TabChange === "WishlistReport" ? "w-full p-12 border-[1px] border-dashed border-gray-300 opacity-100" : " opacity-0 w-0 p-0 overflow-hidden" } 
                    transition-all ease-in-out duration-500 rounded-lg text-center flex flex-col gap-4 justify-center items-center`}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-x"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9.5 10.5 5 5"/><path d="m14.5 10.5-5 5"/></svg>
                      <span className="mt-2 block text-sm font-semibold text-gray-900">No Data to Show Here</span>
                  </button>
                  <button
                    type="button"
                    className={`relative block ${TabChange === "UpayCenter" ? "w-full p-12 border-[1px] border-dashed border-gray-300 opacity-100" : " opacity-0 w-0 p-0 overflow-hidden" }
                    transition-all ease-in-out duration-500 rounded-lg text-center flex flex-col gap-4 justify-center items-center`}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-x"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9.5 10.5 5 5"/><path d="m14.5 10.5-5 5"/></svg>
                      <span className="mt-2 block text-sm font-semibold text-gray-900">No Data to Show Here</span>
                  </button>
                  </dl>
                  {/* <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                  {TabChange.map((stat, statIdx) => (
                    <div
                      key={stat.name}
                      className={classNames(
                        statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                        'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8'
                      )}
                    >
                      <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>
                      <dd
                        className={classNames(
                          stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                          'text-xs font-medium'
                        )}
                      >
                        {stat.change}
                      </dd>
                      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))} 
                  </dl>
                  */}
              </div>

              <div
                className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                  style={{
                    clipPath:
                      'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                  }}
                />
              </div>
            </div>
          </div>
          <div className='shadow-2xl min-h-96 p-5 sm:col-span-12 rounded-2xl mb-10'>
            <div>
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="mx-auto text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">Order Details</h2>
              </div>
              <div className="mt-6 overflow-hidden border-t border-gray-100">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto  lg:mx-0 lg:max-w-none">
                    <table className="w-full text-left">
                      <thead className="sr-only">
                        <tr>
                          <th>Amount</th>
                          <th className="hidden sm:table-cell">Client</th>
                          <th>More details</th>
                        </tr>
                      </thead>
                      <tbody>
                      {OrderDetailsData && OrderDetailsData.map((transaction, index) => (
                        <Fragment key={index}>
                          <tr className="text-sm leading-6 text-gray-900">
                            <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                              <div className='w-full flex justify-between gap-5 bg-gray-50 px-5 py-3'>
                                <div className='flex gap-2 justify-start items-center'>
                                  {transaction.orderStatus === "Pending" ?
                                  <span className='text-red-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                                  </span>
                                  :
                                  <span className='text-green-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                                  </span>
                                  }
                                  <p>Order Id: {transaction.oderid}</p>
                                  <span className='text-xs font-normal rounded-lg  px-2 py-0 ring-1 ring-orange-300'>{transaction.orderStatus}</span>
                                </div>
                                <p>Amount: {transaction.amount}</p>
                              </div>
                            </th>
                          </tr>
                          {transaction.paymentDetails && transaction.paymentDetails.map((item, index) => (
                            <tr key={index}>
                              <td className="relative py-5 px-6">
                                <div className="flex gap-x-6">
                                  <div className="flex-auto">
                                    <div className="flex flex-col items-start gap-x-3">
                                      <div className="text-sm font-medium leading-6 text-gray-900">Tracking Id: {item.trackingId}</div>
                                      <div className="rounded-md py-1 px-2 text-xs ring-1 ring-inset">{item.statusMessage}</div>
                                      
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                                <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                              </td>
                              <td className="hidden py-5 pr-6 sm:table-cell">
                                <div className="text-sm leading-6 text-gray-900">Order Status</div>
                                <div className="mt-1 text-xs leading-5 text-gray-500">{item.orderStatus}</div>
                              </td>
                              <td className="py-5 text-right">
                                <div className="flex justify-end">
                                  <span className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
                                    <span className="block sm:inline"> Bank Ref No</span>
                                  </span>
                                </div>
                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                  <span className="text-gray-500">{item.bankRefNo}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>

    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-white">
                          {DataShowinPopup.name}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 py-6 sm:px-6">
                      <div className='mb-2 ml-2 mr-2 text-sm text-black text-justify' dangerouslySetInnerHTML={{ __html: DataShowinPopup.generatedReport ? DataShowinPopup.generatedReport.replace(/\\r\\n/g, '<br/>') : '' }} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}

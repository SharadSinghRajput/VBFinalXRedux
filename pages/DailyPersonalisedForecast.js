
import React, { useEffect, useState, Fragment } from 'react';
import { formatDate } from '../config/formatDatetoAstrologyAPI'; 
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import fetchAstrologyData from '../config/getAstroAPI';
import { CheckCircleIcon} from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
export default function Kundli({data}) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(2);

    const clients = [
        {
          id: 1,
          name: 'Tuple',
          imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
          lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
        },
        {
          id: 2,
          name: 'SavvyCal',
          imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
          lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
        },
        {
          id: 3,
          name: 'Reform',
          imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
          lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
        },
      ]
      const statuses = {
        Paid: 'text-green-700 bg-green-50 ring-green-600/20',
        Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
        Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
      }

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
  
    // useEffect(() => {
    //     HandleGenrateChart();
    // },[])

    //console.log(HoroscopeChart);

  return (
    <>
    {data ? (
    <div className="">
        <div className={`bg-white mx-auto max-w-6xl mx-auto shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
            {data.title ? <>
                <h1 className='text-lg font-bold mb-5'>
                    {data.title}
                </h1>
            </>:<></>}
            <div className="flex flex-col">
                <div className="flex bg-[#4f6199] hover:bg-[#2e4280] rounded-lg transition p-1">
                    <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                    <button
                        type="button"
                        className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${
                        activeTab === 1 ? 'bg-[#091d5a] text-white' : 'bg-transparent text-white hover:white'
                        }`}
                        id="segment-item-1"
                        onClick={() => handleTabClick(1)}
                        aria-controls="segment-1"
                        role="tab"
                    >
                        Yesterday
                    </button>
                    <button
                        type="button"
                        className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${
                        activeTab === 2 ? 'bg-[#091d5a] text-white' : 'bg-transparent text-white hover:white'
                        }`}
                        id="segment-item-2"
                        onClick={() => handleTabClick(2)}
                        aria-controls="segment-2"
                        role="tab"
                    >
                        Today
                    </button>
                    <button
                        type="button"
                        className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${
                        activeTab === 3 ? 'bg-[#091d5a] text-white' : 'bg-transparent text-white hover:white'
                        }`}
                        id="segment-item-3"
                        onClick={() => handleTabClick(3)}
                        aria-controls="segment-3"
                        role="tab"
                    >
                        Tomorrow
                    </button>
                    </nav>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 rounded-xl border border-gray-200">
                    <div id="segment-1" className={`${activeTab === 1 ? 'block' : 'hidden'} border-gray-900/5 bg-gray-50 p-3`} role="tabpanel" aria-labelledby="segment-item-1">
                        <p className="text-gray-900">
                            This is the <em className="font-semibold text-gray-900">first</em> item's tab body.
                        </p>
                    </div>
                    <div id="segment-2" className={`${activeTab === 2 ? 'block' : 'hidden'} border-gray-900/5 bg-gray-50 p-3`} role="tabpanel" aria-labelledby="segment-item-2">
                        <p className="text-gray-900">
                            This is the <em className="font-semibold text-gray-900">second</em> item's tab body.
                        </p>
                    </div>
                    <div id="segment-3" className={`${activeTab === 3 ? 'block' : 'hidden'} border-gray-900/5 bg-gray-50 p-3`} role="tabpanel" aria-labelledby="segment-item-3">
                        <p className="text-gray-900">
                            This is the <em className="font-semibold text-gray-900">third</em> item's tab body.
                        </p>
                    </div>
                </div>
                {/* Recent client list*/}
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <ul role="list" className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                        {clients.map((client) => (
                        <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
                            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-3">
                            <img
                                src={client.imageUrl}
                                alt={client.name}
                                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                            />
                            <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                            
                            </div>
                            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                            <div className="flex justify-between gap-x-4 py-3">
                                <dt className="text-gray-500">Last invoice</dt>
                                <dd className="text-gray-700">
                                <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                                </dd>
                            </div>
                            <div className="flex justify-between gap-x-4 py-3">
                                <dt className="text-gray-500">Amount</dt>
                                <dd className="flex items-start gap-x-2">
                                <div className="font-medium text-gray-900">{client.lastInvoice.amount}</div>
                                <div
                                    className={classNames(
                                    statuses[client.lastInvoice.status],
                                    'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                    )}
                                >
                                    {client.lastInvoice.status}
                                </div>
                                </dd>
                            </div>
                            </dl>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    ) : (
        <></>
    )}
    </>
  )
}

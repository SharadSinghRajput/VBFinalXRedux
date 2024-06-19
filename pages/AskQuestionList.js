
import React, { useEffect, useState, Fragment } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import HoroscopeFetchAPI from '../config/horoscopeFetchAPI';
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import fetchAstrologyData from '../config/getAstroAPI';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
export default function Kundli({data}) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(2);
    const pageLanguage = data ? data.language || false : false;

  return (
    <>
    {data ? (
    <div className="pt-5">
        <div className={`bg-white mx-auto max-w-6xl mx-auto shadow-2xl p-5 pt-5 mb-5 rounded-lg`}>
            {data.title ? <>
                <h1 className='text-lg font-bold mb-5'>
                    {data.title}
                </h1>
            </>:<></>}
            <div className="flow-root">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {data.nestedPages.map((item) => (
                                    <tr key={item.name}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.name}</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.price[0].icon} {item.price[0].price}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <button onClick={()=>router.push(item.path)} className='text-indigo-600 hover:text-indigo-900'>Click to Ask</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
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

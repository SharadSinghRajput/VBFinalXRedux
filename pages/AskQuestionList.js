
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

    const clients = [
        {
          id: 1,
          name: 'Tuple',
          imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
          lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '2,000.00', currency: "$", status: 'Paid' },
        },
        {
          id: 2,
          name: 'SavvyCal',
          imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
          lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '14,000.00', currency: "$", status: 'Paid' },
        },
        {
          id: 3,
          name: 'Reform',
          imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
          lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '7,600.00', currency: "$", status: 'Paid' },
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
  

    const [ZodiacSign, setZodiacSign] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [currentDay, setcurrentDay] = useState("today");
    const [Forecast, setForecast] = useState("");

    useEffect(() => {
        const GetDataThird = getLocalStorageItem('AstroDetailKey');
        const AstroDet = getLocalStorageItem('AstroAPIHitDataKey');
        if(GetDataThird && AstroDet){
            fetchData(AstroDet)
        }
    }, []); 

    const fetchData = async (AstroDet) => {
        
        const data = {
            day: AstroDet.dobData.day,
            month: AstroDet.dobData.month,
            year: AstroDet.dobData.year,
            hour: AstroDet.dobData.hour,
            min: AstroDet.dobData.min,
            lat: AstroDet.birth_place_latitude,
            lon: AstroDet.birth_place_longitude,
            tzone: AstroDet.tzone,
        };
        try {
            const VimshottariDashaData = await fetchAstrologyData(data, `biorhythm`);
            console.log("VimshottariDashaData",  VimshottariDashaData);
        } catch (error) {
        }
    }
    // const fetchData = async (sign, tZone) => {
    //     const ZodiacSign = sign.toLowerCase()
    //     const data = {
    //         timezone: tZone
    //     }
    //     try {
    //         const VimshottariDashaData = await fetchAstrologyData(data, `sun_sign_prediction/daily/${ZodiacSign}`);
    //         setForecast(VimshottariDashaData);
    //     } catch (error) {
    //     }
    // }



    // useEffect(() => {
    //     console.log("astrologyData");
    //     const GetData = getLocalStorageItem('AstroAPIHitDataKey');
    //     const GetDataSec = getLocalStorageItem('KundliFromDataKey');
    //     const GetDataThird = getLocalStorageItem('AstroDetailKey');

    //     if(GetData || GetDataSec || GetDataThird){
    //         console.log("astrologyData 2");
    //         const CapitalizedZodiac = GetDataThird.sign
    //         const currentDate = GetDataSec.cdate

    //         setZodiacSign(CapitalizedZodiac)
    //         setCurrentDate(currentDate)

    //         fetchCategoryWiseData(CapitalizedZodiac, currentDate)
    //     }

    // }, []); 

    // const fetchCategoryWiseData = async (Zodiac, currentDate) => {
    //     console.log("astrologyData 3");
    //     const Sign = Zodiac || ZodiacSign
    //     const date = currentDate || currentDate
    //     const type = false

    //     let [datePart, timePart] = date.split(' ');
    //     let [month, day, year] = datePart.split('-');
    //     let formattedDate = `${year}-${month}-${day}`;
    //     console.log(formattedDate);
    //     try {
    //         const astrologyData = await HoroscopeFetchAPI(Sign, type, currentDay, formattedDate, pageLanguage);
    //         console.log(astrologyData);
            
            
    //       } catch (error) {
    //         return null;
    //       }
    // };

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
            <div className="flex flex-col">
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
                                <dt className="text-gray-500">Price: </dt>
                                <dd className="flex items-start gap-x-2">
                                <div
                                    className={classNames(
                                    statuses[client.lastInvoice.status],
                                    'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                    )}
                                >{client.lastInvoice.currency} {client.lastInvoice.amount}
                                </div>
                                </dd>
                            </div>
                            <a
                                type="button"
                                className="inline-block items-center cursor-pointer text-center gap-x-1.5 rounded-md bg-orange-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mb-5 w-full mt-2"
                            >
                                Click to Ask Question
                            </a>
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

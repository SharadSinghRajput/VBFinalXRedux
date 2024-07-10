
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

    
      const statuses = {
        Paid: 'text-green-700 bg-green-50 ring-green-600/20',
        Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
        Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
      }

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
  

    const [AstroDetail, setAstroDetail] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [currentDay, setcurrentDay] = useState("today");
    const [Forecast, setForecast] = useState("");
    const [OverAll, setOverAll] = useState("");
    const [Love, setLove] = useState("");

    useEffect(() => {
        const GetDataThird = getLocalStorageItem('AstroDetailKey');
        // const AstroDet = getLocalStorageItem('AstroAPIHitDataKey');
        if(GetDataThird){
            fetchDataTodat("today", GetDataThird)
            setAstroDetail(GetDataThird)
        }
    }, []); 



    const fetchDataTodat = async (item, sign) => {
        const date = new Date().toLocaleString();
        const [DatePart, timePart] = date.split(',')
        const [day, month, year] = DatePart.split('/');
        const finalDate = `${year}-${month}-${day}`
        const horoscopeperiod = sign ? sign : AstroDetail.sign
        try {
            const astrologyData = await HoroscopeFetchAPI(AstroDetail.sign, "overall", horoscopeperiod, finalDate, pageLanguage);
            console.log(astrologyData);
            setOverAll(astrologyData);
            const GetLoveAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "love", horoscopeperiod, finalDate, pageLanguage);
            setLove(GetLoveAstroData);
        } catch (error) {}
    }

    const fetchDataonClick = async (item) => {
        const date = new Date().toLocaleString();
        const [DatePart, timePart] = date.split(',')
        const [day, month, year] = DatePart.split('/');
        const finalDate = `${year}-${month}-${day}`
        try {
            const astrologyData = await HoroscopeFetchAPI(AstroDetail.sign, "overall", item, finalDate, pageLanguage);
            console.log(astrologyData);
            setOverAll(astrologyData);
            const GetLoveAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "love", item, finalDate, pageLanguage);
            setLove(GetLoveAstroData);
        } catch (error) {}
    }
  

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
                    {/* <button
                        type="button"
                        className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${
                        activeTab === 1 ? 'bg-[#091d5a] text-white' : 'bg-transparent text-white hover:white'
                        }`}
                        id="segment-item-1"
                        onClick={() => {handleTabClick(1), fetchDataonClick("yesterday")}}
                        aria-controls="segment-1"
                        role="tab"
                    >
                        Yesterday
                    </button> */}
                    <button
                        type="button"
                        className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${
                        activeTab === 2 ? 'bg-[#091d5a] text-white' : 'bg-transparent text-white hover:white'
                        }`}
                        id="segment-item-2"
                        onClick={() => {handleTabClick(2), fetchDataTodat("today", undefined)}}
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
                        onClick={() => {handleTabClick(3), fetchDataonClick("tomorrow")}}
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
                            {OverAll}
                            <p className='font-bold'>Love</p>
                            {Love}
                        </p>
                    </div>
                    <div id="segment-3" className={`${activeTab === 3 ? 'block' : 'hidden'} border-gray-900/5 bg-gray-50 p-3`} role="tabpanel" aria-labelledby="segment-item-3">
                        <p className="text-gray-900">
                            {OverAll}
                            <p className='font-bold'>Love</p>
                            {Love}
                        </p>
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

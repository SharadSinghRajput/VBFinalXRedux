
"use client"; 
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import 'swiper/css'; 

import allaboutVastu from "./assets/images/Solutions/allabout-vastu.png"
import ba from "./assets/images/Solutions/ba.png"
import birthTimeCorrection from "./assets/images/Solutions/birth-time-correction.png"
import btc from "./assets/images/Solutions/btc.png"
import careerAstrology from "./assets/images/Solutions/career-astrology.png"
import childrenAstrology from "./assets/images/Solutions/children-astrology.png"
import courtLegalIssues from "./assets/images/Solutions/court-legal-Issues.png"
import fileIconsRing from "./assets/images/Solutions/file-icons_ring.png"
import foreignSettlement from "./assets/images/Solutions/foreign-settlement.png"
import Ha from "./assets/images/Solutions/ha.png"
import Icons from "./assets/images/Solutions/icons.png"
import loanDebt from "./assets/images/Solutions/loan-debt.png"
import pastlifeReadings from "./assets/images/Solutions/pastlife-readings.png"
import propertyAstrology from "./assets/images/Solutions/property-astrology.png"
import vfc from "./assets/images/Solutions/vfc.png"
import { CheckCircleIcon } from '@heroicons/react/20/solid'
// import HoroscopeIcon from '../config/HoroscopeIcon';
import QuestionsData from "./Questions"
import { format } from 'date-fns';
import fetchAstrologyData from '../config//getAstroAPI';
import HoroscopeFetchAPI from '../config/horoscopeFetchAPI';
import VedicAstrologyCalculators from "./VedicAstrologyCalculators"
import MetaData from './pageAssets/MetaData';
import Description from './pageAssets/Description';
import {MAIN_URL} from '../config/config';
import Holder from './pageAssets/Holder';
import { Horoscope } from '../config/Horoscope';


export default function DailyHoroscopeDetailed({data}) {
    useEffect(() => {
        if(!data)return
    }, [])

    const zodiacSign = data ? data.zodiacSign || false : false;

    // console.log("zodiacSign", zodiacSign);
    const day = data ? data.zodiacPeriod || false : false;
    const pageLanguage = data ? data.language || false : false;
    const bilingualData = data ? data.bilingualData || false : false;
    const [horoscopeData, setHoroscopeData] = useState("In Process");
    const [response, setResponse] = useState("In Process");
    const [activeButton, setActiveButton] = useState(null);
    const [activeButtonDay, setActiveButtonDay] = useState(null);
    const [changeText, setChangeText] = useState("love");

    const router = useRouter();
    let today = new Date();
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const formattedDate = format(today, "do MMM yyyy");
    const currentDay = day;
    let TotalDays = formattedDate;

    function formatDate(date) {
        return format(date, "do MMM yyyy");
    }
    let changeDate = formattedDate;
    // const [changeDate, setChangeDate] = useState(formattedDate);
    const CapitalizedZodiac = `${zodiacSign ?? ''}`.charAt(0).toUpperCase() + `${zodiacSign ?? ''}`.slice(1);
    
    const fetchCategoryWiseData = async (CapitalizedZodiac,currentDay,type,currentDate) => {
        try {
            const astrologyData = await HoroscopeFetchAPI(CapitalizedZodiac, type, currentDay, currentDate, pageLanguage);
            // console.log(type);
            if(astrologyData){
                return astrologyData;
            }else{
                return false;
            }
        } catch (error) {
            //console.error("Error fetching horoscope data:", error);
            return null; // Return null or handle the error as needed
        }
    };
    
    const HitTheHoroscopeFunction = async (CapitalizedZodiac, currentDay, type, currentDate) => {
        const data = await fetchCategoryWiseData(CapitalizedZodiac, currentDay, type, currentDate);
        setHoroscopeData(data);
    };    
    
    switch (day) {
        case 'tomorrow':
        today.setDate(today.getDate() + 1); // Increment by 1 day for tomorrow
        const formattedData = format(today, "do MMM yyyy");
        TotalDays = formattedData;
        changeDate = TotalDays;
        HitTheHoroscopeFunction(CapitalizedZodiac, currentDay, 'overall', currentDate);
        break;
        case 'weekly':
        const firstDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
        const lastDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);

        const formattedStartOfWeek = formatDate(firstDayOfWeek);
        const formattedEndOfWeek = formatDate(lastDayOfWeek);

        TotalDays = `${formattedStartOfWeek} to ${formattedEndOfWeek}`;
        changeDate = TotalDays;
        HitTheHoroscopeFunction(CapitalizedZodiac, currentDay, 'overall', currentDate);
        break;
        case 'monthly':   
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        
        const formattedStartOfMonth = formatDate(firstDayOfMonth);
        const formattedEndOfMonth = formatDate(lastDayOfMonth);
        
        TotalDays = `${formattedStartOfMonth} to ${formattedEndOfMonth}`;
        HitTheHoroscopeFunction(CapitalizedZodiac, currentDay, 'overall', currentDate);
        break;
        case 'yearly':
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const lastDayOfYear = new Date(today.getFullYear(), 11, 31);
        
        const formattedStartOfYear = formatDate(firstDayOfYear);
        const formattedEndOfYear = formatDate(lastDayOfYear);
        
        TotalDays = `${formattedStartOfYear} to ${formattedEndOfYear}`;
        HitTheHoroscopeFunction(CapitalizedZodiac, currentDay, 'overall', currentDate);
        break;
        default:
            const formattedDates = format(today, "do MMM yyyy");
            TotalDays = formattedDates;
            changeDate = TotalDays;
            HitTheHoroscopeFunction(CapitalizedZodiac, currentDay, 'overall', currentDate);
    }
                    
    const CapitalizedCurrentDay = `${currentDay ?? ''}`.charAt(0).toUpperCase() + `${currentDay ?? ''}`.slice(1);
    
    // Find the object corresponding to the zodiac sign
   

    const handleButtonClick = async (type) => {
        setResponse("In Process");
        const data = await fetchCategoryWiseData(CapitalizedZodiac,currentDay,type,currentDate);
        setResponse(data);
        setActiveButton(type);
        setChangeText(type);
    };

    useEffect(() => {

        const fetchHoroDataData = async () => {
            try {
                const data = await fetchHoroscopeData();
                if (data !== null) {
                setHoroscopeData(data);
                } else {
                // Handle error or show a message if needed
                }
            } catch (error) {
                console.error("Error fetching horoscope data:", error);
                // Handle error if needed
            }
        };

        const fetchData = async () => {
            try {
            const data = await fetchCategoryWiseData(CapitalizedZodiac,currentDay,'love',currentDate);
            setResponse(data);
            setActiveButton('love');
            setActiveButtonDay(currentDay);
            setChangeText('love');
            } catch (error) {
            // Handle errors if needed
            console.error("Error fetching data:", error);
            }
        };

        fetchData();
        fetchHoroDataData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zodiacSign]);      

    const buttonStyle = (type) => {
        if (activeButton === type) {
            return "bg-orange-500 text-white";
        } else {
            return "bg-white text-orange-600";
        }
    };    
    
    const buttonStyleDay = (date) => {
        if (activeButtonDay === date) {
            return "bg-orange-500 text-white";
        } else {
            return "bg-white text-orange-600";
        }
    };    

    if(bilingualData){
        
    }


    const handleClick = (day) => {
        setActiveButtonDay(day);
        changeDate = TotalDays;
        setHoroscopeData("In Process");
        //console.log(TotalDays);
        router.push(`/horoscope/${day}-horoscope/${zodiacSign}.php`);
    };

    async function fetchHoroscopeData() {
        try {
          const astrologyData = await HoroscopeFetchAPI(CapitalizedZodiac, 'overall', currentDay, currentDate, pageLanguage);
          if(astrologyData){
            return astrologyData;
          }else{
            return false;
          }
        } catch (error) {
          //console.error("Error fetching horoscope data:", error);
          return null; // Return null or handle the error as needed
        }
      }

    const Services = [
        { name : "Consultation", ImgUrl: "/asset_frontend/img/consultation.png", Link: `${MAIN_URL}services/consultation.php` },
        { name : "Online Report", ImgUrl: "/asset_frontend/img/online-report.png", Link: `${MAIN_URL}services/consultation.php`},
        { name : "Voice Report", ImgUrl: "/asset_frontend/img/voice-report.png", Link: `${MAIN_URL}services/consultation.php`},
        { name : "Life Readings", ImgUrl: "/asset_frontend/img/life-readings.png", Link: `${MAIN_URL}services/consultation.php`}
    ];

    const Questions= [
        { name: "Loan and Debt", img: loanDebt, url: `${MAIN_URL}loan-and-debts.php` },
        { name: "Children Astrology", img: childrenAstrology, url: `${MAIN_URL}children-astrology.php` },
        { name: "Betting & Gambling", img: Icons, url: `${MAIN_URL}astrology-for-betting.php` },
        { name: "All about Vastu", img: allaboutVastu, url: `${MAIN_URL}vastu.php` },
        { name: "Foreign Settlement", img: foreignSettlement, url: `${MAIN_URL}foreign-travel.php` },
        { name: "Vastu for commercial", img: vfc, url: `${MAIN_URL}vastu-for-commercial.php` },
        { name: "Past life Readings", img: pastlifeReadings, url: `${MAIN_URL}life-predictions.php` },
        { name: "Share market Astrology", img: birthTimeCorrection, url: `${MAIN_URL}share-market-astrology.php` },
        { name: "Birth time Correction", img: btc, url: `${MAIN_URL}time-rectification.php` },
        { name: "Marriage Astrology", img: fileIconsRing, url: `${MAIN_URL}marriage-astrology.php` },
        { name: "Property Astrology", img: propertyAstrology, url: `${MAIN_URL}property.php` },
        { name: "Business Astrology", img: ba, url: `${MAIN_URL}business-astrology.php` },
        { name: "Court / legal Issues", img: courtLegalIssues, url: `${MAIN_URL}court-cases.php` },
        { name: "Career Astrology", img: careerAstrology, url: `${MAIN_URL}career-astrology.php` },
        { name: "Health Astrology", img: Ha, url: `${MAIN_URL}health-astrology.php` }
        
    ];   
    
    const handleClickRouter = (e, url) => {
        e.preventDefault(); // Prevent the default anchor behavior
        router.push(`${MAIN_URL}${url}`);
    };

    const urlPath = router.asPath;
    const pathSegments = urlPath.split('/');
    pathSegments.splice(pathSegments.length - 1, 0, changeText);
    let newUrlPath = pathSegments.join('/');
    if (newUrlPath.startsWith('/')) {
        newUrlPath = newUrlPath.substring(1);
    }

    // const dayType = data.zodiacPeriod ? data?.zodiacPeriod + '-horoscope' : "daily-horoscope";
    const dayType = data ? data.zodiacPeriod+ '-horoscope' || "daily-horoscope" : "daily-horoscope"
    // console.log("Day Type: ", data.zodiacPeriod);
    const horoscopes = Horoscope(dayType);
    
  return (
    <>
    <MetaData data={data} />
    <div className="flex min-h-full flex-col p-6 sm:p-0">
        {data?.extraComponentData ? (
            <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-6 sm:px-6 lg:px-8 holder">
                {data.extraComponentData.Holder1 && <Holder data={data.extraComponentData.Holder1} />}
                {data.extraComponentData.Holder2 && <Holder data={data.extraComponentData.Holder2} />}
                {data.extraComponentData.Holder3 && <Holder data={data.extraComponentData.Holder3} />}
            </div>
        ) : null}

        <div className="bg-orange-500 p-6 sm:p-0">
            <div className="container py-6 mx-auto">
                <div className=''>
                    <p className="text-lg mb-2 text-center text-white font-bold">Free Daily / Weekly / Monthly Horoscope</p>
                    <div className="flex flex-row flex-wrap gap-3 justify-center ">
                        {horoscopes.map((item) => (
                            <a  
                                key={item.name}
                                className="text-xs text-white gap-1 text-center no-underline flex flex-col justify-center items-center cursor-pointer"
                                href={`${MAIN_URL}${item?.url}`}
                                onClick={(e) => handleClickRouter(e, item?.url)}
                            >
                                <div className="flex justify-center items-center bg-white rounded-full p-2">
                                    <Image src={item?.imgSrc} width={80} height={80} alt={item?.alt} className='w-[60px] aspect-square rounded-lg' />
                                </div>
                                <span className='text-sm'>{item?.name}</span>
                            </a>                
                        ))}
                    </div>
                </div>
            </div>
        </div>
      
        <div className="mx-auto flex flex-col sm:flex-row w-full max-w-7xl items-start gap-x-8 px-0 py-6 sm:px-6 lg:px-8">
        
        <div className="flex w-full">
            <div className="block w-40 pr-4 sm:pr-8 sm:w-30 sm:top-8">
                <div className="max-w-6xl w-full mx-auto shadow-2xl bg-orange-500 pt-6 pb-4 mt-5 rounded-lg">
                    <div className="flex justify-center items-center aries-pR1">
                        <div className="aries-pR"> 
                            <div className="flex justify-center items-center bg-white rounded-full p-5 w-20 h-20">
                            <Image
                                src={`/images/HoroscopeSign/${CapitalizedZodiac}.png`}
                                alt={`${zodiacSign} Icon`}
                                width={50}
                                height={50}
                            />
                            </div>
                            <h5 className="text-white text-center font-bold mt-2 mb-0 capitalize"> {zodiacSign} </h5>
                        </div>
                    </div>
                </div>


                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-1 rounded-lg">
                    <button onClick={() => handleClick('daily')} className={`w-full p-2 rounded-lg ${buttonStyleDay('today')}`}>
                        <h5 className="text-center font-bold text-sm"> Your Daily </h5>
                    </button>
                </div>
                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-1 rounded-lg">
                    <button onClick={() => handleClick('tomorrow')} className={`w-full p-2 rounded-lg ${buttonStyleDay('tomorrow')}`}>
                        <h5 className="text-center font-bold text-sm"> Your Tomorrow </h5>
                    </button>
                </div>
                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-1 rounded-lg">
                    <button onClick={() => handleClick('weekly')} className={`w-full p-2 rounded-lg ${buttonStyleDay('weekly')}`}>
                        <h5 className="text-center font-bold text-sm"> Your Weekly </h5>
                    </button>
                </div>
                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-1 rounded-lg">
                    <button onClick={() => handleClick('monthly')} className={`w-full p-2 rounded-lg ${buttonStyleDay('monthly')}`}>
                        <h5 className="text-center font-bold text-sm"> Your Monthly </h5>
                    </button>
                </div>
                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-1 rounded-lg">
                    <button onClick={() => handleClick('yearly')} className={`w-full p-2 rounded-lg ${buttonStyleDay('yearly')}`}> 
                        <h5 className="text-center font-bold text-sm"> Your Yearly </h5>
                    </button>
                </div>

                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-[86px] sm:mt-5 rounded-lg">
                    <button className={`w-full p-2 rounded-lg ${buttonStyle('love')}`} onClick={() => handleButtonClick('love')}> 
                        <h5 className="text-center font-bold text-sm"> {CapitalizedCurrentDay} love life for: {changeDate} </h5>
                    </button>
                </div>
                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-1 rounded-lg">
                    <button className={`w-full p-2 rounded-lg ${buttonStyle('finance')}`} onClick={() => handleButtonClick('finance')}> 
                        <h5 className="text-center font-bold text-sm"> {CapitalizedCurrentDay} Finance for: {changeDate}</h5>
                    </button>
                </div>
                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-1 rounded-lg">
                    <button className={`w-full p-2 rounded-lg ${buttonStyle('career')}`} onClick={() => handleButtonClick('career')}> 
                        <h5 className="text-center font-bold text-sm"> {CapitalizedCurrentDay} Career for: {changeDate}</h5>
                    </button>
                </div>
                <div className="max-w-6xl w-full mx-auto shadow-2xl border-[1px] border-orange-500 bg-white mt-1 rounded-lg">
                    <button className={`w-full p-2 rounded-lg ${buttonStyle('health')}`} onClick={() => handleButtonClick('health')}> 
                        <h5 className="text-center font-bold text-sm"> {CapitalizedCurrentDay} Health for: {changeDate}</h5>
                    </button>
                </div>
            </div>

            <main className="flex-1 w-80 sm:w-70">
                <div className="max-w-6xl w-full mx-auto shadow-2xl p-5 mt-5 rounded-lg bg-[#091d5a]">
                    <div className="max-w-6xl w-full mx-auto shadow-2xl bg-orange-500 p-2 mt-[-40px] rounded-lg">
                        <h1 className="text-white text-center font-bold capitalize"> {zodiacSign} {CapitalizedCurrentDay} Horoscope | {CapitalizedCurrentDay}'s Prediction for {zodiacSign} </h1>
                    </div>
                    <div className="max-h-[310px] overflow-y-scroll scrollbar-red px-5 mt-2">
                        <div className="text-justify text-sm pb-2 text-white">
                            {horoscopeData === "In Process" ? (
                                <div className="text-center">
                                    <div role="status">
                                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                                ) : (
                                horoscopeData
                            )}
                        </div>
                    </div>
                    <a
                        href="#"
                        className="flex items-center justify-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#091d5a] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-full mt-4 text-center"
                        >
                        <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                        <span>
                            Unlock the secrets of {currentDay} and get your instant answer in Yes or No.
                        </span>
                    </a>
                    
                    
                    
                </div>
                <div className="max-w-6xl w-full mx-auto shadow-2xl p-5 mt-5 rounded-lg bg-[#091d5a]">
                    <div className="max-h-[284px] overflow-y-scroll scrollbar-red px-5">
                        <div className="text-justify text-sm pb-2 text-white">
                            {response === "In Process" ? (
                                <div className="text-center">
                                    <div role="status">
                                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                                ) : (
                                    <>
                                    {response} &nbsp; 
                                    <a 
                                        className="text-sm text-white font-bold underline" 
                                        href={`${MAIN_URL}${newUrlPath ? newUrlPath : ""}`}
                                        onClick={(e) => handleClickRouter(e, newUrlPath ? newUrlPath : "")}
                                    >
                                        Read More About {changeText}...
                                    </a>
                                    </>
                            )}
                            
                        </div>
                    </div>
                    <a
                        href="#"
                        className="flex items-center justify-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#091d5a] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-full mt-4 text-center"
                        >
                        <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                        <span>
                            Get Instant Answer on {changeText} Matters in 'Yes' or 'No'
                        </span>
                    </a>
                   
                    
                </div>
            </main>
        </div>

        <div className="block w-full sm:w-auto sm:top-8">
            <div className="max-w-6xl w-full mx-auto shadow-2xl bg-yellow-300 p-5 mt-5 rounded-lg">
                <h3 className='text-indigo-950 text-center text-sm font-bold'>Lucky Number and Colour for: {formattedDate}</h3>
                <h2 className='text-indigo-950 text-lg font-bold text-center'>Number - 1</h2>
                <h3 className='text-sm text-center text-indigo-950 font-bold'>Colour - Orange</h3>
            </div>
            
            <div className="max-w-6xl w-full mx-auto shadow-2xl bg-orange-500 p-5 mt-5 rounded-lg">
                <h3 className='text-white text-center text-sm font-bold'>Mantra Of the day  for: {formattedDate}</h3>
                <h2 className='text-white text-lg font-bold text-center'>Mantra </h2>
                <h3 className='text-sm text-center text-white font-bold'>Om Ang Angrakaya Namah!</h3>
            </div>
            
            <div className="max-w-6xl w-full mx-auto shadow-2xl bg-[#091d5a] p-5 mt-5 rounded-lg">
                <h3 className='text-white text-center text-sm font-bold'>Remedy for: {formattedDate}</h3>
                <h2 className='text-white text-lg font-bold text-center'>Remedy </h2>
                <h3 className='text-sm text-center text-white font-bold'>Recite Bajrang Baardha</h3>
            </div>

            <div className='flex-1 gap-3 mt-5'>
                <div className='grid gap-3 grid-cols-2'>
                    {Services.map((item, index) => (
                        <div key={index} className="bg-orange-500 rounded-md py-3 min-h-15">
                            <a className="text-xs text-white flex-col text-center flex justify-center items-center no-underline" href={item?.Link}>
                                <Image width={40} height={40} className="w-[40px] md:w-[50px] lg:w-[75px] aspect-square object-contain" src={item?.ImgUrl} alt={item?.name} />
                                <span className="text-xs text-white">{item?.name}</span>
                            </a>
                        </div>
                    ))}
                </div>
                <div className='bg-white mt-5 flex items-center justify-evenly rounded-lg p-2 shadow-xl border-[1px] border-[#091d5a]'>
                    <Image 
                        width={40} 
                        height={40} 
                        className='w-10' 
                        src="/asset_frontend/img/newsicon.png" 
                        alt="Astrology News and Articles"
                    />
                    <h3 className='text-lg font-bold text-[#091d5a]'>Astrology News and Articles</h3>
                </div> 
            </div>
        </div>
       
            
        </div>
        
        <div className="bg-[#091d5a] mt-5 mb-5 flex min-h-full flex-col">
            <div className="container py-4 mx-auto">
                <div className=''>
                    <p className="text-lg text-center mb-5 text-white font-bold">Astrological Solutions for all life's problems</p>
                    <div className='flex flex-row flex-wrap gap-3 justify-center'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={9}
                            breakpoints={{
                                400: {
                                  slidesPerView: 3,
                                },
                                500: {
                                  slidesPerView: 4,
                                },
                                768: {
                                  slidesPerView: 5,
                                },
                                1024: {
                                  slidesPerView: 7,
                                },
                                1280: {
                                  slidesPerView: 8,
                                },
                                1530: {
                                  slidesPerView: 10,
                                },
                              }}
                              autoplay={{ delay: 3000 }}
                              loop={true}
                            >
                            {Questions.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <a className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center" href={item?.url}>
                                        <Image src={item?.img} width={80} height={80} className='w-[80px] p-3 bg-orange-500 aspect-square rounded-full' alt={item?.name} />
                                        <span>{item?.name}</span>
                                    </a>    
                                </SwiperSlide>                    
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

        {data?.extraComponentData ? (
            <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-6 sm:px-6 lg:px-8">
                {data.extraComponentData.Holder16 && <Holder data={data.extraComponentData.Holder16} />}
                {data.extraComponentData.Holder17 && <Holder data={data.extraComponentData.Holder17} />}
                {data.extraComponentData.Holder18 && <Holder data={data.extraComponentData.Holder18} />}
            </div>
        ) : null}
   
        <div className="max-w-6xl w-full mx-auto shadow-2xl bg-white p-5 mt-5 rounded-lg">
            <QuestionsData />
        </div>
        <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mb-5 mt-5 rounded-lg">
            <div className="p-2 pt-2">
                {data?.description ?
                    <Description descData={data.description} />
                :<></>}
            </div>
        </div>

        {data?.extraComponentData ? (
            <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-6 sm:px-6 lg:px-8">
                {data.extraComponentData.Holder19 && <Holder data={data.extraComponentData.Holder19} />}
                {data.extraComponentData.Holder20 && <Holder data={data.extraComponentData.Holder20} />}
                {data.extraComponentData.Holder21 && <Holder data={data.extraComponentData.Holder21} />}
                {data.extraComponentData.Holder22 && <Holder data={data.extraComponentData.Holder22} />}
                {data.extraComponentData.Holder23 && <Holder data={data.extraComponentData.Holder23} />}
                {data.extraComponentData.Holder24 && <Holder data={data.extraComponentData.Holder24} />}
                {data.extraComponentData.Holder25 && <Holder data={data.extraComponentData.Holder25} />}
                {data.extraComponentData.Holder26 && <Holder data={data.extraComponentData.Holder26} />}
                {data.extraComponentData.Holder27 && <Holder data={data.extraComponentData.Holder27} />}
                {data.extraComponentData.Holder28 && <Holder data={data.extraComponentData.Holder28} />}
                {data.extraComponentData.Holder29 && <Holder data={data.extraComponentData.Holder29} />}
                {data.extraComponentData.Holder30 && <Holder data={data.extraComponentData.Holder30} />}
            </div>
        ) : null}

    </div>
    </>
  )
}



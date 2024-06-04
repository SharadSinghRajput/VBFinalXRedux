
import React, { useEffect, useState } from 'react';

import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import {KundliCalculation} from '../config/json/KundliCalculation'
import {KundliDosha} from '../config/json/KundliDosha'
import { RightArrow, User, Date } from '../config/SvgConst';
import { useRouter } from 'next/router';
import {lifesProblems} from "../config/json/lifesProblems"
import {VedicAstrologyCalculators} from "../config/json/VedicAstrologyCalculators"





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ServicesNew = [
    { name : "Consultation", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/consultation.png", Link: "https://www.vinaybajrangi.com/services/consultation.php" },
    { name : "Online Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/online-report.png", Link: "https://www.vinaybajrangi.com/services/consultation.php"},
    { name : "Voice Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/voice-report.png", Link: "https://www.vinaybajrangi.com/services/consultation.php"},
    { name : "Life Readings", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/life-readings.png", Link: "https://www.vinaybajrangi.com/services/consultation.php"}
  ]
  const tabs = [
      { name: 'Kundali',  submenu: [
          { name: "Dashboard", },
          { name: "Astro Profile", link: "astro-details.php"},
          { name: "Kundli Chart", link: "kundli-chart.php"},
          { name: "House Cusps", link: "house-cups.php"},
          { name: "Planet Ashtak", link: "planet-ashtak.php"},
          { name: "Sarvashtak", link: "sarvashtak.php"}
      ]},
      { name: 'Daily Forecast',  submenu: [
          { name: "Daily Prediction", link: "daily-personalised-forecast.php"},
          { name: "Biorhythm", link: "biorhythm.php"}
      ]},

      { name: 'Horoscope Dasha', submenu: [
          { name: "Vimshottari Dasha", link: "vimshottari-dasha.php"},
          { name: "Yogini Dasha", link: "vimshottari-dasha.php"},
          { name: "Char Dasha", link: "char-dasha.php"}
      ]},
      {name: 'Horoscope Dosha', submenu: [
          { name: "Kaalsarp Dosha",},
          { name: "Manglik Dosha",},
          { name: "Pitra Dosha",},
          { name: "Sadesati Cycle",}
      ]},
      { name: 'Remedies', submenu: [
          { name: "Gemstone Suggestion", },
          { name: "Rudraksha Suggestion",}
      ]},
      { name: 'Prediction Reports', submenu: [
          { name: "Ascendant Report", },
          { name: "Kundli Predictions",  }
      ]},
      { name: 'Numerology', submenu: [
          { name: "Favorable Points", },
          { name: "Numerology Prediction",  }
      ]},
  ]

  const kundli = [
      { name: "Dashboard", link: "https://www.vinaybajrangi.com/kundli-report.php" },
      { name: "Astro Profile", link: "https://www.vinaybajrangi.com/astro-details.php" },
      { name: "Kundli Chart", link: "https://www.vinaybajrangi.com/kundli-chart.php" },
      { name: "House Cusps", link: "https://www.vinaybajrangi.com/house-cups.php" },
      { name: "Planet Ashtak", link: "https://www.vinaybajrangi.com/planet-ashtak.php" },
      { name: "Sarvashtak", link: "https://www.vinaybajrangi.com/sarvashtak.php" }
  ]

  const GenderType = [
      { id: 'RepMale', title: 'Male' },
      { id: 'RepFemale', title: 'Female' },
  ]
  
export default function Kundli() {
    const router = useRouter();
    const [tabActive, settabActive] = useState('Kundali');
    const [KundaliReport, setKundaliReport] = useState('');
    const [UserInfo, setUserInfo] = useState('');


    const handleSubmit = async () => {
        const savedInputValueNew = getLocalStorageItem('KundliFromDataKey');
        if (savedInputValueNew !== null){
            const apiUrl = "https://www.aapkikismat.com/kundali-api.php"
            try { 
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers:{
                    'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(savedInputValueNew)
                });
                const responsezData = await response.json();
                if(responsezData.success === true){
                    setKundaliReport(responsezData.data);
                }
            }catch (error) {
                console.log("here", error);
            }
        }else{
            router.push('/kundli.php');
        }
      };

      useEffect(()=>{
          handleSubmit()
      },[])

    const GetUserData = async () => {
        const savedInputValue = getLocalStorageItem('UserInfoDataKey');
        if(savedInputValue !== null) {
           setUserInfo(savedInputValue);
        }
      };

      useEffect(()=>{
          GetUserData()
      },[])


      function formatDateString(inputDateStr) {
        var parts = inputDateStr.split(' ');
        var dateParts = parts[0].split('-');
        var timeParts = parts[1].split(':');
        
        var day = parseInt(dateParts[2]);
        var month = parseInt(dateParts[1]) - 1;
        var year = parseInt(dateParts[0]);
        var hours = parseInt(timeParts[0]);
        var minutes = parseInt(timeParts[1]);
    
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        return day + ' ' + ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month] + ' ' + year + ', ' + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
    }
  
  return (
    <div className="">
        <div className={`bg-[#091d5a] mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
            <div className="container py-4 pt-0 mx-auto">
                <div>
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                        Select a tab
                        </label>
                            <select
                            id="tabs"
                            name="tabs"
                            onChange={(e) => settabActive(e.target.value)}
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            >
                            {tabs.map((tab) => (
                                <option value={tab.value} key={tab.name}>{tab.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                        {tabs.map((tab, tabIdx) => (
                            <button
                            key={tab.name}
                            onClick={()=> settabActive(tab.name)}
                            className={classNames(
                                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-l-lg' : '',
                                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                            >
                            <span>{tab.name}</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                tabActive === tab.name ? 'bg-indigo-500' : 'bg-transparent',
                                'absolute inset-x-0 bottom-0 h-0.5'
                                )}
                            />
                            </button>
                        ))}
                        </nav>
                    </div>
                </div>
                <div className='my-5 border-b-white/50 border-b-[0.5px] pb-5'>
                <div className='flex gap-4 flex-wrap'>
                    {tabs.map((item) => item.name === tabActive ?  
                        (item.submenu ? 
                            item.submenu.map((subItem) => (
                                <button 
                                    key={subItem.name} 
                                    onClick={subItem.link ? () => router.push(subItem.link) : undefined} 
                                    className="isolate inline-flex rounded-md shadow-sm"
                                >
                                    <span className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-orange-500 px-3 p-4 px-5 text-sm font-semibold text-white focus:z-10">
                                        {subItem.name}
                                    </span>
                                    <span className="relative -ml-px inline-flex items-center rounded-r-md bg-orange-500 px-3 p-4 px-5 text-sm font-semibold text-white focus:z-10">
                                        <RightArrow width={20} height={20} />
                                    </span>
                                </button>
                            ))
                        : null)
                    : null)}
                </div>

                </div>
                <div className="mb-5 flex flex-col gap-8">
                    <div className='flex flex-1 h-full flex-row bg-white p-5 rounded-lg'>
                        <div className='w-60'>
                            <span className='text-white w-60 aspect-square flex justify-center items-center bg-orange-500 rounded-lg'><User width={100} height={100} strokeWidth={1} /> </span>
                            <div className='flex flex-col'>
                                <section className="mt-5 p-5 rounded-lg bg-gray-50 ">
                                    <dl className="space-y-4">
                                        {UserInfo.name ? <>
                                            <div className="flex items-center justify-between ">
                                                <dt className="flex items-center text-sm text-gray-600">
                                                    <span>{UserInfo.name}</span>
                                                </dt>
                                                <dd className="text-sm font-medium text-gray-900">
                                                    <User width={20} height={20} strokeWidth={2} />
                                                </dd>
                                            </div>
                                        </>:<></>}
                                        {UserInfo.dob ? <>
                                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                                <dt className="flex text-sm text-gray-600">
                                                    <span>{formatDateString(UserInfo.dob)}</span>
                                                </dt>
                                                {/* <dd className="text-sm font-medium text-gray-900">
                                                    <Date width={20} height={20} />
                                                </dd> */}
                                            </div>
                                        </>:<></>}
                                        {UserInfo.birth_place ? <>
                                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                                <dt className="flex text-sm text-gray-600">
                                                    <span>{UserInfo.birth_place}</span>
                                                </dt>
                                                {/* <dd className="text-sm font-medium text-gray-900">
                                                    <Date width={20} height={20} />
                                                </dd> */}
                                            </div>
                                        </>:<></>}
                                        <button type='button' className='text-sm w-full p-2 bg-blue-900 rounded-lg text-white' onClick={()=> router.push('kundli.php')}>Edit Information</button>
                                    </dl>
                                </section>
                            </div>
                        </div>
                        <div className='flex-1 p-5'>
                            <p className='text-base text-gray-900 mb-5'>Your kundli is ready. You are born on {UserInfo.dob ? <>{formatDateString(UserInfo.dob)}</>:<></>}.
                                Your place of birth is {UserInfo.birth_place}
                                If there is any mistake, please <button ></button> 
                                <button
                                    type="button"
                                    onClick={() => router.push('/kundli.php')}
                                    className="inline-flex items-center gap-x-1.5 rounded-md bg-orange-500 px-3 py-0 mx-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                                >
                                    Click here
                                    <RightArrow width={15} height={15} />
                                </button>
                                to re-enter your birth details
                                again or else go ahead and explore your Kundli.</p>
                            {KundaliReport.detailedMessage ? <>
                                <div className='text-base text-gray-900' dangerouslySetInnerHTML={{ __html: KundaliReport.detailedMessage }} />
                            </>:<>
                                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            </>}
                        </div>
                    </div>
                    <div className="flex-1 gap-3">
                        <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                            {ServicesNew.map((item) => (
                            <div key={item.name} className="bg-orange-500 rounded-md py-3 min-h-15">
                                <a className="text-xs text-white flex-col text-center flex justify-center items-center no-underline" href="{item.Link}">
                                    <Image width={40} height={40} className="w-[40px] md:w-[50px] lg:w-[75px] aspect-square object-contain" src={item.ImgUrl} alt={item.name} />
                                    <span className="text-xs text-white">{item.name}</span>
                                </a>
                            </div>
                            ))}
                        </div>
                        <div className="bg-white mt-3 flex items-center justify-evenly rounded-lg p-2">
                            <Image width={40} height={40} className="w-10" src="https://www.vinaybajrangi.com/asset_frontend/img/newsicon.png" alt='newsicon.png' />
                            <h3 className="text-lg font-bold">Astrology News and Articles</h3>
                        </div>
                        <div></div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='container mx-auto pt-10 max-w-6xl shadow-2xl bg-white p-5 mt-5 mb-5 rounded-lg'>
            <div>
                <h2 className='text-lg font-bold mb-5'>Your Kundli Calculation</h2>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    breakpoints={{
                      400: {
                        slidesPerView: 2,
                      },
                      500: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      1024: {
                        slidesPerView: 5,
                      },
                    }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {KundliCalculation.map((item, index) => (
                        <SwiperSlide key={index}>   
                            <div className="w-full mx-auto mb-5 shadow-lg border-[1px] border-orange-500 bg-white p-2 mt-1 rounded-lg">
                                <a href="#" className="block flex gap-4 min-h-16 flex-row justify-start items-center">
                                    <Image width={40} height={40} src={item.image} alt={item.name} className='w-[50px] bg-orange-500 border-2 border-white aspect-square rounded-full' />
                                    <h5 className="text-orange-600 text-sm text-left font-bold">{item.name}</h5>
                                </a>
                            </div>
                        </SwiperSlide>                    
                    ))}
                </Swiper>
            </div>
            <div>
                <h2 className='text-lg font-bold mt-5 mb-5'>Your Kundli Dosha</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'>
                    {KundliDosha.map((item, index) => (
                        <div key={index} className="w-full mx-auto shadow-xl border-[1px] border-orange-500 bg-white p-2 mt-1 rounded-lg">
                            <a href="#" className="block flex gap-4 min-h-16 flex-row justify-start items-center">
                                <Image width={50} height={50} src={item.image} className='w-[50px] bg-orange-500 border-2 border-white aspect-square rounded-full' alt={item.name} />
                                <h5 className="text-orange-600 text-sm text-left font-bold">{item.name}</h5>
                            </a>
                        </div>                    
                    ))}
                </div>
            </div>
            <div className='bg-[#091d5a] p-5 mt-5 mb-5 rounded-lg '>
                <div className='container mx-auto'>
                    <div>
                        <p className="text-lg text-center mb-5 text-white font-bold">Astrological Solutions for all life’s problems</p>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
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
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            {lifesProblems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <a className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center" href={item.url}>
                                    <Image src={item.img} width={80} height={50} className='w-[80px] p-3 bg-orange-500 aspect-square rounded-lg' alt={item.name} />
                                        <span>{item.name}</span>
                                    </a>    
                                </SwiperSlide>                    
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <div>
                    <ul role="list" className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                        <li className="overflow-hidden rounded-xl border border-orange-200">
                            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-orange-50 p-6">
                                <div className="text-base font-bold leading-6 text-gray-900">Your Remedial Measures</div>
                            </div>
                            <dl className="-my-3 divide-y divide-orange-100 px-6 py-4 text-sm leading-6">
                                <div className="flex justify-between gap-x-4 py-3">
                                    <dt className="text-gray-500">Rudraksha for your Kundli</dt>
                                    <dd className="text-emerald-500 font-semibold ">
                                        Read more
                                    </dd>
                                </div>
                                <div className="flex justify-between gap-x-4 py-3">
                                    <dt className="text-gray-500">Which gemstones you can wear? </dt>                                    
                                    <dd className="flex items-start gap-x-2">
                                        <dd className="text-emerald-500 text-sm font-semibold ">
                                            Read More
                                        </dd>
                                    </dd>
                                </div>
                            </dl>
                        </li>
                        <li className="overflow-hidden rounded-xl border border-orange-200">
                            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-orange-50 p-6">
                                <div className="text-base font-bold leading-6 text-gray-900">Kundli based Personalised Predictions</div>
                            </div>
                            <dl className="-my-3 divide-y divide-orange-100 px-6 py-4 text-sm leading-6">
                                <div className="flex justify-between gap-x-4 py-3">
                                    <dt className="text-gray-500">Your kundli based daily prediction</dt>
                                    <dd className="text-emerald-500 font-semibold ">
                                        Read more
                                    </dd>
                                </div>
                                <div className="flex justify-between gap-x-4 py-3">
                                    <dt className="text-gray-500">Your Biorhythms for today  </dt>                                    
                                    <dd className="flex items-start gap-x-2">
                                        <dd className="text-emerald-500 font-semibold ">
                                            Read More
                                        </dd>
                                    </dd>
                                </div>
                                <div className="flex justify-between gap-x-4 py-3">
                                    <dt className="text-gray-500">Get your ascendant report</dt>
                                    <dd className="flex items-start gap-x-2">
                                        <dd className="text-emerald-500 font-semibold ">
                                            Read More
                                        </dd>
                                    </dd>
                                </div>
                            </dl>
                        </li>
                        <li className="overflow-hidden rounded-xl border border-orange-200">
                            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-orange-50 p-6">
                                <div className="text-base font-bold leading-6 text-gray-900">Kundli Predictions and Analysis</div>
                            </div>
                            <dl className="-my-3 divide-y divide-orange-100 px-6 py-4 text-sm leading-6">
                                <div className="flex justify-between gap-x-4 py-3">
                                    <dt className="text-gray-500">Read your kundli predictions here </dt>
                                    
                                    <dd className="text-emerald-500 font-semibold ">
                                        Read more
                                    </dd>
                                </div>
                                <div className="flex justify-between gap-x-4 py-3">
                                    <dt className="text-gray-500">Numerology analysis for you</dt>                                    
                                    <dd className="flex items-start gap-x-2">
                                        <dd className="text-emerald-500 font-semibold ">
                                            Read More
                                        </dd>
                                    </dd>
                                </div>
                                <div className="flex justify-between gap-x-4 py-3">
                                    <dt className="text-gray-500">Numerology Favorable Points</dt>
                                    <dd className="flex items-start gap-x-2">
                                        <dd className="text-emerald-500 font-semibold ">
                                            Read More
                                        </dd>
                                    </dd>
                                </div>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`bg-[#091d5a] mt-5 rounded-lg`}>
                <div className="py-4 mx-auto">
                    <p className="text-lg text-center text-white font-bold">Free Vedic Astrology Calculators</p>
                    <ul className="flex flex-row flex-wrap gap-4 pt-4 pb-4 justify-center">
                        {VedicAstrologyCalculators.map((item) => (
                        <li key={item.name} className="lg:w-[9%] md:w-[15%] w-[28%]">
                            <a className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center" href={item.url}>
                                <Image width={100} height={50} className="w-[100px] aspect-square rounded-[50px]" src={item.imageUrl} alt={item.name} />
                                <span>{item.text}</span>
                            </a>    
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
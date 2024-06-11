"use client"; 
import MainScreen from "./MainScreen"
import Banner from "./Banner"
import Questions from "./Questions"
import VedicAstrologyCalculators from "./VedicAstrologyCalculators"
import Services from "./Services"
import Banner2 from "./Banner2"
import MoonSign from "./MoonSign"
import HoroscopeMatching from "./HoroscopeMatching"
import Panchang from "./Panchang"
import KundliForm from "./pageAssets/KundliForm";
import { useRouter } from "next/router";
import LongSticky from "./LongSticky"
import Head from 'next/head';
import Menu from "./Menu"
import { useState } from "react";
import Footer from "./Footer"
import PopularReports from "./PopularReports"
import { Close } from "../config/SvgConst";
import { MAIN_URL, MAIN_URL_HINDI } from '../config/config';

export default function HomePage() {
  const router = useRouter();
  const [ShowOption, setShowOption] = useState(false);
  const handleClick = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(url);
  };
  return (
    <>
      <div className="fixed top-14 right-0 z-50 bg-white flex flex-col items-end">
        <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-l-lg" onClick={() => setShowOption(!ShowOption)}>
          {ShowOption ?
              <Close width={20} height={20} />
          : 
          <svg fill="#fff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M21.05566,12h-2a1,1,0,0,0,0,2v2H17.8714a2.96481,2.96481,0,0,0,.18426-1A2.99955,2.99955,0,0,0,12.458,13.50049a.99992.99992,0,1,0,1.73242.999A1.0009,1.0009,0,0,1,15.05566,14a1,1,0,0,1,0,2,1,1,0,0,0,0,2,1,1,0,1,1,0,2,1.0009,1.0009,0,0,1-.86523-.49951.99992.99992,0,1,0-1.73242.999A2.99955,2.99955,0,0,0,18.05566,19a2.96481,2.96481,0,0,0-.18426-1h1.18426v3a1,1,0,0,0,2,0V14a1,1,0,1,0,0-2ZM9.08594,11.24268a.99963.99963,0,1,0,1.93945-.48536L9.26855,3.72754a2.28044,2.28044,0,0,0-4.4248,0L3.08594,10.75732a.99963.99963,0,1,0,1.93945.48536L5.58618,9H8.52545ZM6.0863,7l.6969-2.78711a.29222.29222,0,0,1,.5459,0L8.02563,7Zm7.96936,0h1a1.001,1.001,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.001,1.001,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Z"/></svg>
          }
        </button>
        {ShowOption && (
          <div className="flex flex-col w-32 shadow-lg">
            <button
              disabled={true}
              className={`p-2 border-b text-center border-b-orange-400 bg-orange-500 text-white`}
              onClick={()=>  router.push(MAIN_URL)}> English</button>
            <a
              disabled={false}
              className={`p-2 border-b text-center border-b-orange-400 bg-orange-100 text-gray-800`}
              href={`${MAIN_URL_HINDI}`}
              onClick={(e) => handleClick(e, MAIN_URL_HINDI)}  
            >Hindi</a>
          </div>
        )}
      </div>
      <Head>
        <title>Dr. Vinay Bajrangi - Best Online Astrologer in India, Delhi NCR </title>
        <meta name="description" content="Dr. Vinay Bajrangi- a Vedic astrologer for all human problems and solutions-Famous for Marriage, career, business, past life readings and child astrology."  />
        <meta name="keywords" content="Vinay Bajrangi, Marriage Astrology, Business Astrology, Career Astrology, Property Astrology, Health Astrology, Astrology Yoga, Astrology Houses, Astrology Remedies, Astrology Dasha, Children Astrology, Astrology Secrets, Astrology Services, Vedic astrologer, Astrology for court cases, Birth time rectification & Horoscope, Best Astrologer Near Me, Good Astrologer in India, Best Jyotish Near Me" />
      </Head>
      <Menu />
      <PopularReports />
      <MainScreen />
      <Banner />
      <div className="bg-[#fef4e8]">
        <div className="max-w-7xl pt-10 pb-10  mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div><Panchang /></div>
            <div><Questions /></div>
          </div>
        </div>
      </div>
      <VedicAstrologyCalculators />
      <div className="max-w-7xl pt-10 pb-10  mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div><MoonSign /></div>
          <div className="drop-shadow-2xl bg-white p-5 rounded-xl"><KundliForm /></div>
          <div><HoroscopeMatching /></div>
        </div>
      </div>
      <Services />
      <Banner2 />
      <LongSticky />
      <Footer />
    </>
  )
}


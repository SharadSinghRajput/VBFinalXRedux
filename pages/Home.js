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


export default function HomePage() {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Dr. Vinay Bajrangi - Best Online Astrologer in India, Delhi NCR </title>
        <meta name="description" content="Dr. Vinay Bajrangi- a Vedic astrologer for all human problems and solutions-Famous for Marriage, career, business, past life readings and child astrology."  />
        <meta name="keywords" content="Vinay Bajrangi, Marriage Astrology, Business Astrology, Career Astrology, Property Astrology, Health Astrology, Astrology Yoga, Astrology Houses, Astrology Remedies, Astrology Dasha, Children Astrology, Astrology Secrets, Astrology Services, Vedic astrologer, Astrology for court cases, Birth time rectification & Horoscope, Best Astrologer Near Me, Good Astrologer in India, Best Jyotish Near Me" />
      </Head>
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
    </>
  )
}


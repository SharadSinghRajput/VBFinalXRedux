"use client"; 
import MainScreenHindi from "./MainScreenHindi"
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
import Footer from "./Footer"
import PopularReports from "./PopularReports"


export default function HomePage({data}) {
  const router = useRouter();
  
  return (
    <>
      <MainScreenHindi />
      <Banner />
      <div className="bg-[#fef4e8]">
        <div className="max-w-7xl pt-10 pb-10  mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div><Panchang language={data?.language} /></div>
            <div><Questions language={data?.language} /></div>
          </div>
        </div>
      </div>
      <VedicAstrologyCalculators language={data?.language} />
      <div className="max-w-7xl pt-10 pb-10  mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div><MoonSign /></div>
          <div className="drop-shadow-2xl bg-white p-5 rounded-xl"><KundliForm /></div>
          <div><HoroscopeMatching /></div>
        </div>
      </div>
      <Services language={data?.language} />
      <Banner2 />
      <LongSticky />
    </>
  )
}


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


export default function HomePage() {
  const router = useRouter();
  
  return (
    <>
    
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


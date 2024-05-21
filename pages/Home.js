"use client"; 
import MainScreen from "./MainScreen"
import Banner from "./Banner"
import Questions from "./Questions"
import VedicAstrologyCalculators from "./VedicAstrologyCalculators"
import Services from "./Services"
import Banner2 from "./Banner2"
import MoonSign from "./MoonSign"
import FreeKundli from "./FreeKundli"
import HoroscopeMatching from "./HoroscopeMatching"
import Panchang from "./Panchang"
import Menu from "./Menu"
import PopularReports from "./PopularReports"
import Footer from "./Footer"


export default function HomePage() {

  
  return (
    <>
    
      <MainScreen />
      <Banner />
      <div className="bg-[#fef4e8]">
        <div class="container pt-10 pb-10  mx-auto">
          <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div><Panchang /></div>
            <div><Questions /></div>
          </div>
        </div>
      </div>
      <VedicAstrologyCalculators />
      <div class="container pt-10 pb-10  mx-auto">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div><MoonSign /></div>
          <div><FreeKundli /></div>
          <div><HoroscopeMatching /></div>
        </div>
      </div>
      <Services />
      <Banner2 />
    </>
  )
}
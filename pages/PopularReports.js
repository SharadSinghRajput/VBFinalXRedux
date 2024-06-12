"use client";
import React, { useEffect, useState, useRef } from 'react';
import { PopularReportsContent } from '../config/Constant';
import { PopularReportsContentHindi } from '../config/ConstantHindi';
import { Close, Play, Pouse } from '../config/SvgConst';
import { useRouter } from "next/router";
import { MAIN_URL, MAIN_URL_HINDI } from '../config/config';

export default function PopularReports({ language = "English" }) {
  console.log(language, "Data");
  const marqueeRef = useRef(null);
  const [hideReport, setHideReport] = useState(false);
  const router = useRouter();
  const [mainURL, setMainURL] = useState(MAIN_URL);
  const [showConstant, setShowConstant] = useState(PopularReportsContent);

  const handleMouseOver = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  const handleStickButton = () => {
    setHideReport(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    if (language === "Hindi") {
      setMainURL(MAIN_URL_HINDI);
      setShowConstant(PopularReportsContentHindi);
    } else {
      setMainURL(MAIN_URL);
      setShowConstant(PopularReportsContent);
    }
  }, [language]);

  const handleClick = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(`${mainURL}${url}`);
  };

  // console.log(showConstant);

  return (
    <>
      <button onClick={handleStickButton} className={`transition-all ease-in duration-400 z-10 fixed top-28 right-0 bg-[#091d5a] rounded-s-lg ${hideReport ? "p-2 w-10 h-10" : "w-0 h-0 p-0"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-from-line"><path d="m9 6-6 6 6 6"/><path d="M3 12h14"/><path d="M21 19V5"/></svg>
      </button>
      <div className={`bg-[#fef4e8] relative transition-all ease-in-out duration-500 overflow-hidden ${hideReport ? "h-0 p-0" : "h-14 px-2 py-2"}`}>
        <div className='max-w-7xl mx-auto bg-[#fef4e8]'>
          <div className='flex'>
            <div className='w-44 px-4 bg-orange-600 h-10 flex justify-center items-center'>
              <p className='prTitlle font13'>
                {language === "Hindi" ? "नई आगामी रिपोर्टें" : "Popular Reports"}
              </p>
            </div>
            <marquee className='bg-orange-500 flex-1 gap-5 h-10 flex justify-center items-center' ref={marqueeRef} behavior="scroll" direction="left" id="marquee1" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {showConstant?.map((item, index) => (
                <a key={index} className='text-sm text-white ml-5' target='_blank' href={item.link} title={item.title}>{item.title}</a>
              ))}
            </marquee>
            <div className='bg-orange-600 w-10 h-10 flex justify-center items-center'>
              <button onClick={() => setHideReport(true)} className='MarqueeControlButton'><Close width={20} height={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

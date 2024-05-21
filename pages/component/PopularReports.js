"use client"; 
import React, { useEffect, useState, useRef } from 'react';
import {PopularReportsContent} from '../../config/Constant';
import {Close, Play, Pouse} from '../../config/SvgConst'


export default function PopularReports() {
    const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

  
  return (
    <>
    <div className='bg-[#fef4e8] px-2 py-2'>
      <div className='max-w-7xl mx-auto bg-[#fef4e8]'>
        <div className='flex'>
            <div className='w-44 px-4 bg-orange-600 h-10 flex justify-center items-center'>
                <p className='prTitlle font13'>Popular Reports</p>
            </div>
            <marquee className='bg-orange-500 flex-1 gap-5 h-10 flex justify-center items-center' ref={marqueeRef} behavior="scroll" direction="left" id="marquee1" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {PopularReportsContent.map((item, index) => (
                    <a key={index} className='text-sm text-white ml-5' target='_blank' href={item.link} title={item.title}>{item.title}</a>
                ))}
            </marquee>
            <div className='bg-orange-600 w-10 h-10 flex justify-center items-center'>
                <button className='MarqueeControlButton'><Close width={20} height={20} /></button>
            </div>
        </div>
      </div>
    </div>
    <div className='fixed top-0'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-from-line"><path d="m9 6-6 6 6 6"/><path d="M3 12h14"/><path d="M21 19V5"/></svg>
    </div>
    </>
  );
}

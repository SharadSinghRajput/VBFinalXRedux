"use client"; 
import Image from 'next/image';
import { useState, useEffect } from 'react';
import BlogCard from "./BlogCard";
import PageDetailFetchAPI from '../config/PageDetailFetchAPI';

import Title from './pageAssets/TitlewithBG';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';
import Tags from './pageAssets/Tags';
import CommentForm from './pageAssets/commentForm';
import MetaData from './pageAssets/MetaData';
import {Horoscope} from '../config/Horoscope';
import { useRouter } from 'next/router';

const NavigateLink = [
  {
    "name": "Daily Horoscope",
    "link": "https://www.vinaybajrangi.com/horoscope/daily-horoscope.php"
  },
  {
    "name": "Weekly Horoscope",
    "link": "https://www.vinaybajrangi.com/horoscope/weekly-horoscope.php"
  },
  {
    "name": "Monthly Horoscope",
    "link": "https://www.vinaybajrangi.com/horoscope/monthly-horoscope.php"
  },
  {
    "name": "Yearly Horoscope",
    "link": "https://www.vinaybajrangi.com/horoscope/yearly-horoscope.php"
  }
]
export default function HoroscopePageData({data}) {
  const router = useRouter();
  const dayType = data && data.zodiacPeriod ? data.zodiacPeriod + '-horoscope' : "daily-horoscope";
  // console.log("Day Type: " , data.zodiacPeriod);
  const horoscopes = Horoscope(dayType);

  return (
    <>
      <MetaData data={data} />
      <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mb-5 rounded-lg">
        <div className="p-2 pt-2">
          {!data ? (
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
                <div className="grid grid-cols-4 mb-5">
                  { NavigateLink.map((item, index)=> (
                      <div className='col-span-1' key={index}>
                          <button onClick={()=> router.push(item.link)} className='w-full h-10 bg-orange-500 text-white border-r border-r-white/50'>
                            {item.name}
                          </button>
                      </div>
                    ))}
                </div>
                {data.title ? <>
                    <Title titleData={data.title} />
                </>:<></>}
                <div className="grid grid-cols-1 gap-10 mt-5">
                    <div className={` p-2 md:p-4 rounded-lg bg-orange-500`}>
                        <div className="grid grid-cols-3 gap-5 sm:grid-cols-6">
                        {horoscopes.map((person) => (
                            <button key={person.name} onClick={()=> router.push(person.Link)} className='w-full flex justify-center items-center flex-col aspect-square bg-white rounded-2xl p-4' >
                                <Image width={70} height={70} className="aspect-square" src={person.imgSrc} alt="" />
                                <h3 className="mt-4 text-center font-normal text-sm tracking-tight text-gray-900 leading-3">{person.name}</h3>
                            </button>
                        ))}
                        </div>
                    </div>
                </div>

                {data.blogBannerImage ? <>
                  <div className="w-[100%] md:w-[100%] mb-5 mt-5">
                    <Banner BannerData={data.blogBannerImage} />
                  </div>
                </>:<></>}

                {data.description ?
                  <Description descData={data.description} />
                :<></>}
              </> 
          )}
        </div>
      </div>
    </>
  );
}

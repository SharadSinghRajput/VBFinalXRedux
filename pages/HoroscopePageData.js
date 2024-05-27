"use client"; 
import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import BlogCard from "./BlogCard";
// import PageDetailFetchAPI from '../config/PageDetailFetchAPI';

import Title from './pageAssets/Title';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';
// import Tags from './pageAssets/Tags';
// import CommentForm from './pageAssets/commentForm';
import MetaData from './pageAssets/MetaData';
import { useRouter } from 'next/router';

export default function HoroscopePageData({data}) {
  const router = useRouter();
  const Horoscope = [
      { name: "Aries", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/aries.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aries.png", Link: "horoscope/daily-horoscope/aries.php" },
      { name: "Taurus", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/taurus.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Tauras.png", Link: "horoscope/daily-horoscope/taurus.php"},
      { name: "Gemini", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/gemini.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Gemini.png", Link: "horoscope/daily-horoscope/gemini.php"},
      { name: "Cancer", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/cancer.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Cancer.png", Link: "horoscope/daily-horoscope/cancer.php"},
      { name: "Leo", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/leo.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Leo.png", Link: "horoscope/daily-horoscope/leo.php"},
      { name: "Virgo", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/virgo.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Virgo.png", Link: "horoscope/daily-horoscope/virgo.php"},
      { name: "Libra", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/libra.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Libra.png", Link:"horoscope/daily-horoscope/libra.php"},
      { name: "Scorpio", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/scorpio.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Scorpio.png", Link: "horoscope/daily-horoscope/scorpio.php"},
      { name: "Sagittarius", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/sagittarius.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Sagittarius.png", Link:"horoscope/daily-horoscope/sagittarius.php"},
      { name: "Capricorn", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/capricorn.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Capricorn.png", Link: "horoscope/daily-horoscope/capricorn.php"},
      { name: "Aquarius", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/aquarius.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aquarius.png", Link: "horoscope/daily-horoscope/aquarius.php"},
      { name: "Pisces", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/pisces.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/pices.png", Link: "horoscope/daily-horoscope/pisces.php"}
    ]
  return (
    <>
      <MetaData data={data} />
      <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 rounded-lg">
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
                
                {data.title ? <>
                  <Title titleData={data.title} />
                </>:<></>}
                <div class="grid grid-cols-1 gap-10 mb-5">
                  <div className={`bg-orange-500 p-2 md:p-4 rounded-lg`}>
                    <h2 class="text-xl text-white font-bold text-center mb-4">Free Daily / Weekly / Monthly Horoscope</h2>
                    <div class="flex flex-row flex-wrap gap-3 justify-center ">
                      {Horoscope.map((person) => (
                        <button key={person.name} onClick={()=> router.push(person.Link)} >
                            <Image width={50} height={50} className="bg-white h-10 w-10 bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50px] flex flex-col justify-center items-center px-2 py-2 " src={person.imgSrc} alt="" />
                            <h3 className="mt-2 text-xs text-white text-base text-center font-normal leading-7 tracking-tight text-gray-900 leading-3">{person.name}</h3>
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

                <div class="grid grid-cols-1 gap-10">
                  <div className={`bg-orange-500 p-2 md:p-4 rounded-lg`}>
                    <h2 class="text-xl text-white font-bold text-center mb-4">Free Daily / Weekly / Monthly Horoscope</h2>
                    <div class="flex flex-row flex-wrap gap-3 justify-center ">
                      {Horoscope.map((person) => (
                        <button key={person.name} onClick={()=> router.push(person.Link)} >
                            <Image width={50} height={50} className="bg-white h-10 w-10 bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50px] flex flex-col justify-center items-center px-2 py-2 " src={person.imgSrc} alt="" />
                            <h3 className="mt-2 text-xs text-white text-base text-center font-normal leading-7 tracking-tight text-gray-900 leading-3">{person.name}</h3>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </> 
          )}
          
        </div>
      </div>
    </>
  );
}

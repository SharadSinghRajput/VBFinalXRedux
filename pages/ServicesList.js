"use client"
import React, { useEffect, useState } from 'react';
import Title from './pageAssets/TitlewithBG';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';


import MetaData from './pageAssets/MetaData';
import Holder from './pageAssets/Holder';
import { useRouter } from 'next/router';
import { MAIN_URL, MAIN_URL_HINDI} from "../config/config";

const Services = [
    {
      name : "CONSULTATION",
      nameHindi : "परामर्श",
      link : "services/consultation.php",
      linkHindi : "hindi/services/consultation.php",
      image_url : "upload/category_img/12_Consultation MAIN.webp",
      image_urlHindi : "upload/category_img/12_Consultation.webp"
    },
    {
      name : "ONLINE REPORT",
      nameHindi : "ऑनलाइन रिपोर्ट",
      link : "services/online-reports.php",
      linkHindi : "hindi/services/online-reports.php",
      image_url : "upload/category_img/1_OLR main.webp",
      image_urlHindi : "upload/category_img/1_online report.webp"
    },
    {
      name : "VOICE REPORT",
      nameHindi : "औडियो रिपोर्ट",
      link : "services/voice-report.php",
      linkHindi : "hindi/services/voice-report.php",
      image_url : "upload/category_img/14_VR MAIN.webp",
      image_urlHindi : "upload/category_img/14_voice report.webp"
    },
    {
      name : "LIFE READINGS",
      nameHindi : "जीवन का विश्लेषण",
      link : "services/life-readings.php",
      linkHindi : "hindi/services/life-readings.php",
      image_url : "upload/category_img/17_lifr readings.webp",
      image_urlHindi : "upload/category_img/17_life readings.webp"
    }
  ]


export default function DefaultPage({data}) {
    const router = useRouter();
  return (
    <>
    <MetaData data={data} />
    <div className="max-w-6xl mx-auto shadow-2xl bg-white mb-5 p-5 rounded-lg">
        <div className="">
        {data ? (
            <>
            {data.extraComponentData ? data.extraComponentData.Holder1 ? <Holder data={data.extraComponentData.Holder1} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder2 ? <Holder data={data.extraComponentData.Holder2} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder3 ? <Holder data={data.extraComponentData.Holder3} /> : <></> :<></>}


             {data.title ? <>

                <Title titleData={data.title} />
            </>:<></>}

            <div className='grid grid-cols-2  md:grid-cols-4   gap-4 mt-5'>
                {Services.map((item, index) => (
                    <div className="" key={index}>
                        {data?.language === "Hindi" ?
                        <>
                            <button className='bg-orange-200' onClick={() => router.push(item.linkHindi)}>
                                <img src={MAIN_URL + item.image_urlHindi}  />
                                <h4 className="text-base font-bold px-2 py-4">{item.nameHindi}</h4>
                            </button>
                        </> :
                        <>
                            <button className='bg-orange-200' onClick={() => router.push(item.link)}>
                                <img src={MAIN_URL + item.image_url}  />
                                <h4 className="text-base font-bold px-2 py-4">{item.name}</h4>
                            </button>
                        </>
                        }
                    </div>
                ))}
            </div>

            {data.extraComponentData ? data.extraComponentData.Holder3 ? <Holder data={data.extraComponentData.Holder4} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder4 ? <Holder data={data.extraComponentData.Holder5} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder5 ? <Holder data={data.extraComponentData.Holder6} /> : <></> :<></>}


            {data.blogBannerImage ? <>
                <div className="w-[100%] md:w-[100%] mb-5 mt-5">
                    <Banner BannerData={data.blogBannerImage} AltName={data.title} />
                </div>
            </>:<></>}


            {data.extraComponentData ? data.extraComponentData.Holder7 ? <Holder data={data.extraComponentData.Holder7} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder8 ? <Holder data={data.extraComponentData.Holder8} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder9 ? <Holder data={data.extraComponentData.Holder9} /> : <></> :<></>}


            {data.description ?
            <div className='mt-5'>
                <Description descData={data.description} />
            </div>
            :<></>}


            {data.extraComponentData ? data.extraComponentData.Holder10 ? <Holder data={data.extraComponentData.Holder10} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder11 ? <Holder data={data.extraComponentData.Holder11} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder12 ? <Holder data={data.extraComponentData.Holder12} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder13 ? <Holder data={data.extraComponentData.Holder13} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder14 ? <Holder data={data.extraComponentData.Holder14} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder15 ? <Holder data={data.extraComponentData.Holder15} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder16 ? <Holder data={data.extraComponentData.Holder16} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder17 ? <Holder data={data.extraComponentData.Holder17} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder18 ? <Holder data={data.extraComponentData.Holder18} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder19 ? <Holder data={data.extraComponentData.Holder19} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder20 ? <Holder data={data.extraComponentData.Holder20} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder21 ? <Holder data={data.extraComponentData.Holder21} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder22 ? <Holder data={data.extraComponentData.Holder22} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder23 ? <Holder data={data.extraComponentData.Holder23} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder24 ? <Holder data={data.extraComponentData.Holder24} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder25 ? <Holder data={data.extraComponentData.Holder25} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder26 ? <Holder data={data.extraComponentData.Holder26} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder27 ? <Holder data={data.extraComponentData.Holder27} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder28 ? <Holder data={data.extraComponentData.Holder28} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder29 ? <Holder data={data.extraComponentData.Holder29} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder30 ? <Holder data={data.extraComponentData.Holder30} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder31 ? <Holder data={data.extraComponentData.Holder31} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder32 ? <Holder data={data.extraComponentData.Holder32} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder33 ? <Holder data={data.extraComponentData.Holder33} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder34 ? <Holder data={data.extraComponentData.Holder34} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder35 ? <Holder data={data.extraComponentData.Holder35} /> : <></> :<></>}

            </>
        ) : (
            <>
                <div className="text-center">
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </> 
        )}
        </div>
    </div>
    </>
  )
}
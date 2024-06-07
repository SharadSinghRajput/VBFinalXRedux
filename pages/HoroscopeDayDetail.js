"use client"; 
import Title from './pageAssets/TitlewithBG';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';
import { useRouter } from 'next/router';
import {Horoscope} from '../config/Horoscope';
import MetaData from './pageAssets/MetaData';


import Image from "next/image";

export default function HomePage({data}) {
    const router = useRouter();


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
  
  return (
    <>
      <MetaData data={data} />
      <div className='bg-white max-w-6xl mx-auto mt-5'>
        <div className='px-5'>
          {data?.title && <Title titleData={data.title} />}
        </div>
        <div class="grid grid-cols-1 gap-10 m-5">
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
          <div class="grid grid-cols-4 m-5" >
            { NavigateLink.map((item, index)=> (
                <div className='col-span-1' key={index}>
                    <button onClick={()=> router.push(item.link)} className='w-full h-10 bg-orange-500 text-white border-r border-r-white/50'>
                      {item.name}
                    </button>
                </div>
              ))}
          </div>
        
            {data?.blogBannerImage && (
            <div className="w-full md:w-full mb-5 mt-5 p-2">
                <Banner BannerData={data.blogBannerImage} />
            </div>
            )}
            <div className='p-3'>
              {data?.description && <Description descData={data.description} />}
            </div>
       </div>
       
    </>
  )
}
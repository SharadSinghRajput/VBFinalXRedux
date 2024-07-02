"use client"; 
import Image from 'next/image';
import { useState, useEffect } from 'react';

import BlogCard from "./BlogCard";
import PageDetailFetchAPI from '../config/PageDetailFetchAPI';
import Title from './pageAssets/TitlewithBG';



import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';
import HoroscopeFourButton from './HoroscopeFourButton';
import { format } from 'date-fns';
// import Tags from './pageAssets/Tags';
// import CommentForm from './pageAssets/commentForm';
import HoroscopeFetchAPI from '../config/horoscopeFetchAPI';
import { Horoscope } from '../config/Horoscope';
import MetaData from './pageAssets/MetaData';
import { useRouter } from 'next/router';
import { MAIN_URL } from '../config/config';


export default function HoroscopePageData({data}) {
  const router = useRouter();
  // const [response, setResponse] = useState("In Process");
  const [horoscopeData, setHoroscopeData] = useState("In Process");
  function formatDate(date) {
      return format(date, "do MMM yyyy");
  }
  
  let today = new Date();
  
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const formattedDate = format(today, "do MMM yyyy");
  
  let TotalDays = formattedDate;
  let changeDate = formattedDate;

  const zodiacSign = data ? data.zodiacSign || false : false;
  const zodiacPeriod = data ? data.zodiacPeriod || false : false;
  const horoscopeType = data ? data.horoscopeType || false : false;
  const pageLanguage = data ? data.language || false : false;
  const bilingualData = data ? data.bilingualData || false : false;

  

  const CapitalizedZodiac = `${zodiacSign ?? false}`.charAt(0).toUpperCase() + `${zodiacSign ?? false}`.slice(1);
  const CapitalizedZodiacPeriod = `${zodiacPeriod ?? false}`.charAt(0).toUpperCase() + `${zodiacPeriod ?? false}`.slice(1);
  const CapitalizedZodiacType = `${horoscopeType ?? false}`.charAt(0).toUpperCase() + `${horoscopeType ?? false}`.slice(1);

  
  const fetchCategoryWiseData = async (CapitalizedZodiac,zodiacPeriod,type,currentDate) => {
    try {
          const astrologyData = await HoroscopeFetchAPI(CapitalizedZodiac, type, zodiacPeriod, currentDate, pageLanguage);
          if(astrologyData){
              return astrologyData;
          }else{
            return false;
          }
      } catch (error) {
        // console.error("Error fetching horoscope data:", error);
        return null; // Return null or handle the error as needed
      }
    };
    
  const HitTheHoroscopeFunction = async (CapitalizedZodiac, zodiacPeriod, type, currentDate) => {
    
      const data = await fetchCategoryWiseData(CapitalizedZodiac, zodiacPeriod, type, currentDate);
      setHoroscopeData(data);
  };

  switch (zodiacPeriod) {
      case 'tomorrow':
      today.setDate(today.getDate() + 1); // Increment by 1 day for tomorrow
      const formattedData = format(today, "do MMM yyyy");
      TotalDays = formattedData;
      changeDate = TotalDays;
      HitTheHoroscopeFunction(CapitalizedZodiac, zodiacPeriod, horoscopeType, currentDate);
      break;
      case 'weekly':
      const firstDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
      const lastDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);
      const formattedStartOfWeek = formatDate(firstDayOfWeek);
      const formattedEndOfWeek = formatDate(lastDayOfWeek);

      TotalDays = `${formattedStartOfWeek} to ${formattedEndOfWeek}`;
      changeDate = TotalDays;
      HitTheHoroscopeFunction(CapitalizedZodiac, zodiacPeriod, horoscopeType, currentDate);
      break;
      case 'monthly':   
      const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      const formattedStartOfMonth = formatDate(firstDayOfMonth);
      const formattedEndOfMonth = formatDate(lastDayOfMonth);
      
      TotalDays = `${formattedStartOfMonth} to ${formattedEndOfMonth}`;
      HitTheHoroscopeFunction(CapitalizedZodiac, zodiacPeriod, horoscopeType, currentDate);
      break;
      case 'yearly':
      const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
      const lastDayOfYear = new Date(today.getFullYear(), 11, 31);
      const formattedStartOfYear = formatDate(firstDayOfYear);
      const formattedEndOfYear = formatDate(lastDayOfYear);
     
      TotalDays = `${formattedStartOfYear} to ${formattedEndOfYear}`;
      HitTheHoroscopeFunction(CapitalizedZodiac, zodiacPeriod, horoscopeType, currentDate);
      break;
      default:
      const formattedDates = format(today, "do MMM yyyy");
      TotalDays = formattedDates;
      changeDate = TotalDays;
      console.log("this will hit")
      HitTheHoroscopeFunction(CapitalizedZodiac, zodiacPeriod, horoscopeType, currentDate);
  }
  // console.log("Horoscope Data: ",TotalDays);

  const handleClick = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(`${MAIN_URL}${url}`);
  };

  // const dayType = data?.zodiacPeriod ? `${data.zodiacPeriod}horoscope` : "daily-horoscope";
  const dayType = data && data.zodiacPeriod ? data.zodiacPeriod+ '-horoscope' : "daily-horoscope";
  
  const horoscopes = Horoscope(dayType);

  const PageSlug = router?.query?.slug[router?.query?.slug.length - 1];

  const handleClickRouter = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(`${MAIN_URL}${url}`);
};


console.log(CapitalizedZodiacType);

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
                {/* <div className="grid grid-cols-1 gap-10 mb-5 mt-5">
                  <div className={`bg-orange-500 p-2 md:p-4 rounded-lg`}>
                    <h2 className="text-xl text-white font-bold text-center mb-4">Free Daily / Weekly / Monthly Horoscope</h2>
                    <div className="flex flex-row flex-wrap gap-3 justify-center ">
                      {horoscopes.map((person) => (
                        <a  
                            key={person.name} 
                            href={`${MAIN_URL}${data.language=== "Hindi" ? person.hindiLink :person.link}`}
                            onClick={(e) => handleClick(e, data.language=== "Hindi" ? person.hindiLink :person.link)}
                        >
                            <Image width={50} height={50} className="bg-white h-10 w-10 bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50px] flex flex-col justify-center items-center px-2 py-2 " src={person.imgSrc} alt="" />
                            <h3 className="mt-2 text-xs text-white text-base text-center font-normal leading-7 tracking-tight text-gray-900 leading-3">{data.language=== "Hindi" ? person.nameHindi : person.name}</h3>
                        </a>
                      ))}
                    </div>
                  </div>
                </div> */}
                {
                  zodiacSign && zodiacPeriod && horoscopeType ? 
                  <>
                  {/* {console.log(zodiacSign, CapitalizedZodiacPeriod, CapitalizedZodiacType)} */}
                    <div className="flex min-h-full flex-col mt-5">
                    <div className="mx-auto flex max-sm:flex-col w-full max-w-7xl items-start gap-x-8 mb-5">
                        <div className="block w-full sm:top-8 sm:w-44">
                          <div className="max-w-6xl w-full mx-auto shadow-2xl bg-orange-500 pt-6 pb-4 mt-5 rounded-lg">
                              <div className="flex justify-center items-center aries-pR1">
                                  <div className="aries-pR"> 
                                      <div className="flex justify-center items-center bg-white rounded-full p-5 w-20 h-20">
                                        <Image
                                            src={`/images/HoroscopeSign/${CapitalizedZodiac}.png`}
                                            alt={`${zodiacSign} Icon`}
                                            width={50}
                                            height={50}
                                        />
                                      </div>
                                      <h5 className="text-white text-center font-bold mt-2 mb-0 capitalize"> {zodiacSign} </h5>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className="flex-1 ">
                          <div className="max-w-6xl w-full mx-auto shadow-2xl p-5 mt-5 rounded-lg bg-[#091d5a]">
                              <div className="max-w-6xl w-full mx-auto shadow-2xl bg-orange-500 p-2 mt-[-40px] rounded-lg">
                                  <h2 className="text-white text-center font-bold capitalize"> {zodiacSign} {CapitalizedZodiacPeriod} {CapitalizedZodiacType} Horoscope ({TotalDays})</h2>
                              </div>
                              <div className="max-h-72 overflow-y-scroll scrollbar-red px-5 mt-2">
                                  <div className="text-justify text-sm pb-2 text-white">
                                      {horoscopeData === "In Process" ? (
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
                                          horoscopeData
                                      )}
                                  </div>
                              </div>
                              {/* <a
                                  href="#"
                                  className="flex items-center justify-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#091d5a] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-full mt-4 text-center"
                                  >
                                  <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                  <span>
                                      Get Instant Answer on {CapitalizedZodiacType} Matters in 'Yes' or 'No'
                                  </span>
                              </a> */}
                              {pageLanguage === "Hindi" ?
                                <a
                                    href={`${MAIN_URL}${
                                      CapitalizedZodiacType === "Love"
                                            ? "hindi/ask-question/get-instant-answer-on-love-matters.php"
                                            : CapitalizedZodiacType === "Finance"
                                            ? "hindi/ask-question/get-instant-answer-on-finance-matters.php"
                                            : CapitalizedZodiacType === "Career"
                                            ? "hindi/ask-question/get-instant-answer-on-career-matters.php"
                                            : CapitalizedZodiacType === "Health"
                                            ? "hindi/ask-question/get-instant-answer-on-health-matters.php"
                                            : ""
                                    }`}
                                    onClick={(e) => handleClickRouter(e, `${
                                      CapitalizedZodiacType === "Love"
                                            ? "hindi/ask-question/get-instant-answer-on-love-matters.php"
                                            : CapitalizedZodiacType === "Finance"
                                            ? "hindi/ask-question/get-instant-answer-on-finance-matters.php"
                                            : CapitalizedZodiacType === "Career"
                                            ? "hindi/ask-question/get-instant-answer-on-career-matters.php"
                                            : CapitalizedZodiacType === "Health"
                                            ? "hindi/ask-question/get-instant-answer-on-health-matters.php"
                                            : ""
                                    }`)}
                                    className="flex items-center justify-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#091d5a] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-full mt-4 text-center"
                                    >
                                    <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                    <span>
                                        {
                                            CapitalizedZodiacType === "Love"
                                            ? "अब तुरंत पाएं “हां” या “ना” में अपनी लव लाइफ़ से जुड़े सवालों के जवाब।"
                                            : CapitalizedZodiacType === "Finance"
                                            ? "अब तुरंत पाएं “हां” या “ना” में अपनी फाइनेंस लाइफ से जुड़े सवालों के जवाब। "
                                            : CapitalizedZodiacType === "Career"
                                            ? " अब तुरंत पाएं “हां” या “ना” में अपनी करियर लाइफ से जुड़े सवालों के जवाब।"
                                            : CapitalizedZodiacType === "Health"
                                            ? " अब तुरंत पाएं “हां” या “ना” में अपनी हेल्थ लाइफ से जुड़े सवालों के जवाब।"
                                            : ""}
                                    </span>
                                </a>
                                :
                                <a
                                    href={`${MAIN_URL}${
                                      CapitalizedZodiacType === "Love"
                                            ? "ask-question/get-instant-answer-on-love-matters.php"
                                            : CapitalizedZodiacType === "Finance"
                                            ? "ask-question/get-instant-answer-on-finance-matters.php"
                                            : CapitalizedZodiacType === "Career"
                                            ? "ask-question/get-instant-answer-on-career-matters.php"
                                            : CapitalizedZodiacType === "Health"
                                            ? "ask-question/get-instant-answer-on-health-matters.php"
                                            : ""
                                    }`}
                                    onClick={(e) => handleClickRouter(e, `${
                                      CapitalizedZodiacType === "Love"
                                            ? "ask-question/get-instant-answer-on-love-matters.php"
                                            : CapitalizedZodiacType === "Finance"
                                            ? "ask-question/get-instant-answer-on-finance-matters.php"
                                            : CapitalizedZodiacType === "Career"
                                            ? "ask-question/get-instant-answer-on-career-matters.php"
                                            : CapitalizedZodiacType === "Health"
                                            ? "ask-question/get-instant-answer-on-health-matters.php"
                                            : ""
                                    }`)}
                                    className="flex items-center justify-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#091d5a] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-full mt-4 text-center"
                                    >
                                    <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                    <span>
                                        Get Instant Answer on {CapitalizedZodiacType} Matters in 'Yes' or 'No'
                                    </span>
                                </a>
                                }
                          </div>
                        </div>
                    </div>
                  </div>
                  </>

                  :

                  <>
                  
                  </>
                  
                }

                <HoroscopeFourButton slug={PageSlug} lang={data.language} />
                

                {data.blogBannerImage ? <>
                  <div className="w-[100%] md:w-[100%] mb-5 mt-5">
                    <Banner BannerData={data.blogBannerImage} />
                  </div>
                </>:<></>}

                {data.description ?
                  <Description descData={data.description} />
                :<></>}

                <div className="grid grid-cols-1 gap-10 mb-5 mt-5">
                  <div className={`bg-orange-500 p-2 md:p-4 rounded-lg`}>
                    <h2 className="text-xl text-white font-bold text-center mb-4">Free Daily / Weekly / Monthly Horoscope</h2>
                    <div className="flex flex-row flex-wrap gap-3 justify-center ">
                      {horoscopes.map((person) => (
                        <a  
                            key={person.name} 
                            href={`${MAIN_URL}${data.language=== "Hindi" ? person.hindiLink :person.link}`}
                            onClick={(e) => handleClick(e, data.language=== "Hindi" ? person.hindiLink :person.link)}
                        >
                            <Image width={50} height={50} className="bg-white h-10 w-10 bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50px] flex flex-col justify-center items-center px-2 py-2 " src={person.imgSrc} alt="" />
                            <h3 className="mt-2 text-xs text-white text-base text-center font-normal leading-7 tracking-tight text-gray-900 leading-3">{data.language=== "Hindi" ? person.nameHindi : person.name}</h3>
                        </a>
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

import React, { Fragment, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Image from "next/image";
import { useRouter } from "next/router";
import "swiper/css";
import getUserLocation from "../config/GetLocation";
import { formatDate } from "../config/formatDatetoAstrologyAPI";
import fetchAstrologyData from "../config/getAstroAPI";
import HoroscopeFetchAPI from "../config/horoscopeFetchAPI";
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";
import GlobImg from "./assets/images/calculator/glob.png";
import Banner from "./pageAssets/Banner";
import CalculatorForm from "./pageAssets/CalculatorForm";
import Description from "./pageAssets/Description";
import MetaData from "./pageAssets/MetaData";
import Title from "./pageAssets/Title";

export default function Kundli({ data }) {
  const [GemstoneSuggestion, setGemstoneSuggestion] = useState("");

  const [AscendantHindi, setAscendantHindi] = useState('');

  function areDatesEqual(date1, date2) {
    if (
      !date1.dobData || !date2.dobData ||
      date1.dobData.day === undefined || date2.dobData.day === undefined ||
      date1.dobData.month === undefined || date2.dobData.month === undefined ||
      date1.dobData.year === undefined || date2.dobData.year === undefined ||
      date1.dobData.hour === undefined || date2.dobData.hour === undefined ||
      date1.dobData.min === undefined || date2.dobData.min === undefined ||
      date1.birth_place_latitude === undefined || date2.birth_place_latitude === undefined ||
      date1.birth_place_longitude === undefined || date2.birth_place_longitude === undefined ||
      date1.tzone === undefined || date2.tzone === undefined
    ) {
      return false;
    }
    return (
      date1.dobData.day === date2.dobData.day &&
      date1.dobData.month === date2.dobData.month &&
      date1.dobData.year === date2.dobData.year &&
      date1.dobData.hour === date2.dobData.hour &&
      date1.dobData.min === date2.dobData.min &&
      date1.birth_place_latitude === date2.birth_place_latitude &&
      date1.birth_place_longitude === date2.birth_place_longitude &&
      date1.tzone === date2.tzone
    );
  }


  useEffect(() => {
    const fetchData = async () => {
      const GetData = getLocalStorageItem("AstroAPICalculatorKey");
      if (GetData) {
        const data = {
          day: GetData.dobData.day,
          month: GetData.dobData.month,
          year: GetData.dobData.year,
          hour: GetData.dobData.hour,
          min: GetData.dobData.min,
          lat: GetData.birth_place_latitude,
          lon: GetData.birth_place_longitude,
          tzone: GetData.tzone,
        };
        try {
          const astrologyData = await fetchAstrologyData(data, "general_ascendant_report");
          setGemstoneSuggestion(astrologyData);

          
          const cachedData = getLocalStorageItem("AscendantReporrtHindi");

          if (cachedData && cachedData.timestamp > Date.now() - 5 * 60 * 60 * 1000) {
            const areSame = areDatesEqual(cachedData.dobData, GetData);
            if(areSame){
              console.log(cachedData);
              setAscendantHindi(cachedData.hindiText);
            }else{
              setInLocal(astrologyData?.asc_report?.report, GetData)
            }
          } else {
            setInLocal(astrologyData?.asc_report?.report, GetData)
          }


        } catch (error) {}
      }
    };
    fetchData();
  }, []);


  const setInLocal = async (Text, dob) => {
    const convertedText = await chatGPTAnswer(Text);
    if(convertedText){
      setLocalStorageItem("AscendantReporrtHindi", {
        hindiText: convertedText,
        timestamp: Date.now(),
        dobData: dob,
      });
      setAscendantHindi(convertedText);
    }
  }



  const chatGPTAnswer = async (Text) => {
    const dataGpt = {
      prompt: `convert this paragraph in hindi '${Text}'`,
      temperature: 0.5,
      max_tokens: 800
    };

    const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify(dataGpt)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    const answer = result.choices[0].text;
    return JSON.stringify(answer);
  }


  // useEffect(() => {
  //   if (GemstoneSuggestion.asc_report?.ascendant) {
  //     chatGPTAnswer(GemstoneSuggestion.asc_report?.ascendant).then(setAscendantHindi);
  //   }
  // }, [GemstoneSuggestion]);


  return (
    <>
      <MetaData data={data} />
      <div className="">
        <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
          {data ? (
            <>
              {data.title ? (
                <>
                  <div className="mb-5">
                    <Title titleData={data.title} />
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ) : null}
          <div className="">
            <p className="font-bold text-base">
              {data?.language === "Hindi" ?
              "लगन क्या है?"
              : "What is Ascendant?"}
              </p>
            <p className="text-base">

              {data?.language === "Hindi" ?
              "लगन पहले घर के रूप में जाना जाता है जो किसी व्यक्ति की शारीरिक अभिव्यक्ति को चित्रित करता है। यह उनके बचपन, स्वास्थ्य, चरित्र, प्रकृति और उनके या उनके जीवन की विभिन्न विशेषताओं पर प्रकाश डालता है। यह उसके कमजोर बिंदुओं, पसंद, और नापसंद, ताकत और कमजोरियों, एट वगैरह को जानने के अर्थ में एक अंतर्दृष्टि प्रदान करता है। इसलिए, यह किसी व्यक्ति के व्यक्तित्व के लिए बहुत उपयोगी है — वह कैसा व्यवहार करता है, वह क्या रवैया अपनाता है, आदि।"
              : `Ascendant is known to be the first house that portrays an individual’s physical
              manifestation. It also throws light on his childhood, health, character, nature, and
              various attributes of his or her life. It also provides an insight into the sense of
              knowing his or her weak points, likes, and dislikes, strength and weaknesses, et
              cetera. So, it is very helpful for an individual’s personality—how he or she behaves,
              what attitudes he or she adopts, et cetera.`}
            </p>
            <p className="bg-orange-500 p-5 text-center my-4 text-white">
            {data?.language === "Hindi" ?
            `आपका लगन है - 
            ${GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "aries" ? "मेष" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "taurus" ? "वृषभ" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "gemini" ? "मिथुन" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "cancer" ? "कर्क" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "leo" ? "सिंह" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "virgo" ? "कन्या" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "libra" ? "तुला" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "scorpio" ? "वृश्चिक" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "sagittarius" ? "धनु" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "capricorn" ? "मकर" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "aquarius" ? "कुंभ" :
            GemstoneSuggestion.asc_report?.ascendant.toLowerCase() === "pisces" ? "मीन" :
            GemstoneSuggestion.asc_report?.ascendant}
            `
            : `Your Ascendant is - ${GemstoneSuggestion.asc_report?.ascendant}` }
            
                
            </p>
            <p className="text-base">
            {data?.language === "Hindi" ? <>{AscendantHindi ? AscendantHindi : <>
              <div role="status" className='flex justify-center items-center' >
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </>}</> : 
            <>{GemstoneSuggestion.asc_report?.report}</>
            }</p>
          </div>
        </div>
      </div>
    </>
  );
}

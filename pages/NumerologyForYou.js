import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useRouter } from "next/router";
import "swiper/css";
import getUserLocation from "../config/GetLocation";
import { formatDate } from "../config/formatDatetoAstrologyAPI";
import fetchAstrologyData from "../config/getAstroAPI";
import HoroscopeFetchAPI from "../config/horoscopeFetchAPI";
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";

import Title from './pageAssets/Title';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';
import GlobImg from './assets/images/calculator/glob.png';
import CalculatorForm from './pageAssets/CalculatorForm'
import MetaData from './pageAssets/MetaData';
import ParagraphLineLoder from './pageAssets/ParagraphLineLoder';




export default function Kundli({ data }) {
  
  const [NumeroFavTime, setNumeroFavTime] = useState("");
  const [NumeroPlaceVastu, setNumeroPlaceVastu] = useState("");
  const [NumeroFastsReport, setNumeroFastsReport] = useState("");
  const [NumeroFavLord, setNumeroFavLord] = useState("");
  const [NumeroFavMantra, setNumeroFavMantra] = useState("");
  console.log(NumeroFavTime);
  const [NumeroFavTimeHindi, setNumeroFavTimeHindi] = useState("");
  const [NumeroPlaceVastuHindi, setNumeroPlaceVastuHindi] = useState("");
  const [NumeroFastsReportHindi, setNumeroFastsReportHindi] = useState("");
  const [NumeroFavLordHindi, setNumeroFavLordHindi] = useState("");
  const [NumeroFavMantraHindi, setNumeroFavMantraHindi] = useState("");
  
  useEffect(() => {
      const fetchData = async () => {
          const GetData = getLocalStorageItem('AstroAPICalculatorKey');
          if (GetData){
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
                const astrologyData = await fetchAstrologyData(data, "numero_fav_time");
                const numero_place_vastu = await fetchAstrologyData(data, "numero_place_vastu");
                const numero_fasts_report = await fetchAstrologyData(data, "numero_fasts_report");
                const numero_fav_lord = await fetchAstrologyData(data, "numero_fav_lord");
                const numero_fav_mantra = await fetchAstrologyData(data, "numero_fav_mantra");

                setNumeroFavTime(astrologyData);
                setNumeroPlaceVastu(numero_place_vastu);
                setNumeroFastsReport(numero_fasts_report);
                setNumeroFavLord(numero_fav_lord);
                setNumeroFavMantra(numero_fav_mantra);

                setInLocal(astrologyData?.description, "NumeroFavTime")
                setInLocal(numero_place_vastu?.description, "NumeroPlaceVastuHindi")
                setInLocal(numero_fasts_report?.description, "numero_fasts_report")
                setInLocal(numero_fav_lord?.description, "numero_fav_lord")
                setInLocal(numero_fav_mantra?.description, "numero_fav_mantra")
                
            } catch (error) {
            }
          }
      }
      fetchData();
  },[])


  const setInLocal = async (text, key) => {
    try {
      const convertedText = await chatGPTAnswer(text);
      if (convertedText) {
        switch (key) {
          case 'NumeroFavTime':
            setNumeroFavTimeHindi(convertedText);
            break;
          case 'NumeroPlaceVastuHindi':
            setNumeroPlaceVastuHindi(convertedText);
            break;
          case 'numero_fasts_report':
            setNumeroFastsReportHindi(convertedText);
            break;
          case 'numero_fav_lord':
            setNumeroFavLordHindi(convertedText);
            break;
          case 'numero_fav_mantra':
            setNumeroFavMantraHindi(convertedText);
            break;
          default:
            console.warn(`Unhandled data key: ${key}`);
            break;
        }
      }
    } catch (error) {
      console.error(`Error converting ${key} to Hindi:`, error);
    }
  };


  const chatGPTAnswer = async (Text) => {
    const dataGpt = {
      prompt: `convert this paragraph in hindi '${Text}'`,
      temperature: 0.5,
      max_tokens: 800
    };
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${apiKey}`,
      },
      body: JSON.stringify(dataGpt)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    const answer = result.choices[0].text.trim();
    return answer;
  }


  return (
    <>
    {data ? <MetaData data={data} /> : <></>}
      <div className="">
        <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
            {data ?
            <>
                {data.title ? <>
                <div className="mb-5">
                    <Title titleData={data.title} />
                </div>
                </>:<></>}
                
            </>
            : null}
            {NumeroFavTime ?
                <div className="p-5 my-5 shadow-lg">
                    {data?.language === "Hindi" ?<>
                    <p className="text-base font-bold mb-2">आपके लिए अनुकूल समय है</p>
                    <p className="text-base">{NumeroFavTimeHindi ? NumeroFavTimeHindi :<ParagraphLineLoder />}</p>
                    </>:<>
                    <p className="text-base font-bold mb-2">Favourable Time For You</p>
                    <p className="text-base">{NumeroFavTime.description}</p>
                    </>}
                </div>
            : null}
            {NumeroPlaceVastu ?
                <div className="p-5 my-5 shadow-lg">
                    {data?.language === "Hindi" ?<>
                    <p className="text-base font-bold mb-2">आपके लिए अनुकूल स्थान वास्तु</p>
                    <p className="text-base">{NumeroPlaceVastuHindi ? NumeroPlaceVastuHindi :<ParagraphLineLoder />}</p>
                    </>:<>
                    <p className="text-base font-bold mb-2">Favourable Place Vastu For You</p>
                    <p className="text-base">{NumeroPlaceVastu.description}</p>
                    </>}
                </div>
            : null}
            {NumeroFastsReport ?
                <div className="p-5 my-5 shadow-lg">
                    {data?.language === "Hindi" ?<>
                    <p className="text-base font-bold mb-2">आपके लिए व्रत का त्वरित समय</p>
                    <p className="text-base">{NumeroFastsReportHindi ? NumeroFastsReportHindi :<ParagraphLineLoder />}</p>
                    </>:<>
                    <p className="text-base font-bold mb-2">Fast Vrata Timing For You</p>
                    <p className="text-base">{NumeroFastsReport.description}</p>
                    </>}
                </div>
            : null}
            {NumeroFavLord ?
                <div className="p-5 my-5 shadow-lg">
                    {data?.language === "Hindi" ?<>
                    <p className="text-base font-bold mb-2">आपके लिए अनुकूल भगवान</p>
                    <p className="text-base">{NumeroFavLordHindi ? NumeroFavLordHindi :<ParagraphLineLoder />}</p>
                    </>:<>
                    <p className="text-base font-bold mb-2">Favourable Lord For You</p>
                    <p className="text-base">{NumeroFavLord.description}</p>
                    </>}
                </div>
            : null}
            {NumeroFavMantra ?
                <div className="p-5 my-5 shadow-lg">
                    {data?.language === "Hindi" ?<>
                    <p className="text-base font-bold mb-2">आपके लिए अनुकूल गायत्री मंत्र</p>
                    <p className="text-base">{NumeroFavMantraHindi ? NumeroFavMantraHindi :<ParagraphLineLoder />}</p>
                    </>:<>
                    <p className="text-base font-bold mb-2">Favourable Gayatri Mantra For You</p>
                    <p className="text-base">{NumeroFavMantra.description}</p>
                    </>}
                </div>
            : null}
        </div>
    </div>
    </>
  );
}

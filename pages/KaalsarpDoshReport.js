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
import { GPT_URLS, GPT_Key } from "../config/config";
import Title from './pageAssets/TitlewithBG';
import Description from './pageAssets/Description';
import MetaData from './pageAssets/MetaData';
import ParagraphLineLoder from './pageAssets/ParagraphLineLoder';


export default function KaalsarpDoshReport({ data }) {
    const [HoroscopeChart, setHoroscopeChart] = useState("");
    const [One_line, setOne_line] = useState("");
    const [Report, setReport] = useState("");

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
                  const astrologyData = await fetchAstrologyData(data, "kalsarpa_details");
                  setHoroscopeChart(astrologyData);
                  setOne_line("")
                  setReport("")
                  setInLocal(astrologyData?.one_line, "one_line")
                  setInLocal(astrologyData?.report?.report, "report")
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
          case 'one_line':
            setOne_line(convertedText);
            break;
          case 'report':
            setReport(convertedText);
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

    const response = await fetch(GPT_URLS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': GPT_Key
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
            <div className="mt-5">
                <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white">
                    
                    {data?.language === "Hindi" ?
                    "एक पंक्ति में कालसर्प"
                    :"Kaalsarp in one line"}
                    </h4>
                <div className="bg-gray-100 p-2 pb-4">
                    {data?.language === "Hindi" ?
                    <p>{One_line ? One_line : <><ParagraphLineLoder /></> }</p>
                    :
                    <p>{HoroscopeChart?.one_line ? HoroscopeChart.one_line : <><ParagraphLineLoder /></> }</p>
                    }
                </div>
            </div>
            <div className="mt-5">
                <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white ">
                    {data?.language === "Hindi" ?
                    "आपकी कालसर्प रिपोर्ट संक्षेप में"
                    : "Your Kaalsarp report in brief" }
                    
                    </h4>
                <div className="bg-gray-100 p-2 pb-4">
                    {data?.language === "Hindi" ?
                        <p>{Report ? <Description extra="text-base" descData={Report} /> : <><ParagraphLineLoder /></> }</p>
                    :
                        <p>{HoroscopeChart?.report?.report ? <Description extra="text-base" descData={HoroscopeChart.report.report} /> : <><ParagraphLineLoder /></> }</p>
                    }
                    
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

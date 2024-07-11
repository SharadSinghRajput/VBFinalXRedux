import React, { useEffect, useState } from "react";
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
import CalculatorForm from './pageAssets/CalculatorForm';

export default function Kundli({ data }) {
  
  const [RudrakshaSuggestion, setRudrakshaSuggestion] = useState(null);
  const [RudrakshaSuggestionHindi, setRudrakshaSuggestionHindi] = useState("");

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
                const astrologyData = await fetchAstrologyData(data, "rudraksha_suggestion");
                setRudrakshaSuggestion(astrologyData);
            } catch (error) {
                console.error("Failed to fetch astrology data", error);
            }
          }
      }
      fetchData();
  }, []);


  const setInLocal = async (Text, dob) => {
    const convertedText = await chatGPTAnswer(Text);
    if(convertedText){
      setLocalStorageItem("RudrakshaSuggestionHindi", {
        hindiText: convertedText,
        timestamp: Date.now(),
        dobData: dob,
      });
      setRudrakshaSuggestionHindi(convertedText);
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

  
  console.log(RudrakshaSuggestion);
  return (
    <>
      <div className="">
        <div className={`bg-white mx-auto max-w-7xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
          {data && data.title && (
            <div className="mb-5">
              <Title titleData={data.title} />
            </div>
          )}
          {RudrakshaSuggestion && (
            <div className="grid grid-cols-1 gap-5">
              <div className="p-5 bg-blue-800 rounded-lg text-white">
                <h2 className="text-xl font-bold mb-2">Your Rudraksha Suggestion</h2>
                <div className="mb-3">
                  <strong>Name:</strong> {RudrakshaSuggestion.name}
                  {RudrakshaSuggestionHindi}
                </div>
                <div className="mb-3">
                  <strong>Recommendation:</strong> {RudrakshaSuggestion.recommend}
                </div>
                <div className="mb-3">
                  <strong>Detail:</strong> {RudrakshaSuggestion.detail}
                </div>
                {/* {RudrakshaSuggestion.img_url && (
                  <div className="mb-3">
                    <Image src={`https://vedicrishi.in/rudraksha${RudrakshaSuggestion.img_url.replace('/img', '')}`} alt="Rudraksha Image" width={100} height={100} />
                  </div>
                )} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

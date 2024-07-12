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
import ParagraphLineLoder from './pageAssets/ParagraphLineLoder';

export default function Kundli({ data }) {
  
  const [RudrakshaSuggestion, setRudrakshaSuggestion] = useState(null);
  const [RDRName, setRDRName] = useState("");
  const [RDRrecommend, setRDRrecommend] = useState("");
  const [RDRdetail, setRDRdetail] = useState("");

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
                setRDRName("")
                setRDRrecommend("")
                setRDRdetail("")
                setInLocal(astrologyData?.name, "name")
                setInLocal(astrologyData?.recommend, "recommend")
                setInLocal(astrologyData?.detail, "detail")
            } catch (error) {
                console.error("Failed to fetch astrology data", error);
            }
          }
      }
      fetchData();
  }, []);


  const setInLocal = async (text, key) => {
    try {
      const convertedText = await chatGPTAnswer(text);
      if (convertedText) {
        switch (key) {
          case 'name':
            setRDRName(convertedText);
            break;
          case 'recommend':
            setRDRrecommend(convertedText);
            break;
          case 'detail':
            setRDRdetail(convertedText);
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
              {data?.language === "Hindi" ? <>
                <h2 className="text-xl font-bold mb-2">आपका रुद्राक्ष सुझाव</h2>
              </>:<>
                <h2 className="text-xl font-bold mb-2">Your Rudraksha Suggestion</h2>
              </>}
                <div className="mb-3 flex gap-5 max-md:flex-col">
                  {data?.language === "Hindi" ? <>
                    <strong>नाम:</strong> {RDRName ? RDRName : <><ParagraphLineLoder /></>}
                  </> : <>
                    <strong>Name:</strong> {RudrakshaSuggestion.name ? RudrakshaSuggestion.name : <><ParagraphLineLoder /></>}
                  </> }
                </div>
                <div className="mb-3 flex gap-5 max-md:flex-col">
                  {data?.language === "Hindi" ? <>
                    <strong>सिफ़ारिश:</strong> {RDRrecommend ? RDRrecommend : <><ParagraphLineLoder /></>}
                  </> : <>
                    <strong>Recommendation:</strong> {RudrakshaSuggestion.recommend ? RudrakshaSuggestion.recommend : <><ParagraphLineLoder /></>}
                  </> }
                  
                </div>
                <div className="mb-3 flex gap-5 max-md:flex-col">
                  {data?.language === "Hindi" ? <>
                    <strong>विवरण:</strong> {RDRdetail ? RDRdetail : <><ParagraphLineLoder /></>}
                  </> : <>
                    <strong>Detail:</strong> {RudrakshaSuggestion.detail ? RudrakshaSuggestion.detail : <><ParagraphLineLoder /></>}
                  </> }
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

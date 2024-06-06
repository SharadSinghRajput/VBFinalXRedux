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
  
  console.log(RudrakshaSuggestion);
  return (
    <>
      <div className="">
        <div className={`bg-white mx-auto max-w-full shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
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

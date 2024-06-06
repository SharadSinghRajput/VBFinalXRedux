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




export default function Kundli({ data }) {
  
  const [GemstoneSuggestion, setGemstoneSuggestion] = useState("");
  console.log(GemstoneSuggestion);

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
                const astrologyData = await fetchAstrologyData(data, "general_ascendant_report");
                setGemstoneSuggestion(astrologyData);
            } catch (error) {
            }
          }
      }
      fetchData();
  },[])

  return (
    <>
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
            <div className="">
                <p className="font-bold text-base">What is Ascendant ?</p>
                <p className="text-base">Ascendant is known to be the first house that portrays an individual’s physical manifestation. It also throws light on his childhood, health, character, nature, and various attributes of his or her life. It also provides an insight into the sense of knowing his or her weak points, likes, and dislikes, strength and weaknesses, et cetera. So, it is very helpful for an individual’s personality—how he or she behaves, what attitudes he or she adopts, et cetera.</p>
                <p className="bg-orange-500 p-5 text-center my-4 text-white">{GemstoneSuggestion.asc_report?.ascendant}</p>
                <p className="text-base">{GemstoneSuggestion.asc_report?.report}</p>
            </div>
        </div>
    </div>
    </>
  );
}

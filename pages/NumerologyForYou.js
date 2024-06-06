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
  
  const [NumeroFavTime, setNumeroFavTime] = useState("");
  const [NumeroPlaceVastu, setNumeroPlaceVastu] = useState("");
  const [NumeroFastsReport, setNumeroFastsReport] = useState("");
  console

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
                setNumeroFavTime(astrologyData);
                setNumeroPlaceVastu(numero_place_vastu);
                setNumeroFastsReport(numero_place_vastu);
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
            {NumeroFavTime ?
                <div className="p-5 my-5 shadow-lg">
                    <p className="text-base font-bold mb-2">{NumeroFavTime.title}</p>
                    <p className="text-base">{NumeroFavTime.description}</p>
                </div>
            : null}
            {NumeroPlaceVastu ?
                <div className="p-5 my-5 shadow-lg">
                    <p className="text-base font-bold mb-2">{NumeroPlaceVastu.title}</p>
                    <p className="text-base">{NumeroPlaceVastu.description}</p>
                </div>
            : null}
            {NumeroFastsReport ?
                <div className="p-5 my-5 shadow-lg">
                    <p className="text-base font-bold mb-2">{NumeroFastsReport.title}</p>
                    <p className="text-base">{NumeroFastsReport.description}</p>
                </div>
            : null}
        </div>
    </div>
    </>
  );
}

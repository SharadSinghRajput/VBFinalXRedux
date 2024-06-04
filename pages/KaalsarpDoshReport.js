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
import Description from './pageAssets/Description';




export default function KaalsarpDoshReport({ data }) {
    console.log(data);
    const [HoroscopeChart, setHoroscopeChart] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const GetData = getLocalStorageItem('AstroAPIHitDataKey');
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
                    <Title titleData={data.title} />
                </>:<></>}
                
                {data.description ?
                    <Description descData={data.description} />
                :<></>}
            </>
            : null}

            {HoroscopeChart ?
                <>
                    <div className="mt-5">
                        <p>{HoroscopeChart.report.report}</p>
                    </div>
                    <div className="mt-5">
                        <h4 class="border-b border-b-orange-500 mb-4">Kaalsarp in one line</h4>
                        <p>{HoroscopeChart.report.report}</p>
                    </div>
                </>
            : null}
            {/* <h1>Kaalsarp <span> Dosha</span></h1> */}
        </div>
    </div>
    </>
  );
}

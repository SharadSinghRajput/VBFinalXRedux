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
  
  const [SadhesatiCurrentStatus, setSadhesatiCurrentStatus] = useState("");
  const [Remedies, setRemedies] = useState("");
  

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
                const astrologyData = await fetchAstrologyData(data, "sadhesati_current_status");
                const sadhesati_remedies = await fetchAstrologyData(data, "sadhesati_remedies");
                setSadhesatiCurrentStatus(astrologyData);
                setRemedies(sadhesati_remedies);
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
                {data.description ?
                <Description descData={data.description} />
                :<></>}
                
            </>
            : null}
            <div className="">
                <h4 class="font-bold text-xl border-b-4 border-b-orange-500 mb-2">Status</h4>
                {SadhesatiCurrentStatus ?
                <>
                    <p className="">{SadhesatiCurrentStatus.is_undergoing_sadhesati}</p>
                    <p className="">Moon Sign : {SadhesatiCurrentStatus.moon_sign}</p>
                    <p className="">Saturn Sign : {SadhesatiCurrentStatus.saturn_sign}</p>
                </>
                : null}
                {Remedies ?
                <>
                    <h4 class="font-bold text-xl border-b-4 border-b-orange-500 mt-5 mb-2">Remedies for Sadesati</h4>
                    <ul className="list-disc ml-5">
                        {Remedies.remedies.map((item, index)=>(
                        <li key={index} className="text-base my-1">{item}</li>
                        ))}
                    </ul>
                </>
                : null}
            </div>
        </div>
    </div>
    </>
  );
}

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
import Title from './pageAssets/TitlewithBG';
import Description from './pageAssets/Description';




export default function KaalsarpDoshReport({ data }) {
    const router = useRouter();
    const [AstroDetails, setAstroDetails] = useState("");
    console.log(AstroDetails);

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
                  const astroDetails = await fetchAstrologyData(data, "astro_details");
                  setAstroDetails(astroDetails);
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
{/*                 
                {data.description ?
                    <Description extra="text-base" descData={data.description} />
                :<></>} */}
            </>
            : null}

            {AstroDetails ?
                <>
                    <div className="mt-5">
                        <div className="bg-orange-100 p-2 pb-4">
                            <p className="text-base font-bold">Your Moon Sign : {AstroDetails.ascendant} </p>
                            <p className="text-base font-bold flex gap-2">Now check your Daily rashifal
                                <button className="text-blue-500" onClick={()=> router.push(`horoscope/daily-horoscope/${AstroDetails.ascendant}.php`)}> Click Here</button>
                            </p>
                            
                        </div>
                    </div>
                </>
            : null}
            {/* <h1>Kaalsarp <span> Dosha</span></h1> */}
        </div>
    </div>
    </>
  );
}

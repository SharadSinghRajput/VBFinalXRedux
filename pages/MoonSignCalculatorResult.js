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
import MetaData from './pageAssets/MetaData';
import HoroscopeIcon from "../config/HoroscopeIcon";
import { MAIN_URL } from "../config/config";




export default function KaalsarpDoshReport({ data }) {
    const router = useRouter();
    const [AstroDetails, setAstroDetails] = useState("");
    const [BasicDetails, setBasicDetails] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            const GetData = getLocalStorageItem('AstroAPICalculatorKey');
            const FormData = getLocalStorageItem('AutoFillFormDataKey');
            if(FormData) setBasicDetails(FormData)
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

    const getHoroscopeIconUrl = (ascendant) => {
        const icon = HoroscopeIcon.find(icon => icon.name.toLowerCase() === ascendant.toLowerCase());
        console.log(icon);
        return icon ? icon.imageUrl.src : null;
    };
 
    // useEffect(() => {
    //     getHoroscopeIconUrl("Leo")
    // },[])

  return (
    <>
    {data ? <MetaData data={data} /> : null}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">    
                {BasicDetails ?
                <>
                <div className="bg-blue-800 p-5 rounded-lg h-full">
                    <p className="font-bold text-lg text-white mb-4">User Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <p className="text-base text-white"> Name : {BasicDetails.name}</p>
                            <p className="text-base text-white"> TOB : {BasicDetails.dob.split(" ")[1]}</p>
                        </div>
                        <div>
                            <p className="text-base text-white"> DOB : {BasicDetails.dob.split(" ")[0]}</p>
                            <p className="text-base text-white"> Place : {BasicDetails.birth_place}
                                <span className="block text-xs font-light text-white">Latitude : {BasicDetails.birth_place_latitude}</span>
                                <span className="block text-xs font-light text-white">Longitude : {BasicDetails.birth_place_longitude}</span>
                            </p>
                        </div>
                    </div>
                </div>
                </>
                : <></>}
                {AstroDetails ?
                    <>
                        <div className="rounded-lg overflow-hidden h-full bg-orange-100">
                            <div className="p-2 flex flex-col sm:flex-row gap-4">
                                <Image src={getHoroscopeIconUrl(AstroDetails.ascendant)} width={100} height={100} className="bg-white p-4 rounded-xl" />
                                <div>
                                    <p className="text-base font-bold">Your Moon Sign : {AstroDetails.ascendant} </p>
                                    <p className="text-base font-bold flex gap-2">Now check your Daily rashifal
                                        <button className="text-blue-500" onClick={()=> router.push(`horoscope/daily-horoscope/${AstroDetails.ascendant}.php`)}> Click Here</button>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </>
                : null}
            </div>
            {/* <h1>Kaalsarp <span> Dosha</span></h1> */}
        </div>
    </div>
    </>
  );
}

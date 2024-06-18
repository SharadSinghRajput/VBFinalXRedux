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




export default function KaalsarpDoshReport({ data }) {
    const [PitraDosha, setPitraDosha] = useState("");

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
                  const astrologyData = await fetchAstrologyData(data, "pitra_dosha_report");
                  setPitraDosha(astrologyData);
              } catch (error) {
              }
            }
        }
        fetchData();
    },[])
 
    

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
                
                {/* {data.description ?
                    <div className="mt-5">
                        <Description extra="text-base" descData={data.description} />
                    </div>
                :<></>} */}
            </>
            : null}

            {PitraDosha ?
                <>
                <div className="mt-5">
                    <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white">What is Pitri Dosha</h4>
                    <div className="bg-orange-100 p-2 pb-4">
                        <p>{PitraDosha.what_is_pitri_dosha}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white">Conclusion</h4>
                    <div className="bg-orange-100 p-2 pb-4">
                        <p>{PitraDosha.conclusion}</p>
                    </div>
                </div>
                {PitraDosha.remedies ?
                    <div className="mt-5">
                        <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white">Remedies</h4>
                        <div className="bg-orange-100 p-2 pb-4">
                            <ul className="list-disc ml-5">
                                {PitraDosha.remedies.map((item, index)=>(
                                <li key={index} className="text-base my-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                : null}
                {PitraDosha.effects ?
                    <div className="mt-5">
                        <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white">Effects</h4>
                        <div className="bg-orange-100 p-2 pb-4">
                            <ul className="list-disc ml-5">
                                {PitraDosha.effects.map((item, index)=>(
                                <li key={index} className="text-base my-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                : null}
                </>
            : null}
            {/* <h1>Kaalsarp <span> Dosha</span></h1> */}
        </div>
    </div>
    </>
  );
}

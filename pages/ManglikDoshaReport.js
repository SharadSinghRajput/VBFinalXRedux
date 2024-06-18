import React, { Fragment, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import { useRouter } from "next/router";
import "swiper/css";
import fetchAstrologyData from "../config/getAstroAPI";
import HoroscopeFetchAPI from "../config/horoscopeFetchAPI";
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";
import Title from './pageAssets/TitlewithBG';
import Description from './pageAssets/Description';
import MetaData from './pageAssets/MetaData';





export default function KaalsarpDoshReport({ data }) {
    const router = useRouter();
    const [Manglik, setManglik] = useState("");

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
                  const astrologyData = await fetchAstrologyData(data, "manglik");
                  setManglik(astrologyData);
                  console.log(astrologyData);
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
                
                {data.description ?
                    <div className="mt-5">
                        <Description extra="text-base" descData={data.description} />
                    </div>
                :<></>}
            </>
            : null}
            <div className="mt-5">
                <div className="bg-orange-100 p-2 pb-4">
                    <p>Mangal Dosha doesn't always cause problems; sometimes, it can be a mere eye-wash. To gain clarity on your Mangal Dosha.</p>
                    <button onClick={()=> router.push("/services/online-reports/mangal-dosha-calculator.php")} className="font-bold text-blue-500">Click here to know more.</button>
                </div>
            </div>
            {Manglik ?
                <>
                <div className="mt-5">
                    <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white">Manglik Report</h4>
                    <div className="bg-orange-100 p-2 pb-4">
                        <p>{Manglik.manglik_report}</p>
                    </div>
                </div>
                {Manglik.manglik_present_rule ?
                    <div className="mt-5 grid gap-5 grid-cols-2">
                        {Manglik.manglik_present_rule.based_on_aspect ?
                            <div>
                                <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white">Manglik Report</h4>
                                <ul className="list-disc ml-5">
                                    {Manglik.manglik_present_rule.based_on_aspect.map((item, index)=>(
                                    <li key={index} className="text-base my-1">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        : null}
                        {Manglik.manglik_present_rule.based_on_house ?
                            <div>
                                <h4 class="border-b-2 bg-blue-900 p-2 text-lg font-bold text-white">Manglik Report</h4>
                                <ul className="list-disc ml-5">
                                    {Manglik.manglik_present_rule.based_on_house.map((item, index)=>(
                                    <li key={index} className="text-base my-1">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        : null}
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

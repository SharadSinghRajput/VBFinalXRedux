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
import MetaData from './pageAssets/MetaData';

export default function Kundli({ data }) {
  
  const [GemstoneSuggestion, setGemstoneSuggestion] = useState("");

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
                const astrologyData = await fetchAstrologyData(data, "basic_gem_suggestion");
                setGemstoneSuggestion(astrologyData);
            } catch (error) {
            }
          }
      }
      fetchData();
  },[])

  return (
    <>
      <MetaData data={data} />
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
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {GemstoneSuggestion ?
                Object.entries(GemstoneSuggestion).map(([category, attributes]) => (
                    <div key={category} >
                      <table className="w-full rounded-lg overflow-hidden" >
                        <tbody>
                          <tr>
                            <th className="p-2 bg-blue-900 text-white border-b border-b-white/50" colSpan={2}>Your {category} Stone</th>
                          </tr>
                          {Object.entries(attributes).map(([key, value]) => (
                            <tr key={key}>
                              <td className="text-sm bg-blue-800 p-2 text-white border-b capitalize border-b-white/50"> {key.includes('_') ? key.replace('_', ' ') : key}</td>
                              <td className="text-sm bg-blue-700 p-2 text-white border-b border-b-white/50">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))
              : null}
            </div>
        </div>
    </div>
    </>
  );
}

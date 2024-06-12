import React, { Fragment, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Image from "next/image";
import { useRouter } from "next/router";
import "swiper/css";
import getUserLocation from "../config/GetLocation";
import { formatDate } from "../config/formatDatetoAstrologyAPI";
import fetchAstrologyData from "../config/getAstroAPI";
import HoroscopeFetchAPI from "../config/horoscopeFetchAPI";
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";
import Description from "./pageAssets/Description";
import Title from "./pageAssets/TitlewithBG";

export default function KaalsarpDoshReport({ data }) {
  const router = useRouter();
  const [AshtakootPoints, setAshtakootPoints] = useState("");
  const [Male, setMale] = useState("");
  const [Female, setFemale] = useState("");
  const [BothData, setBothData] = useState("");
  const [Chart, setChart] = useState("");
  const [FemaleChart, setFemaleChart] = useState("");
console.log(AshtakootPoints)
  useEffect(() => {
    const fetchData = async () => {
      const MaleData = getLocalStorageItem("HMMaleKey");
      const FemaleData = getLocalStorageItem("HMFemaleKey");
      if (MaleData) setMale(MaleData);
      if (FemaleData) setFemale(FemaleData);
      const GetData = getLocalStorageItem("toHitKundliMAPIKey");
      if (GetData) {
        setBothData(GetData)

       const MD = {
            day: GetData.m_day,
            month: GetData.m_month,
            year: GetData.m_year,
            hour: GetData.m_hour,
            min: GetData.m_min,
            lat: GetData.m_lat,
            lon: GetData.m_lon,
            tzone: GetData.m_tzone,
       }
       fetchChart("D1", GetData)
        try {
          const AshtakootPoints = await fetchAstrologyData(GetData, "match_ashtakoot_points");
          setAshtakootPoints(AshtakootPoints);
        } catch (error) {}
      }
    };
    fetchData();
  }, []);


  const fetchChart = async (ChartID, Data) => {

    const MD = {
        day: BothData.m_day !== undefined ? BothData.m_day : Data.m_day,
        month: BothData.m_month !== undefined ? BothData.m_month : Data.m_month,
        year: BothData.m_year !== undefined ? BothData.m_year : Data.m_year,
        hour: BothData.m_hour !== undefined ? BothData.m_hour : Data.m_hour,
        min: BothData.m_min !== undefined ? BothData.m_min : Data.m_min,
        lat: BothData.m_lat !== undefined ? BothData.m_lat : Data.m_lat,
        lon: BothData.m_lon !== undefined ? BothData.m_lon : Data.m_lon,
        tzone: BothData.m_tzone !== undefined ? BothData.m_tzone : Data.m_tzone,
    }
    
    const FD = {
        day: BothData.f_day !== undefined ? BothData.f_day : Data.f_day,
        month: BothData.f_month !== undefined ? BothData.f_month : Data.f_month,
        year: BothData.f_year !== undefined ? BothData.f_year : Data.f_year,
        hour: BothData.f_hour !== undefined ? BothData.f_hour : Data.f_hour,
        min: BothData.f_min !== undefined ? BothData.f_min : Data.f_min,
        lat: BothData.f_lat !== undefined ? BothData.f_lat : Data.f_lat,
        lon: BothData.f_lon !== undefined ? BothData.f_lon : Data.f_lon,
        tzone: BothData.f_tzone !== undefined ? BothData.f_tzone : Data.f_tzone,
    }
    
    try {
        const Chart = await fetchAstrologyData(MD, `horo_chart_image/${ChartID}`);
        const FemaleChart = await fetchAstrologyData(FD, `horo_chart_image/${ChartID}`);
        setChart(Chart);
        setFemaleChart(FemaleChart);
      } catch (error) {}
  }

  function formatDate(date) {
    if (typeof date === "string" || date instanceof String) {
      date = new Date(date);
    }

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day} ${month} ${year} ${hours}:${minutes}`;
  }
  function formatDatetoShow(date) {
    if (typeof date === "string" || date instanceof String) {
      date = new Date(date);
    }

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day} ${month} ${year}`;
  }
  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const TDStyle = "text-sm bg-blue-800 p-2 text-white border-b font-light capitalize border-b-white/50"
  return (
    <>
      <div className="">
        <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
          <h1 className="p-4 bg-blue-500 text-white uppercase font-bold text-xl">
            Matching Report
          </h1>
          <div className="shadow-lg p-5">
            <p className="text-base text-gray-800">
              {Male.name} width {Female.name}
            </p>
            {Male.dob ? (
              <p className="text-base text-gray-800">
                {formatDate(Male.dob)}
                {", "}
                {Male.birth_place ? Male.birth_place.city_name : null}
              </p>
            ) : null}
            {Female.dob ? (
              <p className="text-base text-gray-800">
                {formatDate(Female.dob)}
                {", "}
                {Female.birth_place ? Female.birth_place.city_name : null}
              </p>
            ) : null}
          </div>
          <div className="mt-5">
            <table className="rounded-lg overflow-hidden">
              <tbody>
                <tr>
                  <th className="p-2 bg-blue-900 text-white border-b border-b-white/50" height="33" colspan="3">
                    <h2>Birth Details</h2>
                  </th>
                </tr>
                <tr>
                  <th className="p-2 bg-blue-900 text-white border-b border-b-white/50">Male</th>
                  <th className="p-2 bg-blue-900 text-white border-b border-b-white/50">Birth Details</th>
                  <th className="p-2 bg-blue-900 text-white border-b border-b-white/50">Female</th>
                </tr>
                <tr>
                  <td className={TDStyle}>{Male.name}</td>
                  <td className={TDStyle}>Full Name</td>
                  <td className={TDStyle}>{Female.name}</td>
                </tr>
                <tr>
                  <td className={TDStyle}>{Male.dob ? formatDatetoShow(Male.dob) : null}</td>
                  <td className={TDStyle}>Date of Birth</td>
                  <td className={TDStyle}>{Female.dob ? formatDatetoShow(Female.dob) : null}</td>
                </tr>
                <tr>
                  <td className={TDStyle}>{formatTime(Male.dob)}</td>
                  <td className={TDStyle}>Birth Time</td>
                  <td className={TDStyle}>{formatTime(Female.dob)}</td>
                </tr>
                <tr>
                  <td className={TDStyle}>{Male.birth_place ? Male.birth_place.city_name : null}</td>
                  <td className={TDStyle}>Birth Place</td>
                  <td className={TDStyle}>{Female.birth_place ? Female.birth_place.city_name : null}</td>
                </tr>
                <tr>
                    <td className={TDStyle}>{Male.birth_place ? Male.birth_place.latitude : null}</td>
                  <td className={TDStyle}>Latitude</td>
                  <td className={TDStyle}>{Female.birth_place ? Female.birth_place.latitude : null}</td>
                </tr>
                <tr>
                <td className={TDStyle}>{Male.birth_place ? Male.birth_place.longitude : null}</td>
                  <td className={TDStyle}>Longitude</td>
                  <td className={TDStyle}>{Female.birth_place ? Female.birth_place.longitude : null}</td>
                </tr>
                <tr>
                  <td className={TDStyle}>{BothData ? BothData.m_tzone : null}</td>
                  <td className={TDStyle}>Timezone</td>
                  <td className={TDStyle}>{BothData ? BothData.f_tzone : null}</td>
                </tr>

                {/* <tr>
                  <td className={TDStyle}>7:3:2</td>
                  <td className={TDStyle}>Sunrise</td>
                  <td className={TDStyle}>5:36:16</td>
                </tr>
                <tr>
                  <td className={TDStyle}>18:6:33</td>
                  <td className={TDStyle}>Sunset</td>
                  <td className={TDStyle}>19:17:46</td>
                </tr>
                <tr>
                  <td className={TDStyle}>23.844659528138</td>
                  <td className={TDStyle}>Ayanamsha</td>
                  <td className={TDStyle}>23.848055991986</td>
                </tr>
                <tr>
                  <td className={TDStyle}>Vipra</td>
                  <td className={TDStyle}>Varna</td>
                  <td className={TDStyle}>Shoodra</td>
                </tr>
                <tr>
                  <td className={TDStyle}>Keetak</td>
                  <td className={TDStyle}>Vashya</td>
                  <td className={TDStyle}>Maanav</td>
                </tr>
                <tr>
                  <td className={TDStyle}>Mrig</td>
                  <td className={TDStyle}>Yoni</td>
                  <td className={TDStyle}>Ashwa</td>
                </tr>
                <tr>
                  <td className={TDStyle}>Rakshasa</td>
                  <td className={TDStyle}>Gan</td>
                  <td className={TDStyle}>Rakshasa</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <button onClick={()=> fetchChart("D1", undefined)} className="p-2 px-4 bg-blue-500 text-white">Birth(Lagna) Chart</button>
            <button onClick={()=> fetchChart("MOON", undefined)} className="p-2 px-4 bg-blue-500 text-white">Moon Chart</button>
            <button onClick={()=> fetchChart("D9", undefined)} className="p-2 px-4 bg-blue-500 text-white">Navmansha Chart</button>
            <div className="mt-5">
                <div className="flex justify-start items-center">
                    {Chart.svg ? <>
                    <div>
                        <p>{Male.name}</p>
                        <div className='shadow-xl rounded-lg p-2 bg-white' dangerouslySetInnerHTML={{ __html: Chart.svg }} />
                    </div>
                    </>:<></>}
                    {FemaleChart.svg ? <>
                    <div>
                        <p>{Female.name}</p>
                        <div className='shadow-xl rounded-lg p-2 bg-white' dangerouslySetInnerHTML={{ __html: FemaleChart.svg }} />
                    </div>
                    </>:<></>}
                </div>
            </div>
          <div className="mt-5">
          {AshtakootPoints ? (
  <div>
    <table className="w-full rounded-lg overflow-hidden">
      <tbody>
        <tr>
          <th className="p-2 bg-blue-900 text-white border-b border-white/50"></th>
          <th className="p-2 bg-blue-900 text-white border-b border-white/50">Description</th>
          <th className="p-2 bg-blue-900 text-white border-b border-white/50">Male Attribute</th>
          <th className="p-2 bg-blue-900 text-white border-b border-white/50">Female Attribute</th>
          <th className="p-2 bg-blue-900 text-white border-b border-white/50">Received Points</th>
          <th className="p-2 bg-blue-900 text-white border-b border-white/50">Total Points</th>
        </tr>
        {Object.entries(AshtakootPoints).map(([key, value]) => ((
             <tr key={key}>
             <td className="text-sm bg-blue-700 p-2 text-white border-b capitalize border-b-white/50">{key}</td>
             {key === "conclusion" ? (
               <td colSpan={5} className="text-sm bg-blue-700 p-2 text-white border-b capitalize border-b-white/50">{value.report}</td>
             ) : (
               <>
                 <td className="text-sm bg-blue-700 p-2 text-white border-b capitalize border-b-white/50">{value.description}</td>
                 <td className="text-sm bg-blue-700 p-2 text-white border-b border-b-white/50">{value.male_koot_attribute}</td>
                 <td className="text-sm bg-blue-700 p-2 text-white border-b border-b-white/50">{value.female_koot_attribute}</td>
                 <td className="text-sm bg-blue-700 p-2 text-white border-b border-b-white/50">{value.received_points}</td>
                 <td className="text-sm bg-blue-700 p-2 text-white border-b border-b-white/50">{value.total_points}</td>
               </>
             )}
           </tr>
          )
        ))}
      </tbody>
    </table>
  </div>
) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

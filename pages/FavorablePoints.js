import React, { Fragment, useEffect, useState } from "react";
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

const buttonLabels = [
    "sun",
    "moon",
    "mars",
    "mercury",
    "jupiter",
    "venus",
    "saturn"
  ];
  

export default function FavorablePoints({ data }) {
    
  const [Planet, setPlanet] = useState("sun");
  const [numeroTable, setNumeroTable] = useState("");
  const [Loding, setLoding] = useState(false);




  
  const fetchDataCurrent = async (value) => {
    setLoding(true)
    const AstroDet = getLocalStorageItem("AstroAPIHitDataKey");
    if (AstroDet) {
        const data = {
            day: AstroDet.dobData.day,
            month: AstroDet.dobData.month,
            year: AstroDet.dobData.year,
            hour: AstroDet.dobData.hour,
            min: AstroDet.dobData.min,
            lat: AstroDet.birth_place_latitude,
            lon: AstroDet.birth_place_longitude,
            tzone: AstroDet.tzone,
        };
        try {
        const major_chardasha = await fetchAstrologyData(data, `numero_table`);
        setNumeroTable(major_chardasha);
        console.log(major_chardasha);
        
        } catch (error) {
            setLoding(false)
        }
    }
  };

  useEffect(() => {
    fetchDataCurrent();
  }, []);





  return (
    <>
      {data ? (
        <div className="pt-5">
          <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5  mb-5 rounded-lg`}>
            <h1 className="text-lg font-bold">Your Favorable Points</h1>
            <div className="my-5">
              <div className="flex-1 flex flex-wrap gap-2">
                {numeroTable ?<>
                <div className=" p-4 border-[1px] border-orange-500 rounded-lg shadow-lg" >
                    <p className="text-xl font-bold text-center">{numeroTable.destiny_number}</p>
                    <p className="text-sm text-center">Destiny Number</p>
                </div>
                <div className=" p-4 border-[1px] border-orange-500 rounded-lg shadow-lg" >
                    <p className="text-xl font-bold text-center">{numeroTable.radical_number}</p>
                    <p className="text-sm text-center">Radical Number</p>
                </div>
                <div className=" p-4 border-[1px] border-orange-500 rounded-lg shadow-lg" >
                    <p className="text-xl font-bold text-center">{numeroTable.name_number}</p>
                    <p className="text-sm text-center">Name number</p>
                </div>
                <div className=" p-4 border-[1px] border-orange-500 rounded-lg shadow-lg" >
                    <p className="text-xl font-bold text-center">{numeroTable.evil_num}</p>
                    <p className="text-sm text-center">Evil number</p>
                </div>
                </>: <></>}
              </div>
            </div>
            <div className="my-5">
              <div className="flex-1 grid grid-cols-2 gap-5">
                <table className="rounded-lg overflow-hidden">
                    <tbody>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Name</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.name}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Date</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.date}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Destiny number</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.destiny_number}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Radical number</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.radical_number}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Name number</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.name_number}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Evil num</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.evil_num}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Fav color</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.fav_color}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Fav day</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.fav_day}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Fav god</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.fav_god}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="rounded-lg overflow-hidden">
                    <tbody>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Fav mantra</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.fav_mantra}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Fav metal</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.fav_metal}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Fav stone</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.fav_stone}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Fav substone</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.fav_substone}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Friendly num</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.friendly_num}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Neutral num</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.neutral_num}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Radical num</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.radical_num}</td>
                        </tr>
                        <tr>
                            <td className="bg-orange-50 p-2 px-5 border-b border-b-white">Radical ruler</td>
                            <td className="bg-orange-100 p-2 px-5 border-b border-b-white">{numeroTable.radical_ruler}</td>
                        </tr>
                    </tbody>
                </table>

              </div>
            </div>
            <div className="my-5">
              <div className="flex-1 flex flex-wrap gap-2">
                <h4 class="border-b-2 border-b-orange-500 text-lg font-bold">What the Number Says About You</h4>
                <p className="text-base"> Due to the influence of Radical number 1, you will be a person with stable beliefs. Whenever you will give your word to anyone, you will try to fulfill it. Your willpower will be unshakable. There will be stability in your mental and friendly relations.Whatever idea you will form regarding your intimate relations, you will always try to fulfill it for long time.Your love and longtime relations will be everlasting. If due to any reason you develop acrimony or dispute with someone, these will also be long lasting. By virtue of your independent thinking native, you will feel it inconvenient to work according to other wishes. Rather than working under someones regime, you will thrive in self-determining environment. It will be your consistent endeavour that whatever you perform should be unbiased and unconstrained. Interference of anyone will be a taboo to you.As is the lord of Radical number 1, traits related to Sun will be present in you more or less. Due to Suns influence, you will have a tendency to help,cure others. You would like to shine like Sun in social circles. An urge to be a chief of social associations will be with you ever.You will earn these offices by your hard work and dedication. </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

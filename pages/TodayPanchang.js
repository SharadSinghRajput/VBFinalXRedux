("use client");
import React, { useEffect, useState } from "react";
import Banner from "./pageAssets/Banner";
import Description from "./pageAssets/Description";
import Holder from "./pageAssets/Holder";
import MetaData from "./pageAssets/MetaData";
import Title from "./pageAssets/TitlewithBG";
import { useRouter } from "next/router";
import { MAIN_URL, MAIN_URL_HINDI } from '../config/config';
import getUserLocation from "../config/GetLocation";
import { formatDate } from '../config/formatDatetoAstrologyAPI';
import Datetime from "react-datetime";
import fetchAstrologyData from '../config/getAstroAPI';
import Image from "next/image";


export default function DefaultPage({ data }) {
  const router = useRouter();
  const [PanchangD, setPanchang] = useState("");
  const [DatetoShow, setDatetoShow] = useState("");
  const [mainURL, setMainURL] = useState(MAIN_URL);
  const [selectedDateTime, setselectedDateTime] = useState(new Date());
  const [LangButton, setLangButton] = useState(data?.language);
  const [lang, setLang]= useState(data?.language);
  const [Loding, setLoding] = useState(false);

  let inputProps = {
    placeholder: "Date Change",
    class: "w-full bg-gray-100 placeholder:text-gray-900"
  };


  const GetPanchang = async (DatetoHit) => {
    setLoding(true)
    let Latitude;
    let Longitude;

    const getUserLocationPromise = () => {
      return new Promise((resolve) => {
        getUserLocation(function (location) {
          resolve(location);
        });
      });
    };

    const location = await getUserLocationPromise();

    Latitude = parseFloat(location.Latitude);
    Longitude = parseFloat(location.Longitude);

    if (Latitude && Longitude) {

      function formatDateIn(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}`;
      }

      const CurrentDate = formatDateIn(DatetoHit);
      const [DatePart] = CurrentDate.split(" ");
      const DateFormateforAstrologyAPI = formatDate(CurrentDate);

      const dataForTimeZone = {
        latitude: Latitude,
        longitude: Longitude,
        date: DatePart,
      };

      function formatDateShow(dateString) {
        let date = new Date(dateString);
        // Define month names
        const monthNames = [
          "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
        ];
        // Get the day, month, and year
        let day = date.getDate();
        let month = monthNames[date.getMonth()];
        let year = date.getFullYear();

        // Format the date as "DD Month YYYY"
        let formattedDate = `${day} ${month} ${year}`;

        return formattedDate;
      }

      setDatetoShow(formatDateShow(DatePart));

      let TimeZone;
      try {
        const astrologyData = await fetchAstrologyData(dataForTimeZone, "timezone_with_dst");
        if (astrologyData.status === true) {
          TimeZone = astrologyData.timezone;
        }
      } catch (error) {
        console.error(error);
        setLoding(false)
      }

      const data = {
        day: DateFormateforAstrologyAPI.day,
        month: DateFormateforAstrologyAPI.month,
        year: DateFormateforAstrologyAPI.year,
        hour: DateFormateforAstrologyAPI.hour,
        min: DateFormateforAstrologyAPI.min,
        lat: Latitude,
        lon: Longitude,
        tzone: TimeZone,
      };

      try {
        const basicPanchang = await fetchAstrologyData(data, "advanced_panchang");
        setPanchang(basicPanchang);
        // chatGPTAnswer(basicPanchang)
        setLoding(false)
      } catch (error) {
        console.error(error);
        setLoding(false)
      }
    }
  };

  useEffect(() => {
    GetPanchang(new Date(selectedDateTime));
    if (data?.language === "Hindi") {
      setMainURL(MAIN_URL_HINDI);
    }
  }, [data, selectedDateTime]);

  function convertTimestamp(timestamp) {
    // Convert milliseconds to seconds
    let date = new Date(parseInt(timestamp));
    // Format the date to a string
    let formattedDate = date.getFullYear() + '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
      ('0' + date.getDate()).slice(-2) + ' ' +
      ('0' + date.getHours()).slice(-2) + ':' +
      ('0' + date.getMinutes()).slice(-2) + ':' +
      ('0' + date.getSeconds()).slice(-2);
    return formattedDate;
  }


  const chatGPTAnswer = async (Text) =>  {
    const dataGpt = {
      prompt: `Convert all value in hindi '${Text}'`,
      temperature: 0.5,
      max_tokens: 800
    };

    const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify(dataGpt)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const result = await response.json();
    const answer = result.choices[0].text;
    console.log(answer);
    return JSON.stringify(answer);
  }


  const [translatedText, setTranslatedText] = useState('');
  const [YogName, setYogName] = useState('');

  useEffect(() => {
    if(PanchangD?.nakshatra?.details?.nak_name) {
      chatGPTAnswer(PanchangD.nakshatra.details.nak_name).then(setTranslatedText);
    }
    if(PanchangD?.yog?.details?.yog_name){
      chatGPTAnswer(PanchangD.yog.details.yog_name).then(setYogName);
    }
  }, [PanchangD]);




  return (
    <>
      <MetaData data={data} />
      <div className="max-w-6xl mx-auto shadow-2xl bg-white mb-5 p-5 rounded-lg">
        <div className="">
          {data ? (
            <>
              {data.extraComponentData?.Holder1 && <Holder data={data.extraComponentData.Holder1} />}
              {data.extraComponentData?.Holder2 && <Holder data={data.extraComponentData.Holder2} />}
              {data.extraComponentData?.Holder3 && <Holder data={data.extraComponentData.Holder3} />}

              {data.title && <Title titleData={data.title} />}
              <div>
                <div className="grid grid-cols-3 mt-5 gap-10">
                  <div>
                    <div className="">
                      <Datetime
                        inputProps={inputProps}
                        onChange={(e) => setselectedDateTime(e.toString())}
                        closeOnClickOutside={true}
                        className="block w-full bg-gray-100 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    {/* <button onClick={()=> chatGPTAnswer(PanchangD.nakshatra.details.nak_name)} className={`px-5 py-1 ${LangButton === "Hindi" ? "bg-blue-800 text-white" : "bg-blue-200 text-gray-700"} `}>हिंदी</button> */}
                    <button onClick={()=> setLang("Hindi")} className={`px-5 py-1 ${lang === "Hindi" ? "bg-blue-800 text-white" : "bg-blue-200 text-gray-700"} `}>हिंदी</button>
                    <button onClick={()=> setLang("English")} className={`px-5 py-1 ${lang === "English" ? "bg-blue-800 text-white" : "bg-blue-200 text-gray-700"}`} >English</button> 
                  </div>
                </div>
                {!Loding ? <>
                  <div>
                    <div>
                      <div className="bg-blue-800 p-5 grid grid-cols-3 mt-5 gap-5">
                        <p className="font-bold text-white text-base col-span-3">{selectedDateTime.toString()}</p>
                        <div className="max-md:col-span-3">
                          {PanchangD ?
                            <>
                              <p className="text-base font-light text-white">
                                {lang === "Hindi" ? "अयाना" : "Ayana"}
                                : {PanchangD.ayana}</p>
                              <p className="text-base font-light text-white">
                                {lang === "Hindi" ? "ऋतु" : "Ritu"}: {PanchangD.ritu}
                              </p>
                            </>
                            : <></>}
                        </div>
                        <div className="max-md:col-span-3">
                          {PanchangD ?
                            <>
                              <p className="text-base font-light text-white">
                                {lang === "Hindi" ? "सूर्योदय" : "Sunrise"}: {PanchangD.vedic_sunrise}
                              </p>
                              <p className="text-base font-light text-white">
                                {lang === "Hindi" ? "सूर्यास्त" : "Sunset"}: {PanchangD.vedic_sunset}
                              </p>
                            </>
                            : <></>}
                        </div>
                        <div className="max-md:col-span-3">
                          {PanchangD ?
                            <>
                              <p className="text-base font-light text-white">
                                {lang === "Hindi" ? "कुण्डली" : "Sun Sign"}: {PanchangD.sun_sign}
                              </p>
                              <p className="text-base font-light text-white">
                                {lang === "Hindi" ? "राशि" : "Moon Sign"}: {PanchangD.moon_sign}
                              </p>
                            </>
                            : <></>}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 mt-5 border-b-[1px] h-auto pb-4 border-b-orange-500">
                        {PanchangD ?
                          <>
                            <div className="bg-orange-500 rounded-lg p-1 pt-4" >
                              <Image
                                width={80}
                                height={80}
                                className="w-20 h-20 aspect-square block m-auto"
                                src="https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang1.png"
                                alt=""
                              />
                              <div className="bg-orange-100 p-2 mt-2 rounded-md">
                                <p className="text-center text-sm text-gray-800">
                                  {lang === 'Hindi' ? 'सूर्योदय' : 'Sunrise'}
                                </p>
                                <p className="text-center text-sm text-gray-800">{PanchangD.sunrise}</p>
                              </div>
                            </div>
                            <div className="bg-orange-500 rounded-lg p-1 pt-4" >
                              <Image
                                width={80}
                                height={80}
                                className="w-20 h-20 aspect-square block m-auto"
                                src="https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang2.png"
                                alt=""
                              />
                              <div className="bg-orange-100 p-2 mt-2 rounded-md">
                                <p className="text-center text-sm text-gray-800">
                                  {lang === 'Hindi' ? 'सूर्यास्त' : 'Sunset'}
                                </p>
                                <p className="text-center text-sm text-gray-800">{PanchangD.sunset}</p>
                              </div>
                            </div>
                            <div className="bg-orange-500 rounded-lg p-1 pt-4" >
                              <Image
                                width={80}
                                height={80}
                                className="w-20 h-20 aspect-square block m-auto"
                                src="https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang3.png"
                                alt=""
                              />
                              <div className="bg-orange-100 p-2 mt-2 rounded-md">
                                <p className="text-center text-sm text-gray-800">
                                  {lang === 'Hindi' ? 'चंद्रोदय' : 'Moonrise'}
                                </p>
                                <p className="text-center text-sm text-gray-800">{PanchangD.moonrise}</p>
                              </div>
                            </div>
                            <div className="bg-orange-500 rounded-lg p-1 pt-4" >
                              <Image
                                width={80}
                                height={80}
                                className="w-20 h-20 aspect-square block m-auto"
                                src="https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang4.png"
                                alt=""
                              />
                              <div className="bg-orange-100 p-2 mt-2 rounded-md">
                                <p className="text-center text-sm text-gray-800">
                                  {lang === 'Hindi' ? 'चंद्रास्त' : 'Moonset'}
                                </p>
                                <p className="text-center text-sm text-gray-800">{PanchangD.moonset}</p>
                              </div>
                            </div>
                          </>
                          : <></>}
                      </div>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-1 py-2 bg-white p-4 border-[1px]  border-grey-100 drop-shadow-lg rounded-lg mt-4">
                        <table className="w-full rounded-lg overflow-hidden" >
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="text-sm text-gray-700">
                                {lang === 'Hindi' ? 'तिथि' : 'Tithi'}
                              </td>
                              <td className="text-sm text-gray-700 font-bold">
                                {PanchangD ?
                                  PanchangD.tithi ?
                                    PanchangD.tithi.details ?
                                      PanchangD.tithi.details.tithi_name
                                      : null
                                    : null
                                  : null} upto {" "} {PanchangD ?
                                    PanchangD.tithi ?
                                      convertTimestamp(PanchangD.tithi.end_time_ms)
                                      : null
                                    : null}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-sm text-gray-700">
                                {lang === 'Hindi' ? 'नक्षत्र' : 'Nakshatra'}
                              </td>
                              <td className="text-sm text-gray-700 font-bold">

                                {lang === 'Hindi' ?
                                <>
                                  {translatedText.replace(/\\n/g, "\n")} {" "}
                                  upto {" "}
                                  {PanchangD ?
                                    PanchangD.nakshatra ?
                                      convertTimestamp(PanchangD.nakshatra.end_time_ms)
                                      : null
                                    : null}
                                </>

                                :

                                <>
                                {PanchangD ?
                                  PanchangD.nakshatra ?
                                    PanchangD.nakshatra.details ?
                                        PanchangD.nakshatra.details.nak_name
                                      : null
                                    : null
                                  : null} upto {" "}
                                {PanchangD ?
                                  PanchangD.nakshatra ?
                                    convertTimestamp(PanchangD.nakshatra.end_time_ms)
                                    : null
                                  : null}
                                </>
                                }
                              
                              </td>
                            </tr>
                            <tr>
                              <td className="text-sm text-gray-700">
                                {lang === 'Hindi' ? 'योग' : 'Yog'}
                              </td>
                              <td className="text-sm text-gray-700 font-bold">
                              {lang === 'Hindi' ?
                              <>
                                {YogName.replace(/\\n/g, "\n")}
                              </>
                              :
                              <>
                                {PanchangD ?
                                  PanchangD.yog ?
                                    PanchangD.yog.details ?
                                      PanchangD.yog.details.yog_name
                                      : null
                                    : null
                                  : null} 
                              </>
                              }
                              {" "}upto{" "}
                                {PanchangD ?
                                  PanchangD.yog ?
                                    convertTimestamp(PanchangD.yog.end_time_ms)
                                    : null
                                  : null}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-sm text-gray-700">
                                {lang === 'Hindi' ? 'करण' : 'Karan'}
                              </td>
                              <td className="text-sm text-gray-700 font-bold">
                                {PanchangD ?
                                  PanchangD.karan ?
                                    PanchangD.karan.details ?
                                      PanchangD.karan.details.karan_name
                                      : null
                                    : null
                                  : null}
                                {" "}upto {" "}
                                {PanchangD ?
                                  PanchangD.karan ?
                                    convertTimestamp(PanchangD.karan.end_time_ms)
                                    : null
                                  : null}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                      <table className="w-full bg-blue-800 rounded-lg overflow-hidden mt-5" >
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <th colSpan={2} className="bg-orange-500 text-white p-2 h-14">
                              {lang === 'Hindi' ? 'हिंदू महीना & वर्ष' : 'Hindu Month & Year'}
                            </th>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'विक्रम संवत' : 'Vikram Samvat'}
                              <br />
                              {PanchangD ? PanchangD.vikram_samvat : null} upto {' '}
                              {PanchangD ? PanchangD.vkram_samvat_name : null}
                            </td>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'शक संवत' : 'Shaka Samvat'}
                              <br />
                              {PanchangD ? PanchangD.shaka_samvat : null} upto {' '}
                              {PanchangD ? PanchangD.shaka_samvat_name : null}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'पक्ष' : 'Paksha'}
                              <br />
                              {PanchangD ? PanchangD.paksha : null}
                            </td>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'अयाना' : 'Ayana'}
                              <br />
                              {PanchangD ? PanchangD.ayana : null}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'पूर्णिमांत' : 'Purnimanta'}
                              <br />
                              {PanchangD ? PanchangD.hindu_maah.purnimanta : null}
                            </td>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'अमांता' : 'Amanta'}
                              <br />
                              {PanchangD ? PanchangD.hindu_maah.amanta : null}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'कुण्डली' : 'Sun Sign'}
                              <br />
                              {PanchangD ? PanchangD.sun_sign : null}
                            </td>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'कुण्डली' : 'Moon Sign'}
                              <br />
                              {PanchangD ? PanchangD.moon_sign : null}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="w-full bg-blue-800 rounded-lg overflow-hidden mt-5" >
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <th colSpan={2} className="bg-orange-500 text-white p-2 h-14">
                              {lang === 'Hindi' ? 'अशुभ समय' : 'Inauspicious timing'}
                            </th>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'राहु कालम' : 'Rahu Kalam'} <br />
                              {PanchangD ?
                                PanchangD.rahukaal.start
                                : null}
                              {" "}to{" "}
                              {PanchangD ?
                                PanchangD.rahukaal.end
                                : null}
                            </td>
                            <td className="text-sm text-white p-2">
                               {lang === 'Hindi' ? 'यमघंट कालम' : 'Yamghant Kalam'} <br />
                              {PanchangD ?
                                PanchangD.yamghant_kaal.start
                                : null}
                              {" "}to{" "}
                              {PanchangD ?
                                PanchangD.yamghant_kaal.end
                                : null}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'गुलिका कालम' : 'Gulika Kalam'} <br />
                              {PanchangD ?
                                PanchangD.guliKaal.start
                                : null}
                              {" "}to{" "}
                              {PanchangD ?
                                PanchangD.guliKaal.end
                                : null}
                            </td>
                            <td className="text-sm text-white p-2">
                               {lang === 'Hindi' ? 'दुर मुहूर्तम' : 'Dur Muhurtam'} <br />
                              {/* {PanchangD ?
                                        PanchangD.yamghant_kaal.start
                                    : null}
                                    {" "}to{" "}
                                    {PanchangD ?
                                        PanchangD.yamghant_kaal.end
                                    : null} */}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                               {lang === 'Hindi' ? 'वरजयम' : 'Varjyam'}<br />
                              {/* {PanchangD ?
                                        PanchangD.vikram_samvat
                                    : null}  */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="w-full bg-blue-800 rounded-lg overflow-hidden mt-5 h-auto" >
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                          <th colSpan={2} className="bg-orange-500 text-white p-2 h-14">
                              {lang === 'Hindi' ? 'शुभ समय' : 'Auspicious timing'}
                            </th>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                               {lang === 'Hindi' ? 'अभिजीत मुहूर्त' : 'Abhijit Muhurta'}<br />
                              {PanchangD ?
                                PanchangD.abhijit_muhurta.start
                                : null}
                              {" "}to{" "}
                              {PanchangD ?
                                PanchangD.abhijit_muhurta.end
                                : null}
                            </td>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'अमृत कलाम' : 'Amrit kalam'}<br />
                              {PanchangD ?
                                PanchangD.yamghant_kaal.start
                                : null}
                              {" "}to{" "}
                              {PanchangD ?
                                PanchangD.yamghant_kaal.end
                                : null}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="w-full bg-blue-800 rounded-lg overflow-hidden mt-5 h-auto" >
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <th colSpan={2} className="bg-orange-500 text-white p-2 h-14"></th>
                            <th colSpan={2} className="bg-orange-500 text-white p-2 h-14">
                              {lang === 'Hindi' ? 'अन्य योग' : 'Other Yoga'}
                            </th>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              Panchang Yog
                            </td>
                            <td className="text-sm text-white p-2">
                              {PanchangD ?
                                PanchangD.panchang_yog
                                : null}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'दिशा शूल' : 'Disha Shool'}
                            </td>
                            <td className="text-sm text-white p-2">
                              {PanchangD ?
                                PanchangD.disha_shool
                                : null}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'चंद्रमा निवाश' : 'Moon Nivas'}
                            </td>
                            <td className="text-sm text-white p-2">
                              {PanchangD ?
                                PanchangD.nak_shool.direction
                                : null}
                            </td>
                          </tr>
                          <tr>
                            <td className="text-sm text-white p-2">
                              {lang === 'Hindi' ? 'नक्षत्र शूल' : 'Nakshatra Shool'}
                            </td>
                            <td className="text-sm text-white p-2">
                              {PanchangD ?
                                PanchangD.moon_nivas
                                : null}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
                  : <>
                    <div className="mt-10 flex justify-center items-center">
                      <div role="status mt-10">
                        <svg
                          aria-hidden="true"
                          className="inline w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-800"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </>}
              </div>

              {data.extraComponentData?.Holder3 && <Holder data={data.extraComponentData.Holder4} />}
              {data.extraComponentData?.Holder4 && <Holder data={data.extraComponentData.Holder5} />}
              {data.extraComponentData?.Holder5 && <Holder data={data.extraComponentData.Holder6} />}
              {data.blogBannerImage && (
                <div className="w-[100%] md:w-[100%] mb-5 mt-5">
                  <Banner BannerData={data.blogBannerImage} AltName={data.title} />
                </div>
              )}
              {data.extraComponentData?.Holder7 && <Holder data={data.extraComponentData.Holder7} />}
              {data.extraComponentData?.Holder8 && <Holder data={data.extraComponentData.Holder8} />}
              {data.extraComponentData?.Holder9 && <Holder data={data.extraComponentData.Holder9} />}
              {data.description && (
                <div className="mt-5">
                  <Description descData={data.description} />
                </div>
              )}
              {data.extraComponentData?.Holder10 && <Holder data={data.extraComponentData.Holder10} />}
              {data.extraComponentData?.Holder11 && <Holder data={data.extraComponentData.Holder11} />}
              {data.extraComponentData?.Holder12 && <Holder data={data.extraComponentData.Holder12} />}
              {data.extraComponentData?.Holder13 && <Holder data={data.extraComponentData.Holder13} />}
              {data.extraComponentData?.Holder14 && <Holder data={data.extraComponentData.Holder14} />}
              {data.extraComponentData?.Holder15 && <Holder data={data.extraComponentData.Holder15} />}
              {data.extraComponentData?.Holder16 && <Holder data={data.extraComponentData.Holder16} />}
              {data.extraComponentData?.Holder17 && <Holder data={data.extraComponentData.Holder17} />}
              {data.extraComponentData?.Holder18 && <Holder data={data.extraComponentData.Holder18} />}
              {data.extraComponentData?.Holder19 && <Holder data={data.extraComponentData.Holder19} />}
              {data.extraComponentData?.Holder20 && <Holder data={data.extraComponentData.Holder20} />}
              {data.extraComponentData?.Holder21 && <Holder data={data.extraComponentData.Holder21} />}
              {data.extraComponentData?.Holder22 && <Holder data={data.extraComponentData.Holder22} />}
              {data.extraComponentData?.Holder23 && <Holder data={data.extraComponentData.Holder23} />}
              {data.extraComponentData?.Holder24 && <Holder data={data.extraComponentData.Holder24} />}
              {data.extraComponentData?.Holder25 && <Holder data={data.extraComponentData.Holder25} />}
              {data.extraComponentData?.Holder26 && <Holder data={data.extraComponentData.Holder26} />}
              {data.extraComponentData?.Holder27 && <Holder data={data.extraComponentData.Holder27} />}
              {data.extraComponentData?.Holder28 && <Holder data={data.extraComponentData.Holder28} />}
              {data.extraComponentData?.Holder29 && <Holder data={data.extraComponentData.Holder29} />}
              {data.extraComponentData?.Holder30 && <Holder data={data.extraComponentData.Holder30} />}
              {data.extraComponentData?.Holder31 && <Holder data={data.extraComponentData.Holder31} />}
              {data.extraComponentData?.Holder32 && <Holder data={data.extraComponentData.Holder32} />}
              {data.extraComponentData?.Holder33 && <Holder data={data.extraComponentData.Holder33} />}
              {data.extraComponentData?.Holder34 && <Holder data={data.extraComponentData.Holder34} />}
              {data.extraComponentData?.Holder35 && <Holder data={data.extraComponentData.Holder35} />}
            </>

          ) : (
            <>
              <div className="text-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

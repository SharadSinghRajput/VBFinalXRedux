import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import { useRouter } from "next/router";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { lifesProblems } from "../config/json/lifesProblems";
// import { useSelector, useDispatch } from 'react-redux';
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";
import moonsignm from "./assets/images/moonsign.png";
import questionimg from "./assets/images/question.png";
import Banner from "./pageAssets/Banner";
import Description from "./pageAssets/Description";
import KundliForm from "./pageAssets/KundliForm";
import MetaData from "./pageAssets/MetaData";
import Title from "./pageAssets/Title";
import Questions from "./Questions"
import {API_NEW_URL, MAIN_URL} from '../config/config'

const ServicesNew = [
  { name: "Consultation", hindiName: "परामर्श", ImgUrl: "/asset_frontend/img/consultation.png", Link: "/services/consultation.php", hindiLink: "/hindi/services/consultation.php" },
  { name: "Online Report", hindiName: "ऑनलाइन रिपोर्ट", ImgUrl: "/asset_frontend/img/online-report.png", Link: "/services/online-reports.php", hindiLink: "/hindi/services/online-reports.php" },
  { name: "Voice Report", hindiName: "ध्वनि रिपोर्ट", ImgUrl: "/asset_frontend/img/voice-report.png", Link: "/services/voice-report.php", hindiLink: "/hindi/services/voice-report.php" },
  { name: "Life Readings", hindiName: "जीवन वाचन", ImgUrl: "/asset_frontend/img/life-readings.png", Link: "/services/life-readings.php", hindiLink: "/hindi/services/life-readings.php" }
];

export default function DailyHoroscope({ data }) {
  const router = useRouter();
  const lang = data?.language
  const src = "https://www.youtube.com/watch?v=GDjFJZ7-k8M";
  const videoId = src.split("v=")[1];

  const handleClickRouter = (e, url) => {
    e.preventDefault();
    router.push(`${MAIN_URL}${url}`);
  };


  return (
    <div className="">
      <div className={`bg-[#091d5a]`}>
        <div className="container py-4 mx-auto">
          <div className="my-5 mb-14 pb-5 border-b-white/50 border-b-[0.5px]">
            <p className="text-lg font-light text-white">

              {lang === "Hindi" ? "आपका भाग्य जानने के लिए मुझे आपकी कुंडली या जन्म कुंडली की आवश्यकता है। कुंडली सॉफ्टवेयर के माध्यम से कुंडली बनाई जा सकती है। मैं आपको यहां इस पृष्ठ पर एक निःशुल्क जन्म कुंडली कैलकुलेटर प्रदान कर रहा हूं। किसी भी ज्योतिषी के पास अपनी जन्म कुंडली प्रस्तुत करने से पहले कृपया कुंडली कैलकुलेटर के माध्यम से जन्मतिथि के अनुसार अपनी कुंडली बनाएं।" : "To read your fate I need your Kundli or astrology birth chart. Kundali can be made through Kundli software. I am providing you here on this page a free Janam kundali calculator. Before presenting your Janam Kundli to any astrologer kindly create your kundli as per date of birth through the Kundli  calculator."}</p>
          </div>

          <div className="mb-5 flex flex-col xl:flex-row  gap-8">
            <div className="flex flex-col md:flex-row max-w-5xl w-full gap-8">
              <div className="w-full md:max-w-[400px] rounded-lg bg-white p-5">
                <KundliForm language = {lang} />
              </div>
              <div className="flex-1">
                <h4 className="text-center text-white text-xl font-bold mb-2">
                  {" "}
                  {lang === "Hindi" ? "निःशुल्क ऑनलाइन कुंडली/जन्म कुंडली/कुंडली सॉफ्टवेयर" : "Free Online Kundli/ Janam Kundli/ Kundli Software"}
                  {" "}
                </h4>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube Video Player"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 gap-3">
              <div className="grid gap-3 grid-cols-2">
                {ServicesNew.map((item) => (
                  <div key={item.name} className="bg-orange-500 rounded-md py-3 min-h-15">
                    <a
                      className="text-xs text-white flex-col text-center flex justify-center items-center no-underline"
                      href={lang === "Hindi" ? item.hindiLink : item.Link}>
                      <Image
                        width={40}
                        height={40}
                        className="w-[40px] md:w-[50px] lg:w-[75px] aspect-square object-contain"
                        src={item.ImgUrl}
                        alt={lang === "Hindi" ? item.hindiName : item.name}
                      />
                      <span className="text-xs text-white">
                        {lang === "Hindi" ? item.hindiName : item.name}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
              <button onClick={() => router.push('astrology-news.php')} className="bg-white w-full mt-3 flex items-center justify-evenly rounded-lg p-2">
                <Image width={40} height={40} className="w-10" src="https://www.vinaybajrangi.com/asset_frontend/img/newsicon.png" alt='newsicon.png' />
                <h3 className="text-sm font-bold">{lang === "Hindi" ? "ज्योतिष समाचार एवं आलेख" : "Astrology News and Articles"}</h3>
              </button>
              <div>
                <a
                  href={`${lang === "Hindi" ? "/hindi/ask-question.php" : "/ask-question.php"}`}
                  onClick={(e) => handleClickRouter(e, `${lang === "Hindi" ? "/hindi/ask-question.php" : "/ask-question.php"}`)}
                  className="p-2 bg-white rounded-lg flex mt-5 items-center w-full justify-start">
                  <Image src={questionimg} width={60} className='w-[60px] p-3 aspect-square rounded-lg' />
                  <p className="text-sm font-semibold">{lang === "Hindi" ? "प्रश्न पूछें" : "Ask a question"}</p>
                </a>
                <a
                  href={`${lang === "Hindi" ? "/hindi/calculator/moon-sign-calculator.php" : "/calculator/moon-sign-calculator.php"}`}
                  onClick={(e) => handleClickRouter(e, `${lang === "Hindi" ? "/hindi/calculator/moon-sign-calculator.php" : "/calculator/moon-sign-calculator.php"}`)}
                  
                  className="p-2 bg-white rounded-lg flex mt-5 items-center w-full justify-start">
                  <Image src={moonsignm} width={60} className='w-[60px] p-3 aspect-square rounded-lg' />
                  <p className="text-sm font-semibold">{lang === "Hindi" ? "अपनी चंद्र राशि जानें" : "Know your moon sign"}</p>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t-white/50 pt-5 border-t-[0.5px]">
            <p className="text-lg text-center mb-5 text-white font-bold">
              {lang === "Hindi" ? "जीवन की सभी समस्याओं का ज्योतिषीय समाधान" : "Astrological Solutions for all life’s problems"}
            </p>
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              breakpoints={{
                400: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 7,
                },
                1280: {
                  slidesPerView: 8,
                },
                1530: {
                  slidesPerView: 10,
                },
              }}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {lifesProblems.map((item, index) => (
                <SwiperSlide key={index}>
                  <a
                    className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center"
                    href={lang === "Hindi" ? item.hindiUrl : item.url}
                  >
                    <Image
                      src={item.img}
                      width={80}
                      alt={lang === "Hindi" ? item.hindiName : item.name}
                      className="w-[80px] p-3 bg-orange-500 aspect-square rounded-lg"
                    />
                    <span>{lang === "Hindi" ? item.hindiName : item.name}</span>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mb-5 rounded-lg mt-5">
        <div><Questions language = {lang} /></div>
      </div>
      <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mb-5 rounded-lg">
        <div className="p-2 pt-2">
          {data ? (
            <>
              {/* {data.title ? (
                <>
                  <Title titleData={data.title} />
                </>
              ) : (
                <></>
              )} */}

              {data.blogBannerImage && (
                <div className="w-[100%] md:w-[100%] mb-5 mt-5">
                  <Banner BannerData={data.blogBannerImage} AltName={data.title} />
                </div>
              )}
              <div className="mt-5">
                {data.description ? <Description descData={data.description} /> : <></>}
              </div>
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

    </div>
  );
}

import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Title from './pageAssets/Title';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';
import {API_KEY, Domain_Secrete_Code, API_NEW_URL, MAIN_URL} from '../config/config'
import MetaData from './pageAssets/MetaData';

const Calculator = [
  {
      name: "Ascendant Calculator",
      hindiName: "लगन कैलकुलेटर",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/ascendant-calculator1.png",
      backData: "Get to know your Ascendant as per your Kundli.",
      hindiBackData: "अपने कुंडली के अनुसार अपने लगन को जान लें।",
      hindiLink: "hindi/calculator/ascendant-calculator.php",
      link: "calculator/ascendant-calculator.php"
  },
  {
      name: "Gemstone Suggestion",
      hindiName: "रत्न का सुझाव",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/gemstone-suggestion.png",
      backData: "Favorable and lucky Gemstones for you as per your horoscope.",
      hindiBackData: "आपकी कुंडली के अनुसार आपके लिए अनुकूल और भाग्यशाली रत्न।",
      hindiLink: "hindi/calculator/gemstone-calculator.php",
      link: "calculator/gemstone-calculator.php"
  },
  {
      name: "Rudraksha Suggestion",
      hindiName: "रुद्राक्ष सुझाव",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/rudraksha-suggestion1.png",
      backData: "Know which Rudraksha can bring good luck for you as per your Kundli.",
      hindiBackData: "जानिए आपकी कुंडली के अनुसार कौन सा रुद्राक्ष आपके लिए सौभाग्य ला सकता है।",
      hindiLink: "hindi/calculator/rudraksha-calculator.php",
      link: "calculator/rudraksha-calculator.php"
  },
  {
      name: "Numerology For You",
      hindiName: "अंक ज्योतिष",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/check-numerology1.png",
      backData: "Get your Lucky Numbers and Numerology Predictions.",
      hindiBackData: "अपने लकी नंबर और अंक प्रिडिक्शन प्राप्त करें।",
      hindiLink: "hindi/calculator/numerology-calculator.php",
      link: "calculator/numerology-calculator.php"
  },
  {
      name: "Kaalsarp Dosha",
      hindiName: "कालसर्प दोष",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/kalsarpdosh.png",
      backData: "Check whether your kundli has Kalsarpa dosha or not.",
      hindiBackData: "जांचें कि आपकी कुंडली में कालसर्प दोष है या नहीं।",
      hindiLink: "hindi/calculator/kaalsarp-dosh-calculator.php",
      link: "calculator/kaalsarp-dosh-calculator.php"
  },
  {
      name: "Sadesati Calculator",
      hindiName: "साढ़ेसाती कैलकुलेटर",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/sadhesati-calculator1.png",
      backData: "Are you going under Saturn Sadhesati? Check here.",
      hindiBackData: "क्या आप शनि साढ़ेसाती के अंतर्गत जा रहे हैं? यहा जांचिये।",
      hindiLink: "hindi/calculator/sadesati-calculator.php",
      link: "calculator/sadesati-calculator.php"
  },
  {
      name: "Pitra Dosha Calculator",
      hindiName: "पितृ दोष कैलकुलेटर",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/pitra-dosha-calculator1.png",
      backData: "Get to know if your Kundli has Pitra Dosha and their effects.",
      hindiBackData: "पता करें कि क्या आपकी कुंडली में पितृ दोष और उनके प्रभाव हैं।",
      hindiLink: "hindi/calculator/pitra-dosha-calculator.php",
      link: "calculator/pitra-dosha-calculator.php"
  },
  {
      name: "Manglik Dosha Calculator",
      hindiName: "मांगलिक दोष कैलकुलेटर",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/maglik-dosha-calculator1.png",
      backData: "Whether Kuja or Manglik dosha is present in your horoscope? Check here.",
      hindiBackData: "कुजा या मांगलिक दोष आपकी कुंडली में मौजूद है या नहीं? यहा जांचिये।",
      hindiLink: "marriage-astrology-in-hindi/manglik-mangal-dosha",
      link: "calculator/manglik-dosha-calculator.php"
  },
  {
      name: "Moon Sign Calculator",
      hindiName: "चंद्र राशि कैलकुलेटर",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/moon.jpg",
      backData: "Get to know Your Moon Sign as per your Kundli? Check here.",
      hindiBackData: "अपनी कुंडली के अनुसार अपने चंद्रमा राशि को जानें। यहां जांचें।",
      hindiLink: "hindi/calculator/moon-sign-calculator.php",
      link: "calculator/moon-sign-calculator.php"
  }
];


export default function Calculater({ data }) {
  const router = useRouter();
  const lang = data?.language
  
  const handleClickRouter = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(`${MAIN_URL}${url}`);
  };
  return (
    <>
      {data ? (
        <>
        <MetaData data={data} />
        <div className="bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg">
          <div>
            <h1 className="text-lg font-bold text-white p-2 bg-orange-500 rounded-lg mb-5 text-center">{lang === "Hindi" ? "नि: शुल्क ज्योतिष कैलकुलेटर" : "Free Astrology Calculators"}</h1>
            <div className="flex-1">
              <div role="list" className="flex gap-2 flex-wrap">
                  {Calculator.map((item, index) => (
                      <a  key={index}
                        href={`${MAIN_URL}${lang === "Hindi" ? item.hindiLink : item.link}`}
                        onClick={(e) => handleClickRouter(e, lang === "Hindi" ? item.hindiLink : item.link)}
                        className="w-[48%] md:w-52 aspect-square relative group overflow-hidden rounded-xl shadow-md shadow-orange-300/50">
                          <div className="absolute p-5 inset-0 bg-orange-500 text-center flex items-center justify-center text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-xs text-center font-medium text-white">{lang === "Hindi" ? item.hindiBackData : item.backData}</p>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center h-48 w-full p-8 transform bg-white group-hover:-translate-y-52 group-hover:blur-md transition-all duration-1000">
                              <Image
                                src={item.imageUrl}
                                alt={lang === "Hindi" ? item.hindiName : item.name}
                                width={96}
                                height={96}
                                className="h-24 w-24 flex-shrink-0 object-cover"
                              />
                              <h3 className="mt-2 text-base text-center text-gray-900">{lang === "Hindi" ? item.hindiName : item.name}</h3>
                          </div>
                      </a>
                  ))}
              </div>
            </div>
            
          </div>
          {/* {data?.title && <Title titleData={data.title} />} */}
            {data?.blogBannerImage && (
            <div className="w-full md:w-full mb-5 mt-5">
                <Banner BannerData={data.blogBannerImage} />
            </div>
            )}
            <div className="mt-5">
              {data?.description && <Description descData={data.description} />}
            </div>
        </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

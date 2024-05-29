import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Title from './pageAssets/Title';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';

const Calculator = [
  {
      name: "Ascendant Calculator",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/ascendant-calculator1.png",
      backData: "Get to know your Ascendant as per your Kundli.",
      link: "calculator/ascendant-calculator.php"
  },
  {
      name: "Gemstone Suggestion",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/gemstone-suggestion.png",
      backData: "Favorable and lucky Gemstones for you as per your horoscope.",
      link: "calculator/gemstone-calculator.php"
  },
  {
      name: "Rudraksha Suggestion",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/rudraksha-suggestion1.png",
      backData: "Know which Rudraksha can bring good luck for you as per your Kundli.",
      link: "calculator/rudraksha-calculator.php"
  },
  {
      name: "Numerology For You",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/check-numerology1.png",
      backData: "Get your Lucky Numbers and Numerology Predictions.",
      link: "calculator/numerology-calculator.php"
  },
  {
      name: "Kaalsarp Dosha",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/kalsarpdosh.png",
      backData: "Check whether your kundli has Kalsarpa dosha or not.",
      link: "calculator/kaalsarp-dosh-calculator.php"
  },
  {
      name: "Sadesati Calculator",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/sadhesati-calculator1.png",
      backData: "Are you going under Saturn Sadhesati? Check here.",
      link: "calculator/sadesati-calculator.php"
  },
  {
      name: "Pitra Dosha Calculator",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/pitra-dosha-calculator1.png",
      backData: "Get to know if your Kundli has Pitra Dosha and their effects.",
      link: "calculator/pitra-dosha-calculator.php"
  },
  {
      name: "Manglik Dosha Calculator",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/maglik-dosha-calculator1.png",
      backData: "Whether Kuja or Manglik dosha is present in your horoscope? Check here.",
      link: "calculator/manglik-dosha-calculator.php"
  },
  {
      name: "Moon Sign Calculator",
      imageUrl: "https://www.vinaybajrangi.com/upload/calculator-img/moon.jpg",
      backData: "Get to know Your Moon Sign as per your Kundli? Check here.",
      link: "calculator/moon-sign-calculator.php"
  }
];


export default function Calculater({ data }) {
  const router = useRouter();
  

  return (
    <>
      {data ? (
        <div className="bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg">
          <div>
            <h1 className="text-lg font-bold text-white p-2 bg-orange-500 rounded-lg mb-5 text-center">Free Astrology Calculators</h1>
            <div className="flex-1">
              <div role="list" className="flex gap-2 flex-wrap">
                  {Calculator.map((item, index) => (
                      <button type="button" key={index}
                      onClick={()=> router.push(item.link)}
                        className="w-[48%] md:w-52 aspect-square relative group overflow-hidden rounded-xl shadow-md shadow-orange-300/50">
                          <div className="absolute p-5 inset-0 bg-orange-500 text-center flex items-center justify-center text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-xs text-center font-medium text-white">{item.backData}</p>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-center h-48 w-full p-8 transform bg-white group-hover:-translate-y-52 group-hover:blur-md transition-all duration-1000">
                              <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={96}
                                height={96}
                                className="h-24 w-24 flex-shrink-0 object-cover"
                              />
                              <h3 className="mt-2 text-base text-center text-gray-900">{item.name}</h3>
                          </div>
                      </button>
                  ))}
              </div>
            </div>
            
          </div>
          {data?.title && <Title titleData={data.title} />}
            {data?.blogBannerImage && (
            <div className="w-full md:w-full mb-5 mt-5">
                <Banner BannerData={data.blogBannerImage} />
            </div>
            )}
            {data?.description && <Description descData={data.description} />}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

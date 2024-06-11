"use client"; 
import Image from "next/image";
import { useRouter } from 'next/router';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { MAIN_URL_HINDI } from '../config/config';

export default function MainScreenHindi() {
  const router = useRouter();
  const people = [
      { name: "विवाह ज्योतिष", url: "marriage-astrology.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/file-icons_ring.png" },
      { name: "संपत्ति ज्योतिष",   url: "property.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/property-astrology.png" },
      { name: "बिजनेस ज्योतिष",   url: "business-astrology.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/ba.png" },
      { name: "कोर्ट केस/कानूनी मुकदमे",   url: "court-cases.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/court-legal-Issues.png" },
      { name: "करियर ज्योतिष",   url: "career-astrology.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/career-astrology.png" },
      { name: "स्वास्थ्य ज्योतिष",   url: "health-astrology.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/ha.png" },
      { name: "ऋण और कर्ज़",   url: "loan-and-debts.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/loan-debt.png" },
      { name: "बाल ज्योतिष",   url: "children-astrology.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/children-astrology.png" }
  ]
  const  peopleSec = [
      { name: "सट्टेबाजी और जुआ", url: "astrology-for-betting.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/icons.png" },
      { name: "वास्तु ज्योतिष", url: "vastu.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/allabout-vastu.png" },
      { name: "कुंडली में विदेश में बसाव", url: "foreign-travel.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/foreign-settlement.png" },
      { name: "व्यावसायिक वास्तु", url: "vastu-for-commercial.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/vfc.png" },
      { name: "Past life Readings", url: "life-predictions.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/pastlife-readings.png" },
      { name: "शेयर बाजार और शेयर व्यापार ज्योतिष", url: "share-market-astrology.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/birth-time-correction.png" },
      // { name: "जन्म समय सुधार", url: "time-rectification.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/btc.png" },
      { name: "एस्ट्रो सिक्रेट्स", url: "astrological-reports.php", imgSrc: "https://www.vinaybajrangi.com/asset_frontend/img/life-icons/btc.png" }
  ]
  const Horoscope = [
    { name: "मेष", url: "horoscope/daily-horoscope/mesh.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aries.png", Link: "horoscope/daily-horoscope/mesh.php" },
    { name: "वृषभ", url: "horoscope/daily-horoscope/vrshabh.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Tauras.png", Link: "horoscope/daily-horoscope/vrshabh.php"},
    { name: "मिथुन", url: "horoscope/daily-horoscope/mithun.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Gemini.png", Link: "horoscope/daily-horoscope/mithun.php"},
    { name: "कर्क", url: "horoscope/daily-horoscope/kark.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Cancer.png", Link: "horoscope/daily-horoscope/kark.php"},
    { name: "सिंह", url: "horoscope/daily-horoscope/singh.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Leo.png", Link: "horoscope/daily-horoscope/singh.php"},
    { name: "कन्या", url: "horoscope/daily-horoscope/kanya.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Virgo.png", Link: "horoscope/daily-horoscope/kanya.php"},
    { name: "तुला", url: "horoscope/daily-horoscope/tula.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Libra.png", Link:"horoscope/daily-horoscope/tula.php"},
    { name: "वृश्चिक", url: "horoscope/daily-horoscope/vrshchik.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Scorpio.png", Link: "horoscope/daily-horoscope/vrshchik.php"},
    { name: "धनु", url: "horoscope/daily-horoscope/dhanu.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Sagittarius.png", Link:"horoscope/daily-horoscope/dhanu.php"},
    { name: "मकर", url: "horoscope/daily-horoscope/makar.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Capricorn.png", Link: "horoscope/daily-horoscope/makar.php"},
    { name: "कुम्भ", url: "horoscope/daily-horoscope/kumbh.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aquarius.png", Link: "horoscope/daily-horoscope/kumbh.php"},
    { name: "मीन", url: "horoscope/daily-horoscope/meen.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/pices.png", Link: "horoscope/daily-horoscope/meen.php"}
  ]

  const handleClick = (e, url) => {
    e.preventDefault(); 
    router.push(`${MAIN_URL_HINDI}${url}`);
  };

  
  return (
    <>
      <div className="max-w-7xl pt-4 pb-10 mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10">
          <div className="bg-[url('https://www.vinaybajrangi.com/asset_frontend/img/aspBG.png')] p-4 rounded-lg shadow-2xl">
            <h2 className="text-xl text-blue-900 font-bold text-left mb-4">जीवन की सभी समस्याओं का<b>ज्योतिषीय समाधान</b></h2>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                100: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
                1530: {
                  slidesPerView: 4,
                },
              }}
              autoplay={{ delay: 3000 }}
              loop={true}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {people.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <a
                    className="bg-orange-500 p-2 min-h-32 rounded-lg flex flex-col justify-center items-center"
                    href={`${MAIN_URL_HINDI+item.url}`} 
                    onClick={(e) => handleClick(e, item.url)}
                  >
                    <Image
                      src={item.imgSrc}
                      width={60}
                      height={60}
                      alt={item.name}
                      className="w-[60px] p-3 bg-orange-500 aspect-square rounded-lg"
                    />
                    <h3 className="mt-2 text-sm text-white text-center font-semibold tracking-tight leading-5">{item.name}</h3>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              className="mt-5"
              breakpoints={{
                100: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
                1530: {
                  slidesPerView: 4,
                },
              }}
              autoplay={{ delay: 3000 }}
              loop={true}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {peopleSec.map((item, index) => (
                <SwiperSlide key={index}>
                  <a
                    className="bg-orange-500 p-2 min-h-32 rounded-lg flex flex-col justify-center items-center"
                    href={`${MAIN_URL_HINDI+item.url}`} 
                    onClick={(e) => handleClick(e, item.url)}
                  >
                    <Image
                      src={item.imgSrc}
                      width={60}
                      height={60}
                      alt={item.name}
                      className="w-[60px] p-3 bg-orange-500 aspect-square rounded-lg"
                    />
                    <h3 className="mt-2 text-sm text-white text-center font-semibold tracking-tight leading-5">{item.name}</h3>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <ul role="list" className="grid gap-2 md:gap-4 grid-cols-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  sm:gap-y-16 xl:col-span-4 p-0">

              {people.map((person) => (
                <li key={person.name} className="bg-orange-500 p-2 aspect-auto rounded-lg flex flex-col justify-center items-center p-2">
                  <div className="flex flex-col items-center">
                    <Image width={40} height={40} className="h-10 w-10" src={person.imgSrc} alt="" />
                    <h3 className="mt-2 text-xs text-white text-base text-center leading-normal font-normal leading-7 tracking-tight text-gray-900 leading-3">{person.name}</h3>
                  </div>
                </li>
              ))}
            </ul> */}
          </div>
          <div className={`bg-orange-500 p-2 md:p-4 rounded-lg`}>
            <h2 className="text-xl text-white font-bold text-center mb-4">निःशुल्क दैनिक/साप्ताहिक/मासिक राशिफल</h2>
            <div className="flex flex-row flex-wrap gap-3 justify-center ">
              {Horoscope.map((person) => (
                <a  key={person.name}
                  href={`${MAIN_URL_HINDI+person.Link}`} 
                  onClick={(e) => handleClick(e, person.Link)}
                >
                    <Image width={50} height={50} className="bg-white h-10 w-10 bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50px] flex flex-col justify-center items-center px-2 py-2 " src={person.imgSrc} alt="" />
                    <h3 className="mt-2 text-xs text-white text-base text-center font-normal leading-7 tracking-tight text-gray-900 leading-3">{person.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
       </div>
       
    </>
  )
}
"use client"; 
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MAIN_URL,MAIN_URL_HINDI } from '../config/config';
import { Cart, User } from '../config/SvgConst';

export default function Questions({language = "English", location}) {
    const router = useRouter();
    const [mainURL, setMainURL] = useState(MAIN_URL);
    const Services = [
        {nameHindi: "परामर्श", name : "Consultation", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/consultation.png", Link: "services/consultation.php" },
        {nameHindi: "ऑनलाइन रिपोर्ट",  name : "Online Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/online-report.png", Link: "services/online-reports.php"},
        {nameHindi: "ध्वनि रिपोर्ट",  name : "Voice Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/voice-report.png", Link: "services/voice-report.php"},
        {nameHindi: "जीवन वाचन",  name : "Life Readings", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/life-readings.png", Link: "services/life-readings.php"}
    ]
    const ServicesReport = [
        {nameHindi: "परामर्श", name : "Consultation", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/consultation.png", Link: "services/consultation.php" },
        {nameHindi: "ऑनलाइन रिपोर्ट",  name : "Online Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/online-report.png", Link: "services/online-reports.php"},
        {nameHindi: "ध्वनि रिपोर्ट",  name : "Voice Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/voice-report.png", Link: "services/voice-report.php"},
        // {nameHindi: "जीवन वाचन",  name : "Life Readings", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/life-readings.png", Link: "services/life-readings.php"}
    ]
    useEffect(() => {
        if(language=== "Hindi"){
          setMainURL(MAIN_URL_HINDI)
        }
    }, [MAIN_URL_HINDI, language]);

    const handleClick = (e, url) => {
        e.preventDefault(); // Prevent the default anchor behavior
        router.push(`${mainURL}${url}`);
    };
  return (
    <>
    { location === "report" ?
    <div class="max-w-7xl mx-auto flex gap-5 justify-center items-center">
        <ul class="flex flex-row flex-wrap gap-4 py-4 justify-center w-full">
            {ServicesReport.map((item) => (
                <li key={item.name} className="bg-orange-500 rounded-md lg:w-[23.8%] w-[47%] py-3 min-h-15">
                    <a className="text-xs text-white flex-col text-center flex justify-center items-center no-underline w-full h-full"
                        href={`${mainURL}${item.Link}`}
                        onClick={(e) => handleClick(e, item.Link)}
                    >
                    <Image width={40} height={40} className="w-[40px] md:w-[50px] lg:w-[75px] aspect-square object-contain" src={item.ImgUrl} alt="" />
                        <span className="text-xs text-white">{ language=== "Hindi" ? item.nameHindi : item.name }</span>
                    </a>
                </li>
            ))}
        </ul>
        <div className='flex flex-row'>
            <button
                onClick={()=> router.push("cart")}
                type="button"
                className="bg-orange-500 h-12 w-12 rounded-lg justify-center items-center flex text-white">
                <Cart width={25} height={25} />
            </button>
        </div>
    </div>
    : 
    <div class="max-w-7xl pt-10  mx-auto">
        <ul class="flex flex-row flex-wrap gap-4 py-4 justify-center">
            {Services.map((item) => (
                <li key={item.name} className="bg-orange-500 rounded-md lg:w-[23.8%] w-[47%] py-3 min-h-15">
                    <a className="text-xs text-white flex-col text-center flex justify-center items-center no-underline w-full h-full"
                        href={`${mainURL}${item.Link}`}
                        onClick={(e) => handleClick(e, item.Link)}
                    >
                    <Image width={40} height={40} className="w-[40px] md:w-[50px] lg:w-[75px] aspect-square object-contain" src={item.ImgUrl} alt="" />
                        <span className="text-xs text-white">{ language=== "Hindi" ? item.nameHindi : item.name }</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    }
    </>
  )
}
"use client"; 
import Image from "next/image";
// import {Colors} from "../config/Colors";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MAIN_URL, MAIN_URL_HINDI } from '../config/config';
export default function Questions({language = "English"}) {
    const router = useRouter();
    const [mainURL, setMainURL] = useState(MAIN_URL);

    const Questions= [
        { textHindi: "लग्न कैलकुलेटर",text: "Ascendant Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/ascendent.png", link: "calculator/ascendant-calculator.php" },
        { textHindi: "रत्न सुझाव",text: "Gemstone Suggestion", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/gemstone-suggestion.png", link: "calculator/gemstone-calculator.php" },
        { textHindi: "रुद्राक्ष सुझाव ",text: "Rudraksha Suggestion", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/rudraksha-suggestion.png", link: "calculator/rudraksha-calculator.php" },
        { textHindi: "अंकज्योतिष आपके लिए ",text: "Numerology For You", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/numerology.png", link: "calculator/numerology-calculator.php" },
        { textHindi: "कालसर्प दोष",text: "Kaalsarp Dosha", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/kaalsarp.png", link: "calculator/kaalsarp-dosh-calculator.php" },
        { textHindi: "साढ़ेसाती कैलकुलेटर",text: "Sadesati Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/sadesati-calculator.png", link: "calculator/sadesati-calculator.php" },
        { textHindi: "पितृ दोष कैलकुलेटर ",text: "Pitra Dosha Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/pitra-dosha.png", link: "calculator/pitra-dosha-calculator.php" },
        { textHindi: "मांगलिक दोष कैलकुलेटर",text: "Manglik Dosha Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/manglik-dosha-calculator.png", link: "calculator/manglik-dosha-calculator.php" },
        { textHindi: "चंद्र राशि कैलकुलेटर",text: "Moon Sign Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/moon-sign.png", link: "calculator/moon-sign-calculator.php" }
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
    <div className={`bg-[#091d5a]`}>
        <div className="container py-4 mx-auto">
            <p className="text-lg text-center text-white font-bold">{ language=== "Hindi" ? ( <> निःशुल्क वैदिक ज्योतिष कैलकुलेटर </> ) : ( <> Free Vedic Astrology Calculators </> ) }  </p>
            <ul className="flex flex-row flex-wrap gap-4 pt-4 pb-4 justify-center">
                {Questions.map((item) => (
                <li key={item.name} className="lg:w-[9%] md:w-[15%] w-[28%]">
                    <a
                        className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center"
                        href={`${mainURL+item.link}`}
                        onClick={(e) => handleClick(e, item.link)}
                    >
                        <Image width={100} height={100} className="w-[100px] aspect-square rounded-[50px]" src={item.imageUrl} alt="" />
                        <span>{ language=== "Hindi" ? item.textHindi : item.text }</span>
                    </a>    
                </li>
                ))}
            </ul>
        </div>
    </div>
    </>
  )
}
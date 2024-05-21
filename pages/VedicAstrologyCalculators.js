"use client"; 
import Image from "next/image";
import {Colors} from "../config/Colors";

export default function Questions() {
    const Questions= [
        { text: "Ascendant Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/ascendent.png", link: "https://www.vinaybajrangi.com/calculator/ascendant-calculator.php" },
        { text: "Gemstone Suggestion", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/gemstone-suggestion.png", link: "https://www.vinaybajrangi.com/calculator/gemstone-calculator.php" },
        { text: "Rudraksha Suggestion", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/rudraksha-suggestion.png", link: "https://www.vinaybajrangi.com/calculator/rudraksha-calculator.php" },
        { text: "Numerology For You", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/numerology.png", link: "https://www.vinaybajrangi.com/calculator/numerology-calculator.php" },
        { text: "Kaalsarp Dosha", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/kaalsarp.png", link: "https://www.vinaybajrangi.com/calculator/kaalsarp-dosh-calculator.php" },
        { text: "Sadesati Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/sadesati-calculator.png", link: "https://www.vinaybajrangi.com/calculator/sadesati-calculator.php" },
        { text: "Pitra Dosha Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/pitra-dosha.png", link: "https://www.vinaybajrangi.com/calculator/pitra-dosha-calculator.php" },
        { text: "Manglik Dosha Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/manglik-dosha-calculator.png", link: "https://www.vinaybajrangi.com/calculator/manglik-dosha-calculator.php" },
        { text: "Moon Sign Calculator", imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/moon-sign.png", link: "https://www.vinaybajrangi.com/calculator/moon-sign-calculator.php" }
    ]
  return (
    <>
    <div className={`bg-[#091d5a]`}>
        <div className="container py-4 mx-auto">
            <p className="text-lg text-center text-white font-bold">Free Vedic Astrology Calculators</p>
            <ul className="flex flex-row flex-wrap gap-4 pt-4 pb-4 justify-center">
                {Questions.map((item) => (
                <li key={item.name} className="lg:w-[9%] md:w-[15%] w-[28%]">
                    <a className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center" href={item.url}>
                        <Image width={100} height={100} className="w-[100px] aspect-square rounded-[50px]" src={item.imageUrl} alt="" />
                        <span>{item.text}</span>
                    </a>    
                </li>
                ))}
            </ul>
        </div>
    </div>
    </>
  )
}
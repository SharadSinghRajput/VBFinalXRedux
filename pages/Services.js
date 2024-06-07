"use client"; 
import Image from "next/image";
import { useRouter } from "next/router";
import { MAIN_URL } from '../config/config';

export default function Questions() {
    const router = useRouter();
    const Services = [
        { name : "Consultation", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/consultation.png", Link: "services/consultation.php" },
        { name : "Online Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/online-report.png", Link: "services/online-reports.php"},
        { name : "Voice Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/voice-report.png", Link: "services/voice-report.php"},
        { name : "Life Readings", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/life-readings.png", Link: "services/life-readings.php"}
    ]
    const handleClick = (e, url) => {
        e.preventDefault(); // Prevent the default anchor behavior
        router.push(`${MAIN_URL}${url}`);
    };
  return (
    <>
    <div class="max-w-7xl pt-10  mx-auto">
        <ul class="flex flex-row flex-wrap gap-4 py-4 justify-center">
            {Services.map((item) => (
                <li key={item.name} className="bg-orange-500 rounded-md lg:w-[23.8%] w-[47%] py-3 min-h-15">
                    <a className="text-xs text-white flex-col text-center flex justify-center items-center no-underline w-full h-full"
                        href={`${MAIN_URL}${item.Link}`}
                        onClick={(e) => handleClick(e, item.Link)}
                    >
                    <Image width={40} height={40} className="w-[40px] md:w-[50px] lg:w-[75px] aspect-square object-contain" src={item.ImgUrl} alt="" />
                        <span className="text-xs text-white">{item.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}
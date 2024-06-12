"use client"; 
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MAIN_URL,MAIN_URL_HINDI } from '../config/config';

export default function Questions({language = "English"}) {
    const router = useRouter();
    const [mainURL, setMainURL] = useState(MAIN_URL);
    const BannerImages = [
        { urlHindi: "https://www.vinaybajrangi.com/upload/manage-image-banner/259hin_Know-How-Your-Future-Life-Partne%20(1).jpg", url: "https://www.vinaybajrangi.com/upload/manage-image-banner/259_Know What Your Future Life Partner Will Be Like.jpg", alt: "Vinay Bajrangi", link: "services/online-report/future-life-partner.php" },
        { urlHindi: "https://www.vinaybajrangi.com/upload/manage-image-banner/260hin_Know-When-You-Will-Get-Married-3%20(1).jpg", url: "https://www.vinaybajrangi.com/upload/manage-image-banner/260_Know When You Will Get Married (2).jpg", alt: "Vinay Bajrangi", link: "services/online-report/know-your-marriage-timing.php" },
        { urlHindi: "https://www.vinaybajrangi.com/upload/manage-image-banner/261hin_Know-Do-You-have-the-Yoga-to-Do-%20(1).jpg", url: "https://www.vinaybajrangi.com/upload/manage-image-banner/261_Know If You Have The Yoga to Do Business.jpg", alt: "Vinay Bajrangi", link: "services/online-report/job-or-business.php" }
    ]

    useEffect(() => {
        if(language=== "Hindi"){
          setMainURL(MAIN_URL_HINDI)
        }
    }, [language]);

    const handleClick = (e, url) => {
        e.preventDefault(); // Prevent the default anchor behavior
        router.push(`${mainURL}${url}`);
    };
      
  return (
    <>
    <div class="max-w-7xl pb-10  mx-auto">
        <ul class="flex flex-row flex-wrap gap-4 py-4 justify-center">
            {BannerImages.map((item) => (
                <li key={item.name} className="rounded-md w-[32%] min-h-15">
                    <a 
                        href={`${mainURL}${item.link}`}
                        onClick={(e) => handleClick(e, item.link)}
                        className="text-xs text-white flex-col text-center flex justify-center items-center no-underline"
                    >
                        <Image width={400} height={100} className="w-[100%] rounded-lg aspect-auto object-contain" src={ language=== "Hindi" ? item.urlHindi : item.url} alt={item.alt} />
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}
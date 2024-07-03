"use client"; 
import { PaperClipIcon, ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MAIN_URL,MAIN_URL_HINDI } from '../config/config';

export default function Questions({language = "English"}) {
    const router = useRouter();
    const [mainURL, setMainURL] = useState(MAIN_URL);
    const Questions= [
        { titlehindi: "कुंडली मिलान हेतु ऑनलाइन रिपोर्ट",title: "Online Report for Horoscope Matching", url: "services/online-reports/horoscope-matching.php" },
        { titlehindi: "क्या आप 2024 में यूपीएससी परीक्षा क्रैक कर पाएंगे? ",title: "Will You be Successful in UPSC Exam?", url: "services/online-reports/will-i-be-successful-in-upsc-exam.php" },
        { titlehindi: "क्या आपको स्टॉक मार्केट में इन्वेस्ट करना चाहिए? ",title: "Should You Invest in the Stock Market?", url: "services/online-reports/stock-market-2024.php" },
        { titlehindi: "क्या आपको मिलेगा संतान सुख ",title: "Know About Child Birth From Birth Chart", url: "services/online-reports/chances-of-child-in-birth-chart.php" },
        { titlehindi: "क्या आपका बिजनेस करने का योग है? ",title: "Do you have the Yoga to do Business?", url: "services/online-reports/job-or-business.php" },
        { titlehindi: "कब होगी आपकी शादी ",title: "Know the Timing of your Marriage", url: "services/online-reports/know-your-marriage-timing.php" },
        { titlehindi: "आपका भावी जीवनसाथी क्या करेगा? नौकरी या व्यवसाय? ",title: "What will your Future Life Partner do? Job or Business?", url: "services/online-reports/know-future-life-partner-profession.php" },
        { titlehindi: "आपके संतान के लिए सबसे सटीक नाम ",title: "Best Name for Your Baby", url: "services/online-reports/baby-naming.php" },
        { titlehindi: "शनि का किस-किस तरह से प्रभाव है आप पर ",title: "Find Saturn’s Secrets and how they affect you", url: "services/online-reports/know-about-saturn-secrets.php" },
        { titlehindi: "शनि का किस-किस तरह से प्रभाव है आप पर ",title: "Get Most accurate result on Manglik Dosh", url: "services/online-reports/mangal-dosha-calculator.php" },
        { titlehindi: "सबसे सटीक मांगलिक दोष आकलन",title: "Assess status and personality of your Future Life Partner", url: "services/online-reports/future-life-partner.php" },
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
        <dd className="text-sm text-gray-900 bg-white">
            <ul role="list" className="divide-y divide-orange-500 rounded-md border border-orange-500">
                {Questions.map((item, index) => (
                    <li key={index} className="flex items-center justify-between py-2  pl-4 pr-5 max-md:pr-2 max-md:pl-2 text-sm leading-6">
                        <div className="flex w-full flex-1 items-center">
                            <ArrowRightIcon className="h-5 w-5 flex-shrink-0 text-orange-500" aria-hidden="true" />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="text-orange-500 font-medium">
                                    { language=== "Hindi" ? item.titlehindi : item.title }
                                </span>
                            </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <button
                                href={`${mainURL+item.url}`}
                                onClick={(e) => handleClick(e, item.url)}
                                type="button"
                                className="rounded text-xs bg-orange-500 px-2 py-1 font-normal text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                { language=== "Hindi" ? <>और पढ़ें</> : <>Read more</> }
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </dd>
    </>
  )
}

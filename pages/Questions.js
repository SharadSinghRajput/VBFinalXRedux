"use client"; 
import { PaperClipIcon, ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { useRouter } from "next/router";

export default function Questions() {
    const router = useRouter();
    const Questions= [
        { title: "Online Report for Horoscope Matching", url: "services/online-reports/horoscope-matching.php" },
        { title: "Will You be Successful in UPSC Exam?", url: "services/online-reports/will-i-be-successful-in-upsc-exam.php" },
        { title: "Should You Invest in the Stock Market?", url: "services/online-reports/stock-market-2024.php" },
        { title: "Know About Child Birth From Birth Chart", url: "services/online-reports/chances-of-child-in-birth-chart.php" },
        { title: "Do you have the Yoga to do Business?", url: "services/online-reports/job-or-business.php" },
        { title: "Know the Timing of your Marriage", url: "services/online-reports/know-your-marriage-timing.php" },
        { title: "What will your Future Life Partner do? Job or Business?", url: "services/online-reports/know-future-life-partner-profession.php" },
        { title: "Best Name for Your Baby", url: "services/online-reports/baby-naming.php" },
        { title: "Find Saturn’s Secrets and how they affect you", url: "services/online-reports/know-about-saturn-secrets.php" },
        { title: "Get Most accurate result on Manglik Dosh", url: "services/online-reports/mangal-dosha-calculator.php" },
        { title: "Assess status and personality of your Future Life Partner", url: "services/online-reports/future-life-partner.php" },
    ]

  return (
    <>
        <dd className="text-sm text-gray-900 bg-white">
            <ul role="list" className="divide-y divide-orange-500 rounded-md border border-orange-500">
                {Questions.map((item, index) => (
                    <li key={index} className="flex items-center justify-between py-2 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                            <ArrowRightIcon className="h-5 w-5 flex-shrink-0 text-orange-500" aria-hidden="true" />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate text-orange-500 font-medium">{item.title}</span>
                            </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <button
                                onClick={() => router.push(item.url)}
                                type="button"
                                className="rounded text-xs bg-orange-500 px-2 py-1 font-normal text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Read more
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </dd>
    </>
  )
}

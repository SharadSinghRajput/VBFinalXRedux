
import React, { useEffect, useState } from 'react';
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { KundliCalculation } from '../config/json/KundliCalculation'
import { KundliDosha } from '../config/json/KundliDosha'
import { RightArrow, User, Date } from '../config/SvgConst';
import { useRouter } from 'next/router';
import { lifesProblems } from "../config/json/lifesProblems"
import { VedicAstrologyCalculators } from "../config/json/VedicAstrologyCalculators"
import moonsignm from "./assets/images/moonsign.png";
import questionimg from "./assets/images/question.png";
import { MAIN_URL, MAIN_URL_HINDI } from '../config/config';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ServicesNew = [
    { name: "Consultation", hindiName: "परामर्श", ImgUrl: "/asset_frontend/img/consultation.png", Link: "/services/consultation.php", hindiLink: "/hindi/services/consultation.php" },
    { name: "Online Report", hindiName: "ऑनलाइन रिपोर्ट", ImgUrl: "/asset_frontend/img/online-report.png", Link: "/services/online-reports.php", hindiLink: "/hindi/services/online-reports.php" },
    { name: "Voice Report", hindiName: "ध्वनि रिपोर्ट", ImgUrl: "/asset_frontend/img/voice-report.png", Link: "/services/voice-report.php", hindiLink: "/hindi/services/voice-report.php" },
    { name: "Life Readings", hindiName: "जीवन वाचन", ImgUrl: "/asset_frontend/img/life-readings.png", Link: "/services/life-readings.php", hindiLink: "/hindi/services/life-readings.php" }
];
const tabs = [
    {
        name: 'Kundali', hindiName: 'कुंडली', submenu: [
            { name: "Dashboard", hindiName: "डैशबोर्ड" },
            { name: "Astro Profile", link: "astro-details.php", hindiName: "ज्योतिषीय प्रोफाइल", hindiLink: "hindi/astro-details.php" },
            { name: "Kundli Chart", link: "kundli-chart.php", hindiName: "कुंडली चार्ट", hindiLink: "hindi/kundli-chart.php" },
            { name: "House Cusps", link: "house-cups.php", hindiName: "हाउस कप्स", hindiLink: "hindi/house-cups.php" },
            { name: "Planet Ashtak", link: "planet-ashtak.php", hindiName: "ग्रह अष्टक", hindiLink: "hindi/planet-ashtak.php" },
            { name: "Sarvashtak", link: "sarvashtak.php", hindiName: "सर्वाष्टक", hindiLink: "hindi/sarvashtak.php" }
        ]
    },
    {
        name: 'Daily Forecast', hindiName: 'दैनिक भविष्यवाणी', submenu: [
            { name: "Daily Prediction", link: "daily-personalised-forecast.php", hindiName: "दैनिक भविष्यवाणी", hindiLink: "hindi/daily-personalised-forecast.php" },
            { name: "Biorhythm", link: "biorhythm.php", hindiName: "बायोरिथ्म", hindiLink: "hindi/biorhythm.php" }
        ]
    },

    {
        name: 'Horoscope Dasha', hindiName: ' कुंडली दशा', submenu: [
            { name: "Vimshottari Dasha", link: "vimshottari-dasha.php", hindiName: "विम्शोत्तरी दशा", hindiLink: "hindi/sarvashtak.php" },
            { name: "Yogini Dasha", link: "yogini-dasha.php", hindiName: "योगिनी दशा", hindiLink: "hindi/yogini-dasha.php" },
            { name: "Char Dasha", link: "char-dasha.php", hindiName: "चार दशा", hindiLink: "hindi/char-dasha.php" }
        ]
    },
    {
        name: 'Horoscope Dosha', hindiName: 'कुंडली दोष ', submenu: [
            { name: "Kaalsarp Dosha", link: "calculator/kaalsarp-dosh-calculator.php", hindiName: "कालसर्प दोष", hindiLink: "hindi/calculator/kaalsarp-dosh-calculator.php" },
            { name: "Manglik Dosha", link: "marriage-astrology/manglik-dosha-reasons-and-solutions.php", hindiName: "मांगलिक दोष", hindiLink: "hindi/calculator/manglik-dosha-calculator.php" },
            { name: "Pitra Dosha", link: "calculator/pitra-dosha-calculator.php", hindiName: "पितृ दोष", hindiLink: "hindi/calculator/pitra-dosha-calculator.php" },
            { name: "Sadesati Cycle", link: "calculator/sadesati-calculator.php", hindiName: "साढ़ेसाती चक्र", hindiLink: "hindi/calculator/sadesati-calculator.php" }
        ]
    },
    {
        name: 'Remedies', hindiName: 'उपाय', submenu: [
            { name: "Gemstone Suggestion", link: "calculator/gemstone-calculator.php", hindiName: "रत्न का सुझावट", hindiLink: "hindi/calculator/gemstone-suggestion.php" },
            { name: "Rudraksha Suggestion", link: "calculator/rudraksha-calculator.php", hindiName: "रुद्राक्ष सुझाव", hindiLink: "hindi/calculator/rudraksha-calculator.php" }
        ]
    },
    {
        name: 'Prediction Reports', hindiName: 'भविष्यवाणी रिपोर्ट्स', submenu: [
            { name: "Ascendant Report", link: "calculator/ascendant-calculator.php", hindiName: "लगन की रिपोर्ट", hindiLink: "hindi/calculator/ascendant-calculator.php" },
            { name: "Kundli Predictions", link: "kundli-predictions.php", hindiName: "कुंडली भविष्यवाणीम", hindiLink: "hindi/kundli-predictions.php" }
        ]
    },
    {
        name: 'Numerology', hindiName: 'अंक शास्त्र', submenu: [
            { name: "Favorable Points", link: "favorable-points.php", hindiName: "अनुकूल बिंदु", hindiLink: "hindi/favorable-points.php" },
            { name: "Numerology Prediction", link: "calculator/numerology-calculator.php", hindiName: "अंक शास्त्र भविष्यवाणी", hindiLink: "hindi/calculator/numerology-calculator.php" }
        ]
    },
]

const kundli = [
    { name: "Dashboard", link: "https://www.vinaybajrangi.com/kundli-report.php" },
    { name: "Astro Profile", link: "https://www.vinaybajrangi.com/astro-details.php" },
    { name: "Kundli Chart", link: "https://www.vinaybajrangi.com/kundli-chart.php" },
    { name: "House Cusps", link: "https://www.vinaybajrangi.com/house-cups.php" },
    { name: "Planet Ashtak", link: "https://www.vinaybajrangi.com/planet-ashtak.php" },
    { name: "Sarvashtak", link: "https://www.vinaybajrangi.com/sarvashtak.php" }
]

const GenderType = [
    { id: 'RepMale', title: 'Male' },
    { id: 'RepFemale', title: 'Female' },
]

export default function Kundli({ data }) {
    const router = useRouter();
    const [tabActive, settabActive] = useState('Kundali');
    const [KundaliReport, setKundaliReport] = useState('');
    const [UserInfo, setUserInfo] = useState('');
    const [mainURL, setMainURL] = useState(MAIN_URL);
    const lang = data?.language

    const handleSubmit = async () => {
        const savedInputValueNew = getLocalStorageItem('KundliFromDataKey');
        if (savedInputValueNew !== null) {
            const apiUrl = "https://www.aapkikismat.com/kundali-api.php"
            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(savedInputValueNew)
                });
                const responsezData = await response.json();
                if (responsezData.success === true) {
                    setKundaliReport(responsezData.data);
                }
            } catch (error) {
                console.log("here", error);
            }
        } else {
            router.push('/kundli.php');
        }
    };

    useEffect(() => {
        handleSubmit()
    }, [])

    const GetUserData = async () => {
        const savedInputValue = getLocalStorageItem('AutoFillFormDataKey');
        if (savedInputValue !== null) {
            setUserInfo(savedInputValue);
        }
    };

    useEffect(() => {
        GetUserData()
        if (data?.language === "Hindi") {
            setMainURL(MAIN_URL_HINDI)
        }
    }, [data?.language])


    function formatDateString(inputDateStr) {
        var parts = inputDateStr.split(' ');
        var dateParts = parts[0].split('-');
        var timeParts = parts[1].split(':');

        var day = parseInt(dateParts[2]);
        var month = parseInt(dateParts[1]) - 1;
        var year = parseInt(dateParts[0]);
        var hours = parseInt(timeParts[0]);
        var minutes = parseInt(timeParts[1]);

        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return day + ' ' + ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month] + ' ' + year + ', ' + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
    }

    const handleClickRouter = (e, url) => {
        e.preventDefault();
        router.push(`${MAIN_URL}${url}`);
    };
    const handleClickNewRouter = (e, url) => {
        e.preventDefault();
        window.open(url, '_blank'); // Open URL in a new tabF
    };


    return (
        <div className="">
            <div className={`bg-[#091d5a] mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
                <div className="container py-4 pt-0 mx-auto">
                    <div>
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">
                                Select a tab
                            </label>
                            <select
                                id="tabs"
                                name="tabs"
                                onChange={(e) => settabActive(e.target.value)}
                                className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                {tabs.map((tab) => (
                                    lang === "Hindi" ?
                                        <option value={tab.value} key={tab.hindiName}>{tab.hindiName}</option>
                                        :
                                        <option value={tab.value} key={tab.name}>{tab.name}</option>

                                ))}
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                                {tabs.map((tab, tabIdx) => (
                                    <button
                                        key={tabIdx}
                                        onClick={() => settabActive(tab.name)}
                                        className={classNames(
                                            tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                            tabIdx === 0 ? 'rounded-l-lg' : '',
                                            tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                            'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
                                        )}
                                        aria-current={tab.current ? 'page' : undefined}
                                    >
                                        <span>{lang === "Hindi" ? tab.hindiName : tab.name}</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                tabActive === (lang === "Hindi" ? tab.hindiName : tab.name) ? 'bg-indigo-500' : 'bg-transparent',
                                                'absolute inset-x-0 bottom-0 h-0.5'
                                            )}
                                        />

                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className='my-5 border-b-white/50 border-b-[0.5px] pb-5'>
                        <div className='flex gap-4 flex-wrap'>
                            {tabs.map((item) => item.name === tabActive ?
                                (item.submenu ?
                                    item.submenu.map((subItem) => (
                                        <button
                                            key={subItem.name}
                                            onClick={subItem.link ? () => router.push(lang === "Hindi" ? subItem.hindiLink : subItem.link) : undefined}
                                            className="isolate inline-flex rounded-md shadow-sm"
                                        >
                                            <span className="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-orange-500 px-3 p-4 px-5 text-sm font-semibold text-white focus:z-10">
                                                {lang === "Hindi" ? subItem.hindiName : subItem.name}
                                            </span>
                                            <span className="relative -ml-px inline-flex items-center rounded-r-md bg-orange-500 px-3 p-4 px-5 text-sm font-semibold text-white focus:z-10">
                                                <RightArrow width={20} height={20} />
                                            </span>
                                        </button>
                                    ))
                                    : null)
                                : null)}
                        </div>

                    </div>
                    <div className="mb-5 flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row h-full bg-white p-5 rounded-lg">
                            <div className="w-full md:w-60 mb-5 md:mb-0 md:mr-5">
                                <span className=" max-md:hidden text-white w-60 aspect-square flex justify-center items-center bg-orange-500 rounded-lg">
                                    <User width={100} height={100} strokeWidth={1} />
                                </span>
                                <div className="flex flex-col">
                                    <section className="mt-5 p-5 rounded-lg bg-gray-50">
                                        <dl className="space-y-4">
                                            {UserInfo.name && (
                                                <div className="flex items-center justify-between">
                                                    <dt className="flex items-center text-sm text-gray-600">
                                                        <span>{UserInfo.name}</span>
                                                    </dt>
                                                    <dd className="text-sm font-medium text-gray-900">
                                                        <User width={20} height={20} strokeWidth={2} />
                                                    </dd>
                                                </div>
                                            )}
                                            {UserInfo.dob && (
                                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                                    <dt className="flex text-sm text-gray-600">
                                                        <span>{formatDateString(UserInfo.dob)}</span>
                                                    </dt>
                                                </div>
                                            )}
                                            {UserInfo.birth_place && (
                                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                                    <dt className="flex text-sm text-gray-600">
                                                        <span>{UserInfo.birth_place}</span>
                                                    </dt>
                                                </div>
                                            )}
                                            <button
                                                type="button"
                                                className="text-sm w-full p-2 bg-blue-900 rounded-lg text-white"
                                                onClick={() => router.push("kundli.php")}
                                            >
                                                Edit Information
                                            </button>
                                        </dl>
                                    </section>
                                </div>
                            </div>
                            <div className="flex-1 p-5">
                                <p className="text-base text-gray-900 mb-5">
                                    Your kundli is ready. You are born on {UserInfo.dob ? <>{formatDateString(UserInfo.dob)}</> : <></>}.
                                    Your place of birth is {UserInfo.birth_place}. If there is any mistake, please{" "}
                                    <button
                                        type="button"
                                        onClick={() => router.push("/kundli.php")}
                                        className="inline-flex items-center gap-x-1.5 rounded-md bg-orange-500 px-3 py-0 mx-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                                    >
                                        Click here
                                        <RightArrow width={15} height={15} />
                                    </button>{" "}
                                    to re-enter your birth details again or else go ahead and explore your Kundli.
                                </p>
                                {KundaliReport.detailedMessage ? (
                                    <div className="text-base text-gray-900" dangerouslySetInnerHTML={{ __html: KundaliReport.detailedMessage }} />
                                ) : (
                                    <div className="lds-roller">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex-1 gap-3">
                            <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                                {ServicesNew.map((item) => (
                                    <div key={item.name} className="bg-orange-500 rounded-md py-3 min-h-15">
                                        <a
                                            href={`${data?.language === "Hindi" ? "/hindi/ask-question.php" : "/ask-question.php"}`}
                                            onClick={(e) => handleClickNewRouter(e, `${data?.language === "Hindi" ? "/hindi/ask-question.php" : "/ask-question.php"}`)}
                                            className="text-xs text-white w-full flex-col text-center flex justify-center items-center no-underline"
                                            target="_blank" // Open link in new tab
                                            rel="noopener noreferrer" // Security best practice for new tab links
                                        >
                                            <Image
                                                width={40}
                                                height={40}
                                                className="w-[40px] md:w-[50px] lg:w-[75px] aspect-square object-contain"
                                                src={item.ImgUrl}
                                                alt={lang === "Hindi" ? item.hindiName : item.name}
                                            />
                                            <span className="text-xs text-white">{lang === "Hindi" ? item.hindiName : item.name}</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                                {data?.language === "Hindi" ? <>
                                    <a
                                        href={`${MAIN_URL}hindi/astrology-news.php`}
                                        onClick={(e) => handleClickRouter(e, "/hindi/astrology-news.php")}
                                        className='bg-white mt-5 max-lg:mt-2 flex items-center justify-evenly rounded-lg p-2 shadow-xl border-[1px] border-[#091d5a]'>
                                        <Image
                                            width={40}
                                            height={40}
                                            className='w-10'
                                            src="/asset_frontend/img/newsicon.png"
                                            alt="Astrology News and Articles"
                                        />
                                        <h3 className='text-lg font-bold text-[#091d5a]'>ज्योतिष समाचार एवं आलेख</h3>
                                    </a>
                                </> : <>
                                    <a
                                        href={`${MAIN_URL}astrology-news.php`}
                                        onClick={(e) => handleClickRouter(e, "/astrology-news.php")}
                                        className='bg-white mt-5 max-lg:mt-2 flex items-center justify-evenly rounded-lg p-2 shadow-xl border-[1px] border-[#091d5a]'>
                                        <Image
                                            width={40}
                                            height={40}
                                            className='w-10'
                                            src="/asset_frontend/img/newsicon.png"
                                            alt="Astrology News and Articles"
                                        />
                                        <h3 className='text-lg font-bold text-[#091d5a]'>Astrology News and Articles</h3>
                                    </a>
                                </>}
                                <a
                                    href={`${data?.language === "Hindi" ? "/hindi/ask-question.php" : "/ask-question.php"}`}
                                    onClick={(e) => handleClickRouter(e, `${data?.language === "Hindi" ? "/hindi/ask-question.php" : "/ask-question.php"}`)}
                                    className="p-2 bg-white rounded-lg flex mt-5 items-center w-full justify-start">
                                    <Image src={questionimg} width={60} className='w-[60px] p-3 aspect-square rounded-lg' />
                                    <p className="text-sm font-semibold">{data?.language === "Hindi" ? "प्रश्न पूछें" : "Ask a question"}</p>
                                </a>
                                <a
                                    href={`${data?.language === "Hindi" ? "calculator-in-hindi/moon-sign-calculator" : "/calculator/moon-sign-calculator.php"}`}
                                    onClick={(e) => handleClickRouter(e, `${data?.language === "Hindi" ? "calculator-in-hindi/moon-sign-calculator" : "/calculator/moon-sign-calculator.php"}`)}

                                    className="p-2 bg-white rounded-lg flex mt-5 items-center w-full justify-start">
                                    <Image src={moonsignm} width={60} className='w-[60px] p-3 aspect-square rounded-lg' />
                                    <p className="text-sm font-semibold">{data?.language === "Hindi" ? "अपनी चंद्र राशि जानें" : "Know your moon sign"}</p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container mx-auto pt-10 max-w-6xl shadow-2xl bg-white p-5 mt-5 mb-5 rounded-lg'>
                <div>
                    <h2 className='text-lg font-bold mb-5'>{lang === "Hindi" ? "आपकी कुंडली की गणना" : "Your Kundli Calculation"}</h2>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                            },
                            450: {
                                slidesPerView: 2,
                            },
                            500: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {KundliCalculation.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full mx-auto mb-5 shadow-lg border-[1px] border-orange-500 bg-white p-2 mt-1 rounded-lg">
                                    <a
                                        href={`${MAIN_URL}${lang === "Hindi" ? item.hindiUrls : item.link}`}
                                        onClick={(e) => handleClickRouter(e, lang === "Hindi" ? item.hindiUrls : item.link)}
                                        className="gap-4 min-h-16 flex flex-row justify-start items-center">
                                        <Image width={40} height={40} src={item.image} alt={lang === "Hindi" ? item.hindiName : item.name} className='w-[50px] bg-orange-500 border-2 border-white aspect-square rounded-full' />
                                        <h5 className="text-orange-600 text-sm text-left font-bold">{lang === "Hindi" ? item.hindiName : item.name}</h5>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div>
                    <h2 className='text-lg font-bold mt-5 mb-5'>{lang === "Hindi" ? "कुंडली के दोषों का विश्लेषण" : "Your Kundli Dosha"}</h2>
                    <div className='grid   grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 gap-5'>
                        {KundliDosha.map((item, index) => (
                            <div key={index} className="w-full mx-auto shadow-xl border-[1px] border-orange-500 bg-white p-2 mt-1 rounded-lg">
                                <a
                                    href={`${MAIN_URL}${lang === "Hindi" ? item.hindiLink : item.link}`}
                                    onClick={(e) => handleClickRouter(e, lang === "Hindi" ? item.hindiLink : item.link)}
                                    className="block flex gap-4 min-h-16 flex-row justify-start items-center">
                                    <Image width={50} height={50} src={item.image} className='w-[50px] bg-orange-500 border-2 border-white aspect-square rounded-full' alt={lang === "Hindi" ? item.hindiName : item.name} />
                                    <h5 className="text-orange-600 text-sm text-left font-bold">{lang === "Hindi" ? item.hindiName : item.name}</h5>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bg-[#091d5a] p-5 mt-5 mb-5 rounded-lg '>
                    <div className='container mx-auto'>
                        <div>
                            <p className="text-lg text-center mb-5 text-white font-bold">{lang === "Hindi" ? "जीवन की सभी समस्याओं का ज्योतिषीय समाधान" : "Astrological Solutions for all life’s problems"}</p>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={4}
                                breakpoints={{
                                    100: {
                                        slidesPerView: 1,
                                    },
                                    400: {
                                        slidesPerView: 2,
                                    },
                                    500: {
                                        slidesPerView: 4,
                                    },
                                    768: {
                                        slidesPerView: 5,
                                    },
                                    1024: {
                                        slidesPerView: 7,
                                    },
                                    1280: {
                                        slidesPerView: 8,
                                    },
                                    1530: {
                                        slidesPerView: 10,
                                    },
                                }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                            >
                                {lifesProblems.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <a
                                            className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center"
                                            href={`${lang === "Hindi" ? item.hindiUrl : item.url}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? item.hindiUrl : item.url)}
                                        >
                                            <Image src={item.img} width={80} height={50} className='w-[80px] p-3 bg-orange-500 aspect-square rounded-lg' alt={lang === "Hindi" ? item.hindiName : item.name} />
                                            <span>{lang === "Hindi" ? item.hindiName : item.name}</span>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <div>
                        <ul role="list" className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                            <li className="overflow-hidden rounded-xl border border-orange-200">
                                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-orange-50 p-6">
                                    <div className="text-base font-bold leading-6 text-gray-900">{lang === "Hindi" ? "कुंडली के दोषों का उपाय" : "Your Remedial Measures"}</div>
                                </div>
                                <dl className="-my-3 divide-y divide-orange-100 px-6 py-4 text-sm leading-6">
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">{lang === "Hindi" ? "आपको कौन सा राशि रत्न पहनना चाहिए" : "Rudraksha for your Kundli"}</dt>
                                        <a className="text-emerald-500 font-semibold"
                                            href={`${lang === "Hindi" ? "hindi/calculator/rudraksha-suggestion.php" : "calculator/rudraksha-suggestion.php"}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? "hindi/calculator/rudraksha-suggestion.php" : "calculator/rudraksha-suggestion.php")}
                                        >
                                            {lang === "Hindi" ? "और पढ़ें" : "Read more"}
                                        </a>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">{lang === "Hindi" ? "आपकी कुंडली के लिए रुद्राक्ष" : "Which gemstones you can wear?"}</dt>
                                        <a className="text-emerald-500 font-semibold"
                                            href={`${mainURL}${lang === "Hindi" ? "hindi/calculator/gemstone-suggestion" : "calculator/gemstone-suggestion.php"}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? "hindi/calculator/gemstone-suggestion" : "calculator/gemstone-suggestion.php")}
                                        >
                                            {lang === "Hindi" ? "और पढ़ें" : "Read more"}
                                        </a>
                                    </div>
                                </dl>
                            </li>
                            <li className="overflow-hidden rounded-xl border border-orange-200">
                                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-orange-50 p-6">
                                    <div className="text-base font-bold leading-6 text-gray-900">{lang === "Hindi" ? "कुंडली पर आधारित भविष्यवाणियां" : "Kundli based Personalised Predictions"}</div>
                                </div>
                                <dl className="-my-3 divide-y divide-orange-100 px-6 py-4 text-sm leading-6">
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">{lang === "Hindi" ? "आपकी कुंडली के आधार पर दैनिक भविष्यवाणी" : "Your kundli based daily prediction"}</dt>
                                        <a
                                            className="text-emerald-500 font-semibold"
                                            href={`${mainURL}${lang === "Hindi" ? "hindi/daily-personalised-forecast" : "daily-personalised-forecast.php"}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? "hindi/daily-personalised-forecast" : "daily-personalised-forecast.php")}
                                        >
                                            {lang === "Hindi" ? "और पढ़ें" : "Read more"}
                                        </a>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">{lang === "Hindi" ? "आपका दैनिक जीवन चक्र" : "Your Biorhythms for today"}  </dt>
                                        <a className="text-emerald-500 font-semibold"
                                            href={`${mainURL}${lang === "Hindi" ? "hindi/biorhythm.php" : "biorhythm.php"}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? "hindi/biorhythm.php" : "biorhythm.php")}
                                        >
                                            {lang === "Hindi" ? "और पढ़ें" : "Read more"}
                                        </a>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">{lang === "Hindi" ? "आपका लग्न रिपोर्ट" : "Get your ascendant report"}</dt>
                                        <a className="text-emerald-500 font-semibold"
                                            href={`${mainURL}${lang === "Hindi" ? "hindi/calculator/ascendant-report.php" : "/calculator/ascendant-report.php"}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? "hindi/calculator/ascendant-report.php" : "/calculator/ascendant-report.php")}
                                        >
                                            {lang === "Hindi" ? "और पढ़ें" : "Read more"}
                                        </a>
                                    </div>
                                </dl>
                            </li>
                            <li className="overflow-hidden rounded-xl border border-orange-200">
                                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-orange-50 p-6">
                                    <div className="text-base font-bold leading-6 text-gray-900">{lang === "Hindi" ? "कुंडली आधारित भविष्यवाणियां और उसका विश्लेषण" : "Kundli Predictions and Analysis"}</div>
                                </div>
                                <dl className="-my-3 divide-y divide-orange-100 px-6 py-4 text-sm leading-6">
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">{lang === "Hindi" ? "आपकी कुंडली पर आधारित भविष्यवाणी" : "Read your kundli predictions here"} </dt>
                                        <a className="text-emerald-500 font-semibold"
                                            href={`${mainURL}${lang === "Hindi" ? "hindi/kundli-predictions.php" : "kundli-predictions.php"}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? "hindi/kundli-predictions.php" : "kundli-predictions.php")}
                                        >
                                            {lang === "Hindi" ? "और पढ़ें" : "Read more"}
                                        </a>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">{lang === "Hindi" ? "आपका अंकज्योतिष विश्लेषण" : "Numerology analysis for you"}</dt>
                                        <a className="text-emerald-500 font-semibold"
                                            href={`${mainURL}${lang === "Hindi" ? "/hindi/calculator/numerology-calculator.php" : "calculator/numerology-calculator.php"}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? "/hindi/calculator/numerology-calculator.php" : "calculator/numerology-calculator.php")}
                                        >
                                            {lang === "Hindi" ? "और पढ़ें" : "Read more"}
                                        </a>
                                    </div>
                                    <div className="flex justify-between gap-x-4 py-3">
                                        <dt className="text-gray-500">{lang === "Hindi" ? "आपका अंकज्योतिष के अनुकूल अंक" : "Numerology Favorable Points"}</dt>
                                        <a className="text-emerald-500 font-semibold"
                                            href={`${mainURL}${lang === "Hindi" ? "/hindi/favorable-points.php" : "favorable-points.php"}`}
                                            onClick={(e) => handleClick(e, lang === "Hindi" ? "/hindi/favorable-points.php" : "favorable-points.php")}
                                        >
                                            {lang === "Hindi" ? "और पढ़ें" : "Read more"}
                                        </a>
                                    </div>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`bg-[#091d5a] mt-5 rounded-lg`}>
                    <div className="py-4 mx-auto">
                        <p className="text-lg text-center text-white font-bold">{lang === "Hindi" ? "निःशुल्क वैदिक ज्योतिष कैलकुलेटर" : "Free Vedic Astrology Calculators"}</p>
                        <ul className="flex flex-row flex-wrap gap-4 pt-4 pb-4 justify-center">
                            {VedicAstrologyCalculators.map((item) => (
                                <li key={item.name} className="lg:w-[9%] md:w-[15%] w-[28%]">
                                    <a
                                        className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center"
                                        href={`${mainURL}${lang === "Hindi" ? item.hindiLink : item.link}`}
                                        onClick={(e) => handleClick(e, lang === "Hindi" ? item.hindiLink : item.link)}
                                    >
                                        <Image width={100} height={50} className="w-[100px] aspect-square rounded-[50px]" src={item.imageUrl} alt={lang === "Hindi" ? item.hindiName : item.name} />
                                        <span>{lang === "Hindi" ? item.hindiName : item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
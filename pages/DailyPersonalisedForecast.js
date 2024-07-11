import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import HoroscopeFetchAPI from '../config/horoscopeFetchAPI';
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import ParagraphLoder from './pageAssets/ParagraphLoder';

const ForcastSign = {
    Love: {
        alt: "Love",
        imgsrc: "images/ForcastSign/love.png"
    },
    Finance: {
        alt: "Finance",
        imgsrc: "images/ForcastSign/finance.png"
    },
    Health: {
        alt: "Health",
        imgsrc: "images/ForcastSign/health.png"
    },
    Career: {
        alt: "Career",
        imgsrc: "images/ForcastSign/career.png"
    },
    Overall: {
        alt: "Overall",
        imgsrc: "images/ForcastSign/overall.png"
    }
};



function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Kundli({ data }) {
    const router = useRouter();
    const [language, setLanguage] = useState('en'); // Initial state is English
    const [activeTab, setActiveTab] = useState(2);
    const [pageLanguage, setpageLanguage] = useState("English");
    

    const statuses = {
        Paid: 'text-green-700 bg-green-50 ring-green-600/20',
        Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
        Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    

    const [AstroDetail, setAstroDetail] = useState("");
    const [Forecast, setForecast] = useState("");
    const [OverAll, setOverAll] = useState("");
    const [Love, setLove] = useState("");
    const [Career, setCareer] = useState("");
    const [Finance, setFinance] = useState("");
    const [Health, setHealth] = useState("");

    useEffect(() => {
        const GetDataThird = getLocalStorageItem('AstroDetailKey');
        if (GetDataThird) {
            fetchData("today", GetDataThird.sign);
            setAstroDetail(GetDataThird);
        }
    }, []);

    useEffect(() => {
        fetchData("today", AstroDetail.sign)
        
    }, [pageLanguage]);

    const formatDate = () => {
        const date = new Date().toLocaleString();
        const [DatePart] = date.split(',');
        const [day, month, year] = DatePart.split('/');
        return `${year}-${month}-${day}`;
    };

    const fetchAstroData = async (type, period, sign) => {
        try {
            return await HoroscopeFetchAPI(sign, type, period, formatDate(), pageLanguage);
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const fetchData = async (period, sign) => {
        const horoscopeSign = sign ? sign : AstroDetail.sign;
        setOverAll("");
        setLove("");
        setCareer("");
        setFinance("");
        setHealth("");
        setOverAll(await fetchAstroData("overall", period, horoscopeSign));
        setLove(await fetchAstroData("love", period, horoscopeSign));
        setCareer(await fetchAstroData("career", period, horoscopeSign));
        setFinance(await fetchAstroData("finance", period, horoscopeSign));
        setHealth(await fetchAstroData("health", period, horoscopeSign));
    };
    // const fetchDataTodat = async (item, sign) => {
    //     const date = new Date().toLocaleString();
    //     const [DatePart, timePart] = date.split(',')
    //     const [day, month, year] = DatePart.split('/');
    //     const finalDate = `${year}-${month}-${day}`
    //     const horoscopeperiod = sign ? sign : AstroDetail.sign
    //     try {
    //         const astrologyData = await HoroscopeFetchAPI(AstroDetail.sign, "overall", horoscopeperiod, finalDate, pageLanguage);
    //         setOverAll(astrologyData);
    //         const GetLoveAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "love", horoscopeperiod, finalDate, pageLanguage);
    //         setLove(GetLoveAstroData);
    //         const GetcareerAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "career", horoscopeperiod, finalDate, pageLanguage);
    //         setCareer(GetcareerAstroData);
    //         const GetfinanceAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "finance", horoscopeperiod, finalDate, pageLanguage);
    //         setFinance(GetfinanceAstroData);
    //         const GethealthAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "health", horoscopeperiod, finalDate, pageLanguage);
    //         setHealth(GethealthAstroData)
    //     } catch (error) { }
    // }

    // const fetchDataonClick = async (item) => {
    //     const date = new Date().toLocaleString();
    //     const [DatePart, timePart] = date.split(',')
    //     const [day, month, year] = DatePart.split('/');
    //     const finalDate = `${year}-${month}-${day}`
    //     try {
    //         const astrologyData = await HoroscopeFetchAPI(AstroDetail.sign, "overall", item, finalDate, pageLanguage);
    //         setOverAll(astrologyData);
    //         const GetLoveAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "love", item, finalDate, pageLanguage);
    //         setLove(GetLoveAstroData);
    //         const GetcareerAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "career", item, finalDate, pageLanguage);
    //         setCareer(GetcareerAstroData);
    //         const GetfinanceAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "finance", item, finalDate, pageLanguage);
    //         setFinance(GetfinanceAstroData);
    //         const GethealthAstroData = await HoroscopeFetchAPI(AstroDetail.sign, "health", item, finalDate, pageLanguage);
    //         setHealth(GethealthAstroData)
    //     } catch (error) { }
    // }

    return (
        <>
            {data ? (
                <div className="">
                    <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
                        <div className="flex justify-end" >
                            <div className="flex bg-[#ff8330] rounded-lg transition p-1 w-max">
                                <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                                    <button
                                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-[#ea580c] text-white shadow-lg transform transition-transform active:translate-y-1 justify-self-end"
                                        onClick={()=> setpageLanguage(lang => lang === "Hindi" ? "English" : "Hindi")}
                                    >
                                        {pageLanguage === 'Hindi' ? 'हिंदी में पढ़े' : 'Read in English'}
                                    </button>
                                </nav>
                            </div>
                        </div>
                        {data.title ? (
                            <>
                                <h1 className='text-lg font-bold mb-5'>
                                    {data.title}
                                </h1>
                            </>
                        ) : null}
                        <div className="flex flex-col">
                            <div className="flex bg-[#2e4280] rounded-lg transition p-1 w-max">
                                <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                                    <button
                                        type="button"
                                        className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${activeTab === 2 ? 'bg-[#091d5a] text-white' : 'bg-transparent text-white hover:white'
                                            }`}
                                        id="segment-item-2"
                                        onClick={() => { handleTabClick(2); fetchData("today"); }}
                                        aria-controls="segment-2"
                                        role="tab"
                                    >
                                        Today
                                    </button>
                                    <button
                                        type="button"
                                        className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg ${activeTab === 3 ? 'bg-[#091d5a] text-white' : 'bg-transparent text-white hover:white'
                                            }`}
                                        id="segment-item-3"
                                        onClick={() => { handleTabClick(3); fetchData("tomorrow"); }}
                                        aria-controls="segment-3"
                                        role="tab"
                                    >
                                        Tomorrow
                                    </button>
                                </nav>
                            </div>

                            <div className="mt-3 rounded-xl border border-gray-200">
                                <div id="segment-2" className={`${activeTab === 2 ? 'block' : 'hidden'} border-gray-900/5 bg-gray-50 p-3`} role="tabpanel" aria-labelledby="segment-item-2">
                                    <div className="text-gray-900">
                                        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mb-4">
                                            <img src={ForcastSign.Overall.imgsrc} alt={ForcastSign.Overall.alt} className="w-12 h-12 mb-2" />
                                            <p className="font-bold text-3xl mb-2">Overall</p>
                                            {OverAll ?
                                                <p className="p-2 text-justify text-sm">{OverAll}</p>
                                                : <ParagraphLoder />}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                                                <img src={ForcastSign.Love.imgsrc} alt={ForcastSign.Love.alt} className="w-12 h-12 mb-2" />
                                                <p className="font-bold text-3xl mb-2">Love</p>
                                                {Love ?
                                                    <p className="p-2 text-justify text-sm">{Love}</p>
                                                    : <ParagraphLoder />}
                                            </div>
                                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                                                <img src={ForcastSign.Career.imgsrc} alt={ForcastSign.Career.alt} className="w-12 h-12 mb-2" />
                                                <p className="font-bold text-3xl mb-2">Career</p>
                                                {Career ?
                                                    <p className="p-2 text-justify text-sm">{Career}</p>
                                                    : <ParagraphLoder />}
                                            </div>
                                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                                                <img src={ForcastSign.Finance.imgsrc} alt={ForcastSign.Finance.alt} className="w-12 h-12 mb-2" />
                                                <p className="font-bold text-3xl mb-2">Finance</p>
                                                {Finance ?
                                                    <p className="p-2 text-justify text-sm">{Finance}</p>
                                                    : <ParagraphLoder />}
                                            </div>
                                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                                                <img src={ForcastSign.Health.imgsrc} alt={ForcastSign.Health.alt} className="w-12 h-12 mb-2" />
                                                <p className="font-bold text-3xl mb-2">Health</p>
                                                {Health ?
                                                    <p className="p-2 text-justify text-sm">{Health}</p>
                                                    : <ParagraphLoder />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="segment-3" className={`${activeTab === 3 ? 'block' : 'hidden'} border-gray-900/5 bg-gray-50 p-3`} role="tabpanel" aria-labelledby="segment-item-3">
                                    <div className="text-gray-900">
                                        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mb-4">
                                            <img src={ForcastSign.Overall.imgsrc} alt={ForcastSign.Overall.alt} className="w-12 h-12 mb-2" />
                                            <p className="font-bold text-3xl mb-2">Overall</p>
                                            {OverAll ?
                                                <p className="p-2 text-justify text-sm">{OverAll}</p>
                                                : <ParagraphLoder />}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                                                <img src={ForcastSign.Love.imgsrc} alt={ForcastSign.Love.alt} className="w-12 h-12 mb-2" />
                                                <p className="font-bold text-3xl mb-2">Love</p>
                                                {Love ?
                                                    <p className="p-2 text-justify text-sm">{Love}</p>
                                                    : <ParagraphLoder />}
                                            </div>
                                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                                                <img src={ForcastSign.Career.imgsrc} alt={ForcastSign.Career.alt} className="w-12 h-12 mb-2" />
                                                <p className="font-bold text-3xl mb-2">Career</p>
                                                {Career ?
                                                    <p className="p-2 text-justify text-sm">{Career}</p>
                                                    : <ParagraphLoder />}
                                            </div>
                                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                                                <img src={ForcastSign.Finance.imgsrc} alt={ForcastSign.Finance.alt} className="w-12 h-12 mb-2" />
                                                <p className="font-bold text-3xl mb-2">Finance</p>
                                                {Finance ?
                                                    <p className="p-2 text-justify text-sm">{Finance}</p>
                                                    : <ParagraphLoder />}
                                            </div>
                                            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
                                                <img src={ForcastSign.Health.imgsrc} alt={ForcastSign.Health.alt} className="w-12 h-12 mb-2" />
                                                <p className="font-bold text-3xl mb-2">Health</p>
                                                {Health ?
                                                    <p className="p-2 text-justify text-sm">{Health}</p>
                                                    : <ParagraphLoder />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <ParagraphLoder />}
        </>
    );
}

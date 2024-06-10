import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Close } from "../../config/SvgConst";

export default function LanguageSelector({ data }) {
    const router = useRouter();
    const [LanguageBank, setLanguageBank] = useState(data?.bilingualData);
    const [ShowOption, setShowOption] = useState(false);

    if (!LanguageBank) return null;

    return (
        <div className="fixed top-14 right-0 z-50 bg-white flex flex-col items-end">
            <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-l-lg" onClick={() => setShowOption(!ShowOption)}>
                {ShowOption ?
                    <Close width={20} height={20} />
                : 
                <svg fill="#fff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M21.05566,12h-2a1,1,0,0,0,0,2v2H17.8714a2.96481,2.96481,0,0,0,.18426-1A2.99955,2.99955,0,0,0,12.458,13.50049a.99992.99992,0,1,0,1.73242.999A1.0009,1.0009,0,0,1,15.05566,14a1,1,0,0,1,0,2,1,1,0,0,0,0,2,1,1,0,1,1,0,2,1.0009,1.0009,0,0,1-.86523-.49951.99992.99992,0,1,0-1.73242.999A2.99955,2.99955,0,0,0,18.05566,19a2.96481,2.96481,0,0,0-.18426-1h1.18426v3a1,1,0,0,0,2,0V14a1,1,0,1,0,0-2ZM9.08594,11.24268a.99963.99963,0,1,0,1.93945-.48536L9.26855,3.72754a2.28044,2.28044,0,0,0-4.4248,0L3.08594,10.75732a.99963.99963,0,1,0,1.93945.48536L5.58618,9H8.52545ZM6.0863,7l.6969-2.78711a.29222.29222,0,0,1,.5459,0L8.02563,7Zm7.96936,0h1a1.001,1.001,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.001,1.001,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Z"/></svg>
                }
            </button>
            {ShowOption && (
                <div className="flex flex-col w-32 shadow-lg">
                    {LanguageBank.English ?
                        <button
                        disabled={LanguageBank.English[0].currentPage === true}
                        className={`p-2 border-b border-b-orange-400 ${LanguageBank.English[0].currentPage === true ? "bg-orange-500 text-white" : "bg-orange-100 text-gray-800"}`} onClick={()=>  router.push(LanguageBank.English[0].path)}>English</button>
                    : <></>}
                    {LanguageBank.Hindi ?
                        <button
                        disabled={LanguageBank.Hindi[0].currentPage === true}
                        className={`p-2 border-b border-b-orange-400 ${LanguageBank.Hindi[0].currentPage === true ? "bg-orange-500 text-white" : "bg-orange-100 text-gray-800"}`}
                        onClick={()=>  router.push(LanguageBank.Hindi[0].path)}>
                            Hindi</button>
                    : <></>}
                </div>
            )}
        </div>
    );
}

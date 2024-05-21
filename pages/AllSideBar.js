"use client"; 
import Image from 'next/image';
import { Categories } from '../config/AllSideBarData';
import { useState } from 'react';
import { Link } from '../config/SvgConst';

export default function AllSideBar() {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <>
        <button 
        onClick={()=> setShowSideBar(!showSideBar)}
        className={`fixed right-14 bottom-14 transition-all ease-in duration-500 z-50 bg-white shadow-2xl shadow-black-800 w-16 h-16 border-r-rad rounded-tr-full
        ${showSideBar ? "rounded-tl-0" : "rounded-tl-full"} rounded-br-full rounded-bl-full flex justify-center text-orange-500 items-center border-[1px] border-orange-300`}>
            {showSideBar ? <>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </>:<>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-symlink"><path d="m10 18 3-3-3-3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"/></svg>
            </>}
        </button>
            <div className={`fixed  z-40 transition-all ease-in duration-500 bg-white/50 backdrop-blur-xl
            ${showSideBar ? "right-0 bottom-0 w-full h-full " : "right-28 bottom-28 w-0 h-0 overflow-hidden"}
            `}>
                <div className="space-y-16 py-8 xl:space-y-20">
                    <div className="mx-auto max-w-6xl ">
                        <div className="mx-auto">
                            <ul role="list" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                {Categories.map((category, index) => (
                                    <li key={index} className="rounded-xl shadow-xl bg-white">
                                        {category.name && (
                                            <div className="flex items-center border-b border-gray-900/5 bg-orange-500 rounded-t-lg p-1 px-4">
                                                <div className="text-base font-normal capitalize text-white">{category.name}</div>
                                            </div>
                                        )}
                                        {category.links ? (
                                            <ul className="-my-3 divide-y divide-gray-100">
                                                {category.links.map((link, index) => (
                                                    <li key={index} className="my-3 flex items-center px-6">
                                                        <a
                                                            href={link.url}
                                                            className="flex items-center"
                                                        >
                                                            {link.imgbanner ? (
                                                                <Image
                                                                    width={96}
                                                                    height={96}
                                                                    src={link.imgbanner}
                                                                    alt={link.alt || ''}
                                                                    className="object-cover w-full aspect-auto mr-2"
                                                                />
                                                            ) : (
                                                                link.imgsrc && (
                                                                    <Image
                                                                        width={25}
                                                                        height={25}
                                                                        src={link.imgsrc}
                                                                        alt={link.alt || ''}
                                                                        className="w-6 aspect-square rounded-full mr-2"
                                                                    />
                                                                )
                                                            )}
                                                            <span className="text-gray-900 text-xs hover:text-orange-600 uppercase mt-2">
                                                                {link.text}
                                                            </span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

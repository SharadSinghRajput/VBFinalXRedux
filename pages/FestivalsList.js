import React from 'react';
import { useRouter } from 'next/router';
import Title from './pageAssets/TitlewithBG';
import {MAIN_URL} from '../config/config'
import MetaData from './pageAssets/MetaData';

export default function Kundli({ data }) {
    const router = useRouter();

    const nestedData = data ? Object.values(data.nestedPages) : [];

    return (
        <>
            {data ? <MetaData data={data} />  : ""}
            {data ? (
                <div className="pt-5">
                    <div className={`bg-white max-w-6xl mx-auto shadow-2xl p-5 pt-5 mb-5 rounded-lg`}>
                        {data.title ? <Title titleData={data.title} /> : null}

                        <div className="mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
                                {nestedData.map((post, index) => (
                                    <a key={index} href={MAIN_URL + post.path} className="block mx-auto max-w-7xl shadow-lg border border-orange-100 rounded-lg overflow-hidden">
                                        <div className="inner-div mx-auto max-w-2xl lg:max-w-4xl">
                                            <div className="inner-div space-y-20 lg:space-y-20">
                                                <article className="inner-div relative grid grid-cols-2 gap-4">
                                                    <div className="col-span-1">
                                                        <img
                                                            src={post.featuredImage}
                                                            alt=""
                                                            className="bg-gray-50 h-48 object-cover"
                                                        />
                                                    </div>
                                                    <div className="col-span-1">
                                                        <div className="inner-div group relative max-w-xl">
                                                            <h3 className="inner-div mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                                <span className="inner-div text-red-700">{post.name}</span>
                                                            </h3>
                                                            <div className="inner-div h-36  overflow-y-auto scrollbar-thumb-red-500 scrollbar-track-red-300">
                                                                <div className='text-sm text-black text-justify ' dangerouslySetInnerHTML={{ __html: post.description }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {data.description ? (
                            <div className="mt-5 mb-5 flow-root">
                                <div className='mb-2 ml-2 mr-2 text-sm text-black text-justify inner-data-mb-5' dangerouslySetInnerHTML={{ __html: data.description }} />
                            </div>
                        ) : null}
                    </div>
                </div>
            ) :(
                <>
                <div className='w-full bg-white p-5 flex flex-col gap-5 max-w-6xl mx-auto'>
                    <div role="status" class="max-w-sm animate-pulse w-full">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="max-w-sm animate-pulse w-full">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="max-w-sm animate-pulse w-full">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div role="status" class="max-w-sm animate-pulse w-full">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                </>
            )}
        </>
    )
}

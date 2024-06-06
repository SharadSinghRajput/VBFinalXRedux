import React from 'react';
import { useRouter } from 'next/router';
import Title from './pageAssets/TitlewithBG';

export default function Kundli({ data }) {
    const router = useRouter();

    const nestedData = data ? Object.values(data.nestedPages) : [];

    return (
        <>
            {data ? (
                <div className="pt-5">
                    <div className={`bg-white mx-auto max-w-6xl mx-auto shadow-2xl p-5 pt-5 mb-5 rounded-lg`}>
                        {data.title ? <Title titleData={data.title} /> : null}

                        <div className="mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {nestedData.map((post, index) => (
                                    <a key={index} href={post.path} className="block mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="inner-div mx-auto max-w-2xl lg:max-w-4xl">
                                            <div className="inner-div mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                                                <article className="inner-div relative isolate flex flex-col gap-8 lg:flex-row">
                                                    <div className="inner-div relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 flex justify-center items-center">
                                                        <img
                                                            src={post.featuredImage}
                                                            alt=""
                                                            className="absolute inset-0 rounded-2xl bg-gray-50 object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="inner-div">
                                                        <div className="inner-div group relative max-w-xl">
                                                            <h3 className="inner-div mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                                <span className="inner-div text-red-700">{post.name}</span>
                                                            </h3>
                                                            <div className="inner-div h-60 w-60 overflow-y-auto scrollbar-thumb-red-500 scrollbar-track-red-300">
                                                                <div className='mb-2 ml-2 mr-2 text-sm text-black text-justify inner-data-mb-5' dangerouslySetInnerHTML={{ __html: post.description }} />
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
            ) : null}
        </>
    )
}

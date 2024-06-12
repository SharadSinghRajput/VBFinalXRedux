"use client"; 

import BlogDetailPage from "./BlogDetailPage"
import Image from 'next/image';
import { useState, useEffect } from 'react'
import RelatedBlogCard from "./RelatedBlogCard"
import MetaData from './pageAssets/MetaData';

import Title from './pageAssets/TitlewithBG';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';
import Tags from './pageAssets/Tags';
import CommentForm from './pageAssets/commentForm';
import BreadCrumb from "./component/BreadCrumb";
import Holder from './pageAssets/Holder';
import { useRouter } from 'next/router';
import placeholderImage from "./assets/images/default-image.png";

export default function ArticleDetails({data}) {
    const router = useRouter();
  
    const handleClickRouter = (e, url) => {
      e.preventDefault(); // Prevent the default anchor behavior
      router.push(`${url}`);
    };
  return (
    <>
      <MetaData data={data} />
      {data?.breadcrumb && <BreadCrumb data={data.breadcrumb} />}
      <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mb-5 rounded-lg">
        <div className="p-2 pt-2">
          {!data ? (
              <div className="text-center">
                  <div role="status">
                      <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                      <span className="sr-only">Loading...</span>
                  </div>
              </div>
            ) : (
              <>
                {data.extraComponentData ? data.extraComponentData.Holder1 ? <Holder data={data.extraComponentData.Holder1} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder2 ? <Holder data={data.extraComponentData.Holder2} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder3 ? <Holder data={data.extraComponentData.Holder3} /> : <></> :<></>}

                {data.title ? <>
                  <Title titleData={data.title} />
                </>:<></>}

                {data.extraComponentData ? data.extraComponentData.Holder3 ? <Holder data={data.extraComponentData.Holder4} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder4 ? <Holder data={data.extraComponentData.Holder5} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder5 ? <Holder data={data.extraComponentData.Holder6} /> : <></> :<></>}

                {data.blogBannerImage ? <>
                  <div className="w-[100%] md:w-[100%] mb-5 mt-5">
                    <Banner BannerData={data.blogBannerImage} AltName={data.title} />
                  </div>
                </>:<></>}
                    {data.nestedPages ? <>
                    <div className="flex flex-wrap gap-5 mb-5">
                        {data.nestedPages.map((item, index) => (
                            <a key={index} 
                              href={`${item?.path}`}
                              onClick={(e) => handleClickRouter(e, item?.path)}
                              className="w-40 flex-col flex justify-center items-center shadow-lg p-2 rounded-lg">    
                            {item.featuredImage ?
                                <img
                                    src={item.featuredImage}
                                    alt=""
                                    title=""
                                    class="w-16 h-16 object-cover rounded-full block" />
                            :
                            <Image
                                src={placeholderImage}
                                alt="Placeholder Image"
                                width={64}
                                height={64}
                                className="w-16 h-16 object-cover rounded-full block"
                                priority
                                />
                            }
                                <h5 className="text-sm mt-2">{item.name}</h5>
                            </a>
                        ))}
                    </div>
                    </> : <></>}

                {data.extraComponentData ? data.extraComponentData.Holder7 ? <Holder data={data.extraComponentData.Holder7} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder8 ? <Holder data={data.extraComponentData.Holder8} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder9 ? <Holder data={data.extraComponentData.Holder9} /> : <></> :<></>}

                {data.description ?
                <div className="mt-5">
                  <Description descData={data.description} />
                </div>
                :<></>}

                {data.extraComponentData ? data.extraComponentData.Holder10 ? <Holder data={data.extraComponentData.Holder10} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder11 ? <Holder data={data.extraComponentData.Holder11} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder12 ? <Holder data={data.extraComponentData.Holder12} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder13 ? <Holder data={data.extraComponentData.Holder13} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder14 ? <Holder data={data.extraComponentData.Holder14} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder15 ? <Holder data={data.extraComponentData.Holder15} /> : <></> :<></>}

                {/* Changes in Tags  */}
                {data.tags ? <>
                  <Tags TagData={data.tags} />
                </>:<></>}


                {data.recommendedBlog ? <>
                  <div className="bg-whitemx-auto">
                    <div className="border-b border-gray-200 bg-white px-0 py-5 pb-3 ">
                      <h3 className="text-xl font-semibold leading-6 text-gray-900">Related Blogs</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 py-5">
                      <RelatedBlogCard Data={data.recommendedBlog} />
                    </div>
                  </div>
                </>:<></>}
                {data.extraComponentData ? data.extraComponentData.Holder16 ? <Holder data={data.extraComponentData.Holder16} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder17 ? <Holder data={data.extraComponentData.Holder17} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder18 ? <Holder data={data.extraComponentData.Holder18} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder19 ? <Holder data={data.extraComponentData.Holder19} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder20 ? <Holder data={data.extraComponentData.Holder20} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder21 ? <Holder data={data.extraComponentData.Holder21} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder22 ? <Holder data={data.extraComponentData.Holder22} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder23 ? <Holder data={data.extraComponentData.Holder23} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder24 ? <Holder data={data.extraComponentData.Holder24} /> : <></> :<></>}
                <CommentForm />
                {data.extraComponentData ? data.extraComponentData.Holder25 ? <Holder data={data.extraComponentData.Holder25} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder26 ? <Holder data={data.extraComponentData.Holder26} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder27 ? <Holder data={data.extraComponentData.Holder27} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder28 ? <Holder data={data.extraComponentData.Holder28} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder29 ? <Holder data={data.extraComponentData.Holder29} /> : <></> :<></>}
                {data.extraComponentData ? data.extraComponentData.Holder30 ? <Holder data={data.extraComponentData.Holder30} /> : <></> :<></>}
              </> 
          )}

          
        </div>
      </div>
    </>
  )
}
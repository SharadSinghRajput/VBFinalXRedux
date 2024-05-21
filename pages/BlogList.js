"use client"; 
import { useEffect, useState } from "react";
import BreadCrumb from "./component/BreadCrumb"
import { useRouter } from 'next/router';
import {API_KEY, Domain_Secrete_Code, API_NEW_URL, MAIN_URL} from '../config/config'
import Image from "next/image";
import PageDetailFetchAPI from '../config/PageDetailFetchAPI';
import DefImage from "./assets/images/default-image.png";
import { Date } from "../config/SvgConst";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'


export default function BlogList(props) {
  const router = useRouter();
  const { type, language, slug } = props;
  const [BlogList, setBlogList] = useState("");
  const [noData, setNoData] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  const fetchData = async (pageCount) => {
    setBlogList("")
    const datas = {
      "apiKey": API_KEY,
      "getTotalBlog": 10,
      "blogFrom": pageCount ? currentPage : 0,
      "domainSecreteCode": Domain_Secrete_Code
    };
    const apiUrl = `${API_NEW_URL}blog-list-api.php`
    try { 
      const response = await fetch(apiUrl, {
        method: "POST",
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(datas)
      });
  
      const data = await response.json();
      if(data.success === true){
        setBlogList(data.data)
        setTotalRows(data.totalRows)
        setNoData(false);
      }else{
        setNoData(true);
      }
    }catch (error) {
      setNoData(true);
    }
  };
  useEffect(() => {
      fetchData();
  }, [type, language, slug]);
    
  function handleNextPage() {
    if (currentPage < Math.ceil(totalRows / 10)) {
      fetchData(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      fetchData(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  }

  function handlePageChange(pageNumber) {
    fetchData(pageNumber);
    setCurrentPage(pageNumber);
  }



  function generatePageNumbers() {
    const totalPages = Math.ceil(totalRows / 10);
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('. . .');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('. . .');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('. . .');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('. . .');
        pages.push(totalPages);
      }
    }
    return pages;
  }


  
  return (
    <>
      {props.data ? <>
        {props.data.breadcrumb ? <>
          <BreadCrumb data={props.data.breadcrumb} />
        </>:<></>}
      </>:<></>}
      <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mb-5 rounded-lg">
        {noData ? <>
          <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="mt-2 block text-sm font-semibold text-gray-900">No Data Found</span>
          </div>
        </>:<></>}
          {BlogList ? (
            <div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                {BlogList.map((category, index) => (
                  <a key={index} href={category.href} className="block h-full">
                    <div className="shadow-md rounded-lg bg-white">
                      <div aria-hidden="true" className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
                        {category.bannerImage ? 
                          <Image
                            width={200}
                            height={100}
                            src={category.bannerImage}
                            alt={category.name}
                            className="w-full aspect-auto"
                            priority
                          />
                          :<>
                          <Image
                            width={200}
                            height={100}
                            src={DefImage}
                            alt={category.name}
                            className="w-full aspect-auto"
                            priority
                          />
                        </>}
                      </div>
                      <div className="px-2 pt-2 flex gap-2 justify-start items-center">
                        <Date width={15} height={15} />
                        <p className="text-xs text-gray-800">{category.date}</p>
                      </div>
                      <div className="p-2 pt-3">
                        <h3 className="text-sm mb-4 font-bold min-h-16 text-gray-900">{category.name}</h3>
                        <div className='mb-2 text-sm text-black text-justify'  dangerouslySetInnerHTML={{ __html: category.shortDesc && category.shortDesc.length > 250 ? category.shortDesc.slice(0, 250).replace(/\\r\\n/g, '<br/>') + "..." : category.shortDesc.replace(/\\r\\n/g, '<br/>') }} />
                        {/* <p className="text-sm mb-4 text-justify text-gray-800">{category.shortDesc && category.shortDesc.length > 180 ? category.shortDesc.slice(0, 150) + "..." : category.shortDesc}</p> */}
                        <button 
                        onClick={() => router.push(category.path)}
                        className="block w-full rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-normal text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                          Read More <span aria-hidden="true">&rarr;</span></button>
                      </div>
                    </div>
                  </a>
                ))}
                </div>
                <nav className="flex items-center justify-between mt-10 border-t border-gray-200 px-4 sm:px-0">
                  <div className="-mt-px flex w-0 flex-1">
                    <button
                    onClick={handlePrevPage}
                      className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-800 hover:border-gray-300 hover:text-gray-900"
                    ><ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      Previous</button>
                  </div>
                  <div className="hidden md:-mt-px md:flex">

                  {generatePageNumbers().map(page => (
                    
                    <button key={page} onClick={() => handlePageChange(page)} disabled={page === currentPage || page === '...'}
                    className={`${page === currentPage ? "border-t-2 border-orange-500" : <></>}  inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-800`}>
                      {page}
                    </button>
                  ))}
                  </div>
                  <div className="-mt-px flex w-0 flex-1 justify-end">
                    <button
                      onClick={handleNextPage}
                      className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Next
                      <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </button>
                  </div>
                </nav>
            </div>
            
          ) : (
            <div className="text-center flex flex-1 justify-center items-center py-10">
                <div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
          )}
      </div>
    </>
  )
}
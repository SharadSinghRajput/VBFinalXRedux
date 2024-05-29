import Image from 'next/image';
import { useEffect, useState, Fragment } from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import {API_KEY, Domain_Secrete_Code, API_NEW_URL,} from '../config/config'
import { useRouter } from 'next/router';


export default function   DailyHoroscope({data}) {
  const [CategoryList, setCategoryList] = useState("")
  const router = useRouter();
  const { slug }  = router.query;

console.log(data);
  useEffect(() => {
    const fetchCategoryList = async () => {
      const dataToFetch = {          
        "apiKey": API_KEY,
        "reportFrom" : 0,
        "getTotalReport" : 500,
        "slug": slug[slug.length - 1],
        "domainSecreteCode": Domain_Secrete_Code
      };
      const apiUrl = `${API_NEW_URL}report-list-tppm-api.php`;

      try { 
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(dataToFetch)
        });

        if (!response.ok) {
          throw new Error('Failed to fetch category list');
        }
        const data = await response.json();
        console.log(data);
        if (data.success === true) {
          setCategoryList(data.data);
        } else {
          setCategoryList("notfound");
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (slug) {
      fetchCategoryList();
    }
  }, [slug]);

  const breadcrumbbtn = "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"

  return (
    <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 pt-5 rounded-lg">
      <div className="">
        {/* <h1 className="justify-center leading-6 text-white">Today's Horoscope - Daily Horoscope </h1> */}
        {CategoryList && CategoryList !== "notfound" ? <>
          <div className='grid grid-cols-2 md:grid-cols-2 gap-5'>
              {CategoryList.map((item, index)=>(
                  <div key={index} className='border-t border-gray-200 p-5 flex gap-4'>
                      {
                          item.featuredImage ? (
                              <Image src={item.featuredImage} width={80} height={80} className='w-20 h-20 rounded-lg  object-contain bg-gray-200' alt={item.name} />
                          ) : (
                              item.bannerImage && (
                              <Image src={item.bannerImage} width={80} height={80} className='w-20 h-20 rounded-lg object-contain bg-gray-200' alt={item.name} />
                              )
                          )
                      }
                      <div>
                          <p className='text-lg font-bold capitalize'>{item.name}</p>
                          {item.shortDesc ? <>
                              <div className='text-sm text-gray-900' dangerouslySetInnerHTML={{ __html:  item.shortDesc.length > 180 ? item.shortDesc.substring(0, 160) + "..." : item.shortDesc }} />
                          </>:<></>}
                          <button type="button" onClick={()=> router.push(item.path)} className="flex max-w-max items-center justify-center rounded-md border border-orange-500 bg-white px-2.5 py-2 text-sm font-medium text-orange-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0">
                              Explore Now
                          </button>
                      </div>
                  </div>
              ))}
          </div>
        </>
        : CategoryList === "notfound" ?
          <button
            type="button"
            className="relative w-full flex flex-col justify-center items-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-x"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9.5 10.5 5 5"/><path d="m14.5 10.5-5 5"/></svg>
            <span className="mt-2 block text-sm font-semibold text-gray-900">Data not found</span>
          </button>
        :
        <>
        <div role="status" className='py-24 w-full flex justify-center items-center' >
          <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        </>}
      </div>
    </div>
  )
}







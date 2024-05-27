
import React, { useEffect, useState, Fragment } from 'react';
import { formatDate } from '../config/formatDatetoAstrologyAPI'; 
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import fetchAstrologyData from '../config/getAstroAPI';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
export default function Kundli({data}) {
    const router = useRouter();
    const [HoroscopeChart, setHoroscopeChart] = useState('inProcess');
    

    const HandleGenrateChart = async () => {
        
        const GetUserDataKundaliForm = getLocalStorageItem('AstroAPIHitDataKey');
    
        if (GetUserDataKundaliForm) {
            const data = {
                day: GetUserDataKundaliForm.dobData.day,
                month: GetUserDataKundaliForm.dobData.month,
                year: GetUserDataKundaliForm.dobData.year,
                hour: GetUserDataKundaliForm.dobData.hour,
                min: GetUserDataKundaliForm.dobData.min,
                lat: GetUserDataKundaliForm.birth_place_latitude,
                lon: GetUserDataKundaliForm.birth_place_longitude,
                tzone: GetUserDataKundaliForm.tzone,
            };
            try {
                const astrologyData = await fetchAstrologyData(data, `sarvashtak`);
                if (astrologyData && astrologyData.ashtak_points) {
                    const horoscopeChartData = Object.entries(astrologyData.ashtak_points).map(([sign, values]) => ({
                        sign,
                        ...values
                    }));
                    setHoroscopeChart(horoscopeChartData);
                    console.log(astrologyData.ashtak_points);
                }
            } catch (error) {
                console.error("Error fetching astrology data for horoscope chart:", error);
            }
        }
    };
    
    
  
    useEffect(() => {
        HandleGenrateChart();
    },[])

    //console.log(HoroscopeChart);

  return (
    <>
    {data ? (
    <div className="">
        <div className={`bg-white mx-auto max-w-6xl mx-auto shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
            {data.title ? <>
                <h1 className='text-lg font-bold'>
                    {data.title}
                </h1>
            </>:<></>}

            {data.description ?
                <div className="mt-5 mb-5 flow-root">
                    <div className='mb-2 ml-2 mr-2 text-sm text-black text-justify' dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
            :<></>}
            
            <div className='flex divide-x divide-orange-200 mt-5'>
              <div className='flex-1'>
                <table className="min-w-full divide-y divide-orange-200">
                  <thead className="bg-orange-500">
                    <tr>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Planet Zodiac</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Sun</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Moon</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Mars</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Mercury</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Jupiter</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Venus</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Saturn</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Ascendant</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-200 bg-white">
                      {HoroscopeChart === "inProcess" ?
                      <>
                      <div role="status" className='py-52 w-full flex justify-center items-center' >
                        <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                      </>
                      :
                        HoroscopeChart ?
                          HoroscopeChart.map((item)=>(
                              <tr key={item.sign} className='divide-x divide-orange-200'>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.sign}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.sun}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.moon}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.mars}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.mercury}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.jupiter}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.venus}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.saturn}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.ascendant}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800 capitalize'>{item.total}</td>
                              </tr>
                            ))
                          : null
                      }
                      
                  </tbody>
                </table>
              </div>
            </div>
            
            
        </div>
    </div>
    ) : (
        <></>
    )}
    </>
  )
}

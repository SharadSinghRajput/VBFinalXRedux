
import React, { useEffect, useState, Fragment } from 'react';
import { formatDate } from '../config/formatDatetoAstrologyAPI'; 
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import fetchAstrologyData from '../config/getAstroAPI';
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon} from '@heroicons/react/20/solid'
import { UsersIcon } from '@heroicons/react/24/outline'
import { Input } from 'postcss';
import { RightArrow } from '../config/SvgConst';



  const ChartList = [
    { value: "D1", label: "Birth Chart" },
    { value: "SUN", label: "Sun Chart" },
    { value: "MOON", label: "Moon Chart" },
    { value: "chalit", label: "Chalit Chart" },
    { value: "D2", label: "Hora Chart" },
    { value: "D3", label: "Dreshkan Chart" },
    { value: "D4", label: "Chathurthamasha Chart" },
    { value: "D5", label: "Panchmansha Chart" },
    { value: "D7", label: "Saptamansha Chart" },
    { value: "D8", label: "Ashtamansha Chart" },
    { value: "D9", label: "Navamansha Chart" },
    { value: "D10", label: "Dashamansha Chart" },
    { value: "D12", label: "Dwadashamsha chart" },
    { value: "D16", label: "Shodashamsha Chart" },
    { value: "D20", label: "Vishamansha Chart" },
    { value: "D24", label: "Chaturvimshamsha Chart" },
    { value: "D27", label: "Bhamsha Chart" },
    { value: "D30", label: "Trishamansha Chart" },
    { value: "D40", label: "Khavedamsha Chart" },
    { value: "D45", label: "Akshvedansha Chart" },
    { value: "D60", label: "Shashtymsha Chart" }
  ]

  


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  
export default function Kundli() {
    const router = useRouter();
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(true)
    const [tabActive, settabActive] = useState('Kundali');
    const [KundaliReport, setKundaliReport] = useState('');
    const [UserInfo, setUserInfo] = useState('');
    const [HoroscopeChart, setHoroscopeChart] = useState('inProcess');
    const [HoroscopeChartBtnActive, setHoroscopeChartBtnActive] = useState("D1");
    const [SvgChart, setSvgChart] = useState('');
    
    



    
    const fetchData = async () => {
        const GetUserDataKundaliForm = getLocalStorageItem('AstroAPIHitDataKey');
        if (GetUserDataKundaliForm){
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
              const astrologyData = await fetchAstrologyData(data, "bhav_madhya");
              setHoroscopeChart(astrologyData);
              console.log("astrologyData", astrologyData);
          } catch (error) {
          }
        }
    }

    useEffect(() => {
        fetchData();
    },[])




    const HandleGenrateChart = async (value) => {

        setHoroscopeChartBtnActive(value ? value : "D1")

        const GetData = getLocalStorageItem('AstroAPIHitDataKey');
        
        if (GetData){
          const data = {
            day: GetData.dobData.day,
            month: GetData.dobData.month,
            year: GetData.dobData.year,
            hour: GetData.dobData.hour,
            min: GetData.dobData.min,
            lat: GetData.birth_place_latitude,
            lon: GetData.birth_place_longitude,
            tzone: GetData.tzone,
          };
          try {
              const astrologyData = await fetchAstrologyData(data, `horo_chart_image/${value ? value : "D1"}`);
              setSvgChart(astrologyData);
          } catch (error) {
          }
        }
    }
  
    useEffect(() => {
        HandleGenrateChart();
    },[])



  return (
    <div className="">
        <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
            <h1 className='text-lg font-bold'>House Cusps &amp; Sandhi</h1>
            <div className="mt-5 flow-root">
                <h2 className='text-sm font-bold'>What is a House Cusps and Sandhi?</h2>
                <p className='text-sm mt-2'> As per astrology, the cusp of Sandhi or house is the confluence of two houses. The houses and signs appear in an anti-clockwise direction in an individual’s horoscope chart. Generally, houses numbered chronologically from numbers 1-12. The midpoint located on the left side of the chart is the first house, just like nine appearing on the face of the clock. So, the second house cusp would come to the forefront where there is eight on the clock. The 3rd cusp remains at seven while the 20th house cusp at 10. The 4th always remains at the lower part of the chart, whereas the 10th always remains at the top point. For the first sign, the cusp may start at any point as the signs drift in a clockwise direction, and houses remain constant. The first and seventh house shows the horizon on earth of someone’s birth. The location of the planet lies in the first six houses of the birth chart would become invisible as they lie below the horizon line. </p>
            </div>
            <div className='bg-orange-500 border-b border-orange-200 mt-5'>
              <p className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white'>Bhav Madhya & Bhav Sandhi</p>
            </div>
            <div className='flex divide-x divide-orange-200 overflow-auto'>
              <div className='flex-1'>
                <table className="min-w-full divide-y divide-orange-200">
                  <thead className="bg-orange-500">
                      <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">House</th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Sign</th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Bhav Madhaya</th>
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
                          HoroscopeChart.bhav_sandhi ?
                          HoroscopeChart.bhav_sandhi.map((item, index)=>(
                              <tr key={index} className='divide-x divide-orange-200'>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>house: {item.house}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.sign}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.degree}</td>
                              </tr>
                            ))
                          : null
                          :null
                      }
                      
                  </tbody>
                </table>
              </div>
              <div className='flex-1'>
                <table className="min-w-full divide-y divide-orange-200">
                  <thead className="bg-orange-500">
                      <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Sign</th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Bhav Sandhi</th>
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
                          HoroscopeChart.bhav_madhya ?
                          HoroscopeChart.bhav_madhya.map((item, index)=>(
                              <tr key={index} className='divide-x divide-orange-200'>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.sign}</td>
                                  <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.degree}</td>
                              </tr>
                            ))
                          : null
                          :null
                      }
                      
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className='max-md:flex-col flex mt-10'>
                <div className='gap-2 grid grid-cols-3 w-[60%] max-md:w-full max-md:mb-5'>
                  {ChartList.map((item, index)=>(
                    <button onClick={() => HandleGenrateChart(item.value)} className={` ${HoroscopeChartBtnActive === item.value ? "bg-orange-500 text-white" : "bg-white" } border-orange-500 text-orange-500 border-[1px] flex gap-5 justify-between items-center rounded-lg px-4 py-2 text-xs`} key={index}>{item.label}
                    <CheckCircleIcon className={classNames(`${HoroscopeChartBtnActive === item.value ? "text-white" : "text-orange-500" } h-5 w-5 max-md:hidden`)} aria-hidden="true" /></button>
                  ))}
                </div>
                <div className='flex gap-2 flex-col w-[38%] justify-center items-center max-md:w-full overflow-auto'>
                    {SvgChart ? <>
                        <div className='shadow-xl w-max mx-auto rounded-lg p-2 bg-orange-200 overflow-auto' dangerouslySetInnerHTML={{ __html: SvgChart.svg ? SvgChart.svg : SvgChart }} />
                    </>:<></>}
                </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

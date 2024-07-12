
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
    // More people...
  ]


  const listItems = [
    {
      number: "1.",
      text: "Your Rahu might be giving you sleepless nights. Know other disturbances Rahu can create in your life.",
      link: {
        url: "planets/rahu.php",
        label: "Click here"
      }
    },
    {
      number: "2.",
      text: "Your Saturn may drag you back when you are just close to your goal. Know the reasons for delays and hurdles in most of your tasks.",
      link: {
        url: "planets/saturn.php",
        label: "Click here to learn more."
      }
    },
    {
      number: "3.",
      text: "Mars can cause depression, stress, frustration, arguments and misunderstandings in this house.",
      link: {
        url: "planets/mars.php",
        label: "Click here to know what role Mars is playing for you."
      }
    },
    {
      number: "4.",
      text: "If looking for fame, success, govt. job and recognition, you should know the position of your Sun.",
      link: {
        url: "planets/sun.php",
        label: "Click here to learn more."
      }
    },
    {
      number: "5.",
      text: "A strong Jupiter guarantees wealth, fortunes, marital happiness, knowledge, and good children. Know the strength of your Jupiter to make out how lucky you are.",
      link: {
        url: "planets/jupiter.php",
        label: "Click here"
      }
    },
    {
      number: "6.",
      text: "Your love life will be in trouble if Venus doesn’t support you. A well-placed Venus gives comfort, wealth and attraction. To know about your Venus,",
      link: {
        url: "planets/venus.php",
        label: "click here"
      }
    },
    {
      number: "7.",
      text: "Are you in business? Check your Mercury to know how much success you will get in the business. Good Mercury also gives good finance.",
      link: {
        url: "planets/mercury.php",
        label: "Click here."
      }
    },
    {
      number: "8.",
      text: "Your Moon might be in trouble if you constantly remain worried, confused, sad, unsecured, or frustrated.",
      link: {
        url: "planets/moon.php",
        label: "Click here to learn more about your Moon."
      }
    },
    {
      number: "9.",
      text: "A strong 7th house gives good married life. Likewise, all houses bring a specific promise to your life. Know the blessings and curses of your life.",
      link: {
        url: "astrology-houses.php",
        label: "Click here to learn more."
      }
    },
    {
      number: "10.",
      text: "Saturn in transit can make you change your house or lose your job. The transit of planets has a significant impact on life. Know which planet will hit which area of life this month or year.",
      link: {
        url: "planetary-transit.php",
        label: "Click to learn more"
      }
    }
  ]

  


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
export default function Kundli({data}) {
    const router = useRouter();
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(true)
    const [tabActive, settabActive] = useState('Kundali');
    const [KundaliReport, setKundaliReport] = useState('');
    const [UserInfo, setUserInfo] = useState('');
    const [HoroscopeChart, setHoroscopeChart] = useState('');
    const [HoroscopeChartBtnActive, setHoroscopeChartBtnActive] = useState("D1");
    const [SvgChart, setSvgChart] = useState('');
    
    console.log(HoroscopeChart);



    
    const fetchData = async () => {

        const GetData = getLocalStorageItem('AstroAPIHitDataKey');
        console.log(GetData);
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
          console.log(data);
          try {
              const astrologyData = await fetchAstrologyData(data, "planets");
              setHoroscopeChart(astrologyData);
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
        <div className={`bg-white mx-auto max-w-6xl mx-auto shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
            <h1 className='text-lg font-bold'>Your Horoscope Chart</h1>
            <div className="mt-5 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-orange-200">
                            <thead className="bg-orange-500">
                                <tr>
                                    <th scope="col" colSpan={8} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Planetary Positions Details</th>
                                </tr>
                            </thead>
                            <thead className="bg-orange-500">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Planet</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">R</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Sign</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Sign Lord</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Degree</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Nakshatra</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Nakshatra Lord</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">House</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-orange-200 bg-white">
                                {HoroscopeChart ? <>
                                    {HoroscopeChart.map((item)=>(
                                        <tr key={item.name} className='divide-x divide-orange-200'>
                                            <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.name}</td>
                                            <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.isRetro ? "R" : "-"}</td>
                                            <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.sign}</td>
                                            <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.signLord}</td>
                                            <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.fullDegree}</td>
                                            <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.nakshatra}</td>
                                            <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.nakshatraLord}</td>
                                            <td className='whitespace-nowrap px-3 py-2 text-xs text-gray-800'>{item.house}</td>
                                        </tr>
                                    ))}
                                </>:<></>}
                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div>
                    <p className='text-sm font-normal text-justify'> Lagna or Ascendant is the sign which keeps rising on the eastern horizon at the time of the birth of an individual. This Lagna is the most important and powerful sign lying in Lagna or natal chart. This sign is regarded as the first house the horoscope, and the record of other houses follow in a sequential manner through the remaining signs of the zodiac. Thus, the Lagna not only exactly shows the rising sign but also other houses in an individual	&apos;s chart. </p>
                    <h2 className='text-lg font-bold mt-5'>Select Chart</h2>
                </div>
              <div className='flex mt-5 max-md:flex-col'>
                
                <div className='gap-2 grid grid-cols-3 w-[60%] max-md:w-full'>
                  {ChartList.map((item, index)=>(
                    <button onClick={() => HandleGenrateChart(item.value)} className={` ${HoroscopeChartBtnActive === item.value ? "bg-orange-500 text-white" : "bg-white" } border-orange-500 text-orange-500 border-[1px] flex gap-5 justify-between items-center rounded-lg px-4 py-2 text-xs max-md:py-1 text-left`} key={index}>{item.label}
                    <CheckCircleIcon className={classNames(`${HoroscopeChartBtnActive === item.value ? "text-white" : "text-orange-500" } h-5 w-5 max-md:hidden `)} aria-hidden="true" /></button>
                  ))}
                </div>
                <div className='flex gap-2 flex-col w-[38%] justify-center items-center max-md:mt-5'>
                    {SvgChart ? <>
                        <div className='shadow-xl w-max mx-auto rounded-lg p-2 bg-orange-200' dangerouslySetInnerHTML={{ __html: SvgChart.svg ? SvgChart.svg : SvgChart }} />
                    </>:<></>}
                </div>
              </div>
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-1'>    
                    <div>
                        <h2 className='text-lg font-bold'>Read Your Kundli Yourselves</h2>
                        {listItems ? <>
                        <div className='flex flex-col gap-2 mt-5 max-md:gap-5'>
                            {listItems.map((item)=>(
                                <div key={item.number} className='flex max-md:flex-col gap-2 justify-start items-center max-md:justify-start max-md:items-start max-md:bg-orange-500 '>
                                    <div className='max-md:hidden w-10 h-10 rounded-full bg-orange-500 flex justify-center items-center'>
                                        <span className='text-white'>{item.number}</span>
                                    </div>
                                    <div className="pointer-events-auto rounded-lg p-3 max-md:p-2 h-auto flex flex-1 items-center justify-between gap-x-6 bg-orange-500">
                                        <p className="text-xs leading-6 text-white">
                                            <a href={item.link.url}>{item.text}</a>
                                        </p>
                                    </div>
                                    <button
                                    onClick={ ()=> router.push(item.link.url)}
                                    type="button" className=" text-white rounded-lg h-auto bg-orange-500 flex-none p-3 max-md:pt-0 text-xs flex justify-center items-center focus-visible:outline-offset-[-4px]">
                                        {item.link.label}
                                        <RightArrow width={20} height={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        </>:<></>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


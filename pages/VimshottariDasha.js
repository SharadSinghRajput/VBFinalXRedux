
import React, { useEffect, useState, Fragment } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import HoroscopeFetchAPI from '../config/horoscopeFetchAPI';
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import fetchAstrologyData from '../config/getAstroAPI';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
export default function Kundli({data}) {
const [Vdasha, setVdasha] = useState("")

    useEffect(() => {
        const AstroDet = getLocalStorageItem('AstroAPIHitDataKey');
        if(AstroDet){
            const fetchData = async () => {
                const data = {
                    day: AstroDet.dobData.day,
                    month: AstroDet.dobData.month,
                    year: AstroDet.dobData.year,
                    hour: AstroDet.dobData.hour,
                    min: AstroDet.dobData.min,
                    lat: AstroDet.birth_place_latitude,
                    lon: AstroDet.birth_place_longitude,
                    tzone: AstroDet.tzone,
                };
                try {
                    const currentVdasha = await fetchAstrologyData(data, `current_vdasha_all`);
                    setVdasha(currentVdasha);
                } catch (error) {
                }
            }
            fetchData(AstroDet)
        }
    }, []); 

      
  return (
    <>


    {data ? (
    <div className="">
        <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
        <h1 className='text-lg font-bold'>Today's Biorhythm</h1>
            <div className="my-5">
                <h4 className='text-base font-bold'>Vimshottari Dasha</h4>
                <p className='text-sm'>Vimshottari Dasha is the most accurate and logical Dasha system to foretell the events of one’s present, past, and future life, such as career, marital, and health predictions. It can foretell any event in your astrology chart. Vimshottari has a certain cyclic order, known as the planet’s Mahadasha. It works on the theory of Nakshatras. It starts from the birth of an individual’s life and goes until the end of his or her life. Mahadasha and Antardasha are the two principal categories of Vimshottari, whereas Antardasha gives the more accurate time, whereas the first Mahadasha is foretold by Moon’s transiting Nakshatra at the birth of time. </p>
            </div>
            <div className='mt-5'>
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-orange-500">
                            <tr>
                                <th scope="col" colSpan={3} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Vimshottari Maha Dasha </th>
                            </tr>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Dasha Planet</th>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Start Date</th>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">End Date</th>
                                
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-orange-100 bg-white">
                            {Vdasha? 
                                Vdasha.major ?
                                Vdasha.major.dasha_period.map((item, index)=>(
                                    <tr key={index}>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.planet}</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{item.start}</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{item.end}</td>
                                    </tr>
                                    ))
                                : null
                            :null}
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

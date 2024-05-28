
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
const [biorhythm, setBiorhythm] = useState("")

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
                    const biorhythm = await fetchAstrologyData(data, `biorhythm`);
                    setBiorhythm(biorhythm);
                    console.log(biorhythm);
                } catch (error) {
                }
            }
            fetchData(AstroDet)
        }
    }, []); 
    const CircularProgressBar = (percentage) => {
        const radius = 10; 
        const circumference = 2 * Math.PI * radius; 
        const offset = circumference - (percentage / 100) * circumference;
      
        const circleStyle = {
          strokeDasharray: circumference,
          strokeDashoffset: offset,
        };
        const circleColor = percentage >= 0 ? 'text-green-500' : 'text-orange-500';
      
        return (
          <div className="relative flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 24 24"
              className="transform -rotate-90"
            >
              <circle
                className="text-gray-300"
                cx="12"
                cy="12"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                className={circleColor}
                cx="12"
                cy="12"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={circleStyle}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex justify-center items-center">
              <span className="text-xl font-semibold">{percentage}%</span>
            </div>
          </div>
        );
      };

      const [percentage, setPercentage] = useState(15);
      
  return (
    <>


    {data ? (
    <div className="">
        <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
        <h1 className='text-lg font-bold'>Today's Biorhythm</h1>
            <div className="my-5">
                <h4 className='text-base font-bold'>What is a Biorhythm ?</h4>
                <p className='text-sm'>Biorhythms are the earthly cycles that take control of your health, emotion, and intellect. So, each cycle plays its role as it moves to and fro through a sine wave between positive and negative values. The high points of the cycle portray success, whereas the low points may worsen the situation in one’s life. Thus, these points foretell the level of various aspects of your day-to-day life. You can improve your life by monitoring your Biorhythm and action accordingly. </p>
            </div>
            <div className="my-5">
                <h4 className='text-base font-bold border-b-2 border-b-orange-500 pb-2'>Physical Biorhythm</h4>
                <div className='my-2 flex flex-col sm:flex-row gap-4'>
                    <p className='text-sm text-justify'>This cycle is related to various physical attributes of your body. The complete cycle lasts for 23 days, which affects your physical strength, energy level, and resistance. The high phase will make you vigorous, active, and physically fit, whereas the low may exhaust your energy and make you weak and less active.</p>
                    <div className='bg-orange-100 rounded-lg p-5'>
                        <h3 class="font-bold text-sm text-center mb-5">Physical <br /> Biorhythm Percentage :</h3>
                        {biorhythm ? 
                            biorhythm.physical ?
                            CircularProgressBar(biorhythm.physical.percent)
                            : null
                        :null}
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h4 className='text-base font-bold border-b-2 border-b-orange-500 pb-2'>Emotional Biorhythm</h4>
                <div className='my-2 flex flex-col sm:flex-row gap-4'>
                    <p className='text-sm flex-1 text-justify'>This cycle is related to the nervous system, also known as the sensitivity rhythm affects your emotional states. This is a complete cycle that lasts for 28 days. The high phase will make you creative, loved, and warm, whereas the low phase will make you unproductive or negative in your day-to-day life.</p>
                    <div className='bg-orange-100 rounded-lg p-5'>
                        <h3 class="font-bold text-sm text-center mb-5">Emotional <br /> Biorhythm Percentage :</h3>
                        {biorhythm ? 
                            biorhythm.emotional ?
                            CircularProgressBar(biorhythm.emotional.percent)
                            : null
                        :null}
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h4 className='text-base font-bold border-b-2 border-b-orange-500 pb-2'>Intellectual Biorhythm</h4>
                <div className='my-2 flex flex-col sm:flex-row gap-4'>
                    <p className='text-sm flex-1 text-justify'>This cycle affects your learning speed, memory, and brain alertness. It lasts for 33 days. Its high phase will make you creative and intellectually strong, so you will be capable of generating new ideas, whereas you may face difficulty in grasping ideas and concepts during its low phase.</p>
                    <div className='bg-orange-100 rounded-lg p-5'>
                        <h3 class="font-bold text-sm text-center mb-5">Intellectual <br /> Biorhythm Percentage :</h3>
                        {biorhythm ? 
                            biorhythm.intellectual ?
                            CircularProgressBar(biorhythm.intellectual.percent)
                            : null
                        :null}
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h4 className='text-base font-bold border-b-2 border-b-orange-500 pb-2'>Average Biorhythm</h4>
                <div className='my-2 flex flex-col sm:flex-row gap-4'>
                    <p className='text-sm flex-1 text-justify'>Biorhythms are the existential cycles that regulates your intellect, emotion and health. Each cycle has its own function as it oscillates through a sine wave between the value of positive and negative. The high points of the cycle indicate success while the low points may bring critical situation. These points predict the level of different aspects in your day to day life. The quality of your life can improve gradually by monitoring your action and Biorhythm accordingly.</p>
                    <div className='bg-orange-100 rounded-lg p-5'>
                        <h3 class="font-bold text-sm text-center mb-5">Average <br /> Biorhythm Percentage :</h3>
                        {biorhythm ? 
                            biorhythm.average ?
                            CircularProgressBar(biorhythm.average.percent)
                            : null
                        :null}
                    </div>
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

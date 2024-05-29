
import React, { useEffect, useState, Fragment } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import HoroscopeFetchAPI from '../config/horoscopeFetchAPI';
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import fetchAstrologyData from '../config/getAstroAPI';
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { formatDate } from '../config/formatDatetoAstrologyAPI';
import getUserLocation from "../config/GetLocation";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
export default function Kundli({data}) {
const [Vdasha, setVdasha] = useState("")
const [CurrentVdasha, setCurrentVdasha] = useState("")
const [selectedDateTime, setselectedDateTime] = useState(new Date());

const handleDateChange = (date) => {
  setselectedDateTime(date);
  fetchDataCurrent(date)
};

let inputProps = {
  placeholder: selectedDateTime,
};
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
            fetchData()
        }
    }, []);



    useEffect(() => {
        fetchDataCurrent(selectedDateTime)
    }, []);




    const fetchDataCurrent = async (dateGet) => {
        let Latitude;
        let Longitude;
    
        const getUserLocationPromise = () => {
            return new Promise((resolve) => {
                getUserLocation(function (location) {
                    resolve(location);
                });
            });
        };
    
        const location = await getUserLocationPromise();
    
        Latitude = parseFloat(location.Latitude);
        Longitude = parseFloat(location.Longitude);

        if (Latitude && Longitude) {

            const convertDateTime = (dateTimeStr) => {
                const date = new Date(dateTimeStr);
                const updatedDate = date.toISOString().split('T')[0];
                const timeParts = date.toISOString().split('T')[1].split('.')[0];
                return `${updatedDate} ${timeParts}`;
            };

            const formattedDateTime = convertDateTime(dateGet.toISOString())
            const DateFormateforAstrologyAPI = formatDate(formattedDateTime);
            const [DatePart] = formattedDateTime.split(" ");
            console.log(DatePart);

            const dataForTimeZone = {
                latitude: Latitude,
                longitude: Longitude,
            };
            
            let TimeZone;
            try {
                const astrologyData = await fetchAstrologyData(dataForTimeZone, "timezone_with_dst");
                if (astrologyData.status === true) {
                    TimeZone = astrologyData.timezone;
                }
            } catch (error) {console.error(error)}

            if(TimeZone){

                
    
                if(DateFormateforAstrologyAPI){
                    const data = {
                        day: DateFormateforAstrologyAPI.day,
                        month: DateFormateforAstrologyAPI.month,
                        year: DateFormateforAstrologyAPI.year,
                        hour: DateFormateforAstrologyAPI.hour,
                        min: DateFormateforAstrologyAPI.min,
                        lat: Latitude,
                        lon: Longitude,
                        tzone: TimeZone,
                    };
    
                    try {
                        const currentVdasha = await fetchAstrologyData(data, `current_vdasha_all`);
                        setCurrentVdasha(currentVdasha);
                    } catch (error) {}
                }

            }
        }



    }



    function formatDateString(inputDateStr) {
        var parts = inputDateStr.split(' ');
        var dateParts = parts[0].split('-');
        var timeParts = parts[2].split(':');
    
        var day = parseInt(dateParts[0]);
        var month = parseInt(dateParts[1]) - 1;
        var year = parseInt(dateParts[2]);
        var hours = parseInt(timeParts[0]);
        var minutes = parseInt(timeParts[1]);
    
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        
        var formattedDay = day < 10 ? '0' + day : day;
        var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const FinalDate =  formattedDay + ' ' + ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month] + ' ' + year + ', ' + hours + ':' + formattedMinutes + ' ' + ampm;
        return FinalDate
    }


    const getCurrentMajorPeriod = (startDate, endDate) => {
        const [day, month, yearAndTime] = startDate.split('-');
        const [year, blank ,time] = yearAndTime.trim().split(' ');
        const FinalTake = new Date(`${year}-${month}-${day} ${time}`);

        const [eday, emonth, eyearAndTime] = endDate.split('-');
        const [eyear, eblank, etime] = eyearAndTime.trim().split(' ');
        const FinalEndDate = new Date(`${eyear}-${emonth}-${eday} ${etime}`);

        const currentDate = new Date();
        return currentDate >= FinalTake && currentDate <= FinalEndDate;
    };
      
  return (
    <>


    {data ? (
    <div className="">
        <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 pt-5 mb-5 rounded-lg`}>
        <h1 className='text-lg font-bold'>Vimshottari Dasha</h1>
            <div className="my-5">
                <div className='flex-1'>
                    <p className='text-sm text-justify'>Vimshottari Dasha is the most accurate and logical Dasha system to foretell the events of one’s present, past, and future life, such as career, marital, and health predictions. It can foretell any event in your astrology chart. Vimshottari has a certain cyclic order, known as the planet’s Mahadasha. It works on the theory of Nakshatras. It starts from the birth of an individual’s life and goes until the end of his or her life. Mahadasha and Antardasha are the two principal categories of Vimshottari, whereas Antardasha gives the more accurate time, whereas the first Mahadasha is foretold by Moon’s transiting Nakshatra at the birth of time. </p>
                </div>
                <div className='my-2 mt-6 flex flex-col gap-5'>
                    <div className='w-full'>
                        <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900 w-80">
                        Current Vimshottari Dasha
                        </label>
                        <div className="mt-2">
                        <Datetime
                            inputProps={inputProps}
                            onChange={handleDateChange}
                            closeOnSelect={ true }
                            className="block w-44 rounded-md border-0 py-1.5 px-2 text-gray-900
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900
                            sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className=''>
                            <table className="min-w-full divide-y divide-gray-300 overflow-hidden shadow-lg bg-white rounded-lg">
                                <thead className="bg-blue-900">
                                    <tr>
                                        <th scope="col" colSpan={3} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Maha Dasha </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                {CurrentVdasha && CurrentVdasha.major && CurrentVdasha.major.dasha_period ? (
                                    CurrentVdasha.major.dasha_period.map((item, index) => (
                                        getCurrentMajorPeriod(item.start, item.end) ? 
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b>{item.planet}</b>
                                            </td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b className='text-orange-500'>Start :- </b>{formatDateString(item.start)} to <br/> <b className='text-orange-500'>End :- </b> {formatDateString(item.end)}
                                            </td>
                                        </tr>
                                        : null
                                    ))
                                ) : 
                                <>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                </>
                                }
                                </tbody>
                            </table>
                        </div>
                        <div >
                            <table className="min-w-full divide-y divide-gray-300 overflow-hidden shadow-lg bg-white rounded-lg">
                                <thead className="bg-blue-900">
                                    <tr>
                                        <th scope="col" colSpan={3} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Antar Dasha </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                {CurrentVdasha && CurrentVdasha.minor && CurrentVdasha.minor.dasha_period ? (
                                    CurrentVdasha.minor.dasha_period.map((item, index) => (
                                        getCurrentMajorPeriod(item.start, item.end) ? 
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b>{item.planet}</b>
                                            </td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b className='text-orange-500'>Start :- </b>{formatDateString(item.start)} to <br/> <b className='text-orange-500'>End :- </b> {formatDateString(item.end)}
                                            </td>
                                        </tr>
                                        : null
                                    ))
                                ) : <>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                </>}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table className="min-w-full divide-y divide-gray-300 overflow-hidden shadow-lg bg-white rounded-lg">
                                <thead className="bg-blue-900">
                                    <tr>
                                        <th scope="col" colSpan={3} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Prtyantar Dasha</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                {CurrentVdasha && CurrentVdasha.sub_minor && CurrentVdasha.sub_minor.dasha_period ? (
                                    CurrentVdasha.sub_minor.dasha_period.map((item, index) => (
                                        getCurrentMajorPeriod(item.start, item.end) ? 
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b>{item.planet}</b>
                                            </td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b className='text-orange-500'>Start :- </b>{formatDateString(item.start)} to <br/> <b className='text-orange-500'>End :- </b> {formatDateString(item.end)}
                                            </td>
                                        </tr>
                                        : null
                                    ))
                                ) : <>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                </>}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table className="min-w-full divide-y divide-gray-300 overflow-hidden shadow-lg bg-white rounded-lg">
                                <thead className="bg-blue-900">
                                    <tr>
                                        <th scope="col" colSpan={3} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Sookshm Dasha</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                {CurrentVdasha && CurrentVdasha.sub_sub_minor && CurrentVdasha.sub_sub_minor.dasha_period ? (
                                    CurrentVdasha.sub_sub_minor.dasha_period.map((item, index) => (
                                        getCurrentMajorPeriod(item.start, item.end) ? 
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b>{item.planet}</b>
                                            </td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b className='text-orange-500'>Start :- </b>{formatDateString(item.start)} to <br/> <b className='text-orange-500'>End :- </b> {formatDateString(item.end)}
                                            </td>
                                        </tr>
                                        : null
                                    ))
                                ) : <>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                </>}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table className="min-w-full divide-y divide-gray-300 overflow-hidden shadow-lg bg-white rounded-lg">
                                <thead className="bg-blue-900">
                                    <tr>
                                        <th scope="col" colSpan={3} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Pran Dasha</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                {CurrentVdasha && CurrentVdasha.sub_sub_sub_minor && CurrentVdasha.sub_sub_sub_minor.dasha_period ? (
                                    CurrentVdasha.sub_sub_sub_minor.dasha_period.map((item, index) => (
                                        getCurrentMajorPeriod(item.start, item.end) ? 
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b>{item.planet}</b>
                                            </td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                                                <b className='text-orange-500'>Start :- </b>{formatDateString(item.start)} to <br/> <b className='text-orange-500'>End :- </b> {formatDateString(item.end)}
                                            </td>
                                        </tr>
                                        : null
                                    ))
                                ) : <>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                </>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{formatDateString(item.start)}</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{formatDateString(item.end)}</td>
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

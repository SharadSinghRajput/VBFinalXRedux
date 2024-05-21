
import React, { useEffect, useState } from 'react';
import { formatDate } from '../config/formatDatetoAstrologyAPI'; 
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import fetchAstrologyData from '../config/getAstroAPI';
import { COMPILER_NAMES } from 'next/dist/shared/lib/constants';





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  
export default function Kundli() {
    const router = useRouter();
    const [tabActive, settabActive] = useState('Kundali');
    const [KundaliReport, setKundaliReport] = useState('');
    const [UserInfo, setUserInfo] = useState('');
    const [basicDetails, setBasicDetails] = useState({
        name: '',
        DateofBirth: '',
        TimeofBirth: '',
        BirthPlace: '',
        BirthLang: '',
        BirthLat: '',
    });
    const [astrologyDetails, setAstrologyDetails] = useState('');
    const [VimshottariDasha, setVimshottariDasha] = useState('');
    const [ChartSvg, setChartSvg] = useState('');



    useEffect(() => {
        const GetUserData = getLocalStorageItem('UserInfoDataKey');
        if (GetUserData) {
            const [DateP, TimeP] = GetUserData.dob.split(" ");
            setBasicDetails(prevState => ({
                ...prevState,
                name: GetUserData.name,
                DateofBirth: DateP,
                TimeofBirth: TimeP,
                BirthPlace: GetUserData.birth_place,
                BirthLang: GetUserData.birth_place_longitude,
                BirthLat: GetUserData.birth_place_latitude,
            }));
        }
    }, []);
    console.log(basicDetails);


    const fetchData = async () => {
        const GetUserDataKundaliForm = getLocalStorageItem('KundliFromDataKey');
        if (GetUserDataKundaliForm){
            const UDataForm = JSON.parse(GetUserDataKundaliForm)
            console.log(UDataForm)
            const formattedDate = formatDate(UDataForm.dob);
            const [DatePart] = UDataForm.dob.split(" ");
            const dataForTimeZone = {
                latitude:  UDataForm.birth_place_latitude,
                longitude: UDataForm.birth_place_longitude,
                date: DatePart,
            };
            let TimeZone;
            try {
                const astrologyData = await fetchAstrologyData(dataForTimeZone, "timezone_with_dst");
                if(astrologyData.status === true ){
                    TimeZone = astrologyData.timezone
                }
            } catch (error) {
            }
         
            if(TimeZone){
                const data = {
                    day: formattedDate.day,
                    month: formattedDate.month,
                    year: formattedDate.year,
                    hour: formattedDate.hour,
                    min: formattedDate.min,
                    lat: UDataForm.birth_place_latitude,
                    lon: UDataForm.birth_place_longitude,
                    tzone: TimeZone,
                };
                try {
                    const astrologyData = await fetchAstrologyData(data, "astro_details");
                    setAstrologyDetails(astrologyData);
                    console.log(astrologyData);
                } catch (error) {
                }
                try {
                    const VimshottariDashaData = await fetchAstrologyData(data, "current_vdasha");
                    console.log(VimshottariDashaData);
                    setVimshottariDasha(VimshottariDashaData);
                } catch (error) {
                }


                try {
                    const Chart = await fetchAstrologyData(data, "horo_chart_image/:chartId");
                    setChartSvg(Chart);
                } catch (error) {
                }


            }
        }

    }
    useEffect(() => {
        fetchData();
    }, [])


    function formatDatetoShow(dateString) {
        const [date, time] = dateString.split(' ');
        const [day, month, year] = date.split('-');
        const [hours, minutes] = time.split(':');
        const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const monthName = monthNames[parseInt(month) - 1];
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${day} ${monthName} ${year} ${formattedHours}:${minutes}${ampm}`;
    }

    
  
  return (
    <div className="">
        <div className={`bg-white mx-auto max-w-6xl mx-auto shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
            <h1 className='text-lg font-bold'>Your Astro Details</h1>
            <div className="mt-5 flow-root grid grid-cols-1 md:grid-cols-3">

                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-orange-500">
                                    <tr>
                                        <th scope="col" colSpan={2} className="py-3.5 text-center pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Basic Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Name</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{basicDetails.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Date of Birth</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{basicDetails.DateofBirth}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Time of Birth</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{basicDetails.TimeofBirth}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Place</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{basicDetails.BirthPlace}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Longitude</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{basicDetails.BirthLang}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Latitude</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{basicDetails.BirthLat}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">-</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-orange-500">
                                    <tr>
                                        <th scope="col" colSpan={2} className="py-3.5 text-center pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Panchang Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Tithi</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.Tithi}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Yog</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.Yog}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Nakshatra</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.Naksahtra}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Karan</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.Karan}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Sunrise</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500"></td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Sunset</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500"></td>
                                    </tr>
                                    <tr>
                                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">-</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-orange-500">
                                    <tr>
                                        <th scope="col" colSpan={2} className="py-3.5 text-center pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Astro Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Ascendant</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.ascendant}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Varna</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.Varna}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Vashya</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.Vashya}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Yoni</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.Yoni}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Gan</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.Gan}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Paya</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.paya}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Name Alphabet</td>
                                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{astrologyDetails.name_alphabet}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-1 md:grid-cols-2'>    
                    <div >
                        <h2 className='text-lg font-bold'>Lagna or Birth Chart</h2>
                        <p className='text-sm font-normal text-justify'> Lagna or Ascendant is the sign which keeps rising on the eastern horizon at the time of the birth of an individual. This Lagna is the most important and powerful sign lying in Lagna or natal chart. This sign is regarded as the first house the horoscope, and the record of other houses follow in a sequential manner through the remaining signs of the zodiac. Thus, the Lagna not only exactly shows the rising sign but also other houses in an individual’s chart. </p>
                    </div>
                    <div >
                        <div className="flex justify-center items-center">
                            {ChartSvg.svg ? <>
                            <div className='shadow-xl rounded-lg p-2 bg-white' dangerouslySetInnerHTML={{ __html: ChartSvg.svg }} />
                            </>:<></>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'></div><div>
                <div className='grid grid-cols-1'>    
                    <div >
                        <h2 className='text-lg font-bold'>Current Vimshottari Dasha</h2>
                        <div className="mt-5 divide-x divide-orange-100 grid grid-cols-2 md:grid-cols-5 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            { VimshottariDasha && VimshottariDasha.major ? <>
                            <table className="min-w-full divide-y divide-gray-300 ">
                                <thead className="bg-orange-500">
                                    <tr>
                                        <th scope="col" colSpan={2} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Major Dasha: {VimshottariDasha.major.planet}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">Start: {VimshottariDasha.major.start}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">End: {VimshottariDasha.major.end}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </>:<></>}
                            { VimshottariDasha && VimshottariDasha.minor ? <>
                            <table className="min-w-full divide-y divide-gray-300 ">
                                <thead className="bg-orange-500">
                                    <tr>
                                        <th scope="col" colSpan={2} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Antar Dasha: {VimshottariDasha.minor.planet}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">Start: {VimshottariDasha.minor.start}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">End: {VimshottariDasha.minor.end}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </>:<></>}
                            { VimshottariDasha && VimshottariDasha.sub_minor ? <>
                            <table className="min-w-full divide-y divide-gray-300 ">
                                <thead className="bg-orange-500">
                                    <tr>
                                        <th scope="col" colSpan={2} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Prtyantar Dasha: {VimshottariDasha.sub_minor.planet}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">Start: {VimshottariDasha.sub_minor.start}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">End: {VimshottariDasha.sub_minor.end}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </>:<></>}
                            { VimshottariDasha && VimshottariDasha.sub_sub_minor ? <>
                            <table className="min-w-full divide-y divide-gray-300 ">
                                <thead className="bg-orange-500">
                                    <tr>
                                        <th scope="col" colSpan={2} className="py-3.5 text-center pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Sookshm Dasha: {VimshottariDasha.sub_sub_minor.planet}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">Start: {VimshottariDasha.sub_sub_minor.start}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">End: {VimshottariDasha.sub_sub_minor.end}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </>:<></>}
                            { VimshottariDasha && VimshottariDasha.sub_sub_sub_minor ? <>
                            <table className="min-w-full divide-y divide-gray-300 ">
                                <thead className="bg-orange-500">
                                    <tr>
                                        <th scope="col" colSpan={2} className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Pran Dasha: {VimshottariDasha.sub_sub_sub_minor.planet}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-100 bg-white">
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">Start: {VimshottariDasha.sub_sub_sub_minor.start}</td> 
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-500">End: {VimshottariDasha.sub_sub_sub_minor.end}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </>:<></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
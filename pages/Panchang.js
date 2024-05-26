import { useEffect, useState } from "react";
import { ArrowRightCircleIcon, ArrowRightIcon, PaperClipIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import getUserLocation from "../config/GetLocation";
import fetchAstrologyData from "../config/getAstroAPI";
import { formatDate } from '../config/formatDatetoAstrologyAPI';

("use client");

export default function Questions() {
  const Panchang = [
    {
      name: "panchang1",
      img_url: "https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang1.png",
      time: "5:51:43",
    },
    {
      name: "panchang2",
      img_url: "https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang2.png",
      time: "18:48:5",
    },
    {
      name: "panchang3",
      img_url: "https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang3.png",
      time: "14:0:0",
    },
    {
      name: "panchang4",
      img_url: "https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang4.png",
      time: "2:57:40",
    },
  ];

  const [PanchangD, setPanchang] = useState("");
  const [DatetoShow, setDatetoShow] = useState("");

  const GetPanchang = async () => {
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
    console.log(Latitude);
    console.log(Longitude);

    if (Latitude && Longitude) {
        function formatDateIn(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            return `${year}-${month}-${day} ${hours}:${minutes}`;
        }

        const CurrentDate = formatDateIn(new Date());
        const [DatePart] = CurrentDate.split(" ");
        const DateFormateforAstrologyAPI = formatDate(CurrentDate);
        console.log(DateFormateforAstrologyAPI);

        const dataForTimeZone = {
            latitude: Latitude,
            longitude: Longitude,
            date: DatePart,
        };
        
        function formatDateShow(dateString) {
            // Parse the date string
            let date = new Date(dateString);
            
            // Define month names
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            
            // Get the day, month, and year
            let day = date.getDate();
            let month = monthNames[date.getMonth()];
            let year = date.getFullYear();
            
            // Format the date as "DD Month YYYY"
            let formattedDate = `${day} ${month} ${year}`;
            
            return formattedDate;
        }
        
        setDatetoShow(formatDateShow(DatePart));



        let TimeZone;
        try {
            const astrologyData = await fetchAstrologyData(dataForTimeZone, "timezone_with_dst");
            if (astrologyData.status === true) {
                TimeZone = astrologyData.timezone;
            }
        } catch (error) {
            console.error(error);
        }

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
            const basicPanchang = await fetchAstrologyData(data, "advanced_panchang");
            console.log(basicPanchang);
            setPanchang(basicPanchang);
        } catch (error) {
            console.error(error);
        }
    }
};

useEffect(() => {
    GetPanchang();
}, []);


function convertTimestamp(timestamp) {
    // Convert milliseconds to seconds
    let date = new Date(parseInt(timestamp));
    
    // Format the date to a string
    let formattedDate = date.getFullYear() + '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
    ('0' + date.getDate()).slice(-2) + ' ' +
    ('0' + date.getHours()).slice(-2) + ':' +
    ('0' + date.getMinutes()).slice(-2) + ':' +
    ('0' + date.getSeconds()).slice(-2);
    
    return formattedDate;
}





  return (
    <>
      <div className="bg-white p-5 pb-0 rounded-lg">
        <div class="grid grid-cols-2 gap-2 md:grid-cols-2 ">
          <div>
            {/* <button onClick={GetPanchang} class="text-lg font-semibold">
              Aaj Ka <span>Panchang</span>
            </button> */}
            <h3 class="text-lg font-semibold">
              Aaj Ka <span>Panchang</span>
            </h3>
            <p className="text-sm">Noida, uttar Pradesh, India</p>
          </div>
          <div className="flex justify-end items-start">
            <button
              type="button"
              className="rounded text-xs bg-orange-500 px-2 py-2 text-xs font-normal text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Detailed Panchang
            </button>
          </div>
        </div>
        <div className="relative mt-3">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-xs">{PanchangD ? PanchangD.day : null}, {DatetoShow}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-2 lg:grid-cols-5 mt-5 border-b-[1px] pb-4 border-b-orange-500">
            <div className="bg-orange-500 p-4 rounded-lg" >
              <Image
                width={500}
                height={500}
                className="w-[100%] aspect-square"
                src="https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang1.png"
                alt=""
              />
              {PanchangD ? <p className="text-center text-sm font-bold text-white mt-2">{PanchangD.sunrise}</p>: null}
            </div>
            <div className="bg-orange-500 p-4 rounded-lg" >
              <Image
                width={500}
                height={500}
                className="w-[100%] aspect-square"
                src="https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang2.png"
                alt=""
              />
              
              {PanchangD ? <p className="text-center text-sm font-bold text-white mt-2">{PanchangD.sunset}</p>: null}
            </div>
            <div className="bg-blue-900 p-4 rounded-lg" >
              <Image
                width={500}
                height={500}
                className="w-[100%] aspect-square"
                src="https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang3.png"
                alt=""
              />
              {PanchangD ? <p className="text-center text-sm font-bold text-white mt-2">{PanchangD.moonrise}</p>: null}
            </div>
            <div className="bg-blue-900 p-4 rounded-lg" >
              <Image
                width={500}
                height={500}
                className="w-[100%] aspect-square"
                src="https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang4.png"
                alt=""
              />
              {PanchangD ? <p className="text-center text-sm font-bold text-white mt-2">{PanchangD.moonset}</p>: null}
            </div>
        </div>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-2 py-2 bg-white p-4 border-[1px]  border-grey-100 drop-shadow-lg rounded-lg mt-4">
          <div className="flex divide-y divide-grey flex-col ">
            <div className="py-2">
              <h5 className="text-sm font-semibold">Month</h5>
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Amanta: </b> 
                {PanchangD.hindu_maah ? PanchangD.hindu_maah.amanta : null}
              </p>
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Purnimanta: </b>
                {PanchangD.hindu_maah ? PanchangD.hindu_maah.purnimanta : null}
              </p>
            </div>
            <div className="py-2">
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Tithi: </b> 
                {PanchangD ?
                    PanchangD.tithi ?
                        PanchangD.tithi.details ?
                            PanchangD.tithi.details.tithi_name
                        : null
                    : null
                : null}
              </p>
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Till: </b> 
                {PanchangD ?
                    PanchangD.tithi ?
                        convertTimestamp(PanchangD.tithi.end_time_ms)
                    : null
                : null}
              </p>
            </div>
            <div className="py-2">
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Yog: </b>
                {PanchangD ?
                    PanchangD.yog ?
                        PanchangD.yog.details ?
                            PanchangD.yog.details.yog_name
                        : null
                    : null
                : null}
              </p>
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Till: </b>
                {PanchangD ?
                    PanchangD.yog ?
                        convertTimestamp(PanchangD.yog.end_time_ms)
                    : null
                : null}
              </p>
            </div>
          </div>
          <div className="flex divide-y divide-grey flex-col ">
            <div className="py-2">
              <h5 className="text-sm font-semibold">Samvat</h5>
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Vikram: </b> 
                {PanchangD ? PanchangD.vikram_samvat + " " + PanchangD.vkram_samvat_name : null}
              </p>
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Shaka: </b> 
                {PanchangD ? PanchangD.shaka_samvat + " " + PanchangD.shaka_samvat_name : null}
              </p>
            </div>
            <div className="py-2">
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Nakshatra: </b>
                {PanchangD ?
                    PanchangD.nakshatra ?
                        PanchangD.nakshatra.details ?
                            PanchangD.nakshatra.details.nak_name
                        : null
                    : null
                : null}
              </p>
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Till: </b>
                {PanchangD ?
                    PanchangD.nakshatra ?
                        convertTimestamp(PanchangD.nakshatra.end_time_ms)
                    : null
                : null}
              </p>
            </div>
            <div className="py-2">
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Karan: </b>
                {PanchangD ?
                    PanchangD.karan ?
                        PanchangD.karan.details ?
                            PanchangD.karan.details.karan_name
                        : null
                    : null
                : null}
              </p>
              <p className="text-sm font-bold text-gray-800">
                <b className="font-medium">Purnimanta: </b>
                {PanchangD ?
                    PanchangD.karan ?
                        convertTimestamp(PanchangD.karan.end_time_ms)
                    : null
                : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

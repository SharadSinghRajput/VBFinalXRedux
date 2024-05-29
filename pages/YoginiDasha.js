import React, { Fragment, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useRouter } from "next/router";
import "swiper/css";
import getUserLocation from "../config/GetLocation";
import { formatDate } from "../config/formatDatetoAstrologyAPI";
import fetchAstrologyData from "../config/getAstroAPI";
import HoroscopeFetchAPI from "../config/horoscopeFetchAPI";
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Kundli({ data }) {
  const [currentYoginiDasha, setcurrentYoginiDasha] = useState("");
  const [currentYoginiDashaTop, setCurrentYoginiDashaTop] = useState("");
  const [TodayyDate, setTodayyDate] = useState("");
  console.log("TodayyDate", TodayyDate);
  useEffect(() => {
    const AstroDet = getLocalStorageItem("AstroAPIHitDataKey");
    if (AstroDet) {
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
          const currentVdasha = await fetchAstrologyData(data, `major_yogini_dasha`);
          setcurrentYoginiDasha(currentVdasha);
        } catch (error) {}
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    const fetchDataCurrent = async () => {
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
          const updatedDate = date.toISOString().split("T")[0];
          const timeParts = date.toISOString().split("T")[1].split(".")[0];
          return `${updatedDate} ${timeParts}`;
        };
        const formattedDateTime = convertDateTime(new Date());
        const DateFormateforAstrologyAPI = formatDate(formattedDateTime);
        setTodayyDate(formattedDateTime)
        console.log("formattedDateTime", formattedDateTime)
        const [DatePart] = formattedDateTime.split(" ");
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
        } catch (error) {
          console.error(error);
        }

        if (DateFormateforAstrologyAPI && TimeZone) {
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
            const YoginiDasha = await fetchAstrologyData(data, `current_yogini_dasha`);
            setCurrentYoginiDashaTop(YoginiDasha);
          } catch (error) {}
        }
      }
    };
    fetchDataCurrent();
  }, []);


  function formatDateStringNew(inputDateStr) {
    var parts = inputDateStr.split(" ");
    var dateParts = parts[0].split("-");
    var timeParts = parts[1].split(":");

    var day = parseInt(dateParts[0]);
    var month = parseInt(dateParts[1]) - 1;
    var year = parseInt(dateParts[2]);
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);

    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    var formattedDay = day < 10 ? "0" + day : day;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const FinalDate =
      formattedDay +
      " " +
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][month] +
      " " +
      year +
      ", " +
      hours +
      ":" +
      formattedMinutes +
      " " +
      ampm;
    return FinalDate;
  }

  return (
    <>
      {data ? (
        <div className="">
          <div className={`bg-white mx-auto max-w-6xl shadow-2xl p-5 mt-5 mb-5 rounded-lg`}>
            <h1 className="text-lg font-bold">Yogini Dasha</h1>
            <div className="flex-1">
              <p className="text-base text-justify">
                Quite similar to Vimshottari, Yogini Dasha is also an important Dasha of Vedic
                astrology. The Nakshatra Dasha depends on the Moon’s position. Each has
                corresponding planets or node. All in all, there are 8 Yoginis, while Ketu has no
                role to play. The total time period of Yogini Dasha is 36 years. Astrologers need to
                know the strength of planets to tell about Yogini Dasha.{" "}
              </p>
            </div>
            <div className="my-5">
              <div className="flex-1">
              <p className="text-base font-bold">Current Yogini Dasha -
                {TodayyDate ?
                <span className="bg-orange-500 p-1 px-2 text-white">{formatDateStringNew(TodayyDate)}</span>
                : null}
                </p>
                <div className="grid grid-cols-2 mt-5 gap-2">
                  {currentYoginiDashaTop && currentYoginiDashaTop.major_dasha ? (
                    <table className="min-w-full divide-y divide-gray-300 overflow-hidden shadow-lg bg-white rounded-lg">
                      <thead className="bg-blue-900">
                        <tr>
                          <th
                            scope="col"
                            colSpan={3}
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                            Major Dasha{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-100 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                            <b>{currentYoginiDashaTop.major_dasha.dasha_name}</b>
                          </td>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                            <b className="text-orange-500">Start :- </b>
                            {formatDateStringNew(
                              currentYoginiDashaTop.major_dasha.start_date,
                            )}<br /> <b className="text-orange-500">End :- </b>{" "}
                            {formatDateStringNew(currentYoginiDashaTop.major_dasha.end_date)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : <>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  </>}
                  {currentYoginiDashaTop && currentYoginiDashaTop.sub_dasha ? (
                    <table className="min-w-full divide-y divide-gray-300 overflow-hidden shadow-lg bg-white rounded-lg">
                      <thead className="bg-blue-900">
                        <tr>
                          <th
                            scope="col"
                            colSpan={3}
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                            Antar Dasha{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-100 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                            <b>{currentYoginiDashaTop.sub_dasha.dasha_name}</b>
                          </td>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                            <b className="text-orange-500">Start :- </b>
                            {formatDateStringNew(
                              currentYoginiDashaTop.sub_dasha.start_date,
                            )}<br /> <b className="text-orange-500">End :- </b>{" "}
                            {formatDateStringNew(currentYoginiDashaTop.sub_dasha.end_date)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) :  <>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </>}
                  {currentYoginiDashaTop && currentYoginiDashaTop.sub_sub_dasha ? (
                    <table className="min-w-full divide-y divide-gray-300 overflow-hidden shadow-lg bg-white rounded-lg">
                      <thead className="bg-blue-900">
                        <tr>
                          <th
                            scope="col"
                            colSpan={3}
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                            Prtyantar Dasha{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-orange-100 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                            <b>{currentYoginiDashaTop.sub_sub_dasha.dasha_name}</b>
                          </td>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-left text-gray-900 sm:pl-6">
                            <b className="text-orange-500">Start :- </b>
                            {formatDateStringNew(
                              currentYoginiDashaTop.sub_sub_dasha.start_date,
                            )}<br /> <b className="text-orange-500">End :- </b>{" "}
                            {formatDateStringNew(currentYoginiDashaTop.sub_sub_dasha.end_date)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) :  <>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </>}
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-orange-500">
                    <tr>
                      <th
                        scope="col"
                        colSpan={3}
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                        Yogini Maha Dasha{" "}
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                        Dasha Planet
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                        Start Date
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                        End Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100 bg-white">
                    {currentYoginiDasha
                      ? currentYoginiDasha.map((item, index) => (
                          <tr key={index}>
                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                              {item.dasha_name}
                            </td>
                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                              {formatDateStringNew(item.start_date)}
                            </td>
                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                              {formatDateStringNew(item.end_date)}
                            </td>
                          </tr>
                        ))
                      : null}
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
  );
}

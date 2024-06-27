import Image from "next/image";
import { useRouter } from "next/router";
import { Horoscope } from "../config/Horoscope";
import { MAIN_URL } from "../config/config";
import Banner from "./pageAssets/Banner";
import Description from "./pageAssets/Description";
import MetaData from "./pageAssets/MetaData";
import Title from "./pageAssets/TitlewithBG";

("use client");

export default function HomePage({ lang = "English" }) {
  const router = useRouter();
  const NavigateLink = [
    {
      name: "Daily Horoscope",
      HindiName: "दैनिक राशिफल",
      link: `${MAIN_URL}horoscope/daily-horoscope.php`,
      HindiLink: `${MAIN_URL}hindi/horoscope/daily-horoscope.php`,
    },
    {
      name: "Weekly Horoscope",
      HindiName: "साप्ताहिक राशिफल",
      link: `${MAIN_URL}horoscope/weekly-horoscope.php`,
      HindiLink: `${MAIN_URL}hindi/horoscope/weekly-horoscope.php`,
    },
    {
      name: "Monthly Horoscope",
      HindiName: "मासिक राशिफल",
      link: `${MAIN_URL}horoscope/monthly-horoscope.php`,
      HindiLink: `${MAIN_URL}hindi/horoscope/monthly-horoscope.php`,
    },
    {
      name: "Yearly Horoscope",
      HindiName: "वार्षिक राशिफल",
      link: `${MAIN_URL}horoscope/yearly-horoscope.php`,
      HindiLink: `${MAIN_URL}hindi/horoscope/yearly-horoscope.php`,
    },
  ];

  const handleClick = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(`${MAIN_URL}${url}`);
  };

  return (
    <>
      <div className="grid grid-cols-4 m-5">
        {NavigateLink.map((item, index) => (
          <div className="col-span-1" key={index}>
            <button
              onClick={() => router.push(lang === "Hindi" ? item.HindiLink : item.link)}
              className="w-full h-10 bg-orange-500 text-white border-r border-r-white/50">
              {lang === "Hindi" ? item.HindiName : item.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

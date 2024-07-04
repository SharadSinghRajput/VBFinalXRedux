import Image from "next/image";
import { useRouter } from "next/router";
import { Horoscope } from "../config/Horoscope";
import { MAIN_URL } from "../config/config";
import Banner from "./pageAssets/Banner";
import Description from "./pageAssets/Description";
import MetaData from "./pageAssets/MetaData";
import Title from "./pageAssets/TitlewithBG";

("use client");

export default function HomePage({ lang = "English", slug = "" }) {
  const router = useRouter();
  const NavigateLink = [
    {
      name: "Daily Horoscope",
      HindiName: "दैनिक राशिफल",
      link: `/horoscope/daily-horoscope.php`,
      HindiLink: `/hindi/horoscope/daily-horoscope.php`,
      slug: `daily-horoscope.php`,
    },
    {
      name: "Tomorrow Horoscope",
      HindiName: "कल का राशिफल",
      link: `/horoscope/tomorrow-horoscope.php`,
      HindiLink: `/kal-ka-rashiphal/kal-ka-rashiphal`,
      slug: `tomorrow-horoscope.php`,
    },
    {
      name: "Weekly Horoscope",
      HindiName: "साप्ताहिक राशिफल",
      link: `/horoscope/weekly-horoscope.php`,
      HindiLink: `/hindi/horoscope/weekly-horoscope.php`,
      slug: `weekly-horoscope.php`,
    },
    {
      name: "Monthly Horoscope",
      HindiName: "मासिक राशिफल",
      link: `/horoscope/monthly-horoscope.php`,
      HindiLink: `/hindi/horoscope/monthly-horoscope.php`,
      slug: `monthly-horoscope.php`,
    },
    {
      name: "Yearly Horoscope",
      HindiName: "वार्षिक राशिफल",
      link: `/horoscope/yearly-horoscope.php`,
      HindiLink: `/hindi/horoscope/yearly-horoscope.php`,
      slug: `yearly-horoscope.php`,
    },
  ];

  const handleClick = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(`${MAIN_URL}${url}`);
  };

  return (
    <>
      <div className="md:flex m-5 max-md:grid-cols-2 max-md:grid max-md:divide-y max-md:divide-white">
        {NavigateLink.map((item, index) => (
          slug !== item.slug ? 
          <div className="flex-1" key={index}>
            <a
              href={`${MAIN_URL}${lang === "Hindi" ? item.HindiLink : item.link}`}
              onClick={(e) => handleClick(e, lang === "Hindi" ? item.HindiLink : item.link)}
              className="w-full h-10 bg-orange-500 text-white border-r border-r-white/50 flex justify-center items-center p-2 max-md:h-full max-md:text-sm max-md:text-center">
              {lang === "Hindi" ? item.HindiName : item.name}
            </a>
          </div>
          : ""
        ))}
      </div>
    </>
  );
}
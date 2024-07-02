import Image from "next/image";
import { useRouter } from "next/router";
import { Horoscope } from "../config/Horoscope";
import { MAIN_URL } from "../config/config";
import Banner from "./pageAssets/Banner";
import Description from "./pageAssets/Description";
import MetaData from "./pageAssets/MetaData";
import Title from "./pageAssets/TitlewithBG";
import HoroscopeFourButton from './HoroscopeFourButton';

("use client");

export default function HomePage({ data }) {
  const router = useRouter();

  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(`${MAIN_URL}${url}`);
  };

  // const dayType = data?.zodiacPeriod ? `${data.zodiacPeriod}horoscope` : "daily-horoscope";
  const dayType = data && data.zodiacPeriod ? data.zodiacPeriod + "-horoscope" : "daily-horoscope";
  // console.log("Day Type: " , data.zodiacPeriod);
  const horoscopes = Horoscope(dayType);
  const PageSlug = router?.query?.slug[router?.query?.slug.length - 1];

  return (
    <>
      <MetaData data={data} />
      <div className="bg-white max-w-6xl mx-auto">
        <div className="px-5 pt-5">{data?.title && <Title titleData={data.title} />}</div>
        <div className="grid grid-cols-1 gap-10 m-5">
          <div className={`bg-orange-500 p-2 md:p-4 rounded-lg`}>
            <h2 className="text-xl text-white font-bold text-center mb-4">
              Free Daily / Weekly / Monthly Horoscope
            </h2>
            <div className="flex flex-row flex-wrap gap-3 justify-center ">
              {horoscopes.map((person) => (
                <a
                  key={person.name}
                  href={`${MAIN_URL}${person.url}`}
                  onClick={(e) => handleClick(e, person.url)}>
                  <Image
                    width={50}
                    height={50}
                    className="bg-white h-10 w-10 bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50px] flex flex-col justify-center items-center px-2 py-2"
                    src={person.imgSrc}
                    alt={person.name}
                  />
                  <h3 className="mt-2  text-white text-base text-center font-normal leading-7 tracking-tight text-gray-900 leading-3">
                    {person.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
        <HoroscopeFourButton slug={PageSlug} lang={data.language} />

        {data?.blogBannerImage && (
          <div className="w-full md:w-full mb-5 mt-5 p-2">
            <Banner BannerData={data.blogBannerImage} />
          </div>
        )}
        <div className="p-3">
          {data?.description && <Description descData={data.description} />}
        </div>
      </div>
    </>
  );
}

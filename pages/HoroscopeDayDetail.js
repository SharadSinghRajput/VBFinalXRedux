"use client"; 
import Title from './pageAssets/Title';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';
import { useRouter } from 'next/router';


import Image from "next/image";

export default function HomePage({data}) {
    const router = useRouter();
  const people = [
    { name: 'Betting & Gambling', url: 'https://www.vinaybajrangi.com/astrology-for-betting.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/icons.png' },
    { name: 'All about Vastu', url: 'https://www.vinaybajrangi.com/vastu.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/allabout-vastu.png' },
    { name: 'Foreign Settlement', url: 'https://www.vinaybajrangi.com/foreign-travel.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/foreign-settlement.png' },
    { name: 'Vastu for commercial', url: 'https://www.vinaybajrangi.com/vastu-for-commercial.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/vfc.png' },
    { name: 'Past life Readings', url: 'https://www.vinaybajrangi.com/life-predictions.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/pastlife-readings.png' },
    { name: 'Share market Astrology', url: 'https://www.vinaybajrangi.com/share-market-astrology.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/birth-time-correction.png' },
    { name: 'Birth time Correction', url: 'https://www.vinaybajrangi.com/time-rectification.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/btc.png' },
    { name: 'Your Astro Secrets', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/btc.png' },
    // { name: 'Marriage Astrology', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/file-icons_ring.png' },
    // { name: 'Property Astrology', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/property-astrology.png' },
    // { name: 'Business Astrology', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/ba.png' },
    // { name: 'Court legal Issues', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/court-legal-Issues.png' },
    // { name: 'Career Astrology', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/career-astrology.png' },
    // { name: 'Health Astrology', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/ha.png' },
    // { name: 'Loan and Debt', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/loan-debt.png' },
    // { name: 'Children Astrology', url: 'https://www.vinaybajrangi.com/astrological-reports.php', imgSrc: 'https://www.vinaybajrangi.com/asset_frontend/img/life-icons/children-astrology.png' }
  ]
  const Horoscope = [
    { name: "Aries", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/aries.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aries.png", Link: "horoscope/daily-horoscope/aries.php" },
    { name: "Taurus", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/taurus.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Tauras.png", Link: "horoscope/daily-horoscope/taurus.php"},
    { name: "Gemini", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/gemini.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Gemini.png", Link: "horoscope/daily-horoscope/gemini.php"},
    { name: "Cancer", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/cancer.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Cancer.png", Link: "horoscope/daily-horoscope/cancer.php"},
    { name: "Leo", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/leo.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Leo.png", Link: "horoscope/daily-horoscope/leo.php"},
    { name: "Virgo", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/virgo.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Virgo.png", Link: "horoscope/daily-horoscope/virgo.php"},
    { name: "Libra", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/libra.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Libra.png", Link:"horoscope/daily-horoscope/libra.php"},
    { name: "Scorpio", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/scorpio.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Scorpio.png", Link: "horoscope/daily-horoscope/scorpio.php"},
    { name: "Sagittarius", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/sagittarius.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Sagittarius.png", Link:"horoscope/daily-horoscope/sagittarius.php"},
    { name: "Capricorn", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/capricorn.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Capricorn.png", Link: "horoscope/daily-horoscope/capricorn.php"},
    { name: "Aquarius", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/aquarius.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aquarius.png", Link: "horoscope/daily-horoscope/aquarius.php"},
    { name: "Pisces", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/pisces.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/pices.png", Link: "horoscope/daily-horoscope/pisces.php"}
  ]

  
  return (
    <>
      <div className='bg-white max-w-6xl mx-auto mt-5'>
        <div class="grid grid-cols-1 gap-10">
          <div className={`bg-orange-500 p-2 md:p-4 rounded-lg`}>
            <h2 class="text-xl text-white font-bold text-center mb-4">Free Daily / Weekly / Monthly Horoscope</h2>
            <div class="flex flex-row flex-wrap gap-3 justify-center ">
              {Horoscope.map((person) => (
                <button key={person.name} onClick={()=> router.push(person.Link)} >
                    <Image width={50} height={50} className="bg-white h-10 w-10 bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50px] flex flex-col justify-center items-center px-2 py-2 " src={person.imgSrc} alt="" />
                    <h3 className="mt-2 text-xs text-white text-base text-center font-normal leading-7 tracking-tight text-gray-900 leading-3">{person.name}</h3>
                </button>
              ))}
            </div>
          </div>
        </div>
        {data?.title && <Title titleData={data.title} />}
            {data?.blogBannerImage && (
            <div className="w-full md:w-full mb-5 mt-5">
                <Banner BannerData={data.blogBannerImage} />
            </div>
            )}
            {data?.description && <Description descData={data.description} />}
       </div>
       
    </>
  )
}
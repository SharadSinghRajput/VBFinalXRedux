"use client"; 


import Image from "next/image";

export default function HomePage() {
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
    { name: "Aries", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/aries.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aries.png" },
    { name: "Taurus", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/taurus.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Tauras.png" },
    { name: "Gemini", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/gemini.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Gemini.png" },
    { name: "Cancer", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/cancer.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Cancer.png" },
    { name: "Leo", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/leo.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Leo.png" },
    { name: "Virgo", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/virgo.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Virgo.png" },
    { name: "Libra", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/libra.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Libra.png" },
    { name: "Scorpio", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/scorpio.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Scorpio.png" },
    { name: "Sagittarius", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/sagittarius.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Sagittarius.png" },
    { name: "Capricorn", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/capricorn.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Capricorn.png" },
    { name: "Aquarius", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/aquarius.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aquarius.png" },
    { name: "Pisces", url: "https://www.vinaybajrangi.com/horoscope/daily-horoscope/pisces.php", imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/pices.png"}
  ]

  
  return (
    <>
      <div class="container pt-4 pb-10  mx-auto">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="bg-[url('https://www.vinaybajrangi.com/asset_frontend/img/aspBG.png')] p-4 rounded-lg">
            <h2 class="text-xl text-orange-500 font-bold text-center mb-4"><b>Astrological Solutions</b> for all life’s problems</h2>
            <ul role="list" className="grid gap-2 md:gap-4 grid-cols-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  sm:gap-y-16 xl:col-span-4 p-0">
              {people.map((person) => (
                <li key={person.name} className="bg-orange-500 p-2 aspect-auto rounded-lg flex flex-col justify-center items-center p-2">
                  <div className="flex flex-col items-center">
                    <Image width={40} height={40} className="h-10 w-10" src={person.imgSrc} alt="" />
                    <h3 className="mt-2 text-xs text-white text-base text-center leading-normal font-normal leading-7 tracking-tight text-gray-900 leading-3">{person.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`bg-orange-500 p-2 md:p-4 rounded-lg`}>
            <h2 class="text-xl text-white font-bold text-center mb-4">Free Daily / Weekly / Monthly Horoscope</h2>
            <ul class="flex flex-row flex-wrap gap-3 justify-center ">
              {Horoscope.map((person) => (
                <li key={person.name} >
                    <Image width={50} height={50} className="bg-white h-10 w-10 bg-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[75px] lg:h-[75px] rounded-[50px] flex flex-col justify-center items-center px-2 py-2 " src={person.imgSrc} alt="" />
                    <h3 className="mt-2 text-xs text-white text-base text-center font-normal leading-7 tracking-tight text-gray-900 leading-3">{person.name}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
       </div>
       
    </>
  )
}
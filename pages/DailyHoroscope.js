import Image from 'next/image';
import HoroscopeIcon from '../config/HoroscopeIcon';
import Link from "next/link";



export default function DailyHoroscope() {

  const countryData = [
      {
          name:"Hindi",
          image:"/images/flags/india.png"
      },
      {
          name:"Marathi",
          image:"/images/flags/india.png"
      },
      {
          name:"English",
          image:"/images/flags/usa.png"
      },
  ]

  return (
    
    <div className="">
      <div className="max-w-6xl w-full mx-auto shadow-2xl bg-white p-5 mt-5 rounded-lg">
        <section className="top-one-part free-daily-bg w-full">
          <div className="container">
            <h2 className="web">Free Daily / Weekly / Monthly Horoscope</h2>
            <div className="fdwmh flex overflow-auto p-0">
              <div className="swiper-slide mx-2">
                <a href="https://www.vinaybajrangi.com/hindi/horoscope/daily-horoscope/mesh.php" className="category-item">
                  <Image src="https://www.vinaybajrangi.com/upload/rashi-img/Aries.png" alt="aries" width={65} height={65} />
                </a>
                <h5> मेष </h5>
              </div>
              {/* Repeat the above div for other zodiac signs */}
            </div>
          </div>
        </section>
      </div> 
      <div className="max-w-6xl w-full mx-auto shadow-2xl bg-white p-5 mt-5 rounded-lg">
        <div className="container mx-auto">
          <div className="font-bold text-2xl text-center gap-x-6 bg-orange-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <h1 className="justify-center leading-6 text-white">Today's Horoscope - Daily Horoscope </h1>
          </div>
          <div className="flex justify-end">
            {countryData.map((item,index)=>{
                return(
                  <Link href="" className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-300 text-sm text-center rounded bg-white hover:bg-orange-700 border border-pink-800 hover:border-orange-900 text-orange-800 hover:text-white font-semibold m-0.5" key={index}><Image src={item.image} width={20} height={20} className="h-5 w-5 me-1" alt="" /> {item.name}</Link>
                )
            })}
          </div>
          <div className="text-sm font-semibold text-justify text-gray-800 leading-8">
            <p><span>If you are looking for your horoscope as per your zodiac sign for the day, you’ve come to the correct place. With just few clicks, you can get the most accurate, genuine and helpful advice on how your day is going to be! You’ll just need to click on the Zodiac Sign for which you want the Astrology prediction, and go through a detailed <a href="https://www.vinaybajrangi.com/horoscope/daily-horoscope.php"><span><strong>Daily Horoscope</strong></span></a><span><strong>.</strong></span>&nbsp;On this website, you will find a detailed daily horoscope/horoscope for today, which is based on the daily motion of the moon in a particular sign. The degrees of each planet in a particular sign is also taken in to account for foretelling the <strong>Today's Horoscope</strong>. It contains the do’s, don’ts, daily love life, finance, career, health, lucky number, colour, Mantra of the Day, and last but not the least, “<em><strong>Today’s Remedy</strong></em>” to overcome any issue you might be destined to face.</span> </p>

            {/* HoroscopeIcon Goes here */}
            <div className="bg-white py-8 px-4 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
                {HoroscopeIcon.map((horoscope) => (
                  <div key={horoscope.name} className="relative">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-orange-500 rounded-md"></div>
                    <div className="relative">
                      <Image className="ml-6 rounded-md" src={horoscope.imageUrl} alt={horoscope.alt} />
                    </div>
                    <h3 className="absolute top-0 left-0 right-0 mx-auto mt-20 text-base font-normal leading-4 tracking-tight text-center text-gray-900 ">{horoscope.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* HoroscopeIcon End here */}

            {/* Button Goes Here */}

            <div className="px-4">
              <span className="isolate inline-flex w-full h-12 rounded-md shadow-sm">
                <button
                  type="button"
                  className="relative ml-1 text-center items-center rounded-r-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-yellow-400 focus:z-10 w-full"
                >Weekly Horoscope
                </button>
                <button
                  type="button"
                  className="relative ml-1 text-center items-center rounded-l-md rounded-r-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-yellow-400 focus:z-10 w-full"
                >Monthly Horoscope</button>
                <button
                  type="button"
                  className="relative ml-1 text-center items-center bg-orange-600 px-3 py-2 text-sm rounded-l-md font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-yellow-400 focus:z-10 w-full"
                >Yearly Horoscope</button>
              </span>
            </div>


            {/* Button End Here */}

            <p><span>There are a million reasons why people are serious about </span><a href="https://www.vinaybajrangi.com/hindi/horoscope/daily-horoscope.php" target="_blank"><span ><strong>Daily Horoscope in Hindi</strong></span></a><span> or <strong>Love Horoscope</strong>. In fact, research finds that people, especially youngsters, who may not be so enthusiastic about astrology, consult Daily Horoscope in their day-to-day lives. This is because each one of us looking for a certain guidance to carry out our big and small life decisions and horoscopes kind of provide a genuine advice and, of course, these are fun to read too! This <strong>Astrology Prediction</strong>, based on <strong>Zodiac Signs</strong>, is what keeps some of us going on in life, right?</span></p>
            <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">Reasons why Daily Horoscope is Popular</h2>
            <p ><span>Individuals go for <strong>love, health, career</strong>, or other horoscopes, because of a variety of reasons. While some may be looking for a soothing comfort during a particularly stressful time, there may be others who want to know whether what they are planning to do in life will bear them a desirable result or not. People often find comfort even in the most generalized or vague horoscopes, often taking the forecasts with a pinch of salt. Nevertheless, they read horoscopes and here are some of the reasons why -</span></p>
            
            <ul className='list-decimal pl-16'>
              <li className="text-justify">
                <strong>Self-doubt</strong> – When someone is passing through a difficult phase personally, either by way of obstacles in education, or general life, one tends to consult a daily horoscope to not only understand one’s self but also to seek some way out of the confusion.
              </li>
              <li className="text-justify">
                <strong>Love life</strong> – One of the most significant aspects of a person’s life is a love or relationship, here! Questions like “Are we compatible?”, “Is She/He the one?”, “Will we be satisfied with each other?” are more often than not answered through the Daily Love Horoscope.
              </li>
              <li className="text-justify">
                <strong>Career &amp; Finances</strong> – People often get stuck when it comes to their career choices or job stability. At such a time, the Daily Horoscope answers your queries such as the best time to look for a new job, the right time to make the switch or when to appear for a job interview. As for investments, both major and minor, or purchases, you can consult the Daily Horoscope and find out which dates or days or times are auspicious to carry out the investments.
              </li>
              <li className="text-justify">
                <strong>Sheer Curiosity </strong>– Sometimes, you may be just curious to know what your day holds in it for you. So, for that as well, a Daily Horoscope is the right way to learn more!
              </li>
            </ul>

            <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">Reassurance for Millennials</h2>
            <p><span >If you are a millennial, member of the with-it generation, there is no doubt that you must be dealing with a million doubts a day, whether it is studies, relationships or general life. The combined stress and uncertainty make it harder for you to focus on the priorities and force you to stay behind on most of your goals. If you are tech savvy, then you might know that you can find free horoscope online and can read your horoscope and <a href="https://www.vinaybajrangi.com/horoscope/horoscope.php" target="_blank"><span><strong>astrology predictions</strong></span></a>. These are readily available on a regular basis and these offer serious guidance as well as reassurance. Whether you are into Zodiac signs or not, whether you are an <strong>Aries, Tauras or Libra, </strong>Daily Horoscope is something that will keep you informed in your life.</span></p>
            <h2 className="mt-2 mb-2 text-2xl text-justify text-black font-semibold">Variety of Horoscopes</h2>
            <p><span><span><span>Daily Horoscopes are an effective means to interpret your life, especially if you are an avid horoscope reader because then you can keep a regular track of what astrology has in store for you. Meanwhile, you need to be aware of the following two basic varieties of horoscopes out there, so that you can consult one that is suitable to your purpose. So, here we go -&nbsp;</span></span></span></p>
            <p><span><span><strong>General Horoscopes – </strong><span>A general horoscope considers only your Zodiac sign while listing predictions. It is mostly a short blurb against each sign, found usually in popular magazines, daily newspapers or online. Such free horoscopes offer a broad, often vague, advice, which could be applicable to several people at the same time.</span></span></span></p>
            <p><span><span><strong>Personalized Horoscopes</strong><span> – You can catch hold of a personalized horoscope either online, through astrological websites, or after a reading with a Professional Astrologer. Often online horoscopes offer you a simple paragraph after you submit the date, location and exact time of your birth. </span></span></span><span>Often this information is synthesized in a limited manner and you will get to see the results as per your zodiac sign.&nbsp;</span><span><span><span>However, an appointment with a Professional, Certified Astrologer will get you a detailed astrological forecast, which will take in to account your life and specific queries.</span></span></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

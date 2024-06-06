
"use client"; 
import { RightArrow, Facebook,Instagram, Twitter, Linkedin, YouTube } from "../config/SvgConst";
import {MAIN_URL} from '../config/config'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'


const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/ptVinayBajrangi/', Icon: <Facebook width={15} height={15} /> },
  { name: 'Instagram', href: 'https://www.instagram.com/drvinaybajrangi/', Icon: <Instagram width={15} height={15} /> },
  { name: 'X', href: 'https://twitter.com/drvinaybajrangi', Icon: <Twitter width={15} height={15} />},
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/drvinaybajrangi', Icon: <Linkedin width={15} height={15} />},
  { name: 'YouTube', href: 'https://www.youtube.com/@drvinaybajrangiji', Icon: <YouTube width={15} height={15} />},
]

  const QuickLinks = [
    { href: `${MAIN_URL}horoscope/daily-horoscope.php`, text: "Free Daily Horoscope" },
    { href: `${MAIN_URL}kundli.php`, text: "Free Kundli" },
    { href: `${MAIN_URL}marriage-astrology/kundli-matching-horoscopes-matching-for-marriage.php`, text: "Kundli Matching" },
    { href: `${MAIN_URL}today-panchang.php`, text: "Today Panchang" },
    { href: `${MAIN_URL}calculator.php`, text: "Free Astrology Calculators" },
    { href: `${MAIN_URL}astrology-news.php`, text: "Astrology News" },
    { href: `${MAIN_URL}dr-vinay-bajrangi-will-be-in-mumbai.php`, text: "Upcoming Visits" },
    { href: `${MAIN_URL}apps/karma-astro-app.php`, text: "Karma Astro Mobile App" },
    { href: `${MAIN_URL}videos.php`, text: "Videos" },
    { href: `${MAIN_URL}author.php`, text: "Author" }
  ];
  const AstrologyServices = [
    { href: `${MAIN_URL}services/consultation.php`, text: "Consultation" },
    { href: `${MAIN_URL}services/online-reports.php`, text: "Online Report" },
    { href: `${MAIN_URL}services/voice-report.php`, text: "Voice Report" },
    { href: `${MAIN_URL}marriage-astrology.php`, text: "Marriage Astrology" },
    { href: `${MAIN_URL}business-astrology.php`, text: "Business Astrology" },
    { href: `${MAIN_URL}time-rectification.php`, text: "Birth Time Rectification" },
    { href: `${MAIN_URL}life-predictions.php`, text: "Past Life Readings" },
    { href: `${MAIN_URL}career-astrology.php`, text: "Career Astrology" }
  ];
  const contactInfo = [
    { text: "Our Office, M-22, Sector-66, Noida, Uttar Pradesh-201301" },
    { href: "tel:+91-9278665588", text: "+91-9278665588" },
    { href: "mailto:mail@vinaybajrangi.com", text: "mail@vinaybajrangi.com" },
    { href: `${MAIN_URL}contact-us.php`, text: "Contact Us" },
    { href: `${MAIN_URL}privacy-policy.php`, text: "Privacy Policy" },
    { href: `${MAIN_URL}payment-terms-and-conditions.php`, text: "Payment Terms & Conditions" }
  ];
  
export default function Example() {
  const router = useRouter();
  return (
    <>
    <div className="bg-slate-100 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2  gap-10 md:grid-cols-4">
          <div>
            <div>
              <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6 ">About Dr. Vinay Bajrangi</h3>
              <p className="text-justify text-sm font-normal text-gray-600">AnalyOne should know how to judge a good astrologer than going by the name. The best astrologer is the one who believes more in Astrology based on the Karmic theory than only following rituals and remedies <span><a href={`${MAIN_URL}about-us.php`} className="text-base leading-6 text-blue-600 hover:text-rose-600">Know More...</a></span></p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6 ">Quick Links</h3>
            <ul>
            {QuickLinks.map((link, index) => (
              <li key={index}>
                <a onClick={() => router.push(link.href)} className="text-sm font-normal flex gap-2 items-center text-gray-600 cursor-pointer">
                  <RightArrow width={15} height={15} /> {link.text}
                </a>
              </li>
            ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6 ">Astrology Services</h3>
            <ul>
              {AstrologyServices.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm font-normal flex gap-2 items-center text-gray-600"><RightArrow width={15} height={15} /> {link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6">Get In Touch</h3>
              <ul>
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-normal text-gray-600">{info.text}</a>
                    ) : (
                      <p className="text-sm font-normal text-gray-600">{info.text}</p>
                    )}
                  </li>
                ))}
              </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 rounded-lg border-[1px] p-[5px] border-orange-200 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                {item.Icon}
              </a>

            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; VinayBajrangi.com © 2024 Designed & Developed By BrandShow
          </p>
        </div>
      </div>
    </div>
    </>
  )
}





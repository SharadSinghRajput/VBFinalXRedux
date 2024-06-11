
"use client"; 
import { RightArrow, Facebook,Instagram, Twitter, Linkedin, YouTube } from "../config/SvgConst";
import {MAIN_URL_HINDI} from '../config/config'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'

import Image from 'next/image'

const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/ptVinayBajrangi/', Icon: <Facebook width={15} height={15} /> },
  { name: 'Instagram', href: 'https://www.instagram.com/drvinaybajrangi/', Icon: <Instagram width={15} height={15} /> },
  { name: 'X', href: 'https://twitter.com/drvinaybajrangi', Icon: <Twitter width={15} height={15} />},
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/drvinaybajrangi', Icon: <Linkedin width={15} height={15} />},
  { name: 'YouTube', href: 'https://www.youtube.com/@drvinaybajrangiji', Icon: <YouTube width={15} height={15} />},
]

const QuickLinks = [
  { href: `${MAIN_URL_HINDI}horoscope/daily-horoscope.php`, text: "नि: शुल्क दैनिक राशिफल" },
  { href: `${MAIN_URL_HINDI}kundli.php`, text: "नि: शुल्क कुंडली" },
  { href: `${MAIN_URL_HINDI}marriage-astrology/kundli-matching-horoscopes-matching-for-marriage.php`, text: "नि शुल्क कुंडली मिलान" },
  { href: `${MAIN_URL_HINDI}today-panchang.php`, text: "आज का पंचांग " },
  { href: `${MAIN_URL_HINDI}calculator.php`, text: "नि: शुल्क ज्योतिष कैलकुलेटर" },
  { href: `${MAIN_URL_HINDI}astrology-news.php`, text: "ज्योतिष समाचार" },
  { href: `${MAIN_URL_HINDI}dr-vinay-bajrangi-will-be-in-mumbai.php`, text: "आगामी दौरे " },
  { href: `${MAIN_URL_HINDI}apps/karma-astro-app.php`, text: "कर्मा एस्ट्रो मोबाइल ऐप " },
  { href: `${MAIN_URL_HINDI}videos.php`, text: " वीडियो" },
  // { href: `${MAIN_URL_HINDI}author.php`, text: "Author" }
];
const AstrologyServices = [
  { href: `${MAIN_URL_HINDI}services/consultation.php`, text: "परामर्श " },
  { href: `${MAIN_URL_HINDI}services/online-reports.php`, text: "ऑनलाइन रिपोर्ट" },
  { href: `${MAIN_URL_HINDI}services/voice-report.php`, text: "विवाह ज्योतिष " },
  { href: `${MAIN_URL_HINDI}marriage-astrology.php`, text: "विवाह ज्योतिष" },
  { href: `${MAIN_URL_HINDI}business-astrology.php`, text: "व्यापार/व्यवसाय ज्योतिष" },
  { href: `${MAIN_URL_HINDI}time-rectification.php`, text: "जन्म समय सुधार" },
  { href: `${MAIN_URL_HINDI}life-predictions.php`, text: "पूर्व जन्म गणना" },
  { href: `${MAIN_URL_HINDI}career-astrology.php`, text: "करियर ज्योतिष" }
];
const contactInfo = [
  { text: "हमारा कार्यालय, एम-22, सैक्टर - 66, नोएडा, उत्तर प्रदेश-201301" },
  { href: "tel:+91-9278665588", text: "+91-9278665588" },
  { href: "mailto:mail@vinaybajrangi.com", text: "mail@vinaybajrangi.com" },
  { href: `${MAIN_URL_HINDI}contact-us.php`, text: "कैसे संपर्क करें" },
  { href: `${MAIN_URL_HINDI}privacy-policy.php`, text: "गोपनीयता नीति" },
  { href: `${MAIN_URL_HINDI}payment-terms-and-conditions.php`, text: "भुगतान नियम और शर्तें" }
];
  
export default function Example() {
  const router = useRouter();
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const handleClickRouter = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(`${url}`);
  };

  return (
    <>

    <div className="bg-slate-100 py-10">

      <div className="container mx-auto">
        <div className="grid grid-cols-2  gap-10 md:grid-cols-4">
          <div>
            <div>
              <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6 "> ड़ॉ विनय बजरंगी के विषय में </h3>
              <p className="text-justify text-sm font-normal text-gray-600">किसी को भी सिर्फ नाम के आधार पर ज्योतिषी नहीं माना जा सकता। हर व्यक्ति को जानना चाहिए कि एक अच्छे ज्योतिषी का चुनाव कैसे करें। सबसे अच्छा ज्योतिषी वही होता है जो केवल कर्म सिद्धांत पर रसम रिवाज और उपायों से अधिक विश्वास करता हो। <span><a href={`${MAIN_URL_HINDI}about-us.php`} className="text-base leading-6 text-blue-600 hover:text-rose-600">अधिक पढ़ें...</a></span></p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6 ">लिंक</h3>
            <ul>
            {QuickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={`${link?.href}`}
                  onClick={(e) => handleClickRouter(e, link?.href)}
                  className="text-sm font-normal flex gap-2 items-center text-gray-600 cursor-pointer">
                  <RightArrow width={15} height={15} /> {link.text}
                </a>
              </li>
            ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6 ">ज्योतिष सेवाएँ</h3>
            <ul>
              {AstrologyServices.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`${link?.href}`}
                    onClick={(e) => handleClickRouter(e, link?.href)}
                    className="text-sm font-normal flex gap-2 items-center text-gray-600"><RightArrow width={15} height={15} /> {link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6">कैसे संपर्क करें</h3>
              <ul>
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    {info.href ? (
                      <a
                        href={`${info?.href}`}
                        onClick={(e) => handleClickRouter(e, info?.href)}
                        className="text-sm font-normal text-gray-600">{info.text}</a>
                    ) : (
                      <p className="text-sm font-normal text-gray-600">{info.text}</p>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="https://apps.apple.com/in/app/karmaastro-vinay-bajrangi/id1625624570" target="_blank" rel="noopener noreferrer">
                  <Image src="/iso-icon.png" width={130} height={40} alt="ios-icon" aria-label="Click here to download the ios app" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.vinaybajrangi.app" target="_blank" rel="noopener noreferrer">
                  <Image src="/android-icon.png" width={130} height={40} alt="android-icon" aria-label="Click here to download the android app" />
                </a>
              </div>
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
            &copy; VinayBajrangi.com {getCurrentYear()} BrandShow द्वारा डिजाइन और विकसित
          </p>
        </div>
      </div>
    </div>
    </>
  )
}





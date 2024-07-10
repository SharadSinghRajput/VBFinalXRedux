import Image from 'next/image';
import Aries from '../pages/assets/images/HoroscopeSign/Aries.png';
import Taurus from '../pages/assets/images/HoroscopeSign/Tauras.png';
import Gemini from '../pages/assets/images/HoroscopeSign/Gemini.png';
import Cancer from '../pages/assets/images/HoroscopeSign/Cancer.png';
import Leo from '../pages/assets/images/HoroscopeSign/Leo.png';
import Virgo from '../pages/assets/images/HoroscopeSign/Virgo.png';
import Libra from '../pages/assets/images/HoroscopeSign/Libra.png';
import Scorpio from '../pages/assets/images/HoroscopeSign/Scorpio.png';
import Sagittarius from '../pages/assets/images/HoroscopeSign/Sagittarius.png';
import Capricorn from '../pages/assets/images/HoroscopeSign/Capricorn.png';
import Aquarius from '../pages/assets/images/HoroscopeSign/Aquarius.png';
import Pisces from '../pages/assets/images/HoroscopeSign/Pices.png';


// config/Horoscope.js
export const HoroscopeArticle = (year = "2024") => [
  {
    name: "Aries",
    url: `horoscope/aries-horoscope-${year}.php`,
    imgSrc: Aries,
    link: `horoscope/aries-horoscope-${year}.php`,
    Hindiname: "मेष",
    hindiLink: `hindi/horoscope/mesh-varshik-rashifal-${year}.php`,
  },
  {
    name: "Taurus",
    url: `horoscope/taurus-horoscope-${year}.php`,
    imgSrc: Taurus,
    link: `horoscope/taurus-horoscope-${year}.php`,
    Hindiname: "वृषभ",
    hindiLink: `hindi/horoscope/vrushabh-rashifal-${year}.php`,
  },
  {
    name: "Gemini",
    url: `horoscope/gemini-horoscope-${year}.php`,
    imgSrc: Gemini,
    link: `horoscope/gemini-horoscope-${year}.php`,
    Hindiname: "मिथुन",
    hindiLink: `hindi/horoscope/mithun-rashifal-${year}.php`,
  },
  {
    name: "Cancer",
    url: `horoscope/cancer-horoscope-${year}.php`,
    imgSrc: Cancer,
    link: `horoscope/cancer-horoscope-${year}.php`,
    Hindiname: "कर्क",
    hindiLink: `hindi/horoscope/kark-rashifal-${year}.php`,
  },
  {
    name: "Leo",
    url: `horoscope/leo-horoscope-${year}.php`,
    imgSrc: Leo,
    link: `horoscope/leo-horoscope-${year}.php`,
    Hindiname: "सिंह",
    hindiLink: `hindi/horoscope/singh-rashifal-${year}.php`,
  },
  {
    name: "Virgo",
    url: `horoscope/virgo-horoscope-${year}.php`,
    imgSrc: Virgo,
    link: `horoscope/virgo-horoscope-${year}.php`,
    Hindiname: "कन्या",
    hindiLink: `hindi/horoscope/kanya-rashifal-${year}.php`,
  },
  {
    name: "Libra",
    url: `horoscope/libra-horoscope-${year}.php`,
    imgSrc: Libra,
    link: `horoscope/libra-horoscope-${year}.php`,
    Hindiname: "तुला",
    hindiLink: `hindi/horoscope/tula-rashifal-${year}.php`,
  },
  {
    name: "Scorpio",
    url: `horoscope/scorpio-horoscope-${year}.php`,
    imgSrc: Scorpio,
    link: `horoscope/scorpio-horoscope-${year}.php`,
    Hindiname: "वृश्चिक",
    hindiLink: `hindi/horoscope/vrshchik-rashifal-${year}.php`,
  },
  {
    name: "Sagittarius",
    url: `horoscope/sagittarius-horoscope-${year}.php`,
    imgSrc: Sagittarius,
    link: `horoscope/sagittarius-horoscope-${year}.php`,
    Hindiname: "धनु",
    hindiLink: `hindi/horoscope/dhanu-rashifal-${year}.php`,
  },
  {
    name: "Capricorn",
    url: `horoscope/capricorn-horoscope-${year}.php`,
    imgSrc: Capricorn,
    link: `horoscope/capricorn-horoscope-${year}.php`,
    Hindiname: "मकर",
    hindiLink: `hindi/horoscope/makar-rashifal-${year}.php`,
  },
  {
    name: "Aquarius",
    url: `horoscope/aquarius-horoscope-${year}.php`,
    imgSrc: Aquarius,
    link: `horoscope/aquarius-horoscope-${year}.php`,
    Hindiname: "कुम्भ",
    hindiLink: `hindi/horoscope/kumbh-rashifal-${year}.php`,
  },
  {
    name: "Pisces",
    url: `horoscope/pisces-horoscope-${year}.php`,
    imgSrc: Pisces,
    link: `horoscope/pisces-horoscope-${year}.php`,
    Hindiname: "मीन",
    hindiLink: `hindi/horoscope/meen-rashifal-${year}.php`,
  },
];

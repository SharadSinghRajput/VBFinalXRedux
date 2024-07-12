// config/Horoscope.js
// import { MAIN_URL } from '../config/config';
import AriesImg from '../public/img/horoscope/Aries.png';
import TaurusImg from '../public/img/horoscope/Tauras.png';
import GeminiImg from '../public/img/horoscope/Gemini.png';
import CancerImg from '../public/img/horoscope/Cancer.png';
import LeoImg from '../public/img/horoscope/Leo.png';
import VirgoImg from '../public/img/horoscope/Virgo.png';
import LibraImg from '../public/img/horoscope/Libra.png';
import ScorpioImg from '../public/img/horoscope/Scorpio.png';
import SagittariusImg from '../public/img/horoscope/Sagittarius.png';
import CapricornImg from '../public/img/horoscope/Capricorn.png';
import AquariusImg from '../public/img/horoscope/Aquarius.png';
import PiscesImg from '../public/img/horoscope/pices.png';

export const Horoscope = (dayType = "daily-horoscope") => {
  if (dayType === "today-horoscope") {
    dayType = "daily-horoscope";
  }

  return [
    {
      nameHindi: "मेष",
      name: "Aries",
      url: `horoscope/${dayType}/aries.php`,
      imgSrc: AriesImg,
      link: `/horoscope/${dayType}/aries.php`,
      hindiLink: `/hindi/horoscope/${dayType}/mesh.php`
    },
    {
      nameHindi: "वृषभ",
      name: "Taurus",
      url: `horoscope/${dayType}/taurus.php`,
      imgSrc: TaurusImg,
      link: `/horoscope/${dayType}/taurus.php`,
      hindiLink: `/hindi/horoscope/${dayType}/vrshabh.php`
    },
    {
      nameHindi: "मिथुन",
      name: "Gemini",
      url: `horoscope/${dayType}/gemini.php`,
      imgSrc: GeminiImg,
      link: `/horoscope/${dayType}/gemini.php`,
      hindiLink: `/hindi/horoscope/${dayType}/mithun.php`
    },
    {
      nameHindi: "कर्क",
      name: "Cancer",
      url: `horoscope/${dayType}/cancer.php`,
      imgSrc: CancerImg,
      link: `/horoscope/${dayType}/cancer.php`,
      hindiLink: `/hindi/horoscope/${dayType}/kark.php`
    },
    {
      nameHindi: "सिंह",
      name: "Leo",
      url: `horoscope/${dayType}/leo.php`,
      imgSrc: LeoImg,
      link: `/horoscope/${dayType}/leo.php`,
      hindiLink: `/hindi/horoscope/${dayType}/singh.php`
    },
    {
      nameHindi: "कन्या",
      name: "Virgo",
      url: `horoscope/${dayType}/virgo.php`,
      imgSrc: VirgoImg,
      link: `/horoscope/${dayType}/virgo.php`,
      hindiLink: `/hindi/horoscope/${dayType}/kanya.php`
    },
    {
      nameHindi: "तुला",
      name: "Libra",
      url: `horoscope/${dayType}/libra.php`,
      imgSrc: LibraImg,
      link: `/horoscope/${dayType}/libra.php`,
      hindiLink: `/hindi/horoscope/${dayType}/tula.php`
    },
    {
      nameHindi: "वृश्चिक",
      name: "Scorpio",
      url: `horoscope/${dayType}/scorpio.php`,
      imgSrc: ScorpioImg,
      link: `/horoscope/${dayType}/scorpio.php`,
      hindiLink: `/hindi/horoscope/${dayType}/vrshchik.php`
    },
    {
      nameHindi: "धनु",
      name: "Sagittarius",
      url: `horoscope/${dayType}/sagittarius.php`,
      imgSrc: SagittariusImg,
      link: `/horoscope/${dayType}/sagittarius.php`,
      hindiLink: `/hindi/horoscope/${dayType}/dhanu.php`
    },
    {
      nameHindi: "मकर",
      name: "Capricorn",
      url: `horoscope/${dayType}/capricorn.php`,
      imgSrc: CapricornImg,
      link: `/horoscope/${dayType}/capricorn.php`,
      hindiLink: `/hindi/horoscope/${dayType}/makar.php`
    },
    {
      nameHindi: "कुम्भ",
      name: "Aquarius",
      url: `horoscope/${dayType}/aquarius.php`,
      imgSrc: AquariusImg,
      link: `/horoscope/${dayType}/aquarius.php`,
      hindiLink: `/hindi/horoscope/${dayType}/kumbh.php`
    },
    {
      nameHindi: "मीन",
      name: "Pisces",
      url: `horoscope/${dayType}/pisces.php`,
      imgSrc: PiscesImg,
      link: `/horoscope/${dayType}/pisces.php`,
      hindiLink: `/hindi/horoscope/${dayType}/meen.php`
    },
  ];
};

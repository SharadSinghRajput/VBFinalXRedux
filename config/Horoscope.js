// config/Horoscope.js
// import { MAIN_URL } from '../config/config';

export const Horoscope = (dayType = "daily-horoscope",) => {
  if (dayType === "today-horoscope") {
    dayType = "daily-horoscope";
  }

  return [
    {
      nameHindi: "मेष",
      name: "Aries",
      url: `horoscope/${dayType}/aries.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aries.png",
      link: `/horoscope/${dayType}/aries.php`,
      hindiLink: `/hindi/horoscope/${dayType}/mesh.php`
    },
    {
      nameHindi: "वृषभ",
      name: "Taurus",
      url: `horoscope/${dayType}/taurus.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Tauras.png",
      link: `/horoscope/${dayType}/taurus.php`,
      hindiLink: `/hindi/horoscope/${dayType}/vrshabh.php`
      
    },
    {
      nameHindi: "मिथुन",
      name: "Gemini",
      url: `horoscope/${dayType}/gemini.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Gemini.png",
      link: `/horoscope/${dayType}/gemini.php`,
      hindiLink: `/hindi/horoscope/${dayType}/mithun.php`
    },
    {
      nameHindi: "कर्क",
      name: "Cancer",
      url: `horoscope/${dayType}/cancer.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Cancer.png",
      link: `/horoscope/${dayType}/cancer.php`,
      hindiLink: `/hindi/horoscope/${dayType}/kark.php`
    },
    {
      nameHindi: "सिंह",
      name: "Leo",
      url: `horoscope/${dayType}/leo.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Leo.png",
      link: `/horoscope/${dayType}/leo.php`,
      hindiLink: `/hindi/horoscope/${dayType}/singh.php`
    },
    {
      nameHindi: "कन्या",
      name: "Virgo",
      url: `horoscope/${dayType}/virgo.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Virgo.png",
      link: `/horoscope/${dayType}/virgo.php`,
      hindiLink: `/hindi/horoscope/${dayType}/kanya.php`
    },
    {
      nameHindi: "तुला",
      name: "Libra",
      url: `horoscope/${dayType}/libra.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Libra.png",
      link: `/horoscope/${dayType}/libra.php`,
      hindiLink: `/hindi/horoscope/${dayType}/tula.php`
    },
    {
      nameHindi: "वृश्चिक",
      name: "Scorpio",
      url: `horoscope/${dayType}/scorpio.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Scorpio.png",
      link: `/horoscope/${dayType}/scorpio.php`,
      hindiLink: `/hindi/horoscope/${dayType}/vrshchik.php`
    },
    {
      nameHindi: "धनु",
      name: "Sagittarius",
      url: `horoscope/${dayType}/sagittarius.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Sagittarius.png",
      link: `/horoscope/${dayType}/sagittarius.php`,
      hindiLink: `/hindi/horoscope/${dayType}/dhanu.php`
    },
    {
      nameHindi: "मकर",
      name: "Capricorn",
      url: `horoscope/${dayType}/capricorn.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Capricorn.png",
      link: `/horoscope/${dayType}/capricorn.php`,
      hindiLink: `/hindi/horoscope/${dayType}/makar.php`
    },
    {
      nameHindi: "कुम्भ",
      name: "Aquarius",
      url: `horoscope/${dayType}/aquarius.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aquarius.png",
      link: `/horoscope/${dayType}/aquarius.php`,
      hindiLink: `/hindi/horoscope/${dayType}/kumbh.php`
    },
    {
      nameHindi: "मीन",
      name: "Pisces",
      url: `horoscope/${dayType}/pisces.php`,
      imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/pices.png",
      link: `/horoscope/${dayType}/pisces.php`,
      hindiLink: `/hindi/horoscope/${dayType}/meen.php`
    },
  ];
};

// config/Horoscope.js
import { MAIN_URL } from '../config/config';

export const Horoscope = (dayType = "daily-horoscope") => [
  { name: "Aries", url: `${MAIN_URL}horoscope/${dayType}/aries.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aries.png", link: `horoscope/${dayType}/aries.php` },
  { name: "Taurus", url: `${MAIN_URL}horoscope/${dayType}/taurus.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Tauras.png", link: `horoscope/${dayType}/taurus.php` },
  { name: "Gemini", url: `${MAIN_URL}horoscope/${dayType}/gemini.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Gemini.png", link: `horoscope/${dayType}/gemini.php` },
  { name: "Cancer", url: `${MAIN_URL}horoscope/${dayType}/cancer.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Cancer.png", link: `horoscope/${dayType}/cancer.php` },
  { name: "Leo", url: `${MAIN_URL}horoscope/${dayType}/leo.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Leo.png", link: `horoscope/${dayType}/leo.php` },
  { name: "Virgo", url: `${MAIN_URL}horoscope/${dayType}/virgo.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Virgo.png", link: `horoscope/${dayType}/virgo.php` },
  { name: "Libra", url: `${MAIN_URL}horoscope/${dayType}/libra.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Libra.png", link: `horoscope/${dayType}/libra.php` },
  { name: "Scorpio", url: `${MAIN_URL}horoscope/${dayType}/scorpio.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Scorpio.png", link: `horoscope/${dayType}/scorpio.php` },
  { name: "Sagittarius", url: `${MAIN_URL}horoscope/${dayType}/sagittarius.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Sagittarius.png", link: `horoscope/${dayType}/sagittarius.php` },
  { name: "Capricorn", url: `${MAIN_URL}horoscope/${dayType}/capricorn.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Capricorn.png", link: `horoscope/${dayType}/capricorn.php` },
  { name: "Aquarius", url: `${MAIN_URL}horoscope/${dayType}/aquarius.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/Aquarius.png", link: `horoscope/${dayType}/aquarius.php` },
  { name: "Pisces", url: `${MAIN_URL}horoscope/${dayType}/pisces.php`, imgSrc: "https://www.vinaybajrangi.com/upload/rashi-img/pices.png", link: `horoscope/${dayType}/pisces.php` }
];

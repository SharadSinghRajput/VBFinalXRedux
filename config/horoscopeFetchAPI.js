import axios from 'axios';
import {API_KEY, API_NEW_URL} from '../config/config'


export default async function handler(HoroscopeSign, TypeToHit, HoroscopeDayWise, finalFormattedDate, language = "English") {
  
  try {
    const options = {
      method: 'POST',
      url: `${API_NEW_URL}/aapkikismat-api-horoscope.php?zodiac_sign=${HoroscopeSign}&api_key=${API_KEY}&language=${language}&type=${TypeToHit}&horoscopeperiod=${HoroscopeDayWise}&date=${finalFormattedDate}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({}),
    };

    const response = await axios.request(options);
    if (response.data.status === "success") {
      return response.data.message;
    }else{
      return "Apologies for the inconvenience, but due to high traffic volumes, we are currently unable to generate your horoscope. Please try again later when the traffic has subsided. Thank you for your patience and understanding.";
    }
  } catch (error) {
    return false;
  }
}



// https://www.aapkikismat.com//aapkikismat-api-horoscope.php?zodiac_sign=Aries&api_key=Sd_12547455dhseunhT_ksdfln&language=English&type=overall&horoscopeperiod=today&date=2024-05-27
// https://www.aapkikismat.com//aapkikismat-api-horoscope.php?zodiac_sign=Scorpio&api_key=Sd_12547455dhseunhT_ksdfln&language=English&type=overall&horoscopeperiod=today&date=05-27-2024
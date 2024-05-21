import axios from 'axios';
import {API_KEY, API_NEW_URL, Domain_Secrete_Code} from '../config/config'


export default async function handler(slug, currency = "INR", language, type) {

  const datas = {
    "apiKey": API_KEY,
    "slug": slug,
    "domainSecreteCode": Domain_Secrete_Code,
    currency,
    "language": language,
    "type": type
  };
  
  const apiUrl = `${API_NEW_URL}report-detail-tppm-api-test.php`
  try { 
    const response = await fetch(apiUrl, {
      method: "POST",
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(datas)
    });

    const data = await response.json();

    // console.log(data);

    if(data.success === true){
      return data;
    }else{
      return data;
    }
  }catch (error) {
    //console.log(error);
  }

  /*
  try {

    
    const options = {
      method: 'POST',
      url: `${API_NEW_URL}report-detail-tppm-api-test.php`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    };

    
    console.log(JSON.stringify(data));
    const response = await axios.request(options);
    if (response.data.success) {
      return response.data;
    }else{
      // return "Apologies for the inconvenience, but due to high traffic volumes, we are currently unable to generate your horoscope. Please try again later when the traffic has subsided. Thank you for your patience and understanding.";
      return response.data;
    }
  } catch (error) {
    return false;
  }
  */
}

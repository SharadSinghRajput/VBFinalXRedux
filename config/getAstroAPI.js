import axios from 'axios';

export default async function handler(data, url) {
  try {
    console.log(data);
    console.log(url);
    const userId = 612511;
    const apiKey = "a3a014ee35f19c7c8ddf42bd1b7972bb";
    const options = {
      method: 'POST',
      url: `https://json.astrologyapi.com/v1/${url}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(userId + ':' + apiKey).toString('base64')}`
      },
      data: data
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
}

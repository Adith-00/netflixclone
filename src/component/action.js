const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://netflix-unofficial.p.rapidapi.com/api/genres',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'netflix-unofficial.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
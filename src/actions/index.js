import axios from 'axios';

const API_KEY = '356d5e26e7971ce590e598357554d07c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//USED TO MIMIFY BUGS, VARIABLE WILL BE USED TO MITIGATE TYPING ERRORS
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request:', request);
  // if the payload is a promise, redux-promise middleware kicks in and unwraps the promise for you
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
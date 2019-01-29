import apiKey from '../utilities/apiKey.js'

export const getWeather = async() => {
  const response = await fetch(`https://api.darksky.net/forecast/${apiKey}`);
  const weather = response.json();
  return weather
}
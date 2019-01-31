import apiKey from '../../src/apiKey'

export const getWeather = async() => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=80487,us&units=imperial&APPID=${apiKey}`);
  const weather = response.json();
  return weather
}
 
// winter park id = 4178560  39.8917° N  105.7631° W  zip 80482
 
// Frisco id = 4063475  39.5744° N  106.0975° W    zip 80443

// Steamboat Springs = 5582371  zip zip 80482


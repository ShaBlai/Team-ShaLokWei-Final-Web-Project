//Weather Related Stuff
import { WEATHER_API_KEY } from "./secrets";
import { getData } from "./api_handler";

export function getWeatherByLocation({
  coords: { latitude: lat, longitude: lon },
}) {
  //figure out a way to find user's lat & lon
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`;

  fetch(apiWeatherUrl).then((res) =>
    res.json().then((json) => {
      showWeather(json);
    })
  );
}

export function showWeather({ main: { temp }, weather: [weatherInfo] }) {
  //use main temp, weather description and icon

  const weatherInfoContainer = document.createElement("div");
  weatherInfoContainer.innerHTML = `<p> ${temp}&#8457; </p> 
      <p>${weatherInfo.description}
      <img src="https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png"/>`;

  //TODO Change to append our nav or heading with the local weather
  document.body.prepend(weatherInfoContainer);
}
//**********/

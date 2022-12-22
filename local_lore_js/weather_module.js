//Weather Related Stuff
import { WEATHER_API_KEY } from "./secrets.js";
import { getData } from "./api_handler.js";
import { handleCustomError } from "./error_handling_module.js";

export const load_weather_module = (coords) => {
  if (coords !== {} && coords !== undefined) {
    getWeatherByLocation(coords);
  } else if (navigator.geolocation) {
    // Ask the user for permission to use their location
    navigator.geolocation.getCurrentPosition(
      getWeatherByLocation,
      handleCustomError
    );
  }

  function showWeather({ main: { temp }, weather: [weatherInfo] }) {
    //use main temp, weather description and icon

    const weatherInfoContainer = document.createElement("div");
    weatherInfoContainer.innerHTML = `<p> ${temp}&#8457; </p> 
          <p>${weatherInfo.description}
          <img src="https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png"/>`;

    //TODO Change to append our nav or heading with the local weather
    document.body.prepend(weatherInfoContainer);
  }

  function getWeatherByLocation({ coords: { latitude: lat, longitude: lon } }) {
    console.log({ coords: { latitude: lat, longitude: lon } });
    //figure out a way to find user's lat & lon
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`;

    getData(apiWeatherUrl).then((json) => {
      showWeather(json);
    });
    //.catch((err) => handleCustomError(err));
  }
};

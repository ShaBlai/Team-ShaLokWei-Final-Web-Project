//Weather Related Stuff
export function getWeatherByLocation({
  coords: { latitude: lat, longitude: lon },
}) {
  //figure out a way to find user's lat & lon
  //got the api url

  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2197ac5d11462f1f2832626a64b2bfef&units=imperial`;

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

  document.body.prepend(weatherInfoContainer);
}
//**********/

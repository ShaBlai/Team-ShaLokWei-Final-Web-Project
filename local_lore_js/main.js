// //import { getWeatherByLocation } from "../weather/weather.js";
// import { handleCustomError } from "../errors/error.js";
import { getNewsEvents } from "./news.js";

//Search form submit handler
user_form.addEventListener("submit", (event) => {
  event.preventDefault();
  getNewsEvents(location.value);
  //TODO Commented out for troubleshooting of News Results
  //user_form.reset();
});

// /* Get user's location and weather data if we can */
// if (navigator.geolocation) {
//   // Ask the user for permission to use their location
//   navigator.geolocation.getCurrentPosition(
//     getWeatherByLocation,
//     handleCustomError
//   );
// }

// function handleLocationSuccess(loc) {
//   alert("User accepted");
// }

// function handleLocationError(err) {
//   alert(err.message);
// }

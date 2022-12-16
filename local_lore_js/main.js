import { getWeatherByLocation } from "../weather/weather.js";
import { handleCustomError } from "../errors/error.js";

handleCustomError("js");

/* Get user's location and weather data if we can */
// if (navigator.geolocation) {
//   // Ask the user for permission to use their location
//   navigator.geolocation.getCurrentPosition(
//     getWeatherByLocation,
//     handleCustomError
//   );
// }

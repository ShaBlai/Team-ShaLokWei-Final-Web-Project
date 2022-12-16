
import { handleCustomError } from "../errors/error.js";
import { getNewsEvents } from "./news.js";

//import { getWeatherByLocation } from "../weather/weather.js";
//import { handleCustomError } from "./error_handling_module.js";
//import { loadWeatherModule } from "./weather_module.js";

//handleCustomError("test");

//loadWeatherModule();

/* Get user's location and weather data if we can */

// import { handleCustomError } from "../errors/error.js";


//Search form submit handler
user_form.addEventListener("submit", (event) => {
  event.preventDefault();
  getNewsEvents(location.value);
  //TODO Commented out for troubleshooting of News Results
  //user_form.reset();
});


// function handleLocationSuccess(loc) {
//   alert("User accepted");
// }

// function handleLocationError(err) {
//   alert(err.message);
// }

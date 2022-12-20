//import { handleCustomError } from "../errors/error.js";
import { getNewsEvents } from "./news.js";
// import { getData } from "./api_handler";

//import { getWeatherByLocation } from "../weather/weather.js";
//import { handleCustomError } from "./error_handling_module.js";
//import { loadWeatherModule } from "./weather_module.js";

//handleCustomError("test");

//loadWeatherModule();

/* Get user's location and weather data if we can */

// import { handleCustomError } from "../errors/error.js";

//Search form submit handler
user_input_form.addEventListener("submit", (event) => {
  event.preventDefault();
  let loc = document.getElementById("location").value;
  alert(loc);
  getNewsEvents(loc);
  user_input_form.reset();
});

// function handleLocationSuccess(loc) {
//    alert("User accepted");
//  }

//  function handleLocationError(err) {
//   alert(err.message);
//  }

//import { getNewsEvents } from "./news.js";
import { getGoogleEvents } from "./current_events.js";

let header_search = document.getElementById("header_search");

header_search.addEventListener("submit", (e) => {
  e.preventDefault();

  getGoogleEvents("12345");

  alert("clicked");
});

//import { loadWeatherModule } from "./weather_module.js";
//loadWeatherModule();

/* Get user's location and weather data if we can */

// import { handleCustomError } from "../errors/error.js";

// //Search form submit handler
// user_form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   getNewsEvents(location.value);
//   //TODO Commented out for troubleshooting of News Results
//   //user_form.reset();
// });

// function handleLocationSuccess(loc) {
//   alert("User accepted");
// }

// function handleLocationError(err) {
//   alert(err.message);
// }

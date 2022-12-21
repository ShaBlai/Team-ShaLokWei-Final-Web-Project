import { getNewsEvents } from "./news.js";
import { getRestaurants } from "./restaurants.js";
let header_search = document.getElementById("header_search");

// header_search.addEventListener("submit", (e) => {
//   e.preventDefault();

//   getGoogleEvents("12345");

//   alert("clicked");
// });

// import { loadWeatherModule } from "./weather_module.js";
// loadWeatherModule();

/* Get user's location and weather data if we can */

//Search form submit handler
header_search.addEventListener("submit", (event) => {
  event.preventDefault();
  let loc = document.getElementById("city_search").value;
  alert(loc);
  getNewsEvents(loc);
  getRestaurants(loc);
  header_search.reset();
});

// function handleLocationSuccess(loc) {
//    alert("User accepted");
//  }

//  function handleLocationError(err) {
//   alert(err.message);
//  }

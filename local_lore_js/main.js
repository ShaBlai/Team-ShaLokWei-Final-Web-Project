import { load_auto_fill_module } from "./auto_fill_module.js";

load_auto_fill_module();

//import { load_fetch_content_module } from "./fetch_content_module.js";

//import { getRestaurants } from "./restaurants.js";

// import { loadWeatherModule } from "./weather_module.js";
// loadWeatherModule();

/* Get user's location and weather data if we can */

//Search form submit handler

import { getNewsEvents } from "./news.js";

header_search.addEventListener("submit", (event) => {
  event.preventDefault();
  let loc = document.getElementById("city_search").value;
  alert(loc);
  getNewsEvents(loc);
  getRestaurants(loc);
  header_search.reset();
});



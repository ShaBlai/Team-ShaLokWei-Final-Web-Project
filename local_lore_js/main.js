import { load_auto_fill_module } from "./auto_fill_module.js";
import { load_fetch_content_module } from "./fetch_content_module.js";

import { getNewsEvents } from "./news.js";
import { getRestaurants } from "./restaurants.js";

load_auto_fill_module();

// import { loadWeatherModule } from "./weather_module.js";
// loadWeatherModule();

/* Get user's location and weather data if we can */

//Search form submit handler
header_search.addEventListener("submit", (event) => {
  event.preventDefault();
  let loc = document.getElementById("city_search").value;
  alert(loc);
  getNewsEvents(loc);
  //getRestaurants(loc);
  header_search.reset();
});

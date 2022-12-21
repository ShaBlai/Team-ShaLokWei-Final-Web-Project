import { getGoogleEvents } from "./current_events.js";

let header_search = document.getElementById("header_search");

import { getNewsEvents } from "./news.js";

header_search.addEventListener("submit", (e) => {
  e.preventDefault();

  getGoogleEvents("12345");

  alert("clicked");
});

//import { loadWeatherModule } from "./weather_module.js";
//loadWeatherModule();

/* Get user's location and weather data if we can */

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

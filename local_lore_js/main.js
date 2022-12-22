import { load_auto_fill_module } from "./auto_fill_module.js";
load_auto_fill_module();

//import { load_fetch_content_module } from "./fetch_content_module.js";
//load_fetch_content_module();

//src="https://i.ibb.co/vX45rfp/Local-Lore-Banner.jpg"

import { getNewsEvents } from "./news.js";

//import { getRestaurants } from "./restaurants.js";

//Search form submit handler

header_search.addEventListener("submit", (event) => {
  event.preventDefault();
  let loc = document.getElementById("city_search").value;
  // alert(loc);
  getNewsEvents(loc);
  //getRestaurants(loc);
  header_search.reset();
});


//import { getData } from "./api_handler.js";
//import { load_coordinates_URL } from "./geographical_coordinates_module.js";
//import { load_weather_module } from "./weather_module.js";
//import { handleCustomError } from "./error_handling_module.js";

import { getNewsEvents, showNewsEvents } from "./news_module.js";
import { news_json } from "./news_json.js";

showNewsEvents(news_json);

export const load_fetch_content_module = () => {
  let header_search = document.getElementById("header_search");

  header_search.addEventListener("submit", (e) => {
    e.preventDefault();

    //load user input data
    let input_value = document.getElementById("city_search").value;

    //load weather component (not applying in the program, not 100% related) and get News
    if (input_value !== "") {
      //const coorinatesURL = load_coordinates_URL(input_value);

      getNewsEvents(input_value);

      // getData(coorinatesURL)
      //   .then((json) => {
      //     const { lat, lon } = json[0];
      //     const coords = { lat, lon };

      //     Promise.resolve(coords);
      //   })
      //   .then((coords) => {
      //     load_weather_module(coords);
      //   })
      //   .catch((err) => {
      //     handleCustomError(err);
      //   });
    } else {
      showNewsEvents(news_json);
    }

    header_search.reset();
  });
};

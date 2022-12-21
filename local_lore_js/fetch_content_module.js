import { getData } from "./api_handler.js";
import { load_coordinates_URL } from "./geographical_coordinates_module.js";
import { load_weather_module } from "./weather_module.js";

import { getNewsEvents } from "./news.js";

export const load_fetch_content_module = () => {
  let header_search = document.getElementById("header_search");

  header_search.addEventListener("submit", (e) => {
    e.preventDefault();

    //load user input data
    let input_value = document.getElementById("city_search").value;

    //load news from local
    getNewsEvents(input_value);

    //load weather component
    // if (input_value !== "") {
    //   const coorinatesURL = load_coordinates_URL(input_value);

    //   getData(coorinatesURL)
    //     .then((json) => {
    //       const { lat, lon } = json[0];
    //       const coords = { lat, lon };

    //       Promise.resolve(coords);
    //     })
    //     .then((coords) => {
    //       load_weather_module(coords);
    //     });
    // }

    // header_search.reset();
  });
};

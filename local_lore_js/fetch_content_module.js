import { getData } from "./api_handler.js";
import { load_coordinates_URL } from "./geographical_coordinates_module.js";
import { loadWeatherModule } from "./weather_module.js";

export const load_fetch_content_module = () => {
  let header_search = document.getElementById("header_search");

  header_search.addEventListener("submit", (e) => {
    e.preventDefault();

    let input_value = document.getElementById("search_box").value;

    if (input_value !== "") {
      const coorinatesURL = load_coordinates_URL(input_value);

      //loadWeatherModule();
      getData(coorinatesURL)
        .then((json) => {
          const { lat, lon } = json[0];
          const coords = { lat, lon };

          return coords;
        })
        .then((coords) => {
          console.log(coords);

          loadWeatherModule({ latitude: coords.lat, lontitude: coords.lon });
        });
    }
  });
};

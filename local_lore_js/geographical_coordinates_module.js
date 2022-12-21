import { WEATHER_API_KEY } from "./secrets.js";
import { getData } from "./api_handler.js";

export const load_coordinates_URL = (input_value) => {
  const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${input_value},US&limit=5&appid=${WEATHER_API_KEY}`;

  return apiURL;

  getData(apiURL).then((json) => {
    console.log(json);
  });
};

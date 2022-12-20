// Using node-fetch module to call trip advisor api
import fetch from "node-fetch";

header_search.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Click to search");

  const url =
    "https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=%2242.3455%2C-71.10767%22&key=9F9F554A478041B385DD1E40BD477F49&key=9F9F554A478041B385DD1E40BD477F49 &category=%22restaurants%22&language=en";
  // const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
});

const request = require("request");

const options = {
  method: "GET",
  url: "https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=%2242.3455%2C-71.10767%22&key=9F9F554A478041B385DD1E40BD477F49 &category=%22restaurants%22&language=en",
  headers: { accept: "application/json" },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
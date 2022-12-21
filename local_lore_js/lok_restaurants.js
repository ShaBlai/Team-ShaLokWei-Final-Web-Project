// export function getRestaurantsInfo(searchTerm) {
//   const apiUrl = `"https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=%2242.3455%2C-71.10767%22&key=9F9F554A478041B385DD1E40BD477F49&category=%22restaurants%22&language=en";`;
// }

// // Using node-fetch module to call trip advisor api
// // import fetch from "node-fetch";

// header_search.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("Click to search");

//   const url =
    
//   // const options = { method: "GET", headers: { accept: "application/json" } };

//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error("error:" + err));
// });

// const request = require("request");

// const options = {
//   method: "GET",
//   url: "https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=%2242.3455%2C-71.10767%22&key=9F9F554A478041B385DD1E40BD477F49 &category=%22restaurants%22&language=en",
//   headers: { accept: "application/json" },
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

header_search.addEventListener("click", (e) => {
  e.preventDefault();

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "sha512-aqPYrZi3jkNSF7nFDeA0dgd2BISIcN69xgMhhzD5YDSwLQOtUA124z/1SH72sdBeG73DQj6gYSMQPHlgFA2PXg==?3Yx",
  },
};

  fetch(
    "http://crossorigin.me/https://api.yelp.com/v3/businesses/search?location=%2522Austin%2522&term=%2522pizza%2522&sort_by=best_match&limit=20",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

})
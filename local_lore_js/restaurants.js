import { getData } from "./api_handler.js";
export function getRestaurants(searchTerm) {
  //Doesn't work due to CORS issues
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer xBl3qnlVIm1NOW8zTcx_1N4CmiC845QENjR3jcPpeoVTfReuUjP28wllBGyKmPapvJRdvyKfffrGIVAOX8NSj0G9dRWPM_v2GFvmq2tqHlO45UWPMDfnYy3IrDiiY3Yx",
  //     },
  //   };
  //   fetch(
  //     `https://api.yelp.com/v3/businesses/search?location=${searchTerm}&term=Restaurants&sort_by=best_match&limit=20`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
}

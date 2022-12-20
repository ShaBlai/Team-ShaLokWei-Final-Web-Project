// Replace YOUR_API_KEY with your actual API key
//const MAPS_RESTAURANT_API_KEY = "AIzaSyArAuL31UStcfB1UXRiRn1B2_j__K3dP3U;
import { MAPS_RESTAURANT_API_KEY } from "./secrets.js";

// Replace SEARCH_STRING with the location you want to search for
const SEARCH_STRING = "Seattle";

// Set the radius of the search to 500 meters
const RADIUS = 500;

// Set the type of place we're looking for to 'restaurant'
const TYPE = "restaurant";

// Set the fields we want returned in the response
const FIELDS = ["name", "formatted_address", "place_id"];

// Construct the URL for the Places API request
const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Seattle&radius=500&type=restaurant&key=AIzaSyArAuL31UStcfB1UXRiRn1B2_j__K3dP3U&rankby=prominence&maxprice=4&minprice=0&page=1`;

// Make the request to the Places API
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Do something with the response data
    console.log(data);
  });

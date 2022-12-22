import { GOOGLE_EVENTS_API_KEY } from "./secrets.js";
import { getData } from "./api_handler.js";

export function getGoogleEvents(searchTerm) {
  let apiUrl = `https://serpapi.com/search.json?engine=google_events&q=events+in+${searchTerm}&location=+United+States&api_key=${GOOGLE_EVENTS_API_KEY}`;

  console.log(apiUrl);

  // getData(apiUrl).then((json) => {
  //   console.log(json);
  // });
}

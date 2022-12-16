import { GOOGLE_EVENTS_API_KEY } from "./secrets";
import { getData } from "./api_handler";

export function getGoogleEvents(searchTerm) {
  const apiUrl = `https://serpapi.com/search.json?engine=google_events&q=Events+in+${searchTerm}&hl=en&gl=us`;

  getData(apiUrl).then((json) => {});
}

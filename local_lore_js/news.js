import { NEWS_EVENTS_API_KEY } from "./secrets.js";
import { getData } from "./api_handler.js";

export function getNewsEvents(searchTerm) {
  const apiUrl = `https://newsapi.org/v2/everything?q="${searchTerm}"&apiKey=${NEWS_EVENTS_API_KEY}`;

  getData(apiUrl).then((json) => {
    console.log(json);
  });
}

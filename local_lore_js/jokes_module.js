import { getData } from "./api_handler.js";

const jokeURL =
  "https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=20";

export const load_jokes = () => {
  getData(jokeURL).then((json) => console.log(json));
};

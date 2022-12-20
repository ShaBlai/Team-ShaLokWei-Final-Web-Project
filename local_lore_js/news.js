import { NEWS_EVENTS_API_KEY } from "./secrets.js";
import { getData } from "./api_handler.js";

export function getNewsEvents(searchTerm) {
  const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_EVENTS_API_KEY}`;

  getData(apiUrl).then((json) => {
    showNewsEvents(json);
    console.log(json);
  });
}

//
//
export function showNewsEvents({ articles }) {
  let newsStory1 = articles[0].title;
  let dateStory1 = articles[0].publishedAt;
  let urlStory1 = articles[0].url;

  const newsContainer = document.createElement("div");
  newsContainer.className = "container";

  newsContainer.innerHTML = `    
  <div class="container-fluid">
  <!--Section: News of the day-->
  <section class="border-bottom pb-4 mb-5 container-fluid">
    <div class="row gx-5">
      

      <div class="col-md-6 mb-4">
        <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3 contaier-fluid">News:${newsStory1}</span>
        <h4><strong>Date: ${dateStory1}</strong></h4>
        <button type="button" class="btn btn-primary">Read more here: ${urlStory1}</button>
      </div>
    </div>
  </section>
  `;

  local_news.appendChild(newsContainer);
}

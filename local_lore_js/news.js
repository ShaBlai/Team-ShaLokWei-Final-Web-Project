import { NEWS_EVENTS_API_KEY } from "./secrets.js";
import { getData } from "./api_handler.js";
import { getAPIDataWithoutCors } from "./api_helper_function.js";

//let searchedNews = document.getElementById("city_search").value;

export function getNewsEvents(searchTerm) {
  const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_EVENTS_API_KEY}`;

  getAPIDataWithoutCors({ apiUrl, methodToApi: "Get" })
    .then((json) => {
      showNewsEvents(json);
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
}

//
export function showNewsEvents({ articles }) {
  let titleStory1 = articles[0].title;
  let imageStory1 = articles[0].urlToImage;
  let urlStory1 = articles[0].url;
  let contentStory1 = articles[0].description;

  let titleStory2 = articles[1].title;
  let imageStory2 = articles[1].urlToImage;
  let urlStory2 = articles[1].url;
  let contentStory2 = articles[1].description;

  let titleStory3 = articles[2].title;
  let imageStory3 = articles[2].urlToImage;
  let urlStory3 = articles[2].url;
  let contentStory3 = articles[2].description;

  const newsContainer = document.createElement("div");
  newsContainer.className = "container-fluid col-4";
  newsContainer.setAttribute("style", "width: 13rem");

  const newsContainer1 = document.createElement("div");
  newsContainer1.className = "container-fluid col-4";
  newsContainer1.setAttribute("style", "width: 13rem");

  const newsContainer2 = document.createElement("div");
  newsContainer2.className = "container-fluid col-4";
  newsContainer2.setAttribute("style", "width: 13rem");

  newsContainer.innerHTML = `   <!--Section: News of the day-->
  <div class="row-md-12 gx-5 animate__animated animate__fadeInUp animate__delay-1s">
    <div class="row-md-6 mb-4">
      <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
        <img src="${imageStory1}" class="img-fluid" />
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
    </div>
  
    <div class="row-md-8 mb-4">
      <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News Story </span>
      <h4><strong>${titleStory1}</strong></h4>
      <p class="text-muted">
        ${contentStory1}
      </p>
       <a href="${urlStory1}" target="_parent"><button class="btn btn-outline-info">Story Details</button></a>
      </div>
  </div>
    
  <!--Section: News of the day-->

  
`;

  newsContainer1.innerHTML = `   <!--Section: News of the day-->
<div class="row-md-12 gx-5 animate__animated animate__fadeInUp animate__delay-1s">
  <div class="row-md-6 mb-4">
    <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
      <img src="${imageStory2}" class="img-fluid" />
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
      </a>
    </div>
  </div>

  <div class="row-md-8 mb-4">
    <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News Story</span>
    <h4><strong>${titleStory2}</strong></h4>
    <p class="text-muted">
      ${contentStory2}
    </p>
     <a href="${urlStory2}" target="_parent"><button class="btn btn-outline-info">Story Details</button></a>
    </div>
</div>
  
<!--Section: News of the day-->


`;

  newsContainer2.innerHTML = `   <!--Section: News of the day-->
<div class="row-md-12 gx-5 animate__animated animate__fadeInUp animate__delay-1s">
  <div class="row-md-6 mb-4">
    <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
      <img src="${imageStory3}" class="img-fluid" />
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
      </a>
    </div>
  </div>

  <div class="row-md-8 mb-4">
    <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News Story</span>
    <h4><strong>${titleStory3}</strong></h4>
    <p class="text-muted">
      ${contentStory3}
    </p>
     <a href="${urlStory3}" target="_parent"><button class="btn btn-outline-info">Story Details</button></a>
    </div>
</div>
  
<!--Section: News of the day-->


`;

  news_story_container1.append(newsContainer);
  news_story_container2.append(newsContainer1);
  news_story_container3.append(newsContainer2);
}
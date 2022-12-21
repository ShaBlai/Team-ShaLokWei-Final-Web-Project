import { NEWS_EVENTS_API_KEY } from "./secrets.js";
import { getData } from "./api_handler.js";

export function getNewsEvents(searchTerm) {
  const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_EVENTS_API_KEY}`;

  getData(apiUrl).then((json) => {
    showNewsEvents(json);
    console.log(json);
  });
}

export function showNewsEvents({ articles }) {
  let titleStory1 = articles[0].title;
  let imageStory1 = articles[0].urlToImage;
  let urlStory1 = articles[0].url;
  let contentStory1 = articles[0].description;

  let newsStory2 = articles[1].title;
  let dateStory2 = articles[1].urlToImage;
  let urlStory2 = articles[1].url;
  let contentStory2 = articles[0].description;

  let newsStory3 = articles[2].title;
  let dateStory3 = articles[2].urlToImage;
  let urlStory3 = articles[2].url;
  let contentStory3 = articles[2].description;

  let htmlNewsContainer = document.getElementById("local_news");

  const newsContainer = document.createElement("div");
  newsContainer.className = "container-fluid col-4";
  //newsContainer.setAttribute("style", "width: 30rem");

  //orig:
  //   newsContainer.innerHTML = `   <!--Section: News of the day-->
  //   <div class="row-lg-12 gx-5">
  //     <div class="row-md-6 mb-4">
  //       <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
  //         <img src="${imageStory1}" class="img-fluid" />
  //         <a href="#!">
  //           <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
  //         </a>
  //       </div>
  //     </div>

  //     <div class="row-lg-8 mb-4">
  //       <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day</span>
  //       <h4><strong>${titleStory1}</strong></h4>
  //       <p class="text-muted">
  //         ${contentStory1}
  //       </p>
  //        <a href="${urlStory1}" target="_parent"><button>Story Details</button></a>
  //       </div>
  //   </div>

  //   <!--Section: News of the day-->

  // `;

  newsContainer.innerHTML = `
    <div class="row-lg-12 gx-5">
      <div class="row-md-6 mb-4">
        <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
          <img src="${imageStory1}" class="img-fluid" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
      </div>

      <div class="row-lg-8 mb-4">
        <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day</span>
        <h4><strong>${titleStory1}</strong></h4>
        <p class="text-muted">
          ${contentStory1}
        </p>
         <a href="${urlStory1}" target="_parent"><button>Story Details</button></a>
        </div>
    </div>

  `;

  htmlNewsContainer.appendChild(newsContainer);
}

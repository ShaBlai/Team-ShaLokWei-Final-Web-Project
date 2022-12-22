import { NEWS_EVENTS_API_KEY } from "./secrets.js";
import { getAPIDataWithoutCors } from "./api_helper_function.js";
import { handleCustomError } from "./error_handling_module.js";

export function getNewsEvents(searchTerm) {
  const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_EVENTS_API_KEY}`;

  getAPIDataWithoutCors({ apiUrl, methodToApi: "Get" })
    .then((json) => {
      showNewsEvents(json);
      console.log(json);
    })
    .catch((err) => {
      handleCustomError(err);
    });
}

export function showNewsEvents({ articles }) {
  let story_1 = {
    titleStory: articles[0].title,
    imageStory: articles[0].urlToImage,
    urlStory: articles[0].url,
    contentStory: articles[0].description,
  };

  let story_2 = {
    titleStory: articles[1].title,
    imageStory: articles[1].urlToImage,
    urlStory: articles[1].url,
    contentStory: articles[1].description,
  };

  let story_3 = {
    titleStory: articles[2].title,
    imageStory: articles[2].urlToImage,
    urlStory: articles[2].url,
    contentStory: articles[2].description,
  };

  const newsContainer1 = document.createElement("div");
  newsContainer1.className = "container-fluid";
  newsContainer1.setAttribute("style", "min-width: 13rem");

  const newsContainer2 = document.createElement("div");
  newsContainer1.className = "container-fluid";
  newsContainer1.setAttribute("style", "min-width: 13rem");

  const newsContainer3 = document.createElement("div");
  newsContainer3.className = "container-fluid";
  newsContainer3.setAttribute("style", "min-width: 13rem");

  newsContainer1.innerHTML = `
  <div class="row-md-12 gx-5 animate__animated animate__fadeInUp animate__delay-1s">
    <div class="row-md-6 mb-4">
      <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
        <img src="${story_1.imageStory}" class="img-fluid" style="margin-top:5px" />      
      </div>
    </div>
  
    <div class="row-md-8 mb-4">
      <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News Story </span>
      <h4 id="title_id1" ><strong>${story_1.titleStory}</strong></h4>
      <p class="text-muted">
        ${story_1.contentStory}
      </p>

       <a href="${story_1.urlStory}" target="_parent"><button class="btn btn-outline-info" style="width:100%">Story Details</button></a>
       <button id="play_btn1" class="play_btn_cls btn btn-outline-info"style="width:100%">Play title</button>
       
       </div>
  </div>`;

  newsContainer2.innerHTML = `
    <div class="row-md-12 gx-5 animate__animated animate__fadeInUp animate__delay-1s">
      <div "row-md-6 mb-4">
        <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
          <img src="${story_2.imageStory}" class="img-fluid" style="margin-top:5px"/>
      </div>
    </div>

    <div class="row-md-8 mb-4">
      <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News Story</span>
      <h4 id="title_id2"><strong>${story_2.titleStory}</strong></h4>
      <p class="text-muted">
        ${story_2.contentStory}
      </p>
       <a href="${story_2.urlStory}" target="_parent" ><button class="btn btn-outline-info" style="width:100%">Story Details</button></a>
       <button id="play_btn2" class="play_btn_cls btn btn-outline-info" style="width:100%">Play title</button>     
    </div>
  </div>`;

  newsContainer3.innerHTML = `
  <div class="row-md-12 gx-5 animate__animated animate__fadeInUp animate__delay-1s">
    <div class="row-md-6 mb-4">
      <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
        <img src="${story_3.imageStory}" class="img-fluid" style="margin-top:5px"/>
      </div>
    </div>

    <div class="row-md-8 mb-4">
      <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News Story</span>
      <h4 id="title_id3"><strong>${story_3.titleStory}</strong></h4>
      <p class="text-muted">
        ${story_3.contentStory}
      </p>
       <a href="${story_3.urlStory}" target="_parent" ><button class="btn btn-outline-info" style="width:100%">Story Details</button></a>
        <button id="play_btn3" class="play_btn_cls btn btn-outline-info" style="width:100%">Play title</button>
      </div>
  </div>`;

  if (news_story_container1.firstChild) {
    news_story_container1.removeChild(news_story_container1.firstChild);
  }
  if (news_story_container2.firstChild) {
    news_story_container2.removeChild(news_story_container2.firstChild);
  }
  if (news_story_container3.firstChild) {
    news_story_container3.removeChild(news_story_container3.firstChild);
  }

  news_story_container1.append(newsContainer1);
  news_story_container2.append(newsContainer2);
  news_story_container3.append(newsContainer3);

  let synth = window.speechSynthesis;

  news_container.addEventListener("click", (e) => {
    if (e.target.classList.contains("play_btn_cls")) {
      let readContent;

      if (e.target.id === "play_btn1") {
        readContent = title_id1.innerText;
      } else if (e.target.id === "play_btn2") {
        readContent = title_id2.innerText;
      } else if (e.target.id === "play_btn3") {
        readContent = title_id3.innerText;
      }

      let toRead = new SpeechSynthesisUtterance(readContent);
      synth.speak(toRead);
    }
  });
}

import { cityList } from "./city_list_data.js";

export const load_auto_fill_module = () => {
  const THRESHOLD = 7;
  const searchBox = document.getElementById("search_box");

  searchBox.addEventListener("input", (e) => {
    e.preventDefault();

    let div_container,
      div_options,
      i,
      value = e.target.value;

    closeAllLists();

    if (!value) {
      return false;
    }

    div_container = document.createElement("div");
    div_container.setAttribute("id", e.target.id + ".auto_fill_list");
    div_container.setAttribute("class", "auto_fill_items");
    e.target.parentNode.appendChild(div_container);

    let count = 0;

    for (i = 0; i < cityList.length; i++) {
      if (
        cityList[i].substring(0, value.length).toUpperCase() ===
        value.trim().toUpperCase()
      ) {
        div_options = document.createElement("div");
        div_options.setAttribute("class", "options");
        div_options.innerHTML = `<strong>${cityList[i].substring(
          0,
          value.length
        )}</strong>`;
        div_options.innerHTML += cityList[i].substring(value.length);
        div_options.innerHTML += `<input type='hidden' value='"${cityList[i]}"'>`;

        div_container.appendChild(div_options);

        count++;
      }
      if (count > THRESHOLD) break;
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.className === "options") {
      searchBox.value = e.target.getElementsByTagName("input")[0].value;
    }
    closeAllLists();
  });

  function closeAllLists(elmnt) {
    let city = document.getElementsByClassName("auto_fill_items");
    for (let i = 0; i < city.length; i++) {
      if (elmnt != city[i] && elmnt != searchBox) {
        city[i].parentNode.removeChild(city[i]);
      }
    }
  }
};

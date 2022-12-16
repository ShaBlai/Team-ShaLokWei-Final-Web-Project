//Error Handling for any issues that occur

let DEFAULT_ERROR_MESSAGE = `I have no idea too`;

export function handleCustomError(msg = DEFAULT_ERROR_MESSAGE) {
  const alertContainer = document.createElement("div");
  alertContainer.className = "alert alert-warning alert-dismissible fade show";
  alertContainer.setAttribute("role", "alert");
  alertContainer.style.backgroundColor = "#ffff33";

  alertContainer.innerHTML = `
        <strong>${msg}</strong> Please double check your URL
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"
        style="float: right">
          x</button>    
        `;

  alertContainer.addEventListener("click", (e) => {
    if (e.target.className === "close") {
      e.target.parentNode.remove();
    }
  });

  document.body.prepend(alertContainer);
}

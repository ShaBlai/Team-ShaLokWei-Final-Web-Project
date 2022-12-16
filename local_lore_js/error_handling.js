//Error Handling for any issues that occur
export function handleError(msg = DEFAULT_ERROR_MESSAGE) {
  const alertContainer = document.createElement("div");
  alertContainer.className = "alert alert-warning alert-dismissible fade show";
  alertContainer.setAttribute("role", "alert");

  alertContainer.innerHTML = `
        <strong>${msg}</strong> Please double check your URL
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          </button>
        
        `;

  document.body.prepend(alertContainer);
}

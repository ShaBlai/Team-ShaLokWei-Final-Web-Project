//Api Handler similar to we used in Full-Stack Primer
//Handles the API Fetch for all our calls
export function getData(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
}

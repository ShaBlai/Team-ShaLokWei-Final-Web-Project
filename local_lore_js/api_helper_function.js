export function getAPIDataWithoutCors({ apiUrl, methodToApi }) {
  return new Promise((resolve, reject) => {
    const corsByPass = "https://cors-overpass.herokuapp.com/";

    fetch(corsByPass, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ apiUrl, methodToApi }),
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        reject(err);
      });
  });
}

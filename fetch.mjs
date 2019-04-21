import https from "https";

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, response => {
        let data = "";

        response.on("data", chunk => {
          data += chunk;
        });

        response.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", error => {
        reject(error);
      });
  });
}

export default fetch;

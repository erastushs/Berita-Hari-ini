import axios from "axios";

const baseUrl = "https://newsapi.org/v2/top-headlines";
const api = "2f8a3e33755943d69b260f0b49010da4";
const country = "id";

class dataSource {
  static beritaHariIni() {
    return axios
      .get(`${baseUrl}?country=${country}&apiKey=${api}`)
      .then((response) => response)
      .then((responseJson) => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        } else {
          return Promise.reject(`Error 404`);
        }
      });
  }
}

export default dataSource;

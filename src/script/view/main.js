import "../components/news-list.js";
import dataSource from "../data/data-source.js";

const main = () => {
  const newsListElement = document.querySelector("news-list");

  const GetBeritarHariIni = async () => {
    try {
      const result = await dataSource.beritaHariIni();
      renderResult(result.articles);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    newsListElement.articles = results;
  };

  const fallbackResult = (message) => {
    newsListElement.renderError(message);
  };

  GetBeritarHariIni();
};

export default main;

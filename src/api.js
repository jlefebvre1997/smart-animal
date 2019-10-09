/* eslint-disable */
const axios = require("axios").default;

export default {
  getNews() {
    axios.get('https://newsapi.org/v2/everything?q=endangered%20species&from=2019-09-09&sortBy=publishedAt&apiKey=b2c003e2783b4565b3e81803bfd519a2'
    )
      .then((response) => {
          const news = response.data.articles;
          localStorage.news = JSON.stringify(news);
      })
  }
};

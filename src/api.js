const axios = require("axios").default;

module.exports = {
  getNews() {
    axios.get('https://api.qwant.com/api/search/news?count=10&offset=0&q=animaux en voie de disparition&t=images&uiv=1')
      .then((response) => {
        console.log(response);
      })
  }
};

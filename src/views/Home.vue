<template>
  <div class="home container">
    <Actu
            v-for="(article, index) in news"
            v-bind:key="index"
            :title="article.title"
            :domain="'Author :'+ article.author+', '+ article.source.name "
            :content="article.description"
            :url="article.url"
            :date="article.publishedAt"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Actu from "../components/Actu";
import api from '../api';

export default {
  name: "home",
  components: {
    Actu
  },
  mounted() {
    api.getNews();
  },
  computed: {
    news() {
      return localStorage.news ? JSON.parse(localStorage.news) : [];
    }
  },
};
</script>

<style lang="scss">
.home {
  margin-top: 2%;
}
</style>

<template>
  <div class="card text-center">
    <div class="card-header">{{domain}}</div>
    <div class="card-body">
      <h2 class="card-title">{{title}}</h2>
      <img :src="urlToImage" class="card-img-top" :alt="title" style="width:55%" />
      <p class="card-text">{{content}}</p>
      <a :href="url" class="btn btn-primary" target="_blanc">Lire l'article</a>
    </div>
    <div class="card-footer text-muted">{{date}}</div>
  </div>
</template>

<script>
export default {
  props: {
    domain: String,
    title: String,
    content: String,
    url: String,
    urlToImage: String,
    date: String
  }
};
</script>

<style lang="scss">
.card {
  margin-top: 4%;
}
img {
  margin-bottom: 2%;
}
</style>

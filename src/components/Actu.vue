<template>
  <div class="card text-center">
    <div class="card-header">{{domain}}</div>
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{content}}</p>
      <a :href="url" class="btn btn-primary">Lire l'article</a>
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
    date: String
  }
};
</script>
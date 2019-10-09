<template>
  <nav class="component-navbar">
    <div class="component-navbar__cta">
      <div class="component-navbar__logo">
        <router-link :to="{name: 'home'}">
          <img src="../assets/logo_parrot.jpg" alt />
        </router-link>
        <router-link class="component-navbar__logo--brand" :to="{name: 'home'}">Smart Animals</router-link>
      </div>

      <router-link
        v-for="(link, index) in this.links"
        :to="{name: link.path}"
        v-bind:key="index"
        class="component-navbar__link"
      >{{ link.label }}</router-link>
    </div>

    <router-link class="component-navbar__link" :to="{name: 'animal'}">L'animal du jour</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        { path: "home", label: "Actualités" },
        { path: "assos", label: "Associations" },
        { path: "tiers", label: "Services tiers" }
      ],
      news: []
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 100%;
}

.component-navbar {
  border-bottom: 1px solid cornflowerblue;
  height: 85px;
  display: flex;
  justify-content: space-between;

  &__main-cta {
    padding: 0 15px;
    line-height: 85px;
    height: 100%;
  }

  &__link {
    padding: 0 15px;
    color: black;
    height: 100%;
    line-height: 85px;

    &:hover,
    &:visited,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }

  &__cta {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
  }

  &__logo {
    vertical-align: middle;
    height: 100%;
    width: 40%;
    margin-right: 30px;

    &--brand {
      color: black;
      font-family: inherit;
      font-size: 20px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

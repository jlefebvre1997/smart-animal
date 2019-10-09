<template>
  <div class="home container">
    <Actu />
  </div>
</template>

<script>
// @ is an alias to /src
import Actu from "../components/Actu";
export default {
  name: "home",
  components: {
    Actu
  }
};
</script>

<style lang="scss">
.home {
  margin-top: 2%;
}
</style>

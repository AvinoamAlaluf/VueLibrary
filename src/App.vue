<template>
  <div>
      <CardList></CardList>
  </div>
</template>

<script>
import CardList from "../src/components/CardListComponent/index.vue";
export default {
  name: "app",
  components: {
    CardList
  }
};
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
body {
  width: 100%;
}
</style>

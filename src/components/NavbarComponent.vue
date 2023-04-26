<template>
  <ul class="d-flex justify-content-between mb-0">
    <li
      v-for="(el, index) in store.headerNavbar"
      class="text-capitalize list-group-item mt-2"
    >
      <a :href="index">{{ el }}</a>
    </li>
  </ul>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "NavbarComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";
li {
  border-bottom: 2px solid transparent;
}
li:hover {
  border-bottom: 2px solid $orange-color;
  a:hover {
    color: $orange-color;
  }
}
a {
  font-weight: 700;
  text-decoration: none;
  color: $black-color;
  vertical-align: baseline;
}
</style>

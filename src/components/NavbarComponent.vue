<template>
  <li class="text-capitalize list-group-item mt-2 mx-auto">
    <a href="#">{{ el }}</a>
  </li>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: {
    el: String,
  },
  data() {
    return {};
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

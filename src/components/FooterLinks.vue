<template>
  <ul>
    <h5 class="text-capitalize">{{ title }}</h5>
    <li v-for="el in link" class="mb-2">
      <a class="text-capitalize" href="#">{{ el }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterLinks",
  props: {
    title: String,
    link: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/variables";
ul {
  list-style: none;
  margin-right: 5rem;
  h5 {
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: $black-color;
    &:hover {
      color: $grey-color;
    }
  }
}
</style>

<template>
  <header>
    <HeaderSection :store="store" />
  </header>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";
export default {
  name: "HeaderComponent",
  components: {
    HeaderSection,
  },
  props: {
    store: Array,
  },
};
</script>

<style lang="scss" scoped></style>

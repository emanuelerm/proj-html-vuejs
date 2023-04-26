<template>
  <header>
    <HeaderComponent />
  </header>
</template>

<script>
import { store } from "./data/store";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>

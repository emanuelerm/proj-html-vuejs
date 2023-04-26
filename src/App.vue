<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <JumboComponent />
  </main>
</template>

<script>
import { store } from "./data/store";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    JumboComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>

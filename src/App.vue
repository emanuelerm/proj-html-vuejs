<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <JumboComponent />
    <section id="service">
      <div class="container-lg">
        <ServiceComponent
          v-for="(el, index) in store.infoCards"
          :img="store.infoCardPath + (index + 1)"
          :section="el.section"
          :title="el.title"
          :text="store.infoCardTxt"
        />
      </div>
    </section>
  </main>
</template>

<script>
import { store } from "./data/store";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import ServiceComponent from "./components/ServiceComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    JumboComponent,
    ServiceComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>

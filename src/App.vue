<template>
  <header>
    <HeaderComponent :store="store.headerNavbar" />
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
    <section id="partners">
      <div class="container-lg">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="text-capitalize">some brands we work with</h2>
            <p>Quisque aliquet, libero consequat elementum convallis.</p>
          </div>
          <div class="row justify-content-center">
            <PartnersCard
              v-for="(path, index) in store.partnersImgPath"
              :path="path"
            />
            <AvadaCard />
          </div>
        </div>
      </div>
    </section>
    <CaseComponent />
    <OurWorkComponent />
  </main>
</template>

<script>
import { store } from "./data/store";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import ServiceComponent from "./components/ServiceComponent.vue";
import PartnersCard from "./components/PartnersCard.vue";
import AvadaCard from "./components/AvadaCard.vue";
import CaseComponent from "./components/CaseComponent.vue";
import OurWorkComponent from "./components/OurWorkComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    JumboComponent,
    ServiceComponent,
    PartnersCard,
    AvadaCard,
    CaseComponent,
    OurWorkComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
#partners {
  margin-top: 4rem;
  h2 {
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    font-size: 1.3rem;
  }
}
</style>

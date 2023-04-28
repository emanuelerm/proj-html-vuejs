<template>
  <main>
    <JumboComponent />
    <section id="service">
      <div class="container-lg">
        <ServiceComponent
          v-for="(el, index) in infocards"
          :img="img + (index + 1)"
          :section="el.section"
          :title="el.title"
          :text="text"
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
            <PartnersCard v-for="(path, index) in partners" :path="path" />
            <AvadaCard />
          </div>
        </div>
      </div>
    </section>
    <CaseComponent :case="caseInfo" :casePath="casePath" />
    <OurWorkComponent />
    <JoinComponent />
  </main>
</template>

<script>
import JumboComponent from "./JumboComponent.vue";
import ServiceComponent from "./ServiceComponent.vue";
import PartnersCard from "./PartnersCard.vue";
import AvadaCard from "./AvadaCard.vue";
import CaseComponent from "./CaseComponent.vue";
import OurWorkComponent from "./OurWorkComponent.vue";
import JoinComponent from "./JoinComponent.vue";
export default {
  name: "MainComponent",
  components: {
    JumboComponent,
    ServiceComponent,
    PartnersCard,
    AvadaCard,
    CaseComponent,
    OurWorkComponent,
    JoinComponent,
  },
  props: {
    store: Object,
    infocards: Object,
    img: String,
    text: String,
    partners: Array,
    caseInfo: Object,
    casePath: String,
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

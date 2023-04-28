<template>
  <section id="case">
    <div class="container">
      <div class="row justify-content-center pt-5">
        <div class="col-12 text-center">
          <h2 class="text-capitalize">
            trusted <span class="text-lowercase">by</span> leading organisations
          </h2>
        </div>
        <div class="row row-cols-3 justify-content-center">
          <CaseCard
            v-for="(caseEl, index) in case"
            :img="casePath + (index + 1)"
            :alt="casePath + 1"
            :title="caseEl.title"
            :value="caseEl.value"
            :subtitle="caseEl.subtitle"
          />
        </div>
        <div class="col-4 text-center mt-5">
          <button class="text-capitalize">read more case studies</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CaseCard from "./CaseCard.vue";
export default {
  name: "CaseComponent",

  props: {
    case: Object,
    casePath: String,
  },
  components: { CaseCard },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";
#case {
  padding-bottom: 8rem;
  h2 {
    font-weight: 700;
    font-size: 3rem;
  }
  .row-cols-3 {
    padding-top: 4rem;
  }
  button {
    color: $white-color;
    background-color: $orange-color;
    height: 3rem;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.7rem 2rem 0.2rem;
    &:hover {
      background-color: #d3530f;
    }
  }
}
</style>

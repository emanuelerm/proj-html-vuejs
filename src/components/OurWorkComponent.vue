<template>
  <section id="our-work">
    <div class="container">
      <section id="why-us">
        <WhyUsComponent />
      </section>
    </div>
  </section>
</template>

<script>
import WhyUsComponent from "./WhyUsComponent.vue";
export default {
  name: "OurWorkComponent",
  components: {
    WhyUsComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";

#our-work {
  background-color: $gray-color;
  padding-bottom: 6rem;
}
</style>

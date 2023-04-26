<template>
  <div class="container">
    <div class="row py-4 align-items-center">
      <div class="col-lg-2">
        <img
          class="img-fluid"
          src="../assets/images/avada-marketing-logo.png"
          alt="AvadaConsultant Logo"
        />
      </div>
      <div class="col-lg-6 me-auto">
        <NavbarComponent />
      </div>
      <div class="col-lg-auto pt-1">
        <i class="fa-solid fa-phone pe-2"></i>
        <span>(555) 802-1234</span>
      </div>
      <div class="col-lg-auto">
        <button id="header-button" class="btn px-4 py-2">Free Quote</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
export default {
  name: "HeaderComponent",
  components: {
    NavbarComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";
#header-button {
  color: $orange-color;
  background-color: $light-orange-bg;
  font-weight: 700;

  &:hover {
    color: $white-color;
    background-color: $orange-color;
  }
}

i {
  color: $orange-color;
}

span {
  font-weight: 700;
  font-size: 1.1rem;
}
</style>

<template>
  <div class="container-lg">
    <div class="row py-4 justify-content-between align-items-center">
      <div class="col-lg-2 col-md-3">
        <img
          class="img-fluid"
          src="../assets/images/avada-marketing-logo.png"
          alt="AvadaConsultant Logo"
        />
      </div>
      <div class="col-lg-7 col-md-7">
        <ul class="d-flex mb-0 ps-0">
          <NavbarComponent v-for="(el, index) in store.headerNavbar" :el="el" />
        </ul>
      </div>
      <div class="col-lg-3 col-md-2">
        <div class="row align-items-center justify-content-end">
          <div class="col-lg-6 d-lg-inline d-md-none pt-1 ms-au">
            <i class="fa-solid fa-phone pe-2"></i>
            <span>(555) 802-1234</span>
          </div>
          <div class="col-lg-6 col-md-auto">
            <button id="header-button" class="btn px-4">Free Quote</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import NavbarComponent from "./NavbarComponent.vue";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
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
  padding-top: 0.5rem;
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

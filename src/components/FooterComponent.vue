<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 me-custom">
          <h3 class="text-capitalize">
            grow your online business strategically,
            <span class="text-lowercase">and</span> improve customer retention.
          </h3>
          <div class="icons mt-4 d-flex">
            <div class="icon-container">
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <div class="icon-container">
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div class="icon-container">
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div class="icon-container">
              <a href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div class="icon-container">
              <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div class="icon-container">
              <a href="#">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-auto d-flex">
          <FooterLinks
            v-for="(el, index) in links"
            :title="el.title"
            :link="el.links"
          />
        </div>
      </div>
      <div class="row align-items-center mt-5">
        <div class="col-lg-auto">
          <p class="small">
            <i class="fa-regular fa-copyright"></i>
            2020 • Avada Consultant • Powered by ERM-Boolean
          </p>
        </div>
        <div class="col-lg-auto mx-custom">
          <p class="small">Call Us (555) 802-1234</p>
        </div>
        <div class="col-lg-auto">
          <p class="small">info@yourcompany.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLinks from "./FooterLinks.vue";
export default {
  name: "FooterComponent",
  components: {
    FooterLinks,
  },
  props: {
    links: Object,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 6rem 0 5rem;
}
h3 {
  font-size: 2rem;
  font-weight: 700;
}
.me-custom {
  margin-right: 6rem;
}
.icon-container {
  width: 2.2rem;
  a {
    color: #000;
    i {
      font-size: 1.1rem;
    }
  }
}
.mx-custom {
  margin-left: 12.8rem;
  margin-right: 16rem;
}
</style>

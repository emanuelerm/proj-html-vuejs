<template>
  <section id="our-work">
    <section id="why-us">
      <div class="container">
        <WhyUsComponent />
      </div>
    </section>
    <section id="reviews">
      <div class="container-lg">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-6">
            <img
              src="../assets/images/large-testimonial.jpg"
              alt="Testimonial"
            />
          </div>
          <div class="col-lg-5">
            <div class="text-container">
              <h3>
                "The team at Avada Marketing Consultant is fabulous. They helped
                us unlock our potential online and offline. We have experienced
                year on year growth due to their progressive approach."
              </h3>
              <h5 class="text-capitalize">kate schadler</h5>
              <p class="text-capitalize">marketing consultant - abstract</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  #why-us {
    padding-bottom: 6rem;
  }
  #reviews {
    background-color: $white-color;
    padding: 8rem 0;
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
      -webkit-box-shadow: 0px 15px 30px 10px #adadad;
      box-shadow: 10px 15px 30px 10px #adadad;
    }
    .text-container {
      width: 65%;
      margin-left: 6rem;
      h3 {
        font-weight: 700;
      }
      h5 {
        margin-top: 2.5rem;
        font-weight: 700;
      }
    }
  }
}
</style>

<template>
  <section id="jumbo">
    <div id="filter">
      <div class="container-lg h-100 jumbo-section">
        <div class="row justify-content-between h-100">
          <div class="col-lg-6">
            <h1 class="text-capitalize">unlock your online growth potential</h1>
            <p>
              Online marketing to secure customer retention, leads, and sales,
              We focus on the bigger picture.
            </p>
            <button class="text-capitalize mt-3">
              our services <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div class="col-lg-5 position-relative">
            <CallbackCard />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CallbackCard from "./CallbackCard.vue";
export default {
  name: "JumboComponent",
  components: {
    CallbackCard,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";
#jumbo {
  background-image: url(../assets/images/marketing-intro.jpg);
  height: 45rem;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  #filter {
    background-color: #00000056;
    height: 45rem;
    width: 100%;
    top: 0;
    left: 0;
    .jumbo-section {
      padding-top: 7rem;
    }
    h1 {
      color: $white-color;
      font-size: 4.5rem;
      font-weight: 700;
    }
    p {
      color: $white-color;
      font-size: 1.7rem;
    }
    button {
      background-color: $white-color;
      padding: 1rem 2rem 0.7rem;
      font-size: 1.3rem;
      font-weight: 700;
      border-radius: 10px;
      border: solid 2px transparent;
      &:hover {
        background-color: transparent;
        border: solid 2px white;
        color: $white-color;
      }
      i {
        font-size: 1rem;
      }
    }
  }
}
</style>

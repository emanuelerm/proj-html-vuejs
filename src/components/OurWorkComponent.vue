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
    <section id="resources">
      <div class="container">
        <div class="row justify-content-between align-items-end mb-5">
          <div class="col-lg-6">
            <h2 class="text-capitalize">
              marketing resources: insider advice
              <span class="text-lowercase">on</span> how
              <span class="text-lowercase">to</span> increase online sales
            </h2>
          </div>
          <div class="col-lg-auto ms-auto">
            <button class="text-capitalize">explore all resources</button>
          </div>
        </div>
        <div class="row row-cols-3 justify-content-space-between pt-5">
          <div class="col-lg-4">
            <div class="img-container mx-auto">
              <div class="container-cust"></div>
              <img src="../assets/images/blog-posts-6.jpg" alt="blog post 1" />
              <h3 class="text-capitalize">
                marketing tips and tricks for your website
              </h3>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="img-container mx-auto">
              <div class="container-cust"></div>
              <img src="../assets/images/blog-posts-5.jpg" alt="blog post 2" />
              <h3 class="text-capitalize">
                how to write stunning blog post titles
              </h3>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="img-container mx-auto">
              <div class="container-cust"></div>
              <img src="../assets/images/blog-posts-4.jpg" alt="blog post 3" />
              <h3 class="text-capitalize">
                techniques <span class="text-lowercase">to</span> reduce
                facebook ads spend
              </h3>
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
  #resources {
    padding: 8rem 0;
    h2 {
      font-size: 3rem;
      font-weight: 700;
      margin-right: 4rem;
      margin-bottom: 0;
    }
    button {
      color: $white-color;
      background-color: $orange-color;
      height: 3rem;
      border-radius: 10px;
      border: none;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.7rem 2rem 0.2rem;
      &:hover {
        background-color: #d3530f;
      }
    }
    .img-container {
      width: 95%;
      position: relative;

      img {
        width: 100%;
        height: auto;
      }
      .container-cust {
        width: 100%;
        height: 263.46px;
        position: absolute;
        &:hover {
          background: rgb(217, 217, 217);
          background: -moz-linear-gradient(
            180deg,
            rgba(217, 217, 217, 0) 0%,
            rgba(255, 89, 0, 0.6839110644257703) 99%
          );
          background: -webkit-linear-gradient(
            180deg,
            rgba(217, 217, 217, 0) 0%,
            rgba(255, 89, 0, 0.6839110644257703) 99%
          );
          background: linear-gradient(
            180deg,
            rgba(217, 217, 217, 0) 0%,
            rgba(255, 89, 0, 0.6839110644257703) 99%
          );
        }
      }
      h3 {
        margin-top: 2rem;
        font-size: 1.9rem;
      }
    }
  }
}
</style>

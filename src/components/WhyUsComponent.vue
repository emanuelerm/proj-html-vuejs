<template>
  <div class="row first justify-content-center align-items-center">
    <div class="col-lg-5">
      <div class="text-container">
        <h2 class="text-capitalize">
          we boost our clients' bottom line
          <span class="text-lowercase">by</span> optimizing their growth
          potential.
        </h2>
        <p>
          Quisque aliquet, libero consequat elementum convallis,erat risus
          imperdiet pellentesque sem neque eget.
        </p>
        <button class="text-capitalize">why work with us</button>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="img-container">
        <img
          src="../assets/images/we-boost-our-clients.jpg"
          alt="Our Clients"
        />
      </div>
    </div>
  </div>
  <div class="row second justify-content-center align-items-center mt-3">
    <div class="col-lg-5">
      <div class="top">
        <h4 class="text-capitalize">we build relationship</h4>
        <p>
          Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus
          nec ut leo. Integer consectetur.
        </p>
      </div>
      <div class="bottom">
        <h4 class="text-capitalize">proprietary processes</h4>
        <p>
          Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus
          nec ut leo. Integer consectetur.
        </p>
      </div>
    </div>
    <div class="col-lg-6 d-flex flex-column justify-content-between">
      <EthicsCard
        v-for="(el, index) in title"
        :img="imgPath + (index + 1)"
        :title="el"
        :text="text"
      />
    </div>
  </div>
  <div
    class="row third justify-content-center align-items-center mt-3 text-center"
  >
    <h4>Awards</h4>
    <div class="awards"></div>
    <div class="col-lg-3 mt-5">
      <div class="award-container mx-auto text-center">
        <img src="../assets/images/award-a.png" alt="award a" />
        <p class="text-capitalize">
          winner seo master
          <span class="text-uppercase">magt</span>
          <br />
          smart start award 2017
        </p>
      </div>
    </div>
    <div class="col-lg-3 mt-5">
      <div class="award-container mx-auto text-center">
        <img src="../assets/images/award-b.png" alt="award b" />
        <p class="text-capitalize">
          top social media agencies
          <br />
          next partner 2018
        </p>
      </div>
    </div>
    <div class="col-lg-3 mt-5">
      <div class="award-container mx-auto text-center">
        <img src="../assets/images/award-c.png" alt="award c" />
        <p class="text-capitalize">
          10 fastest growing abstract
          <br />
          solution provider 2019
        </p>
      </div>
    </div>
    <div class="col-lg-3 mt-5">
      <div class="award-container mx-auto text-center">
        <img src="../assets/images/award-d.png" alt="award d" />
        <p class="text-capitalize">
          national excellence agencie
          <br />
          award winner 2020
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import EthicsCard from "./EthicsCard.vue";
export default {
  name: "WhyUsComponent",
  components: {
    EthicsCard,
  },
  data() {
    return {
      imgPath: "icon",
      title: ["Accountability", "Transparency", "Investment"],
      text: "Curabitur ac leo nunc vestibulum",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";

.first {
  padding: 9rem 0;

  .img-container {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 15px;
    }
  }
  .text-container {
    margin-right: 3rem;
    h2 {
      font-size: 3rem;
      font-weight: 700;
    }
    p {
      font-size: 1.3rem;
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
  }
}

.second {
  h4 {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    font-size: 1.2rem;
  }
  .bottom {
    margin-top: 4rem;
  }
}

.third {
  padding-top: 5rem;

  h4 {
    font-size: 2rem;
    font-weight: 700;
  }
}

.award-container {
  width: 70%;
  img {
    width: 50%;
    height: auto;
  }
}
</style>

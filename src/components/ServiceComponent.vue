<template>
  <div
    class="row"
    :class="[section === 'investors in people' ? 'flex-row-reverse' : '']"
  >
    <div class="col-6">
      <div
        class="img-container"
        :class="[section === 'investors in people' ? 'ms-0' : 'mx-auto']"
      >
        <img
          :src="getImagePath(`../assets/images/${img}.png`)"
          :alt="section"
        />
      </div>
    </div>
    <div class="col-6">
      <div
        class="text-card d-flex flex-column justify-content-between h-100"
        :class="[
          section === 'investors in people' ? 'mx-auto' : 'ms-0',
          section === 'investors in people' ? 'ps-5' : 'pe-5',
        ]"
      >
        <div class="top-container d-flex">
          <div class="img-container-icon">
            <img src="" alt="" />
          </div>
          <h6 class="text-capitalize">{{ section }}</h6>
        </div>
        <div class="middle-card">
          <h2 class="text-capitalize">{{ title }}</h2>
          <p>{{ text }}</p>
        </div>
        <div class="bottom-card">
          <button>Get a Consultation</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceComponent",
  props: {
    img: String,
    section: String,
    title: String,
    text: String,
  },
  methods: {
    getImagePath: function (path) {
      return new URL(path, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";

.row {
  padding: 7rem 0;
}
.img-container {
  width: 70%;
  img {
    width: 100%;
    height: auto;
  }
}
.text-card {
  width: 70%;
  padding: 1rem 0;
  h6 {
    font-weight: 700;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
  }
  p {
    font-size: 1.2rem;
  }
  button {
    color: $white-color;
    background-color: $orange-color;
    width: 50%;
    height: 3rem;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    padding-top: 0.5rem;
  }
}
</style>

<template>
  <div
    class="row align-items-center"
    :class="[section === 'investors in people' ? 'flex-row-reverse' : '']"
  >
    <div class="col-6">
      <div
        class="img-container"
        :class="[section === 'investors in people' ? 'ms-0' : '']"
      >
        <img
          :src="getImagePath(`../assets/images/${img}.png`)"
          :alt="section"
        />
      </div>
    </div>
    <div class="col-6">
      <div
        class="text-card d-flex flex-column justify-content-center h-100"
        :class="[
          section === 'investors in people' ? 'mx-auto' : 'ms-5',
          section === 'investors in people' ? 'ps-5' : '',
        ]"
      >
        <div class="top-container d-flex mb-3">
          <div class="img-container-icon">
            <img src="" alt="" />
          </div>
          <h6 class="text-capitalize">{{ section }}</h6>
        </div>
        <div class="middle-card mb-4">
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
  padding: 9rem 0 7rem;
  .col-6 {
    height: 450px;
  }
}
.img-container {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.text-card {
  width: 65%;
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

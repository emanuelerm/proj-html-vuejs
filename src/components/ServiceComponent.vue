<template>
  <div
    class="row"
    :class="[section === 'investors in people' ? 'flex-row-reverse' : '']"
  >
    <div class="col-6">
      <div class="img-container">
        <img
          :src="getImagePath(`../assets/images/${img}.png`)"
          :alt="section"
        />
      </div>
    </div>
    <div class="col-6">
      <div class="text-card">
        <div class="top-container d-flex">
          <div class="img-container">
            <img src="" alt="" />
          </div>
          <h5>{{ section }}</h5>
        </div>
        <div class="middle-card">
          <h2>{{ title }}</h2>
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
    index: Number,
  },
  methods: {
    getImagePath: function (path) {
      return new URL(path, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped></style>

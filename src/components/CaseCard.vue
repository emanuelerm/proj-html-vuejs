<template>
  <div class="col-4">
    <div class="case-card">
      <div class="card-image">
        <img :src="getImagePath(`../assets/images/${img}.jpg`)" :alt="alt" />
      </div>
      <div class="card-text">
        <h3>{{ title }}</h3>
        <p class="description">
          <span class="value">{{ value }}</span> <br />
          {{ subtitle }}
        </p>

        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseCard",
  props: {
    img: String,
    alt: String,
    title: String,
    value: String,
    subtitle: String,
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
.case-card {
  width: 95%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .card-text {
    padding-top: 2rem;
    h3 {
      font-weight: 700;
      padding-bottom: 1rem;
      border-bottom: dashed 1px $gray-color;
    }
    .value {
      font-size: 4rem;
      font-weight: 700;
    }
    .description {
      font-size: 1.27rem;
    }
  }
}
</style>

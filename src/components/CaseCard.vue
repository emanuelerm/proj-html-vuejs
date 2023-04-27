<template>
  <div class="col-4">
    <div class="case-card">
      <div class="card-image position-relative">
        <img :src="getImagePath(`../assets/images/${img}.jpg`)" :alt="alt" />
        <div class="layover position-absolute"></div>
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
  .layover {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d9d9d9",endColorstr="#ff5900",GradientType=1);
    }
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

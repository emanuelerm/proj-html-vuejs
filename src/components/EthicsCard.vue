<template>
  <div
    class="card-container d-flex align-items-center ms-5"
    :class="title === 'Investment' ? 'mb-0' : 'mb-4'"
  >
    <div class="icon-container">
      <img :src="getImagePath(`../assets/images/${img}.png`)" :alt="img" />
    </div>
    <div class="text-container d-flex flex-column justify-content-center">
      <h5>{{ title }}</h5>
      <p class="mb-0">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EthicsCard",
  methods: {
    getImagePath: function (path) {
      return new URL(path, import.meta.url).href;
    },
  },
  props: {
    img: String,
    title: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  width: 5rem;
  height: 5rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.text-container {
  margin-left: 1rem;
  h5 {
    font-weight: 700;
  }
}
</style>

<template>
  <div class="col-2 text-center">
    <img :src="getImagePath(`../assets/images/${path}.png`)" alt="" />
  </div>
</template>

<script>
export default {
  name: "PartnersCard",
  methods: {
    getImagePath: function (path) {
      return new URL(path, import.meta.url).href;
    },
  },
  props: {
    path: String,
  },
};
</script>

<style lang="scss" scoped>
.col-2 {
  padding-top: 3.5rem;
  padding-bottom: 4rem;
}
img {
  width: 70%;
}
</style>

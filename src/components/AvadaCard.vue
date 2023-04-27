<template>
  <div class="container">
    <div class="avada-card">
      <div class="row align-items-center">
        <div class="col-1 text-center">
          <img
            src="../assets/images/marketing-expert-cta.png"
            alt="Marketing CTA"
          />
        </div>
        <div class="col-2 d-flex flex-column justify-content-center">
          <h6 class="text-capitalize mb-0">sandy seriff</h6>
          <p class="text-capitalize mb-0">marketing consultant expert</p>
        </div>
        <div class="col-6">
          <h4 class="mb-0">Drive Leads and Sales with Avada</h4>
        </div>
        <div class="col-3 d-flex justify-content-end">
          <button id="header-button" class="btn px-4">
            <i class="fa-solid fa-phone pe-2"></i> <span>(555) 802-1234</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvadaCard",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";

.container {
  padding-bottom: 6rem;
}
.avada-card {
  padding: 1rem 3rem;
  border-radius: 10px;
  -webkit-box-shadow: 0px 15px 9px -1px #e4e4e4;
  box-shadow: 0px 15px 9px -1px #e4e4e4;
  img {
    width: 3.5rem;
    height: auto;
    border-radius: 50%;
  }
  h6 {
    font-weight: 700;
  }
  p {
    font-size: 0.8rem;
  }
  h5 {
    font-weight: 700;
  }
  .col-6 {
    padding-left: 5rem;
  }

  #header-button {
    color: $orange-color;
    background-color: $light-orange-bg;
    padding-top: 0.5rem;
    font-weight: 700;

    &:hover {
      color: $white-color;
      background-color: $orange-color;
    }
  }
}
</style>

<template>
  <div id="callback-card">
    <div class="callback-container d-flex flex-column align-items-center">
      <div class="img-container">
        <img
          src="../assets/images/marketing-consultant-expert.jpg"
          alt="Marketing Consultant"
        />
      </div>
      <div class="callback-info text-center">
        <h3 class="text-capitalize">richard madsen</h3>
        <h5 class="text-capitalize">marketing consultant expert</h5>
        <span class="contact">
          <i class="fa-solid fa-phone pe-2"></i>
          <span>(555) 802-1234</span>
        </span>
      </div>
      <div
        class="callback-submitting d-flex flex-column align-items-center w-100"
      >
        <input
          type="text"
          name="firstName"
          id="first-name"
          placeholder="Your Name*"
        />
        <input
          type="text"
          name="emailAddress"
          id="email-address"
          placeholder="Your Email*"
        />
        <input
          type="text"
          name="phoneNumber"
          id="phone-number"
          placeholder="Your Phone Number*"
        />
        <button>Get a Callback</button>
        <span>By submitting my data I agree to be contacted</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallbackCard",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/_variables";

#callback-card {
  //   height: 40rem;
  width: 88%;
  background-color: $white-color;
  border-radius: 10px;
  -webkit-box-shadow: 0px 15px 9px -1px #adadad;
  box-shadow: 0px 15px 9px -1px #adadad;
  position: absolute;
  top: 0;
  left: -3%;

  .callback-container {
    padding: 2rem;
    .img-container {
      width: 5.5rem;
      height: 5.5rem;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .callback-info {
      padding: 1.5rem 0;
      h3 {
        margin-bottom: 1rem;
        font-weight: 700;
      }
      h5 {
        color: $grey-color;
        margin-bottom: 1rem;
      }
      .contact {
        color: $orange-color;
        font-weight: 700;
        font-size: 1.3rem;
      }
    }
    .callback-submitting {
      input {
        width: 100%;
        height: 4rem;
        margin-bottom: 1rem;
        border: solid 1px $grey-color;
        border-radius: 10px;
        font-size: 1.2rem;
        padding-left: 1.3rem;
      }
      button {
        color: $orange-color;
        background-color: $light-orange-bg;
        width: 100%;
        height: 4rem;
        border-radius: 10px;
        border: none;
        font-size: 1.2rem;
        font-weight: 700;
        padding-top: 0.5rem;
        &:hover {
          background-color: $orange-color;
          color: $white-color;
        }
      }
      span {
        margin-top: 0.5rem;
        color: $grey-color;
        font-size: 0.8rem;
        font-style: italic;
      }
    }
  }
}
</style>

<template>
  <section id="join">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 first-col">
          <h2 class="text-capitalize">let's make things happen</h2>
          <h3>
            Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus
            nec ut leo. Integrer consectetur.
          </h3>
          <p class="caption">
            "The team at Avada Marketing Consultant is fabulous. They helped us
            unlock our potential online and offline. We have experienced year on
            year growth due to their progressive approach."
          </p>
          <p class="text-capitalize author">
            george anderson
            <br />
            <span class="small">Digitalbox CEO</span>
          </p>
        </div>
        <div class="col-lg-5 position-relative">
          <CallbackCard class="callback" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CallbackCard from "./CallbackCard.vue";
export default {
  name: "JoinComponent",
  components: {
    CallbackCard,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/partials/variables";

#join {
  background-color: $black-color;
  padding: 7rem 0;
  .first-col {
    margin-right: 11rem;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 4rem;
      font-weight: 700;
      color: $white-color;
    }
    h3 {
      margin-top: 2rem;
      font-size: 1.7rem;
      color: $white-color;
      position: relative;
      &::after {
        content: "";
        width: 6rem;
        border-bottom: 1px solid $grey-color;
        position: absolute;
        left: 0;
        top: 8.5rem;
      }
    }
    .caption {
      margin-top: 5rem;
      color: $white-color;
      font-size: 1.2rem;
      font-style: italic;
    }
    .author {
      margin-top: 1rem;
      color: $white-color;
      font-size: 1.2rem;
      font-weight: 700;
      .small {
        font-weight: 400;
        font-size: 1rem;
        color: $grey-color;
      }
    }
  }
  .callback {
    box-shadow: none;
    width: 80%;
    height: fit-content;
  }
}
</style>

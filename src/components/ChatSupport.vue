<template>
  <div id="message" :class="active ? 'wobble-hor-bottom scale-transition' : ''">
    <div class="image">
      <img
        src="../assets/images/marketing-expert-cta.png"
        alt="marketing cta"
      />
    </div>
    <div class="text">
      <i @click="closeMessage" class="fa-solid fa-xmark"></i>
      <p class="mb-0">
        This is a free HubSpot live chat. You can create your own chat flows and
        engage your customers with Avada & HubSpot!
      </p>
    </div>
  </div>
  <div
    id="chat"
    :class="active ? 'cursor-dsb wobble-hor-bottom' : ''"
    @click="openChat"
  >
    <i class="fa-solid fa-message"></i>
  </div>
</template>

<script>
export default {
  name: "ChatSupport",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    openChat() {
      this.active = true;
    },
    closeMessage() {
      this.active = false;
    },
    closeWindow() {
      document.addEventListener("click", function () {
        this.active = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#chat {
  width: 4rem;
  height: 4rem;
  scale: 1;
  background-color: #ff7d37;
  border-radius: 50%;
  position: fixed;
  bottom: 2vh;
  left: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  &:hover {
    cursor: pointer;
  }
  &.wobble-hor-bottom {
    -webkit-animation: wobble-hor-bottom 0.8s both;
    animation: wobble-hor-bottom 0.8s both;
    scale: 0.8;
    transition: scale 0.3s ease-out;
  }
  &.cursor-dsb {
    cursor: default;
  }
}
i {
  padding-top: 0.3rem;
  transform-origin: center;
  color: white;
  font-size: 2rem;
}
#message {
  background-color: white;
  width: 12rem;
  padding: 1.8rem 1rem 1.3rem;
  border-radius: 10px;
  border-bottom-right-radius: 0px;
  -webkit-box-shadow: 6px 10px 20px 1px #9e9e9e;
  box-shadow: 6px 10px 20px 1px #9e9e9e;
  position: fixed;
  left: 87.6vw;
  bottom: 5.2vh;
  z-index: 1000;
  transform-origin: bottom right;
  scale: 0;
  &.scale-transition {
    scale: 1;
    transition: scale 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &.wobble-hor-bottom {
    -webkit-animation: wobble-hor-bottom 0.8s both;
    animation: wobble-hor-bottom 0.8s both;
  }
  .image {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: -25px;
    left: 36%;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  p {
    font-size: 0.9rem;
  }
  .fa-xmark {
    position: absolute;
    color: #777;
    font-size: 1.2rem;
    scale: 0.7;
    top: 7px;
    right: 15px;
    &:hover {
      cursor: pointer;
      color: black;
      scale: 1;
    }
  }
}
</style>

<template>
  <header>
    <HeaderComponent :store="store.headerNavbar" />
  </header>
  <main>
    <JumboComponent />
    <section id="service">
      <div class="container-lg">
        <ServiceComponent
          v-for="(el, index) in store.infoCards"
          :img="store.infoCardPath + (index + 1)"
          :section="el.section"
          :title="el.title"
          :text="store.infoCardTxt"
        />
      </div>
    </section>
    <section id="partners">
      <div class="container-lg">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="text-capitalize">some brands we work with</h2>
            <p>Quisque aliquet, libero consequat elementum convallis.</p>
          </div>
          <div class="row justify-content-center">
            <PartnersCard
              v-for="(path, index) in store.partnersImgPath"
              :path="path"
            />
            <AvadaCard />
          </div>
        </div>
      </div>
    </section>
    <CaseComponent :case="store.caseInfo" :casePath="store.caseImgPath" />
    <OurWorkComponent />
    <JoinComponent />
  </main>
  <footer>
    <FooterComponent :links="store.footerLinks" />
  </footer>
  <div id="message" :class="active ? 'd-block' : 'd-none'">
    <div class="image">
      <img src="./assets/images/marketing-expert-cta.png" alt="" />
    </div>
    <div class="text">
      <i @click="closeMessage" class="fa-solid fa-xmark"></i>
      <p class="mb-0">
        This is a free HubSpot live chat. You can create your own chat flows and
        engage your customers with Avada & HubSpot!
      </p>
    </div>
  </div>
  <div id="chat" :class="active ? 'wobble-hor-bottom' : ''" @click="openChat">
    <i class="fa-solid fa-message"></i>
  </div>
</template>

<script>
import { store } from "./data/store";
import HeaderComponent from "./components/HeaderComponent.vue";
import JumboComponent from "./components/JumboComponent.vue";
import ServiceComponent from "./components/ServiceComponent.vue";
import PartnersCard from "./components/PartnersCard.vue";
import AvadaCard from "./components/AvadaCard.vue";
import CaseComponent from "./components/CaseComponent.vue";
import OurWorkComponent from "./components/OurWorkComponent.vue";
import JoinComponent from "./components/JoinComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    JumboComponent,
    ServiceComponent,
    PartnersCard,
    AvadaCard,
    CaseComponent,
    OurWorkComponent,
    JoinComponent,
    FooterComponent,
  },
  data() {
    return {
      store,
      active: false,
    };
  },
  methods: {
    openChat() {
      this.active = !this.active;
    },
    closeMessage() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
#partners {
  margin-top: 4rem;
  h2 {
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    font-size: 1.3rem;
  }
}
#chat {
  width: 4rem;
  height: 4rem;
  background-color: #f86011;
  border-radius: 50%;
  position: sticky;
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
  }
}
i {
  color: white;
  font-size: 2rem;
}
#message {
  background-color: white;
  width: 12rem;
  padding: 1.8rem 1rem 1.3rem;
  border-radius: 10px;
  -webkit-box-shadow: -10px 15px 30px -1px #9e9e9e;
  box-shadow: -10px 15px 30px -1px #9e9e9e;
  position: sticky;
  left: 88vw;
  bottom: 10vh;
  z-index: 999;
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
    font-size: 1rem;
    top: 7px;
    right: 15px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

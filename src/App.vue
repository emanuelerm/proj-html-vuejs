<template>
  <HeaderComponent :store="store.headerNavbar" />
  <MainComponent
    :infocards="store.infoCards"
    :img="store.infoCardPath"
    :text="store.infoCardTxt"
    :partners="store.partnersImgPath"
    :caseInfo="store.caseInfo"
    :casePath="store.caseImgPath"
  />
  <FooterComponent :links="store.footerLinks" />
  <ChatSupport />
</template>

<script>
import { store } from "./data/store";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ChatSupport from "./components/ChatSupport.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ChatSupport,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>

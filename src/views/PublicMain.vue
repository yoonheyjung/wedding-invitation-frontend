<script setup>
import Main from "../components/PublicMain.vue";
import Intro from "../components/PublicIntro.vue";
import Calendar from "../components/Calendar.vue";
import Map from "../components/Map.vue";
import Message from "../components/PublicMessage.vue";
import Account from "../components/PublicAccount.vue";
import AccountParent from "../components/PublicAccountParent.vue";

import Gallery from "../components/PublicGallery.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Main />
  <Intro />
  <Calendar />
  <Map />
  <Gallery />
  <Account />
  <AccountParent />
  <Message />
  <Footer />
</template>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@font-face {
  font-family: "GangwonEdu_bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff")
    format("woff");
  text-align: center;
  font-weight: normal;
  font-style: normal;
  color: red;
}
@font-face {
  font-family: "S-CoreDream";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "IM_Hyemin";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "suitRegular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
html,
body {
  background: #faf1f2;
}
.title {
  font-family: "GangwonEdu_bold";
}
</style>

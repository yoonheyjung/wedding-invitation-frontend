<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Main from "./components/Main.vue";
import Intro from "./components/Intro.vue";
import Calendar from "./components/Calendar.vue";
import Dday from "./components/DdayCount.vue";
import Map from "./components/Map.vue";

import Gallery from "./components/Gallery.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Main />
  <Intro />
  <Calendar />
  <Dday />
  <Map />
  <HelloWorld msg="Vite + Vue" />
  <h1 class="text-3xl font-bold underline">Hello dworld!</h1>
  <Gallery />
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
  background: #faedf0;
}
.title {
  font-family: "GangwonEdu_bold";
}
</style>

<template>
  <div>
    <Header2></Header2>

    <div class="main">
      <Background />
      <MainVisual></MainVisual>
      <MainTextSec01></MainTextSec01>
      <IconMove></IconMove>
      <MainGifSec></MainGifSec>
      <MainTextSec02></MainTextSec02>
      <MainContentSec></MainContentSec>
      <MainTextSec03></MainTextSec03>
      <MainMoveImgSec></MainMoveImgSec>
      <MainChanceSec></MainChanceSec>
      <PartnerSec></PartnerSec>
      <MainTextSec04></MainTextSec04>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header2 from "@/components/layout/Header2.vue";
import Footer from "@/components/layout/Footer.vue";
import Background from "@/components/common/Backgorund.vue";
import MainVisual from "@/components/layout/main/MainVisual.vue";
import MainTextSec01 from "@/components/layout/main/MainTextSec01.vue";
import MainTextSec02 from "@/components/layout/main/MainTextSec02.vue";
import MainContentSec from "@/components/layout/main/MainContentSec.vue";
import MainTextSec03 from "@/components/layout/main/MainTextSec03.vue";
import MainMoveImgSec from "@/components/layout/main/MainMoveImgSec.vue";
import MainChanceSec from "@/components/layout/main/MainChanceSec.vue";
import PartnerSec from "@/components/layout/main/PartnerSec.vue";
import MainTextSec04 from "@/components/layout/main/MainTextSec04.vue";
import MainGifSec from "@/components/layout/main/MainGifSec.vue";

import IconMove from "@/components/layout/main/IconMove.vue";

export default {
  components: {
    Header2,
    Footer,
    Background,
    MainVisual,
    MainTextSec01,
    MainTextSec02,
    MainContentSec,
    MainTextSec03,
    MainMoveImgSec,
    MainChanceSec,
    PartnerSec,
    MainTextSec04,
    MainGifSec,

    IconMove,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
</style>

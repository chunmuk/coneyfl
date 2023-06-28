<template>
  <div class="main_section">
    <div class="main_center">
      <MainContentItem id="con1">
        <template v-slot:text01>
          코니 등록하고<br />
          안정적이고 지속적인<br />
          수입을 얻으세요!
        </template>
        <template v-slot:text02>
          영상 제작일은 좋은데 직장은 안맞고<br />
          전업 프리랜서는 수입이 불안하고
        </template>
        <template v-slot:text03>
          코니는 월급여로 계약하면서도 출퇴근이 자유로워요.
        </template>
        <template v-slot:img>
          <img src="/images/main_img01.png" />
        </template>
      </MainContentItem>

      <MainContentItem class="reverse" id="con2">
        <template v-slot:text01>
          원하는 시간에 원하는 양만큼<br />
          원하는 장소에서!
        </template>
        <template v-slot:text02>
          주말에만 일하기를 원하시나요?<br />
          평일 저녁에만?
        </template>
        <template v-slot:text03>
          원하는 시간을 등록해보세요.<br />
          보너스같은 수익을 얻을 수 있어요.
        </template>
        <template v-slot:img>
          <img src="/images/main_img02.png" />
        </template>
      </MainContentItem>

      <MainContentItem id="con3">
        <template v-slot:text01>
          일하면 할수록 쌓이는<br />
          현금 마일리지
        </template>
        <template v-slot:text02>
          하나의 프로젝트가 끝날때마다<br />
          마일리지가 차곡차곡!
        </template>
        <template v-slot:text03>
          현금처럼 쓸 수 있어<br />
          일을 하면 할수록 수익이 불어나요!
        </template>
        <template v-slot:img>
          <img src="/images/main_img03.png" />
        </template>
      </MainContentItem>

      <MainContentItem class="reverse" id="con4">
        <template v-slot:text01> 편하고 쉬운 업무관리 </template>
        <template v-slot:text02>
          코니만의 전용워크시스템을 활용해서<br />
          일정과 히스토리를 편하고 쉽게 관리할 수 있어요.
        </template>
        <template v-slot:text03>
          프로젝트 관리가 쉬워져서<br />
          같은 시간에 더 많은 프로젝트 진행이 가능해요.
        </template>
        <template v-slot:img>
          <img src="/images/main_img04.png" />
        </template>
      </MainContentItem>

      <MainContentItem id="con5">
        <template v-slot:text01>
          6가지 데이터로<br />
          나에게 꼭 맞는 업무 Fitting
        </template>
        <template v-slot:text02>
          <p class="font_blk bold">
            나의 업무분야, 유형, 레벨, 스타일, 방향에<br />
            맞춰서 일할 수 있어요.
          </p>
        </template>
        <template v-slot:text03>
          <p class="font_gray">내가 나답게 쑥쑥 성장하는 경험.</p></template
        >
        <template v-slot:img>
          <img src="/images/main_img06.png" />
        </template>
      </MainContentItem>

      <MainContentItem class="reverse" id="con6">
        <template v-slot:text01> 코니 레벨별 다양한 혜택 제공</template>
        <template v-slot:text02>
          레벨별 맞춤형 계약방식과 교육기회, 성장지원, 리쿠르팅 등
          <p class="font_blk bold">
            다양한 개인별, 레벨별 맞춤형 혜택이 있어요.
          </p>
        </template>

        <template v-slot:img>
          <img src="/images/main_img05.png" />
        </template>
      </MainContentItem>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MainContentItem from "@/components/layout/main/MainContentItem.vue";

export default {
  components: {
    MainContentItem,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    for (let i = 1; i <= 6; i++) {
      window["tl" + i] = gsap.timeline({
        scrollTrigger: {
          trigger: `#con${i}`,
          start: "-=300",
        },
      });

      window["tl" + i].to(`#con${i} .text_container`, {
        duration: 0.5,
        opacity: 1,
        x: 0,
      });

      window["tl" + i].to(`#con${i} .img_wrap`, {
        duration: 1,
        opacity: 1,
        borderRadius: "30%",
        y: 0,
      });
    }
  },
};
</script>

<style scoped>
.main_section {
  width: 100%;
  margin: 200px 0;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.font_blk {
  color: var(--font-black);
}
.font_gray {
  color: #9397a2;
  font-weight: 400;
}
@media (max-width: 1300px) {
  .main_section {
    padding: 0 24px;
    box-sizing: border-box;
  }
}
@media (max-width: 768px) {
  .img_wrap > img {
    width: 80%;
  }
}
</style>

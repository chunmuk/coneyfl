<template>
  <section class="main_section">
    <div class="background_circle"></div>
    <div class="main_center">
      <div class="main_sec_text">
        <p>
          똑똑한 영상크루들의<br class="mo" />
          이유있는 선택
        </p>
        <p>이제 #외주하지말고 <span class="main_color">#코니하세요!</span></p>
      </div>

      <div class="main_sec_text02">
        코니로 등록하고 <br class="mo" />다양한 혜택을 누리세요!
      </div>
      <router-link to="/more" class="btn_wrap">
        <ButtonBlue>코니 차별 포인트</ButtonBlue>
      </router-link>
    </div>
  </section>
</template>

<script>
import ButtonBlue from "@/components/common/ButtonBlue.vue";

export default {
  components: {
    ButtonBlue,
  },
};
</script>

<style scoped>
.main_section {
  width: 100%;
  margin: 260px 0 200px;
  position: relative;
}
.background_circle {
  width: 666px;
  height: 666px;
  background: #2c3af1;
  opacity: 0.08;
  filter: blur(200px);
  position: absolute;
  right: -20%;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.main_sec_text p {
  font-family: "Pretendard";
  color: #1d2232;
  text-align: center;
  font-size: 3rem;
}
.main_sec_text p:first-child {
  font-weight: 400;
  margin-bottom: 20px;
}
.main_sec_text p:nth-child(2) {
  font-weight: 800;
  color: #9397a2;
}
.main_sec_text02 {
  font-family: "Pretendard";
  font-weight: 800;
  font-size: 3rem;
  text-align: center;
  color: #1d2232;
  margin: 80px 0;
}
.btn_wrap {
  width: fit-content;
  display: block;
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .main_section {
    padding: 0 24px;
    box-sizing: border-box;
  }
  .main_sec_text p,
  .main_sec_text02 {
    font-size: 2.125rem;
  }
}
@media (max-width: 768px) {
  .main_section {
    margin: 100px auto;
  }
  .main_sec_text p,
  .main_sec_text02 {
    font-size: 1.25rem;
  }
  .main_sec_text02 {
    margin: 40px 0;
  }
  .background_circle {
    width: 157px;
    height: 157px;
    filter: blur(50px);
    right: -10%;
  }
}
</style>

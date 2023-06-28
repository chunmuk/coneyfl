<template>
  <section class="main_section">
    <div class="background_circle"></div>
    <div class="main_center">
      <div class="main_sec_text">
        <p>코니가 누릴 수 있는 <span class="bold">혜택은 다양합니다.</span></p>
      </div>

      <div class="main_sec_text02">
        등록만 해놔도 <span class="main_color">원하는 시간</span>에
        <span class="main_color">원하는 양만큼</span><br class="mo_br" />
        <span class="main_color">원하는 업무</span>를 할 수 있어요.
      </div>
      <router-link to="/form" class="btn_wrap">
        <Button>코니 등록하기</Button>
      </router-link>
    </div>
  </section>
</template>

<script>
import Button from "@/components/common/Button.vue";

export default {
  components: {
    Button,
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
.main_sec_text .blod {
  font-weight: 800;
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
@media (max-width: 1300px) {
  .main_section {
    padding: 0 24px;
    box-sizing: border-box;
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
    display: none;
  }
  .mo_br {
    display: none;
  }
}
</style>

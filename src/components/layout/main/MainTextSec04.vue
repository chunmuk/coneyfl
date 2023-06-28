<template>
  <section class="main_section">
    <div class="bg_circle01"></div>
    <div class="bg_circle02"></div>
    <div class="main_center">
      <div class="main_text">
        <p>
          코니플과 수익과 성장을 함께 하고자 하는<br />
          영상제작자 및 크루님들을 찾습니다!
        </p>
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
  margin: 300px 0;
  position: relative;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 9;
}
.main_text {
  font-family: "Pretendard";
  font-weight: 800;
  font-size: 3rem;
  line-height: 150%;
  text-align: center;
  color: var(--font-black);
  margin-bottom: 80px;
}
.bg_circle01 {
  position: absolute;
  width: 652px;
  height: 652px;
  left: 490px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(44, 58, 241, 0.14);
  filter: blur(150px);
}
.bg_circle02 {
  position: absolute;
  width: 520px;
  height: 520px;
  right: 490px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(237, 50, 209, 0.14);
  filter: blur(150px);
}

.btn_wrap {
  width: fit-content;
  display: block;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .main_text {
    font-size: 1.25rem;
  }
  .bg_circle01 {
    width: 270.49px;
    height: 325px;
    filter: blur(100px);
    left: 17%;
  }
  .bg_circle02 {
    width: 215.73px;
    height: 259.2px;
    right: 9%;
    filter: blur(100px);
  }
}
</style>

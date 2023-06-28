<template>
  <section class="main_section">
    <div class="main_center">
      <div class="main_text">
        <p class="main_color">이제 #코니하세요</p>
        <p>새로운 수익과 성장의 경험!</p>
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
  margin: 200px 0;
  position: relative;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
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
.btn_wrap {
  width: fit-content;
  display: block;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .main_section {
    padding: 0 24px;
    box-sizing: border-box;
  }
  .main_text {
    font-size: 1.125rem;
    margin-bottom: 40px;
  }
}
</style>

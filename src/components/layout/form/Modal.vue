<template>
  <div class="modal">
    <div class="modal_bg"></div>
    <div class="modal_content">
      <p class="bold"><slot name="text01"></slot></p>
      <p class="sub_text"><slot name="text02"></slot></p>

      <slot name="btn"></slot>
    </div>
  </div>
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
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.modal_bg {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
}
.modal_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 20px;
}
p.bold {
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 150%;
  text-align: center;
  color: #1d2232;
  margin-bottom: 12px;
}
.sub_text {
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  text-align: center;
  color: #9397a2;
  margin-bottom: 24px;
  word-break: keep-all;
}
@media (max-width: 768px) {
  p.bold {
    font-size: 1rem;
  }
  .sub_text {
    font-size: 0.875rem;
  }
}
</style>

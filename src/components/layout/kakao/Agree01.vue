<template>
  <div class="kakao_box">
    <div class="agree_box">
      <p class="text01"><slot name="tit"></slot></p>
      <p class="text02">
        <slot name="txt"></slot>
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.kakao_box {
  margin-top: 44px;
}
.agree_box {
  padding: 20px 14px;
  box-sizing: border-box;
  background: #f8f8fe;
  border-radius: 12px;
}
.text01 {
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 150%;
  color: #1d2232;
  margin-bottom: 12px;
}
.text02 {
  font-family: "Pretendard";
  font-size: 0.875rem;
  line-height: 150%;
  color: #9397a2;
}
</style>

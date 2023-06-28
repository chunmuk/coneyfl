<template>
  <div class="main_chance_box">
    <div class="chance_img">
      <div class="img_bg"></div>
      <div class="img"><slot name="chance_img"></slot></div>
    </div>
    <div class="chance_text">
      <div class="title"><slot name="title"></slot></div>
      <div class="text"><slot name="text"></slot></div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.main_chance_box {
  width: calc(50% - 30px);
  display: flex;
  align-items: center;
}
.chance_img {
  width: 320px;
  height: 320px;
  position: relative;
  border-radius: 100px;
  overflow: hidden;
  flex-shrink: 0;
}
.img_bg {
  width: 252px;
  height: 252px;
  position: absolute;
  background: #f3f4fe;
  left: 0;
  bottom: 0;
  border-radius: 100px;
}
.chance_img .img {
  position: absolute;
  z-index: 9;
  bottom: 0;
  right: 0;
}
.chance_text {
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-family: "Pretendard";
  line-height: 150%;
  word-break: keep-all;
}
.title {
  font-weight: 700;
  font-size: 2.125rem;
  color: var(--font-black);
}
.text {
  font-weight: 400;
  font-size: 1.25rem;
  color: #9397a2;
}
@media (max-width: 768px) {
  .title {
    font-size: 1.25rem;
  }
  .text {
    font-size: 0.875rem;
  }

  .chance_img {
    width: 185px;
    height: 185px;
    border-radius: 30%;
  }

  .img_bg {
    width: 144px;
    height: 144px;
    border-radius: 30%;
  }
}
</style>

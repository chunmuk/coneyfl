<template>
  <div class="flex_wrap">
    <div class="text_container">
      <div class="text_wrap">
        <div class="text01">
          <slot name="text01"></slot>
        </div>
      </div>
      <div class="text_wrap">
        <div class="text02">
          <slot name="text02"></slot>
        </div>
        <div class="text03">
          <slot name="text03"></slot>
        </div>
      </div>
    </div>
    <div class="img_wrap">
      <slot name="img"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex_wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin: 200px 0;
}
.flex_wrap.reverse {
  flex-direction: row-reverse;
}
.text_container {
  width: calc(50% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  opacity: 0;
  transform: translateX(-10%);
}
.flex_wrap.reverse .text_container {
  transform: translateX(10%);
}
.img_wrap {
  width: 640px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4fe;
  /* border-radius: 200px; */
  transform: translateY(100px);
  opacity: 0;
}
.text01 {
  font-family: "Pretendard";
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
  color: #1d2232;
}
.text02 {
  font-family: "Pretendard";
  font-size: 1.5rem;
  line-height: 150%;
  color: #9397a2;
  margin-bottom: 60px;
}
.text03 {
  font-family: "Pretendard";
  font-size: 1.5rem;
  line-height: 150%;
  color: var(--font-black);
  font-weight: 700;
}
@media (max-width: 1024px) {
  .flex_wrap,
  .flex_wrap.reverse {
    flex-direction: column;
  }
  .text_container {
    width: 100%;
    text-align: center;
  }
  .img_wrap {
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .flex_wrap {
    margin: 100px 0;
    gap: 30px;
  }
  .img_wrap {
    width: calc(100% - 56px);
    max-width: 250px;
    height: auto;
    aspect-ratio: 1;
  }
  .text_container {
    gap: 32px;
  }
  .text01 {
    font-size: 1.125rem;
  }
  .text02,
  .text03 {
    font-size: 0.875rem;
  }
  .text02 {
    margin-bottom: 30px;
  }
}
</style>

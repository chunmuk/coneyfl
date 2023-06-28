<template>
  <section class="more_section">
    <div class="more_center">
      <div class="more_text">
        <p class="font_gray">이제 외주하지 마세요!</p>
        <p class="main_color">코니! 하세요!</p>
        <p>남는 일을 싸게, 빨리 해달라고 요청하지 않습니다!</p>
      </div>
      <img src="/images/more_img02.png" />
      <div class="more_text_btm">
        기존 외주는 회사에서 소화하기 힘든 일,<br />
        즉, 넘치는 일을 싸게(더 싸게), 빨리(더 빨리) 처리해 주는 경우가
        많습니다.<br />
        코니는 외주가 아닙니다.
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.more_section {
  width: 100%;
  background: #f8f8fe;
  padding: 80px 0;
}
.more_center {
  width: 100%;
  max-width: 1280px;
  margin: 100px auto;
  text-align: center;
}
.more_text {
  font-family: "Pretendard";
  font-size: 3rem;
  line-height: 150%;
  font-weight: 800;
  text-align: center;
  color: var(--font-black);
}
.more_center img {
  margin: 80px auto 100px;
}
.more_text_btm {
  font-family: "Pretendard";
  font-size: 1.5rem;

  line-height: 150%;
  text-align: center;
  color: var(--font-black);
}
.font_gray {
  color: #9397a2;
}
@media (max-width: 1300px) {
  .more_center {
    padding: 0 24px;
    box-sizing: border-box;
  }
}
@media (max-width: 1024px) {
  .more_center img {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .more_section {
    padding: 60px 0;
  }
  .more_center {
    margin: 0;
  }
  .more_text {
    font-size: 1.25rem;
  }
  .more_text_btm {
    width: 70%;
    margin: 0 auto;
    font-size: 0.875rem;
  }
}
</style>

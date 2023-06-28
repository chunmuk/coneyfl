<template>
  <section class="more_section">
    <div class="more_center">
      <div class="more_text">
        <p>조건 충족이 되면</p>
        <p class="bold">
          업무방식 선택과 이동이 자유로운<br />
          똑똑한 영상크루들을 위한 수익·성장 플랫폼
        </p>
      </div>
      <img src="/images/more_img01_1.png" />
      <div class="more_text_btm">
        코니플은 SMART MANAGING 서비스입니다.<br />
        영상크루들의 플레이를 돕고, 플렉스를 지원하며 수익과 성장에 플러스가
        되는<br />
        새로운 방식과 새로운 경험, 새로운 성장을 돕는 매니징을 연구합니다.
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.more_section {
  width: 100%;
}
.more_center {
  width: 100%;
  max-width: 1280px;
  margin: 100px auto 200px;
  text-align: center;
}
.more_text {
  font-family: "Pretendard";
  font-size: 3rem;
  line-height: 150%;
  text-align: center;
  color: var(--font-black);
}
.more_center img {
  margin: 80px auto;
}
.more_text_btm {
  font-family: "Pretendard";
  font-size: 1.5rem;
  line-height: 150%;
  text-align: center;
  color: var(--font-black);
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
  .more_center {
    margin: 50px auto 100px;
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

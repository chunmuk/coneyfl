<template>
  <section class="more_section">
    <div class="more_center">
      <div class="more_text">
        <p class="bold">
          코니 전용 워크 시스템을 활용해 편리하고 쉽게<br />
          프로젝트를 관리하고 전담 매니저와 소통합니다.
        </p>
      </div>
      <img src="/images/more_img03.png" />
      <div class="more_text_btm">
        코니플과 함께 하는 영상크루들은 프리랜서(free-lancer)가 아니라
        프로랜서(pro-lancer)입니다.
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
    margin: 100px auto;
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

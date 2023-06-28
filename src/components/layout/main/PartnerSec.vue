<template>
  <section class="main_partner">
    <div class="main_center">
      <div class="partner_title">
        <p class="main_color">코니플coneyfl과 함께하는</p>
        <p>플래닝 파트너</p>
      </div>
      <div class="partner_wrap">
        <div class="img_wrap" v-for="i in 21">
          <img :src="`/images/partner${i}.png`" />
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.main_partner {
  width: 100%;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 200px auto 100px;
}
.partner_title {
  font-family: "Pretendard";
  font-weight: 800;
  font-size: 3rem;
  line-height: 150%;
  text-align: center;
}
.partner_wrap {
  width: 100%;
  max-width: 786px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 80px auto 0;
}
.img_wrap {
  width: calc(33.33% - 14px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.partner_wrap .img_wrap img {
  flex-shrink: 0;
  object-fit: contain;
}
@media (max-width: 768px) {
  .partner_wrap {
    padding: 0 24px;
    box-sizing: border-box;
  }
  .partner_wrap .img_wrap img {
    width: 100%;
    max-height: 50px;
  }
  .partner_title {
    font-size: 1.25rem;
  }
}
</style>

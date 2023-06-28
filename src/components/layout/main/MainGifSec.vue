<template>
  <section class="main_move_section">
    <div class="bg_circle01"></div>
    <div class="bg_circle02"></div>
    <div class="main_center">
      <img src="/images/mainGif.gif" />
    </div>
  </section>
</template>

<script></script>

<style scoped>
.main_move_section {
  width: 100%;
  position: relative;
  margin: 200px 0;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}
.bg_circle01 {
  width: 652px;
  height: 652px;
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(44, 58, 241, 0.14);
  filter: blur(150px);
}
.bg_circle02 {
  width: 520px;
  height: 520px;
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(237, 50, 209, 0.14);
  filter: blur(150px);
}
.main_center img {
  width: 100%;
}
@media (max-width: 1300px) {
  .main_move_section {
    padding: 0 24px;
    box-sizing: border-box;
  }
}
@media (max-width: 768px) {
  .main_move_section {
    margin: 100px 0;
  }
  .bg_circle01 {
    width: 270.49px;
    height: 326px;

    filter: blur(100px);
  }
  .bg_circle02 {
    width: 215.73px;
    height: 260px;

    filter: blur(100px);
  }
}
</style>

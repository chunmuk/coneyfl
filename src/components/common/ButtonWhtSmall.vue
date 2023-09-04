<template>
  <div class="slide_btn">
    <div class="btn_text"><slot></slot></div>
  </div>
</template>

<script></script>

<style scoped>
.slide_btn {
  display: flex;
  align-items: center;
  width: 188px;
  height: 58px;
  position: relative;
  border: 1px solid transparent;
  border-radius: 100px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(90deg, #2c3af1 0%, #ed32d1 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.18);
  transition: box-shadow 0.3s ease-in;
  margin: 0 auto;
  cursor: pointer;
  box-sizing: border-box;
}
.btn_text {
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
.slide_btn:hover {
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.36);
}
@media (max-width: 768px) {
  .slide_btn {
    width: 140px;
    height: 45px;
  }
  .btn_text {
    font-size: 16px;
  }
}

</style>

<template>
  <div>
    <div class="slide_btn">
      <div class="slide_arr">
        <img src="/images/slide_arr.svg" />
      </div>
      <div class="btn_text"><slot></slot></div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.slide_btn {
  display: flex;
  align-items: center;
  width: 314px;
  height: 92px;
  position: relative;
  border: 3px solid transparent;
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
.slide_arr {
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -1px;
  left: -2px;
  border-radius: 100%;
  background: linear-gradient(90deg, #2c3af1 0%, #ed32d1 100%);
}
.btn_text {
  width: 100%;
  background: linear-gradient(90deg, #2c3af1 0.38%, #ed32d1 100.38%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
  margin-left: 40px;
}
.slide_btn:hover {
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.36);
}
@media (max-width: 768px) {
  .slide_btn {
    width: 188px;
    height: 58px;
  }
  .slide_arr {
    width: 56px;
    height: 56px;
  }
  .btn_text {
    font-size: 0.875rem;
    margin-left: 30px;
  }
}
</style>

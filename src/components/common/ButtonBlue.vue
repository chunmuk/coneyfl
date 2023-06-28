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
  width: 314px;
  height: 92px;
  border-radius: 100px;
  background: linear-gradient(90deg, #00d1ff 0%, #2c3af1 100%);
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.18);
  transition: box-shadow 0.3s ease-in;
  margin: 0 auto;
  cursor: pointer;
}

.btn_text {
  width: 100%;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
  color: #fff;
}
.slide_btn:hover {
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.36);
}
@media (max-width: 768px) {
  .slide_btn {
    width: 188px;
    height: 58px;
  }
  .btn_text {
    font-size: 1.063rem;
  }
}
</style>

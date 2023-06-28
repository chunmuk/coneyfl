<template>
  <header class="header">
    <div class="hader_center">
      <router-link to="/"><img src="/images/h_logo.svg" /></router-link>

      <router-link to="/signup">
        <div class="btn_sign_up">
          <img src="/images/signupBtn.svg" />
          회원가입
        </div>
      </router-link>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  width: 100%;
  margin-top: 48px;
  position: relative;
  z-index: 9;
}
.hader_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn_sign_up {
  padding: 8px 16px;
  box-sizing: border-box;
  background: #ed32d1;
  border-radius: 50px;
  color: #fff;
  display: flex;
  font-size: 1.25rem;
  align-items: center;
  gap: 5px;
}
@media (max-width: 1300px) {
  .hader_center {
    padding: 0 50px;
    box-sizing: border-box;
  }
}
@media (max-width: 768px) {
  .hader_center {
    padding: 0 24px;
    text-align: center;
  }
  .btn_sign_up {
    font-size: 0.875rem;
  }
}
</style>

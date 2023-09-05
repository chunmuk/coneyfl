<template>
  <header class="header">
    <div class="hader_center">
      <router-link to="/"><img src="/images/h_logo.png" /></router-link>

      <div class="flexWrap pcMenu">
        <!--
        <router-link to="/login">
          <div class="header_btn btn_login">
            <img src="/images/loginBtn.svg" />
            로그인
          </div>
        </router-link>
      -->
      

        <router-link to="/form">
          <div class="header_btn btn_sign_up">
            <img src="/images/signupBtn.svg" />
            회원가입
          </div>
        </router-link>
      </div>
      
      
      <div class="flexWrap mobileMenu">
        <!--
        <router-link to="/login">
          <div class="header_btn">
            <img src="/images/loginBtn_m.svg" />
          </div>
        </router-link>
        -->

        <router-link to="/form">
          <div class="header_btn">
            <img src="/images/signupBtn_m.svg" />
          </div>
        </router-link>
      </div>

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
.hader_center .flexWrap {
  display:flex;
}
.header .mobileMenu {
  display: none;
}
.header_btn{
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 50px;
  color: #fff;
  display: flex;
  font-size: 1.25rem;
  align-items: center;
  gap: 5px;
}
.btn_sign_up {
  background: #ed32d1;
}
.btn_login {
  background: #9397a2;
  margin-right:10px;
}
@media (max-width: 1300px) {
  .hader_center {
    padding: 0 50px;
    box-sizing: border-box;
  }
}
@media (max-width: 768px) {
  .header .mobileMenu {
  display: flex;
}
.header .pcMenu {
  display: none;
}
  .hader_center {
    padding: 0 24px;
    text-align: center;
  }
  
  .header_btn {
    font-size: 0.875rem;
    padding: 8px 10px;
  }
}
</style>

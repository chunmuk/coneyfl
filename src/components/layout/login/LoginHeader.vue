<template>
  <header>
    <div class="signup_head">
      <router-link to="/">
        <img src="/images/h_logo.png" class="signup_logo" />
      </router-link>
    </div>
    <div class="signup_title">
      <slot name="title"></slot>
    </div>
    <div class="signup_sub">
      <slot name="sub_txt"></slot>
    </div>
  </header>
</template>

<script></script>

<style scoped>
header {
  background-color: #fff;
  padding: 50px 24px 30px;
  box-sizing: border-box;
}
.signup_head {
  margin: 0 auto 42px;
  text-align: center;
}
.signup_title {
  font-family: "Pretendard";
  font-weight: 800;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: var(--font-black);
}
.signup_sub {
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
  color: #1d2232;
  margin-top:10px;
  margin-bottom: 28px;
}
.signup_logo {
  margin-left:30px;  
}
</style>

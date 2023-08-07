<template>
  <footer class="footer">
    <div class="footer_center">
      <div class="footer_wrap">
        <div class="foot_left">
          <router-link to="/"><img src="/images/foot_logo.png" class="signup_logo"/></router-link>
        </div>
        <div class="foot_right">
          <ul>
            <li><router-link to="/more">회사소개</router-link></li>
            <li><router-link to="/term2">이용약관</router-link></li>
            <li class="bold"><router-link to="/term">개인정보처리방침</router-link></li>
            <!--<li><a href="">고객센터</a></li>-->
          </ul>
        </div>
      </div>
      <p class="bottom_text">By experience, Through discovery!</p>
    </div>
    <p class="copyright">(주)우수아이아 | 175-88-03065<br>서울시 금천구 디지털10길,9 G벨리테크플랫폼 7F</p>
    <p class="copyright">이용문의 : info@usuaia.me</p>
    <p class="copyright">&copy; USUAIA Inc.</p>
  </footer>
</template>

<script></script>

<style scoped>
.footer {
  width: 100%;
  background-color: #1a1a1a;
  padding: 35px 24px 40px;
  box-sizing: border-box;
}
.footer_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 0 12px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(225, 225, 225, 0.2);
}
.footer_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 35px;
}
.footer_wrap .signup_logo {
  margin-left:30px;
}
.foot_right ul {
  display: flex;
  gap: 32px;
  font-size: 0.75rem;
  color: #ffffff;
  font-family: "Pretendard";
  font-weight: 400;
}
.bottom_text {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #ffffff;
  margin-top: 30px;
  text-align: center;
}
.copyright {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 12px;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  color: #9397a2;
  text-align: center;
}
</style>

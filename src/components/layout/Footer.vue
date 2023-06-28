<template>
  <footer class="footer">
    <div class="footer_center">
      <div class="footer_wrap">
        <div class="foot_left">
          <img src="/images/foot_logo.svg" />
        </div>
        <div class="foot_right">
          <ul>
            <li><a href="">회사소개</a></li>
            <li><a href="">이용약관</a></li>
            <li class="bold"><a href="">개인정보처리방침</a></li>
            <li><a href="">고객센터</a></li>
          </ul>
        </div>
      </div>
      <p class="bottom_text">By experience, Through discovery!</p>
    </div>
    <p class="copyright">(주)우수아이아 | 175-88-03065 | 서울시 금천구 디지털10길,9 G벨리테크플랫폼 7F</p>
    <p class="copyright">&copy; USUAIA Inc.</p>
  </footer>
</template>

<script></script>

<style scoped>
.footer {
  width: 100%;
  background-color: #1a1a1a;
  padding: 40px 0 100px;
}
.footer_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(225, 225, 225, 0.2);
}
.footer_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.foot_right ul {
  display: flex;
  gap: 32px;
  color: #ffffff;
  font-family: "Pretendard";
  font-weight: 400;
}
.bottom_text {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #ffffff;
  margin-top: 30px;
}
.copyright {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 12px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #9397a2;
}
@media (max-width: 1300px) {
  .footer_center {
    padding: 40px 25px 100px;
    box-sizing: border-box;
  }
  .copyright {
    padding: 12px 24px 0;
    box-sizing: border-box;
  }
}
@media (max-width: 768px) {
  .footer {
    padding: 35px 24px 40px;
    box-sizing: border-box;
  }
  .footer_center {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 0 0 12px;
  }
  .footer_wrap {
    flex-direction: column;
    gap: 35px;
  }
  .bottom_text,
  .copyright {
    text-align: center;
  }
}
</style>

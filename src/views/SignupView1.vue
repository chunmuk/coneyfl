<template>
  <section class="signup">
    <div class="sub_center">
      <SignupHeader>
        <template v-slot:title>
          코니로 등록하고<br />다양한 혜택을 누리세요!
        </template>
      </SignupHeader>

      <div class="signup_wrap">
        <p class="or_p">SNS 계정으로 시작하기</p>

        <div class="sns_wrap">
          <router-link to="/signup3">
            <div class="sns_row">
              <div id="kakao" class="sns_btn">
                <img src="/images/kakaotalk.svg" />
              </div>
              <p>카카오톡</p>
            </div>
          </router-link>
          <router-link to="/signup3">
            <div class="sns_row">
              <div id="goggle" class="sns_btn">
                <img src="/images/google.svg" />
              </div>
              <p>구글</p>
            </div>
          </router-link>
        </div>
        
        <p class="or_p">이메일로 시작하기</p>

        <form name="frm">
          <div class="signup_row">
            <p>이름<span class="essential"></span></p>
            <input type="text" name="name" ref="nameInput" placeholder="이름을 입력해주세요."/>
          </div>

          <div class="signup_row signup_row02">
            <p>연락처<span class="essential"></span></p>
            <div class="flexWrap">
              <input type="phone" ref="phoneInput" placeholder="'-' 없이 숫자만"/>
              <a class="grayBtn" href="">인증번호 전송</a>
            </div>
          </div>

          <div class="signup_row signup_row02">
            <p>인증번호<span class="essential"></span></p>
            <div class="flexWrap">
              <input type="cNum" ref="cNumInput" placeholder="인증번호 입력"/>
              <a class="whiteBtn" href="">인증번호 확인</a>
            </div>
          </div>

          <div class="signup_row">
            <p>이메일<span class="essential"></span></p>
            <input type="email" ref="emailInput" placeholder="이메일을 입력해주세요."/>
          </div>

          <div class="signup_row">
            <p>비밀번호<span class="essential"></span></p>
            <input type="pwd" ref="pwdInput" placeholder="비밀번호를 입력해주세요."/>
          </div>

          <div class="signup_row">
            <p>비밀번호 확인<span class="essential"></span></p>
            <input type="repwd" ref="repwdInput" placeholder="비밀번호를 입력해주세요."/>
          </div>

          <div class="signup_btn" @click="chkForm">코니플 가입하기</div>
          <div class="lineBox">
            <div class="grayLine"></div>
            <div class="txtBox">or</div>
            <div class="grayLine"></div>
          </div>
            
          <router-link to="/login">
           <div class="login_btn">로그인</div>
          </router-link>
        </form>
      </div>
      <SingupFooter></SingupFooter>
    </div>
  </section>
</template>

<script>
import SignupHeader from "@/components/layout/signup/SignupHeader.vue";
import SingupFooter from "@/components/layout/signup/SingupFooter.vue";
import Button from "@/components/common/Button.vue";
import router from "../router";

export default {
  components: {
    SignupHeader,
    SingupFooter,
    Button,
  },
  methods: {
    chkForm() {
      const emailInput = this.$refs.emailInput;
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValue) {
        alert("이메일을 입력해주세요.");
        emailInput.focus();
        return;
      }
      if (!emailRegex.test(emailValue)) {
        alert("올바른 이메일 주소를 입력해주세요.");
        emailInput.focus();
        return;
      }

      const pwdInput = this.$refs.pwdInput;
      const pwdValue = pwdInput.value.trim();

      if (!pwdValue) {
        alert("비밀번호를 입력해주세요.");
        pwdValue.focus();
        return;
      }
      router.push("/signupSuccess");
    },
  },
};
</script>

<style scoped>
.signup {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4fe;
  padding: 85px 0;
  box-sizing: border-box;
}
.sub_center {
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
}
.signup_wrap {
  width: 100%;
  background-color: #fff;
  padding: 0px 24px 60px;
  box-sizing: border-box;
}
.signup_row {
  width: 100%;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;
  color: #1d2232;
  margin-bottom: 12px;
}
.signup_row > p {
  position: relative;
}
.signup_row .essential{
  width: 4px;
  height: 4px;
  background: #2c3af1;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top:0;
}
.signup_row input {
  width: 100%;
  height: 48px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 8px;
  padding: 12px;
  box-sizing: border-box;
}
.signup_row02 .flexWrap{
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.signup_row02 input {
  width: 67%;
  height: 48px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 8px;
  padding: 12px;
  box-sizing: border-box;
}
.signup_row02 .flexWrap .grayBtn {
  width:30%;
  height:48px;
  margin-top:8px;
  font-size:12px;
  font-weight: 400;
  color:#fff;
  line-height: 48px;
  text-align: center;
  display: block;
  background: #9397A2;
  border-radius: 5px;
}
.signup_row02 .flexWrap .whiteBtn {
  width:30%;
  height:48px;
  margin-top:8px;
  font-size:12px;
  font-weight: 400;
  color:#9397A2;
  line-height: 48px;
  text-align: center;
  display: block;
  background: #fff;
  border:1px solid #d9d9d9;
  border-radius: 5px;
}
.signup_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 51px;
  border-radius: 100px;
  background: linear-gradient(90deg, #2c3af1 0%, #ed32d1 100%);
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.18);
  transition: box-shadow 0.3s ease-in;
  margin: 0 auto;
  cursor: pointer;
  width: 100%;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  margin-top: 32px;
}
.signup_btn:hover {
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.36);
}
.login_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 51px;
  border: 3px solid transparent;
  border-radius: 100px;
  background-image: linear-gradient(#fff, #fff), linear-gradient(90deg, #2c3af1 0%, #ed32d1 100%); 
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.18);
  transition: box-shadow 0.3s ease-in;
  margin: 0 auto;
  cursor: pointer;
  width: 100%;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  color: #000;
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.or_p {
  margin: 0 auto 20px;
  font-family: "Pretendard";
  font-size: 0.875rem;
  line-height: 150%;
  text-align: center;
  color: #1D2232;
  font-weight:500;
}
.lineBox {
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:15px 0;
}
.lineBox .grayLine {
  width:44%;
  height:1px;
  background: #e1e1e1;
}
.sns_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding-bottom:25px;
  border-bottom:1px dotted #e1e1e1;
  margin-bottom:30px;
}
.sns_row {
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid rgba(147, 151, 162, 0.32);
  border-radius: 100px;
  padding: 8px 24px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sns_btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
}
.sns_btn img {
  width: 18px;
}
#kakao {
  background: #fee500;
}

#goggle img {
  width: 25px;
}
@media (max-width: 768px) {
  .signup {
    padding: 0;
  }
  .sub_center {
    max-width: unset;
  }
}
</style>

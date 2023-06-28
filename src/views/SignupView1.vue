<template>
  <section class="signup">
    <div class="sub_center">
      <SignupHeader>
        <template v-slot:title>
          코니로 등록하고<br />다양한 혜택을 누리세요!
        </template>
      </SignupHeader>
      <form name="frm">
        <div class="signup_wrap">
          <div class="signup_row">
            <p>이메일</p>
            <input type="text" name="email" ref="emailInput" />
          </div>
          <div class="signup_row">
            <p>비밀번호</p>
            <input type="password" ref="passwordInput" />
          </div>

          <div class="signup_btn" @click="chkForm">코니플 가입하기</div>

          <p class="or_p">또는</p>

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
        </div>
      </form>
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

      const passwordInput = this.$refs.passwordInput;
      const passwordValue = passwordInput.value.trim();

      if (!passwordValue) {
        alert("비밀번호를 입력해주세요.");
        passwordInput.focus();
        return;
      }
      router.push("/signup2");
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
.signup_row input {
  width: 100%;
  height: 48px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 8px;
  padding: 12px;
  box-sizing: border-box;
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
.or_p {
  margin: 32px auto 12px;
  font-family: "Pretendard";
  font-size: 0.875rem;
  line-height: 150%;
  text-align: center;
  color: #9397a2;
}
.sns_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
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

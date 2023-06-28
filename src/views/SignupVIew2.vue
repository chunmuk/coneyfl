<template>
  <section class="signup">
    <div class="sub_center">
      <SignupHeader>
        <template v-slot:title>
          이메일로 발송된<br />
          인증코드를 입력해주세요.
        </template>
      </SignupHeader>
      <form>
        <div class="signup_wrap">
          <div class="signup_row">
            <p>인증코드</p>
            <input type="text" ref="codeInput" />
          </div>

          <div class="signup_btn" @click="chkForm">다음 단계로</div>
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
      const codeInput = this.$refs.codeInput;
      const codelValue = codeInput.value.trim();

      if (!codelValue) {
        alert("인증코드를 입력해주세요.");
        codeInput.focus();
        return;
      }
      router.push("/signup3");
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
  padding: 0px 24px 160px;
  box-sizing: border-box;
}
.signup_row {
  width: 100%;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;
  color: #1d2232;
  margin-bottom: 32px;
}
.signup_row input {
  width: 100%;
  height: 48px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 8px;
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
}
.signup_btn:hover {
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.36);
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

<template>
  <section class="login">
    <div class="sub_center">
      <Modal03 v-if="showModal" @close="showModal = false">
        <!-- 모달 내용 -->
        <template v-slot:modal_txt>일치하는 정보가 없습니다.</template>
        <template v-slot:modal_subtxt>입력 정보를 다시 확인해주세요.</template>
        <template v-slot:modal_close_txt01><ButtonBlue @click="closeModal">확인</ButtonBlue></template>
      </Modal03>

      <LoginHeader>
        <template v-slot:title>
          비밀번호 찾기
        </template>
        <template v-slot:sub_txt>
          비밀번호를 찾기 위해 아래의 정보를 입력해주세요.
        </template>
      </LoginHeader>

      <form name="frm">
        <div class="login_wrap">
          <div class="login_row">
            <p>이름</p>
            <input type="text" name="name" ref="emailInput" placeholder="김길동"/>
          </div>
          <div class="login_row">
            <p>이메일</p>
            <input type="text" name="email" ref="emailInput" placeholder="ex) abcd@gamil.com" />
          </div>
          <div class="login_btn" @click="showModal = true">비밀번호 찾기</div>
        </div>
      </form>
      <LoginFooter></LoginFooter>
    </div>
  </section>
</template>

<script>
import LoginHeader from "@/components/layout/login/LoginHeader.vue";
import LoginFooter from "@/components/layout/login/LoginFooter.vue";
import Button from "@/components/common/Button.vue";
import ButtonBlue from "@/components/common/ButtonBlue.vue";
import ButtonWht from "@/components/common/ButtonWht.vue";
import Modal03 from "@/components/common/Modal03.vue";
import router from "../router";

export default {
  components: {
    LoginHeader,
    LoginFooter,
    Button,
    ButtonBlue,
    ButtonWht,
    Modal03
  },
  data() {
    return {
      showModal: false,
    };
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
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.login {
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
.login_wrap {
  width: 100%;
  background-color: #fff;
  padding: 0px 24px 100px;
  box-sizing: border-box;
}
.login_row {
  width: 100%;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;
  color: #1d2232;
  margin-bottom: 12px;
}
.login_row input {
  width: 100%;
  height: 48px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 8px;
  padding: 12px;
  box-sizing: border-box;
}
.login_btn {
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
.login_btn:hover {
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.36);
}

@media (max-width: 768px) {
  .login {
    padding: 0;
  }
  .sub_center {
    max-width: unset;
  }
}
</style>

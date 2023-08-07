<template>
  <section class="login">
    <div class="sub_center">
      <Modal02 v-if="showModal" @close="showModal = false">
        <!-- 모달 내용 -->
        <template v-slot:modal_txt>아이디 찾기가 완료되었습니다.</template>
        <template v-slot:modal_subtxt>abcd***@gmail.com</template>
        <template v-slot:modal_close_txt01><ButtonBlue @click="closeModal"><router-link to="/login">로그인</router-link></ButtonBlue></template>
        <template v-slot:modal_close_txt02><ButtonWht @click="closeModal"><router-link to="/searchPwd">비밀번호 찾기</router-link></ButtonWht></template>
      </Modal02>
      
      <LoginHeader>
        <template v-slot:title>
          아이디 찾기
        </template>
        <template v-slot:sub_txt>
          아이디를 찾기 위해 아래의 정보를 입력해주세요.
        </template>        
      </LoginHeader>

      <form name="frm">
        <div class="login_wrap">
          <div class="login_row">
            <p>이름</p>
            <input type="text" name="name" ref="nameInput" placeholder="김길동"/>
          </div>
          <div class="login_row">
            <p>연락처</p>
            <input type="text" ref="phoneInput" placeholder="010-1234-567"/>
          </div>
          <div class="login_btn" @click="showModal = true">아이디 찾기</div>
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
import Modal02 from "@/components/common/Modal02.vue";
import router from "../router";

export default {
  components: {
    LoginHeader,
    LoginFooter,
    Button,
    ButtonBlue,
    ButtonWht,
    Modal02
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

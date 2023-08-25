<template>
  <section class="login">
    <div class="sub_center">
      <Modal01 v-if="showModal" @close="showModal = false">
        <!-- 모달 내용 -->
        <template v-slot:modal_txt>{{ modalTxt }}</template>
        <template v-slot:modal_close_txt01><ButtonBlue @click="closeModal">{{ modalCloseTxt }}</ButtonBlue></template>
      </Modal01>
      
      <LoginHeader>
        <template v-slot:title>
          로그인
        </template>
      </LoginHeader>
      
      <div class="login_wrap">
        <p class="or_p">SNS 계정으로 시작하기</p>
        <div class="sns_wrap">
          <div class="sns_row" @click="showModal = true">
            <div id="kakao" class="sns_btn">
              <img src="/images/kakaotalk.svg" />
            </div>
            <p>카카오톡</p>
          </div>
        
          <div class="sns_row" @click="showModal = true">
            <div id="goggle" class="sns_btn">
              <img src="/images/google.svg" />
            </div>
            <p>구글</p>
          </div>
        </div>

        <form name="frm">
          
          <div class="login_row">
            <p>이메일</p>
            <input type="text" name="email" ref="emailInput" placeholder="이메일을 입력해주세요."/>
          </div>
          <div class="login_row">
            <p>비밀번호</p>
            <input type="password" ref="passwordInput" placeholder="비밀번호를 입력해주세요." />
          </div>

          <div class="login_btn" @click="chkForm">코니플 시작하기</div>

          <p class="or_p"></p>
          <!--
          <div class="sns_wrap">
            <router-link to="/login3">
              <div class="sns_row">
                <div id="kakao" class="sns_btn">
                  <img src="/images/kakaotalk.svg" />
                </div>
                <p>카카오톡</p>
              </div>
            </router-link>
            <router-link to="/login3">
              <div class="sns_row">
                <div id="goggle" class="sns_btn">
                  <img src="/images/google.svg" />
                </div>
                <p>구글</p>
              </div>
            </router-link>
          </div>
          -->
          <div class="or_p">
            <div class="flexWrap">
              <div>
                <router-link to="/searchId">아이디 찾기</router-link>
              </div>
              <div>
                <router-link to="/searchPwd">비밀번호 찾기</router-link>
              </div>
              <div>
                <router-link to="/signup">회원가입</router-link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <LoginFooter></LoginFooter>
    </div>
  </section>
</template>

<script>
import LoginHeader from "@/components/layout/login/LoginHeader.vue";
import LoginFooter from "@/components/layout/login/LoginFooter.vue";
import ButtonBlue from "@/components/common/ButtonBlue.vue";
import ButtonWht from "@/components/common/ButtonWht.vue";
import Button from "@/components/common/Button.vue";
import Modal01 from "@/components/common/Modal01.vue";
import router from "../router";

export default {
  components: {
    LoginHeader,
    LoginFooter,
    ButtonBlue,
    ButtonWht,
    Button,
    Modal01
  },
  data() {
    return {
      showModal: false,
      modalTxt: "",
      modalCloseTxt: "",
    };
  },
  methods: {
    chkForm() {
      const emailInput = this.$refs.emailInput;
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValue) {
        this.showModal = true;
        this.modalTxt = "이메일을 입력해주세요";
        this.modalCloseTxt = "확인";
        emailInput.focus();
        return;
      }
      /*
      if (!emailRegex.test(emailValue)) {
        alert("올바른 이메일 주소를 입력해주세요.");
        emailInput.focus();
        return;
      }
      */
      const passwordInput = this.$refs.passwordInput;
      const passwordValue = passwordInput.value.trim();

      if (!passwordValue) {
        this.showModal = true;
        this.modalTxt = "비밀번호를 입력해주세요";
        this.modalCloseTxt = "확인";
        passwordInput.focus();
        return;
      }

      this.showModal = true;
      this.modalTxt = "서비스 준비중입니다.";
      this.modalCloseTxt = "확인";
      //router.push("/signup2");
    },
    closeModal() {
      this.showModal = false;
      this.modalTxt = "서비스 준비중입니다.";
      this.modalCloseTxt = "확인";
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
  padding: 0px 24px 60px;
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
.or_p {
  margin: 0 auto 20px;
  font-family: "Pretendard";
  font-size: 0.875rem;
  line-height: 150%;
  text-align: center;
  color: #1D2232;
  font-weight:500;
}
.or_p .flexWrap{
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.or_p .flexWrap > div{
  width:32%;
}
.or_p .flexWrap > div:nth-child(2){
  border-left:1px solid rgba(147, 151, 162, 0.32);
  border-right:1px solid rgba(147, 151, 162, 0.32);
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
  .login {
    padding: 0;
  }
  .sub_center {
    max-width: unset;
  }
}
</style>

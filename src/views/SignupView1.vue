<template>
  <section class="signup">
    <div class="sub_center">
      <Modal01 v-if="showModal" @close="showModal = false">
        <!-- 모달 내용 -->
        <template v-slot:modal_txt>서비스 준비중입니다.</template>
        <template v-slot:modal_close_txt01><ButtonBlue @click="closeModal">확인</ButtonBlue></template>
      </Modal01>

      <SignupHeader>
        <template v-slot:title>
          코니로 등록하고<br />다양한 혜택을 누리세요!
        </template>
      </SignupHeader>

      <div class="signup_wrap">
        <p class="or_p">SNS 계정으로 시작하기</p>
        <!--
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
        -->
        <div class="sns_wrap">
          <div class="sns_row" @click="showModal = true">
            <div id="kakao" class="sns_btn">
              <img src="/images/kakaotalk.svg" />
            </div>
            <p>카카오톡</p>
          </div>
          <!--
          <div class="sns_row" @click="showModal = true">
            <div id="goggle" class="sns_btn">
              <img src="/images/google.svg" />
            </div>
            <p>구글</p>
          </div>
          -->
        </div>
        
        <p class="or_p">이메일로 시작하기</p>

        <form name="frm">
          <div class="signup_row">
            <p>이름<span class="essential"></span></p>
            <input type="text" name="name" ref="nameInput" @keyup="chkName" placeholder="이름을 입력해주세요."/>
            <span class="status" id="nameStatus"></span>
          </div>

          <div class="signup_row signup_row02">
            <p>연락처<span class="essential"></span></p>
            <div class="flexWrap">
              <input type="text" ref="phoneInput" @keyup="chkphone" placeholder="'-' 없이 숫자만"/>
              <a class="grayBtn" href="javascript:void(0);" @click="clearPhoneStatus">인증번호 전송</a>
            </div>
            <span class="status" id="phoneStatus"></span>
          </div>

          <div class="signup_row signup_row02" v-if="showSignupRow03">
            <p>인증번호<span class="essential"></span></p>
            <div class="flexWrap">
              <input type="text" ref="cNumInput" @keyup="chkcNum" placeholder="인증번호 입력"/>
              <a class="whiteBtn" href="javascript:void(0);">인증번호 확인</a>
            </div>
            <span class="status" id="cNumStatus"></span>
          </div>

          <div class="signup_row">
            <p>이메일<span class="essential"></span></p>
            <input type="email" ref="emailInput" @keyup="chkEmail" placeholder="이메일을 입력해주세요."/>
            <span class="status" id="emailStatus"></span>
          </div>

          <div class="signup_row">
            <p>비밀번호<span class="essential"></span></p>
            <input type="password" ref="pwdInput" @keyup="chkPW" placeholder="비밀번호를 입력해주세요."/>
            <span class="status" id="pwdStatus"></span>
          </div>

          <div class="signup_row">
            <p>비밀번호 확인<span class="essential"></span></p>
            <input type="password" ref="repwdInput" @keyup="rechkPW" placeholder="비밀번호를 입력해주세요."/>
            <span class="status" id="repwdStatus"></span>
          </div>

          <div class="signup_btn" @click="chkForm">코니플 가입하기</div>
          <!-- 
          <div class="lineBox">
            <div class="grayLine"></div>
            <div class="txtBox">or</div>
            <div class="grayLine"></div>
          </div>
           
          <router-link to="/login">
           <div class="login_btn">로그인</div>
          </router-link>
          -->
        </form>
      </div>
      <SingupFooter></SingupFooter>
    </div>
  </section>
</template>


<script>
import SignupHeader from "@/components/layout/signup/SignupHeader.vue";
import SingupFooter from "@/components/layout/signup/SingupFooter.vue";
import ButtonBlue from "@/components/common/ButtonBlue.vue";
import ButtonWht from "@/components/common/ButtonWht.vue";
import Button from "@/components/common/Button.vue";
import Modal01 from "@/components/common/Modal01.vue";
import router from "../router";

export default {
  components: {
    SignupHeader,
    SingupFooter,
    ButtonBlue,
    ButtonWht,
    Button,
    Modal01
  },
  data() {
    return {
      showModal: false,
      showSignupRow03: false,
    };
  },
  methods: {
    chkForm() {
      if (this.chkName() && this.chkphone() && this.chkcNum() && this.chkEmail() && this.chkPW() && this.rechkPW()) {
        router.push("/signupSuccess");
      }     
      
    },
    chkName(){
      const nameInput = this.$refs.nameInput;
      const nameValue = nameInput.value.trim();
      const nameStatus = document.getElementById('nameStatus');

      if (!nameValue) {
        nameStatus.innerHTML = '<img src="/images/error.png" style="margin-top:4px;"> 이름을 입력해주세요.';
        nameStatus.classList.add('c_red');
        nameStatus.classList.remove('c_green');
        nameInput.style.border = '1px solid #E74A3B';
        nameInput.focus();
        return false;
      } else {
        nameStatus.innerHTML = '';
        nameStatus.classList.remove('c_red');
        nameStatus.classList.remove('c_green');
        nameInput.style.border = '1px solid #D9D9D9';
        return true;
      }
    },
    chkphone(){
      const phoneInput = this.$refs.phoneInput;
      const phoneValue = phoneInput.value.trim();
      var phoneStatus = document.getElementById('phoneStatus');

      if(!phoneValue){
        phoneStatus.innerHTML = '<img src="/images/error.png" style="margin-top:4px;"> 연락처를 입력해주세요.';
        phoneStatus.classList.add('c_red');
        phoneStatus.classList.remove('c_green');
        phoneInput.style.border = '1px solid #E74A3B';
        phoneInput.focus();
        return false;
      } else{
        if (!this.showSignupRow03) {
          phoneStatus.innerHTML = '<img src="/images/error.png" style="margin-top:4px;"> 인증번호를 전송해주세요.';
          phoneStatus.classList.add('c_red');
          phoneStatus.classList.remove('c_green');
          phoneInput.style.border = '1px solid #D9D9D9';
          phoneInput.focus();
          return false;
        } else {
          this.showSignupRow03 = true;
          phoneStatus.innerHTML = '';
          phoneStatus.classList.remove('c_red');
          phoneStatus.classList.remove('c_green');
          phoneInput.style.border = '1px solid #D9D9D9';
          return true;
        }

      }
    },
    clearPhoneStatus: function() {
      // phoneStatus.innerHTML 비워줌
      var phoneStatus = document.getElementById('phoneStatus');
      phoneStatus.innerHTML = '';
      this.showSignupRow03 = true;
    },
    chkcNum(){
      const cNumInput = this.$refs.cNumInput;
      const cNumValue = cNumInput.value.trim();
      const cNumStatus = document.getElementById('cNumStatus');

      if (!cNumValue) {
        cNumStatus.innerHTML = '<img src="/images/error.png" style="margin-top:4px;"> 인증번호 불일치';
        cNumStatus.classList.add('c_red');
        cNumStatus.classList.remove('c_green');
        cNumInput.style.border = '1px solid #E74A3B';
        cNumInput.focus();
        return false;
      } else {
        cNumStatus.innerHTML = '<img src="/images/check.png" style="margin-top:4px;"> 인증번호 일치';
        cNumStatus.classList.remove('c_red');
        cNumStatus.classList.add('c_green');
        cNumInput.style.border = '1px solid #1CC88A';
        return true;
      }
    },
    chkEmail(){
      const emailInput = this.$refs.emailInput;
      const emailValue = emailInput.value.trim();
      const emailStatus = document.getElementById('emailStatus');

      if (!emailValue) {
        emailStatus.innerHTML = '<img src="/images/error.png" style="margin-top:4px;"> 이미 사용중인 이메일 주소입니다.';
        emailStatus.classList.add('c_red');
        emailStatus.classList.remove('c_green');
        emailInput.style.border = '1px solid #E74A3B';
        emailInput.focus();
        return false;
      } else {
        emailStatus.innerHTML = '<img src="/images/check.png" style="margin-top:4px;"> 사용 가능한 이메일 주소입니다.';
        emailStatus.classList.remove('c_red');
        emailStatus.classList.add('c_green');
        emailInput.style.border = '1px solid #1CC88A';
        return true;
      }
    },
    chkPW(){
      const pwdInput = this.$refs.pwdInput;
      var pwdValue = pwdInput.value.trim();
      const pwdStatus = document.getElementById('pwdStatus');
      
      if (!pwdValue) {        
        pwdStatus.innerHTML = '<img src="/images/error.png" style="margin-top:4px;"> 비밀번호를 입력해주세요.';
        pwdStatus.classList.add('c_red');
        pwdStatus.classList.remove('c_green');
        pwdInput.style.border = '1px solid #E74A3B';
        pwdInput.focus();
        return false;
      } else {
        pwdStatus.innerHTML = '<img src="/images/check.png" style="margin-top:4px;"> 사용 가능한 비밀번호입니다.';
        pwdStatus.classList.remove('c_red');
        pwdStatus.classList.add('c_green');
        pwdInput.style.border = '1px solid #1CC88A';
        return true;
      }
    },
    rechkPW(){
      const pwdInput = this.$refs.pwdInput;
      var pwdValue = pwdInput.value.trim();
      const repwdInput = this.$refs.repwdInput;
      const repwdValue = repwdInput.value.trim();
      const repwdStatus = document.getElementById('repwdStatus');
      
      if (pwdValue != repwdValue) {        
        repwdStatus.innerHTML = '<img src="/images/error.png" style="margin-top:4px;"> 비밀번호 불일치';
        repwdStatus.classList.add('c_red');
        repwdStatus.classList.remove('c_green');
        repwdInput.style.border = '1px solid #E74A3B';
        repwdInput.focus();
        return false;
      } else {
        repwdStatus.innerHTML = '<img src="/images/check.png" style="margin-top:4px;"> 비밀번호 일치';
        repwdStatus.classList.remove('c_red');
        repwdStatus.classList.add('c_green');
        repwdInput.style.border = '1px solid #1CC88A';
        return true;
      }
    },
    closeModal() {
      this.showModal = false;
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
.status {
  font-size:0.9rem;
  font-weight: 400;
}
.c_red {
  color:#E74A3B;
}
.c_green {
  color:#1CC88A;
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

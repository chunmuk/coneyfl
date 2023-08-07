<template>
  <div>
    <Modal01 v-if="showModal" @close="showModal = false">
      <!-- 모달 내용 -->
      <template v-slot:modal_txt>서비스 준비중입니다.</template>
      <template v-slot:modal_close_txt01><ButtonBlue @click="closeModal">확인</ButtonBlue></template>
    </Modal01>
    
    <Header></Header>

    <div class="main">
      <div class="sub_center">
        <div class="section01">
          <div class="imgBox">
            <img src="/images/clap.png" alt="">
          </div>
          <div class="title"><span class="blueTxt">코니</span>가 되신 걸<br class="mShow"> 진심으로 축하드립니다!</div>
          <div class="content">
            등록해 주신 정보에 따라<br class="mShow"> 맞춤형 업무가 배정될 예정입니다.<br>
            업무 배정은 다소 지연될 수 있습니다.
          </div>
          <div class="content">추가 포트폴리오를 등록해 주시면<br class="mShow"> 배정이 빨라질 수 있습니다.</div>
          <div class="content subContent">
            <img src="/images/info.png" alt="">포트폴리오는 업무 피팅 및 배정 용도 외로 활용되지 않으며, 포트폴리오 채택 시 채택 보상금이 지급됩니다.
          </div>
          <div class="btnBox"><ButtonBlue @click="showModal = true">추가 포트폴리오 등록</ButtonBlue></div>
        </div>

        <div class="section02">
          <div class="mainTitle">회원가입 후 진행 안내</div>
          <div class="flexWrap">
            <div class="proBox">
              <span class="step">STEP 01</span>
              <div class="imgBox"><img src="/images/step_icon01.png" alt=""></div>
              <div class="title">회원가입 완료</div>
              <div class="blueLine"></div>
              <div class="content">카카오톡 웰컴 메세지</div>
              <div class="subContent">꼭! 친구 등록 해주세요!</div>
            </div>
            <div class="arrowBox">
              <img src="/images/arrow_right.png" alt="">
            </div>
            <div class="proBox">
              <span class="step">STEP 02</span>
              <div class="imgBox"><img src="/images/step_icon02.png" alt=""></div>
              <div class="title">프로젝트 배정</div>
              <div class="blueLine"></div>
              <div class="content">맞춤 프로젝트 카톡 메시지</div>
              <div class="subContent">지원 or 거절 선택</div>
            </div>
            <div class="arrowBox">
              <img src="/images/arrow_right.png" alt="">
            </div>
            <div class="proBox">
              <span class="step">STEP 03</span>
              <div class="imgBox"><img src="/images/step_icon03.png" alt=""></div>
              <div class="title">기본 교육</div>
              <div class="blueLine"></div>
              <div class="content">워크 시스템 기본 교육</div>
              <div class="subContent">동영상 매뉴얼 교육</div>
            </div>
            <div class="arrowBox mShow">
              <img src="/images/arrow_right.png" alt="">
            </div>
          </div>

          <div class="flexWrap">
            <div class="proBox">
              <span class="step">STEP 04</span>
              <div class="imgBox"><img src="/images/step_icon04.png" alt=""></div>
              <div class="title">워크 사이트 초대</div>
              <div class="blueLine"></div>
              <div class="content">프로젝트 워크 사이트 초대</div>
              <div class="subContent">담당 매니저 소통</div>
            </div>
            <div class="arrowBox">
              <img src="/images/arrow_right.png" alt="">
            </div>
            <div class="proBox">
              <span class="step">STEP 05</span>
              <div class="imgBox"><img src="/images/step_icon05.png" alt=""></div>
              <div class="title">프로젝트 진행</div>
              <div class="blueLine"></div>
              <div class="content">일정 세팅 KICK-OFF</div>
              <div class="subContent">퀄리팅 매니징</div>
            </div>
            <div class="arrowBox">
              <img src="/images/arrow_right.png" alt="">
            </div>
            <div class="proBox">
              <span class="step">STEP 06</span>
              <div class="imgBox"><img src="/images/step_icon06.png" alt=""></div>
              <div class="title">프로젝트 종료</div>
              <div class="blueLine"></div>
              <div class="content">프로젝트 종료</div>
              <div class="subContent">정산 마일리지</div>
            </div>
          </div>
        </div>

        <div class="btnWrap">
          <ButtonWht @click="showModal = true">FAQ & 1:1 문의</ButtonWht>
          <ButtonBlue @click="showModal = true">내 라운지 홈</ButtonBlue>
        </div>

      </div>
      <div class="fixedBox mShow" @click="showModal = true">추가 포트폴리오 등록</div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import ButtonBlue from "@/components/common/ButtonBlue.vue";
import ButtonWht from "@/components/common/ButtonWht.vue";
import Modal01 from "@/components/common/Modal01.vue";



export default {
  components: {
    Header,
    Footer,
    ButtonBlue,
    ButtonWht,
    Modal01
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100vh;
  position: relative;
}
.mShow {
  display:none;
}
.sub_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top:100px;
}

.section01{
  width:100%;
  background: #f8f8fe;
  border-radius: 12px;
  padding: 48px;
  box-sizing: border-box;
  text-align: center;
  color:#1d2232;
}
.section01 .title{
  font-size: 48px;
  font-weight: 800;
  margin-top:30px;
}
.section01 .title .blueTxt{
  color: #2c3af1;
}
.section01 .content{
  font-size: 20px;
  line-height: 30px;
  margin-top:30px;
}
.section01 .subContent{
  color:#9397a2;
  margin-bottom: 100px;
}
.section01 .subContent img{
  margin-top:5px;
  margin-right:10px;
}
.section02 .mainTitle {
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  margin-top:140px;
}

.section02 .flexWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:120px;
}

.section02 .proBox{
  width: 370px;
  border:1px solid #e1e1e1;
  border-radius: 12px;
  position: relative;
  text-align: center;
}
.section02 .step{
  background: #092c4c;
  color: #fff;
  text-align: center;
  font-size: 20px;
  border-radius: 50px;
  padding: 6px 12px;
  position: absolute;
  top:-19px;
  left:calc(50% - 48px);
}

.section02 .imgBox{
  width: 120px;
  height: 120px;
  margin:40px auto 30px;
  background: #f8f8fe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.section02 .proBox .title{
  font-size: 24px;
  font-weight: 700;
  color:#092c4c;
}
.section02 .proBox .blueLine{
  width: 40px;
  height: 2px;
  background:#2c3af1;
  margin:20px auto;
}
.section02 .proBox .content{
  font-size: 20px;
  font-weight: 600;
  color:#1d2232;
}
.section02 .proBox .subContent{
  font-size: 16px;
  color:#707070;
  margin-top:20px;
  margin-bottom:40px;
}
.section02 .arrowBox{
  min-width: 48px;
  min-height:48px;
  margin:0 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
}
.section02 .arrowBox.mShow{
  display: none;
}
.btnWrap {
  width:100%;
  max-width:700px;
  margin:140px auto 200px;
  display: flex; 
  justify-content:center;
  gap:10px;
}

@media (max-width: 1280px) {
  .main{
    padding: 0 50px;
    box-sizing: border-box;
  }
  
}

@media (max-width: 768px) {
  .main{
    padding: 0 24px;
  }
  .mShow {
    display:block;
  }
  .sub_center {
    margin-top:60px;
  }
  .section01{
    padding: 48px 10px;
  }
  .section01 .title{
    font-size: 1.7rem;
    line-height: 2.6rem;
  }
  .section01 .imgBox {
    width:100px;
    margin: 0 auto;
  }
  .section01 .imgBox > img {
    width:100%;
  }
  .section01 .content{
    font-size: 1rem;
    line-height: 1.6rem;
    margin-top:20px;
  }
  .section01 .subContent{
    margin-bottom: 0;
  }
  .section01 .subContent img{
    display:block;
    margin:10px auto;
  }
  .section01 .btnBox{
    display:none;
  }
  .section02 .mainTitle {
    font-size: 1.7rem;
    line-height: 2.6rem;
    margin-top:60px;
    margin-bottom:60px;
  }
  .section02 .flexWrap {
    display: block;
    margin-top:0;
  }

  .section02 .proBox{
    width: 100%;
    margin-top:40px;
  }
  .section02 .arrowBox{
    width: 48px;
    height:48px;
    margin:5% auto;
    transform: rotate(90deg);
  }
  .section02 .arrowBox.mShow{
    display: flex;
  }
  .btnWrap {
    width:100%;
    max-width: 450px;
    margin:100px auto;
  }
  .fixedBox {
    position: fixed;
    left: 0;
    bottom:0;
    z-index: 99;
    width: 100%;
    text-align: center;
    color:#fff;
    padding:26px 0;
    background: linear-gradient(90deg, #2c3af1 0%, #ed32d1 100%);
    box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.18);
    transition: box-shadow 0.3s ease-in;
    margin: 0 auto;
    cursor: pointer;
  }
}
@media (max-width: 500px) {
  .btnWrap{
    max-width: 280px;
  }
  
}

</style>

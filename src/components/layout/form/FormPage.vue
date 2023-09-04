<template>
  <div class="sub_center">
    <div class="sub_txt">
      <div class="flexBox">
        <div class="imgBox"><img src="images/smile_icon01.svg"></div>
        <div class="txtBox">환영합니다.</div>
      </div>
      <p>활동하시고자 하는 분야를<br class="mShow"> 선택해 주세요.</p>
    </div>
    <div class="form_term">
      <div class="flexBox">
        <div class="circleBox">
          <div>
            <img src="images/circle_icon01.svg" alt="">
          </div>
          <div class="grayLine"></div>
          <div class="txtBox">
            <p>제작자</p>
            <router-link to="/form01" class="btn_wrap">
              <ButtonWhtSmall>선택하기</ButtonWhtSmall>
            </router-link>
          </div>
        </div>
        <div class="circleBox">
          <div>
            <img src="images/circle_icon02.svg" alt="">
          </div>
          <div class="grayLine"></div>
          <div class="txtBox">
            <p>기획자</p>
            <router-link to="/form02" class="btn_wrap">
              <ButtonWhtSmall>선택하기</ButtonWhtSmall>
            </router-link>
          </div>
        </div>
        <div class="circleBox">
          <div>
            <img src="images/circle_icon03.svg" alt="">
          </div>
          <div class="grayLine"></div>
          <div class="txtBox">
            <p>디지털 아티스트</p>
            <router-link to="/form03" class="btn_wrap">
              <ButtonWhtSmall>선택하기</ButtonWhtSmall>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <Form></Form>
  </div>
</template>

<script>
//import Form from "@/components/layout/form/Form.vue";
import ButtonWhtSmall from "@/components/common/ButtonWhtSmall.vue";

//import axios from "axios";

export default {
  components: {
    //Form,
    ButtonWhtSmall,
  },
};
</script>

<style scoped>
.sub_txt {
  margin: 100px 0 80px;
  font-weight: 800;
  font-size: 3rem;
  line-height: 150%;
  text-align: center;
  color: #1d2232;
}
.sub_txt .flexBox{
  display: flex;
  justify-content: center;
  align-items: center;
  line-height:1;
  margin-bottom:20px;
}
.sub_txt .flexBox .imgBox{
  margin-right:10px;
  max-width: 52px;
}
.sub_txt .flexBox img{
  width: 100%;
}
.form_term {
  margin: 60px 0 200px;
}
.form_term .flexBox {
  display: flex;
  justify-content: space-between;
}
.form_term .flexBox .circleBox {
  width:28%;
  text-align:center;
}
.form_term .flexBox .grayLine {
  width:100%;
  height:1px;
  background: #e1e1e1;
  margin:30px 0;
}
.form_term .flexBox .txtBox {
  font-size:28px;
  font-weight:700;
  text-align:center;
}
.form_term .flexBox .txtBox p{
  margin-bottom:20px;
}
.mShow {display:none;}




@media (max-width: 768px) {
  .sub_txt {
    font-size: 1.8rem;
    margin-bottom:0;
  }
  .sub_txt .flexBox{
    margin-bottom:10px;
  }
  .form_term {
    padding: 20px 8px;
    margin:20px 0;
  }
  .form_term .flexBox {
    display: block;
  }
  
  .form_term .flexBox .circleBox {
    font-size: 0.875rem;
    width: 100%;
    padding:50px 0 70px;
    border-bottom:1px solid #e1e1e1;
  }
  .sub_txt .flexBox .imgBox{
    max-width: 34px;
  }
  .form_term .flexBox .circleBox:last-child {
    border-bottom:none;
  }
  .form_term .flexBox .txtBox p {
    margin:10px 0 20px;
  }
  .form_term .flexBox .grayLine {
    display:none;
  }
  .mShow {display:block;}
}
</style>

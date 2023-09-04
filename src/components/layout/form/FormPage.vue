<template>
  <div class="sub_center">
    <div class="sub_txt">
      <p><span class="fw_normal">코니가 누릴 수 있는</span>혜택은 다양합니다.</p><br>
      <p>등록만 해놔도 <span class="main_color">원하는 시간</span>에 <span class="main_color">원하는 양만큼</span></p>
      <p><span class="main_color">원하는 업무</span>를 할 수 있어요.</p>
    </div>
    <div class="form_term">
      <div>
        <div>
          <router-link to="/form01" class="btn_wrap">
            <ButtonBlue>제작자</ButtonBlue>
          </router-link>
        </div>
        <div>
          <router-link to="/form02" class="btn_wrap">
            <ButtonBlue>기획자</ButtonBlue>
          </router-link>
        </div>
        <div>
          <router-link to="/form03" class="btn_wrap">
            <ButtonBlue>디지털 아티스트</ButtonBlue>
          </router-link>
        </div>
      </div>
    </div>

    <Form></Form>
  </div>
</template>

<script>
//import Form from "@/components/layout/form/Form.vue";
import ButtonBlue from "@/components/common/ButtonBlue.vue";

//import axios from "axios";

export default {
  components: {
    //Form,
    ButtonBlue,
  },
};
</script>

<style scoped>
.sub_txt {
  margin: 50px 0 80px;
  font-weight: 800;
  font-size: 3rem;
  line-height: 150%;
  text-align: center;
  color: #1d2232;
}
.fw_normal {
  font-weight: normal;
}
.main_color {
  color: #2c3af1;
}
.form_term {
  margin: 60px 0;
}
.form_term > div {
  display: flex;
  justify-content: space-between;
}
.form_term > div > div {
  margin-bottom: 20px;;
}


@media (max-width: 768px) {
  .sub_txt {
    font-size: 1.25rem;
  }
  .form_term {
    padding: 20px 8px;
  }
  .form_term > div {
    display: block;
  }
  .form_term > div > div {
    font-size: 0.875rem;
    margin-bottom: 12px;
  }
}
</style>

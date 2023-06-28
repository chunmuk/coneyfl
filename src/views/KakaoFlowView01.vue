<template>
  <div class="kakao">
    <div class="kakao_center">
      <Header></Header>
      <Agree01>
        <template v-slot:tit>*본 프로젝트를 승인하시겠습니까?</template>
        <template v-slot:txt>
          (승인하시면 취소할 수 없습니다. 승인 후 매니저에게 2시간 이내에
          워크사이트 초대메시지 등이 전달될 예정입니다.)
        </template>
      </Agree01>
      <div class="btn_wrap">
        <div class="color_btn">승인</div>
        <div class="wht_btn">취소</div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/kakao/Header.vue";
import Agree01 from "@/components/layout/kakao/Agree01.vue";
import Footer from "@/components/layout/kakao/Footer.vue";

export default {
  components: {
    Header,
    Agree01,
    Footer,
  },
};
</script>

<style scoped>
.kakao {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4fe;
  padding: 85px 0;
  box-sizing: border-box;
}
.kakao_center {
  width: 100%;
  min-height: 800px;
  max-width: 390px;
  background-color: #fff;
  padding: 12px 24px;
  box-sizing: border-box;
}
.btn_wrap {
  width: 100%;
  margin-top: 80px;
  display: flex;
  gap: 8px;
  padding-bottom: 52px;
}
.color_btn {
  width: 50%;
  height: 51px;
  padding: 17px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #2c3af1 0%, #ed32d1 100%);
  box-shadow: 4px 4px 26px rgba(142, 54, 225, 0.18);
  transition: box-shadow 0.3s ease-in;
  border-radius: 100px;
  color: #fff;
  text-align: center;
}
.wht_btn {
  display: flex;
  align-items: center;
  width: 50%;
  height: 51px;
  position: relative;
  border: 2px solid transparent;
  border-radius: 100px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(90deg, #2c3af1 0%, #ed32d1 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.18);
  transition: box-shadow 0.3s ease-in;
  margin: 0 auto;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
}

.color_btn:hover,
.wht_btn:hover {
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.36);
}
@media (max-width: 768px) {
  .kakao {
    padding: 0;
    align-items: start;
  }
  .kakao_center {
    max-width: unset;
    height: 100vh;
  }
}
</style>

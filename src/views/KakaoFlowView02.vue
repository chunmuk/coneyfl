<template>
  <div class="kakao">
    <div class="kakao_center">
      <Header></Header>
      <Agree01>
        <template v-slot:tit>*본 프로젝트를 거절하시겠습니까?</template>
        <template v-slot:txt>
          (거절하시면 재승인은 불가합니다. 거절 횟수는 기록되며, 거절누적횟수에
          따라서 (코니레벨별 상이) 프로젝트 요청이 일정기간 제한될 수 있습니다.)
        </template>
      </Agree01>
      <div class="why_box">
        <p>*거절사유 입력(필수)</p>
        <textarea
          v-model="text"
          maxlength="400"
          @input="checkLength"
          placeholder="거절사유를 입력해주세요."
        ></textarea>
        <span class="text_num">({{ textLength }} / 400)</span>
      </div>
      <div class="btn_wrap">
        <div class="color_btn">거절</div>
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
  data() {
    return {
      text: "",
    };
  },
  computed: {
    textLength() {
      return Math.min(this.text.length, 400);
    },
  },
  methods: {
    checkLength() {
      if (this.text.length > 400) {
        this.text = this.text.substring(0, 400);
        alert("최대 400자까지 입력 가능합니다.");
      }
    },
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
.why_box {
  margin-top: 24px;
}
.why_box p {
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 150%;
  color: #1d2232;
}
.why_box textarea {
  width: 100%;
  min-height: 150px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 12px;
  padding: 12px;
  box-sizing: border-box;
  resize: none;
  font-family: "Pretendard";
  font-size: 0.75rem;
  line-height: 150%;
}
textarea::placeholder {
  color: #9397a2;
}
textarea:focus {
  outline: none;
}
.color_btn:hover,
.wht_btn:hover {
  box-shadow: 4px 16px 26px rgba(142, 54, 225, 0.36);
}
.text_num {
  display: block;
  width: fit-content;
  margin-left: auto;
  font-family: "Pretendard";
  font-size: 0.75rem;
  color: #9397a2;
}
@media (max-width: 768px) {
  .kakao {
    padding: 0;
    align-items: start;
  }
  .kakao_center {
    max-width: unset;
  }
}
</style>

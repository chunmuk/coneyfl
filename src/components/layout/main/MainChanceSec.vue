<template>
  <section class="main_section">
    <div class="main_center">
      <div class="main_text">
        그 외에도 코니가 되면<br />
        <span class="main_color">다양한 기회</span>가 많아요!
      </div>

      <div class="chance_wrap">
        <MainChanceItem>
          <template v-slot:chance_img>
            <img src="/images/main_person01.png" />
          </template>
          <template v-slot:title>성장지원금 혜택 </template>
          <template v-slot:text>
            코니 역량테스트에서 레벨업이 되면 성장지원금이 나와요.
          </template>
        </MainChanceItem>

        <MainChanceItem>
          <template v-slot:chance_img>
            <img src="/images/main_person02.png" />
          </template>
          <template v-slot:title>리크루팅 지원</template>
          <template v-slot:text>
            조건이 충족되면, 원하는 회사에 리크루팅 지원합니다.
          </template>
        </MainChanceItem>
      </div>

      <div class="chance_wrap">
        <MainChanceItem>
          <template v-slot:chance_img>
            <img src="/images/main_person03.png" />
          </template>
          <template v-slot:title>채택 보상금 </template>
          <template v-slot:text>
            클라이언트에게 포트폴리오가 선택되면, 채택보상금을 지원해요.
            <p class="detail_text">
              *포트폴리오는 업무 이외의 용도로 활용되지 않습니다*
            </p>
          </template>
        </MainChanceItem>

        <MainChanceItem>
          <template v-slot:chance_img>
            <img src="/images/main_person04.png" />
          </template>
          <template v-slot:title>업무 성향 분석</template>
          <template v-slot:text>
            내 성향에 맞는 일이 무엇인지 알아보고 잘 맞는 일을 찾아 전문가가 될
            수 있어요.
          </template>
        </MainChanceItem>
      </div>
    </div>
  </section>
</template>

<script>
import MainChanceItem from "@/components/layout/main/MainChanceItem.vue";

export default {
  components: {
    MainChanceItem,
  },
};
</script>

<style scoped>
.main_section {
  width: 100%;
  margin: 200px 0;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.main_text {
  font-family: "Pretendard";
  font-weight: 800;
  font-size: 3rem;
  line-height: 150%;
  text-align: center;
  color: var(--font-black);
}
.chance_wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-top: 80px;
}
.detail_text {
  font-size: 1rem;
  margin-top: 8px;
}
@media (max-width: 1300px) {
  .main_section {
    padding: 0 24px;
    box-sizing: border-box;
  }
  .chance_wrap {
    flex-direction: column;
    align-items: center;
  }
  .main_chance_box {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .main_section {
    margin: 100px 0;
  }
  .main_text {
    font-size: 1.25rem;
  }
  .main_chance_box {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
  }
  .chance_text {
    gap: 20px;
  }
  .chance_wrap {
    margin-top: 60px;
  }
  .chance_img .img img {
    width: 100%;
  }
  .detail_text {
    font-size: 0.875rem;
  }
}
</style>

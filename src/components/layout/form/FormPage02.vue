<template>
  <div class="sub_center">
    <div class="sub_txt">
      <p>코니플은 재능있는 영상크루들을 기다리고 있습니다.</p>
      <p class="main_color">코니 등록하기</p>
    </div>
    <div class="form_term">
      <ul>
        <li>
          영상기획자는 영상콘텐츠를 기획(시나리오, 화면구성, 카피)할 수 있는 기획자를 말하며, 
          일반 기획자 중 영상콘텐츠를 기획할 수 있는 사람도 포함합니다. 
        </li>
        <li>
          등록하신 정보는 개인 맞춤 프로젝트 배정과 코니 성장 지원에만 활용되며,
          다른 용도로 사용되지 않습니다.
        </li>
        <li>
          코니플은 스마트 매니징 서비스로 일반 매칭 서비스(크몽, 숨고 등)와
          달라, 클라이언트에게 개인 아이덴티티 정보(실명, 경력, 근무 회사 등)는
          <br class="no_br" />노출하지 않고 있음을 알려드립니다.
        </li>
        <li>
          코니의 등록하고 일정한 절차를 마치면 task ID가 발급되며 영상크루님들의
          원하시는 일정에 맞춤형 업무부터 먼저 배정됩니다.
        </li>
        <li>
          코니에 등록을 마치셨다고 해서, 바로 업무를 해야 하는 것은 아니며
          카카오톡으로 전달되는 &lt;오더메시지&gt; 에 원하시는 업무만 승인해서
          진행할 수 있습니다.
        </li>
        <li>기타 궁금한 부분은 master@usuaia.me 로 문의 바랍니다.</li>
      </ul>
    </div>

    <Form02></Form02>
  </div>
</template>

<script>
import Form02 from "@/components/layout/form/Form02.vue";

//import axios from "axios";

export default {
  components: {
    Form02,
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
.main_color {
  color: #2c3af1;
}
.form_term {
  width: 100%;
  padding: 40px 30px;
  background: #f8f8fe;
  border-radius: 12px;
  box-sizing: border-box;
  margin: 60px 0;
}
.form_term ul {
  width: 100%;
}
.form_term ul li {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 24px;
  font-size: 1.25rem;
  line-height: 150%;
  color: #1d2232;
}
.form_term ul li:last-child {
  margin-bottom: 0;
}
.form_term ul li::before {
  content: "";
  width: 12px;
  height: 15px;
  background: url("/images/check.svg") no-repeat center / contain;
  flex-shrink: 0;
}
.form_wrap {
  width: 100%;
}

@media (max-width: 768px) {
  .sub_txt {
    font-size: 1.25rem;
  }
  .form_term {
    padding: 20px 8px;
  }
  .form_term ul li {
    font-size: 0.875rem;
    margin-bottom: 12px;
  }
}
</style>

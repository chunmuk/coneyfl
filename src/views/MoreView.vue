<template>
  <div>
    <Header></Header>
    <MoreSec01></MoreSec01>
    <MoreSec02></MoreSec02>
    <MoreSec03></MoreSec03>

    <div class="btn_wrap">
      <router-link to="/form">
        <Button>코니 등록하기</Button>
      </router-link>
      <ButtonWht @click="$router.back()">이전 페이지</ButtonWht>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import MoreSec01 from "@/components/layout/more/MoreSec01.vue";
import MoreSec02 from "@/components/layout/more/MoreSec02.vue";
import MoreSec03 from "@/components/layout/more/MoreSec03.vue";
import Button from "@/components/common/Button.vue";
import ButtonWht from "@/components/common/ButtonWht.vue";

export default {
  components: {
    Header,
    Footer,
    MoreSec01,
    MoreSec02,
    MoreSec03,
    Button,
    ButtonWht,
  },
};
</script>

<style scoped>
.btn_wrap {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 200px 0;
}
.btn_wrap div {
  margin: 0;
}
@media (max-width: 768px) {
  .btn_wrap {
    margin: 50px 0 100px;
    padding: 0 24px;
    gap: 8px;
  }
}
</style>

<template>
  <div>
    <Header></Header>

    <div class="sub">
      <FormPage02></FormPage02>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import FormPage02 from "@/components/layout/form/FormPage02.vue";

export default {
  data() {
    return {
      //data,
    };
  },
  components: {
    Header,
    Footer,
    FormPage02,
  },
};
</script>

<style scoped>
.sub {
  width: 100%;
}
.sub_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
@media (max-width: 1300px) {
  .sub_center {
    padding: 0 24px;
    box-sizing: border-box;
  }
}
</style>

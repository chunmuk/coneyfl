<template>
  <div>
    <Header></Header>
    <TermPage></TermPage>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import TermPage from "@/components/layout/term/TermPage.vue";

export default {
  components: {
    Header,
    Footer,
    TermPage,
  },
};
</script>

<style scoped></style>

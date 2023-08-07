<template>
  <div>
    <Header></Header>
    <TermPage02></TermPage02>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import TermPage02 from "@/components/layout/term/TermPage02.vue";

export default {
  components: {
    Header,
    Footer,
    TermPage02,
  },
};
</script>

<style scoped></style>

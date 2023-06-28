<template>
  <section class="move_logo">
    <div class="main_center">
      <div id="logo1" class="logos"><img src="/images/coney_1.svg" /></div>
      <div id="logo2" class="logos"><img src="/images/coney_2.svg" /></div>
      <div id="logo3" class="logos"><img src="/images/coney_3.svg" /></div>
      <div id="logo4" class="logos"><img src="/images/coney_4.svg" /></div>
      <div id="logo5" class="logos"><img src="/images/coney_5.svg" /></div>
      <div id="logo6" class="logos"><img src="/images/coney_6.svg" /></div>
      <div id="logo7" class="logos"><img src="/images/coney_7.svg" /></div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".move_logo",
      },
    });
    let yoyoY = 0;

    if (window.innerWidth <= 768) {
      yoyoY = -5;
    } else {
      yoyoY = -10;
    }

    tl.to(".logos", { scale: 1, opacity: 1, duration: 1 }).to("#logo2", {
      y: yoyoY * Math.PI,
      repeat: -1,
      duration: 0.5,
      yoyo: true,
    });
  },
};
</script>

<style scoped>
.move_logo {
  width: 100%;
}
.main_center {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1.2vw;
}
.logos {
  height: 26vw;
  max-height: 250px;
  display: flex;
  justify-content: center;
  transform: scale(0);
  opacity: 0;
}
.logos img {
  width: 100%;
}
#logo1 {
  align-items: center;
}
#logo2 {
  align-items: flex-end;
}
#logo3 {
  align-items: center;
}
#logo4 {
  align-items: center;
}
#logo5 {
  align-items: flex-end;
}
#logo6 {
  align-items: start;
}
#logo7 {
  align-items: start;
}

@media (max-width: 1300px) {
  .move_logo {
    padding: 0 24px;
    box-sizing: border-box;
  }
}
</style>

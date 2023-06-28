<template>
  <section class="main_move_section">
    <div class="bg_circle01"></div>
    <div class="bg_circle02"></div>
    <div class="main_center">
      <div class="move_wrap">
        <div class="move_text_wrap">
          <p id="move01">BECOME</p>
          <p id="move02">OUR <span class="text_bg"> CREW</span></p>
          <p id="move03">BE <span class="main_color">CONEY</span></p>
        </div>
        <img src="/images/main_move_img.png" id="move_tigger" />
      </div>
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
        trigger: "#move_tigger",
      },
    });
    tl.to("#move01", { rotationX: 0, opacity: 1, duration: 1 })
      .to("#move02", { rotationX: 0, opacity: 1, duration: 1 })
      .to("#move03", { rotationX: 0, opacity: 1, duration: 1 });
  },
};
</script>

<style scoped>
.main_move_section {
  width: 100%;
  position: relative;
  margin: 200px 0;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.bg_circle01 {
  width: 652px;
  height: 652px;
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(44, 58, 241, 0.14);
  filter: blur(150px);
}
.bg_circle02 {
  width: 520px;
  height: 520px;
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(237, 50, 209, 0.14);
  filter: blur(150px);
}
.move_wrap {
  width: 100%;
  max-width: 1155px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 9;
  margin: 0 auto;
}
.move_wrap img {
  flex-shrink: 0;
  z-index: 9;
}
.move_text_wrap {
  position: absolute;
  left: 44px;
  z-index: 1;
  bottom: 18px;
  perspective: 500px;
}
.move_text_wrap p {
  font-family: "LINESeedKR-Bd";
  font-weight: 900;
  font-size: 9.625rem;
  line-height: 0.9;
  letter-spacing: -0.08em;
  color: #000000;
  display: flex;
  gap: 0.15em;
}
.text_bg {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.text_bg::after {
  content: "";
  display: block;
  width: 100%;
  height: 140px;
  background-color: #fff;
  position: absolute;
  top: -20px;
  z-index: -1;
  left: 8px;
}
#move01,
#move02,
#move03 {
  transform: rotateX(45deg);
  opacity: 0;
}
@media (max-width: 1024px) {
  .main_move_section {
    padding: 0 25px;
    box-sizing: border-box;
  }
  .move_wrap {
    justify-content: center;
    align-items: end;
  }
  .move_text_wrap {
    position: unset;
  }
  .move_text_wrap p {
    font-size: 10vw;
  }
  .move_wrap img {
    width: 25%;
    margin-left: -10%;
  }
  .text_bg::after {
    height: 10vw;
    top: -1.5vw;
  }
}
@media (max-width: 768px) {
  .main_move_section {
    margin: 100px 0;
  }

  .bg_circle01 {
    width: 270.49px;
    height: 326px;
    filter: blur(100px);
  }

  .bg_circle02 {
    width: 215.73px;
    height: 260px;
    filter: blur(100px);
  }
  .move_text_wrap p {
    font-size: 14vw;
  }
  .move_wrap img {
    width: 35%;
  }
  .text_bg::after {
    height: 11vw;
    top: -1.5vw;
  }
}
</style>

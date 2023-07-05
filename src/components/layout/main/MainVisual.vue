<template>
  <div class="main_visual_wrap">
    <div class="main_center">
      <div class="main_v_left">
        <div class="typewriter">
          <p class="p01">Welcome!</p>
        </div>
        <p class="p01 line-1 anim-typewriter"></p>

        <p class="p02"><span>코니라운지</span>에 오신 것을</p>
        <p class="p02">환영합니다.</p>
      </div>
      <div class="main_v_right">
        <img src="/images/phone.png" class="main_img" />

        <img src="/images/move01.png" id="move01" class="move_img" />
        <img src="/images/move02.png" id="move02" class="move_img" />
        <img src="/images/move03.png" id="move03" class="move_img" />
        <img src="/images/move04.png" id="move04" class="move_img" />
        <img src="/images/move05.png" id="move05" class="move_img" />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    let gsap_tween = gsap.timeline();

    gsap_tween.to(".move_img", {
      delay: 4.2,
      duration: 0.5,
      opacity: 1,
    });
  },
};
</script>

<style scoped>
.main_visual_wrap {
  width: 100%;
  margin-top: 45px;
}
.main_center {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.main_visual_wrap .main_center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* .main_v_left {
} */
.main_img {
  width: 550px;
  /* opacity: 0; */
}

.typewriter .p01 {
  width: fit-content;
  color: var(--font-black);
  font-size: 4rem;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  border-right: 0.08em solid var(--color-main);
  white-space: nowrap;
  letter-spacing: 0.08em;
  animation: typing 2s steps(30, end), blink-caret 0.5s step-end forwards 10;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
    letter-spacing: 0.08em;
  }
  to {
    width: 80%;
    letter-spacing: 0.08em;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--color-main);
  }
}
.p02 {
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 4.813rem;
  /* opacity: 0; */
  color: var(--font-black);
  /* transform: translate(-10%, 0); */
}
.p02 span {
  color: var(--color-main);
}
.main_v_right {
  position: relative;
}

.move_img {
  position: absolute;
  opacity: 0;
}
#move01 {
  left: -135px;
  top: 65px;
  animation: fadeInFromLeft01 0.4s linear 4s forwards,
    floating01 5s ease-in-out 4.5s infinite;
}
#move02 {
  right: -40px;
  left: auto;
  top: 126px;
  animation: fadeInFromLeft02 0.4s linear 4s forwards,
    floating02 5s ease-in-out 4.7s infinite;
}
#move03 {
  top: 300px;
  left: -160px;
  animation: fadeInFromLeft03 0.3s linear 4s forwards,
    floating03 5s ease-in-out 4.5s infinite;
}
#move04 {
  right: -60px;
  left: auto;
  top: 380px;
  animation: fadeInFromLeft04 0.3s linear 4s forwards,
    floating04 5s ease-in-out 4.5s infinite;
}
#move05 {
  top: 530px;
  left: -95px;
  animation: fadeInFromLeft05 0.3s linear 4s forwards,
    floating05 5s ease-in-out 4.5s infinite;
}
@keyframes fadeInFromLeft01 {
  from {
    transform: translate(150%, 15%);
  }
  to {
    transform: translate(0, 0);
  }
}
@keyframes fadeInFromLeft02 {
  from {
    transform: translate(-150%, 25%);
  }
  to {
    transform: translate(0, 0);
  }
}
@keyframes fadeInFromLeft03 {
  from {
    transform: translate(150%, -5%);
  }
  to {
    transform: translate(0, 0);
  }
}
@keyframes fadeInFromLeft04 {
  from {
    transform: translate(-250%, -15%);
  }
  to {
    transform: translate(0, 0);
  }
}
@keyframes fadeInFromLeft05 {
  from {
    transform: translate(100%, -50%);
  }
  to {
    transform: translate(0, 0);
  }
}
@keyframes floating01 {
  0% {
    transform: translate(0%, 0%) rotate(360deg);
  }
  25% {
    transform: translate(-5%, 9%) rotate(360deg);
  }
  50% {
    transform: translate(5%, 5%) rotate(360deg);
  }
  75% {
    transform: translate(0%, 9%) rotate(360deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(360deg);
  }
}
@keyframes floating02 {
  0% {
    transform: translate(0%, 0%) rotate(360deg);
  }
  25% {
    transform: translate(-1%, 8%) rotate(360deg);
  }
  50% {
    transform: translate(-1%, 1%) rotate(360deg);
  }
  75% {
    transform: translate(0%, 8%) rotate(360deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(360deg);
  }
}

@keyframes floating03 {
  0% {
    transform: translate(0%, 0%) rotate(360deg);
  }
  25% {
    transform: translate(5%, 10%) rotate(360deg);
  }
  50% {
    transform: translate(5%, 5%) rotate(360deg);
  }
  75% {
    transform: translate(0%, 10%) rotate(360deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(360deg);
  }
}

@keyframes floating04 {
  0% {
    transform: translate(0%, 0%) rotate(360deg);
  }
  25% {
    transform: translate(-5%, -15%) rotate(360deg);
  }
  50% {
    transform: translate(-5%, -5%) rotate(360deg);
  }
  75% {
    transform: translate(0%, -15%) rotate(360deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(360deg);
  }
}

@keyframes floating05 {
  0% {
    transform: translate(0%, 0%) rotate(360deg);
  }
  25% {
    transform: translate(-5%, 3%) rotate(360deg);
  }
  50% {
    transform: translate(5%, 0%) rotate(360deg);
  }
  75% {
    transform: translate(-1%, -3%) rotate(360deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(360deg);
  }
}
@media (max-width: 1300px) {
  .main_center {
    max-width: unset;
  }
  .main_visual_wrap .main_center {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }
  .typewriter .p01,
  .p02,
  .main_v_right {
    text-align: center;
  }
  .main_v_right {
    width: 80%;
  }
  .main_img {
    width: 60%;
  }
  #move01 {
    left: 5%;
  }
  #move02 {
    right: 10%;
  }
  #move03 {
    left: 0%;
  }
  #move04 {
    right: 15%;
  }
  #move05 {
    left: 5%;
  }
}
@media (max-width: 1024px) {
  .typewriter .p01,
  .p02 {
    font-size: 3.25rem;
  }
}
@media (max-width: 768px) {
  .main_v_right {
    width: 100%;
  }
  #move01 {
    width: 14.6%;
    left: 45px;
    top: 35px;
  }
  #move02 {
    width: 10.77%;
    right: 39px;
    top: 15%;
  }
  #move03 {
    width: 10.77%;
    left: 24px;
    top: 45%;
  }
  #move04 {
    width: 9.23%;
    right: 24px;
    top: 50%;
  }
  #move05 {
    width: 15.13%;
    left: 69px;
    top: auto;
    bottom: 0px;
  }
  .typewriter .p01,
  .p02 {
    font-size: 2.125rem;
    line-height: 2.563rem;
  }
  .typewriter .p01 {
    margin: 0 auto;
  }
}
</style>

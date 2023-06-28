<template>
  <!--
  <div class="move_box_container">
    <div class="move_box">
      <div class="service_box_wrap">
        <div class="service_box">
          <img src="/images/move01_1.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_2.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_3.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_4.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_5.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_6.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_1.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_2.png" />
        </div>
        <div class="service_box 2">
          <img src="/images/move01_3.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_4.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_5.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_6.png" />
        </div>
      </div>
      <div class="service_box_wrap">
        <div class="service_box">
          <img src="/images/move01_1.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_2.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_3.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_4.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_5.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_6.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_1.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_2.png" />
        </div>
        <div class="service_box 2">
          <img src="/images/move01_3.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_4.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_5.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_6.png" />
        </div>
      </div>
      <div class="service_box_wrap">
        <div class="service_box">
          <img src="/images/move01_1.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_2.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_3.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_4.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_5.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_6.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_1.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_2.png" />
        </div>
        <div class="service_box 2">
          <img src="/images/move01_3.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_4.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_5.png" />
        </div>
        <div class="service_box">
          <img src="/images/move01_6.png" />
        </div>
      </div>
    </div>
  </div>
  -->
  <div class="marquee typ_color_banner">
		<div class="marquee_inner">
			<div class="item">Let's PLAY & FLEX! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's PLAY & FLEX! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's PLAY & FLEX! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's PLAY & FLEX! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's PLAY & FLEX! </div>
			<div class="item">Let's PLAY & FLEX!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's PLAY & FLEX!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's PLAY & FLEX! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's PLAY & FLEX! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's PLAY & FLEX! </div>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>
.marquee .marquee_inner {font-size: 0;white-space: nowrap; width:100%; overflow-x:hidden;}
.marquee .item {display: inline-block;line-height: 1;padding-left: 60px;font-size: 200px;font-weight: 700;font-family: rajdhani, sans-serif;vertical-align: top;color: #fff;animation: marquee 35s linear infinite;}
.marquee.typ_color_banner {background: linear-gradient(to right, #ec2f4b, #7e43f6, #009fff);  font-family: 'Poppins', sans-serif;}
.marquee.typ_color_banner .item {height: 130px;line-height: 130px;font-size: 50px;font-weight: 600;text-transform: uppercase;animation-duration: 30s;}

@media (max-width:768px){
  .marquee.typ_color_banner .item {height: 80px;line-height: 80px;font-size: 30px;}
}
@keyframes marquee {
    0% {-webkit-transform: translateX(0);transform: translateX(0);}
    100% {-webkit-transform: translateX(-100%);transform: translateX(-100%);}
}
</style>

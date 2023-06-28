<template>
  <div>
    <div class="bg_circle01"></div>
    <div class="bg_circle02"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.bg_circle01 {
  position: absolute;
  width: 900px;
  height: 900px;
  left: -231px;
  top: -142px;
  background: var(--color-main);
  opacity: 0.12;
  filter: blur(200px);
  z-index: -1;
}
.bg_circle02 {
  position: absolute;
  width: 728px;
  height: 728px;
  left: 305px;
  top: -202px;
  background: var(--color-pink);
  opacity: 0.08;
  filter: blur(200px);
  z-index: -1;
}
@media (max-width: 768px) {
  .bg_circle01 {
    width: 349.69px;
    height: 349.69px;
    left: -101px;
    top: -144px;
  }
  .bg_circle02 {
    width: 282.86px;
    height: 282.86px;
    left: 107.26px;
    top: -144px;
  }
}
</style>

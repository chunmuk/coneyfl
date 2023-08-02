<template>
  <div class="modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <!-- 모달 내용 -->
      <div class="modal_txt">
        <slot name="modal_txt"></slot>
      </div>
      <div class="modal_close_txt01">
        <slot name="modal_close_txt01"></slot>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  width:90%;
  max-width:700px;
  background-color: white;
  padding: 50px 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.modal_txt {
  font-size:24px;
  font-weight: 600;
  line-height: 36px;
  margin-bottom:40px;
  text-align: center;
}
.modal_subtxt {
  font-size:20px;
  margin-bottom:40px;
  text-align: center;
  color:#9397a2;
}
@media (max-width:768px){
  .modal-content {
    padding: 30px;
  }
  .modal_txt{
    font-size:18px;
    margin-bottom:20px;
  }
}
</style>

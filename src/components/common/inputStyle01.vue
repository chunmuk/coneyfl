<template>
  <div class="q_row_style01 check_level">
    <div class="q_answer_tit"><slot></slot></div>
    <div class="q_answer_content">
      <div class="checkbox_style02">
        <input type="text" name="skilEtc" class="text_input"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    
  },
};
</script>

<style scoped>
.check_level {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
}
.q_answer_tit {
  width: 20%;
}
.q_answer_content {
  width: 80%;
  display: flex;
  gap: 20px;
}
.checkbox_style02 {
  width: 100%;
}
.text_input {
  height: 44px;
  border:none;
}

@media (max-width: 768px) {
  .check_level {
    font-size: 0.75rem;
    flex-direction: column;
    gap: 12px;
  }
  .check_level.q_row_style01 {
    align-items: flex-start;
    height: auto;
  }
  .q_answer_tit,
  .q_answer_content {
    width: 100%;
  }
  .q_answer_content {
    gap: 10px;
  }
  .text_input {
    margin:0;
}
}
</style>

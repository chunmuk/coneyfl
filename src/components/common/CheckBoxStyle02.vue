<template>
  <div class="q_row_style01 check_level">
    <div class="q_answer_tit"><slot></slot></div>
    <div class="q_answer_content">
      <div class="checkbox_style02" v-for="level in levels" :key="level">
        <input
          type="checkbox"
          :id="`${name}_${level}`"
          :name="name"
          :value="level"
          v-model="skil.level"
          @click="handleCheckboxClick(level)"
        />
        <label :for="`${name}_${level}`">{{ level }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
    value: String,
  },
  data() {
    return {
      skil: {
        name: this.value,
        level: [],
      },
      levels: ["상", "중상", "중", "중하", "하"],
    };
  },
  methods: {
    handleCheckboxClick(selectedLevel) {
      const index = this.skil.level.indexOf(selectedLevel);
      if (index !== -1) {
        this.skil.level.splice(index, 1); // Unselect if already selected
      } else {
        this.skil.level = [selectedLevel]; // Select if not selected
      }
      this.emitLevel();
    },
    emitLevel() {
      this.$emit("skilCheck", this.skil, this.index);
    },
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
  width: 20%;
}
.checkbox_style02 input[type="checkbox"] {
  /* display: none; */
  opacity: 0;
}
.checkbox_style02 input[type="checkbox"] + label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  margin-top: -22px;
}
.checkbox_style02 input[type="checkbox"]:checked + label {
  background-color: #2c3af1;
  color: #fff;
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
}
</style>

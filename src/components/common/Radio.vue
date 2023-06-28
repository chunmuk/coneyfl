<template>
  <div class="radio_default q_row_style01">
    <input
      type="radio"
      class="radio"
      :name="name"
      :value="value"
      :id="id"
      v-model="radio"
      @change="onDataChanged"
    />
    <label :for="id"><slot></slot></label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      radio: "",
    };
  },
  methods: {
    onDataChanged() {
      if (this.name === "workTime") {
        this.onWorkTime();
      } else if (this.name === "workload") {
        this.onWorkloadChanged();
      } else if (this.name === "income") {
        this.onIncomeChanged();
      } else if (this.name === "area") {
        this.onAreaChanged();
      } else if (this.name === "portfolioNum") {
        this.onPortfolioNum();
      } else if (this.name === "why") {
        this.onWhy();
      } else if (this.name === "job") {
        this.onjob();
      }
    },
    onWorkTime() {
      this.$emit("radioWorkTime", this.value);
    },
    onWorkloadChanged() {
      this.$emit("radioworkLoad", this.value);
    },
    onIncomeChanged() {
      this.$emit("radioIncome", this.value);
    },
    onAreaChanged() {
      this.$emit("radioArea", this.value);
    },
    onPortfolioNum() {
      this.$emit("radioPortfolioNum", this.value);
    },
    onWhy() {
      this.$emit("radioWhy", this.value);
    },
    onjob() {
      this.$emit("radioJob", this.value);
    },
  },
};
</script>

<style scoped></style>

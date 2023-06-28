<template>
  <input
    type="text"
    v-model="value"
    class="text_input"
    :name="name"
    @change="onDataChanged"
    :ref="`${name}Input`"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onDataChanged() {
      this.$emit("input", this.value); // input 이벤트 발생
    },
  },
};
</script>

<style scoped>
.text_input {
  width: 100%;
  height: 64px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 12px 0;
}
@media (max-width: 768px) {
  .text_input {
    height: 42px;
  }
}
</style>

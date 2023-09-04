<template>
  <div class="checkbox_default">
    <input
      type="checkbox"
      class="chk_box"
      :name="name"
      :value="value"
      :id="name+value"
      :checked="checked"
      @change="onDataChanged"
      :ref="`${name}chk`"
    />
    <label :for="name+value"><slot></slot></label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },

    checked: Boolean,
  },

  methods: {
    onDataChanged(event) {
      const checked = event.target.checked;
      //console.log(this.name);
      if (this.name === "circle") {
        this.onCircleChanged(checked);
      } else if (this.name === "carrer") {
        this.onCarrerChanged(checked);
      } else if (this.name === "plantype") {
        this.onPlantypeChanged(checked);
      } else if (this.name === "genre") {
        this.onGenreChanged(checked);
      }
    },
    onPlantypeChanged(checked) {
      this.$emit("plantypeChange", checked, this.value);
      this.$refs.plantypechk.focus();
    },
    onCircleChanged(checked) {
      this.$emit("circleChange", checked, this.value);
      this.$refs.circlechk.focus();
    },
    onGenreChanged(checked) {
      this.$emit("genreChange", checked, this.value);
      this.$refs.generechk.focus();
    },
    onCarrerChanged(checked) {
      this.$emit("carrerChange", checked, this.value);
      this.$refs.carrerchk.focus();
    },
    onAgreeChanged(checked) {
      this.$emit("agreeChange", checked, this.value);
      this.$refs.carrerchk.focus();
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="form_row">
    <div class="row_title"><slot name="q_tit"></slot></div>
    <div class="row_text">
      <slot name="q_txt"></slot>
    </div>
    <slot name="input_type"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.form_row {
  width: 100%;
  margin: 60px 0;
}
.row_title {
  width: fit-content;
  color: #1d2232;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 150%;
  position: relative;
  margin: 12px 0;
}
.row_title::after {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background: #2c3af1;
  border-radius: 100%;
  position: absolute;
  top: 0;
  right: -10px;
}
.no_epc .row_title::after {
  display: none;
}
.row_text {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  color: #9397a2;
  margin: 12px 0;
}
.v3dp__input_wrapper {
  width: 100%;
}
.v3dp__input_wrapper input {
  width: 100% !important;
  height: 64px;
  border: 1px solid #d9d9d9 !important;
  border-radius: 4px;
  margin: 12px 0;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;
  background: url("/images/calendar_icon.svg") no-repeat 98% center / 20px;
}
.v3dp__elements[data-v-2e128338] button:not(:disabled):hover span,
.v3dp__elements[data-v-2e128338] button.selected span {
  background-color: #2c3af1 !important;
}

@media (max-width: 768px) {
  .form_row {
    margin: 50px 0;
  }
  .row_title {
    font-size: 0.875rem;
  }
  .row_text {
    font-size: 0.75rem;
  }
  .v3dp__input_wrapper input {
    height: 42px;
  }
}
</style>

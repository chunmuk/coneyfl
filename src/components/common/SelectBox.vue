<template>
  <div class="select__wrap">
    <div class="select_btn" id="select_btn" @click="toggleList">
      <a href="javscript:void(0)">
        <span>{{ selectedValue || "선택" }}</span>
      </a>
    </div>
    <ul class="flist" :style="{ display: showList ? 'block' : 'none' }">
      <li v-for="item in mbti" :key="item" @click="selectValue(item)">
        {{ item }}
      </li>
      <!-- <li @click="selectValue('value2')">value2</li> -->
    </ul>
    <input type="hidden" :name="name" :value="this.selectedValue" />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    mbti: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showList: false,
      selectedValue: "",
    };
  },
  methods: {
    toggleList() {
      this.showList = !this.showList;
    },
    selectValue(value) {
      this.selectedValue = value;
      this.showList = false;
      this.$emit("mbtiChange", this.selectedValue);
    },
  },
};
</script>

<style scoped>
.select__wrap {
  width: 100%;
}
.select_btn {
  width: 50%;
  height: 64px;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
}
.select_btn a:after {
  content: "";
  width: 14px;
  height: 10px;
  position: absolute;
  right: 15px;
  background: url("/images/selectArr.svg") no-repeat center;
  background-size: cover;
  top: 50%;
  transform: translateY(-50%);
}
.select__wrap .flist {
  width: 50%;
  height: 250px;
  background-color: #fff;
  font-size: 1rem;
  text-align: left;
  color: #1d2232;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-sizing: border-box;
  border-top: none;
  margin-top: 8px;
  display: none;
  overflow-y: scroll;
}
.select__wrap .flist li {
  padding: 12px 20px;
  cursor: pointer;
}
.select__wrap .flist li:hover {
  background-color: var(--color-main);
  color: #fff;
}
@media (max-width: 768px) {
  .select_btn {
    height: 42px;
    font-size: 0.875rem;
  }
  .select__wrap .flist li {
    font-size: 0.875rem;
  }
  .select__wrap .flist {
    height: 140px;
  }
}
</style>

<template>
  <div>
    <div class="input_file" v-for="(file, index) in files" :key="index">
      <input
        type="text"
        class="file_name text_input"
        :value="file.name"
        :name="name"
        :placeholder="msg"
      />
      <input
        type="file"
        class="file"
        @change="onFileChange(index, $event)"
        :name="name"
        :id="fileId(index)"
      />
      <label :for="fileId(index)">찾아보기</label>
      <a
        class="btn_remove"
        href="javascript:void(0)"
        v-if="index > 0 || maxNum <= 1"
        @click="removeFile(index)"
        >- 삭제</a
      >
      <a
        class="btn_add"
        href="javascript:void(0)"
        @click="addFile"
        v-if="index < 1 && maxNum >= 2"
        >＋ 추가</a
      >
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
    maxNum: {
      type: Number,
      default: 10,
    },
    msg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      files: [{ name: "" }, { name: "" }, { name: "" }],
      maxFiles: this.maxNum,
      nameFile: this.name,
    };
  },
  methods: {
    onFileChange(index, event) {
      const fileName = event.target.value.split("\\").pop();
      this.files[index].name = fileName;

      if (this.name == "portfolio") {
        this.$emit("onChangeFile", this.files[index].name, index);
      } else if (this.name == "resume") {
        this.$emit("onChangeFile2", this.files[index].name, index);
      }
    },
    addFile() {
      if (this.files.length < this.maxFiles) {
        this.files.push({ name: "" });
      }
    },
    removeFile(index) {
      this.files.splice(index, 1);
      if (this.name == "portfolio") {
        this.$emit("onRemoveFiles", index);
      } else if (this.name == "resume") {
        this.$emit("onRemoveFiles2", index);
      }
    },
    fileId(index) {
      return `${this.nameFile}file0${index + 1}`;
    },
  },
};
</script>
<style scoped>
/*file*/
.input_file {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.file_name {
  width: 70%;
}
.file {
  display: none;
}
.file + label {
  width: 200px;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: #9397a2;
  border: 1px solid #9397a2;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}
.btn_add,
.btn_remove {
  width: 120px;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  color: #9397a2;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .input_file {
    gap: 7px;
  }
  .file_name {
    width: 100%;
  }
  .file + label {
    width: auto;
    height: 42px;
    font-size: 0.75rem;
  }
  .btn_add,
  .btn_remove {
    width: 50px;
    height: 42px;
    font-size: 0.75rem;
    padding: 5px;
    box-sizing: border-box;
    white-space: nowrap;
  }
}
</style>

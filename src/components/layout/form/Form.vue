<template>
  <form @submit.prevent="submitForm" name="frm">
    <div class="form_wrap">
      <!-- input text -->
      <FormItem>
        <template v-slot:q_tit>원하는 코니 네임을 적어주세요.</template>
        <template v-slot:q_txt>
          코니 네임은 영어 이름 혹은 애칭이며, 코니가 되면 코니 네임으로
          호칭되고 실명은 사용되지 않습니다. <br />
          (예시 : 앤디(Andy), 코코(Coco), 모카(Moka), 맥(Mac), 엘라(Ella) 등)
        </template>
        <template v-slot:input_type>
          <FormInput
            v-model="user.nickname"
            name="nickname"
            @input="nicknameChange"
            ref="nicknameRef"
          ></FormInput>
        </template>
      </FormItem>

      <!-- input checkbox style01 -->
      <FormItem>
        <template v-slot:q_tit>
          귀하는 영상 제작 업무 어느 직군(서클)에 해당되십니까?
        </template>
        <template v-slot:q_txt>
          멀티가 가능하다면 가능한 직군(서클)을 모두 선택해 주시기 바랍니다.
        </template>
        <template v-slot:input_type>
          <CheckBoxStyle01
            v-for="item in circleList"
            :key="item"
            class="q_row_style01"
            v-model="user.circle"
            name="circle"
            :value="item"
            @circleChange="chceckboxSeleted"
            ref="checkRef"
          >
            {{ item }}
          </CheckBoxStyle01>
        </template>
      </FormItem>

      <FormItem>
        <template v-slot:q_tit>
          귀하의 영상 분야 경력은 몇 년 차입니까?
        </template>

        <template v-slot:input_type>
          <CheckBoxStyle01
            v-for="(item, i) in carrerList"
            :key="item"
            class="q_row_style01"
            v-model="user.carrer"
            name="carrer"
            :value="item"
            @carrerChange="onCarrerChanged"
          >
            {{ item }}
          </CheckBoxStyle01>
        </template>
      </FormItem>

      <!-- input checkbox02 -->
      <FormItem>
        <template v-slot:q_tit>
          보유 스킬을 상/중/하로 선택 해주세요.
        </template>
        <template v-slot:q_txt> 중복 선택 가능 </template>
        <template v-slot:input_type>
          <CheckBoxStyle02
            v-for="(item, index) in skilList"
            :key="item"
            :index="index"
            v-model="user.skil"
            :name="`skil${item.key}`"
            :value="item.value"
            @skilCheck="skilChecked"
          >
            {{ item.value }}
          </CheckBoxStyle02>
        </template>
      </FormItem>

      <!-- input radio -->
      <FormItem>
        <template v-slot:q_tit>업무 할애 가능 시간을 체크해 주세요.</template>
        <template v-slot:input_type>
          <Radio
            v-for="item in workTimeList"
            v-model="user.workTime"
            :name="'workTime'"
            :id="`workTime${item.key}`"
            :value="item.value"
            @radioWorkTime="workTimeChanged"
          >
            {{ item.value }}
          </Radio>
        </template>
      </FormItem>

      <!-- input radio -->
      <FormItem>
        <template v-slot:q_tit>
          귀하가 원하는 업무 양은 어느 정도입니까?
        </template>
        <template v-slot:input_type>
          <Radio
            v-for="item in workloadList"
            v-model="user.workload"
            :name="'workload'"
            :id="`workload${item.key}`"
            :value="item.value"
            @radioworkLoad="workLoadChanged"
          >
            {{ item.value }}
          </Radio>
        </template>
      </FormItem>

      <!-- input radio -->
      <FormItem>
        <template v-slot:q_tit
          >귀하가 코니플에서 원하는 월수입은 어느 정도입니까?</template
        >
        <template v-slot:input_type>
          <Radio
            v-for="item in incomeList"
            v-model="user.income"
            :name="'income'"
            :id="`income${item.key}`"
            :value="item.value"
            @radioIncome="incomeChanged"
          >
            {{ item.value }}
          </Radio>
        </template>
      </FormItem>

      <!-- input date -->
      <FormItem>
        <template v-slot:q_tit>언제부터 업무가 가능하나요?</template>
        <template v-slot:q_txt>
          날짜를 기입해 주시면 되고, 본인의 상황에 맞춰서 대략의 날짜를 기입해
          주시면 됩니다. 추후 실제 업무 배정 시 조정 가능합니다.
        </template>
        <template v-slot:input_type>
          <VueDatePicker v-model="user.date"></VueDatePicker>
        </template>
      </FormItem>

      <!-- input radio -->
      <FormItem>
        <template v-slot:q_tit> 귀하의 주 업무 지역은 어디십니까? </template>
        <template v-slot:q_txt>
          해외의 경우 기타에 국가를 표기해 주세요.
        </template>
        <template v-slot:input_type>
          <Radio
            v-for="item in areaList"
            v-model="user.area"
            :name="'area'"
            :id="`area${item.key}`"
            @change="whySelected($event)"
            :value="item.value"
            @radioArea="AreaChanged"
          >
            {{ item.value }}
          </Radio>
          <FormInput
            v-model="user.area"
            name="area"
            v-if="showAreaFormInput"
          ></FormInput>
        </template>
      </FormItem>

      <!-- input radio -->
      <FormItem>
        <template v-slot:q_tit>
          귀하의 포트폴리오 총 개수는 몇 개입니까?
        </template>
        <template v-slot:q_txt>
          길이, 형태, 장르에 관계없이 총개수만 기재해 주시면 되고, 미완성인
          경우는 개수에 불포함해 주시기 바랍니다.
        </template>
        <template v-slot:input_type>
          <Radio
            v-for="item in portfolioNumList"
            v-model="user.portfolioNum"
            :name="'portfolioNum'"
            :id="`portfolioNum${item.key}`"
            :value="item.value"
            @radioPortfolioNum="portfolioNumChanged"
          >
            {{ item.value }}
          </Radio>
        </template>
      </FormItem>

      <!-- input file-->
      <FormItem>
        <template v-slot:q_tit
          >귀하의 대표 포트폴리오 영상파일 3개 이상 업로드
          해주세요.(포트폴리오Reel 영상 제외)</template
        >
        <template v-slot:q_txt>
          코니 등록 후 필요시 추가적으로 포트폴리오 영상을 요청할 수 있습니다.
          포트폴리오는 클라이언트 채택(채택 시 채택 보상금 지급)과 개인 맞춤
          프로젝트 추천을 위한 업무 이외의 용도로 사용되지 않습니다.
        </template>
        <template v-slot:input_type>
          <FileInput
            :name="'portfolio'"
            :msg="'선택된 파일 없음'"
            v-model="user.portfoliFile"
            @onChangeFile="changedFilie"
            @onRemoveFiles="removeFiles"
          >
          </FileInput>
        </template>
      </FormItem>

      <!-- input file-->
      <FormItem>
        <template v-slot:q_tit> 이력서, 자기소개서를 업로드해주세요. </template>
        <template v-slot:q_txt> 모든 파일은 pdf로 등록해주세요. </template>
        <template v-slot:input_type>
          <FileInput
            :name="'resume'"
            v-model="user.resume"
            :maxNum="3"
            :msg="'김코니_이력서.pdf'"
            @onChangeFile2="changedFilie2"
            @onRemoveFiles2="removeFiles2"
          >
          </FileInput>
        </template>
      </FormItem>

      <!-- input radio -->
      <FormItem class="no_epc">
        <template v-slot:q_tit>
          코니가 되고자 하는 이유는 무엇인가요?
        </template>

        <template v-slot:input_type>
          <Radio
            v-for="item in whyList"
            v-model="user.why"
            :name="'why'"
            :value="item.value"
            :id="`why${item.key}`"
            @radioWhy="WhyChanged"
            @change="whySelected($event)"
          >
            {{ item.value }}
          </Radio>
          <FormInput
            v-model="user.why"
            name="why"
            v-if="showWhyFormInput"
          ></FormInput>
        </template>
      </FormItem>

      <!-- input radio -->
      <FormItem class="no_epc">
        <template v-slot:q_tit>
          현재 귀하의 상태에 대해 알려주실 수 있나요?
        </template>

        <template v-slot:input_type>
          <Radio
            v-for="item in jobList"
            v-model="user.job"
            :name="'job'"
            :value="item.value"
            :id="`job${item.key}`"
            @radioJob="JobChanged"
          >
            {{ item.value }}
          </Radio>
        </template>
      </FormItem>

      <!-- input text -->
      <FormItem class="no_epc">
        <template v-slot:q_tit>
          현재 자신있는 영상 제작 분야와 영상 유형은 있나요?
        </template>
        <template v-slot:input_type>
          <!-- <FormInput v-model="user.strength" name="strength"></FormInput> -->
          <input
            type="text"
            v-model="user.strength"
            class="text_input"
            name="strength"
          />
        </template>
      </FormItem>

      <!-- input text -->
      <FormItem class="no_epc">
        <template v-slot:q_tit>
          더 도전해 보고 싶은 영상은 어떤 영상입니까?
        </template>
        <template v-slot:input_type>
          <!-- <FormInput v-model="user.challenge" name="challenge"></FormInput> 
          -->
          <input
            type="text"
            v-model="user.challenge"
            class="text_input"
            name="challenge"
          />
        </template>
      </FormItem>

      <!-- input text -->
      <FormItem class="no_epc">
        <template v-slot:q_tit>
          귀하는 영상크루로서 궁극적으로 어떤 목표를 갖고 있나요?
        </template>
        <template v-slot:input_type>
          <!-- <FormInput v-model="user.goal" name="goal"></FormInput> -->
          <input
            type="text"
            v-model="user.goal"
            class="text_input"
            name="goal"
          />
        </template>
      </FormItem>

      <!-- input text -->
      <FormItem class="no_epc">
        <template v-slot:q_tit> 귀하의 MBTI는 무엇입니까? </template>
        <template v-slot:q_txt>
          MBTI는 업무환경 및 제도를 개인 맞춤형 개선 및 맞춤형 성장 지원에 대한
          참고용이며, MBTI로 차별로 인한 어떤 불이익도 없습니다.
        </template>
        <template v-slot:input_type>
          <SelectBox
            v-model="user.mbti"
            name="mbti"
            :mbti="mbti"
            @mbtiChange="mbtiChanged"
          ></SelectBox>
        </template>
      </FormItem>

      <FormItem>
        <template v-slot:q_tit>
          어떤 경로로 코니에 등록하게 되셨나요?
        </template>
        <template v-slot:input_type>
          <!-- <FormInput v-model="user.path" name="path"></FormInput> -->
          <input
            type="text"
            v-model="user.path"
            class="text_input"
            name="path"
          />
        </template>
      </FormItem>

      <div class="term_wrap">
        <CheckBoxStyle01>
          <router-link to="/term" class="main_color">
            개인정보 수집 · 이용
          </router-link>
          에 동의합니다.
        </CheckBoxStyle01>
        <CheckBoxStyle01>
          <router-link to="/term2" class="main_color">이용약관</router-link>에
          동의합니다.
        </CheckBoxStyle01>
      </div>
    </div>
    <Button @click="submitForm()" class="btn_wrap">제출하기</Button>

    <Modal v-if="this.openModal == true">
      <template v-slot:text01>제출이 완료되었습니다!</template>
      <template v-slot:text02
        >회원가입하면 코니 활동 안내를 받으실 수 있습니다.</template
      >
      <template v-slot:btn>
        <router-link to="/signup">
          <Button>회원가입 바로가기</Button>
        </router-link>
      </template>
    </Modal>
  </form>
</template>

<script>
import FormItem from "@/components/layout/form/FormItem.vue";
import FormInput from "@/components/common/FormInput.vue";
import CheckBoxStyle01 from "@/components/common/CheckBoxStyle01.vue";
import CheckBoxStyle02 from "@/components/common/CheckBoxStyle02.vue";
import Radio from "@/components/common/Radio.vue";
import FileInput from "@/components/common/FileInput.vue";
import SelectBox from "@/components/common/SelectBox.vue";
import Button from "@/components/common/Button.vue";
import Modal from "@/components/layout/form/Modal.vue";

import VueDatePicker from "vue3-datepicker";

//import axios from "axios";

export default {
  data() {
    return {
      openModal: false,
      user: {
        nickname: "",
        circle: [],
        carrer: [],
        skil: [
          {
            name: "",
            level: [],
          },
        ],
        workTime: "",
        workload: "",
        income: "",
        date: new Date(),
        area: "",
        portfolioNum: "",
        portfoliFile: [],
        resume: [],
        why: "",
        job: "",
        strength: "",
        challenge: "",
        goal: "",
        mbti: "",
        path: "",
      },
      circleList: [
        "2D 모션그래픽 디자이너",
        "촬영자(컷편집 포함)",
        "유튜브 편집자",
        "라이브PD",
        "작가",
        "기획자",
        "애니메이터",
        "3D 아티스트",
      ],
      carrerList: [
        "신입",
        "2년차 이하",
        "3~5년차 이하",
        "6~10년차 이하",
        "11년차 이상",
      ],
      skilList: [
        {
          key: "1",
          value: "Premiere Pro",
        },
        {
          key: "2",
          value: "Final Cut Pro",
        },
        {
          key: "3",
          value: "Davinci Resolve",
        },
        {
          key: "4",
          value: "After Effects",
        },
        {
          key: "5",
          value: "Motion",
        },
        {
          key: "6",
          value: "Fusion",
        },
        {
          key: "7",
          value: "Blender 3D",
        },
        {
          key: "8",
          value: "MAYA",
        },
        {
          key: "9",
          value: "3ds MAX",
        },
        {
          key: "10",
          value: "Cinema4D",
        },
        {
          key: "11",
          value: "시네마캠(ex. Sony FX6 이상)",
        },
        {
          key: "12",
          value: "EFP캠 이상",
        },
        {
          key: "13",
          value: "DSLR",
        },
        {
          key: "14",
          value: "디지털캠코더",
        },
        {
          key: "15",
          value: "Blackmagic ATEM",
        },
        {
          key: "16",
          value: "Vmix",
        },
        {
          key: "17",
          value: "Photoshop",
        },
        {
          key: "18",
          value: "Illustrator",
        },
        {
          key: "19",
          value: "Adobe XD",
        },
      ],
      workTimeList: [
        {
          key: "01",
          value: "평일+주말(하루 8시간 이상)",
        },
        {
          key: "02",
          value: "평일만(하루 8시간 이상)",
        },
        {
          key: "03",
          value: "주말만(하루 8시간 이상)",
        },
        {
          key: "04",
          value: "평일 저녁만(하루 4시간 이상)",
        },
        {
          key: "05",
          value: "1주일 총합 14시간 정도는 할애 가능",
        },
        {
          key: "06",
          value: "1주일 총합 14시간 미만이지만 7시간이상은 할애 가능",
        },
      ],
      workloadList: [
        {
          key: "01",
          value: "시간이 되는 한 가능한 한 많이",
        },
        {
          key: "02",
          value: "하루에 딱 시간을 정하면 그만큼만",
        },
        {
          key: "03",
          value: "적은 양을 꾸준히 하고 싶다",
        },
        {
          key: "04",
          value: "틈틈이 시간 날 때 하고 싶다",
        },
      ],
      incomeList: [
        {
          key: "01",
          value: "월 500만원 이상",
        },
        {
          key: "02",
          value: "300이상 ~ 500만원 미만",
        },
        {
          key: "03",
          value: "200이상 ~ 300만원 미만",
        },
        {
          key: "04",
          value: "50이상 ~ 100만원 미만",
        },
        {
          key: "05",
          value: "50만원 이하여도 상관없다.",
        },
      ],
      areaList: [
        { key: "01", value: "서울/경기" },
        { key: "02", value: "강원도" },
        { key: "03", value: "경상도" },
        { key: "04", value: "충청도" },
        { key: "05", value: "제주도" },
        { key: "06", value: "전라도" },
        { key: "07", value: "기타" },
      ],
      portfolioNumList: [
        {
          key: "01",
          value: "없음",
        },
        {
          key: "02",
          value: "1~5개",
        },
        {
          key: "03",
          value: "6~10개",
        },
        {
          key: "04",
          value: "11~30개",
        },
        {
          key: "05",
          value: "30~50개",
        },
        {
          key: "06",
          value: "50개 이상",
        },
      ],
      whyList: [
        {
          key: "01",
          value: "영상제작으로 돈을 많이 벌고 싶어서",
        },
        {
          key: "02",
          value: "돈보다는 영상제작 경험과 레퍼런스가 필요해서",
        },
        {
          key: "03",
          value:
            "지금 하고 있는 영상제작일보다 더 다양한 일을 하면서 성장하고 싶어서",
        },
        {
          key: "04",
          value: "구속받지 않고 좀 더 자유롭게 시간을 활용하고 싶어서",
        },
        {
          key: "05",
          value:
            "돈도 많이 버고 경험과 레퍼런스도 많이 쌓아 성장도 하고 싶어서",
        },
        {
          key: "06",
          value: "기타",
        },
      ],
      jobList: [
        {
          key: "01",
          value: "프리랜서",
        },
        {
          key: "02",
          value: "영상회사 근무",
        },
        {
          key: "03",
          value: "일반 직장 근무",
        },
        {
          key: "04",
          value: "대학생",
        },
        {
          key: "05",
          value: "고등학생",
        },
        {
          key: "06",
          value: "학원생",
        },
        {
          key: "07",
          value: "기타",
        },
      ],
      mbti: [
        "ENFJ",
        "ENFP",
        "ENTJ",
        "ENTP",
        "ESFJ",
        "ESFP",
        "ESTJ",
        "ESTP",
        "INFJ",
        "INFP",
        "INTJ",
        "INTP",
        "ISFJ",
        "ISFP",
        "ISTJ",
        "ISTP",
      ],

      files: [{ name: "" }],
      showAreaFormInput: false,
      showWhyFormInput: false,
    };
  },

  components: {
    FormItem,
    FormInput,
    VueDatePicker,
    CheckBoxStyle01,
    CheckBoxStyle02,
    Radio,
    FileInput,
    SelectBox,
    Button,
    Modal,
  },

  methods: {
    whySelected(event) {
      let elName = event.target.name;

      switch (elName) {
        case "why":
          if (elName == "why" && event.target.value == "기타") {
            this.showWhyFormInput = true;
          } else {
            this.showWhyFormInput = false;
          }
          break;
        case "area":
          if (elName == "area" && event.target.value == "기타") {
            this.showAreaFormInput = true;
          } else {
            this.showAreaFormInput = false;
          }
          break;
      }
    },
    nicknameChange(value) {
      this.user.nickname = value;
    },
    chceckboxSeleted(checked, val) {
      // console.log(checked, val);
      if (checked) {
        this.user.circle.push(val);
      } else {
        this.user.circle.splice(this.user.circle.indexOf(val), 1);
      }
    },
    onCarrerChanged(checked, val) {
      if (checked) {
        this.user.carrer.push(val);
      } else {
        this.user.carrer.splice(this.user.carrer.indexOf(val), 1);
      }
    },
    workTimeChanged(value) {
      this.user.workTime = value;
    },

    workLoadChanged(value) {
      this.user.workload = value;
    },
    incomeChanged(value) {
      this.user.income = value;
    },
    AreaChanged(value) {
      this.user.area = value;
    },
    portfolioNumChanged(value) {
      this.user.portfolioNum = value;
    },
    WhyChanged(value) {
      this.user.why = value;
    },
    JobChanged(value) {
      this.user.job = value;
    },
    mbtiChanged(value) {
      this.user.mbti = value;
    },
    skilChecked(value, index) {
      this.user.skil[index] = value;
    },
    changedFilie(value, index) {
      // console.log(value);
      this.user.portfoliFile.push(value);
    },
    removeFiles(index) {
      this.user.portfoliFile.splice(index, 1);
    },
    changedFilie2(value, index) {
      this.user.resume.push(value);
    },
    removeFiles2(index) {
      this.user.resume.splice(index, 1);
    },
    submitForm(event) {
      console.log(this.user);
      /*
      
      //유효성 검사

      const nicknameRef = this.$refs.nicknameRef.$refs.nicknameInput;

      if (this.user.nickname == "") {
        nicknameRef.focus();

        return;
      }

      if (this.user.circle.length < 1) {
        const chk = document.getElementsByName("circle");
        chk[0].focus();
      }
      if (this.user.carrer.length < 1) {
        const chk = document.getElementsByName("carrer");
        chk[0].focus();
      }
     
      if (this.user.skil.length < this.skilList.length) {
        for (let j = 1; j < this.skilList.length; j++) {
          const checkboxes = document.querySelectorAll(
            `input[type="checkbox"][name="skil${j}"]`
          );
          let checkedCount = 0;

          for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
              checkedCount++;
            }
          }

          if (checkedCount === 0) {
            checkboxes[0].focus();
          }
        }
      }
    
      if (this.user.workTime == "") {
        document.getElementsByName("workTime")[0].focus();
      }
      if (this.user.workload == "") {
        document.getElementsByName("workload")[0].focus();
      }
      if (this.user.income == "") {
        document.getElementsByName("income")[0].focus();
      }

      if (this.user.date == "") {

      }

      if (this.user.area == "") {
        document.getElementsByName("area")[0].focus();
      }
      if (this.user.portfolioNum == "") {
        document.getElementsByName("portfolioNum")[0].focus();
      }

      if (this.user.portfoliFile.length < 3) {
        document.getElementsByName("portfolio")[0].focus();
      }

      if (this.user.resume.length < 3) {
        document.getElementsByName("resume")[0].focus();
      }
       if (this.user.path == "") {
        document.getElementsByName("path")[0].focus();
      }
      
      */

      this.openModal = true; //팝업창 호출

      /* 
     axios
        .post("http://localhost:5173", this.user)
        .then(function (response) {
          console.log("Response", response);
        })
        .catch(function (err) {
          console.log("Error", err);
        });
        */
    },
  },
};
</script>

<style scoped>
.q_row_style01 {
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  box-sizing: border-box;
  margin: 12px 0;
  background-color: #f3f4fe;
  border-radius: 8px;
}

/*date*/
.v3dp__datepicker {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}
.term_wrap > div {
  margin-bottom: 24px;
}
.btn_wrap {
  margin: 100px auto 200px;
}
@media (max-width: 768px) {
  .v3dp__datepicker {
    width: 100%;
  }
  .q_row_style01 {
    height: 42px;
  }
}
</style>

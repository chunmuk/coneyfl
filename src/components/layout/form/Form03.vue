<template>
  <form @submit.prevent="submitForm" name="frm">
    <div class="form_wrap">
      <!-- input text -->
      <FormItem>
        <template v-slot:q_tit>귀하가 사용하고자 하는 코니네임은 무엇입니까?</template>
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
          귀하는 어떤 형태의 창작활동을 하십니까?
        </template>
        <template v-slot:input_type>
          <CheckBoxStyle01
            v-for="item in plantypeList"
            :key="item"
            class="q_row_style01"
            v-model="user.plantype"
            name="plantype"
            :value="item"
            @plantypeChange="plantypeSeleted"
            ref="checkRef"
          >
            {{ item }}
          </CheckBoxStyle01>
          <CheckBoxStyle01
            class="q_row_style01"
            v-model="user.plantype"
            name="plantype"
            value="기타"
            @plantypeChange="plantypeSeleted"
            ref="checkRef"
          >
            기타 
          </CheckBoxStyle01>
          <input v-if="user.plantype.includes('기타')" type="text" name="plantype" class="text_input" v-model="user.customPlantype">          
        </template>
      </FormItem>


      <FormItem>
        <template v-slot:q_tit>
          귀하는 어떤 분야(인더스트리)에서 활동하십니까?
        </template>
        <template v-slot:input_type>
          <CheckBoxStyle01
            v-for="item in circleList"
            :key="item"
            class="q_row_style01"
            v-model="user.circle"
            name="circle"
            :value="item"
            @circleChange="circleSeleted"
            ref="checkRef"
          >
            {{ item }}
          </CheckBoxStyle01>
          <CheckBoxStyle01
            class="q_row_style01"
            v-model="user.circle"
            name="circle"
            value="기타"
            @circleChange="circleSeleted"
            ref="checkRef"
          >
            기타 
          </CheckBoxStyle01>
          <input v-if="user.circle.includes('기타')" type="text" name="circle" class="text_input" v-model="user.customCircle">
        </template>
      </FormItem>

      <FormItem>
        <template v-slot:q_tit>
          귀하는 어떤 장르의 콘텐츠를 창작하십니까?
        </template>
        <template v-slot:input_type>
          <CheckBoxStyle01
            v-for="item in genreList"
            :key="item"
            class="q_row_style01"
            v-model="user.genre"
            name="genre"
            :value="item"
            @genreChange="genreSeleted"
            ref="checkRef"
          >
            {{ item }}
          </CheckBoxStyle01>
          <CheckBoxStyle01
            class="q_row_style01"
            v-model="user.genre"
            name="genre"
            value="기타"
            @genreChange="genreSeleted"
            ref="checkRef"
          >
            기타 
          </CheckBoxStyle01>
          <input v-if="user.genre.includes('기타')" type="text" name="genre" class="text_input" v-model="user.customGenre">
        </template>
      </FormItem>

      <FormItem>
        <template v-slot:q_tit>
          귀하의 경력은 몇 년 차입니까?
        </template>

        <template v-slot:input_type>
          <Radio
            v-for="item in carrerList"
            v-model="user.carrer"
            :name="'carrer'"
            :id="`carrer${item.key}`"
            :value="item.value"
            @carrerChange="onCarrerChanged"
          >
            {{ item.value }}
          </Radio>
        </template>
      </FormItem>

      <!-- input checkbox02 -->
      <FormItem class="no_epc">
        <template v-slot:q_tit>
          귀하의 사용가능한 툴 스킬을 선택해주세요.
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
          <inputStyle01>
            기타
          </inputStyle01>
        </template>
      </FormItem>

      <!-- input radio -->
      <FormItem>
        <template v-slot:q_tit>귀하가 원하는 업무 할애 시간을 체크해 주세요.</template>
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
        <template v-slot:q_tit>귀하는 언제부터 업무가 가능하십니까?</template>
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
          귀하의 총 기획 포트폴리오 개수는 몇 개입니까?
        </template>
        <template v-slot:q_txt>
          길이, 형태, 장르에 관계없이 총개수만 기재해 주시면 되고, 미완성인
          경우는 개수에 불포함해 주시기 바랍니다.
        </template>
        <template v-slot:input_type>
          <Radio
            v-for="item in portfolioNumList"
            :key="item.key"
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
      <FormItem  v-if="showFileInput">
        <template v-slot:q_tit
          >귀하의 대표 포트폴리오 영상파일 3개 이상 업로드
          해주세요.(모든 파일은 PDF로 등록해 주세요.)</template
        >
        <template v-slot:input_type>
          <FileInput3
            :name="'portfolio'"
            :msg="'선택된 파일 없음'"
            v-model="user.portfoliFile"
            @onChangeFile="changedFilie"
            @onRemoveFiles="removeFiles"
          >
          </FileInput3>
        </template>
      </FormItem>

      <!-- input file-->
      <FormItem>
        <template v-slot:q_tit> 이력서, 자기소개서를 업로드해주세요.(모든 파일은 PDF로 등록해 주세요.) </template>
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
          귀하가 현재 자신있는 장르나 형태가 있나요?
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
          귀하가 더 제작에 도전해 보고 싶은 분야는 어디입니까?
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
          귀하는 아티스트로서 궁극적으로 어떤 목표를 갖고 있나요?
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
        <CheckBoxStyle01
          v-for="(item, i) in agreeList"
          :key="agree"
          name="agree01"
          :value="item"
          @agreeChange="onAgreeChanged"
        >
          <router-link to="/term" class="main_color">
            개인정보 수집 · 이용
          </router-link>
          에 동의합니다.
        </CheckBoxStyle01>
        <CheckBoxStyle01
         v-for="(item, i) in agreeList02"
          :key="agree"
          name="agree02"
          :value="item"
          @agreeChange="onAgreeChanged"
        >
          <router-link to="/term2" class="main_color">이용약관</router-link>에
          동의합니다.
        </CheckBoxStyle01>
      </div>
    </div>
    <Button @click="submitForm()" class="btn_wrap">제출하기</Button>

    <div v-if="isLoading" class="loading-modal">
      <div class="container">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
          </filter>
        </defs>
      </svg>
    </div>

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
import inputStyle01 from "@/components/common/inputStyle01.vue";
import Radio from "@/components/common/Radio.vue";
import FileInput from "@/components/common/FileInput.vue";
import FileInput3 from "@/components/common/FileInput3.vue";
import SelectBox from "@/components/common/SelectBox.vue";
import Button from "@/components/common/Button.vue";
import Modal from "@/components/layout/form/Modal.vue";

import VueDatePicker from "vue3-datepicker";

//import axios from "axios";

export default {
  data() {
    return {
      isLoading: false,
      openModal: false,
      user: {
        nickname: "",
        circle: [],
        plantype: [],
        genre: [],
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
      plantypeList: [
        "2D 캐릭터",
        "3D 캐릭터",
        "일러스트레이터(삽화가)",
        "3D 배경디자이너",
        "2D 배경디자이너",
        "선화가",
      ],
      circleList: [
        "교육",
        "관광여행",
        "IT/플랫폼",
        "게임",
        "제약/의료",
        "뷰티/패션",
        "식품",
        "애완동물",
        "생활용품",
        "공간/건축",
      ],
      genreList: [
        "웹툰",
        "광고콘티",
        "삽화/일러스트",
        "캐릭터",
        "상품디자인",
        "인포그래픽디자인",
      ],
      carrerList: [
        {
          key: "01",
          value: "신입",
        },
        {
          key: "02",
          value: "2년차 이하",
        },
        {
          key: "03",
          value: "3~5년차 이하",
        },
        {
          key: "04",
          value: "6~10년차 이하",
        },
        {
          key: "05",
          value: "11년차 이상",
        },
      ],
      agreeList: [
        "agree01",
      ],
      agreeList02: [
        "agree02",
      ],
      skilList: [
        {
          key: "1",
          value: "Photoshop",
        },
        {
          key: "2",
          value: "Illustrator",
        },
        {
          key: "3",
          value: "InDesign",
        },
        {
          key: "4",
          value: "Procreate",
        },
        {
          key: "5",
          value: "Clip Studio Paint",
        },
        {
          key: "6",
          value: "Corel Painter",
        },
        {
          key: "7",
          value: "Autodesk",
        },
        {
          key: "8",
          value: "Maya",
        },
        {
          key: "9",
          value: "3ds Max",
        },
        {
          key: "10",
          value: "Blender",
        },
        {
          key: "11",
          value: "Zbrush",
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
      showFileInput: true,
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
    inputStyle01,
    Radio,
    FileInput,
    FileInput3,
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
    plantypeSeleted(checked, val) {
      // console.log(checked, val);
      if (checked) {
        this.user.plantype.push(val);
      } else {
        this.user.plantype.splice(this.user.plantype.indexOf(val), 1);
      }
    },
    circleSeleted(checked, val) {
      // console.log(checked, val);
      if (checked) {
        this.user.circle.push(val);
      } else {
        this.user.circle.splice(this.user.circle.indexOf(val), 1);
      }
    },
    genreSeleted(checked, val) {
      // console.log(checked, val);
      if (checked) {
        this.user.genre.push(val);
      } else {
        this.user.genre.splice(this.user.genre.indexOf(val), 1);
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
      this.modelValue = value;
      this.showFileInput = value !== "없음";
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

      this.isLoading = true; // 로딩 상태 활성화

      // setTimeout을 이용하여 2초 후에 모달 오픈
      setTimeout(() => {
        this.isLoading = false; // 로딩 상태 비활성화
        this.openModal = true; // 모달 활성화
      }, 4000);

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
.loading-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 조정 가능 */
}

.container {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  filter: url('#goo');
  animation: rotate-move 2s ease-in-out infinite;
}
.dot { 
  width: 70px;
  height: 70px;
  border-radius: 80%;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.dot-3 {
  background-color: #f74d75;
  animation: dot-3-move 2s ease infinite;
}

.dot-2 {
  background-color: #10beae;
  animation: dot-2-move 2s ease infinite;
}

.dot-1 {
  background-color: #ffe386;
  animation: dot-1-move 2s ease infinite;
}

@keyframes dot-3-move {
  20% {transform: scale(1)}
  45% {transform: translateY(-18px) scale(.45)}
  60% {transform: translateY(-40px) scale(.45)}
  80% {transform: translateY(-40px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
}

@keyframes dot-2-move {
  20% {transform: scale(1)}
  45% {transform: translate(-16px, 12px) scale(.45)}
  60% {transform: translate(-40px, 40px) scale(.45)}
  80% {transform: translate(-40px, 40px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
}

@keyframes dot-1-move {
  20% {transform: scale(1)}
  45% {transform: translate(16px, 12px) scale(.45)}
  60% {transform: translate(40px, 40px) scale(.45)}
  80% {transform: translate(40px, 40px) scale(.45)}
  100% {transform: translateY(0px) scale(1)}
}

@keyframes rotate-move {
  55% {transform: rotate(0deg)}
  80% {transform: rotate(360deg)}
  100% {transform: rotate(360deg)}
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

import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import FormView from "@/views/FormView.vue";
import MoreView from "@/views/MoreView.vue";
import TermView from "@/views/TermView.vue";
import TermView02 from "@/views/TermView02.vue";
import LoginView1 from "@/views/LoginView1.vue";
import SearchIdView from "@/views/SearchIdView.vue";
import SearchPwdView from "@/views/SearchPwdView.vue";
import SignupView1 from "@/views/SignupView1.vue";
import SignupSuccess from "@/views/SignupSuccess.vue";
//import SignupVIew2 from "@/views/SignupVIew2.vue";
//import SignupVIew3 from "@/views/SignupVIew3.vue";
import KakaoFlowView01 from "@/views/KakaoFlowView01.vue";
import KakaoFlowView02 from "@/views/KakaoFlowView02.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: MainView,
    },
    {
      path: "/form",
      component: FormView,
    },
    {
      path: "/more",
      component: MoreView,
    },
    {
      path: "/term",
      component: TermView,
    },
    {
      path: "/term2",
      component: TermView02,
    },
    {
      path: "/login",
      component: LoginView1,
    },
    {
      path: "/searchId",
      component: SearchIdView,
    },
    {
      path: "/searchPwd",
      component: SearchPwdView,
    },
    {
      path: "/signup",
      component: SignupView1,
    },
    {
      path: "/signupSuccess",
      component: SignupSuccess,
    },
    /*
    {
      path: "/signup2",
      component: SignupVIew2,
    },
    {
      path: "/signup3",
      component: SignupVIew3,
    },
    */
    {
      path: "/kakaoflow01",
      component: KakaoFlowView01,
    },
    {
      path: "/kakaoflow02",
      component: KakaoFlowView02,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

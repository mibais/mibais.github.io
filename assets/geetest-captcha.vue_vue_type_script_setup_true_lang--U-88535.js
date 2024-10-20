import{_ as d}from"./index-PoV8YKeN.js";import{d as l,s as u,o as p,m as _,A as f,a5 as m,a3 as h}from"./vue-BVKynzoK.js";const B=l({__name:"geetest-captcha",props:{captchaId:{type:String,required:!0},load:{type:Boolean,default:!1}},emits:["verify","update:load"],setup(a,{expose:i,emit:s}){const n=a,t=s,o=u();function r(){window.initGeetest4({captchaId:n.captchaId,product:"bind",hideBar:["close"],hideSuccess:!0},function(e){e.onReady(()=>{t("update:load",!0),o.value=e,e.onSuccess(()=>{t("verify",e.getValidate())})})})}function c(){o.value.showCaptcha()}return i({showCaptcha:c}),p(async()=>{(window.initGeetest4===null||!window.initGeetest4)&&await d(()=>import("https://static.geetest.com/v4/gt4.js"),__vite__mapDeps([])),r()}),(e,w)=>_((m(),h("div",null,null,512)),[[f,!1]])}});export{B as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

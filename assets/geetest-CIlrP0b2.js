import{_ as k}from"./geetest-captcha.vue_vue_type_script_setup_true_lang-DB3Ls_t5.js";import{k as _,A as x}from"./index-DkOGwy-T.js";import{V}from"./antd-9nlSCyVV.js";import{d as h,s as l,f as v,a5 as c,a3 as w,k as B,u as f,H as C,ac as R,ad as A,G as N,af as T,ag as q,F as E}from"./vue-BVKynzoK.js";const F="c59eeefda54b5a5789869ede615321a3",j=h({__name:"geetest",props:{loginParam:{type:Object,required:!0},loginText:{type:String,required:!0}},emits:["submit","beforeVerify"],setup(s,{expose:u,emit:m}){const p=s,n=l(),a=m,o=l(!1),t=v(!1);function d(){n.value.showCaptcha()}async function g(r){o.value=!0;try{const e=await _({...p.loginParam,type:"captcha",extra:r});a("submit",e.code!=200?{res:!1,errMsg:e.msg}:{res:!0,token:e.data.token})}catch(e){e instanceof x&&a("submit",!1)}finally{o.value=!1}}return u({passValid:d}),(r,e)=>{const y=k,b=V;return c(),w(E,null,[B(y,{ref_key:"geetestRef",ref:n,load:f(t),"onUpdate:load":e[0]||(e[0]=i=>C(t)?t.value=i:null),"captcha-id":F,onVerify:g},null,8,["load"]),f(t)?(c(),R(b,{key:0,block:"",type:"primary",loading:o.value,size:"large",onClick:e[1]||(e[1]=i=>a("beforeVerify"))},{default:A(()=>[N(T(s.loginText),1)]),_:1},8,["loading"])):q("",!0)],64)}}});export{j as default};

import{i as b}from"./shop-DQ5OnVJ8.js";import{u as w}from"./index-DCA2stvC.js";import{b7 as x,J as B,$ as F,a0 as I,V as N,at as V}from"./antd-_WrWzocG.js";import{d as q,f as m,a5 as M,a3 as P,k as e,ad as n,u as s,G as l,H as T,F as U}from"./vue-f4UZefmh.js";const G=q({__name:"coupon",props:{shopId:{type:Number,require:!0}},emits:["applyCoupon"],setup(i,{emit:d}){const _=i,c=d,a=m({coupon:""}),t=m(!1);async function f(){const{data:r}=await b(a.value.coupon,_.shopId),o=w();c("applyCoupon",{couponCode:a.value.coupon,discountedPrice:r}),o.success("优惠码使用成功 😄",3),t.value=!1}function C(){c("applyCoupon",{couponCode:"",discountedPrice:null}),t.value=!1}return(r,o)=>{const p=B,v=F,y=I,g=N,k=V;return M(),P(U,null,[e(p,{type:"dashed",onClick:o[0]||(o[0]=u=>t.value=!0)},{icon:n(()=>[e(s(x))]),default:n(()=>[l(" 使用优惠码 ")]),_:1}),e(k,{open:s(t),"onUpdate:open":o[2]||(o[2]=u=>T(t)?t.value=u:null),closable:!1,title:"使用优惠码",width:400},{footer:n(()=>[e(p,{type:"primary",onClick:f},{default:n(()=>[l(" 使用 ")]),_:1}),e(p,{onClick:C},{default:n(()=>[l(" 取消使用 ")]),_:1})]),default:n(()=>[e(g,{model:s(a)},{default:n(()=>[e(y,{name:"coupon",rules:[{required:!0,message:"请输入优惠码"}]},{default:n(()=>[e(v,{value:s(a).coupon,"onUpdate:value":o[1]||(o[1]=u=>s(a).coupon=u)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])],64)}}});export{G as _};

import{i as x,j as A}from"./shop-BaB-5_xH.js";import{u as B}from"./index-z4v-aIyY.js";import{b8 as N,aF as R,S as q,aw as D,K as M,N as O,F as S,am as T}from"./antd-CrhK6lnF.js";import{d as U,f as m,s as V,w as $,a5 as f,a3 as j,u as t,ac as v,ad as o,k as a,G as i,af as E,H as G,F as H}from"./vue-DIvP5FMT.js";const Q=U({__name:"coupon",props:{shopId:{type:Number,require:!0}},emits:["applyCoupon"],setup(C,{emit:y}){const r=C,d=y,u=m({coupon:""}),_=V(),s=m(!1),n=m({couponCode:"",discountedPrice:-1});async function k(){_.value.validate().then(async()=>{const{data:l}=await x(u.value.coupon,r.shopId);n.value={couponCode:u.value.coupon,discountedPrice:l};const e=B();d("applyCoupon",n.value),e.success("优惠码使用成功 😄",3),s.value=!1})}async function w(){const{data:l}=await A(u.value.coupon,r.shopId);n.value.discountedPrice=l,d("applyCoupon",n.value)}function g(){u.value.coupon="",n.value.discountedPrice=-1,d("applyCoupon",n.value)}return $(()=>r.shopId,()=>{n.value.couponCode&&w()}),(l,e)=>{const c=q,F=D,I=M,P=O,b=S,h=T;return f(),j(H,null,[t(n).discountedPrice<0?(f(),v(c,{key:0,onClick:e[0]||(e[0]=p=>s.value=!0)},{icon:o(()=>[a(t(N))]),default:o(()=>[i(" 使用优惠码 ")]),_:1})):(f(),v(F,{key:1,title:"确定要取消使用优惠码？",onConfirm:g},{default:o(()=>[a(c,{type:"dashed"},{icon:o(()=>[a(t(R))]),default:o(()=>[i(" "+E(t(n).couponCode),1)]),_:1})]),_:1})),a(h,{open:t(s),"onUpdate:open":e[3]||(e[3]=p=>G(s)?s.value=p:null),closable:!1,title:"使用优惠码",width:400},{footer:o(()=>[a(c,{type:"primary",onClick:k},{default:o(()=>[i("使用")]),_:1}),a(c,{onClick:e[1]||(e[1]=p=>s.value=!1)},{default:o(()=>[i("取消")]),_:1})]),default:o(()=>[a(b,{ref_key:"formRef",ref:_,model:t(u)},{default:o(()=>[a(P,{name:"coupon",rules:[{required:!0,message:"请输入优惠码"}]},{default:o(()=>[a(I,{value:t(u).coupon,"onUpdate:value":e[2]||(e[2]=p=>t(u).coupon=p)},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])],64)}}});export{Q as _};

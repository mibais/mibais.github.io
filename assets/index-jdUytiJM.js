import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-CphX3eIM.js";import{d as G,K as H,N as L,aa as Q,aI as q,aJ as W,ab as X,aK as Z,S as ee,m as ae,F as te,a9 as ne,an as oe,am as se}from"./antd-BBX7OAHx.js";import{_ as le}from"./detail.vue_vue_type_script_setup_true_lang-BS2i89tg.js";import{b as ue,B as C,a as ie}from"./bought-Dyn9kUbO.js";import{u as de}from"./index-B0wCXvdP.js";import{d as pe,f as m,r as _e,w as re,c as me,o as ce,a5 as i,ac as v,ad as e,k as a,u as s,a3 as k,F as x,al as fe,G as d,af as y,H as U,ag as c,ak as ge,a8 as ve}from"./vue-CP9fVXMC.js";import"./context-CeXoMWV6.js";import"./shop-B7LS-64f.js";const ke=ve("span",{"text-20px":"","line-height-32px":"","mr-12px":"","mb-0":"",truncate:"","font-600":""},"购买记录管理",-1),ze=pe({__name:"index",setup(xe){const f=m(!1),M=m([{title:"#",dataIndex:"id"},{title:"商品名",dataIndex:"shopName"},{title:"购买日期",dataIndex:"datetime"},{title:"自动续费",dataIndex:"renew"},{title:"价格",dataIndex:"price"},{title:"状态",dataIndex:"status"},{title:"操作",dataIndex:"action"}]),N=m(),p=_e({pageSize:10,current:1,total:0,pageSizeOptions:["10","20","30","40"],showSizeChanger:!0,showQuickJumper:!0,showTotal:t=>`${t}条记录`,onChange(t,n){p.pageSize=n,p.current=t,I()}}),l=m({});async function I(){if(!f.value){f.value=!0;try{const{data:t}=await ue({size:p.pageSize,current:p.current,param:l.value});N.value=t.records,p.total=t.total,p.pageSize=t.size,p.current=t.current}finally{f.value=!1}}}const _=m(!1),z=m(0),T=de();function F(t){_.value=!0,z.value=t.snapshotId}const w=m();re(w,t=>{l.value.startDateTime=t?t[0]:void 0,l.value.endDateTime=t?t[1]:void 0});const V=me(()=>{const t={};for(const n in C)t[n]=C[n];return t});async function Y(t){await ie(t.userid,t.id),T.success("套餐激活成功")}return ce(()=>{I()}),(t,n)=>{const D=H,g=L,r=Q,h=q,$=W,b=X,O=Z,S=ee,P=ae,R=te,B=ne,j=oe,A=se,E=K;return i(),v(E,null,{title:e(()=>[ke]),default:e(()=>[a(B,{"mb-4":""},{default:e(()=>[a(R,{modal:s(l)},{default:e(()=>[a(b,{gutter:16},{default:e(()=>[a(r,{span:8},{default:e(()=>[a(g,{label:"用户名",name:"userName"},{default:e(()=>[a(D,{value:s(l).userName,"onUpdate:value":n[0]||(n[0]=o=>s(l).userName=o)},null,8,["value"])]),_:1})]),_:1}),a(r,{span:8},{default:e(()=>[a(g,{label:"商品名",name:"shopName"},{default:e(()=>[a(D,{value:s(l).shopName,"onUpdate:value":n[1]||(n[1]=o=>s(l).shopName=o)},null,8,["value"])]),_:1})]),_:1}),a(r,{span:8},{default:e(()=>[a(g,{label:"购买状态",name:"boughtStatus"},{default:e(()=>[a($,{value:s(l).boughtStatus,"onUpdate:value":n[2]||(n[2]=o=>s(l).boughtStatus=o)},{default:e(()=>[(i(!0),k(x,null,fe(s(V),(o,u)=>(i(),v(h,{key:u,value:u},{default:e(()=>[d(y(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),a(b,{gutter:16},{default:e(()=>[a(r,{span:8},{default:e(()=>[a(g,{label:"购买日期"},{default:e(()=>[a(O,{value:s(w),"onUpdate:value":n[3]||(n[3]=o=>U(w)?w.value=o:null),placeholder:["开始日期","结束日期"]},null,8,["value"])]),_:1})]),_:1}),a(r,{span:8},{default:e(()=>[a(g,{label:"自动续期",name:"renew"},{default:e(()=>[a($,{value:s(l).renew,"onUpdate:value":n[4]||(n[4]=o=>s(l).renew=o),"allow-clear":!0},{default:e(()=>[a(h,{value:1},{default:e(()=>[d(" 开启 ")]),_:1}),a(h,{value:0},{default:e(()=>[d(" 关闭 ")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),a(b,{span:24,style:{"text-align":"right"}},{default:e(()=>[a(r,{span:24},{default:e(()=>[a(P,{flex:"","justify-end":"","w-full":""},{default:e(()=>[a(S,{loading:s(f),type:"primary",onClick:I},{default:e(()=>[d(" 查询 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modal"])]),_:1}),a(b,{gutter:16},{default:e(()=>[a(r,{span:24},{default:e(()=>[a(B,{title:"购买记录"},{default:e(()=>[a(j,{loading:s(f),columns:s(M),"data-source":s(N),pagination:s(p),scroll:{x:100}},{bodyCell:e(({column:o,record:u})=>[o.dataIndex==="shopName"?(i(),v(S,{key:0,type:"link",onClick:J=>F(u)},{default:e(()=>[d(y(u.shopName),1)]),_:2},1032,["onClick"])):c("",!0),o.dataIndex==="datetime"?(i(),k(x,{key:1},[d(y(s(G)(u.datetime).format("YYYY-MM-DD")),1)],64)):c("",!0),o.dataIndex==="renew"?(i(),k(x,{key:2},[d(y(u.renew?"开启":"关闭"),1)],64)):c("",!0),o.dataIndex==="status"?(i(),k(x,{key:3},[d(y(s(C)[u.status]),1)],64)):c("",!0),o.dataIndex==="action"?(i(),k(x,{key:4},[u.status==="no_use"?(i(),v(S,{key:0,type:"primary",onClick:J=>Y(u)},{default:e(()=>[d(" 激活套餐 ")]),_:2},1032,["onClick"])):c("",!0)],64)):c("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1})]),_:1})]),_:1}),a(A,{open:s(_),"onUpdate:open":n[5]||(n[5]=o=>U(_)?_.value=o:null),width:"800px",title:"详情",onCancel:n[6]||(n[6]=o=>_.value=!1),onOk:n[7]||(n[7]=o=>_.value=!1)},{default:e(()=>[s(_)?(i(),v(ge(le),{key:0,"snapshot-id":s(z)},null,8,["snapshot-id"])):c("",!0)]),_:1},8,["open"])]),_:1})}}});export{ze as default};

import{i as O,j as R}from"./index-jVU5J58G.js";import{d as S,aq as x,f as P,a5 as U,a3 as $,k as e,ad as t,G as o,u as s,H as C,F as M,a8 as j}from"./vue-f4UZefmh.js";import{u as F}from"./multi-tab-eX98aFPH.js";import{b as T,u as B,a as V}from"./index-DCA2stvC.js";import{W as D,J as q,ab as z,z as L,a1 as E,a0 as G,m as N,V as H,at as h,aL as J,aF as W,av as I,aM as K}from"./antd-_WrWzocG.js";const te=S({__name:"updatePasswd",setup(A){const y=x(),u=P(!1),g=F(),c=T(),_=B(),l=P({newPasswd:"",oldPasswd:""});async function d(){const{data:n}=await O(l.value);if(n){const a=V();try{await a.logout()}finally{_.success("密码修改成功，请重新登陆...",2),y.push({path:"/login"}).then(()=>{g.clear(),c.clear()})}}}return(n,a)=>{const p=q,w=z,v=L,f=E,m=G,b=N,k=H,i=h;return U(),$(M,null,[e(v,null,{extra:t(()=>[e(p,{type:"primary",onClick:a[0]||(a[0]=r=>{u.value=!0})},{default:t(()=>[o(" 修改密码 ")]),_:1})]),default:t(()=>[e(w,{description:"设置一个高强度密码，以防止他人未经授权访问您的账户"},{title:t(()=>[o(" 密码 ")]),avatar:t(()=>[e(s(D),{style:{fontSize:"2.6em"}})]),_:1})]),_:1}),e(i,{open:s(u),"onUpdate:open":a[4]||(a[4]=r=>C(u)?u.value=r:null),closable:!1,"mask-closable":!1,footer:null},{default:t(()=>[e(k,{model:s(l),name:"basic","label-col":{span:8},"wrapper-col":{span:16},onFinish:d},{default:t(()=>[e(m,{label:"输入旧密码",name:"oldPasswd","has-feedback":!0,rules:[{required:!0,message:"请输入旧密码"}]},{default:t(()=>[e(f,{value:s(l).oldPasswd,"onUpdate:value":a[1]||(a[1]=r=>s(l).oldPasswd=r)},null,8,["value"])]),_:1}),e(m,{label:"输入新密码",name:"newPasswd","has-feedback":!0,rules:[{required:!0,message:"请输入新密码"},{min:8,max:64,message:"密码长度在8-64之间"}]},{default:t(()=>[e(f,{value:s(l).newPasswd,"onUpdate:value":a[2]||(a[2]=r=>s(l).newPasswd=r)},null,8,["value"])]),_:1}),e(m,{"wrapper-col":{offset:8,span:16}},{default:t(()=>[e(b,null,{default:t(()=>[e(p,{type:"primary","html-type":"submit"},{default:t(()=>[o(" 修改 ")]),_:1}),e(p,{type:"default",onClick:a[3]||(a[3]=r=>u.value=!1)},{default:t(()=>[o(" 取消 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])],64)}}}),ae=S({__name:"deleteUser",emits:["close"],setup(A){const y=x(),u=F(),g=T(),c=B(),_=P(!1);async function l(){const{data:d}=await R();if(d){const n=V();try{await n.logout()}finally{c.success("账号注销成功，再见 👋...",2),y.push({path:"/login"}).then(()=>{u.clear(),g.clear()})}}else c.error("注销失效，请稍后再试")}return(d,n)=>{const a=q,p=z,w=L,v=W,f=I,m=K,b=N,k=h;return U(),$(M,null,[e(w,null,{extra:t(()=>[e(a,{type:"primary",danger:"",onClick:n[0]||(n[0]=i=>_.value=!0)},{default:t(()=>[o(" 删除账户 ")]),_:1})]),default:t(()=>[e(p,{description:"这将删除你所有的账号数据，请谨慎操作！"},{title:t(()=>[o(" 注销 ")]),avatar:t(()=>[e(s(J),{style:{fontSize:"2.6em"}})]),_:1})]),_:1}),e(k,{open:s(_),"onUpdate:open":n[2]||(n[2]=i=>C(_)?_.value=i:null),closable:!1,"mask-closable":!1,footer:null},{default:t(()=>[j("div",null,[e(m,null,{default:t(()=>[e(v,{level:4},{default:t(()=>[o(" 确定注销吗？ ")]),_:1}),e(f,null,{default:t(()=>[o(" 注销操作无法恢复，你将丢失所有数据，请谨慎操作！ ")]),_:1})]),_:1}),e(b,{align:"center"},{default:t(()=>[e(a,{danger:"",type:"primary",onClick:l},{default:t(()=>[o(" 注销 ")]),_:1}),e(a,{type:"default",onClick:n[1]||(n[1]=i=>_.value=!1)},{default:t(()=>[o(" 取消 ")]),_:1})]),_:1})])]),_:1},8,["open"])],64)}}});export{te as _,ae as a};

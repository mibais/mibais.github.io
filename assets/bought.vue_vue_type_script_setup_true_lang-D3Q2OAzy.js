import{d as v,an as C,am as b}from"./antd-BBX7OAHx.js";import{b as B,B as N}from"./bought-Dyn9kUbO.js";import{d as M,f as r,r as Y,o as D,a5 as i,ac as V,ad as x,k as $,u as a,a3 as d,F as c,G as l,af as m,ag as p}from"./vue-CP9fVXMC.js";const T=M({__name:"bought",props:{user:{type:Object,required:!0}},emits:["close"],setup(g,{emit:I}){const h=I,y=g,n=r(!1),w=r([{title:"#",dataIndex:"id"},{title:"商品名",dataIndex:"shopName"},{title:"购买日期",dataIndex:"datetime"},{title:"自动续费",dataIndex:"renew"},{title:"价格",dataIndex:"price"},{title:"状态",dataIndex:"status"}]),f=r(),t=Y({pageSize:5,current:1,total:0,pageSizeOptions:["10","20","30","40"],showSizeChanger:!0,showQuickJumper:!0,showTotal:e=>`${e}条记录`,onChange(e,o){t.pageSize=o,t.current=e,_()}}),S=r({userId:y.user.userId});async function _(){if(!n.value){n.value=!0;try{const{data:e}=await B({size:t.pageSize,current:t.current,param:S.value});f.value=e.records,t.total=e.total,t.pageSize=e.size,t.current=e.current}finally{n.value=!1}}}return D(()=>{_()}),(e,o)=>{const k=C,z=b;return i(),V(z,{title:`${g.user.userName}的购买记录`,open:!0,width:1e3,onCancel:o[0]||(o[0]=s=>h("close"))},{default:x(()=>[$(k,{loading:a(n),columns:a(w),"data-source":a(f),pagination:a(t),scroll:{x:100}},{bodyCell:x(({column:s,record:u})=>[s.dataIndex==="datetime"?(i(),d(c,{key:0},[l(m(a(v)(u.datetime).format("YYYY-MM-DD")),1)],64)):p("",!0),s.dataIndex==="renew"?(i(),d(c,{key:1},[l(m(u.renew?"开启":"关闭"),1)],64)):p("",!0),s.dataIndex==="status"?(i(),d(c,{key:2},[l(m(a(N)[u.status]),1)],64)):p("",!0)]),_:1},8,["loading","columns","data-source","pagination"])]),_:1},8,["title"])}}});export{T as _};

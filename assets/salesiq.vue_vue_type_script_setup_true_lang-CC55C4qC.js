import{a as p}from"./index-CmXF4KPF.js";import{d as h,w as z,o as q,a5 as v,a3 as g}from"./vue-DIvP5FMT.js";const b="siq613277a4bcb29e3eec3a62c36f067329",S=h({__name:"salesiq",props:{visible:{type:Boolean,default:!1}},emits:["close"],setup(c,{emit:l}){const d=c,w=l;z(()=>d.visible,e=>{e?window.$zoho.salesiq.floatwindow.visible("show"):window.$zoho.salesiq.floatwindow.visible("hide")});const i=p();function f(){window.$zoho.salesiq.floatwindow.minimize(()=>{w("close")})}function m(){var e,o,s,t,n,a,r;window.$zoho.salesiq.visitor.email((e=i.userInfo)==null?void 0:e.email),window.$zoho.salesiq.visitor.name((o=i.userInfo)==null?void 0:o.username),window.$zoho.salesiq.visitor.id((s=i.userInfo)==null?void 0:s.id.toString),window.$zoho.salesiq.visitor.info({钱包:(t=i.userInfo)==null?void 0:t.money.toString(),剩余流量:(n=i.userInfo)==null?void 0:n.leftTrafficGb.toString(),等级过期:(a=i.userInfo)==null?void 0:a.gradeExpire.toString(),等级:(r=i.userInfo)==null?void 0:r.grade.toString()})}function u(){var t;window.$zoho={},window.$zoho.salesiq={widgetcode:b,values:{},ready(){window.$zoho.salesiq.floatbutton.visible("hide"),f(),m()}};const e=document,o=e.createElement("script");o.type="text/javascript",o.id="zsiqscript",o.defer=!0,o.src="https://salesiq.zohopublic.com.cn/widget";const s=e.getElementsByTagName("script")[0];(t=s.parentNode)==null||t.insertBefore(o,s)}return q(()=>{u()}),(e,o)=>(v(),g("div"))}});export{S as _};

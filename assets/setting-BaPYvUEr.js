import{u as fe,v as re,s as pe,a as de,c as me,e as ve,b as be,g as ge,h as ye}from"./index-Cw3_2swd.js";import{t as V}from"./third-part-fnhvkpeN.js";import{u as G,_ as Le,t as ke,a as he}from"./index-etFnWRvz.js";import{$ as we,Z as Ae,Y as Ce,av as Q,ab as q,K as z,B as Y,E as J,ah as H,aw as Se,ax as $e,ay as W,z as Ue,a1 as Z,az as Ie,aA as Te,aB as xe,W as j,ao as Re,aC as Ne,aD as Pe,aE as Be,aF as Ee,aG as He,aH as Ke,a0 as X,J as Oe,m as Ge,at as ze,aI as De,ai as ee,aJ as Me,A as Ve,x as Fe,aK as qe,aj as ae,M as Ye}from"./antd-BiDZImxE.js";import{d as K,f as g,o as D,a5 as c,ac as b,ad as a,k as e,G as l,af as U,u as t,ag as L,a8 as R,a3 as E,H as F,F as te,au as Je,r as Ze,c as le}from"./vue-CP9fVXMC.js";import{l as Qe,s as We}from"./index-BGa1xil1.js";import{_ as je,a as Xe}from"./deleteUser.vue_vue_type_script_setup_true_lang-BYEsY58r.js";import{g as ea}from"./tools-DhnPRmOg.js";import"./multi-tab-G-brbhvO.js";const aa="绑定第三方账号就可以借助第三方账号登陆网站。",ta=K({__name:"account-setting",setup(O){const n=g();function f(s){s==="google"&&window.open(V.getGoogleLoginUrl()),s==="github"&&(window.location.href=V.getGoogleLoginUrl()),s==="alipay"&&(window.location.href=V.getAliLoginUrl())}async function r(s){await fe(s),G().success("解绑成功"),await m()}async function m(){const{data:s}=await re();n.value=s}return D(()=>{m()}),(s,u)=>{const k=Q,S=q,h=z,I=Y,v=J,o=H;return c(),b(o,{title:"账号绑定",bordered:!1},{default:a(()=>[e(k,{"ml-5":"","mb-3":""},{default:a(()=>[l(U(aa))]),_:1}),e(v,{"item-layout":"horizontal","data-source":t(n)},{renderItem:a(({item:i})=>[e(I,null,{actions:a(()=>[i.band?(c(),b(h,{key:0,type:"link",onClick:y=>r(i.type)},{default:a(()=>[l(" 解绑 ")]),_:2},1032,["onClick"])):(c(),b(h,{key:1,type:"link",onClick:y=>f(i.type)},{default:a(()=>[l(" 绑定 ")]),_:2},1032,["onClick"]))]),default:a(()=>[e(S,{description:i.band?`已绑定 ${i.name}`:"尚未绑定"},{title:a(()=>[l(U(i.type),1)]),avatar:a(()=>[i.type==="google"?(c(),b(t(we),{key:0,style:{color:"#ff4000"},class:"account-setting-avatar"})):L("",!0),i.type==="alipay"?(c(),b(t(Ae),{key:1,style:{color:"#2eabff"},class:"account-setting-avatar"})):L("",!0),i.type==="github"?(c(),b(t(Ce),{key:2,style:{color:"#fff","background-color":"#2eabff"},class:"account-setting-avatar"})):L("",!0)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1})}}}),la=Le(ta,[["__scopeId","data-v-0a7b4bcd"]]),na=[{label:"中国",value:"CN",isLeaf:!1},{label:"中国香港",value:"HK",isLeaf:!1},{label:"中国台湾",value:"TW",isLeaf:!1},{label:"中国澳门",value:"MO",isLeaf:!1},{label:"阿根廷",value:"AR",isLeaf:!1},{label:"奥地利",value:"AT",isLeaf:!1},{label:"澳大利亚",value:"AU",isLeaf:!1},{label:"孟加拉",value:"BD",isLeaf:!1},{label:"保加利亚",value:"BG",isLeaf:!1},{label:"巴林",value:"BH",isLeaf:!1},{label:"巴西",value:"BR",isLeaf:!1},{label:"不丹",value:"BT",isLeaf:!1},{label:"加拿大",value:"CA",isLeaf:!1},{label:"瑞士",value:"CH",isLeaf:!1},{label:"哥伦比亚",value:"CO",isLeaf:!1},{label:"德国",value:"DE",isLeaf:!1},{label:"丹麦",value:"DK",isLeaf:!1},{label:"埃及",value:"EG",isLeaf:!1},{label:"西班牙",value:"ES",isLeaf:!1},{label:"法国",value:"FR",isLeaf:!1},{label:"英国",value:"GB",isLeaf:!1},{label:"格陵兰",value:"GL",isLeaf:!1},{label:"希腊",value:"GR",isLeaf:!1},{label:"克罗地亚",value:"HR",isLeaf:!1},{label:"匈牙利",value:"HU",isLeaf:!1},{label:"印度尼西亚",value:"ID",isLeaf:!1},{label:"爱尔兰",value:"IE",isLeaf:!1},{label:"以色列",value:"IL",isLeaf:!1},{label:"印度",value:"IN",isLeaf:!1},{label:"伊拉克",value:"IQ",isLeaf:!1},{label:"伊朗",value:"IR",isLeaf:!1},{label:"冰岛",value:"IS",isLeaf:!1},{label:"意大利",value:"IT",isLeaf:!1},{label:"日本",value:"JP",isLeaf:!1},{label:"柬埔寨",value:"KH",isLeaf:!1},{label:"朝鲜",value:"KR",isLeaf:!1},{label:"老挝",value:"LA",isLeaf:!1},{label:"黎巴嫩",value:"LB",isLeaf:!1},{label:"立陶宛",value:"LT",isLeaf:!1},{label:"卢森堡",value:"LU",isLeaf:!1},{label:"缅甸",value:"MM",isLeaf:!1},{label:"蒙古",value:"MN",isLeaf:!1},{label:"墨西哥",value:"MX",isLeaf:!1},{label:"马来西亚",value:"MY",isLeaf:!1},{label:"荷兰",value:"NL",isLeaf:!1},{label:"挪威",value:"NO",isLeaf:!1},{label:"新西兰",value:"NZ",isLeaf:!1},{label:"菲律宾",value:"PH",isLeaf:!1},{label:"巴基斯坦",value:"PK",isLeaf:!1},{label:"波兰",value:"PL",isLeaf:!1},{label:"葡萄牙",value:"PT",isLeaf:!1},{label:"罗马尼亚",value:"RO",isLeaf:!1},{label:"俄罗斯",value:"RU",isLeaf:!1},{label:"瑞典",value:"SE",isLeaf:!1},{label:"新加坡",value:"SG",isLeaf:!1},{label:"叙利亚",value:"SY",isLeaf:!1},{label:"泰国",value:"TH",isLeaf:!1},{label:"土耳其",value:"TR",isLeaf:!1},{label:"乌克兰",value:"UA",isLeaf:!1},{label:"美国",value:"US",isLeaf:!1},{label:"乌拉圭",value:"UY",isLeaf:!1},{label:"梵蒂冈",value:"VA",isLeaf:!1},{label:"委内瑞拉",value:"VE",isLeaf:!1},{label:"越南",value:"VN",isLeaf:!1},{label:"也门",value:"YE",isLeaf:!1},{label:"南非",value:"ZA",isLeaf:!1}],sa=R("b",null,"失效",-1),oa=K({__name:"resetSubLink",setup(O){const n=g(),f=G(),r=g(!1),m=Se({scriptUrl:ke(()=>import("./iconfont-B_hmDsvv.js"),__vite__mapDeps([]))}),s=g({trustArea:[],autoAreaTrust:!0,enabledProtect:!0,protectTimeRange:[]}),u=g(na);async function k(){const{data:v}=await pe();n.value=v.token,s.value=v}async function S(){const{data:v}=await de();G().success("重置成功"),n.value=v}async function h(v){const o=v[v.length-1];o.loading=!0;try{const{data:i}=await Qe(o.value);o.children=i,u.value=[...u.value]}finally{o.loading=!1}}async function I(){if(!r.value){r.value=!0,f.loading({content:"正在保存中...",key:"saveSubSafe",duration:0});try{await We(s.value),f.success({content:"保存成功",key:"saveSubSafe",duration:2})}finally{r.value=!1}}}return D(()=>{k()}),(v,o)=>{const i=q,y=z,_=W,p=Y,w=Ue,C=Z,N=Ie,P=Te,x=xe,B=j,T=J,A=H;return c(),b(A,{title:"订阅设置"},{default:a(()=>[e(T,{"item-layout":"horizontal"},{default:a(()=>[e(p,null,{actions:a(()=>[e(y,{danger:"",type:"primary",onClick:S},{default:a(()=>[l(" 重置 ")]),_:1})]),default:a(()=>[e(i,{"mb-5":""},{avatar:a(()=>[e(t(m),{style:{fontSize:"2.6em"},type:"icon-dingyue"})]),title:a(()=>[l(" 重置订阅链接 ")]),description:a(()=>[l(" 这里会重置您的订阅链接并"),sa,l("之前的订阅，此操作不可逆请谨慎操作 ")]),_:1}),l(" 当前订阅链接："),e(_,{class:"accent"},{default:a(()=>[l(U(t(n)),1)]),_:1})]),_:1}),e(p,{"mt-5":""},{default:a(()=>[e(i,{"mb-5":""},{title:a(()=>[l(" 订阅保护 ")]),avatar:a(()=>[e(t($e),{style:{fontSize:"2.6em"}})]),description:a(()=>[l(" 订阅安全关闭之后会让你的订阅处于滥用的风险 ")]),_:1}),l(" # "),e(B,null,{default:a(()=>[e(C,{tooltip:"订阅保护的总开关",label:"订阅安全保护"},{default:a(()=>[e(w,{checked:t(s).enabledProtect,"onUpdate:checked":o[0]||(o[0]=d=>t(s).enabledProtect=d),"checked-children":"开","un-checked-children":"关"},null,8,["checked"])]),_:1}),e(C,{tooltip:"将登录网站时所在地区自动列为保护区域，建议开启",label:"自动区域保护"},{default:a(()=>[e(w,{checked:t(s).autoAreaTrust,"onUpdate:checked":o[1]||(o[1]=d=>t(s).autoAreaTrust=d),"checked-children":"开","un-checked-children":"关"},null,8,["checked"])]),_:1}),e(C,{label:"区域保护","help:":"选择授信地区以保护订阅安全",tooltip:"只有列在此处的地区才能进行订阅"},{default:a(()=>[e(N,{value:t(s).trustArea,"onUpdate:value":o[2]||(o[2]=d=>t(s).trustArea=d),"load-data":h,options:t(u),multiple:"","show-search":"",placeholder:"尚未选择授信地区"},null,8,["value","options"])]),_:1}),e(C,{label:"时间段保护",help:"置空则关闭时间段保护",tooltip:"只有在该时间段才允许订阅"},{default:a(()=>[e(P,{value:t(s).protectTimeRange,"onUpdate:value":o[3]||(o[3]=d=>t(s).protectTimeRange=d),"second-step":30,"minute-step":15,"value-format":"HHmmss",format:"HH:mm"},null,8,["value"])]),_:1}),e(C,{tooltip:"订阅链接自获取之后的存活时间，海外ip订阅不受此影响",help:"避免订阅链接被滥用而设置的存活期，无法关闭",label:"订阅链接有效期"},{default:a(()=>[e(x,{"addon-after":"秒",value:"60",disabled:""})]),_:1}),e(C,null,{default:a(()=>[e(y,{type:"primary",loading:t(r),onClick:I},{default:a(()=>[l(" 保存 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),ua={key:0,"mt-5":""},ia=R("a",{href:"https://www.microsoft.com/en-us/account/authenticator/"},"微软验证器",-1),ca=R("a",{href:"https://support.1password.com/one-time-passwords/"},"1Password",-1),_a={key:1,"mt-5":""},fa={key:2,"mt-10":"","mb-10":""},ra={class:"steps-action"},pa=K({__name:"double-auth",setup(O){const n=g(0),f=g(""),r=g(!1),m=g({qrcodeUrl:"",secretKey:"",verify:!1,backup:!1,backupCode:"",enabled:!1}),s=G(),u=g(!1),k=g(!1);async function S(){const{data:_}=await be();m.value=_,_.verify?_.backup||(n.value=1):n.value=0}async function h(){const{data:_}=await ge();return _}async function I(){return f.value?(await ye(f.value),s.success("绑定成功！"),!0):(s.warning("请先输入验证码"),!1)}async function v(_){_===1&&await I()&&(n.value=1),_===2&&await h()&&(n.value=2)}async function o(){await me(),s.success("两步验证已关闭"),await y()}function i(_){if(!_){k.value=!1;return}r.value?k.value=!0:(u.value=!0,S())}async function y(){const{data:_}=await ve();r.value=_}return D(()=>{y()}),(_,p)=>{const w=z,C=Ne,N=q,P=Y,x=Pe,B=Be,T=Ee,A=Q,d=He,M=W,ne=Ke,se=X,oe=Z,ue=Oe,ie=Ge,ce=H,_e=ze;return c(),E(te,null,[e(P,null,{extra:a(()=>[e(C,{title:"你确定要关闭两步验证吗？",open:t(k),onOpenChange:i,onConfirm:o},{default:a(()=>[e(w,{type:"default"},{default:a(()=>[l(U(t(r)?"关闭":"开启")+"两步验证 ",1)]),_:1})]),_:1},8,["open"])]),default:a(()=>[e(N,{description:`为你的账号更有保障力. 当前状态：${t(r)?"已开启":"未开启"}`},{title:a(()=>[l(" 两步验证 ")]),avatar:a(()=>[e(t(Re),{style:{fontSize:"2.6em"}})]),_:1},8,["description"])]),_:1}),e(_e,{open:t(u),"onUpdate:open":p[4]||(p[4]=$=>F(u)?u.value=$:null),closable:!1,width:650,"mask-closable":!1,footer:null},{default:a(()=>[e(ce,{title:"启用两步验证(2FA)",bordered:!1},{default:a(()=>[e(B,{current:t(n)},{default:a(()=>[e(x,{title:"验证"},{description:a(()=>[l(" 下载软件并验证 ")]),_:1}),e(x,{title:"备份"},{description:a(()=>[l(" 保存备份密钥 ")]),_:1}),e(x,{title:"完成"},{description:a(()=>[l(" 恭喜你设置成功 ")]),_:1})]),_:1},8,["current"]),t(n)===0?(c(),E("div",ua,[e(T,{level:4},{default:a(()=>[l(" 1、下载验证器app ")]),_:1}),e(A,null,{default:a(()=>[l(" 市面上的验证器有："),ia,l(" 、"),ca,l("、谷歌验证器等，请根据自身情况选择适合的app下载。 ")]),_:1}),e(T,{level:4},{default:a(()=>[l(" 2、绑定验证码 ")]),_:1}),e(A,null,{default:a(()=>[l(" 使用下载的app，扫描下方二维码 ")]),_:1}),e(d,{size:200,value:t(m).qrcodeUrl},null,8,["value"]),e(ne,{title:"手动验证"},{content:a(()=>[e(A,null,{default:a(()=>[l("请输入下方密钥填入app内")]),_:1}),e(M,{strong:"",copyable:""},{default:a(()=>[l(U(t(m).secretKey),1)]),_:1})]),default:a(()=>[e(w,{type:"link"},{default:a(()=>[l(" 无法扫码二维码？ ")]),_:1})]),_:1}),e(T,{level:4},{default:a(()=>[l(" 3、输入验证码 ")]),_:1}),e(A,null,{default:a(()=>[l(" 请输入你看到你的验证码 ")]),_:1}),e(oe,null,{default:a(()=>[e(se,{value:t(f),"onUpdate:value":p[0]||(p[0]=$=>F(f)?f.value=$:null)},null,8,["value"])]),_:1})])):L("",!0),t(n)===1?(c(),E("div",_a,[e(A,null,{default:a(()=>[l(" 请记住下方的这串备份密钥，它是在当你无法使用验证器app时的备用方案，请牢记该密钥。当你点击 "),e(M,null,{default:a(()=>[l("下一步")]),_:1}),l(" ， 即表示你已妥善处理好此事。备份密钥只显示一次。 ")]),_:1}),e(A,{mark:"",style:{textAlign:"center"}},{default:a(()=>[e(M,{strong:""},{default:a(()=>{var $;return[l(U(($=t(m))==null?void 0:$.backupCode),1)]}),_:1})]),_:1})])):L("",!0),t(n)===2?(c(),E("div",fa,[e(A,null,{default:a(()=>[e(ue,{type:"success","show-icon":"",message:"开启成功",description:"你已成功开启两步验证，后续登录都会要求提供两步验证以保证账号安全"})]),_:1})])):L("",!0),R("div",ra,[e(ie,{size:"middle"},{default:a(()=>[t(n)===0?(c(),b(w,{key:0,onClick:p[1]||(p[1]=$=>u.value=!1)},{default:a(()=>[l(" 取消 ")]),_:1})):L("",!0),t(n)<2?(c(),b(w,{key:1,type:"primary",onClick:p[2]||(p[2]=$=>v(t(n)+1))},{default:a(()=>[l(" 下一步 ")]),_:1})):L("",!0),t(n)===2?(c(),b(w,{key:2,type:"primary",onClick:p[3]||(p[3]=$=>{u.value=!1,y()})},{default:a(()=>[l(" 完成 ")]),_:1})):L("",!0)]),_:1})])]),_:1})]),_:1},8,["open"])],64)}}}),da={class:"flex flex-col items-center"},ma=K({__name:"basic-setting",setup(O){var h,I;const{t:n}=Je(),f=he(),r=g(),m={span:0},s={span:13},u=Ze({email:(h=f.userInfo)==null?void 0:h.email,name:(I=f.userInfo)==null?void 0:I.username}),k=le(()=>({name:[{required:!0,message:n("account.settings.form-rule-name"),trigger:"change"}],email:[{required:!0,message:n("account.settings.form-email"),trigger:"change"}]}));function S(){r.value.validate().then(()=>{}).catch(v=>{})}return(v,o)=>{const i=X,y=Z,_=z,p=j,w=ee,C=Me,N=Ve,P=Fe,x=qe,B=ae,T=H,A=J;return c(),E(te,null,[e(T,{"mb-5":"",title:t(n)("account.settings.basic-setting"),bordered:!1},{default:a(()=>[e(B,null,{default:a(()=>[e(w,{span:12},{default:a(()=>[e(p,{ref_key:"formRef",ref:r,model:t(u),rules:t(k),"label-col":m,"wrapper-col":s},{default:a(()=>[e(y,{"label-col":{span:24},label:"邮箱"},{default:a(()=>{var d;return[e(i,{tootpip:"",disabled:"",value:(d=t(f).userInfo)==null?void 0:d.email,style:{width:"320px"}},null,8,["value"])]}),_:1}),e(y,{"label-col":{span:24},label:t(n)("account.settings.form-name"),name:"name"},{default:a(()=>[e(i,{value:t(u).name,"onUpdate:value":o[0]||(o[0]=d=>t(u).name=d),placeholder:t(n)("account.settings.form-input-plac"),style:{width:"320px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),e(y,null,{default:a(()=>[e(_,{type:"primary",onClick:S},{default:a(()=>[l(U(t(n)("account.settings.form-submit")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(w,{span:4},{default:a(()=>[R("p",null,U(t(n)("account.settings.basic-avatar")),1),R("div",da,[e(N,{size:100},{icon:a(()=>{var d;return[e(C,{src:(d=t(f).userInfo)==null?void 0:d.avatar},null,8,["src"])]}),_:1}),e(x,{disabled:"",name:"file","file-list":[]},{default:a(()=>[e(P,{title:"暂不支持"},{default:a(()=>[e(_,{class:"mt-4"},{default:a(()=>[e(t(De)),l(" "+U(t(n)("account.settings.basic-avatar.upload")),1)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["title"]),e(T,{title:"安全设置","mb-20":"",bordered:!1},{default:a(()=>[e(A,{"item-layout":"horizontal"},{default:a(()=>[e(pa),e(je),e(Xe)]),_:1})]),_:1})],64)}}}),Ca=K({__name:"setting",setup(O){const n=g(["1"]),f=le(()=>[{key:"1",label:"基本信息",title:"Navigation One"},{key:"2",label:"账号绑定",title:"Navigation Two"},{key:"4",label:"协议和混淆",disabled:!0,title:"Navigation Two"},{key:"5",label:"订阅保护",title:"Navigation Two"}]);return D(()=>{const r=ea("key");n.value=[r||"1"]}),(r,m)=>{const s=Ye,u=ee,k=ae,S=H;return c(),b(S,null,{default:a(()=>[e(k,{gutter:24},{default:a(()=>[e(u,{span:4,style:{"padding-left":"0"}},{default:a(()=>[e(s,{selectedKeys:t(n),"onUpdate:selectedKeys":m[0]||(m[0]=h=>F(n)?n.value=h:null),style:{width:"250px"},mode:"inline",items:t(f)},null,8,["selectedKeys","items"])]),_:1}),e(u,{span:20},{default:a(()=>[t(n)[0]==="1"?(c(),b(ma,{key:0})):L("",!0),t(n)[0]==="2"?(c(),b(la,{key:1})):L("",!0),t(n)[0]==="5"?(c(),b(oa,{key:2})):L("",!0)]),_:1})]),_:1})]),_:1})}}});export{Ca as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

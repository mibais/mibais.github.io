import{u as _e,v as fe,s as re,a as pe,c as de,e as me,b as ve,g as be,h as ge}from"./index-jVU5J58G.js";import{u as K,_ as ye,t as Le,a as he}from"./index-DCA2stvC.js";import{Z as ke,Y as we,X as Ae,av as Z,ab as q,J as D,z as F,B as Y,ah as P,aw as Ce,ax as Se,ay as Q,y as $e,a0 as J,az as Ie,aA as Te,aB as Ue,V as X,ao as xe,aC as Re,aD as Ne,aE as Be,aF as He,aG as Oe,aH as Pe,$ as j,I as ze,m as Ee,at as Ke,aI as De,ai as W,aJ as Me,A as Ge,w as Ve,aK as qe,aj as ee,M as Fe}from"./antd-_WrWzocG.js";import{d as z,f as g,o as M,a5 as c,ac as b,ad as a,k as e,G as l,af as I,u as t,ag as L,a8 as R,a3 as O,H as V,F as ae,au as Ye,r as Je,c as te,J as Ze}from"./vue-f4UZefmh.js";import{l as Qe,s as Xe}from"./index-BnSvR9qD.js";import{_ as je,a as We}from"./deleteUser.vue_vue_type_script_setup_true_lang-C7vY9WXK.js";import{g as ea}from"./tools-C47lgb9W.js";import"./multi-tab-eX98aFPH.js";const aa="绑定第三方账号就可以借助第三方账号登陆网站。",ta=z({__name:"account-setting",setup(E){const n=g();function f(s){s==="google"&&window.open("https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true&response_type=token&redirect_uri=https://alipay.mibai.live/band/band-google&state=google&client_id=1085614457190-vd0bt5slhitqelu6qhpb6444luc3rmi4.apps.googleusercontent.com"),s==="github"&&(window.location.href="https://github.com/login/oauth/authorize?client_id=de35e0cc0e281d788019&redirect_uri=https://alipay.mibai.live/band/band-github"),s==="alipay"&&(window.location.href="https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2019111369130198&scope=auth_user&redirect_uri=https://6678.mibai.live/band/band-alipay")}async function r(s){await _e(s),K().success("解绑成功"),await v()}async function v(){const{data:s}=await fe();n.value=s}return M(()=>{v()}),(s,o)=>{const h=Z,S=q,k=D,T=F,m=Y,u=P;return c(),b(u,{title:"账号绑定",bordered:!1},{default:a(()=>[e(h,{"ml-5":"","mb-3":""},{default:a(()=>[l(I(aa))]),_:1}),e(m,{"item-layout":"horizontal","data-source":t(n)},{renderItem:a(({item:i})=>[e(T,null,{actions:a(()=>[i.band?(c(),b(k,{key:0,type:"link",onClick:y=>r(i.type)},{default:a(()=>[l(" 解绑 ")]),_:2},1032,["onClick"])):(c(),b(k,{key:1,type:"link",onClick:y=>f(i.type)},{default:a(()=>[l(" 绑定 ")]),_:2},1032,["onClick"]))]),default:a(()=>[e(S,{description:i.band?`已绑定 ${i.name}`:"尚未绑定"},{title:a(()=>[l(I(i.type),1)]),avatar:a(()=>[i.type==="google"?(c(),b(t(ke),{key:0,style:{color:"#ff4000"},class:"account-setting-avatar"})):L("",!0),i.type==="alipay"?(c(),b(t(we),{key:1,style:{color:"#2eabff"},class:"account-setting-avatar"})):L("",!0),i.type==="github"?(c(),b(t(Ae),{key:2,style:{color:"#fff","background-color":"#2eabff"},class:"account-setting-avatar"})):L("",!0)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1})}}}),la=ye(ta,[["__scopeId","data-v-8c418e5b"]]),na=[{label:"中国",value:"CN",isLeaf:!1},{label:"中国香港",value:"HK",isLeaf:!1},{label:"中国台湾",value:"TW",isLeaf:!1},{label:"中国澳门",value:"MO",isLeaf:!1},{label:"阿根廷",value:"AR",isLeaf:!1},{label:"奥地利",value:"AT",isLeaf:!1},{label:"澳大利亚",value:"AU",isLeaf:!1},{label:"孟加拉",value:"BD",isLeaf:!1},{label:"保加利亚",value:"BG",isLeaf:!1},{label:"巴林",value:"BH",isLeaf:!1},{label:"巴西",value:"BR",isLeaf:!1},{label:"不丹",value:"BT",isLeaf:!1},{label:"加拿大",value:"CA",isLeaf:!1},{label:"瑞士",value:"CH",isLeaf:!1},{label:"哥伦比亚",value:"CO",isLeaf:!1},{label:"德国",value:"DE",isLeaf:!1},{label:"丹麦",value:"DK",isLeaf:!1},{label:"埃及",value:"EG",isLeaf:!1},{label:"西班牙",value:"ES",isLeaf:!1},{label:"法国",value:"FR",isLeaf:!1},{label:"英国",value:"GB",isLeaf:!1},{label:"格陵兰",value:"GL",isLeaf:!1},{label:"希腊",value:"GR",isLeaf:!1},{label:"克罗地亚",value:"HR",isLeaf:!1},{label:"匈牙利",value:"HU",isLeaf:!1},{label:"印度尼西亚",value:"ID",isLeaf:!1},{label:"爱尔兰",value:"IE",isLeaf:!1},{label:"以色列",value:"IL",isLeaf:!1},{label:"印度",value:"IN",isLeaf:!1},{label:"伊拉克",value:"IQ",isLeaf:!1},{label:"伊朗",value:"IR",isLeaf:!1},{label:"冰岛",value:"IS",isLeaf:!1},{label:"意大利",value:"IT",isLeaf:!1},{label:"日本",value:"JP",isLeaf:!1},{label:"柬埔寨",value:"KH",isLeaf:!1},{label:"朝鲜",value:"KR",isLeaf:!1},{label:"老挝",value:"LA",isLeaf:!1},{label:"黎巴嫩",value:"LB",isLeaf:!1},{label:"立陶宛",value:"LT",isLeaf:!1},{label:"卢森堡",value:"LU",isLeaf:!1},{label:"缅甸",value:"MM",isLeaf:!1},{label:"蒙古",value:"MN",isLeaf:!1},{label:"墨西哥",value:"MX",isLeaf:!1},{label:"马来西亚",value:"MY",isLeaf:!1},{label:"荷兰",value:"NL",isLeaf:!1},{label:"挪威",value:"NO",isLeaf:!1},{label:"新西兰",value:"NZ",isLeaf:!1},{label:"菲律宾",value:"PH",isLeaf:!1},{label:"巴基斯坦",value:"PK",isLeaf:!1},{label:"波兰",value:"PL",isLeaf:!1},{label:"葡萄牙",value:"PT",isLeaf:!1},{label:"罗马尼亚",value:"RO",isLeaf:!1},{label:"俄罗斯",value:"RU",isLeaf:!1},{label:"瑞典",value:"SE",isLeaf:!1},{label:"新加坡",value:"SG",isLeaf:!1},{label:"叙利亚",value:"SY",isLeaf:!1},{label:"泰国",value:"TH",isLeaf:!1},{label:"土耳其",value:"TR",isLeaf:!1},{label:"乌克兰",value:"UA",isLeaf:!1},{label:"美国",value:"US",isLeaf:!1},{label:"乌拉圭",value:"UY",isLeaf:!1},{label:"梵蒂冈",value:"VA",isLeaf:!1},{label:"委内瑞拉",value:"VE",isLeaf:!1},{label:"越南",value:"VN",isLeaf:!1},{label:"也门",value:"YE",isLeaf:!1},{label:"南非",value:"ZA",isLeaf:!1}],sa=R("b",null,"失效",-1),oa=z({__name:"resetSubLink",setup(E){const n=g(),f=K(),r=g(!1),v=Ce({scriptUrl:Le(()=>import("./iconfont-BgumRDvY.js"),__vite__mapDeps([]))}),s=g({trustArea:[],autoAreaTrust:!0,enabledProtect:!0,protectTimeRange:[]}),o=g(na);async function h(){const{data:m}=await re();n.value=m.token,s.value=m}async function S(){const{data:m}=await pe();K().success("重置成功"),n.value=m}async function k(m){const u=m[m.length-1];u.loading=!0;try{const{data:i}=await Qe(u.value);u.children=i,o.value=[...o.value]}finally{u.loading=!1}}async function T(){if(!r.value){r.value=!0,f.loading({content:"正在保存中...",key:"saveSubSafe",duration:0});try{await Xe(s.value),f.success({content:"保存成功",key:"saveSubSafe",duration:2})}finally{r.value=!1}}}return M(()=>{h()}),(m,u)=>{const i=q,y=D,_=Q,p=F,w=$e,C=J,N=Ie,B=Te,x=Ue,H=X,U=Y,A=P;return c(),b(A,{title:"订阅设置"},{default:a(()=>[e(U,{"item-layout":"horizontal"},{default:a(()=>[e(p,null,{actions:a(()=>[e(y,{danger:"",type:"primary",onClick:S},{default:a(()=>[l(" 重置 ")]),_:1})]),default:a(()=>[e(i,{"mb-5":""},{avatar:a(()=>[e(t(v),{style:{fontSize:"2.6em"},type:"icon-dingyue"})]),title:a(()=>[l(" 重置订阅链接 ")]),description:a(()=>[l(" 这里会重置您的订阅链接并"),sa,l("之前的订阅，此操作不可逆请谨慎操作 ")]),_:1}),l(" 当前订阅链接："),e(_,{class:"accent"},{default:a(()=>[l(I(t(n)),1)]),_:1})]),_:1}),e(p,{"mt-5":""},{default:a(()=>[e(i,{"mb-5":""},{title:a(()=>[l(" 订阅保护 ")]),avatar:a(()=>[e(t(Se),{style:{fontSize:"2.6em"}})]),description:a(()=>[l(" 订阅安全关闭之后会让你的订阅处于滥用的风险 ")]),_:1}),l(" # "),e(H,null,{default:a(()=>[e(C,{tooltip:"订阅保护的总开关",label:"订阅安全保护"},{default:a(()=>[e(w,{checked:t(s).enabledProtect,"onUpdate:checked":u[0]||(u[0]=d=>t(s).enabledProtect=d),"checked-children":"开","un-checked-children":"关"},null,8,["checked"])]),_:1}),e(C,{tooltip:"将登录网站时所在地区自动列为保护区域，建议开启",label:"自动区域保护"},{default:a(()=>[e(w,{checked:t(s).autoAreaTrust,"onUpdate:checked":u[1]||(u[1]=d=>t(s).autoAreaTrust=d),"checked-children":"开","un-checked-children":"关"},null,8,["checked"])]),_:1}),e(C,{label:"区域保护","help:":"选择授信地区以保护订阅安全",tooltip:"只有列在此处的地区才能进行订阅"},{default:a(()=>[e(N,{value:t(s).trustArea,"onUpdate:value":u[2]||(u[2]=d=>t(s).trustArea=d),"load-data":k,options:t(o),multiple:"","show-search":"",placeholder:"尚未选择授信地区"},null,8,["value","options"])]),_:1}),e(C,{label:"时间段保护",help:"置空则关闭时间段保护",tooltip:"只有在该时间段才允许订阅"},{default:a(()=>[e(B,{value:t(s).protectTimeRange,"onUpdate:value":u[3]||(u[3]=d=>t(s).protectTimeRange=d),"second-step":30,"minute-step":15,"value-format":"HHmmss",format:"HH:mm"},null,8,["value"])]),_:1}),e(C,{tooltip:"订阅链接自获取之后的存活时间，海外ip订阅不受此影响",help:"避免订阅链接被滥用而设置的存活期，无法关闭",label:"订阅链接有效期"},{default:a(()=>[e(x,{"addon-after":"秒",value:"60",disabled:""})]),_:1}),e(C,null,{default:a(()=>[e(y,{type:"primary",loading:t(r),onClick:T},{default:a(()=>[l(" 保存 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),ua={key:0,"mt-5":""},ia=R("a",{href:"https://www.microsoft.com/en-us/account/authenticator/"},"微软验证器",-1),ca=R("a",{href:"https://support.1password.com/one-time-passwords/"},"1Password",-1),_a={key:1,"mt-5":""},fa={key:2,"mt-10":"","mb-10":""},ra={class:"steps-action"},pa=z({__name:"double-auth",setup(E){const n=g(0),f=g(""),r=g(!1),v=g({qrcodeUrl:"",secretKey:"",verify:!1,backup:!1,backupCode:"",enabled:!1}),s=K(),o=g(!1),h=g(!1);async function S(){const{data:_}=await ve();v.value=_,_.verify?_.backup||(n.value=1):n.value=0}async function k(){const{data:_}=await be();return _}async function T(){return f.value?(await ge(f.value),s.success("绑定成功！"),!0):(s.warning("请先输入验证码"),!1)}async function m(_){_===1&&await T()&&(n.value=1),_===2&&await k()&&(n.value=2)}async function u(){await de(),s.success("两步验证已关闭"),await y()}function i(_){if(!_){h.value=!1;return}r.value?h.value=!0:(o.value=!0,S())}async function y(){const{data:_}=await me();r.value=_}return M(()=>{y()}),(_,p)=>{const w=D,C=Re,N=q,B=F,x=Ne,H=Be,U=He,A=Z,d=Oe,G=Q,le=Pe,ne=j,se=J,oe=ze,ue=Ee,ie=P,ce=Ke;return c(),O(ae,null,[e(B,null,{extra:a(()=>[e(C,{title:"你确定要关闭两步验证吗？",open:t(h),onOpenChange:i,onConfirm:u},{default:a(()=>[e(w,{type:"default"},{default:a(()=>[l(I(t(r)?"关闭":"开启")+"两步验证 ",1)]),_:1})]),_:1},8,["open"])]),default:a(()=>[e(N,{description:`为你的账号更有保障力. 当前状态：${t(r)?"已开启":"未开启"}`},{title:a(()=>[l(" 两步验证 ")]),avatar:a(()=>[e(t(xe),{style:{fontSize:"2.6em"}})]),_:1},8,["description"])]),_:1}),e(ce,{open:t(o),"onUpdate:open":p[4]||(p[4]=$=>V(o)?o.value=$:null),closable:!1,width:650,"mask-closable":!1,footer:null},{default:a(()=>[e(ie,{title:"启用两步验证(2FA)",bordered:!1},{default:a(()=>[e(H,{current:t(n)},{default:a(()=>[e(x,{title:"验证"},{description:a(()=>[l(" 下载软件并验证 ")]),_:1}),e(x,{title:"备份"},{description:a(()=>[l(" 保存备份密钥 ")]),_:1}),e(x,{title:"完成"},{description:a(()=>[l(" 恭喜你设置成功 ")]),_:1})]),_:1},8,["current"]),t(n)===0?(c(),O("div",ua,[e(U,{level:4},{default:a(()=>[l(" 1、下载验证器app ")]),_:1}),e(A,null,{default:a(()=>[l(" 市面上的验证器有："),ia,l(" 、"),ca,l("、谷歌验证器等，请根据自身情况选择适合的app下载。 ")]),_:1}),e(U,{level:4},{default:a(()=>[l(" 2、绑定验证码 ")]),_:1}),e(A,null,{default:a(()=>[l(" 使用下载的app，扫描下方二维码 ")]),_:1}),e(d,{size:200,value:t(v).qrcodeUrl},null,8,["value"]),e(le,{title:"手动验证"},{content:a(()=>[e(A,null,{default:a(()=>[l("请输入下方密钥填入app内")]),_:1}),e(G,{strong:"",copyable:""},{default:a(()=>[l(I(t(v).secretKey),1)]),_:1})]),default:a(()=>[e(w,{type:"link"},{default:a(()=>[l(" 无法扫码二维码？ ")]),_:1})]),_:1}),e(U,{level:4},{default:a(()=>[l(" 3、输入验证码 ")]),_:1}),e(A,null,{default:a(()=>[l(" 请输入你看到你的验证码 ")]),_:1}),e(se,null,{default:a(()=>[e(ne,{value:t(f),"onUpdate:value":p[0]||(p[0]=$=>V(f)?f.value=$:null)},null,8,["value"])]),_:1})])):L("",!0),t(n)===1?(c(),O("div",_a,[e(A,null,{default:a(()=>[l(" 请记住下方的这串备份密钥，它是在当你无法使用验证器app时的备用方案，请牢记该密钥。当你点击 "),e(G,null,{default:a(()=>[l("下一步")]),_:1}),l(" ， 即表示你已妥善处理好此事。备份密钥只显示一次。 ")]),_:1}),e(A,{mark:"",style:{textAlign:"center"}},{default:a(()=>[e(G,{strong:""},{default:a(()=>{var $;return[l(I(($=t(v))==null?void 0:$.backupCode),1)]}),_:1})]),_:1})])):L("",!0),t(n)===2?(c(),O("div",fa,[e(A,null,{default:a(()=>[e(oe,{type:"success","show-icon":"",message:"开启成功",description:"你已成功开启两步验证，后续登录都会要求提供两步验证以保证账号安全"})]),_:1})])):L("",!0),R("div",ra,[e(ue,{size:"middle"},{default:a(()=>[t(n)===0?(c(),b(w,{key:0,onClick:p[1]||(p[1]=$=>o.value=!1)},{default:a(()=>[l(" 取消 ")]),_:1})):L("",!0),t(n)<2?(c(),b(w,{key:1,type:"primary",onClick:p[2]||(p[2]=$=>m(t(n)+1))},{default:a(()=>[l(" 下一步 ")]),_:1})):L("",!0),t(n)===2?(c(),b(w,{key:2,type:"primary",onClick:p[3]||(p[3]=$=>{o.value=!1,y()})},{default:a(()=>[l(" 完成 ")]),_:1})):L("",!0)]),_:1})])]),_:1})]),_:1},8,["open"])],64)}}}),da={class:"flex flex-col items-center"},ma=z({__name:"basic-setting",setup(E){var k,T;const{t:n}=Ye(),f=he(),r=g(),v={span:0},s={span:13},o=Je({email:(k=f.userInfo)==null?void 0:k.email,name:(T=f.userInfo)==null?void 0:T.username}),h=te(()=>({name:[{required:!0,message:n("account.settings.form-rule-name"),trigger:"change"}],email:[{required:!0,message:n("account.settings.form-email"),trigger:"change"}]}));function S(){r.value.validate().then(()=>{console.log("values",o,Ze(o))}).catch(m=>{console.log("error",m)})}return(m,u)=>{const i=j,y=J,_=D,p=X,w=W,C=Me,N=Ge,B=Ve,x=qe,H=ee,U=P,A=Y;return c(),O(ae,null,[e(U,{"mb-5":"",title:t(n)("account.settings.basic-setting"),bordered:!1},{default:a(()=>[e(H,null,{default:a(()=>[e(w,{span:12},{default:a(()=>[e(p,{ref_key:"formRef",ref:r,model:t(o),rules:t(h),"label-col":v,"wrapper-col":s},{default:a(()=>[e(y,{"label-col":{span:24},label:"邮箱"},{default:a(()=>{var d;return[e(i,{tootpip:"",disabled:"",value:(d=t(f).userInfo)==null?void 0:d.email,style:{width:"320px"}},null,8,["value"])]}),_:1}),e(y,{"label-col":{span:24},label:t(n)("account.settings.form-name"),name:"name"},{default:a(()=>[e(i,{value:t(o).name,"onUpdate:value":u[0]||(u[0]=d=>t(o).name=d),placeholder:t(n)("account.settings.form-input-plac"),style:{width:"320px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),e(y,null,{default:a(()=>[e(_,{type:"primary",onClick:S},{default:a(()=>[l(I(t(n)("account.settings.form-submit")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(w,{span:4},{default:a(()=>[R("p",null,I(t(n)("account.settings.basic-avatar")),1),R("div",da,[e(N,{size:100},{icon:a(()=>{var d;return[e(C,{src:(d=t(f).userInfo)==null?void 0:d.avatar},null,8,["src"])]}),_:1}),e(x,{disabled:"",name:"file","file-list":[]},{default:a(()=>[e(B,{title:"暂不支持"},{default:a(()=>[e(_,{class:"mt-4"},{default:a(()=>[e(t(De)),l(" "+I(t(n)("account.settings.basic-avatar.upload")),1)]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["title"]),e(U,{title:"安全设置","mb-20":"",bordered:!1},{default:a(()=>[e(A,{"item-layout":"horizontal"},{default:a(()=>[e(pa),e(je),e(We)]),_:1})]),_:1})],64)}}}),Aa=z({__name:"setting",setup(E){const n=g(["1"]),f=te(()=>[{key:"1",label:"基本信息",title:"Navigation One"},{key:"2",label:"账号绑定",title:"Navigation Two"},{key:"4",label:"协议和混淆",disabled:!0,title:"Navigation Two"},{key:"5",label:"订阅保护",title:"Navigation Two"}]);return M(()=>{const r=ea("key");n.value=[r||"1"]}),(r,v)=>{const s=Fe,o=W,h=ee,S=P;return c(),b(S,null,{default:a(()=>[e(h,{gutter:24},{default:a(()=>[e(o,{span:4,style:{"padding-left":"0"}},{default:a(()=>[e(s,{selectedKeys:t(n),"onUpdate:selectedKeys":v[0]||(v[0]=k=>V(n)?n.value=k:null),style:{width:"250px"},mode:"inline",items:t(f)},null,8,["selectedKeys","items"])]),_:1}),e(o,{span:20},{default:a(()=>[t(n)[0]==="1"?(c(),b(ma,{key:0})):L("",!0),t(n)[0]==="2"?(c(),b(la,{key:1})):L("",!0),t(n)[0]==="5"?(c(),b(oa,{key:2})):L("",!0)]),_:1})]),_:1})]),_:1})}}});export{Aa as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

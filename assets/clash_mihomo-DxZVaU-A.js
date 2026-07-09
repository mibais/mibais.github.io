import{d as _,o as h,c as y,w as o,f as n,_ as c,g as l,B as x,e as i}from"./index-D1Et3i-v.js";import{_ as k}from"./import-sub.vue_vue_type_script_setup_true_lang-DbKf5os4.js";import{C as v,T,_ as w}from"./index-BScWLO16.js";import{a as A,P as C}from"./index-owUV01ea.js";import{I as B}from"./index-C8kapaIP.js";import{S as I}from"./index-rg7JboLr.js";import"./index-D3w24-8Q.js";import"./index-VN0_dCBe.js";import"./user-Ccfip_-Q.js";import"./index-DM6IPDtf.js";import"./index-B-adI3r1.js";import"./hasIn-bwD5DbG3.js";import"./_baseAssignValue-DCXQL4jO.js";import"./operationUnit-vCu2co3e.js";import"./LeftOutlined-COAzmUcy.js";import"./useFlexGapSupport-Dw9-3Id_.js";const L=_({__name:"clash_mihomo",emits:["back"],setup(N,{emit:u}){const f=u;return(P,t)=>{const r=c,a=v,p=x,e=A,s=C,m=w,d=T,g=B,b=I;return h(),y(b,{direction:"vertical"},{default:o(()=>[n(a,null,{title:o(()=>[n(r,{icon:"tabler:arrow-left",class:"mb-0.5 mr-2 cursor-pointer",onClick:t[0]||(t[0]=S=>f("back"))}),t[1]||(t[1]=l(" clash mihomo linux使用教程 "))]),_:1}),n(a,null,{default:o(()=>[t[13]||(t[13]=l(" 纯命令行配置步骤较为繁琐，这里推荐使用github上开源的一键脚本简化步骤，减少出错。 ")),n(p,{type:"link",href:"https://github.com/nelvko/clash-for-linux-install",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[n(r,{icon:"mdi:github",class:"mb-1 mr-1"}),t[2]||(t[2]=l(" 脚本来源 "))]),_:1}),n(e,{level:3},{default:o(()=>t[3]||(t[3]=[l("一、脚本下载、安装")])),_:1}),t[14]||(t[14]=l(" 如果因为github网络问题导致无法下载软件，推荐使用 ")),n(p,{type:"dashed",href:"https://www.gitwarp.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>t[4]||(t[4]=[l(" github网络加速 ")])),_:1}),n(d,null,{default:o(()=>[n(m,{key:"1"},{tab:o(()=>[n(r,{icon:"mdi:debian"}),t[5]||(t[5]=l(" apt安装 "))]),default:o(()=>[n(s,null,{default:o(()=>t[6]||(t[6]=[i("pre",null,`# apt install -y git
# git clone --branch master --depth 1 https://gh-proxy.org/https://github.com/nelvko/clash-for-linux-install.git \\
  && cd clash-for-linux-install \\
  && bash install.sh `,-1)])),_:1})]),_:1}),n(m,{key:"2"},{tab:o(()=>[n(r,{icon:"mdi:centos"}),t[7]||(t[7]=l(" yum安装 "))]),default:o(()=>[n(s,null,{default:o(()=>t[8]||(t[8]=[i("pre",null,`# yum install -y git
# git clone --branch master --depth 1 https://gh-proxy.org/https://github.com/nelvko/clash-for-linux-install.git \\
  && cd clash-for-linux-install \\
  && bash install.sh`,-1)])),_:1})]),_:1})]),_:1}),n(g,{src:"https://v4.gh-proxy.org/https://github.com/nelvko/clash-for-linux-install/blob/master/resources/preview.png",width:"60%"}),n(s,null,{default:o(()=>t[9]||(t[9]=[l(" 订阅链接请在下面步骤2（二、导入订阅）中，并将复制的订阅链接后面自行拼接字符串: ?type=clash ")])),_:1}),n(e,{level:3,class:"mt-4"},{default:o(()=>t[10]||(t[10]=[l("二、导入订阅")])),_:1}),n(k,{type:"clash","only-link":""}),n(e,{level:3},{default:o(()=>t[11]||(t[11]=[l("三、支持的命令")])),_:1}),n(s,null,{default:o(()=>t[12]||(t[12]=[i("pre",null,`# Usage:
  clashctl COMMAND [OPTIONS]

Commands:
    on                    开启代理
    off                   关闭代理
    status                内核状况
    proxy                 系统代理
    ui                    Web 面板
    secret                Web 密钥
    sub                   订阅管理
    upgrade               升级内核
    tun                   Tun 模式
    mixin                 Mixin 配置

Global Options:
    -h, --help            显示帮助信息`,-1)])),_:1})]),_:1})]),_:1})}}});export{L as default};

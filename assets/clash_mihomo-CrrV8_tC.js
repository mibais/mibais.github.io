import{be as _,cY as h,b2 as y,eo as o,b7 as n,ar as c,b6 as l,b as x,b1 as a}from"./index-C00kDpcn.js";import{_ as k}from"./import-sub.vue_vue_type_script_setup_true_lang-DiXZKXXr.js";import{C as v,T,_ as A}from"./index-CYSN7IL3.js";import{a as w,P as C}from"./index-BYyAa52-.js";import{I as B}from"./index-CdYy_1Iq.js";import{S as I}from"./index-4C70nEOK.js";import"./index-BN8CkDOY.js";import"./index-DFhTiNmL.js";import"./user-XeirB7-I.js";import"./index-3q_NF_up.js";import"./index--q6nYSH8.js";import"./hasIn-sYA5Vsbq.js";import"./_baseAssignValue-S1cRn57x.js";import"./operationUnit-vCu2co3e.js";import"./LeftOutlined-B_bbzj3M.js";import"./useFlexGapSupport-Cce41CdC.js";const K=_({__name:"clash_mihomo",emits:["back"],setup(N,{emit:u}){const f=u;return(P,t)=>{const r=c,i=v,p=x,s=w,e=C,m=A,b=T,d=B,g=I;return h(),y(g,{direction:"vertical"},{default:o(()=>[n(i,null,{title:o(()=>[n(r,{icon:"tabler:arrow-left",class:"mb-0.5 mr-2 cursor-pointer",onClick:t[0]||(t[0]=S=>f("back"))}),t[1]||(t[1]=l(" clash mihomo linux使用教程 "))]),_:1}),n(i,null,{default:o(()=>[t[13]||(t[13]=l(" 纯命令行配置步骤较为繁琐，这里推荐使用github上开源的一键脚本简化步骤，减少出错。 ")),n(p,{type:"link",href:"https://github.com/nelvko/clash-for-linux-install",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[n(r,{icon:"mdi:github",class:"mb-1 mr-1"}),t[2]||(t[2]=l(" 脚本来源 "))]),_:1}),n(s,{level:3},{default:o(()=>t[3]||(t[3]=[l("一、脚本下载、安装")])),_:1}),t[14]||(t[14]=l(" 如果因为github网络问题导致无法下载软件，推荐使用 ")),n(p,{type:"dashed",href:"https://www.gitwarp.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>t[4]||(t[4]=[l(" github网络加速 ")])),_:1}),n(b,null,{default:o(()=>[n(m,{key:"1"},{tab:o(()=>[n(r,{icon:"mdi:debian"}),t[5]||(t[5]=l(" apt安装 "))]),default:o(()=>[n(e,null,{default:o(()=>t[6]||(t[6]=[a("pre",null,`# apt install -y git
# git clone --branch master --depth 1 https://gh-proxy.org/https://github.com/nelvko/clash-for-linux-install.git \\
  && cd clash-for-linux-install \\
  && bash install.sh `,-1)])),_:1})]),_:1}),n(m,{key:"2"},{tab:o(()=>[n(r,{icon:"mdi:centos"}),t[7]||(t[7]=l(" yum安装 "))]),default:o(()=>[n(e,null,{default:o(()=>t[8]||(t[8]=[a("pre",null,`# yum install -y git
# git clone --branch master --depth 1 https://gh-proxy.org/https://github.com/nelvko/clash-for-linux-install.git \\
  && cd clash-for-linux-install \\
  && bash install.sh`,-1)])),_:1})]),_:1})]),_:1}),n(d,{src:"https://v4.gh-proxy.org/https://github.com/nelvko/clash-for-linux-install/blob/master/resources/preview.png",width:"60%"}),n(e,null,{default:o(()=>t[9]||(t[9]=[l(" 订阅链接请在下面步骤2（二、导入订阅）中，并将复制的订阅链接后面自行拼接字符串: ?type=clash ")])),_:1}),n(s,{level:3,class:"mt-4"},{default:o(()=>t[10]||(t[10]=[l("二、导入订阅")])),_:1}),n(k,{type:"clash","only-link":""}),n(s,{level:3},{default:o(()=>t[11]||(t[11]=[l("三、支持的命令")])),_:1}),n(e,null,{default:o(()=>t[12]||(t[12]=[a("pre",null,`# Usage:
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
    -h, --help            显示帮助信息`,-1)])),_:1})]),_:1})]),_:1})}}});export{K as default};

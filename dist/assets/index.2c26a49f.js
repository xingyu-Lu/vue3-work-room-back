var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var k=(t,o,n)=>o in t?Z(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,S=(t,o)=>{for(var n in o||(o={}))oe.call(o,n)&&k(t,n,o[n]);if(x)for(var n of x(o))ae.call(o,n)&&k(t,n,o[n]);return t},$=(t,o)=>ee(t,te(o));import{c as ne,a as ie,b as m,E as C,u as M,r as z,o as B,t as ce,d as r,e as l,f as h,g as _,h as se,i as E,j as p,w as d,k as b,p as L,l as j,m as _e,z as de,n as v,q as F,F as N,s as re,v as pe,x as le,y as ue,A as me,B as fe,C as he,D as Ee,G as ve,H as Ie,I as be,J as we,K as ye,L as Le,M as je,N as Pe,O as ge,P as Re,Q as Oe,R as Te,S as Ae,T as De,U as Ve,V as xe,W as ke,X as Se,Y as $e,Z as Ce,_ as Me,$ as ze,a0 as Be,a1 as Fe,a2 as Ne,a3 as Ue,a4 as He,a5 as qe,a6 as Ge,a7 as We,a8 as Je,a9 as Xe,aa as Ke,ab as Qe,ac as Ye,ad as Ze,ae as et,af as tt,ag as ot,ah as at,ai as nt,aj as it,ak as ct}from"./vendor.7f3f4592.js";const st=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};st();const _t="modulepreload",U={},dt="./",e=function(o,n){return!n||n.length===0?o():Promise.all(n.map(c=>{if(c=`${dt}${c}`,c in U)return;U[c]=!0;const i=c.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${a}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":_t,i||(s.as="script",s.crossOrigin=""),s.href=c,document.head.appendChild(s),i)return new Promise((u,f)=>{s.addEventListener("load",u),s.addEventListener("error",f)})})).then(()=>o())},H=ne({history:ie(),routes:[{path:"/login",name:"login",component:()=>e(()=>import("./Login.0cf920a9.js"),["assets/Login.0cf920a9.js","assets/Login.23e18280.css","assets/vendor.7f3f4592.js"])},{path:"/",redirect:"/introduce"},{path:"/introduce",name:"introduce",component:()=>e(()=>import("./Introduce.35fb696c.js"),["assets/Introduce.35fb696c.js","assets/vendor.7f3f4592.js"])},{path:"/admin",name:"admin",component:()=>e(()=>import("./index.3dfab174.js"),["assets/index.3dfab174.js","assets/vendor.7f3f4592.js"])},{path:"/admin-add",name:"admin_add",component:()=>e(()=>import("./add.5e3725fa.js"),["assets/add.5e3725fa.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/admin-changepwd",name:"change_pwd",component:()=>e(()=>import("./changepwd.828c4253.js"),["assets/changepwd.828c4253.js","assets/vendor.7f3f4592.js"])},{path:"/menu",name:"menu",component:()=>e(()=>import("./index.cade1455.js"),["assets/index.cade1455.js","assets/vendor.7f3f4592.js"])},{path:"/menu-add",name:"menu_add",component:()=>e(()=>import("./add.b515f414.js"),["assets/add.b515f414.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/rotate",name:"rotate",component:()=>e(()=>import("./index.e1b88fc3.js"),["assets/index.e1b88fc3.js","assets/vendor.7f3f4592.js"])},{path:"/rotate-add",name:"rotate_add",component:()=>e(()=>import("./add.1d64a0d2.js"),["assets/add.1d64a0d2.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/brief",name:"brief",component:()=>e(()=>import("./index.bd69d75b.js"),["assets/index.bd69d75b.js","assets/vendor.7f3f4592.js"])},{path:"/brief-add",name:"brief_add",component:()=>e(()=>import("./add.d9505401.js"),["assets/add.d9505401.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/leader",name:"leader",component:()=>e(()=>import("./index.eb7d56ae.js"),["assets/index.eb7d56ae.js","assets/vendor.7f3f4592.js"])},{path:"/leader-add",name:"leader_add",component:()=>e(()=>import("./add.5a6fade5.js"),["assets/add.5a6fade5.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/culture",name:"culture",component:()=>e(()=>import("./index.b3bb9078.js"),["assets/index.b3bb9078.js","assets/vendor.7f3f4592.js"])},{path:"/culture-add",name:"culture_add",component:()=>e(()=>import("./add.54ea0f71.js"),["assets/add.54ea0f71.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/history",name:"history",component:()=>e(()=>import("./index.7e6ef217.js"),["assets/index.7e6ef217.js","assets/vendor.7f3f4592.js"])},{path:"/history-add",name:"history_add",component:()=>e(()=>import("./add.79138629.js"),["assets/add.79138629.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/history-leader",name:"history_leader",component:()=>e(()=>import("./index.161471be.js"),["assets/index.161471be.js","assets/vendor.7f3f4592.js"])},{path:"/history-leader-add",name:"history_leader_add",component:()=>e(()=>import("./add.8252b3d9.js"),["assets/add.8252b3d9.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/history-pic",name:"history_pic",component:()=>e(()=>import("./index.1d2ee335.js"),["assets/index.1d2ee335.js","assets/vendor.7f3f4592.js"])},{path:"/history-pic-add",name:"history_pic_add",component:()=>e(()=>import("./add.15b9e49f.js"),["assets/add.15b9e49f.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/organization",name:"organization",component:()=>e(()=>import("./index.ea177a79.js"),["assets/index.ea177a79.js","assets/vendor.7f3f4592.js"])},{path:"/organization-add",name:"organization_add",component:()=>e(()=>import("./add.04ded90f.js"),["assets/add.04ded90f.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/news",name:"news",component:()=>e(()=>import("./index.b37c2890.js"),["assets/index.b37c2890.js","assets/vendor.7f3f4592.js"])},{path:"/news-add",name:"news_add",component:()=>e(()=>import("./add.674db67b.js"),["assets/add.674db67b.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/news-preview",name:"news_preview",component:()=>e(()=>import("./preview.1952760c.js"),["assets/preview.1952760c.js","assets/preview.ea9ab5ee.css","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice",name:"technicaloffice",component:()=>e(()=>import("./index.6fe33562.js"),["assets/index.6fe33562.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-add",name:"technicaloffice_add",component:()=>e(()=>import("./add.ebada0d1.js"),["assets/add.ebada0d1.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-introduce",name:"technicaloffice_introduce",component:()=>e(()=>import("./index.5f572a95.js"),["assets/index.5f572a95.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-introduce-add",name:"technicaloffice_introduce_add",component:()=>e(()=>import("./add.0cd7b207.js"),["assets/add.0cd7b207.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-introduce-preview",name:"technicaloffice_introduce_preview",component:()=>e(()=>import("./preview.7dc776dd.js"),["assets/preview.7dc776dd.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-dynamic",name:"technicaloffice_dynamic",component:()=>e(()=>import("./index.6d7e26b9.js"),["assets/index.6d7e26b9.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-dynamic-add",name:"technicaloffice_dynamic_add",component:()=>e(()=>import("./add.7d99ebac.js"),["assets/add.7d99ebac.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-dynamic-preview",name:"technicaloffice_dynamic_preview",component:()=>e(()=>import("./preview.5f04c64a.js"),["assets/preview.5f04c64a.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-doctor",name:"technicaloffice_doctor",component:()=>e(()=>import("./index.d00eefcc.js"),["assets/index.d00eefcc.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-doctor-add",name:"technicaloffice_doctor_add",component:()=>e(()=>import("./add.3fcb5458.js"),["assets/add.3fcb5458.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-outpatient",name:"technicaloffice_outpatient",component:()=>e(()=>import("./index.3d4938ef.js"),["assets/index.3d4938ef.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-outpatient-add",name:"technicaloffice_outpatient_add",component:()=>e(()=>import("./add.5b839336.js"),["assets/add.5b839336.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-feature",name:"technicaloffice_feature",component:()=>e(()=>import("./index.8c7dd949.js"),["assets/index.8c7dd949.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-feature-add",name:"technicaloffice_feature_add",component:()=>e(()=>import("./add.4904658d.js"),["assets/add.4904658d.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-feature-preview",name:"technicaloffice_feature_preview",component:()=>e(()=>import("./preview.6323ea30.js"),["assets/preview.6323ea30.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-pic",name:"technicaloffice_pic",component:()=>e(()=>import("./index.855bf118.js"),["assets/index.855bf118.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-pic-add",name:"technicaloffice_pic_add",component:()=>e(()=>import("./add.c478eb30.js"),["assets/add.c478eb30.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-healthscience",name:"technicaloffice_healthscience",component:()=>e(()=>import("./index.6fe83ecb.js"),["assets/index.6fe83ecb.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-healthscience-add",name:"technicaloffice_healthscience_add",component:()=>e(()=>import("./add.2958d7bd.js"),["assets/add.2958d7bd.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/technicaloffice-healthscience-preview",name:"technicaloffice_healthscience_preview",component:()=>e(()=>import("./preview.87e65000.js"),["assets/preview.87e65000.js","assets/vendor.7f3f4592.js"])},{path:"/expert",name:"expert",component:()=>e(()=>import("./index.124e5352.js"),["assets/index.124e5352.js","assets/vendor.7f3f4592.js"])},{path:"/expert-add",name:"expert_add",component:()=>e(()=>import("./add.9b17d549.js"),["assets/add.9b17d549.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/scientific",name:"scientific",component:()=>e(()=>import("./index.5fa81252.js"),["assets/index.5fa81252.js","assets/vendor.7f3f4592.js"])},{path:"/scientific-add",name:"scientific_add",component:()=>e(()=>import("./add.df99382b.js"),["assets/add.df99382b.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/scientific-preview",name:"scientific_preview",component:()=>e(()=>import("./preview.85046851.js"),["assets/preview.85046851.js","assets/preview.ba10a5d1.css","assets/vendor.7f3f4592.js"])},{path:"/patient",name:"patient",component:()=>e(()=>import("./index.9d918fa6.js"),["assets/index.9d918fa6.js","assets/vendor.7f3f4592.js"])},{path:"/patient-add",name:"patient_add",component:()=>e(()=>import("./add.02532de3.js"),["assets/add.02532de3.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/patient-preview",name:"patient_preview",component:()=>e(()=>import("./preview.53aa3dac.js"),["assets/preview.53aa3dac.js","assets/preview.f84821c1.css","assets/vendor.7f3f4592.js"])},{path:"/party",name:"party",component:()=>e(()=>import("./index.e072ca10.js"),["assets/index.e072ca10.js","assets/vendor.7f3f4592.js"])},{path:"/party-add",name:"party_add",component:()=>e(()=>import("./add.c8384adc.js"),["assets/add.c8384adc.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/party-preview",name:"party_preview",component:()=>e(()=>import("./preview.3efb7f83.js"),["assets/preview.3efb7f83.js","assets/preview.c6eeaf8b.css","assets/vendor.7f3f4592.js"])},{path:"/job",name:"job",component:()=>e(()=>import("./index.4068cf9a.js"),["assets/index.4068cf9a.js","assets/vendor.7f3f4592.js"])},{path:"/job-add",name:"job_add",component:()=>e(()=>import("./add.bf232f51.js"),["assets/add.bf232f51.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/job-preview",name:"job_preview",component:()=>e(()=>import("./preview.c5d7efbb.js"),["assets/preview.c5d7efbb.js","assets/preview.c66c1989.css","assets/vendor.7f3f4592.js"])},{path:"/voiceemployee",name:"voiceemployee",component:()=>e(()=>import("./index.2222e643.js"),["assets/index.2222e643.js","assets/vendor.7f3f4592.js"])},{path:"/voiceemployee-preview",name:"voiceemployee_preview",component:()=>e(()=>import("./preview.94b6b728.js"),["assets/preview.94b6b728.js","assets/preview.3d4d6a7c.css","assets/vendor.7f3f4592.js"])},{path:"/staff",name:"staff",component:()=>e(()=>import("./index.19c122cf.js"),["assets/index.19c122cf.js","assets/vendor.7f3f4592.js"])},{path:"/staff-add",name:"staff_add",component:()=>e(()=>import("./add.865b4f40.js"),["assets/add.865b4f40.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])},{path:"/fileemployee",name:"fileemployee",component:()=>e(()=>import("./index.b579f00a.js"),["assets/index.b579f00a.js","assets/vendor.7f3f4592.js"])},{path:"/role",name:"role",component:()=>e(()=>import("./index.c95ed86c.js"),["assets/index.c95ed86c.js","assets/vendor.7f3f4592.js"])},{path:"/role-add",name:"role_add",component:()=>e(()=>import("./add.d73c6ece.js"),["assets/add.d73c6ece.js","assets/wangEditor.6ad9352d.js","assets/vendor.7f3f4592.js"])}]});var P={development:{baseUrl:"/apis"},production:{baseUrl:"http://120.26.124.151:8001"}};function I(t){const o=window.sessionStorage.getItem(t);try{return JSON.parse(window.sessionStorage.getItem(t))}catch{return o}}function q(t,o){window.sessionStorage.setItem(t,JSON.stringify(o))}function g(t){window.sessionStorage.removeItem(t)}const Ft=P.production.baseUrl+"/api/back/files/upload",Nt=P.production.baseUrl+"/api/back/files/upload",G={login:"\u767B\u5F55",register:"\u6CE8\u518C",introduce:"\u7CFB\u7EDF\u4ECB\u7ECD",admin:"\u7BA1\u7406\u5458\u5217\u8868",admin_add:"\u7BA1\u7406\u5458",menu:"\u83DC\u5355\u5217\u8868",menu_add:"\u83DC\u5355",rotate:"\u8F6E\u64AD\u56FE\u5217\u8868",rotate_add:"\u8F6E\u64AD\u56FE",change_pwd:"\u4FEE\u6539\u5BC6\u7801",brief:"\u533B\u9662\u7B80\u4ECB",brief_add:"\u533B\u9662\u7B80\u4ECB",leader:"\u9886\u5BFC\u56E2\u961F",leader_add:"\u9886\u5BFC\u56E2\u961F",culture:"\u533B\u9662\u6587\u5316",culture_add:"\u533B\u9662\u6587\u5316",history:"\u5386\u53F2\u6CBF\u9769",history_add:"\u5386\u53F2\u6CBF\u9769",history_leader:"\u5386\u4EFB\u9662\u957F",history_leader_add:"\u5386\u4EFB\u9662\u957F",history_pic:"\u5386\u53F2\u7167\u7247",history_pic_add:"\u5386\u53F2\u7167\u7247",organization:"\u7EC4\u7EC7\u673A\u6784",organization_add:"\u7EC4\u7EC7\u673A\u6784",news:"\u65B0\u95FB\u516C\u544A",news_add:"\u65B0\u95FB\u516C\u544A",news_preview:"\u65B0\u95FB\u9884\u89C8",technicaloffice:"\u79D1\u5BA4\u8BBE\u7F6E",technicaloffice_add:"\u79D1\u5BA4\u8BBE\u7F6E",technicaloffice_introduce:"\u79D1\u5BA4\u4ECB\u7ECD",technicaloffice_introduce_add:"\u79D1\u5BA4\u4ECB\u7ECD",technicaloffice_introduce_preview:"\u79D1\u5BA4\u4ECB\u7ECD\u9884\u89C8",technicaloffice_dynamic:"\u79D1\u5BA4\u52A8\u6001",technicaloffice_dynamic_add:"\u79D1\u5BA4\u52A8\u6001",technicaloffice_dynamic_preview:"\u79D1\u5BA4\u52A8\u6001\u9884\u89C8",technicaloffice_doctor:"\u79D1\u5BA4\u533B\u751F",technicaloffice_doctor_add:"\u79D1\u5BA4\u533B\u751F",technicaloffice_outpatient:"\u79D1\u5BA4\u95E8\u8BCA",technicaloffice_outpatient_add:"\u79D1\u5BA4\u95E8\u8BCA",technicaloffice_feature:"\u79D1\u5BA4\u7279\u8272\u533B\u7597",technicaloffice_feature_add:"\u79D1\u5BA4\u7279\u8272\u533B\u7597",technicaloffice_feature_preview:"\u79D1\u5BA4\u7279\u8272\u533B\u7597",technicaloffice_pic:"\u79D1\u5BA4\u56FE\u7247",technicaloffice_pic_add:"\u79D1\u5BA4\u56FE\u7247",technicaloffice_healthscience:"\u79D1\u5BA4\u5065\u5EB7\u79D1\u666E",technicaloffice_healthscience_add:"\u79D1\u5BA4\u5065\u5EB7\u79D1\u666E",technicaloffice_healthscience_preview:"\u79D1\u5BA4\u5065\u5EB7\u79D1\u666E\u9884\u89C8",expert:"\u4E13\u5BB6\u4ECB\u7ECD",expert_add:"\u4E13\u5BB6\u4ECB\u7ECD",scientific:"\u79D1\u7814\u52A8\u6001",scientific_add:"\u79D1\u7814\u52A8\u6001",scientific_preview:"\u79D1\u7814\u52A8\u6001",patient:"\u60A3\u8005\u670D\u52A1",patient_add:"\u60A3\u8005\u670D\u52A1",patient_preview:"\u60A3\u8005\u670D\u52A1\u9884\u89C8",party:"\u515A\u5EFA",party_add:"\u515A\u5EFA",party_preview:"\u515A\u5EFA\u9884\u89C8",job:"\u62DB\u8058",job_add:"\u62DB\u8058",job_preview:"\u62DB\u8058\u9884\u89C8",voiceemployee:"\u5458\u5DE5\u4E4B\u58F0",voiceemployee_preview:"\u5458\u5DE5\u4E4B\u58F0",staff:"\u5458\u5DE5\u7BA1\u7406",staff_add:"\u5458\u5DE5\u7BA1\u7406",fileemployee:"\u5458\u5DE5\u6587\u4EF6",role:"\u89D2\u8272\u7BA1\u7406",role_add:"\u89D2\u8272\u7BA1\u7406",api_test:"api \u6D4B\u8BD5",good:"\u5546\u54C1\u5217\u8868",add_good:"\u6DFB\u52A0\u5546\u54C1",dashboard:"\u5927\u76D8\u6570\u636E",add:"\u6DFB\u52A0\u5546\u54C1",swiper:"\u8F6E\u64AD\u56FE\u914D\u7F6E",hot:"\u70ED\u9500\u5546\u54C1\u914D\u7F6E",new:"\u65B0\u54C1\u4E0A\u7EBF\u914D\u7F6E",recommend:"\u4E3A\u4F60\u63A8\u8350\u914D\u7F6E",category:"\u5206\u7C7B\u7BA1\u7406",level2:"\u5206\u7C7B\u4E8C\u7EA7\u7BA1\u7406",level3:"\u5206\u7C7B\u4E09\u7EA7\u7BA1\u7406",guest:"\u4F1A\u5458\u7BA1\u7406",order:"\u8BA2\u5355\u7BA1\u7406",order_detail:"\u8BA2\u5355\u8BE6\u60C5",account:"\u4FEE\u6539\u8D26\u6237"};m.defaults.baseURL=P.production.baseUrl;m.defaults.withCredentials=!1;m.defaults.headers["X-Requested-With"]="XMLHttpRequest";m.defaults.headers.Authorization="Bearer "+I("token")||"";m.defaults.headers.post["Content-Type"]="application/json";m.interceptors.response.use(t=>typeof t.data!="object"?(C.error("\u670D\u52A1\u7AEF\u5F02\u5E38\uFF01"),Promise.reject(t)):t.data.status!=200?(console.log(t.response),Promise.reject(t)):t.data,function(t){return console.log(t.response),C.error(t.response.data.error.message),t.response.data.status==401&&H.push({path:"/login"}),Promise.reject(t)});var R=(t,o)=>{const n=t.__vccOpts||t;for(const[c,i]of o)n[c]=i;return n};const rt={name:"Header",setup(){const t=M(),o=z({name:"dashboard",userInfo:null,hasBack:!1});B(()=>{const a=window.location.hash.split("/")[1]||"";if(!["login"].includes(a)){const s=I("userinfo");s?o.userInfo=s:n()}});const n=async()=>{const a=await m.get("/api/back/admins/info");q("userinfo",a.data),o.userInfo=a.data},c=()=>{g("token"),g("menu_list"),g("userinfo"),window.location.reload()},i=()=>{t.back()};return t.afterEach(a=>{const{id:s}=a.query;o.name=G[a.name],s&&a.name=="add"&&(o.name="\u7F16\u8F91\u5546\u54C1"),o.hasBack=["level2","level3","order_detail"].includes(a.name)}),$(S({},ce(o)),{logout:c,back:i})}},O=t=>(L("data-v-686db20a"),t=t(),j(),t),pt={class:"header"},lt={class:"left"},ut={style:{"font-size":"20px"}},mt={class:"right"},ft={class:"author"},ht=O(()=>_("i",{class:"icon el-icon-s-custom"},null,-1)),Et=O(()=>_("i",{class:"el-icon-caret-bottom"},null,-1)),vt={class:"nickname"},It=O(()=>_("p",null,"welcome",-1)),bt=b("\u9000\u51FA");function wt(t,o,n,c,i,a){const s=r("el-tag"),u=r("el-popover");return l(),h("div",pt,[_("div",lt,[t.hasBack?(l(),h("i",{key:0,class:"el-icon-back",onClick:o[0]||(o[0]=(...f)=>c.back&&c.back(...f))})):se("",!0),_("span",ut,E(t.name),1)]),_("div",mt,[p(u,{placement:"bottom",width:320,trigger:"click","popper-class":"popper-user-box"},{reference:d(()=>[_("div",ft,[ht,b(" "+E(t.userInfo&&t.userInfo.name||"")+" ",1),Et])]),default:d(()=>[_("div",vt,[_("p",null,"\u767B\u5F55\u540D\uFF1A"+E(t.userInfo&&t.userInfo.name||""),1),It,p(s,{size:"small",effect:"dark",class:"logout",onClick:c.logout},{default:d(()=>[bt]),_:1},8,["onClick"])])]),_:1})])])}var yt=R(rt,[["render",wt],["__scopeId","data-v-686db20a"]]);const Lt={name:"Footer"},jt=t=>(L("data-v-d9ef608c"),t=t(),j(),t),Pt={class:"footer"},gt=jt(()=>_("div",{class:"left"},"\u7248\u6743\u6240\u6709\uFF1A@\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662",-1)),Rt={class:"right"},Ot=b("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662\u5B98\u7F51\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF");function Tt(t,o,n,c,i,a){const s=r("el-button");return l(),h("div",Pt,[gt,_("div",Rt,[p(s,{type:"text"},{default:d(()=>[Ot]),_:1})])])}var At=R(Lt,[["render",Tt],["__scopeId","data-v-d9ef608c"]]);const Dt={name:"App",components:{Header:yt,Footer:At},setup(){const t=["/login"],o=M(),n=z({defaultOpen:["0"],showMenu:!0,menuList:[],currentPath:"/dashboard",count:{number:1}});window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",()=>{I("token")||(n.showMenu=!1)},!1)),B(()=>{const a=I("menu_list");a?n.menuList=a:c()});const c=async()=>{const a=await m.get("/api/back/menus/list");n.menuList=a.data,q("menu_list",a.data)},i=o.beforeEach((a,s,u)=>{a.path=="/login"||I("token")?u():u({path:"/login"}),n.showMenu=!t.includes(a.path),n.currentPath=a.path,document.title=G[a.name]});return _e(()=>{i()}),{state:n,locale:de}}},W=t=>(L("data-v-79bb25c6"),t=t(),j(),t),Vt={class:"layout"},xt=W(()=>_("div",{class:"head"},[_("div",null,[_("a",{href:"/",style:{color:"white","font-size":"18px"}},"\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662")])],-1)),kt=W(()=>_("div",{class:"line"},null,-1)),St={class:"main"};function $t(t,o,n,c,i,a){const s=r("el-menu-item"),u=r("el-menu-item-group"),f=r("el-sub-menu"),J=r("el-menu"),X=r("el-aside"),K=r("Header"),A=r("router-view"),Q=r("Footer"),w=r("el-container"),Y=r("el-config-provider");return l(),v(Y,{locale:c.locale},{default:d(()=>[_("div",Vt,[c.state.showMenu?(l(),v(w,{key:0,class:"container"},{default:d(()=>[p(X,{class:"aside"},{default:d(()=>[xt,kt,p(J,{"default-openeds":c.state.defaultOpen,"background-color":"#222832","text-color":"#fff",router:!0,"default-active":c.state.currentPath,"unique-opened":!0},{default:d(()=>[(l(!0),h(N,null,F(c.state.menuList,(D,V)=>(l(),v(f,{index:V+"",key:V},{title:d(()=>[_("span",null,E(D.name),1)]),default:d(()=>[p(u,null,{default:d(()=>[(l(!0),h(N,null,F(D.sub,(y,Mt)=>(l(),v(s,{key:y.id,index:y.url},{default:d(()=>[b(E(y.name),1)]),_:2},1032,["index"]))),128))]),_:2},1024)]),_:2},1032,["index"]))),128))]),_:1},8,["default-openeds","default-active"])]),_:1}),p(w,{class:"content"},{default:d(()=>[p(K),_("div",St,[p(A)]),p(Q)]),_:1})]),_:1})):(l(),v(w,{key:1,class:"container"},{default:d(()=>[p(A)]),_:1}))])]),_:1},8,["locale"])}var Ct=R(Dt,[["render",$t],["__scopeId","data-v-79bb25c6"]]);const T=re(Ct);T.use(H);T.use(pe).use(le).use(ue).use(me).use(fe).use(he).use(Ee).use(ve).use(Ie).use(be).use(we).use(ye).use(Le).use(je).use(Pe).use(ge).use(Re).use(Oe).use(Te).use(Ae).use(De).use(Ve).use(xe).use(ke).use(Se).use($e).use(Ce).use(Me).use(ze).use(Be).use(Fe).use(Ne).use(Ue).use(He).use(qe).use(Ge).use(We).use(Je).use(Xe).use(Ke).use(Qe).use(Ye).use(Ze).use(et).use(tt).use(ot).use(at).use(nt).use(it).use(ct);T.mount("#app");export{R as _,I as a,g as b,Nt as c,q as s,Ft as u};

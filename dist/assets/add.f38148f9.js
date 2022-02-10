var x=Object.defineProperty,V=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var _=(t,o,n)=>o in t?x(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,k=(t,o)=>{for(var n in o||(o={}))j.call(o,n)&&_(t,n,o[n]);if(h)for(var n of h(o))A.call(o,n)&&_(t,n,o[n]);return t},y=(t,o)=>V(t,w(o));import{W as S}from"./wangEditor.f17f8875.js";import{_ as $,a as B,c as b}from"./index.d6d4b2d4.js";import{am as I,aq as H,u as M,r as N,o as R,b as p,au as z,t as E,d as c,e as F,n as L,w as l,E as v,j as d,g as q,k as C,i as O}from"./vendor.363d5303.js";const P={name:"history_add",setup(){const t=I(null),o=I(null),n=H(),u=M(),{id:i}=n.query,r=N({token:"Bearer "+B("token")||"",id:i,historyForm:{content:""},rules:{content:[{required:!1,message:"\u5185\u5BB9\u5FC5\u987B",trigger:["change"]}]}});let e;R(()=>{e=new S(t.value),e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:r.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(a,s){console.log("result",s),a(s.data.src)}},e.config.uploadImgServer=b,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=b,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:r.token},e.config.uploadVideoHooks={customInsert:function(a,s){console.log("customInsert",s),a(s.data.src)}},e.create(),i&&p.get(`/api/back/historys/${i}`).then(a=>{r.historyForm={content:a.data.content},e&&e.txt.html(a.data.content)})}),z(()=>{e.destroy(),e=null});const f=()=>{o.value.validate(a=>{if(a){let s=p.post,m={content:e.txt.html()},g="/api/back/historys";i&&(s=p.put,g=`/api/back/historys/${i}`),s(g,m).then(()=>{i?v.success("\u4FEE\u6539\u6210\u529F"):v.success("\u6DFB\u52A0\u6210\u529F"),u.push({path:"/history"})})}})};return y(k({},E(r)),{editor:t,historyRef:o,submitAdd:f})}},W={ref:"editor"};function D(t,o,n,u,i,r){const e=c("el-form-item"),f=c("el-button"),a=c("el-form"),s=c("el-card");return F(),L(s,{style:{"min-height":"100%"}},{default:l(()=>[d(a,{model:t.historyForm,rules:t.rules,ref:"historyRef","label-width":"100px",style:{"margin-top":"30px"}},{default:l(()=>[d(e,{label:"\u5185\u5BB9",prop:"content"},{default:l(()=>[q("div",W,null,512)]),_:1}),d(e,null,{default:l(()=>[d(f,{type:"primary",onClick:o[0]||(o[0]=m=>u.submitAdd())},{default:l(()=>[C(O(t.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var K=$(P,[["render",D]]);export{K as default};
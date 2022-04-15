var V=Object.defineProperty,w=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var h=(t,o,n)=>o in t?V(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,k=(t,o)=>{for(var n in o||(o={}))y.call(o,n)&&h(t,n,o[n]);if(_)for(var n of _(o))A.call(o,n)&&h(t,n,o[n]);return t},b=(t,o)=>w(t,j(o));import{W as S}from"./wangEditor.229e0f90.js";import{_ as $,a as B,c as I}from"./index.957f9543.js";import{am as v,aq as H,u as M,r as N,o as R,b as p,au as z,t as E,d as i,e as F,n as L,w as c,E as x,j as u,g as q,k as C,i as O}from"./vendor.b09253f4.js";const P={name:"culture_add",setup(){const t=v(null),o=v(null),n=H(),d=M(),{id:r}=n.query,l=N({token:"Bearer "+B("token")||"",id:r,cultureForm:{content:""},rules:{content:[{required:!1,message:"\u5185\u5BB9\u5FC5\u987B",trigger:["change"]}]}});let e;R(()=>{e=new S(t.value),e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:l.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(a,s){console.log("result",s),a(s.data.src)}},e.config.uploadImgServer=I,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=I,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:l.token},e.config.uploadVideoHooks={customInsert:function(a,s){console.log("customInsert",s),a(s.data.src)}},e.create(),r&&p.get(`/api/back/cultures/${r}`).then(a=>{l.cultureForm={content:a.data.content},e&&e.txt.html(a.data.content)})}),z(()=>{e.destroy(),e=null});const f=()=>{o.value.validate(a=>{if(a){let s=p.post,m={content:e.txt.html()},g="/api/back/cultures";r&&(s=p.put,g=`/api/back/cultures/${r}`),s(g,m).then(()=>{r?x.success("\u4FEE\u6539\u6210\u529F"):x.success("\u6DFB\u52A0\u6210\u529F"),d.push({path:"/culture"})})}})};return b(k({},E(l)),{editor:t,cultureRef:o,submitAdd:f})}},W={ref:"editor"};function D(t,o,n,d,r,l){const e=i("el-form-item"),f=i("el-button"),a=i("el-form"),s=i("el-card");return F(),L(s,{style:{"min-height":"100%"}},{default:c(()=>[u(a,{model:t.cultureForm,rules:t.rules,ref:"cultureRef","label-width":"100px",style:{"margin-top":"30px"}},{default:c(()=>[u(e,{label:"\u5185\u5BB9",prop:"content"},{default:c(()=>[q("div",W,null,512)]),_:1}),u(e,null,{default:c(()=>[u(f,{type:"primary",onClick:o[0]||(o[0]=m=>d.submitAdd())},{default:c(()=>[C(O(t.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var K=$(P,[["render",D]]);export{K as default};

var v=Object.defineProperty,y=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var r=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&r(e,n,t[n]);if(_)for(var n of _(t))k.call(t,n)&&r(e,n,t[n]);return e},p=(e,t)=>y(e,M(t));import{_ as B}from"./index.fe9feac5.js";import{aq as H,u as L,r as g,o as x,b as w,t as b,d as u,e as j,n as C,w as c,j as I,g as a,i as S,k as i,p as $,l as N}from"./vendor.e75cba63.js";const R={name:"dynamic_preview",setup(){const e=H(),t=L(),{id:n}=e.query,s=g({data:{title:"",release_time:"",content:"",num:"",name:""}});x(()=>{n&&w.get(`/api/back/voiceEmployees/${n}`).then(o=>{s.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num,name:o.data.staff_name}})});const d=()=>{t.push({path:"/voiceemployee"})};return p(l({},b(s)),{handleBack:d})}},m=e=>($("data-v-24ee5519"),e=e(),N(),e),V=i("\u8FD4\u56DE"),q={style:{display:"flex","justify-content":"center"}},z=["innerHTML"],D={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},E=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),A=["innerHTML"],F=m(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),G=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),J=["innerHTML"],K=m(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),O=i(" \u4F5C\u8005\uFF1A"),P=["innerHTML"];function Q(e,t,n,s,d,o){const h=u("el-button"),f=u("el-card");return j(),C(f,{style:{"min-height":"100%"}},{header:c(()=>[I(h,{type:"primary",onClick:s.handleBack},{default:c(()=>[V]),_:1},8,["onClick"])]),default:c(()=>[a("div",q,[a("strong",{innerHTML:e.data.title},null,8,z)]),a("div",D,[E,a("span",{innerHTML:e.data.release_time},null,8,A),F,G,a("span",{innerHTML:e.data.num},null,8,J),K,O,a("span",null,S(e.data.name),1)]),a("div",{innerHTML:e.data.content},null,8,P)]),_:1})}var Y=B(R,[["render",Q],["__scopeId","data-v-24ee5519"]]);export{Y as default};

var f=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&_(e,n,t[n]);if(r)for(var n of r(t))T.call(t,n)&&_(e,n,t[n]);return e},l=(e,t)=>y(e,v(t));import{_ as k}from"./index.8ad4cb05.js";import{aq as x,u as B,r as H,o as L,b,t as g,d as u,e as w,n as j,w as i,j as C,g as a,k as d,p as I,l as S}from"./vendor.b09253f4.js";const $={name:"dynamic_preview",setup(){const e=x(),t=B(),{id:n}=e.query,s=H({data:{title:"",release_time:"",content:"",num:"",type:0}});L(()=>{n&&b.get(`/api/back/patientServices/${n}`).then(o=>{s.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num,type:o.data.type}})});const c=()=>{t.push({path:"/patient",query:{type:s.data.type}})};return l(p({},g(s)),{handleBack:c})}},q=e=>(I("data-v-e62d82f4"),e=e(),S(),e),N=d("\u8FD4\u56DE"),R={style:{display:"flex","justify-content":"center"}},V=["innerHTML"],z={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],E=q(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),F=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),G=["innerHTML"],J=["innerHTML"];function K(e,t,n,s,c,o){const h=u("el-button"),m=u("el-card");return w(),j(m,{style:{"min-height":"100%"}},{header:i(()=>[C(h,{type:"primary",onClick:s.handleBack},{default:i(()=>[N]),_:1},8,["onClick"])]),default:i(()=>[a("div",R,[a("strong",{innerHTML:e.data.title},null,8,V)]),a("div",z,[A,a("span",{innerHTML:e.data.release_time},null,8,D),E,F,a("span",{innerHTML:e.data.num},null,8,G)]),a("span",{innerHTML:e.data.content},null,8,J)]),_:1})}var U=k($,[["render",K],["__scopeId","data-v-e62d82f4"]]);export{U as default};

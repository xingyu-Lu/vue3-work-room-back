var f=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&_(e,n,t[n]);if(r)for(var n of r(t))T.call(t,n)&&_(e,n,t[n]);return e},p=(e,t)=>v(e,y(t));import{_ as b}from"./index.4d61dfdb.js";import{aq as k,u as x,r as B,o as H,b as L,t as g,d as u,e as w,n as j,w as c,j as C,g as a,k as i,p as I,l as $}from"./vendor.c58b0721.js";const N={name:"dynamic_preview",setup(){const e=k(),t=x(),{id:n}=e.query,s=B({data:{title:"",release_time:"",content:"",num:""}});H(()=>{n&&L.get(`/api/back/technicalOfficeDynamics/${n}`).then(o=>{s.data={title:o.data.title,release_time:o.data.release_time,content:o.data.content,num:o.data.num}})});const d=()=>{t.push({path:"/technicaloffice-dynamic"})};return p(l({},g(s)),{handleBack:d})}},R=e=>(I("data-v-e4dcb95a"),e=e(),$(),e),S=i("\u8FD4\u56DE"),V={style:{display:"flex","justify-content":"center"}},q=["innerHTML"],z={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},D=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),O=["innerHTML"],A=R(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),E=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),F=["innerHTML"],G=["innerHTML"];function J(e,t,n,s,d,o){const h=u("el-button"),m=u("el-card");return w(),j(m,{style:{"min-height":"100%"}},{header:c(()=>[C(h,{type:"primary",onClick:s.handleBack},{default:c(()=>[S]),_:1},8,["onClick"])]),default:c(()=>[a("div",V,[a("strong",{innerHTML:e.data.title},null,8,q)]),a("div",z,[D,a("span",{innerHTML:e.data.release_time},null,8,O),A,E,a("span",{innerHTML:e.data.num},null,8,F)]),a("div",{innerHTML:e.data.content},null,8,G)]),_:1})}var U=b(N,[["render",J],["__scopeId","data-v-e4dcb95a"]]);export{U as default};

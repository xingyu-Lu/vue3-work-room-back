var b=Object.defineProperty,g=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))y.call(e,a)&&f(t,a,e[a]);if(l)for(var a of l(e))v.call(e,a)&&f(t,a,e[a]);return t},_=(t,e)=>g(t,k(e));import{_ as x}from"./index.7fc9ed56.js";import{u as C,r as B,o as M,b as P,t as T,ah as j,d as p,e as s,n as r,w as d,g as w,k as h}from"./vendor.b8319b30.js";const A={name:"rotate_list",setup(){const t=C(),e=B({flag:0,data:{id:0,content:""}});M(()=>{a()});const a=()=>{P.get("/api/back/briefs").then(o=>{o.data&&(e.data.content=o.data.content,e.data.id=o.data.id,e.flag=1)})},n=()=>{t.push({path:"/general/brief/add"})},i=o=>{t.push({path:"/general/brief/add",query:{id:o}})};return _(u({},T(e)),{handleAdd:n,handleEdit:i,Plus:j})}},E=h("\u7F16\u8F91"),H=h("\u65B0\u589E"),L=["innerHTML"];function N(t,e,a,n,i,o){const c=p("el-button"),m=p("el-card");return s(),r(m,{style:{"min-height":"100%"}},{header:d(()=>[t.flag?(s(),r(c,{key:0,type:"primary",icon:n.Plus,onClick:e[0]||(e[0]=R=>n.handleEdit(t.data.id))},{default:d(()=>[E]),_:1},8,["icon"])):(s(),r(c,{key:1,type:"primary",icon:n.Plus,onClick:n.handleAdd},{default:d(()=>[H]),_:1},8,["icon","onClick"]))]),default:d(()=>[w("div",{innerHTML:t.data.content},null,8,L)]),_:1})}var z=x(A,[["render",N]]);export{z as default};
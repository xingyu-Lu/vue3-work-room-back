var S=Object.defineProperty,U=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var v=(e,a,l)=>a in e?S(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,V=(e,a)=>{for(var l in a||(a={}))C.call(a,l)&&v(e,l,a[l]);if(k)for(var l of k(a))E.call(a,l)&&v(e,l,a[l]);return e},y=(e,a)=>U(e,j(a));import{_ as A,a as N}from"./index.367fda0e.js";import{am as q,aq as D,u as G,r as L,o as T,b as u,au as z,t as H,d as n,e as c,n as g,w as s,E as $,j as i,f as w,q as B,F as M,k as h,i as I}from"./vendor.e46c9713.js";const J={name:"menu_add",setup(){const e=q(null);q(null);const a=D(),l=G(),{id:r}=a.query,d=L({token:"Bearer "+N("token")||"",id:r,Form:{office_id:"",staff_id:"",is_head:"0",list:[],staff_list:[]},rules:{office_id:[{required:!0,message:"\u90E8\u95E8\u5FC5\u987B",trigger:["change"]}],staff_id:[{required:!0,message:"\u5458\u5DE5\u5FC5\u987B",trigger:["change"]}],is_head:[{required:!0,message:"\u662F\u5426\u8D1F\u8D23\u4EBA\u5FC5\u987B",trigger:["change"]}]}});T(()=>{F(),_(),r&&u.get(`/api/back/technicalOfficeMembers/${r}`).then(t=>{d.Form={office_id:t.data.office_id,staff_id:t.data.staff_id,is_head:String(t.data.is_head)}})}),z(()=>{});const F=async()=>{const t=await u.get("/api/back/technicalOffices");d.Form.list=t.data},_=async()=>{const t=await u.get("/api/back/staffs/list");d.Form.staff_list=t.data},m=()=>{e.value.validate(t=>{if(t){let f=u.post,b={id:r,office_id:d.Form.office_id,staff_id:d.Form.staff_id,is_head:d.Form.is_head},p="/api/back/technicalOfficeMembers";r&&(f=u.put,p=`/api/back/technicalOfficeMembers/${r}`),f(p,b).then(()=>{r?$.success("\u4FEE\u6539\u6210\u529F"):$.success("\u6DFB\u52A0\u6210\u529F"),l.push({path:"/technicaloffice-member"})})}})};return y(V({},H(d)),{Ref:e,submitAdd:m})}},K=h("\u662F"),P=h("\u5426");function Q(e,a,l,r,d,F){const _=n("el-option"),m=n("el-select"),t=n("el-form-item"),f=n("el-radio"),b=n("el-radio-group"),p=n("el-button"),O=n("el-form"),R=n("el-card");return c(),g(R,{style:{"min-height":"100%"}},{default:s(()=>[i(O,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[i(t,{label:"\u90E8\u95E8",prop:"office_id"},{default:s(()=>[i(m,{modelValue:e.Form.office_id,"onUpdate:modelValue":a[0]||(a[0]=o=>e.Form.office_id=o),placeholder:"Select",filterable:""},{default:s(()=>[(c(!0),w(M,null,B(e.Form.list,o=>(c(),g(_,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(t,{label:"\u5458\u5DE5",prop:"staff_id"},{default:s(()=>[i(m,{modelValue:e.Form.staff_id,"onUpdate:modelValue":a[1]||(a[1]=o=>e.Form.staff_id=o),placeholder:"Select",filterable:""},{default:s(()=>[(c(!0),w(M,null,B(e.Form.staff_list,o=>(c(),g(_,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),i(t,{label:"\u662F\u5426\u8D1F\u8D23\u4EBA",prop:"is_head"},{default:s(()=>[i(b,{modelValue:e.Form.is_head,"onUpdate:modelValue":a[2]||(a[2]=o=>e.Form.is_head=o)},{default:s(()=>[i(f,{label:"1"},{default:s(()=>[K]),_:1}),i(f,{label:"0"},{default:s(()=>[P]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(t,null,{default:s(()=>[i(p,{type:"primary",onClick:a[3]||(a[3]=o=>r.submitAdd())},{default:s(()=>[h(I(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var Z=A(J,[["render",Q]]);export{Z as default};

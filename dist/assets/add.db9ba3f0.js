var R=Object.defineProperty,j=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var y=(n,o,a)=>o in n?R(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,A=(n,o)=>{for(var a in o||(o={}))B.call(o,a)&&y(n,a,o[a]);if(v)for(var a of v(o))L.call(o,a)&&y(n,a,o[a]);return n},q=(n,o)=>j(n,x(o));import"./wangEditor.f10358a9.js";import{_ as N}from"./index.ba3393f8.js";import{am as h,aq as U,u as I,r as D,o as O,b as m,t as S,d as c,e as C,n as E,w as r,E as T,j as i,f as z,q as G,F as H,k as b,i as w}from"./vendor.4dad565f.js";const J={setup(){const n=h(),o=h(!1),a=h(!0),l=h(null),P=U(),F=I(),{id:d}=P.query,s=D({defaultProps:{children:"sub",label:"name"},id:d,Form:{name:"",checkedMenu:[],checkedPermission:[]},menu_list:[],permission_list:[],rules:{name:[{required:!0,message:"\u89D2\u8272\u5FC5\u987B",trigger:["change"]}],checkedMenu:[{required:!0,message:"\u83DC\u5355\u5FC5\u987B",trigger:["change"]}],checkedPermission:[{required:!0,message:"\u6743\u9650\u5FC5\u987B",trigger:["change"]}]}});O(()=>{p(),u(),d&&m.get(`/api/back/roles/${d}`).then(e=>{s.Form={name:e.data.name,checkedMenu:e.data.menu,checkedPermission:e.data.permission}})});const p=()=>{m.get("/api/back/menus/list").then(e=>{s.menu_list=e.data})},u=()=>{m.get("/api/back/permissions").then(e=>{s.permission_list=e.data})},k=()=>{l.value.validate(e=>{if(console.log(e),e){let t=m.post,M={name:s.Form.name,menu:s.Form.checkedMenu,permission:s.Form.checkedPermission};console.log(M);let V="/api/back/roles";d&&(t=m.put,V=`/api/back/roles/${d}`),t(V,M).then(()=>{T.success(d?"\u4FEE\u6539\u6210\u529F":"\u6DFB\u52A0\u6210\u529F"),F.push({path:"/role"})})}})},f=e=>{e?(s.Form.checkedPermission=[],s.permission_list.forEach(t=>{s.Form.checkedPermission.push(t.id)})):s.Form.checkedPermission=[],a.value=!1},g=e=>{const t=e.length;o.value=t===s.permission_list.length,a.value=t>0&&t<s.permission_list.length},_=()=>{s.Form.checkedMenu=[],n.value.getCheckedNodes().forEach(t=>{s.Form.checkedMenu.push(t.id)})};return q(A({},S(s)),{roleRef:l,submitAdd:k,tree:n,checkPermissionAll:o,isPermissionIndeterminate:a,handleCheckPermissionAllChange:f,handleCheckedPermissionsChange:g,handleCheckChange:_})}},K=b("Check all");function Q(n,o,a,l,P,F){const d=c("el-input"),s=c("el-form-item"),p=c("el-tree"),u=c("el-checkbox"),k=c("el-checkbox-group"),f=c("el-button"),g=c("el-form"),_=c("el-card");return C(),E(_,{style:{"min-height":"100%"}},{default:r(()=>[i(g,{model:n.Form,rules:n.rules,ref:"roleRef","label-width":"100px"},{default:r(()=>[i(s,{label:"\u89D2\u8272\u540D",prop:"name"},{default:r(()=>[i(d,{modelValue:n.Form.name,"onUpdate:modelValue":o[0]||(o[0]=e=>n.Form.name=e),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"},null,8,["modelValue"])]),_:1}),i(s,{label:"\u83DC\u5355",prop:"checkedMenu"},{default:r(()=>[i(p,{ref:"tree",data:n.menu_list,"show-checkbox":"","node-key":"id",props:n.defaultProps,"default-checked-keys":n.Form.checkedMenu,onCheckChange:l.handleCheckChange},null,8,["data","props","default-checked-keys","onCheckChange"])]),_:1}),i(s,{label:"\u6743\u9650",prop:"checkedPermission"},{default:r(()=>[i(u,{modelValue:l.checkPermissionAll,"onUpdate:modelValue":o[1]||(o[1]=e=>l.checkPermissionAll=e),indeterminate:l.isPermissionIndeterminate,onChange:l.handleCheckPermissionAllChange},{default:r(()=>[K]),_:1},8,["modelValue","indeterminate","onChange"]),i(k,{modelValue:n.Form.checkedPermission,"onUpdate:modelValue":o[2]||(o[2]=e=>n.Form.checkedPermission=e),onChange:l.handleCheckedPermissionsChange},{default:r(()=>[(C(!0),z(H,null,G(n.permission_list,(e,t)=>(C(),E(u,{key:e.id,label:e.id},{default:r(()=>[b(w(e.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),i(s,null,{default:r(()=>[i(f,{type:"primary",onClick:o[3]||(o[3]=e=>l.submitAdd())},{default:r(()=>[b(w(n.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var $=N(J,[["render",Q]]);export{$ as default};

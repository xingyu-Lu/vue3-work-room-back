var R=Object.defineProperty,j=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var y=(n,o,t)=>o in n?R(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,A=(n,o)=>{for(var t in o||(o={}))B.call(o,t)&&y(n,t,o[t]);if(v)for(var t of v(o))L.call(o,t)&&y(n,t,o[t]);return n},q=(n,o)=>j(n,x(o));import"./wangEditor.7fca4042.js";import{_ as N}from"./index.cdee2207.js";import{am as h,aq as U,u as I,r as D,o as O,b as m,t as S,d,e as C,n as E,w as r,E as T,j as i,f as z,q as G,F as H,k as b,i as w}from"./vendor.03113035.js";const J={setup(){const n=h(),o=h(!1),t=h(!0),l=h(null),P=U(),F=I(),{id:c}=P.query,s=D({defaultProps:{children:"sub",label:"name"},id:c,Form:{name:"",checkedMenu:[],checkedPermission:[]},menu_list:[],permission_list:[],rules:{name:[{required:!0,message:"\u89D2\u8272\u5FC5\u987B",trigger:["change"]}],checkedMenu:[{required:!0,message:"\u83DC\u5355\u5FC5\u987B",trigger:["change"]}],checkedPermission:[{required:!0,message:"\u6743\u9650\u5FC5\u987B",trigger:["change"]}]}});O(()=>{p(),u(),c&&m.get(`/api/back/roles/${c}`).then(e=>{s.Form={name:e.data.name,checkedMenu:e.data.menu,checkedPermission:e.data.permission}})});const p=()=>{m.get("/api/back/menus/list").then(e=>{s.menu_list=e.data})},u=()=>{m.get("/api/back/permissions").then(e=>{s.permission_list=e.data})},k=()=>{l.value.validate(e=>{if(console.log(e),e){let a=m.post,M={name:s.Form.name,menu:s.Form.checkedMenu,permission:s.Form.checkedPermission};console.log(M);let V="/api/back/roles";c&&(a=m.put,V=`/api/back/roles/${c}`),a(V,M).then(()=>{T.success(c?"\u4FEE\u6539\u6210\u529F":"\u6DFB\u52A0\u6210\u529F"),F.push({path:"/role"})})}})},g=e=>{e?(s.Form.checkedPermission=[],s.permission_list.forEach(a=>{s.Form.checkedPermission.push(a.id)})):s.Form.checkedPermission=[],t.value=!1},f=e=>{const a=e.length;o.value=a===s.permission_list.length,t.value=a>0&&a<s.permission_list.length},_=()=>{s.Form.checkedMenu=[],n.value.getCheckedNodes().forEach(a=>{s.Form.checkedMenu.push(a.id)})};return q(A({},S(s)),{roleRef:l,submitAdd:k,tree:n,checkPermissionAll:o,isPermissionIndeterminate:t,handleCheckPermissionAllChange:g,handleCheckedPermissionsChange:f,handleCheckChange:_})}},K=b("Check all");function Q(n,o,t,l,P,F){const c=d("el-input"),s=d("el-form-item"),p=d("el-tree"),u=d("el-checkbox"),k=d("el-checkbox-group"),g=d("el-button"),f=d("el-form"),_=d("el-card");return C(),E(_,{style:{"min-height":"100%"}},{default:r(()=>[i(f,{model:n.Form,rules:n.rules,ref:"roleRef","label-width":"100px"},{default:r(()=>[i(s,{label:"\u89D2\u8272\u540D",prop:"name"},{default:r(()=>[i(c,{modelValue:n.Form.name,"onUpdate:modelValue":o[0]||(o[0]=e=>n.Form.name=e),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"},null,8,["modelValue"])]),_:1}),i(s,{label:"\u83DC\u5355",prop:"checkedMenu"},{default:r(()=>[i(p,{ref:"tree",data:n.menu_list,"show-checkbox":"","node-key":"id",props:n.defaultProps,"default-checked-keys":n.Form.checkedMenu,onCheckChange:l.handleCheckChange},null,8,["data","props","default-checked-keys","onCheckChange"])]),_:1}),i(s,{label:"\u6743\u9650",prop:"checkedPermission"},{default:r(()=>[i(u,{modelValue:l.checkPermissionAll,"onUpdate:modelValue":o[1]||(o[1]=e=>l.checkPermissionAll=e),indeterminate:l.isPermissionIndeterminate,onChange:l.handleCheckPermissionAllChange},{default:r(()=>[K]),_:1},8,["modelValue","indeterminate","onChange"]),i(k,{modelValue:n.Form.checkedPermission,"onUpdate:modelValue":o[2]||(o[2]=e=>n.Form.checkedPermission=e),onChange:l.handleCheckedPermissionsChange},{default:r(()=>[(C(!0),z(H,null,G(n.permission_list,(e,a)=>(C(),E(u,{key:e.id,label:e.id},{default:r(()=>[b(w(e.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),i(s,null,{default:r(()=>[i(g,{type:"primary",onClick:o[3]||(o[3]=e=>l.submitAdd())},{default:r(()=>[b(w(n.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var $=N(J,[["render",Q]]);export{$ as default};

var y=Object.defineProperty,U=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var F=(o,e,r)=>e in o?y(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,V=(o,e)=>{for(var r in e||(e={}))R.call(e,r)&&F(o,r,e[r]);if(_)for(var r of _(e))j.call(e,r)&&F(o,r,e[r]);return o},b=(o,e)=>U(o,$(e));import"./wangEditor.1134d78c.js";import{_ as w}from"./index.05576d88.js";import{am as O,aq as C,u as E,r as x,o as A,b as f,t as B,d as m,e as M,n as N,w as l,E as g,j as a,k as c,i as S}from"./vendor.4407d092.js";const D={name:"technicaloffice_setting_add",setup(){const o=O(null),e=C(),r=E(),{id:u}=e.query,n=x({id:u,Form:{name:"",address:"",phone:"",index:"",sort:"0",status:"1"},rules:{name:[{required:"true",message:"\u79D1\u5BA4\u540D\u79F0\u5FC5\u987B",trigger:["change"]}],address:[{required:"true",message:"\u79D1\u5BA4\u5730\u5740\u5FC5\u987B",trigger:["change"]}],phone:[{required:"true",message:"\u79D1\u5BA4\u7535\u8BDD\u5FC5\u987B",trigger:["change"]}],index:[{required:"true",message:"\u79D1\u5BA4\u7D22\u5F15\u5FC5\u987B",trigger:["change"]}],sort:[{required:"true",message:"\u79D1\u5BA4\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:"true",message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});A(()=>{u&&f.get(`/api/back/technicalOffices/${u}`).then(t=>{n.Form={name:t.data.name,address:t.data.address,phone:t.data.phone,index:t.data.index,sort:t.data.sort,status:String(t.data.status)}})});const h=()=>{o.value.validate(t=>{if(t){let d=f.post,i={name:n.Form.name,address:n.Form.address,phone:n.Form.phone,index:n.Form.index,sort:n.Form.sort,status:n.Form.status};if(i.name.length>50){g.error("\u79D1\u5BA4\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC750\u4E2A\u5B57\u7B26");return}if(i.address.length>100){g.error("\u79D1\u5BA4\u5730\u5740\u4E0D\u80FD\u8D85\u8FC7100\u4E2A\u5B57\u7B26");return}let p="/api/back/technicalOffices";u&&(d=f.put,p=`/api/back/technicalOffices/${u}`),d(p,i).then(()=>{g.success(u?"\u4FEE\u6539\u6210\u529F":"\u6DFB\u52A0\u6210\u529F"),r.push({path:"/technicaloffice"})})}})};return b(V({},B(n)),{Ref:o,submitAdd:h})}},T=c("\u5F00\u542F"),z=c("\u7981\u7528");function G(o,e,r,u,n,h){const t=m("el-input"),d=m("el-form-item"),i=m("el-radio"),p=m("el-radio-group"),q=m("el-button"),k=m("el-form"),v=m("el-card");return M(),N(v,{style:{"min-height":"100%"}},{default:l(()=>[a(k,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:l(()=>[a(d,{label:"\u79D1\u5BA4\u540D\u79F0",prop:"name"},{default:l(()=>[a(t,{modelValue:o.Form.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.Form.name=s),placeholder:"\u8BF7\u8F93\u5165\u79D1\u5BA4\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(d,{label:"\u79D1\u5BA4\u5730\u5740",prop:"address"},{default:l(()=>[a(t,{modelValue:o.Form.address,"onUpdate:modelValue":e[1]||(e[1]=s=>o.Form.address=s),placeholder:"\u8BF7\u8F93\u5165\u79D1\u5BA4\u5730\u5740"},null,8,["modelValue"])]),_:1}),a(d,{label:"\u79D1\u5BA4\u7535\u8BDD",prop:"phone"},{default:l(()=>[a(t,{modelValue:o.Form.phone,"onUpdate:modelValue":e[2]||(e[2]=s=>o.Form.phone=s),placeholder:"\u8BF7\u8F93\u5165\u79D1\u5BA4\u7535\u8BDD"},null,8,["modelValue"])]),_:1}),a(d,{label:"\u79D1\u5BA4\u7D22\u5F15",prop:"index"},{default:l(()=>[a(t,{modelValue:o.Form.index,"onUpdate:modelValue":e[3]||(e[3]=s=>o.Form.index=s),placeholder:"\u8BF7\u8F93\u5165\u79D1\u5BA4\u7D22\u5F15"},null,8,["modelValue"])]),_:1}),a(d,{label:"\u6392\u5E8F",prop:"sort"},{default:l(()=>[a(t,{modelValue:o.Form.sort,"onUpdate:modelValue":e[4]||(e[4]=s=>o.Form.sort=s),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),a(d,{label:"\u4E0A\u67B6\u72B6\u6001",prop:"status"},{default:l(()=>[a(p,{modelValue:o.Form.status,"onUpdate:modelValue":e[5]||(e[5]=s=>o.Form.status=s),disabled:""},{default:l(()=>[a(i,{label:"1"},{default:l(()=>[T]),_:1}),a(i,{label:"0"},{default:l(()=>[z]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,null,{default:l(()=>[a(q,{type:"primary",onClick:e[6]||(e[6]=s=>u.submitAdd())},{default:l(()=>[c(S(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var L=w(D,[["render",G]]);export{L as default};

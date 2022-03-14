var C=Object.defineProperty,H=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var R=(e,o,i)=>o in e?C(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,w=(e,o)=>{for(var i in o||(o={}))O.call(o,i)&&R(e,i,o[i]);if(x)for(var i of x(o))P.call(o,i)&&R(e,i,o[i]);return e},A=(e,o)=>H(e,M(o));import{W as D}from"./wangEditor.a7cd756a.js";import{_ as W,a as G,c as B,u as T}from"./index.7f35f9d3.js";import{an as J,as as K,am as F,aq as Q,u as X,r as Y,o as Z,b as V,au as $,t as ee,d,e as g,n as L,w as n,E as _,j as t,f as U,q as oe,F as le,g as S,h as E,k as j,i as ae}from"./vendor.7c0b5d44.js";const te={name:"experts_add",components:{Plus:J,Delete:K},setup(){F(null);const e=F(null),o=F(null),i=F(null),p=Q(),q=X(),{id:c}=p.query,r=Y({token:"Bearer "+G("token")||"",id:c,Form:{img_url:"",img:"",office_id:"",name:"",position:"",professional:"",excel:"",content:"",sort:"",status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],office_id:[{required:!0,message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],name:[{required:"true",message:"\u59D3\u540D\u5FC5\u987B",trigger:["change"]}],position:[{required:"true",message:"\u804C\u52A1\u5FC5\u987B",trigger:["change"]}],professional:[{required:"true",message:"\u804C\u79F0\u5FC5\u987B",trigger:["change"]}],excel:[{required:!0,message:"\u64C5\u957F\u5FC5\u987B",trigger:["change"]}],sort:[{required:!0,message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let a;Z(()=>{a=new D(o.value),a.config.showLinkImg=!1,a.config.showLinkImgAlt=!1,a.config.showLinkImgHref=!1,a.config.uploadImgMaxSize=10*1024*1024,a.config.uploadImgMaxLength=1,a.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],a.config.uploadFileName="file",a.config.uploadImgHeaders={Authorization:r.token},a.config.uploadImgParams={basket:"img"},a.config.uploadImgHooks={customInsert:function(l,m){console.log("result",m),l(m.data.src)}},a.config.uploadImgServer=B,Object.assign(a.config,{onchange(){console.log("change")}}),a.config.uploadVideoServer=B,a.config.uploadVideoMaxSize=1*200*1024*1024,a.config.uploadVideoAccept=["mp4"],a.config.uploadVideoParams={basket:"video"},a.config.uploadVideoName="file",a.config.uploadVideoHeaders={Authorization:r.token},a.config.uploadVideoHooks={customInsert:function(l,m){console.log("customInsert",m),l(m.data.src)}},a.create(),u(),c&&V.get(`/api/back/experts/${c}`).then(l=>{r.Form={img_url:l.data.url||"",img:l.data.file_id,office_id:l.data.office_id,name:l.data.name,position:l.data.position,professional:l.data.professional,excel:l.data.excel,sort:l.data.sort,status:String(l.data.status),fileList:[{url:l.data.url}],disabled:!0},a&&a.txt.html(l.data.content)})}),$(()=>{a.destroy(),a=null});const u=()=>{V.get("/api/back/technicalOffices").then(l=>{r.Form.list=l.data})},k=()=>{e.value.validate(l=>{if(l){let m=V.post,I={img:r.Form.img,office_id:r.Form.office_id,name:r.Form.name,position:r.Form.position,professional:r.Form.professional,excel:r.Form.excel,sort:r.Form.sort,content:a.txt.html(),status:r.Form.status},h="/api/back/experts";c&&(m=V.put,h=`/api/back/experts/${c}`),m(h,I).then(()=>{c?_.success("\u4FEE\u6539\u6210\u529F"):_.success("\u6DFB\u52A0\u6210\u529F"),q.push({path:"/expert"})})}})},b=l=>{const m=l.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(m))return _.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},v=l=>{_.success("\u4E0A\u4F20\u6210\u529F"),r.Form.img_url=l.data.src||"",r.Form.img=l.data.id||""},y=l=>{_.error("\u4E0A\u4F20\u5931\u8D25")},f=l=>{i.value.clearFiles(),r.Form.img=""};return A(w({},ee(r)),{editor:o,uploadRef:i,Ref:e,submitAdd:k,uploadImgServer:T,handleBeforeUpload:b,handleUrlSuccess:v,handleUrlError:y,handleRemove:f})}},ne=["src"],se={class:"el-upload-list__item-actions"},re={ref:"editor",style:{"z-index":"1"}},ie=j("\u5DF2\u5BA1\u6838"),de=j("\u5F85\u5BA1\u6838");function ue(e,o,i,p,q,c){const r=d("el-option"),a=d("el-select"),u=d("el-form-item"),k=d("plus"),b=d("el-icon"),v=d("delete"),y=d("el-upload"),f=d("el-input"),l=d("el-radio"),m=d("el-radio-group"),I=d("el-button"),h=d("el-form"),z=d("el-card");return g(),L(z,{style:{"min-height":"100%"}},{default:n(()=>[t(h,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:n(()=>[t(u,{label:"\u79D1\u5BA4",prop:"office_id"},{default:n(()=>[t(a,{modelValue:e.Form.office_id,"onUpdate:modelValue":o[0]||(o[0]=s=>e.Form.office_id=s),placeholder:"Select",filterable:""},{default:n(()=>[(g(!0),U(le,null,oe(e.Form.list,s=>(g(),L(r,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u5C01\u9762\u56FE",prop:"img"},{default:n(()=>[t(y,{ref:"uploadRef",action:p.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":p.handleBeforeUpload,"on-success":p.handleUrlSuccess,"on-error":p.handleUrlError,"auto-upload":!0,"file-list":e.Form.fileList},{default:n(()=>[t(b,null,{default:n(()=>[t(k)]),_:1})]),file:n(({file:s})=>[S("div",null,[e.Form.img_url?(g(),U("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.Form.img_url,alt:""},null,8,ne)):E("",!0),S("span",se,[e.Form.disabled?(g(),U("span",{key:0,class:"el-upload-list__item-delete",onClick:o[1]||(o[1]=(...N)=>p.handleRemove&&p.handleRemove(...N))},[t(b,null,{default:n(()=>[t(v)]),_:1})])):E("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),t(u,{label:"\u59D3\u540D",prop:"name"},{default:n(()=>[t(f,{modelValue:e.Form.name,"onUpdate:modelValue":o[2]||(o[2]=s=>e.Form.name=s),placeholder:"\u8BF7\u8F93\u5165\u4E13\u5BB6\u540D\u5B57",type:"text"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u804C\u52A1",prop:"position"},{default:n(()=>[t(f,{modelValue:e.Form.position,"onUpdate:modelValue":o[3]||(o[3]=s=>e.Form.position=s),placeholder:"\u8BF7\u8F93\u5165\u804C\u52A1",type:"text"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u804C\u79F0",prop:"professional"},{default:n(()=>[t(f,{modelValue:e.Form.professional,"onUpdate:modelValue":o[4]||(o[4]=s=>e.Form.professional=s),placeholder:"\u8BF7\u8F93\u5165\u804C\u79F0",type:"text"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u64C5\u957F",prop:"excel"},{default:n(()=>[t(f,{modelValue:e.Form.excel,"onUpdate:modelValue":o[5]||(o[5]=s=>e.Form.excel=s),placeholder:"\u8BF7\u8F93\u5165\u64C5\u957F",type:"text"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5185\u5BB9",prop:"content"},{default:n(()=>[S("div",re,null,512)]),_:1}),t(u,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[t(f,{modelValue:e.Form.sort,"onUpdate:modelValue":o[6]||(o[6]=s=>e.Form.sort=s),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[t(m,{modelValue:e.Form.status,"onUpdate:modelValue":o[7]||(o[7]=s=>e.Form.status=s),disabled:""},{default:n(()=>[t(l,{label:"1"},{default:n(()=>[ie]),_:1}),t(l,{label:"0"},{default:n(()=>[de]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,null,{default:n(()=>[t(I,{type:"primary",onClick:o[8]||(o[8]=s=>p.submitAdd())},{default:n(()=>[j(ae(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ge=W(te,[["render",ue]]);export{ge as default};

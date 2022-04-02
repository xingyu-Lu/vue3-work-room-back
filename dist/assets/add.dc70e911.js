var O=Object.defineProperty,C=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var R=(e,o,i)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,L=(e,o)=>{for(var i in o||(o={}))H.call(o,i)&&R(e,i,o[i]);if(w)for(var i of w(o))M.call(o,i)&&R(e,i,o[i]);return e},A=(e,o)=>C(e,D(o));import{W as P}from"./wangEditor.2981c876.js";import{_ as W,a as G,c as B,u as T}from"./index.b3adf528.js";import{an as J,as as K,am as y,aq as Q,u as X,r as Y,o as Z,b as F,au as $,t as ee,d,e as g,n as E,w as n,E as _,j as t,f as U,q as oe,F as le,g as S,h as x,k as j,i as ae}from"./vendor.09a2a638.js";const te={name:"news_add",components:{Plus:J,Delete:K},setup(){const e=y(null),o=y(null),i=y(null),c=Q(),q=X(),{id:f}=c.query,s=Y({token:"Bearer "+G("token")||"",id:f,Form:{img_url:"",img:"",office_id:"",name:"",professional:"",excel:"",content:"",sort:"0",status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u533B\u751F\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],office_id:[{required:"true",message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],name:[{required:"true",message:"\u540D\u5B57",trigger:["change"]}],professional:[{required:"true",message:"\u804C\u79F0\u5FC5\u987B",trigger:["change"]}],excel:[{required:"true",message:"\u804C\u79F0\u5FC5\u987B",trigger:["change"]}],sort:[{required:"true",message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let l;Z(()=>{l=new P(o.value),l.config.showLinkImg=!1,l.config.showLinkImgAlt=!1,l.config.showLinkImgHref=!1,l.config.uploadImgMaxSize=10*1024*1024,l.config.uploadImgMaxLength=1,l.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],l.config.uploadFileName="file",l.config.uploadImgHeaders={Authorization:s.token},l.config.uploadImgParams={basket:"img"},l.config.uploadImgHooks={customInsert:function(a,u){console.log("result",u),a(u.data.src)}},l.config.uploadImgServer=B,Object.assign(l.config,{onchange(){console.log("change")}}),l.config.uploadVideoServer=B,l.config.uploadVideoMaxSize=1*200*1024*1024,l.config.uploadVideoAccept=["mp4"],l.config.uploadVideoParams={basket:"video"},l.config.uploadVideoName="file",l.config.uploadVideoHeaders={Authorization:s.token},l.config.uploadVideoHooks={customInsert:function(a,u){console.log("customInsert",u),a(u.data.src)}},l.create(),m(),f&&F.get(`/api/back/technicalOfficeDoctors/${f}`).then(a=>{s.Form={img_url:a.data.url||"",img:a.data.file_id,office_id:a.data.office_id,name:a.data.name,professional:a.data.professional,excel:a.data.excel,sort:a.data.sort,status:String(a.data.status),fileList:[{url:a.data.url}],disabled:!0},l&&l.txt.html(a.data.content)})}),$(()=>{l.destroy(),l=null});const m=()=>{F.get("/api/back/technicalOffices").then(a=>{s.Form.list=a.data})},V=()=>{e.value.validate(a=>{if(a){let u=F.post,I={img:s.Form.img,office_id:s.Form.office_id,name:s.Form.name,professional:s.Form.professional,excel:s.Form.excel,content:l.txt.html(),sort:s.Form.sort,status:s.Form.status},b="/api/back/technicalOfficeDoctors";f&&(u=F.put,b=`/api/back/technicalOfficeDoctors/${f}`),u(b,I).then(()=>{f?_.success("\u4FEE\u6539\u6210\u529F"):_.success("\u6DFB\u52A0\u6210\u529F"),q.push({path:"/technicaloffice-doctor"})})}})},h=a=>{const u=a.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(u))return _.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},k=a=>{_.success("\u4E0A\u4F20\u6210\u529F"),s.Form.img_url=a.data.src||"",s.Form.img=a.data.id||""},v=a=>{_.error("\u4E0A\u4F20\u5931\u8D25")},p=a=>{i.value.clearFiles(),s.Form.img="",s.Form.img_url="",s.Form.fileList=[]};return A(L({},ee(s)),{editor:o,uploadRef:i,Ref:e,submitAdd:V,uploadImgServer:T,handleBeforeUpload:h,handleUrlSuccess:k,handleUrlError:v,handleRemove:p})}},ne=["src"],se={class:"el-upload-list__item-actions"},re={ref:"editor",style:{"z-index":"1"}},ie=j("\u5DF2\u5BA1\u6838"),de=j("\u5F85\u5BA1\u6838");function ue(e,o,i,c,q,f){const s=d("el-option"),l=d("el-select"),m=d("el-form-item"),V=d("plus"),h=d("el-icon"),k=d("delete"),v=d("el-upload"),p=d("el-input"),a=d("el-radio"),u=d("el-radio-group"),I=d("el-button"),b=d("el-form"),z=d("el-card");return g(),E(z,{style:{"min-height":"100%"}},{default:n(()=>[t(b,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:n(()=>[t(m,{label:"\u79D1\u5BA4",prop:"office_id"},{default:n(()=>[t(l,{modelValue:e.Form.office_id,"onUpdate:modelValue":o[0]||(o[0]=r=>e.Form.office_id=r),placeholder:"Select",filterable:""},{default:n(()=>[(g(!0),U(le,null,oe(e.Form.list,r=>(g(),E(s,{key:r.id,label:r.name,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"\u533B\u751F\u56FE\u7247",prop:"img"},{default:n(()=>[t(v,{ref:"uploadRef",action:c.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":c.handleBeforeUpload,"on-success":c.handleUrlSuccess,"on-error":c.handleUrlError,"auto-upload":!0,"file-list":e.Form.fileList},{default:n(()=>[t(h,null,{default:n(()=>[t(V)]),_:1})]),file:n(({file:r})=>[S("div",null,[e.Form.img_url?(g(),U("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.Form.img_url,alt:""},null,8,ne)):x("",!0),S("span",se,[e.Form.disabled?(g(),U("span",{key:0,class:"el-upload-list__item-delete",onClick:o[1]||(o[1]=(...N)=>c.handleRemove&&c.handleRemove(...N))},[t(h,null,{default:n(()=>[t(k)]),_:1})])):x("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),t(m,{label:"\u540D\u5B57",prop:"name"},{default:n(()=>[t(p,{modelValue:e.Form.name,"onUpdate:modelValue":o[2]||(o[2]=r=>e.Form.name=r),placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57",type:"text"},null,8,["modelValue"])]),_:1}),t(m,{label:"\u804C\u79F0",prop:"professional"},{default:n(()=>[t(p,{modelValue:e.Form.professional,"onUpdate:modelValue":o[3]||(o[3]=r=>e.Form.professional=r),placeholder:"\u8BF7\u8F93\u5165\u804C\u79F0",type:"text"},null,8,["modelValue"])]),_:1}),t(m,{label:"\u64C5\u957F",prop:"excel"},{default:n(()=>[t(p,{modelValue:e.Form.excel,"onUpdate:modelValue":o[4]||(o[4]=r=>e.Form.excel=r),placeholder:"\u8BF7\u8F93\u5165\u64C5\u957F",type:"text"},null,8,["modelValue"])]),_:1}),t(m,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[t(p,{modelValue:e.Form.sort,"onUpdate:modelValue":o[5]||(o[5]=r=>e.Form.sort=r),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),t(m,{label:"\u4ECB\u7ECD",prop:"content"},{default:n(()=>[S("div",re,null,512)]),_:1}),t(m,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[t(u,{modelValue:e.Form.status,"onUpdate:modelValue":o[6]||(o[6]=r=>e.Form.status=r),disabled:""},{default:n(()=>[t(a,{label:"1"},{default:n(()=>[ie]),_:1}),t(a,{label:"0"},{default:n(()=>[de]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(m,null,{default:n(()=>[t(I,{type:"primary",onClick:o[7]||(o[7]=r=>c.submitAdd())},{default:n(()=>[j(ae(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ge=W(te,[["render",ue]]);export{ge as default};
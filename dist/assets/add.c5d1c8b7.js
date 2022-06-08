var N=Object.defineProperty,C=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(e,o,i)=>o in e?N(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,x=(e,o)=>{for(var i in o||(o={}))O.call(o,i)&&w(e,i,o[i]);if(R)for(var i of R(o))P.call(o,i)&&w(e,i,o[i]);return e},L=(e,o)=>C(e,M(o));import{an as D,as as W,am as F,aq as G,u as T,r as J,o as K,b as V,au as Q,t as X,d,e as g,n as A,w as n,E as _,j as a,f as U,q as Y,F as Z,g as S,h as B,k as j,i as $}from"./vendor.c148d9f6.js";import{W as ee}from"./wangEditor.bf78931b.js";import{_ as oe,a as le,c as E,u as ae}from"./index.4059526f.js";const te={name:"experts_add",components:{Plus:D,Delete:W},setup(){F(null);const e=F(null),o=F(null),i=F(null),p=G(),q=T(),{id:f}=p.query,s=J({token:"Bearer "+le("token")||"",id:f,Form:{img_url:"",img:"",office_id:"",name:"",position:"",professional:"",excel:"",content:"",sort:"",status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],office_id:[{required:!0,message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],name:[{required:!0,message:"\u59D3\u540D\u5FC5\u987B",trigger:["change"]}],position:[{required:!1,message:"\u804C\u52A1\u5FC5\u987B",trigger:["change"]}],professional:[{required:!1,message:"\u804C\u79F0\u5FC5\u987B",trigger:["change"]}],excel:[{required:!0,message:"\u64C5\u957F\u5FC5\u987B",trigger:["change"]}],sort:[{required:!0,message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let l;K(()=>{l=new ee(o.value),l.config.lineHeights=["1","1.15","1.5","2","2.5","3"],l.config.showLinkImg=!1,l.config.showLinkImgAlt=!1,l.config.showLinkImgHref=!1,l.config.uploadImgMaxSize=10*1024*1024,l.config.uploadImgMaxLength=1,l.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],l.config.uploadFileName="file",l.config.uploadImgHeaders={Authorization:s.token},l.config.uploadImgParams={basket:"img"},l.config.uploadImgHooks={customInsert:function(t,m){console.log("result",m),t(m.data.src)}},l.config.uploadImgServer=E,Object.assign(l.config,{onchange(){console.log("change")}}),l.config.uploadVideoServer=E,l.config.uploadVideoMaxSize=1*200*1024*1024,l.config.uploadVideoAccept=["mp4"],l.config.uploadVideoParams={basket:"video"},l.config.uploadVideoName="file",l.config.uploadVideoHeaders={Authorization:s.token},l.config.uploadVideoHooks={customInsert:function(t,m){console.log("customInsert",m),t(m.data.src)}},l.create(),u(),f&&V.get(`/api/back/experts/${f}`).then(t=>{s.Form={img_url:t.data.url||"",img:t.data.file_id,office_id:t.data.office_id,name:t.data.name,position:t.data.position,professional:t.data.professional,excel:t.data.excel,sort:t.data.sort,status:String(t.data.status),fileList:[{url:t.data.url}],disabled:!0},l&&l.txt.html(t.data.content)})}),Q(()=>{l.destroy(),l=null});const u=()=>{V.get("/api/back/technicalOffices").then(t=>{s.Form.list=t.data})},k=()=>{e.value.validate(t=>{if(t){let m=V.post,y={img:s.Form.img,office_id:s.Form.office_id,name:s.Form.name,position:s.Form.position,professional:s.Form.professional,excel:s.Form.excel,sort:s.Form.sort,content:l.txt.html(),status:s.Form.status},h="/api/back/experts";f&&(m=V.put,h=`/api/back/experts/${f}`),m(h,y).then(()=>{f?_.success("\u4FEE\u6539\u6210\u529F"):_.success("\u6DFB\u52A0\u6210\u529F"),q.push({path:"/expert"})})}})},b=t=>{const m=t.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(m))return _.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},v=t=>{_.success("\u4E0A\u4F20\u6210\u529F"),s.Form.img_url=t.data.src||"",s.Form.img=t.data.id||""},I=t=>{_.error("\u4E0A\u4F20\u5931\u8D25")},c=t=>{i.value.clearFiles(),s.Form.img="",s.Form.img_url="",s.Form.fileList=[]};return L(x({},X(s)),{editor:o,uploadRef:i,Ref:e,submitAdd:k,uploadImgServer:ae,handleBeforeUpload:b,handleUrlSuccess:v,handleUrlError:I,handleRemove:c})}},se=["src"],ne={class:"el-upload-list__item-actions"},re={ref:"editor",style:{"z-index":"1"}},ie=j("\u5DF2\u5BA1\u6838"),de=j("\u5F85\u5BA1\u6838");function ue(e,o,i,p,q,f){const s=d("el-option"),l=d("el-select"),u=d("el-form-item"),k=d("plus"),b=d("el-icon"),v=d("delete"),I=d("el-upload"),c=d("el-input"),t=d("el-radio"),m=d("el-radio-group"),y=d("el-button"),h=d("el-form"),z=d("el-card");return g(),A(z,{style:{"min-height":"100%"}},{default:n(()=>[a(h,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:n(()=>[a(u,{label:"\u79D1\u5BA4",prop:"office_id"},{default:n(()=>[a(l,{modelValue:e.Form.office_id,"onUpdate:modelValue":o[0]||(o[0]=r=>e.Form.office_id=r),placeholder:"Select",filterable:""},{default:n(()=>[(g(!0),U(Z,null,Y(e.Form.list,r=>(g(),A(s,{key:r.id,label:r.name,value:r.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u5C01\u9762\u56FE",prop:"img"},{default:n(()=>[a(I,{ref:"uploadRef",action:p.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":p.handleBeforeUpload,"on-success":p.handleUrlSuccess,"on-error":p.handleUrlError,"auto-upload":!0,"file-list":e.Form.fileList},{default:n(()=>[a(b,null,{default:n(()=>[a(k)]),_:1})]),file:n(({file:r})=>[S("div",null,[e.Form.img_url?(g(),U("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.Form.img_url,alt:""},null,8,se)):B("",!0),S("span",ne,[e.Form.disabled?(g(),U("span",{key:0,class:"el-upload-list__item-delete",onClick:o[1]||(o[1]=(...H)=>p.handleRemove&&p.handleRemove(...H))},[a(b,null,{default:n(()=>[a(v)]),_:1})])):B("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),a(u,{label:"\u59D3\u540D",prop:"name"},{default:n(()=>[a(c,{modelValue:e.Form.name,"onUpdate:modelValue":o[2]||(o[2]=r=>e.Form.name=r),placeholder:"\u8BF7\u8F93\u5165\u4E13\u5BB6\u540D\u5B57",type:"text"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u804C\u52A1",prop:"position"},{default:n(()=>[a(c,{modelValue:e.Form.position,"onUpdate:modelValue":o[3]||(o[3]=r=>e.Form.position=r),placeholder:"\u8BF7\u8F93\u5165\u804C\u52A1",type:"text"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u804C\u79F0",prop:"professional"},{default:n(()=>[a(l,{modelValue:e.Form.professional,"onUpdate:modelValue":o[4]||(o[4]=r=>e.Form.professional=r),placeholder:"Select",filterable:""},{default:n(()=>[a(s,{value:"\u4E3B\u4EFB\u533B\u5E08",label:"\u4E3B\u4EFB\u533B\u5E08"}),a(s,{value:"\u526F\u4E3B\u4EFB\u533B\u5E08",label:"\u526F\u4E3B\u4EFB\u533B\u5E08"}),a(s,{value:"\u4E3B\u6CBB\u533B\u5E08",label:"\u4E3B\u6CBB\u533B\u5E08"}),a(s,{value:"\u533B\u5E08",label:"\u533B\u5E08"})]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u64C5\u957F",prop:"excel"},{default:n(()=>[a(c,{modelValue:e.Form.excel,"onUpdate:modelValue":o[5]||(o[5]=r=>e.Form.excel=r),placeholder:"\u8BF7\u8F93\u5165\u64C5\u957F",type:"text"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u5185\u5BB9",prop:"content"},{default:n(()=>[S("div",re,null,512)]),_:1}),a(u,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[a(c,{modelValue:e.Form.sort,"onUpdate:modelValue":o[6]||(o[6]=r=>e.Form.sort=r),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[a(m,{modelValue:e.Form.status,"onUpdate:modelValue":o[7]||(o[7]=r=>e.Form.status=r),disabled:""},{default:n(()=>[a(t,{label:"1"},{default:n(()=>[ie]),_:1}),a(t,{label:"0"},{default:n(()=>[de]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(u,null,{default:n(()=>[a(y,{type:"primary",onClick:o[8]||(o[8]=r=>p.submitAdd())},{default:n(()=>[j($(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ge=oe(te,[["render",ue]]);export{ge as default};

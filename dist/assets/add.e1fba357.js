var B=Object.defineProperty,$=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var w=(o,t,n)=>t in o?B(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,S=(o,t)=>{for(var n in t||(t={}))z.call(t,n)&&w(o,n,t[n]);if(I)for(var n of I(t))E.call(t,n)&&w(o,n,t[n]);return o},U=(o,t)=>$(o,x(t));import{W as H}from"./wangEditor.7fca4042.js";import{_ as L,a as M,c as q,u as N}from"./index.cdee2207.js";import{an as C,as as D,am as c,aq as P,u as O,r as W,o as G,b as y,au as T,t as J,d,e as K,n as Q,w as s,E as g,j as a,g as X,k as h,i as Y}from"./vendor.03113035.js";const Z={name:"news_add",components:{Plus:C,Delete:D},setup(){c(null);const o=c(null),t=c(null),n=c(null),v=P(),j=O(),{id:p}=v.query,i=W({token:"Bearer "+M("token")||"",id:p,Form:{type:"",img_url:"",img:"",office_id:"",title:"",content:"",release_time:c(""),status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],type:[{required:!0,message:"\u7C7B\u578B\u5FC5\u987B",trigger:["change"]}],title:[{required:!1,message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let e;G(()=>{e=new H(t.value),e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=10*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:i.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(l,r){console.log("result",r),l(r.data.src)}},e.config.uploadImgServer=q,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=q,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:i.token},e.config.uploadVideoHooks={customInsert:function(l,r){console.log("customInsert",r),l(r.data.src)}},e.create(),p&&y.get(`/api/back/jobs/${p}`).then(l=>{i.Form={type:l.data.type,title:l.data.title,release_time:l.data.release_time,status:String(l.data.status)},e&&e.txt.html(l.data.content)})}),T(()=>{e.destroy(),e=null});const V=()=>{o.value.validate(l=>{if(l){let r=y.post,_={type:i.Form.type,title:i.Form.title,content:e.txt.html(),release_time:i.Form.release_time,status:i.Form.status},b="/api/back/jobs";p&&(_.release_time=i.Form.release_time,r=y.put,b=`/api/back/jobs/${p}`),r(b,_).then(()=>{p?g.success("\u4FEE\u6539\u6210\u529F"):g.success("\u6DFB\u52A0\u6210\u529F"),j.push({path:"/job"})})}})},f=l=>{const r=l.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(r))return g.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},F=l=>{g.success("\u4E0A\u4F20\u6210\u529F"),i.Form.img_url=l.data.src||"",i.Form.img=l.data.id||""},u=l=>{g.error("\u4E0A\u4F20\u5931\u8D25")},k=l=>{n.value.clearFiles(),i.Form.img=""};return U(S({},J(i)),{editor:t,uploadRef:n,Ref:o,submitAdd:V,uploadImgServer:N,handleBeforeUpload:f,handleUrlSuccess:F,handleUrlError:u,handleRemove:k})}},ee=h("\u5E94\u8058\u6D41\u7A0B\u53EA\u53EF\u65B0\u589E\u4E00\u6B21"),te={ref:"editor",style:{"z-index":"1"}},oe=h("\u5DF2\u5BA1\u6838"),le=h("\u5F85\u5BA1\u6838");function ae(o,t,n,v,j,p){const i=d("el-descriptions-item"),e=d("el-descriptions"),V=d("el-divider"),f=d("el-option"),F=d("el-select"),u=d("el-form-item"),k=d("el-input"),l=d("el-date-picker"),r=d("el-radio"),_=d("el-radio-group"),b=d("el-button"),A=d("el-form"),R=d("el-card");return K(),Q(R,{style:{"min-height":"100%"}},{default:s(()=>[a(e,{title:"\u63D0\u793A"},{default:s(()=>[a(i,null,{default:s(()=>[ee]),_:1})]),_:1}),a(V),a(A,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[a(u,{label:"\u7C7B\u578B",prop:"type"},{default:s(()=>[a(F,{modelValue:o.Form.type,"onUpdate:modelValue":t[0]||(t[0]=m=>o.Form.type=m),placeholder:"Select",filterable:""},{default:s(()=>[a(f,{value:"0",label:"\u62DB\u8058\u4FE1\u606F"}),a(f,{value:"1",label:"\u5E94\u8058\u6D41\u7A0B"})]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[a(k,{modelValue:o.Form.title,"onUpdate:modelValue":t[1]||(t[1]=m=>o.Form.title=m),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u5185\u5BB9",prop:"content"},{default:s(()=>[X("div",te,null,512)]),_:1}),a(u,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:s(()=>[a(l,{modelValue:o.Form.release_time,"onUpdate:modelValue":t[2]||(t[2]=m=>o.Form.release_time=m),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),a(u,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[a(_,{modelValue:o.Form.status,"onUpdate:modelValue":t[3]||(t[3]=m=>o.Form.status=m),disabled:""},{default:s(()=>[a(r,{label:"1"},{default:s(()=>[oe]),_:1}),a(r,{label:"0"},{default:s(()=>[le]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(u,null,{default:s(()=>[a(b,{type:"primary",onClick:t[4]||(t[4]=m=>v.submitAdd())},{default:s(()=>[h(Y(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var de=L(Z,[["render",ae]]);export{de as default};

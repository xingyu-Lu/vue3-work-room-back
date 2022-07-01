var R=Object.defineProperty,x=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(o,t,i)=>t in o?R(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,w=(o,t)=>{for(var i in t||(t={}))H.call(t,i)&&j(o,i,t[i]);if(S)for(var i of S(t))L.call(t,i)&&j(o,i,t[i]);return o},q=(o,t)=>x(o,B(t));import{an as $,as as E,am as _,aq as M,u as N,r as C,o as D,b as y,au as P,t as O,d as r,e as W,n as G,w as n,E as g,j as l,g as T,k as v,i as J}from"./vendor.587c42d0.js";import{W as K}from"./wangEditor.87c9fd6a.js";import{_ as Q,a as X,c as z,u as Y}from"./index.fc4792fb.js";const Z={name:"news_add",components:{Plus:$,Delete:E},setup(){_(null);const o=_(null),t=_(null),i=_(null),h=M(),I=N(),{id:p}=h.query,s=C({token:"Bearer "+X("token")||"",id:p,Form:{img_url:"",img:"",office_id:"",title:"",content:"",release_time:_(""),status:"0",disabled:!0,fileList:[],list:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],type:[{required:!0,message:"\u7C7B\u578B\u5FC5\u987B",trigger:["change"]}],title:[{required:!1,message:"\u6807\u9898",trigger:["change"]}],release_time:[{required:"true",message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let e;D(()=>{e=new K(t.value),e.config.lineHeights=["1","1.15","1.5","2","2.5","3"],e.config.showLinkImg=!1,e.config.showLinkImgAlt=!1,e.config.showLinkImgHref=!1,e.config.uploadImgMaxSize=2*1024*1024,e.config.uploadImgMaxLength=1,e.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],e.config.uploadFileName="file",e.config.uploadImgHeaders={Authorization:s.token},e.config.uploadImgParams={basket:"img"},e.config.uploadImgHooks={customInsert:function(a,d){console.log("result",d),a(d.data.src)}},e.config.uploadImgServer=z,Object.assign(e.config,{onchange(){console.log("change")}}),e.config.uploadVideoServer=z,e.config.uploadVideoMaxSize=1*200*1024*1024,e.config.uploadVideoAccept=["mp4"],e.config.uploadVideoParams={basket:"video"},e.config.uploadVideoName="file",e.config.uploadVideoHeaders={Authorization:s.token},e.config.uploadVideoHooks={customInsert:function(a,d){console.log("customInsert",d),a(d.data.src)}},e.create(),p&&y.get(`/api/back/patientServices/${p}`).then(a=>{s.Form={type:String(a.data.type),title:a.data.title,release_time:a.data.release_time,status:String(a.data.status)},e&&e.txt.html(a.data.content)})}),P(()=>{e.destroy(),e=null});const F=()=>{o.value.validate(a=>{if(a){let d=y.post,f={type:s.Form.type,title:s.Form.title,content:e.txt.html(),release_time:s.Form.release_time,status:s.Form.status},b="/api/back/patientServices";p&&(f.release_time=s.Form.release_time,d=y.put,b=`/api/back/patientServices/${p}`),d(b,f).then(()=>{p?g.success("\u4FEE\u6539\u6210\u529F"):g.success("\u6DFB\u52A0\u6210\u529F"),I.push({path:"/patient",query:{type:f.type}})})}})},c=a=>{if((a.size/1024/1024).toFixed(2)>2)return g.error("\u4E0A\u4F20\u7684\u56FE\u7247\u5927\u4E8E2\u5146"),!1;const f=a.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(f))return g.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},V=a=>{g.success("\u4E0A\u4F20\u6210\u529F"),s.Form.img_url=a.data.src||"",s.Form.img=a.data.id||""},u=a=>{g.error("\u4E0A\u4F20\u5931\u8D25")},k=a=>{i.value.clearFiles(),s.Form.img="",s.Form.img_url="",s.Form.fileList=[]};return q(w({},O(s)),{editor:t,uploadRef:i,Ref:o,submitAdd:F,uploadImgServer:Y,handleBeforeUpload:c,handleUrlSuccess:V,handleUrlError:u,handleRemove:k})}},ee=v("\u6302\u53F7\u65B9\u5F0F\u3001\u4F4F\u9662\u65B9\u5F0F\u3001\u697C\u5B87\u5206\u5E03\u3001\u8054\u7CFB\u6211\u4EEC\u53EA\u53EF\u65B0\u589E\u4E00\u6B21"),te={ref:"editor",style:{"z-index":"1"}},oe=v("\u5DF2\u5BA1\u6838"),le=v("\u5F85\u5BA1\u6838");function ae(o,t,i,h,I,p){const s=r("el-descriptions-item"),e=r("el-descriptions"),F=r("el-divider"),c=r("el-option"),V=r("el-select"),u=r("el-form-item"),k=r("el-input"),a=r("el-date-picker"),d=r("el-radio"),f=r("el-radio-group"),b=r("el-button"),U=r("el-form"),A=r("el-card");return W(),G(A,{style:{"min-height":"100%"}},{default:n(()=>[l(e,{title:"\u63D0\u793A"},{default:n(()=>[l(s,null,{default:n(()=>[ee]),_:1})]),_:1}),l(F),l(U,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:n(()=>[l(u,{label:"\u7C7B\u578B",prop:"type"},{default:n(()=>[l(V,{modelValue:o.Form.type,"onUpdate:modelValue":t[0]||(t[0]=m=>o.Form.type=m),placeholder:"Select",filterable:""},{default:n(()=>[l(c,{value:"0",label:"\u6302\u53F7\u65B9\u5F0F"}),l(c,{value:"1",label:"\u4F4F\u9662\u65B9\u5F0F"}),l(c,{value:"6",label:"\u697C\u5B87\u5206\u5E03"}),l(c,{value:"7",label:"\u8054\u7CFB\u6211\u4EEC"}),l(c,{value:"9",label:"\u5065\u5EB7\u79D1\u666E"})]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"\u6807\u9898",prop:"title"},{default:n(()=>[l(k,{modelValue:o.Form.title,"onUpdate:modelValue":t[1]||(t[1]=m=>o.Form.title=m),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),l(u,{label:"\u5185\u5BB9",prop:"content"},{default:n(()=>[T("div",te,null,512)]),_:1}),l(u,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:n(()=>[l(a,{modelValue:o.Form.release_time,"onUpdate:modelValue":t[2]||(t[2]=m=>o.Form.release_time=m),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),l(u,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[l(f,{modelValue:o.Form.status,"onUpdate:modelValue":t[3]||(t[3]=m=>o.Form.status=m),disabled:""},{default:n(()=>[l(d,{label:"1"},{default:n(()=>[oe]),_:1}),l(d,{label:"0"},{default:n(()=>[le]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(u,null,{default:n(()=>[l(b,{type:"primary",onClick:t[4]||(t[4]=m=>h.submitAdd())},{default:n(()=>[v(J(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var de=Q(Z,[["render",ae]]);export{de as default};
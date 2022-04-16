var G=Object.defineProperty,T=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var q=(e,l,d)=>l in e?G(e,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[l]=d,A=(e,l)=>{for(var d in l||(l={}))K.call(l,d)&&q(e,d,l[d]);if(L)for(var d of L(l))Q.call(l,d)&&q(e,d,l[d]);return e},B=(e,l)=>T(e,J(l));import{W as X}from"./wangEditor.229e0f90.js";import{_ as Y,a as Z,c as E,u as $}from"./index.c8b59c67.js";import{an as x,as as ee,am as g,aq as le,u as oe,r as te,o as ae,b as h,au as ne,t as ie,d as r,e as p,n as w,w as n,E as b,j as a,f as y,q as O,F as z,g as C,h as N,k as I,i as se}from"./vendor.b09253f4.js";const re={name:"news_add",components:{Plus:x,Delete:ee},setup(){g(null);const e=g(null),l=g(null),d=g(null),m=le(),R=oe(),{id:f}=m.query,i=te({token:"Bearer "+Z("token")||"",id:f,select_flag:!1,Form:{img_url:"",img:"",office_id:"",column_id:"",title:"",content:"",release_time:g(""),status:"0",disabled:!0,fileList:[],list:[],column_list:[]},rules:{office_id:[{required:!0,message:"\u79D1\u5BA4\u5FC5\u987B",trigger:["change"]}],column_id:[{required:!0,message:"\u680F\u76EE\u5FC5\u987B",trigger:["change"]}],title:[{required:!0,message:"\u6807\u9898\u5FC5\u987B",trigger:["change"]}],release_time:[{required:!0,message:"\u53D1\u5E03\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],status:[{required:!0,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let t;ae(()=>{t=new X(l.value),t.config.showLinkImg=!1,t.config.showLinkImgAlt=!1,t.config.showLinkImgHref=!1,t.config.uploadImgMaxSize=10*1024*1024,t.config.uploadImgMaxLength=1,t.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],t.config.uploadFileName="file",t.config.uploadImgHeaders={Authorization:i.token},t.config.uploadImgParams={basket:"img"},t.config.uploadImgHooks={customInsert:function(o,u){console.log("result",u),o(u.data.src)}},t.config.uploadImgServer=E,Object.assign(t.config,{onchange(){console.log("change")}}),t.config.uploadVideoServer=E,t.config.uploadVideoMaxSize=1*200*1024*1024,t.config.uploadVideoAccept=["mp4"],t.config.uploadVideoParams={basket:"video"},t.config.uploadVideoName="file",t.config.uploadVideoHeaders={Authorization:i.token},t.config.uploadVideoHooks={customInsert:function(o,u){console.log("customInsert",u),o(u.data.src)}},t.create(),S(),f&&h.get(`/api/back/technicalOfficeColumns/${f}`).then(o=>{i.Form={img_url:o.data.url||"",img:o.data.file_id,office_id:o.data.office_id,column_id:o.data.column_id,title:o.data.title,release_time:o.data.release_time,status:String(o.data.status),fileList:[{url:o.data.url}],disabled:!0},i.select_flag=!0,t&&t.txt.html(o.data.content)})}),ne(()=>{t.destroy(),t=null});const S=()=>{h.get("/api/back/technicalOffices").then(o=>{i.Form.list=o.data})},F=o=>{console.log(o),h.get("/api/back/technicalOfficeColumnSets/list",{params:{office_id:o}}).then(u=>{i.Form.column_list=u.data})},k=()=>{e.value.validate(o=>{if(o){let u=h.post,V={img:i.Form.img,office_id:i.Form.office_id,column_id:i.Form.column_id,title:i.Form.title,content:t.txt.html(),release_time:i.Form.release_time,status:i.Form.status},_="/api/back/technicalOfficeColumns";f&&(V.release_time=i.Form.release_time,u=h.put,_=`/api/back/technicalOfficeColumns/${f}`),u(_,V).then(()=>{f?b.success("\u4FEE\u6539\u6210\u529F"):b.success("\u6DFB\u52A0\u6210\u529F"),R.push({path:"/technicaloffice-column"})})}})},c=o=>{const u=o.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(u))return b.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},U=o=>{b.success("\u4E0A\u4F20\u6210\u529F"),i.Form.img_url=o.data.src||"",i.Form.img=o.data.id||""},v=o=>{b.error("\u4E0A\u4F20\u5931\u8D25")},j=o=>{d.value.clearFiles(),i.Form.img="",i.Form.img_url="",i.Form.fileList=[]};return B(A({},ie(i)),{editor:l,uploadRef:d,Ref:e,submitAdd:k,uploadImgServer:$,handleBeforeUpload:c,handleUrlSuccess:U,handleUrlError:v,handleRemove:j,get_technicaloffice_column_set_list:F})}},de=I("\u680F\u76EE\u7C7B\u578B\u4E3A\u4EC5\u56FE\uFF1A\u5219\u5FC5\u987B\u4F20\u56FE\u7247\uFF1B\u680F\u76EE\u7C7B\u578B\u4E3A\u56FE\u6587\u6216\u89C6\u9891\uFF1A\u5219\u5185\u5BB9\u5FC5\u987B"),ue=["src"],me={class:"el-upload-list__item-actions"},ce={ref:"editor",style:{"z-index":"1"}},fe=I("\u5DF2\u5BA1\u6838"),pe=I("\u5F85\u5BA1\u6838");function _e(e,l,d,m,R,f){const i=r("el-descriptions-item"),t=r("el-descriptions"),S=r("el-divider"),F=r("el-option"),k=r("el-select"),c=r("el-form-item"),U=r("plus"),v=r("el-icon"),j=r("delete"),o=r("el-upload"),u=r("el-input"),V=r("el-date-picker"),_=r("el-radio"),H=r("el-radio-group"),M=r("el-button"),D=r("el-form"),P=r("el-card");return p(),w(P,{style:{"min-height":"100%"}},{default:n(()=>[a(t,{title:"\u63D0\u793A"},{default:n(()=>[a(i,null,{default:n(()=>[de]),_:1})]),_:1}),a(S),a(D,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:n(()=>[a(c,{label:"\u79D1\u5BA4",prop:"office_id"},{default:n(()=>[a(k,{modelValue:e.Form.office_id,"onUpdate:modelValue":l[0]||(l[0]=s=>e.Form.office_id=s),placeholder:"Select","value-key":"item.id",onChange:m.get_technicaloffice_column_set_list,filterable:""},{default:n(()=>[(p(!0),y(z,null,O(e.Form.list,s=>(p(),w(F,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),a(c,{label:"\u680F\u76EE",prop:"column_id"},{default:n(()=>[a(k,{modelValue:e.Form.column_id,"onUpdate:modelValue":l[1]||(l[1]=s=>e.Form.column_id=s),placeholder:"Select",filterable:""},{default:n(()=>[(p(!0),y(z,null,O(e.Form.column_list,s=>(p(),w(F,{key:s.id,label:s.name+s.type_name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(c,{label:"\u56FE\u7247",prop:"img"},{default:n(()=>[a(o,{ref:"uploadRef",action:m.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":m.handleBeforeUpload,"on-success":m.handleUrlSuccess,"on-error":m.handleUrlError,"auto-upload":!0,"file-list":e.Form.fileList},{default:n(()=>[a(v,null,{default:n(()=>[a(U)]),_:1})]),file:n(({file:s})=>[C("div",null,[e.Form.img_url?(p(),y("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.Form.img_url,alt:""},null,8,ue)):N("",!0),C("span",me,[e.Form.disabled?(p(),y("span",{key:0,class:"el-upload-list__item-delete",onClick:l[2]||(l[2]=(...W)=>m.handleRemove&&m.handleRemove(...W))},[a(v,null,{default:n(()=>[a(j)]),_:1})])):N("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),a(c,{label:"\u6807\u9898",prop:"title"},{default:n(()=>[a(u,{modelValue:e.Form.title,"onUpdate:modelValue":l[3]||(l[3]=s=>e.Form.title=s),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u5185\u5BB9",prop:"content"},{default:n(()=>[C("div",ce,null,512)]),_:1}),a(c,{label:"\u53D1\u5E03\u65F6\u95F4",prop:"release_time"},{default:n(()=>[a(V,{modelValue:e.Form.release_time,"onUpdate:modelValue":l[4]||(l[4]=s=>e.Form.release_time=s),type:"datetime","default-value":new Date,placeholder:"\u8BF7\u8F93\u5165\u53D1\u5E03\u65F6\u95F4"},null,8,["modelValue","default-value"])]),_:1}),a(c,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[a(H,{modelValue:e.Form.status,"onUpdate:modelValue":l[5]||(l[5]=s=>e.Form.status=s),disabled:""},{default:n(()=>[a(_,{label:"1"},{default:n(()=>[fe]),_:1}),a(_,{label:"0"},{default:n(()=>[pe]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(c,null,{default:n(()=>[a(M,{type:"primary",onClick:l[6]||(l[6]=s=>m.submitAdd())},{default:n(()=>[I(se(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ke=Y(re,[["render",_e]]);export{ke as default};

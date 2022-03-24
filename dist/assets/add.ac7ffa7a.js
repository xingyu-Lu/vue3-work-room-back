var L=Object.defineProperty,N=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var V=(e,t,l)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,R=(e,t)=>{for(var l in t||(t={}))D.call(t,l)&&V(e,l,t[l]);if(v)for(var l of v(t))I.call(t,l)&&V(e,l,t[l]);return e},U=(e,t)=>N(e,A(t));import"./wangEditor.d6395ab9.js";import{_ as M,a as z,u as G}from"./index.661a29df.js";import{an as O,as as T,am as j,aq as H,u as J,r as K,o as Q,b,t as W,d as a,e as F,n as X,w as r,E as p,j as s,g as q,f as B,h as E,k,i as Y}from"./vendor.11219713.js";const Z={name:"historyPic_add",components:{Plus:O,Delete:T},setup(){const e=j(null),t=j(null),l=H(),n=J(),{id:d}=l.query,i=K({token:"Bearer "+z("token")||"",id:d,historyPicForm:{img_url:"",img:"",title:"",sort:0,status:"0",disabled:!0,fileList:[]},rules:{img:[{required:"true",message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],title:[{required:"true",message:"\u6807\u9898\u5FC5\u987B",trigger:["change"]}],time:[{required:"true",message:"\u4EFB\u804C\u65F6\u95F4\u5FC5\u987B",trigger:["change"]}],sort:[{required:"true",message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});Q(()=>{d&&b.get(`/api/back/historyPics/${d}`).then(o=>{i.historyPicForm={img_url:o.data.url||"",img:o.data.file_id,title:o.data.title,sort:o.data.sort,status:String(o.data.status),fileList:[{url:o.data.url}],disabled:!0}})});const _=()=>{e.value.validate(o=>{if(o){let m=b.post,P={img:i.historyPicForm.img,title:i.historyPicForm.title,sort:i.historyPicForm.sort,status:i.historyPicForm.status},h="/api/back/historyPics";d&&(m=b.put,h=`/api/back/historyPics/${d}`),m(h,P).then(()=>{d?p.success("\u4FEE\u6539\u6210\u529F"):p.success("\u6DFB\u52A0\u6210\u529F"),n.push({path:"/history-pic"})})}})},f=o=>{const m=o.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(m))return p.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},g=o=>{p.success("\u4E0A\u4F20\u6210\u529F"),i.historyPicForm.img_url=o.data.src||"",i.historyPicForm.img=o.data.id||""},y=o=>{p.error("\u4E0A\u4F20\u5931\u8D25")},u=o=>{t.value.clearFiles(),i.historyPicForm.img="",i.historyPicForm.img_url="",i.historyPicForm.fileList=[]};return U(R({},W(i)),{uploadRef:t,historyPicRef:e,submitAdd:_,uploadImgServer:G,handleBeforeUpload:f,handleUrlSuccess:g,handleUrlError:y,handleRemove:u})}},$=["src"],x={class:"el-upload-list__item-actions"},ee=k("\u5DF2\u5BA1\u6838"),te=k("\u5F85\u5BA1\u6838");function oe(e,t,l,n,d,i){const _=a("plus"),f=a("el-icon"),g=a("delete"),y=a("el-upload"),u=a("el-form-item"),o=a("el-input"),m=a("el-radio"),P=a("el-radio-group"),h=a("el-button"),S=a("el-form"),C=a("el-card");return F(),X(C,{style:{"min-height":"100%"}},{default:r(()=>[s(S,{model:e.historyPicForm,rules:e.rules,ref:"historyPicRef","label-width":"100px"},{default:r(()=>[s(u,{label:"\u56FE\u7247",prop:"img"},{default:r(()=>[s(y,{ref:"uploadRef",action:n.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":n.handleBeforeUpload,"on-success":n.handleUrlSuccess,"on-error":n.handleUrlError,"auto-upload":!0,"file-list":e.historyPicForm.fileList},{default:r(()=>[s(f,null,{default:r(()=>[s(_)]),_:1})]),file:r(({file:c})=>[q("div",null,[e.historyPicForm.img_url?(F(),B("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.historyPicForm.img_url,alt:""},null,8,$)):E("",!0),q("span",x,[e.historyPicForm.disabled?(F(),B("span",{key:0,class:"el-upload-list__item-delete",onClick:t[0]||(t[0]=(...w)=>n.handleRemove&&n.handleRemove(...w))},[s(f,null,{default:r(()=>[s(g)]),_:1})])):E("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),s(u,{label:"\u6807\u9898",prop:"title"},{default:r(()=>[s(o,{modelValue:e.historyPicForm.title,"onUpdate:modelValue":t[1]||(t[1]=c=>e.historyPicForm.title=c),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",type:"text"},null,8,["modelValue"])]),_:1}),s(u,{label:"\u6392\u5E8F",prop:"sort"},{default:r(()=>[s(o,{modelValue:e.historyPicForm.sort,"onUpdate:modelValue":t[2]||(t[2]=c=>e.historyPicForm.sort=c),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),s(u,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[s(P,{modelValue:e.historyPicForm.status,"onUpdate:modelValue":t[3]||(t[3]=c=>e.historyPicForm.status=c),disabled:""},{default:r(()=>[s(m,{label:"1"},{default:r(()=>[ee]),_:1}),s(m,{label:"0"},{default:r(()=>[te]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(u,null,{default:r(()=>[s(h,{type:"primary",onClick:t[4]||(t[4]=c=>n.submitAdd())},{default:r(()=>[k(Y(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var ae=M(Z,[["render",oe]]);export{ae as default};

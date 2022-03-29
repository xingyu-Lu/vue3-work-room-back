var N=Object.defineProperty,A=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var U=(e,l,s)=>l in e?N(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,R=(e,l)=>{for(var s in l||(l={}))I.call(l,s)&&U(e,s,l[s]);if(y)for(var s of y(l))M.call(l,s)&&U(e,s,l[s]);return e},j=(e,l)=>A(e,D(l));import"./wangEditor.2981c876.js";import{_ as z,a as G,u as O}from"./index.52ad2cf7.js";import{an as P,as as T,am as q,aq as H,u as J,r as K,o as Q,b as V,t as W,d as n,e as k,n as X,w as r,E as f,j as a,g as B,f as E,h as S,k as v,i as Y}from"./vendor.09a2a638.js";const Z={name:"leader_add",components:{Plus:P,Delete:T},setup(){const e=q(null),l=q(null),s=H(),i=J(),{id:m}=s.query,t=K({token:"Bearer "+G("token")||"",id:m,leaderForm:{img_url:"",img:"",name:"",position:"",professional:"",sort:0,status:"0",disabled:!0,fileList:[]},rules:{img:[{required:"true",message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],name:[{required:"true",message:"\u59D3\u540D\u5FC5\u987B",trigger:["change"]}],position:[{required:"true",message:"\u804C\u52A1\u5FC5\u987B",trigger:["change"]}],professional:[{required:"true",message:"\u804C\u79F0\u5FC5\u987B",trigger:["change"]}],sort:[{required:"true",message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!1,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});Q(()=>{m&&V.get(`/api/back/leaders/${m}`).then(o=>{t.leaderForm={img_url:o.data.url||"",img:o.data.file_id,name:o.data.name,position:o.data.position,professional:o.data.professional,sort:o.data.sort,status:String(o.data.status),fileList:[{url:o.data.url}],disabled:!0}})});const _=()=>{e.value.validate(o=>{if(o){let p=V.post,h={img:t.leaderForm.img,name:t.leaderForm.name,position:t.leaderForm.position,professional:t.leaderForm.professional,sort:t.leaderForm.sort,status:t.leaderForm.status},g="/api/back/leaders";m&&(p=V.put,g=`/api/back/leaders/${m}`),p(g,h).then(()=>{m?f.success("\u4FEE\u6539\u6210\u529F"):f.success("\u6DFB\u52A0\u6210\u529F"),i.push({path:"/leader"})})}})},c=o=>{const p=o.name.split(".")[1]||"";if(!["jpg","jpeg","png"].includes(p))return f.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png \u683C\u5F0F\u7684\u56FE\u7247"),!1},F=o=>{f.success("\u4E0A\u4F20\u6210\u529F"),t.leaderForm.img_url=o.data.src||"",t.leaderForm.img=o.data.id||""},b=o=>{f.error("\u4E0A\u4F20\u5931\u8D25")},u=o=>{l.value.clearFiles(),t.leaderForm.img="",t.leaderForm.img_url="",t.leaderForm.fileList=[]};return j(R({},W(t)),{uploadRef:l,leaderRef:e,submitAdd:_,uploadImgServer:O,handleBeforeUpload:c,handleUrlSuccess:F,handleUrlError:b,handleRemove:u})}},$=["src"],x={class:"el-upload-list__item-actions"},ee=v("\u5DF2\u5BA1\u6838"),le=v("\u5F85\u5BA1\u6838");function oe(e,l,s,i,m,t){const _=n("plus"),c=n("el-icon"),F=n("delete"),b=n("el-upload"),u=n("el-form-item"),o=n("el-input"),p=n("el-radio"),h=n("el-radio-group"),g=n("el-button"),C=n("el-form"),w=n("el-card");return k(),X(w,{style:{"min-height":"100%"}},{default:r(()=>[a(C,{model:e.leaderForm,rules:e.rules,ref:"leaderRef","label-width":"100px"},{default:r(()=>[a(u,{label:"\u56FE\u7247",prop:"img"},{default:r(()=>[a(b,{ref:"uploadRef",action:i.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:e.token},"before-upload":i.handleBeforeUpload,"on-success":i.handleUrlSuccess,"on-error":i.handleUrlError,"auto-upload":!0,"file-list":e.leaderForm.fileList},{default:r(()=>[a(c,null,{default:r(()=>[a(_)]),_:1})]),file:r(({file:d})=>[B("div",null,[e.leaderForm.img_url?(k(),E("img",{key:0,class:"el-upload-list__item-thumbnail",src:e.leaderForm.img_url,alt:""},null,8,$)):S("",!0),B("span",x,[e.leaderForm.disabled?(k(),E("span",{key:0,class:"el-upload-list__item-delete",onClick:l[0]||(l[0]=(...L)=>i.handleRemove&&i.handleRemove(...L))},[a(c,null,{default:r(()=>[a(F)]),_:1})])):S("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),a(u,{label:"\u59D3\u540D",prop:"position"},{default:r(()=>[a(o,{modelValue:e.leaderForm.name,"onUpdate:modelValue":l[1]||(l[1]=d=>e.leaderForm.name=d),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",type:"text"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u804C\u52A1",prop:"position"},{default:r(()=>[a(o,{modelValue:e.leaderForm.position,"onUpdate:modelValue":l[2]||(l[2]=d=>e.leaderForm.position=d),placeholder:"\u8BF7\u8F93\u5165\u804C\u52A1",type:"text"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u804C\u79F0",prop:"professional"},{default:r(()=>[a(o,{modelValue:e.leaderForm.professional,"onUpdate:modelValue":l[3]||(l[3]=d=>e.leaderForm.professional=d),placeholder:"\u8BF7\u8F93\u5165\u804C\u79F0",type:"text"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u6392\u5E8F",prop:"sort"},{default:r(()=>[a(o,{modelValue:e.leaderForm.sort,"onUpdate:modelValue":l[4]||(l[4]=d=>e.leaderForm.sort=d),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),a(u,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[a(h,{modelValue:e.leaderForm.status,"onUpdate:modelValue":l[5]||(l[5]=d=>e.leaderForm.status=d),disabled:""},{default:r(()=>[a(p,{label:"1"},{default:r(()=>[ee]),_:1}),a(p,{label:"0"},{default:r(()=>[le]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(u,null,{default:r(()=>[a(g,{type:"primary",onClick:l[6]||(l[6]=d=>i.submitAdd())},{default:r(()=>[v(Y(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}var de=z(Z,[["render",oe]]);export{de as default};
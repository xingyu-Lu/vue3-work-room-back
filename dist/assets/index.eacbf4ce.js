var E=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))N.call(e,o)&&f(t,o,e[o]);if(C)for(var o of C(e))q.call(e,o)&&f(t,o,e[o]);return t},v=(t,e)=>A(t,B(e));import{_ as M}from"./index.661a29df.js";import{u as O,r as R,o as U,b as P,t as F,an as L,d as p,ao as T,e as s,n as x,w as d,E as G,j as n,g as y,ap as H,f as c,h,k as V}from"./vendor.11219713.js";const I={name:"dynamin_index",setup(){const t=O(),e=R({type:"0",title:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});U(()=>{o()});const o=()=>{e.loading=!0,P.get("/api/back/jobs",{params:{page:e.currentPage,page_size:e.pageSize,title:e.title,type:e.type}}).then(l=>{e.tableData=l.data,e.pageSize=l.pagination.perPage,e.total=l.pagination.total,e.currentPage=l.pagination.currentPage,e.loading=!1})},r=()=>{e.currentPage=1,o()},b=l=>{e.currentPage=l,o()},k=()=>{t.push({path:"/job-add"})},u=l=>{t.push({path:"/job-add",query:{id:l}})},_=l=>{t.push({path:"/job-preview",query:{id:l}})},m=(l,i)=>{P.put("/api/back/jobs/status",{id:l,status:i}).then(()=>{G.success("\u4FEE\u6539\u6210\u529F"),o()})};return v(w({},F(e)),{handleOption:r,changePage:b,handleAdd:k,handleEdit:u,handleStatus:m,handlePreview:_,Plus:L})}},J=V("\u65B0\u589E"),K=V("\u641C\u7D22"),Q={key:0},W={key:1},X={key:0,style:{color:"#67C23A"}},Y={key:1,style:{color:"#E6A23C"}},Z={key:2,style:{color:"#F56C6C"}},$=["onClick"],ee=["onClick"],te=["onClick"],ae=["onClick"],oe=["onClick"];function ne(t,e,o,r,b,k){const u=p("el-button"),_=p("el-option"),m=p("el-select"),l=p("el-input"),i=p("el-table-column"),S=p("el-table"),j=p("el-pagination"),z=p("el-card"),D=T("loading");return s(),x(z,{style:{"min-height":"100%"}},{header:d(()=>[n(u,{type:"primary",icon:r.Plus,onClick:r.handleAdd},{default:d(()=>[J]),_:1},8,["icon","onClick"]),y("div",null,[n(m,{modelValue:t.type,"onUpdate:modelValue":e[0]||(e[0]=a=>t.type=a),placeholder:"Select",filterable:""},{default:d(()=>[n(_,{value:"0",label:"\u62DB\u8058\u4FE1\u606F"}),n(_,{value:"1",label:"\u5E94\u8058\u6D41\u7A0B"})]),_:1},8,["modelValue"]),n(l,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",modelValue:t.title,"onUpdate:modelValue":e[1]||(e[1]=a=>t.title=a),clearable:""},null,8,["modelValue"]),n(u,{type:"primary",onClick:r.handleOption},{default:d(()=>[K]),_:1},8,["onClick"])])]),default:d(()=>[H((s(),x(S,{data:t.tableData,stripe:"",style:{width:"100%"}},{default:d(()=>[n(i,{prop:"id",label:"id"}),n(i,{prop:"title",label:"\u6807\u9898"}),n(i,{prop:"release_time",label:"\u53D1\u5E03\u65F6\u95F4"}),n(i,{prop:"num",label:"\u6D4F\u89C8\u6B21\u6570"}),n(i,{prop:"type",label:"\u7C7B\u578B"},{default:d(a=>[a.row.type==0?(s(),c("span",Q,"\u62DB\u8058\u4FE1\u606F")):h("",!0),a.row.type==1?(s(),c("span",W,"\u5E94\u8058\u6D41\u7A0B")):h("",!0)]),_:1}),n(i,{prop:"status",label:"\u72B6\u6001"},{default:d(a=>[a.row.status==1?(s(),c("span",X,"\u5DF2\u5BA1\u6838")):a.row.status==0?(s(),c("span",Y,"\u5F85\u5BA1\u6838")):(s(),c("span",Z,"\u5BA1\u6838\u4E0D\u8FC7"))]),_:1}),n(i,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),n(i,{label:"\u64CD\u4F5C",width:"200"},{default:d(a=>[y("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:g=>r.handlePreview(a.row.id)},"\u9884\u89C8",8,$),y("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:g=>r.handleEdit(a.row.id)},"\u4FEE\u6539",8,ee),a.row.status==0?(s(),c("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:g=>r.handleStatus(a.row.id,2)},"\u5BA1\u6838\u4E0D\u8FC7",8,te)):h("",!0),a.row.status==1?(s(),c("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:g=>r.handleStatus(a.row.id,0)},"\u64A4\u9500\u5BA1\u6838",8,ae)):a.row.status==0?(s(),c("a",{key:2,style:{cursor:"pointer","margin-right":"10px"},onClick:g=>r.handleStatus(a.row.id,1)},"\u5BA1\u6838",8,oe)):h("",!0)]),_:1})]),_:1},8,["data"])),[[D,t.loading]]),n(j,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:r.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var se=M(I,[["render",ne]]);export{se as default};

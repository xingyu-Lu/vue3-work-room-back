var E=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,b=(t,e)=>{for(var o in e||(e={}))N.call(e,o)&&y(t,o,e[o]);if(k)for(var o of k(e))O.call(e,o)&&y(t,o,e[o]);return t},C=(t,e)=>A(t,B(e));import{_ as j}from"./index.661a29df.js";import{u as M,r as R,o as q,b as w,t as F,an as L,d as c,ao as T,e as r,n as h,w as s,E as U,j as l,g as v,ap as G,f as d,h as x,k as P}from"./vendor.11219713.js";const H={name:"dynamin_index",setup(){const t=M(),e=R({office_name:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});q(()=>{o()});const o=()=>{e.loading=!0,w.get("/api/back/technicalOfficeDoctors",{params:{page:e.currentPage,page_size:e.pageSize,office_name:e.office_name}}).then(a=>{e.tableData=a.data,e.pageSize=a.pagination.perPage,e.total=a.pagination.total,e.currentPage=a.pagination.currentPage,e.loading=!1})},i=()=>{e.currentPage=1,o()},m=a=>{e.currentPage=a,o()},f=()=>{t.push({path:"/technicaloffice-doctor-add"})},p=a=>{t.push({path:"/technicaloffice-doctor-add",query:{id:a}})},u=(a,_)=>{w.put("/api/back/technicalOfficeDoctors/status",{id:a,status:_}).then(()=>{U.success("\u4FEE\u6539\u6210\u529F"),o()})};return C(b({},F(e)),{handleOption:i,changePage:m,handleAdd:f,handleEdit:p,handleStatus:u,Plus:L})}},I=P("\u65B0\u589E"),J=P("\u641C\u7D22"),K={key:0,style:{color:"#67C23A"}},Q={key:1,style:{color:"#E6A23C"}},W={key:2,style:{color:"#F56C6C"}},X=["onClick"],Y=["onClick"],Z=["onClick"],$=["onClick"];function ee(t,e,o,i,m,f){const p=c("el-button"),u=c("el-input"),a=c("el-table-column"),_=c("el-image"),z=c("el-table"),D=c("el-pagination"),S=c("el-card"),V=T("loading");return r(),h(S,{style:{"min-height":"100%"}},{header:s(()=>[l(p,{type:"primary",icon:i.Plus,onClick:i.handleAdd},{default:s(()=>[I]),_:1},8,["icon","onClick"]),v("div",null,[l(u,{style:{width:"200px","margin-top":"20px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u79D1\u5BA4\u540D\u79F0",modelValue:t.office_name,"onUpdate:modelValue":e[0]||(e[0]=n=>t.office_name=n),clearable:""},null,8,["modelValue"]),l(p,{type:"primary",onClick:i.handleOption},{default:s(()=>[J]),_:1},8,["onClick"])])]),default:s(()=>[G((r(),h(z,{data:t.tableData,stripe:"",style:{width:"100%"}},{default:s(()=>[l(a,{prop:"id",label:"id"}),l(a,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),l(a,{prop:"name",label:"\u533B\u751F\u540D\u5B57"}),l(a,{label:"\u56FE\u7247"},{default:s(n=>[(r(),h(_,{key:n.row.id,src:n.row.url,lazy:!0,"initial-index":1},null,8,["src"]))]),_:1}),l(a,{prop:"professional",label:"\u804C\u79F0"}),l(a,{prop:"excel",label:"\u64C5\u957F"}),l(a,{prop:"sort",label:"\u6392\u5E8F"}),l(a,{prop:"status",label:"\u72B6\u6001"},{default:s(n=>[n.row.status==1?(r(),d("span",K,"\u5DF2\u5BA1\u6838")):n.row.status==0?(r(),d("span",Q,"\u5F85\u5BA1\u6838")):(r(),d("span",W,"\u5BA1\u6838\u4E0D\u8FC7"))]),_:1}),l(a,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),l(a,{label:"\u64CD\u4F5C",width:"200"},{default:s(n=>[v("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:g=>i.handleEdit(n.row.id)},"\u4FEE\u6539",8,X),n.row.status==0?(r(),d("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:g=>i.handleStatus(n.row.id,2)},"\u5BA1\u6838\u4E0D\u8FC7",8,Y)):x("",!0),n.row.status==1?(r(),d("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:g=>i.handleStatus(n.row.id,0)},"\u64A4\u9500\u5BA1\u6838",8,Z)):n.row.status==0?(r(),d("a",{key:2,style:{cursor:"pointer","margin-right":"10px"},onClick:g=>i.handleStatus(n.row.id,1)},"\u5BA1\u6838",8,$)):x("",!0)]),_:1})]),_:1},8,["data"])),[[V,t.loading]]),l(D,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:i.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var ne=j(H,[["render",ee]]);export{ne as default};

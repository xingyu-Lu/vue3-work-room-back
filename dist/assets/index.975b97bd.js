var V=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var k=(a,e,n)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,b=(a,e)=>{for(var n in e||(e={}))B.call(e,n)&&k(a,n,e[n]);if(f)for(var n of f(e))N.call(e,n)&&k(a,n,e[n]);return a},y=(a,e)=>D(a,E(e));import{_ as j}from"./index.661a29df.js";import{u as A,r as M,o as O,b as C,t as R,an as $,d as i,ao as q,e as r,n as w,w as d,E as F,g as v,j as l,ap as L,f as c,h as P,k as T}from"./vendor.11219713.js";const U={name:"dynamin_index",setup(){const a=A(),e=M({name:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});O(()=>{n()});const n=()=>{e.loading=!0,C.get("/api/back/staffs",{params:{page:e.currentPage,page_size:e.pageSize,name:e.name}}).then(t=>{e.tableData=t.data,e.pageSize=t.pagination.perPage,e.total=t.pagination.total,e.currentPage=t.pagination.currentPage,e.loading=!1})},s=()=>{e.currentPage=1,n()},h=t=>{e.currentPage=t,n()},m=()=>{a.push({path:"/staff-add"})},p=t=>{a.push({path:"/staff-add",query:{id:t}})},u=(t,g)=>{C.put("/api/back/staffs/status",{id:t,status:g}).then(()=>{F.success("\u4FEE\u6539\u6210\u529F"),n()})};return y(b({},R(e)),{handleOption:s,changePage:h,handleAdd:m,handleEdit:p,handleStatus:u,Plus:$})}},G=T("\u641C\u7D22"),H={key:0,style:{color:"#67C23A"}},I={key:1,style:{color:"#E6A23C"}},J={key:2,style:{color:"#F56C6C"}},K=["onClick"],Q=["onClick"],W=["onClick"],X=["onClick"];function Y(a,e,n,s,h,m){const p=i("el-input"),u=i("el-button"),t=i("el-table-column"),g=i("el-table"),x=i("el-pagination"),S=i("el-card"),z=q("loading");return r(),w(S,{style:{"min-height":"100%"}},{header:d(()=>[v("div",null,[l(p,{style:{width:"200px","margin-top":"20px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u540D\u5B57",modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.name=o),clearable:""},null,8,["modelValue"]),l(u,{type:"primary",onClick:s.handleOption},{default:d(()=>[G]),_:1},8,["onClick"])])]),default:d(()=>[L((r(),w(g,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:d(()=>[l(t,{prop:"id",label:"id"}),l(t,{prop:"name",label:"\u540D\u5B57"}),l(t,{prop:"mobile",label:"\u624B\u673A\u53F7"}),l(t,{prop:"email",label:"\u90AE\u7BB1"}),l(t,{prop:"status",label:"\u72B6\u6001"},{default:d(o=>[o.row.status==1?(r(),c("span",H,"\u5DF2\u5BA1\u6838")):o.row.status==0?(r(),c("span",I,"\u5F85\u5BA1\u6838")):(r(),c("span",J,"\u5BA1\u6838\u4E0D\u8FC7"))]),_:1}),l(t,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),l(t,{label:"\u64CD\u4F5C",width:"200"},{default:d(o=>[v("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:_=>s.handleEdit(o.row.id)},"\u4FEE\u6539",8,K),o.row.status==0?(r(),c("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:_=>s.handleStatus(o.row.id,2)},"\u5BA1\u6838\u4E0D\u8FC7",8,Q)):P("",!0),o.row.status==1?(r(),c("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:_=>s.handleStatus(o.row.id,0)},"\u64A4\u9500\u5BA1\u6838",8,W)):o.row.status==0?(r(),c("a",{key:2,style:{cursor:"pointer","margin-right":"10px"},onClick:_=>s.handleStatus(o.row.id,1)},"\u5BA1\u6838",8,X)):P("",!0)]),_:1})]),_:1},8,["data"])),[[z,a.loading]]),l(x,{background:"",layout:"prev, pager, next",total:a.total,"page-size":a.pageSize,"current-page":a.currentPage,onCurrentChange:s.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var te=j(U,[["render",Y]]);export{te as default};

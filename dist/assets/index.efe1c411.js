var H=Object.defineProperty,U=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var A=(s,d,_)=>d in s?H(s,d,{enumerable:!0,configurable:!0,writable:!0,value:_}):s[d]=_,O=(s,d)=>{for(var _ in d||(d={}))G.call(d,_)&&A(s,_,d[_]);if(P)for(var _ of P(d))W.call(d,_)&&A(s,_,d[_]);return s},R=(s,d)=>U(s,q(d));import{c as J,a as X,b as m,E as $,u as T,r as C,o as K,t as Q,d as f,e as g,f as E,g as n,h as Y,i as y,j as t,w as e,k as a,p as b,l as I,m as Z,n as D,q as ee,s as te,v as oe,x as se,y as ne,z as ae,A as le,B as de,C as ie,D as _e,F as ce,G as ue,H as re,I as pe,J as he,K as fe,L as me,M as ge,N as Ee,O as ve,P as xe,Q as ye,R as be,S as Ie,T as we,U as je,V as ke,W as Le,X as Pe,Y as Ae,Z as Oe,_ as Re,$ as $e,a0 as Te,a1 as Ce,a2 as De,a3 as Se,a4 as ze,a5 as Ve,a6 as Fe,a7 as Me,a8 as Be,a9 as Ne,aa as He,ab as Ue,ac as qe,ad as Ge}from"./vendor.22953ba2.js";const We=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function _(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(i){if(i.ep)return;i.ep=!0;const c=_(i);fetch(i.href,c)}};We();const Je="modulepreload",S={},Xe="./",r=function(d,_){return!_||_.length===0?d():Promise.all(_.map(u=>{if(u=`${Xe}${u}`,u in S)return;S[u]=!0;const i=u.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${c}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Je,i||(o.as="script",o.crossOrigin=""),o.href=u,document.head.appendChild(o),i)return new Promise((p,h)=>{o.addEventListener("load",p),o.addEventListener("error",h)})})).then(()=>d())},z=J({history:X(),routes:[{path:"/",redirect:"/introduce"},{path:"/introduce",name:"introduce",component:()=>r(()=>import("./Introduce.f281eb2e.js"),["assets/Introduce.f281eb2e.js","assets/vendor.22953ba2.js"])},{path:"/admin",name:"admin",component:()=>r(()=>import("./index.ebf01c40.js"),["assets/index.ebf01c40.js","assets/vendor.22953ba2.js"])},{path:"/admin/add",name:"admin_add",component:()=>r(()=>import("./add.6ef794aa.js"),["assets/add.6ef794aa.js","assets/wangEditor.0c7893a0.js","assets/vendor.22953ba2.js"])},{path:"/menu",name:"menu",component:()=>r(()=>import("./index.ddbf3673.js"),["assets/index.ddbf3673.js","assets/vendor.22953ba2.js"])},{path:"/menu/add",name:"menu_add",component:()=>r(()=>import("./add.a4ec1fbb.js"),["assets/add.a4ec1fbb.js","assets/wangEditor.0c7893a0.js","assets/vendor.22953ba2.js"])},{path:"/dashboard",name:"dashboard",component:()=>r(()=>import("./Index.71751b54.js"),["assets/Index.71751b54.js","assets/Index.85fce103.css","assets/vendor.22953ba2.js"])},{path:"/login",name:"login",component:()=>r(()=>import("./Login.972a3e34.js"),["assets/Login.972a3e34.js","assets/Login.4468e530.css","assets/md5.bf24f9d9.js","assets/vendor.22953ba2.js"])},{path:"/add",name:"add",component:()=>r(()=>import("./AddGood.d0eca52c.js"),["assets/AddGood.d0eca52c.js","assets/AddGood.b53a5d62.css","assets/wangEditor.0c7893a0.js","assets/vendor.22953ba2.js"])},{path:"/swiper",name:"swiper",component:()=>r(()=>import("./Swiper.1521386e.js"),["assets/Swiper.1521386e.js","assets/Swiper.14a1a487.css","assets/vendor.22953ba2.js"])},{path:"/hot",name:"hot",component:()=>r(()=>import("./IndexConfig.119a692d.js"),["assets/IndexConfig.119a692d.js","assets/IndexConfig.cfd00455.css","assets/vendor.22953ba2.js"])},{path:"/new",name:"new",component:()=>r(()=>import("./IndexConfig.119a692d.js"),["assets/IndexConfig.119a692d.js","assets/IndexConfig.cfd00455.css","assets/vendor.22953ba2.js"])},{path:"/recommend",name:"recommend",component:()=>r(()=>import("./IndexConfig.119a692d.js"),["assets/IndexConfig.119a692d.js","assets/IndexConfig.cfd00455.css","assets/vendor.22953ba2.js"])},{path:"/category",name:"category",component:()=>r(()=>import("./Category.06688944.js"),["assets/Category.06688944.js","assets/Category.b66d2105.css","assets/vendor.22953ba2.js"]),children:[{path:"/category/level2",name:"level2",component:()=>r(()=>import("./Category.06688944.js"),["assets/Category.06688944.js","assets/Category.b66d2105.css","assets/vendor.22953ba2.js"])},{path:"/category/level3",name:"level3",component:()=>r(()=>import("./Category.06688944.js"),["assets/Category.06688944.js","assets/Category.b66d2105.css","assets/vendor.22953ba2.js"])}]},{path:"/good",name:"good",component:()=>r(()=>import("./Good.e87b8564.js"),["assets/Good.e87b8564.js","assets/Good.6412550a.css","assets/vendor.22953ba2.js"])},{path:"/guest",name:"guest",component:()=>r(()=>import("./Guest.f1de3b66.js"),["assets/Guest.f1de3b66.js","assets/Guest.c4104bac.css","assets/vendor.22953ba2.js"])},{path:"/order",name:"order",component:()=>r(()=>import("./Order.bcf02a15.js"),["assets/Order.bcf02a15.js","assets/Order.4fed449f.css","assets/vendor.22953ba2.js"])},{path:"/order_detail",name:"order_detail",component:()=>r(()=>import("./OrderDetail.52313385.js"),["assets/OrderDetail.52313385.js","assets/OrderDetail.55523c0a.css","assets/vendor.22953ba2.js"])},{path:"/account",name:"account",component:()=>r(()=>import("./Account.a2284383.js"),["assets/Account.a2284383.js","assets/Account.8f24bcfb.css","assets/md5.bf24f9d9.js","assets/vendor.22953ba2.js"])}]});function v(s){const d=window.sessionStorage.getItem(s);try{return JSON.parse(window.sessionStorage.getItem(s))}catch{return d}}function Ke(s,d){window.sessionStorage.setItem(s,JSON.stringify(d))}function Qe(s){window.sessionStorage.removeItem(s)}function is(s=""){const d=/[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;return s.match(d)&&s.match(d).length}const _s="http://backend-api-02.newbee.ltd/manage-api/v1/upload/file",cs="http://backend-api-02.newbee.ltd/manage-api/v1/upload/files",V={login:"\u767B\u5F55",register:"\u6CE8\u518C",introduce:"\u7CFB\u7EDF\u4ECB\u7ECD",admin:"\u7BA1\u7406\u5458\u5217\u8868",admin_add:"\u7BA1\u7406\u5458",menu:"\u83DC\u5355\u5217\u8868",menu_add:"\u83DC\u5355",yyjj:"\u533B\u9662\u7B80\u4ECB",ldtd:"\u9886\u5BFC\u56E2\u961F",yywh:"\u533B\u9662\u6587\u5316",lsyg:"\u5386\u53F2\u6CBF\u9769",zzjg:"\u7EC4\u7EC7\u673A\u6784",yyry:"\u533B\u9662\u8363\u8A89",wlzw:"\u672A\u6765\u5C55\u671B",yyxw:"\u533B\u9662\u65B0\u95FB",spxw:"\u89C6\u9891\u65B0\u95FB",yygg:"\u533B\u9662\u516C\u544A",ksjs:"\u79D1\u5BA4\u4ECB\u7ECD",zjjs:"\u4E13\u5BB6\u4ECB\u7ECD",czxx:"\u51FA\u8BCA\u4FE1\u606F",kyjx:"\u79D1\u7814\u52A8\u6001",mzlc:"\u95E8\u8BCA\u6D41\u7A0B",zylc:"\u4F4F\u9662\u6D41\u7A0B",czxx:"\u51FA\u8BCA\u4FE1\u606F",jcxz:"\u68C0\u67E5\u987B\u77E5",jcxz_detail:"\u68C0\u67E5\u987B\u77E5",jktj:"\u5065\u5EB7\u4F53\u68C0",jktj_detail:"\u5065\u5EB7\u4F53\u68C0",ybzn:"\u533B\u4FDD\u6307\u5357",ybzn_detail:"\u533B\u4FDD\u6307\u5357",azb:"\u827E\u6ECB\u75C5",lyfb:"\u697C\u5B87\u5206\u5E03",lxwm:"\u8054\u7CFB\u6211\u4EEC",hlyd:"\u62A4\u7406\u56ED\u5730",hlyd_detail:"\u62A4\u7406\u56ED\u5730",jkcj:"\u5065\u5EB7\u4FC3\u8FDB",jkcj_detail:"\u5065\u5EB7\u4FC3\u8FDB",dwgl:"\u515A\u52A1\u7BA1\u7406",dwgl_detail:"\u515A\u52A1\u7BA1\u7406",dyjy:"\u515A\u5458\u6559\u80B2",dyjy_detail:"\u515A\u5458\u6559\u80B2",dflz:"\u515A\u98CE\u5EC9\u653F",dflz_detail:"\u515A\u98CE\u5EC9\u653F",ygzj:"\u5458\u5DE5\u4E4B\u5BB6",ygzj_detail:"\u5458\u5DE5\u4E4B\u5BB6",ydyf_detail:"\u533B\u5FB7\u533B\u98CE",qnjyz:"\u9752\u5E74\u52A0\u6CB9\u7AD9",qnjyz_detail:"\u9752\u5E74\u52A0\u6CB9\u7AD9",zpxx:"\u62DB\u8058\u4FE1\u606F",zpxx_detail:"\u62DB\u8058\u4FE1\u606F",yplc:"\u5E94\u8058\u6D41\u7A0B",update_log:"\u66F4\u65B0\u8BB0\u5F55",api_test:"api \u6D4B\u8BD5",good:"\u5546\u54C1\u5217\u8868",add_good:"\u6DFB\u52A0\u5546\u54C1",dashboard:"\u5927\u76D8\u6570\u636E",add:"\u6DFB\u52A0\u5546\u54C1",swiper:"\u8F6E\u64AD\u56FE\u914D\u7F6E",hot:"\u70ED\u9500\u5546\u54C1\u914D\u7F6E",new:"\u65B0\u54C1\u4E0A\u7EBF\u914D\u7F6E",recommend:"\u4E3A\u4F60\u63A8\u8350\u914D\u7F6E",category:"\u5206\u7C7B\u7BA1\u7406",level2:"\u5206\u7C7B\u4E8C\u7EA7\u7BA1\u7406",level3:"\u5206\u7C7B\u4E09\u7EA7\u7BA1\u7406",guest:"\u4F1A\u5458\u7BA1\u7406",order:"\u8BA2\u5355\u7BA1\u7406",order_detail:"\u8BA2\u5355\u8BE6\u60C5",account:"\u4FEE\u6539\u8D26\u6237"};var Ye={development:{baseUrl:"/apis"},production:{baseUrl:"http://120.26.124.151:8001"}};m.defaults.baseURL=Ye.production.baseUrl;m.defaults.withCredentials=!1;m.defaults.headers["X-Requested-With"]="XMLHttpRequest";m.defaults.headers.Authorization="Bearer "+v("token")||"";m.defaults.headers.post["Content-Type"]="application/json";m.interceptors.response.use(s=>typeof s.data!="object"?($.error("\u670D\u52A1\u7AEF\u5F02\u5E38\uFF01"),Promise.reject(s)):s.data.status!=200?(console.log(s.response),Promise.reject(s)):s.data,function(s){return console.log(s.response),$.error(s.response.data.error.message),s.response.data.status==401&&z.push({path:"/login"}),Promise.reject(s)});var w=(s,d)=>{const _=s.__vccOpts||s;for(const[u,i]of d)_[u]=i;return _};const Ze={name:"Header",setup(){const s=T(),d=C({name:"dashboard",userInfo:null,hasBack:!1});K(()=>{const c=window.location.hash.split("/")[1]||"";if(!["login"].includes(c)){const o=v("userinfo");o?d.userInfo=o:_()}});const _=async()=>{const c=await m.get("/api/back/admins/info");Ke("userinfo",c),d.userInfo=c},u=()=>{m.delete("/logout").then(()=>{Qe("token"),window.location.reload()})},i=()=>{s.back()};return s.afterEach(c=>{const{id:o}=c.query;d.name=V[c.name],o&&c.name=="add"&&(d.name="\u7F16\u8F91\u5546\u54C1"),d.hasBack=["level2","level3","order_detail"].includes(c.name)}),R(O({},Q(d)),{logout:u,back:i})}},j=s=>(b("data-v-152c6c7e"),s=s(),I(),s),et={class:"header"},tt={class:"left"},ot={style:{"font-size":"20px"}},st={class:"right"},nt={class:"author"},at=j(()=>n("i",{class:"icon el-icon-s-custom"},null,-1)),lt=j(()=>n("i",{class:"el-icon-caret-bottom"},null,-1)),dt={class:"nickname"},it=j(()=>n("p",null,"welcome",-1)),_t=a("\u9000\u51FA");function ct(s,d,_,u,i,c){const o=f("el-tag"),p=f("el-popover");return g(),E("div",et,[n("div",tt,[s.hasBack?(g(),E("i",{key:0,class:"el-icon-back",onClick:d[0]||(d[0]=(...h)=>u.back&&u.back(...h))})):Y("",!0),n("span",ot,y(s.name),1)]),n("div",st,[t(p,{placement:"bottom",width:320,trigger:"click","popper-class":"popper-user-box"},{reference:e(()=>[n("div",nt,[at,a(" "+y(s.userInfo&&s.userInfo.name||"")+" ",1),lt])]),default:e(()=>[n("div",dt,[n("p",null,"\u767B\u5F55\u540D\uFF1A"+y(s.userInfo&&s.userInfo.name||""),1),it,t(o,{size:"small",effect:"dark",class:"logout",onClick:u.logout},{default:e(()=>[_t]),_:1},8,["onClick"])])]),_:1})])])}var ut=w(Ze,[["render",ct],["__scopeId","data-v-152c6c7e"]]);const rt={name:"Footer"},pt=s=>(b("data-v-d9ef608c"),s=s(),I(),s),ht={class:"footer"},ft=pt(()=>n("div",{class:"left"},"\u7248\u6743\u6240\u6709\uFF1A@\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662",-1)),mt={class:"right"},gt=a("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662\u5B98\u7F51\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF");function Et(s,d,_,u,i,c){const o=f("el-button");return g(),E("div",ht,[ft,n("div",mt,[t(o,{type:"text"},{default:e(()=>[gt]),_:1})])])}var vt=w(rt,[["render",Et],["__scopeId","data-v-d9ef608c"]]);const xt={name:"App",components:{Header:ut,Footer:vt},setup(){const s=["/login"],d=T(),_=C({defaultOpen:["1"],showMenu:!0,currentPath:"/dashboard",count:{number:1}});window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",()=>{v("token")||(_.showMenu=!1)},!1));const u=d.beforeEach((i,c,o)=>{i.path=="/login"||v("token")?o():o({path:"/login"}),_.showMenu=!s.includes(i.path),_.currentPath=i.path,document.title=V[i.name]});return Z(()=>{u()}),{state:_}}},l=s=>(b("data-v-0cc8269f"),s=s(),I(),s),yt={class:"layout"},bt=l(()=>n("div",{class:"head"},[n("div",null,[n("span",null,"\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662")])],-1)),It=l(()=>n("div",{class:"line"},null,-1)),wt=l(()=>n("span",null,"Dashboard",-1)),jt=l(()=>n("i",{class:"el-icon-data-line"},null,-1)),kt=a("\u7CFB\u7EDF\u4ECB\u7ECD"),Lt=l(()=>n("span",null,"\u533B\u9662\u6982\u51B5",-1)),Pt=l(()=>n("i",{class:"el-icon-picture"},null,-1)),At=a("\u533B\u9662\u7B80\u4ECB"),Ot=l(()=>n("i",{class:"el-icon-star-on"},null,-1)),Rt=a("\u9886\u5BFC\u56E2\u961F"),$t=l(()=>n("i",{class:"el-icon-sell"},null,-1)),Tt=a("\u533B\u9662\u6587\u5316"),Ct=l(()=>n("i",{class:"el-icon-thumb"},null,-1)),Dt=a("\u5386\u53F2\u6CBF\u9769"),St=l(()=>n("i",{class:"el-icon-thumb"},null,-1)),zt=a("\u7EC4\u7EC7\u673A\u6784"),Vt=l(()=>n("i",{class:"el-icon-thumb"},null,-1)),Ft=a("\u533B\u9662\u8363\u8A89"),Mt=l(()=>n("i",{class:"el-icon-thumb"},null,-1)),Bt=a("\u672A\u6765\u5C55\u671B"),Nt=l(()=>n("span",null,"\u65B0\u95FB\u52A8\u6001",-1)),Ht=a("\u533B\u9662\u65B0\u95FB"),Ut=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),qt=a("\u533B\u9662\u516C\u544A"),Gt=l(()=>n("span",null,"\u79D1\u5BA4\u4ECB\u7ECD",-1)),Wt=a("\u79D1\u5BA4\u4ECB\u7ECD"),Jt=l(()=>n("span",null,"\u4E13\u5BB6\u4ECB\u7ECD",-1)),Xt=a("\u4E13\u5BB6\u4ECB\u7ECD"),Kt=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Qt=a("\u51FA\u8BCA\u4FE1\u606F"),Yt=l(()=>n("span",null,"\u79D1\u7814\u6559\u5B66",-1)),Zt=a("\u79D1\u7814\u52A8\u6001"),eo=l(()=>n("span",null,"\u60A3\u8005\u670D\u52A1",-1)),to=a("\u95E8\u8BCA\u6D41\u7A0B"),oo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),so=a("\u4F4F\u9662\u6D41\u7A0B"),no=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),ao=a("\u51FA\u8BCA\u4FE1\u606F"),lo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),io=a("\u68C0\u67E5\u987B\u77E5"),_o=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),co=a("\u5065\u5EB7\u4F53\u68C0"),uo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),ro=a("\u533B\u4FDD\u6307\u5357"),po=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),ho=a("\u827E\u6ECB\u75C5"),fo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),mo=a("\u697C\u5B87\u5206\u5E03"),go=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Eo=a("\u8054\u7CFB\u6211\u4EEC"),vo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),xo=a("\u62A4\u7406\u56ED\u5730"),yo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),bo=a("\u5065\u5EB7\u4FC3\u8FDB"),Io=l(()=>n("span",null,"\u515A\u5EFA\u4E4B\u7A97",-1)),wo=a("\u515A\u52A1\u7BA1\u7406"),jo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),ko=a("\u515A\u5458\u6559\u80B2"),Lo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Po=a("\u515A\u98CE\u5EC9\u653F"),Ao=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Oo=a("\u5458\u5DE5\u4E4B\u5BB6"),Ro=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),$o=a("\u533B\u5FB7\u533B\u98CE"),To=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Co=a("\u9752\u5E74\u52A0\u6CB9\u7AD9"),Do=l(()=>n("span",null,"\u515A\u5EFA\u4E4B\u7A97",-1)),So=a("\u515A\u52A1\u7BA1\u7406"),zo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Vo=a("\u515A\u5458\u6559\u80B2"),Fo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Mo=a("\u515A\u98CE\u5EC9\u653F"),Bo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),No=a("\u5458\u5DE5\u4E4B\u5BB6"),Ho=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Uo=a("\u533B\u5FB7\u533B\u98CE"),qo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Go=a("\u9752\u5E74\u52A0\u6CB9\u7AD9"),Wo=l(()=>n("span",null,"\u4EBA\u624D\u62DB\u8058",-1)),Jo=a("\u62DB\u8058\u4FE1\u606F"),Xo=l(()=>n("i",{class:"el-icon-s-goods"},null,-1)),Ko=a("\u5E94\u8058\u6D41\u7A0B"),Qo=l(()=>n("span",null,"\u5458\u5DE5\u4E4B\u58F0",-1)),Yo=a("\u5458\u5DE5\u4E4B\u58F0"),Zo=l(()=>n("span",null,"\u7CFB\u7EDF\u7BA1\u7406",-1)),es=a("\u7BA1\u7406\u5458\u7BA1\u7406"),ts=a("\u83DC\u5355\u7BA1\u7406"),os=a("\u9996\u9875\u8F6E\u64AD\u56FE"),ss={class:"main"};function ns(s,d,_,u,i,c){const o=f("el-menu-item"),p=f("el-menu-item-group"),h=f("el-sub-menu"),F=f("el-menu"),M=f("el-aside"),B=f("Header"),L=f("router-view"),N=f("Footer"),x=f("el-container");return g(),E("div",yt,[u.state.showMenu?(g(),D(x,{key:0,class:"container"},{default:e(()=>[t(M,{class:"aside"},{default:e(()=>[bt,It,t(F,{"default-openeds":u.state.defaultOpen,"background-color":"#222832","text-color":"#fff",router:!0,"default-active":u.state.currentPath},{default:e(()=>[t(h,{index:"1"},{title:e(()=>[wt]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/introduce"},{default:e(()=>[jt,kt]),_:1})]),_:1})]),_:1}),t(h,{index:"2"},{title:e(()=>[Lt]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[Pt,At]),_:1}),t(o,{index:"/"},{default:e(()=>[Ot,Rt]),_:1}),t(o,{index:"/"},{default:e(()=>[$t,Tt]),_:1}),t(o,{index:"/"},{default:e(()=>[Ct,Dt]),_:1}),t(o,{index:"/"},{default:e(()=>[St,zt]),_:1}),t(o,{index:"/"},{default:e(()=>[Vt,Ft]),_:1}),t(o,{index:"/"},{default:e(()=>[Mt,Bt]),_:1})]),_:1})]),_:1}),t(h,{index:"3"},{title:e(()=>[Nt]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[Ht]),_:1}),t(o,{index:"/"},{default:e(()=>[Ut,qt]),_:1})]),_:1})]),_:1}),t(h,{index:"4"},{title:e(()=>[Gt]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[Wt]),_:1})]),_:1})]),_:1}),t(h,{index:"5"},{title:e(()=>[Jt]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[Xt]),_:1}),t(o,{index:"/"},{default:e(()=>[Kt,Qt]),_:1})]),_:1})]),_:1}),t(h,{index:"6"},{title:e(()=>[Yt]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[Zt]),_:1})]),_:1})]),_:1}),t(h,{index:"7"},{title:e(()=>[eo]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[to]),_:1}),t(o,{index:"/"},{default:e(()=>[oo,so]),_:1}),t(o,{index:"/"},{default:e(()=>[no,ao]),_:1}),t(o,{index:"/"},{default:e(()=>[lo,io]),_:1}),t(o,{index:"/"},{default:e(()=>[_o,co]),_:1}),t(o,{index:"/"},{default:e(()=>[uo,ro]),_:1}),t(o,{index:"/"},{default:e(()=>[po,ho]),_:1}),t(o,{index:"/"},{default:e(()=>[fo,mo]),_:1}),t(o,{index:"/"},{default:e(()=>[go,Eo]),_:1}),t(o,{index:"/"},{default:e(()=>[vo,xo]),_:1}),t(o,{index:"/"},{default:e(()=>[yo,bo]),_:1})]),_:1})]),_:1}),t(h,{index:"8"},{title:e(()=>[Io]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[wo]),_:1}),t(o,{index:"/"},{default:e(()=>[jo,ko]),_:1}),t(o,{index:"/"},{default:e(()=>[Lo,Po]),_:1}),t(o,{index:"/"},{default:e(()=>[Ao,Oo]),_:1}),t(o,{index:"/"},{default:e(()=>[Ro,$o]),_:1}),t(o,{index:"/"},{default:e(()=>[To,Co]),_:1})]),_:1})]),_:1}),t(h,{index:"9"},{title:e(()=>[Do]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[So]),_:1}),t(o,{index:"/"},{default:e(()=>[zo,Vo]),_:1}),t(o,{index:"/"},{default:e(()=>[Fo,Mo]),_:1}),t(o,{index:"/"},{default:e(()=>[Bo,No]),_:1}),t(o,{index:"/"},{default:e(()=>[Ho,Uo]),_:1}),t(o,{index:"/"},{default:e(()=>[qo,Go]),_:1})]),_:1})]),_:1}),t(h,{index:"10"},{title:e(()=>[Wo]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[Jo]),_:1}),t(o,{index:"/"},{default:e(()=>[Xo,Ko]),_:1})]),_:1})]),_:1}),t(h,{index:"11"},{title:e(()=>[Qo]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[Yo]),_:1})]),_:1})]),_:1}),t(h,{index:"12"},{title:e(()=>[Zo]),default:e(()=>[t(p,null,{default:e(()=>[t(o,{index:"/admin"},{default:e(()=>[es]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(o,{index:"/menu"},{default:e(()=>[ts]),_:1})]),_:1}),t(p,null,{default:e(()=>[t(o,{index:"/"},{default:e(()=>[os]),_:1})]),_:1})]),_:1})]),_:1},8,["default-openeds","default-active"])]),_:1}),t(x,{class:"content"},{default:e(()=>[t(B),n("div",ss,[t(L)]),t(N)]),_:1})]),_:1})):(g(),D(x,{key:1,class:"container"},{default:e(()=>[t(L)]),_:1}))])}var as=w(xt,[["render",ns],["__scopeId","data-v-0cc8269f"]]);const k=ee(as);k.use(z);k.use(te).use(oe).use(se).use(ne).use(ae).use(le).use(de).use(ie).use(_e).use(ce).use(ue).use(re).use(pe).use(he).use(fe).use(me).use(ge).use(Ee).use(ve).use(xe).use(ye).use(be).use(Ie).use(we).use(je).use(ke).use(Le).use(Pe).use(Ae).use(Oe).use(Re).use($e).use(Te).use(Ce).use(De).use(Se).use(ze).use(Ve).use(Fe).use(Me).use(Be).use(Ne).use(He).use(Ue).use(qe).use(Ge);k.mount("#app");export{w as _,Ke as a,cs as b,is as h,v as s,_s as u};

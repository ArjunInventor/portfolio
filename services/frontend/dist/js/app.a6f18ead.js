(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),o=a.n(n);o.a},"3e0a":function(t,e,a){"use strict";var n=a("b5d4"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},r=[],i=a("2877"),s={},l=Object(i["a"])(s,o,r,!1,null,null,null),c=l.exports,p=a("f309");n["a"].use(p["a"]);var u=new p["a"]({}),d=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",[a("v-app-bar",{attrs:{fixed:"",color:"white","elevate-on-scroll":""}},[a("v-toolbar-title",[t._v(t._s(t.apps[t.app].text))]),a("v-spacer"),a("v-btn",{attrs:{color:"black",tile:"",text:"",href:"https://github.com/ArjunInventor/portfolio/",target:"_blank"}},[t._v("Source")])],1)],1),a("div",{staticStyle:{height:"64px"}}),a("v-container",{staticStyle:{"max-width":"1280px"}},[a("v-row",{staticClass:"d-flex align-content-start flex-wrap flex-column flex-md-row"},[a("v-col",{staticClass:"ma-0",attrs:{cols:12,md:"3"}},[a("v-row",[a("v-col",{attrs:{cols:5,md:12,sm:"3"}},[a("v-card",{attrs:{outlined:"",ripple:""}},[a("v-img",{staticStyle:{"border-radius":"4px"},attrs:{src:t.img_src,"lazy-src":t.lazy_img_src}})],1)],1),a("v-col",{attrs:{cols:7,md:12,sm:"5"}},[a("h2",{staticClass:"headline mt-4"},[t._v(t._s(t.name))]),a("span",{staticClass:"text--secondary"},[t._v(t._s(t.bio))]),a("br"),a("a",{staticClass:"deep-purple--text text--accent-4 caption",staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"mailto:"+t.email}},[t._v(t._s(t.email))])])],1),t.loading?t._e():a("v-card",{staticClass:"mx-auto mt-4 hidden-sm-and-down",attrs:{"max-width":"300",outlined:""}},[a("v-list",{attrs:{dense:""}},[a("v-list-item-group",{attrs:{color:"deep-purple accent-4"},model:{value:t.app,callback:function(e){t.app=e},expression:"app"}},t._l(t.apps,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1),a("v-col",{attrs:{cols:12,md:"9"}},["Profile"==t.apps[t.app].text&&t.pages?a("Profile",{attrs:{pages:t.pages}}):t._e(),"Logs"==t.apps[t.app].text?a("Logs"):t._e(),"Blog"==t.apps[t.app].text?a("Blog"):t._e()],1)],1),a("div",{staticClass:"hidden-md-and-up",staticStyle:{height:"56px"}}),a("v-overlay",{attrs:{value:t.loading}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1),a("v-bottom-navigation",{staticClass:"hidden-md-and-up",staticStyle:{position:"fixed",bottom:"0px"},attrs:{color:"deep-purple accent-4",horizontal:""},model:{value:t.app,callback:function(e){t.app=e},expression:"app"}},t._l(t.apps,(function(e,n){return a("v-btn",{key:n},[a("span",[t._v(t._s(e["text"]))]),a("v-icon",[t._v(t._s(e["icon"]))])],1)})),1)],1)},f=[],g=(a("4160"),a("b0c0"),a("d3b7"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hidden-md-and-up mt-0",staticStyle:{overflow:"auto","white-space":"nowrap","margin-left":"-13px",width:"100vw","box-shadow":"-2px 7px 14px -10px rgba(0, 0, 0, 0.2)"}},t._l(t.pages,(function(e,n){return a("v-btn",{key:e.index,staticClass:"ma-0",class:{"v-btn--active":t.current_page==n},attrs:{color:"deep-purple accent-4","v-model":t.current_page,tile:"",text:"",large:""},on:{click:function(e){return t.profile_page_change(n)}}},[t._v(" "+t._s(e.title)+" ")])})),1),a("div",{staticClass:"hidden-sm-and-down",staticStyle:{overflow:"auto","white-space":"nowrap"}},t._l(t.pages,(function(e,n){return a("v-btn",{key:e.index,staticClass:"ma-0",class:{"v-btn--active":t.current_page==n},attrs:{color:"deep-purple accent-4","v-model":t.current_page,tile:"",text:"",large:""},on:{click:function(e){return t.profile_page_change(n)}}},[t._v(" "+t._s(e.title)+" ")])})),1),t.pages[t.current_page]?a("DynamicRender",{staticClass:"pa-2",attrs:{page:t.pages[t.current_page]}}):t._e()],1)}),h=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("v-progress-linear",{attrs:{indeterminate:"",color:"deep-purple accent-4"}}):t._e(),t._l(t.contents,(function(e){return a("div",{key:e.id},[a("div",[a("h3",{staticClass:"mt-4 title"},[t._v(t._s(e.title))]),a("v-card",{staticClass:"pa-4 mt-2 mb-8",attrs:{outlined:""}},["p"==e.type?a("p",{domProps:{innerHTML:t._s(e.data.text)}}):t._e(),"list"==e.type?a("div",t._l(e.data.items,(function(e,n){return a("div",{key:n},[a("h4",{staticClass:"subtitle"},[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.subtitle))]),a("v-list-item-subtitle",[t._v(t._s(e.description))])],1)})),0):t._e()])],1)])}))],2)},_=[],b=(a("99af"),{name:"DynamicRender",loading:!0,props:["page"],data:function(){return{contents:[]}},methods:{update_page:function(t){var e=this;this.loading=!0,fetch("".concat(this.$host,"/api/profile/page").concat(t)).then((function(t){return t.json()})).then((function(t){e.contents=t.content,e.loading=!1}))}},watch:{page:{immediate:!0,handler:function(t){this.contents=[],this.update_page("/"==t.rel_path?"/root":t.rel_path)}}}}),x=b,y=a("6544"),w=a.n(y),C=a("b0af"),j=a("5d23"),V=a("8e36"),S=Object(i["a"])(x,v,_,!1,null,null,null),P=S.exports;w()(S,{VCard:C["a"],VListItemSubtitle:j["b"],VProgressLinear:V["a"]});var $={name:"Profile",props:["pages"],data:function(){return{current_page:0,page_map:{}}},components:{DynamicRender:P},watch:{pages:{immediate:!0,handler:function(t){var e=this;this.$route.params.page?t&&t.forEach((function(t,a){t.rel_path=="/"+e.$route.params.page&&(e.current_page=a)})):this.current_page=0}}},methods:{profile_page_change:function(t){this.current_page=t,this.$router.push({path:"/profile"+this.pages[this.current_page].rel_path})}}},O=$,k=a("8336"),L=Object(i["a"])(O,g,h,!1,null,null,null),A=L.exports;w()(L,{VBtn:k["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("v-progress-linear",{attrs:{indeterminate:"",color:"deep-purple accent-4"}}):t._e(),t._l(t.posts,(function(e){return a("v-card",{key:e.title,staticClass:"post mt-5",attrs:{outlined:""}},[a("h3",{staticClass:"title mb-3"},[t._v(t._s(e.title))]),a("div",{domProps:{innerHTML:t._s(e.content)}})])}))],2)},B=[],I=(a("ac1f"),a("5319"),a("2ca0"),{name:"App",data:function(){return{posts:[],loading:!0}},mounted:function(){var t=this;fetch("https://api.allorigins.win/get?url=https://medium.com/feed/@Arjuninventor").then((function(t){return t.json()})).then((function(t){return(new window.DOMParser).parseFromString(t.contents,"text/xml")})).then((function(e){t.posts=[];var a=e.getElementsByTagName("channel")[0].children;a.forEach((function(e){if("item"==e.nodeName){var a={};e.children.forEach((function(t){"title"==t.nodeName&&(a["title"]=t.textContent),"content:encoded"==t.nodeName&&(a["content"]=t.textContent)})),a["content"].startsWith("<h3>"+a["title"]+"</h3>")&&(a["content"]=a["content"].replace("<h3>"+a["title"]+"</h3>","")),t.posts.push(a)}})),t.loading=!1}))}}),T=I,z=(a("3e0a"),Object(i["a"])(T,E,B,!1,null,"1d6a39fd",null)),M=z.exports;w()(z,{VCard:C["a"],VProgressLinear:V["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-select",{attrs:{items:t.logs,"item-text":"name",label:"Select log",color:"deep-purple accent-4",loading:t.loading,outlined:""},model:{value:t.selected_log,callback:function(e){t.selected_log=e},expression:"selected_log"}}),null!=t.data?a("div",t._l(t.data,(function(e){return a("v-card",{key:e.timestamp,staticClass:"pa-4 pb-1 mb-2",attrs:{outlined:""}},[a("p",[t._v(t._s(e.data))]),a("p",{staticClass:"overline text-right",attrs:{width:"100%"}},[t._v(t._s(e.timestamp))])])})),1):t._e()],1)},D=[],R={name:"Logs",data:function(){return{logs:[],data:null,selected_log:null,loading:!0}},mounted:function(){var t=this;fetch("".concat(this.$host,"/api/logs")).then((function(t){return t.json()})).then((function(e){t.loading=!1,t.logs=e.logs,t.$route.params.log?t.selected_log=t.$route.params.log:t.selected_log=t.logs[0]}))},watch:{selected_log:{immediate:!1,handler:function(t){var e=this;console.log("asd"),t&&t!=this.$route.params.log?this.$router.push({path:"/logs/"+t}):t&&fetch("/api/logs/log/".concat(t)).then((function(t){return t.json()})).then((function(t){console.log(t.logs),e.data=t.logs}))}}}},H=R,J=a("b974"),F=Object(i["a"])(H,N,D,!1,null,null,null),G=F.exports;w()(F,{VCard:C["a"],VSelect:J["a"]});var W={name:"App",components:{Profile:A,Logs:G,Blog:M},data:function(){return{loading:!0,img_src:"",lazy_img_src:"",name:"",bio:"",email:"",pages:[],app:0,apps:[{icon:"mdi-account",text:"Profile",rel_path:"/profile"},{icon:"mdi-post-outline",text:"Blog",rel_path:"/blog"},{icon:"mdi-format-list-bulleted-triangle",text:"Logs",rel_path:"/logs"}]}},mounted:function(){var t=this;fetch("".concat(this.$host,"/api/profile")).then((function(t){return t.json()})).then((function(e){t.loading=!1,t.name=e.data.name,t.bio=e.data.bio,t.img_src=e.data.img_src,t.lazy_img_src=e.data.lazy_img_src,t.email=e.data.email,t.pages=e.data.pages})),this.apps.forEach((function(e,a){e.rel_path=="/"+t.$route.name&&(t.app=a)}))},methods:{app_change:function(t){this.$router.push({path:this.apps[t].rel_path+"/"})}},watch:{$route:function(t){document.title=t.meta.title||"Arjun S"},app:function(t){this.app_change(t)}}},q=W,K=(a("034f"),a("7496")),Q=a("40dc"),U=a("b81c"),X=a("62ad"),Y=a("a523"),Z=a("132d"),tt=a("adda"),et=a("8860"),at=a("da13"),nt=a("1baa"),ot=a("34c3"),rt=a("a797"),it=a("490a"),st=a("0fd9"),lt=a("2fa4"),ct=a("2a7f"),pt=Object(i["a"])(q,m,f,!1,null,null,null),ut=pt.exports;w()(pt,{VApp:K["a"],VAppBar:Q["a"],VBottomNavigation:U["a"],VBtn:k["a"],VCard:C["a"],VCol:X["a"],VContainer:Y["a"],VIcon:Z["a"],VImg:tt["a"],VList:et["a"],VListItem:at["a"],VListItemContent:j["a"],VListItemGroup:nt["a"],VListItemIcon:ot["a"],VListItemTitle:j["c"],VOverlay:rt["a"],VProgressCircular:it["a"],VRow:st["a"],VSpacer:lt["a"],VToolbarTitle:ct["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Admin ")])},mt=[],ft={name:"Admin"},gt=ft,ht=Object(i["a"])(gt,dt,mt,!1,null,null,null),vt=ht.exports;n["a"].use(d["a"]);var _t=new d["a"]({mode:"history",routes:[{path:"/profile",name:"profile",component:ut,meta:{title:"Arjun S - Profile"}},{path:"/profile/:page",name:"profile",component:ut,meta:{title:"Arjun S - Profile"}},{path:"/logs",name:"logs",component:ut,meta:{title:"Arjun S - Logs"}},{path:"/logs/:log",name:"logs",component:ut,meta:{title:"Arjun S - Logs"}},{path:"/blog",name:"blog",component:ut,meta:{title:"Arjun S - Blog"}},{path:"/admin",name:"admin",component:vt,meta:{title:"Arjun S - Admin"}},{path:"/*",redirect:"/profile/"}]});n["a"].config.productionTip=!1,n["a"].prototype.$host="",new n["a"]({vuetify:u,router:_t,render:function(t){return t(c)}}).$mount("#app")},"8a23":function(t,e,a){},b5d4:function(t,e,a){}});
//# sourceMappingURL=app.a6f18ead.js.map
(function(){"use strict";var t={8282:function(t,e,n){var i=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("Banner")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")]),n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"guanyu"}}},[t._v("About")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])])},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[t._m(0),n("button",{on:{click:t.back}},[t._v("后退")]),n("button",{on:{click:t.forward}},[t._v("前进")]),n("button",{on:{click:t.go}},[t._v("测试go")])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")])])}],s={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},go(){this.$router.go(3)}}},u=s,c=n(1001),v=(0,c.Z)(u,l,a,!1,null,null,null),f=v.exports,d={name:"App",components:{Banner:f}},p=d,m=(0,c.Z)(p,r,o,!1,null,null,null),h=m.exports,_=n(2809),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("keep-alive",{attrs:{include:["News"]}},[n("router-view")],1)],1)])},w=[],b={name:"Home"},y=b,k=(0,c.Z)(y,g,w,!1,null,null,null),x=k.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("我是About的内容")])},$=[],Z={name:"About",beforeRouteEnter(t,e,n){t.meta.isAuth?"llf"===localStorage.getItem("school")?n():alert("school错误"):n()},beforeRouteLeave(t,e,n){n()}},O=Z,E=(0,c.Z)(O,C,$,!1,null,null,null),q=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._l(t.news,(function(e){return n("li",{key:e.id},[t._v(" "+t._s(e.msg)+" "),n("input",{attrs:{type:"text"}})])}))],2)])},j=[],S={name:"News",data(){return{news:[{id:"001",msg:"新闻001"},{id:"002",msg:"新闻002"},{id:"003",msg:"新闻003"},{id:"004",msg:"新闻004"}],opacity:1}},activated(){console.log("激活"),this.timer=setInterval((()=>{this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){clearInterval(this.timer),console.log("失活")}},B=S,H=(0,c.Z)(B,A,j,!1,null,null,null),I=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.msgList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{replace:"",to:{name:"xiangqing",query:{id:e.id,title:e.title}}}},[t._v(t._s(e.title))]),n("button",{on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])],1)})),0),n("hr"),n("router-view")],1)},M=[],N={name:"Message",data(){return{msgList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"},{id:"004",title:"消息004"}]}},methods:{pushShow(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}},R=N,T=(0,c.Z)(R,L,M,!1,null,null,null),D=T.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",[t._v("消息编号："+t._s(t.id))]),n("li",[t._v("消息标题："+t._s(t.title))])])])},V=[],z={name:"Detail",props:["id","title"],computed:{},mounted(){},data(){return{}}},F=z,G=(0,c.Z)(F,P,V,!1,null,null,null),J=G.exports;i.Z.use(_.Z);const K=new _.Z({mode:"history",routes:[{name:"guanyu",path:"/about",component:q,meta:{title:"关于",isAuth:!0}},{name:"zhuye",path:"/home",component:x,meta:{title:"主页"},children:[{name:"news",path:"news",component:I,meta:{title:"新闻",isAuth:!0}},{path:"/home/message",component:D,meta:{title:"消息",isAuth:!0},children:[{name:"xiangqing",path:"detail/:id/:title",component:J,props(t){return{id:t.query.id,title:t.query.title}}}]}]}]});var Q=K;i.Z.config.productionTip=!1,new i.Z({render:t=>t(h),router:Q}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],o=t[c][2];for(var a=!0,s=0;s<i.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(a=!1,o<l&&(l=o));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,l=i[0],a=i[1],s=i[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(e&&e(i);u<l.length;u++)o=l[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},i=self["webpackChunk_1_vue_route"]=self["webpackChunk_1_vue_route"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8282)}));i=n.O(i)})();
//# sourceMappingURL=app.7dec2527.js.map
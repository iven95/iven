(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae15a5e"],{"13aa":function(t,e,a){},"21f4":function(t,e,a){},"45eb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-layout"},[a("page-header",{ref:"pageHeader",style:"margin-top: "+(t.multiPage?0:-24)+"px",attrs:{breadcrumb:t.breadcrumb,title:t.pageTitle,logo:t.logo,avatar:t.avatar}},[t._t("action",null,{slot:"action"}),t._t("headerContent",null,{slot:"content"}),!this.$slots.headerContent&&t.desc?a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v(t._s(t.desc))]),this.linkList?a("div",{staticClass:"link"},[t._l(t.linkList,(function(e,i){return[a("a",{key:i,attrs:{href:e.href}},[a("a-icon",{attrs:{type:e.icon}}),t._v(t._s(e.title))],1)]}))],2):t._e()]):t._e(),this.$slots.extra?t._t("extra",null,{slot:"extra"}):t._e()],2),a("div",{ref:"page",class:["page-content",t.layout,t.pageWidth]},[t._t("default")],2)],1)},s=[],n=(a("4160"),a("159b"),a("5530")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["page-header",t.layout,t.pageWidth]},[a("div",{staticClass:"page-header-wide"},[a("div",{staticClass:"breadcrumb"},[a("a-breadcrumb",t._l(t.breadcrumb,(function(e,i){return a("a-breadcrumb-item",{key:i},[a("span",[t._v(t._s(e))])])})),1)],1),a("div",{staticClass:"detail"},[a("div",{staticClass:"main"},[a("div",{staticClass:"row"},[t.showPageTitle&&t.title?a("h1",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),a("div",{staticClass:"action"},[t._t("action")],2)]),a("div",{staticClass:"row"},[this.$slots.content?a("div",{staticClass:"content"},[t.avatar?a("div",{staticClass:"avatar"},[a("a-avatar",{attrs:{src:t.avatar,size:72}})],1):t._e(),t._t("content")],2):t._e(),this.$slots.extra?a("div",{staticClass:"extra"},[t._t("extra")],2):t._e()])])])])])},c=[],o=a("5880"),u={name:"PageHeader",props:{title:{type:[String,Boolean],required:!1},breadcrumb:{type:Array,required:!1},logo:{type:String,required:!1},avatar:{type:String,required:!1}},computed:Object(n["a"])({},Object(o["mapState"])("setting",["layout","showPageTitle","pageWidth"]))},l=u,g=(a("cba5"),a("0c7c")),d=Object(g["a"])(l,r,c,!1,null,"9f0b68d8",null),h=d.exports,p=a("89a5"),m={name:"PageLayout",components:{PageHeader:h},props:["desc","logo","title","avatar","linkList","extraImage"],data:function(){return{page:{},pageHeaderHeight:0}},watch:{$route:function(){this.page=this.$route.meta.page}},updated:function(){this._inactive||this.updatePageHeight()},activated:function(){this.updatePageHeight()},deactivated:function(){this.updatePageHeight(0)},mounted:function(){this.updatePageHeight()},created:function(){this.page=this.$route.meta.page},beforeDestroy:function(){this.updatePageHeight(0)},computed:Object(n["a"])(Object(n["a"])({},Object(o["mapState"])("setting",["layout","multiPage","pageMinHeight","pageWidth","customTitles"])),{},{pageTitle:function(){var t=this.page&&this.page.title;return this.customTitle||t&&this.$t(t)||this.title||this.routeName},routeName:function(){var t=this.$route;return this.$t(Object(p["b"])(t.matched[t.matched.length-1].path))},breadcrumb:function(){var t=this,e=this.page,a=e&&e.breadcrumb;if(a){var i=[];return a.forEach((function(e){i.push(t.$t(e))})),i}return this.getRouteBreadcrumb()},marginCorrect:function(){return this.multiPage?24:0}}),methods:Object(n["a"])(Object(n["a"])({},Object(o["mapMutations"])("setting",["correctPageMinHeight"])),{},{getRouteBreadcrumb:function(){var t=this,e=this.$route.matched,a=[];e.forEach((function(e){var i=0===e.path.length?"/home":e.path;a.push(t.$t(Object(p["b"])(i)))}));var i=this.page&&this.page.title;return(this.customTitle||i)&&(a[a.length-1]=this.customTitle||i),a},updatePageHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$refs.pageHeader.$el.offsetHeight+this.marginCorrect;this.correctPageMinHeight(this.pageHeaderHeight-t),this.pageHeaderHeight=t}})},f=m,b=(a("aa1d"),Object(g["a"])(f,i,s,!1,null,null,null));e["a"]=b.exports},aa1d:function(t,e,a){"use strict";var i=a("21f4"),s=a.n(i);s.a},be20:function(t,e,a){"use strict";var i=a("be80"),s=a.n(i);s.a},be80:function(t,e,a){},c8c3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-layout",{attrs:{desc:t.desc,linkList:t.linkList}},[this.extraImage&&!t.isMobile?a("div",{staticClass:"extraImg",attrs:{slot:"extra"},slot:"extra"},[a("img",{attrs:{src:t.extraImage}})]):t._e(),a("page-toggle-transition",{attrs:{disabled:t.animate.disabled,animate:t.animate.name,direction:t.animate.direction}},[a("router-view",{ref:"page"})],1)],1)},s=[],n=a("5530"),r=a("45eb"),c=a("7664"),o=a("5880"),u={name:"PageView",components:{PageToggleTransition:c["a"],PageLayout:r["a"]},data:function(){return{page:{}}},computed:Object(n["a"])(Object(n["a"])({},Object(o["mapState"])("setting",["isMobile","multiPage","animate"])),{},{desc:function(){return this.page.desc},linkList:function(){return this.page.linkList},extraImage:function(){return this.page.extraImage}}),mounted:function(){this.page=this.$refs.page},updated:function(){this.page=this.$refs.page}},l=u,g=(a("be20"),a("0c7c")),d=Object(g["a"])(l,i,s,!1,null,"eb34a7f4",null);e["default"]=d.exports},cba5:function(t,e,a){"use strict";var i=a("13aa"),s=a.n(i);s.a}}]);
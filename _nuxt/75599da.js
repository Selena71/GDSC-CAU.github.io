(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{278:function(e,t,n){var map={"./eunsol.jpg":281,"./heemin.jpg":282,"./ilgoo.jpg":283,"./peniel.jpg":284,"./songgyeong.jpg":285,"./uhyeon.JPG":286};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=278},281:function(e,t,n){e.exports=n.p+"img/eunsol.8a0eeaf.jpg"},282:function(e,t,n){e.exports=n.p+"img/heemin.c61b693.jpg"},283:function(e,t,n){e.exports=n.p+"img/ilgoo.39ec243.jpg"},284:function(e,t,n){e.exports=n.p+"img/peniel.aabf029.jpg"},285:function(e,t,n){e.exports=n.p+"img/songgyeong.f86d17d.jpg"},286:function(e,t,n){e.exports=n.p+"img/uhyeon.2b5ad42.JPG"},307:function(e,t,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("64e3a469",content,!0,{sourceMap:!1})},329:function(e,t,n){"use strict";n(307)},330:function(e,t,n){var r=n(28)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.custom-text[data-v-6d7c7948]{\n  word-break:keep-all\n}\n.back-yellow[data-v-6d7c7948]{\n  background-color:#fbbf25\n}\n.lead-box[data-v-6d7c7948]{\n  border-radius:70%;\n  overflow:hidden\n}\n.profile[data-v-6d7c7948]{\n  width:100%;\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},378:function(e,t,n){"use strict";n.r(t);var r=n(8),o=(n(42),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.next=3,n("members",r.id).sortBy("name","asc").fetch();case 3:return o=t.sent,t.abrupt("return",{member:o});case 5:case"end":return t.stop()}}),t)})))()},head:{title:"Members",htmlAttrs:{lang:"ko"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"중앙대학교 Google DSC 블로그입니다. 활동 관련 소식, 공부 내용 등을 주기적으로 업로드합니다."},{name:"format-detection",content:"telephone=no"}]}}),c=(n(329),n(9)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("div",{staticClass:"max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-x-3 md:gap-x-5 gap-y-9 pb-20 md:pb-24"},e._l(e.member,(function(t){return r("div",{key:t},[r("nuxt-link",{staticClass:"group",attrs:{to:{name:"id",params:{id:t.slug}}}},[r("div",{staticClass:"flex justify-center mb-3 md:mb-5"},[r("div",{staticClass:"lead-box h-32 w-32 md:h-40 md:w-40"},[r("img",{staticClass:"profile",attrs:{src:n(278)("./"+t.img),alt:""}})])]),e._v(" "),r("div",[r("div",{staticClass:"text-lg md:text-xl flex justify-center poppins text-gray-800 group-hover:underline"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"text-sm md:text-base flex justify-center poppins text-gray-800"},[e._v(e._s(t.role))])])])],1)})),0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-28 md:pt-52 pb-0 md:pb-14 max-w-6xl mx-auto px-6"},[n("div",{staticClass:"pb-10 poppins text-3xl md:text-7xl font-medium text-gray-800"},[e._v("\n            Members\n        ")])])}],!1,null,"6d7c7948",null);t.default=component.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0164":function(t,e,n){t.exports=n.p+"static/img/001.52045a6f.jpg"},"0ccb":function(t,e,n){var i=n("50c4"),r=n("1148"),a=n("1d80"),o=Math.ceil,s=function(t){return function(e,n,s){var u,c,f=String(a(e)),l=f.length,d=void 0===s?" ":String(s),v=i(n);return v<=l||""==d?f:(u=v-l,c=r.call(d,o(u/d.length)),c.length>u&&(c=c.slice(0,u)),t?f+c:c+f)}};t.exports={start:s(!1),end:s(!0)}},1148:function(t,e,n){"use strict";var i=n("a691"),r=n("1d80");t.exports="".repeat||function(t){var e=String(r(this)),n="",a=i(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},"1d00":function(t,e,n){"use strict";n.r(e);var i=n("a9f8"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"4afb":function(t,e,n){"use strict";function i(t,e){if(0===arguments.length||!t)return null;var n,i=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===typeof t?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var r={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},a=i.replace(/{([ymdhisa])+}/g,(function(t,e){var n=r[e];return"a"===e?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return a}function r(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),r=Date.now(),a=(r-n)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":e?i(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function a(t){t=null==t?window.location.href:t;var e=t.substring(t.lastIndexOf("?")+1),n={},i=/([^?&=]+)=([^?&=]*)/g;return e.replace(i,(function(t,e,i){var r=decodeURIComponent(e),a=decodeURIComponent(i);return a=String(a),n[r]=a,t})),n}function o(t){for(var e=t.length,n=t.length-1;n>=0;n--){var i=t.charCodeAt(n);i>127&&i<=2047?e++:i>2047&&i<=65535&&(e+=2),i>=56320&&i<=57343&&n--}return e}function s(t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e}function u(t){return t?s(Object.keys(t).map((function(e){return void 0===t[e]?"":encodeURIComponent(e)+"="+encodeURIComponent(t[e])}))).join("&"):""}function c(t){var e=decodeURIComponent(t.split("?")[1]).replace(/\+/g," ");if(!e)return{};var n={},i=e.split("&");return i.forEach((function(t){var e=t.indexOf("=");if(-1!==e){var i=t.substring(0,e),r=t.substring(e+1,t.length);n[i]=r}})),n}function f(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}function l(t,e){return"object"!==typeof t&&(t={}),Array.isArray(e)?e.slice():(Object.keys(e).forEach((function(n){var i=e[n];t[n]="object"===typeof i?l(t[n],i):i})),t)}function d(t,e){if(t&&e){var n=t.className,i=n.indexOf(e);-1===i?n+=""+e:n=n.substr(0,i)+n.substr(i+e.length),t.className=n}}function v(t){return"start"===t?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function p(t,e,n){var i,r,a,o,s,u=function u(){var c=+new Date-o;c<e&&c>0?i=setTimeout(u,e-c):(i=null,n||(s=t.apply(a,r),i||(a=r=null)))};return function(){for(var r=arguments.length,c=new Array(r),f=0;f<r;f++)c[f]=arguments[f];a=this,o=+new Date;var l=n&&!i;return i||(i=setTimeout(u,e)),l&&(s=t.apply(a,c),a=c=null),s}}function g(t){if(!t&&"object"!==typeof t)throw new Error("error arguments","deepClone");var e=t.constructor===Array?[]:{};return Object.keys(t).forEach((function(n){t[n]&&"object"===typeof t[n]?e[n]=g(t[n]):e[n]=t[n]})),e}function h(t){return Array.from(new Set(t))}function m(){var t=+new Date+"",e=parseInt(65536*(1+Math.random()))+"";return(+(e+t)).toString(32)}function x(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function b(t,e){x(t,e)||(t.className+=" "+e)}function w(t,e){if(x(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}}function y(t){if(null==t)return"";var e="YYYY-mm-dd HH:MM:SS";t=new Date(t);var n={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString()};return Object.keys(n).forEach((function(t){var i=new RegExp("(".concat(t,")")).exec(e);i&&(e=e.replace(i[1],1===i[1].length?n[t]:n[t].padStart(i[1].length,"0")))})),e}function S(t){return t?isNaN(t)?void alert("金额中含有不能识别的字符"):(t="string"==typeof t?parseFloat(t):t,t=t.toFixed(2),console.log(t),t=parseFloat(t),t=t.toLocaleString(),-1===t.indexOf(".")?t+=".00元":console.log(t.split(".")[1].length),t):null}function k(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),document.cookie=t+"="+e+";expires="+r.toGMTString()+";path="+i+";"}function C(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){var r=n[i].trim();if(0==r.indexOf(e))return r.substring(e.length,r.length)}}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=new Date;n.setTime(n.getTime()-1e3);var i=C(t);null!=i&&(document.cookie=t+"="+i+";expires="+n.toGMTString()+";path="+e+";")}n("4160"),n("a630"),n("c975"),n("baa5"),n("d81d"),n("fb6a"),n("b64b"),n("d3b7"),n("acd8"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("466d"),n("4d90"),n("5319"),n("1276"),n("498a"),n("159b"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.parseTime=i,e.formatTime=r,e.getQueryObject=a,e.byteLength=o,e.cleanArray=s,e.param=u,e.param2Obj=c,e.html2Text=f,e.objectMerge=l,e.toggleClass=d,e.getTime=v,e.debounce=p,e.deepClone=g,e.uniqueArr=h,e.createUniqueString=m,e.hasClass=x,e.addClass=b,e.removeClass=w,e.dateChangeFormat=y,e.toMoney=S,e.setCookie=k,e.getCookie=C,e.delCookie=D},"4d90":function(t,e,n){"use strict";var i=n("23e7"),r=n("0ccb").start,a=n("9a0c");i({target:"String",proto:!0,forced:a},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5103:function(t,e,n){"use strict";var i=n("fba9"),r=n.n(i);r.a},6062:function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),a=n("e2cc"),o=n("0366"),s=n("19aa"),u=n("2266"),c=n("7dd0"),f=n("2626"),l=n("83ab"),d=n("f183").fastKey,v=n("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,c){var f=t((function(t,i){s(t,f,e),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=i&&u(i,t[c],t,n)})),v=g(e),h=function(t,e,n){var i,r,a=v(t),o=m(t,e);return o?o.value=n:(a.last=o={index:r=d(e,!0),key:e,value:n,previous:i=a.last,next:void 0,removed:!1},a.first||(a.first=o),i&&(i.next=o),l?a.size++:t.size++,"F"!==r&&(a.index[r]=o)),t},m=function(t,e){var n,i=v(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return a(f.prototype,{clear:function(){var t=this,e=v(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),i=m(e,t);if(i){var r=i.next,a=i.previous;delete n.index[i.index],i.removed=!0,a&&(a.next=r),r&&(r.previous=a),n.first==i&&(n.first=r),n.last==i&&(n.last=a),l?n.size--:e.size--}return!!i},forEach:function(t){var e,n=v(this),i=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),a(f.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),l&&i(f.prototype,"size",{get:function(){return v(this).size}}),f},setStrong:function(t,e,n){var i=e+" Iterator",r=g(e),a=g(i);c(t,e,(function(t,e){p(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("f183"),u=n("2266"),c=n("19aa"),f=n("861d"),l=n("d039"),d=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),m=g?"set":"add",x=r[t],b=x&&x.prototype,w=x,y={},S=function(t){var e=b[t];o(b,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(a(t,"function"!=typeof x||!(h||b.forEach&&!l((function(){(new x).entries().next()})))))w=n.getConstructor(e,t,g,m),s.REQUIRED=!0;else if(a(t,!0)){var k=new w,C=k[m](h?{}:-0,1)!=k,D=l((function(){k.has(1)})),E=d((function(t){new x(t)})),M=!h&&l((function(){var t=new x,e=5;while(e--)t[m](e,e);return!t.has(-0)}));E||(w=e((function(e,n){c(e,w,t);var i=p(new x,e,w);return void 0!=n&&u(n,i[m],i,g),i})),w.prototype=b,b.constructor=w),(D||M)&&(S("delete"),S("has"),g&&S("get")),(M||C)&&S(m),h&&b.clear&&delete b.clear}return y[t]=w,i({global:!0,forced:w!=x},y),v(w,t),h||n.setStrong(w,t,g),w}},7756:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content .is[data-v-2fe26855]{height:100%}.content .is .bbBox[data-v-2fe26855]{width:150px;height:190px;background-color:#fff;-webkit-transform:scale(0) rotate(-25deg);transform:scale(0) rotate(-25deg);margin:20% auto;box-shadow:2px 2px 2px 2px silver;box-shadow:5px;position:relative}.content .is .bbBox uni-image[data-v-2fe26855]{width:140px;height:140px;display:block;position:absolute;top:20px;left:5px}.content .is .why .uni-common-mt .title[data-v-2fe26855]{text-align:center;-webkit-transform:translateX(-100px);transform:translateX(-100px)}.content .is .why .uni-common-mt .uni-input[data-v-2fe26855]{-webkit-transform:translateX(-100px);transform:translateX(-100px);text-align:center}",""]),t.exports=e},"8a92":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[t.is?i("v-uni-view",{staticClass:"else"},[i("v-uni-view",{staticClass:"elseBox"},[i("p",[t._v("憨憨还没想好首页怎么弄好看QAQ~")]),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage.apply(void 0,arguments)}}},[t._v("点击先去看七夕视频叭~")])],1)],1):i("v-uni-view",{staticClass:"is "},[i("v-uni-view",{staticClass:"bbBox",attrs:{animation:t.animationData}},[i("v-uni-image",{attrs:{src:n("0164")}})],1),i("v-uni-view",{staticClass:"why"},[i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-view",{staticClass:"uni-form-item uni-column ",attrs:{animation:t.animationData2}},[i("v-uni-view",{staticClass:"title"},[t._v("你是我宝宝吗？")]),i("v-uni-input",{staticClass:"uni-input",attrs:{password:!0,"confirm-type":"yes",focus:!0,placeholder:"请输入指令"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.yesF.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)},a=[]},"9a0c":function(t,e,n){var i=n("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i)},a9f8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("4afb"),r={data:function(){return{is:!1,animationData:{},animationData2:{}}},onShow:function(){this.animationInit(),this.is=(0,i.getCookie)("is")},methods:{goPage:function(){uni.navigateTo({url:"../videos/videos"})},animationInit:function(){var t=uni.createAnimation({duration:1e3,timingFunction:"ease"});t.scale(1).rotate(0).step(),this.animationData=t.export();var e=uni.createAnimation({duration:1e3,timingFunction:"ease"});e.translateX(100).step(),this.animationData2=e.export()},yesF:function(t){console.log(t.detail.value),"admin"==t.detail.value?(uni.showToast({title:"欢迎宝宝！",image:"../../static/正确.png",duration:850}),(0,i.setCookie)("is",!0,30,""),this.is=!this.is):uni.showToast({title:"你不是我宝宝！",image:"../../static/错误.png",duration:850})}}};e.default=r},b5c1:function(t,e,n){"use strict";n.r(e);var i=n("8a92"),r=n("1d00");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5103");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"2fe26855",null,!1,i["a"],o);e["default"]=u.exports},baa5:function(t,e,n){var i=n("23e7"),r=n("e58c");i({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},bb2f:function(t,e,n){var i=n("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},f183:function(t,e,n){var i=n("d012"),r=n("861d"),a=n("5135"),o=n("9bf2").f,s=n("90e3"),u=n("bb2f"),c=s("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(t){o(t,c,{value:{objectID:"O"+ ++f,weakData:{}}})},v=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,c)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[c].objectID},p=function(t,e){if(!a(t,c)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[c].weakData},g=function(t){return u&&h.REQUIRED&&l(t)&&!a(t,c)&&d(t),t},h=t.exports={REQUIRED:!1,fastKey:v,getWeakData:p,onFreeze:g};i[c]=!0},fba9:function(t,e,n){var i=n("7756");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("31770373",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
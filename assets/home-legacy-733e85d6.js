System.register(["./index-legacy-a6b9922c.js","./Heading-legacy-703e2049.js","./TextInput-legacy-d9356135.js"],(function(e,t){"use strict";var n,r,a,o,s,i,c,l,p,d,u,m,f,h,y,v,g,b,x,O,w;return{setters:[e=>{n=e.w,r=e.a,a=e.b,o=e._,s=e.c,i=e.d,c=e.e,l=e.I,p=e.u,d=e.f,u=e.F,m=e.h,f=e.i,h=e.k,y=e.L,v=e.l,g=e.m,b=e.S},e=>{x=e.H,O=e.l},e=>{w=e.T}],execute:function(){function t(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},N=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function E(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(j[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(N),o=null;null!==(o=a.exec(e));)if(o[0].trim())if(o[1]){var s=o[1].trim(),i=[s,""];s.indexOf("=")>-1&&(i=s.split("=")),t.attrs[i[0]]=i[1],a.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return t}var k=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,P=/^\s*$/,S=Object.create(null),K=function(e,t){t||(t={}),t.components||(t.components=S);var n,r=[],a=[],o=-1,s=!1;if(0!==e.indexOf("<")){var i=e.indexOf("<");r.push({type:"text",content:-1===i?e:e.substring(0,i)})}return e.replace(k,(function(i,c){if(s){if(i!=="</"+n.name+">")return;s=!1}var l,p="/"!==i.charAt(1),d=i.startsWith("\x3c!--"),u=c+i.length,m=e.charAt(u);if(d){var f=E(i);return o<0?(r.push(f),r):((l=a[o]).children.push(f),r)}if(p&&(o++,"tag"===(n=E(i)).type&&t.components[n.name]&&(n.type="component",s=!0),n.voidElement||s||!m||"<"===m||n.children.push({type:"text",content:e.slice(u,e.indexOf("<",u))}),0===o&&r.push(n),(l=a[o-1])&&l.children.push(n),a[o]=n),(!p||n.voidElement)&&(o>-1&&(n.voidElement||n.name===i.slice(2,-1))&&(o--,n=-1===o?r:a[o]),!s&&"<"!==m&&m)){l=-1===o?r:a[o].children;var h=e.indexOf("<",u),y=e.slice(u,-1===h?void 0:h);P.test(y)&&(y=" "),(h>-1&&o+l.length>=0||" "!==y)&&l.push({type:"text",content:y})}})),r},D=["format"],_=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function T(e){return e?e.props?e.props.children:e.children:[]}function V(e){return Array.isArray(e)?e:[e]}function I(e,n){if(!e)return"";var r="",o=V(e),c=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return o.forEach((function(e,o){if("string"==typeof e)r+="".concat(e);else if(a.isValidElement(e)){var l=Object.keys(e.props).length,p=c.indexOf(e.type)>-1,d=e.props.children;if(!d&&p&&0===l)r+="<".concat(e.type,"/>");else if(d||p&&0===l)if(e.props.i18nIsDynamicList)r+="<".concat(o,"></").concat(o,">");else if(p&&1===l&&"string"==typeof d)r+="<".concat(e.type,">").concat(d,"</").concat(e.type,">");else{var u=I(d,n);r+="<".concat(o,">").concat(u,"</").concat(o,">")}else r+="<".concat(o,"></").concat(o,">")}else if(null===e)s("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===i(e)){var m=e.format,f=t(e,D),h=Object.keys(f);if(1===h.length){var y=m?"".concat(h[0],", ").concat(m):h[0];r+="{{".concat(y,"}}")}else s("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else s("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),r}function W(e,t,n,r,o,s){if(""===t)return[];var c=r.transKeepBasicHtmlNodesFor||[],l=t&&new RegExp(c.join("|")).test(t);if(!e&&!l)return[t];var p={};!function e(t){V(t).forEach((function(t){"string"!=typeof t&&(H(t)?e(T(t)):"object"!==i(t)||a.isValidElement(t)||Object.assign(p,t))}))}(e);var d=K("<0>".concat(t,"</0>")),u=F(F({},p),o);function m(e,t,n){var r=T(e),o=h(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return a.isValidElement(e)}))}(r)&&0===o.length?r:o}function f(e,t,n,r,o){e.dummy&&(e.children=t),n.push(a.cloneElement(e,F(F({},e.props),{},{key:r}),o?void 0:t))}function h(t,o,p){var d=V(t);return V(o).reduce((function(t,o,y){var v,g,b,x=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,u,n.language);if("tag"===o.type){var O=d[parseInt(o.name,10)];!O&&1===p.length&&p[0][o.name]&&(O=p[0][o.name]),O||(O={});var w=0!==Object.keys(o.attrs).length?(v={props:o.attrs},(b=F({},g=O)).props=Object.assign(v.props,g.props),b):O,j=a.isValidElement(w),N=j&&H(o,!0)&&!o.voidElement,E=l&&"object"===i(w)&&w.dummy&&!j,k="object"===i(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof w){var P=n.services.interpolator.interpolate(w,u,n.language);t.push(P)}else if(H(w)||N)f(w,m(w,o,p),t,y);else if(E){var S=h(d,o.children,p);t.push(a.cloneElement(w,F(F({},w.props),{},{key:y}),S))}else if(Number.isNaN(parseFloat(o.name)))if(k)f(w,m(w,o,p),t,y,o.voidElement);else if(r.transSupportBasicHtmlNodes&&c.indexOf(o.name)>-1)if(o.voidElement)t.push(a.createElement(o.name,{key:"".concat(o.name,"-").concat(y)}));else{var K=h(d,o.children,p);t.push(a.createElement(o.name,{key:"".concat(o.name,"-").concat(y)},K))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var D=h(d,o.children,p);t.push("<".concat(o.name,">").concat(D,"</").concat(o.name,">"))}else if("object"!==i(w)||j)1===o.children.length&&x?t.push(a.cloneElement(w,F(F({},w.props),{},{key:y}),x)):t.push(a.cloneElement(w,F(F({},w.props),{},{key:y})));else{var _=o.children[0]?x:null;_&&t.push(_)}}else if("text"===o.type){var A=r.transWrapTextNodes,T=s?r.unescape(n.services.interpolator.interpolate(o.content,u,n.language)):n.services.interpolator.interpolate(o.content,u,n.language);A?t.push(a.createElement(A,{key:"".concat(o.name,"-").concat(y)},T)):t.push(T)}return t}),[])}return T(h([{dummy:!0,children:e||[]}],d,V(e||[]))[0])}function B(e){var o=e.children,s=e.count,i=e.parent,l=e.i18nKey,p=e.context,d=e.tOptions,u=void 0===d?{}:d,m=e.values,f=e.defaults,h=e.components,y=e.ns,v=e.i18n,g=e.t,b=e.shouldUnescape,x=t(e,_),O=v||c();if(!O)return n("You will need to pass in an i18next instance by using i18nextReactModule"),o;var w=g||O.t.bind(O)||function(e){return e};p&&(u.context=p);var j=F(F({},r()),O.options&&O.options.react),N=y||w.ns||O.options&&O.options.defaultNS;N="string"==typeof N?[N]:N||["translation"];var E=f||I(o,j)||j.transEmptyNodeValue||l,k=j.hashTransKey,P=l||(k?k(E):E),S=m?u.interpolation:{interpolation:F(F({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},K=F(F(F(F({},u),{},{count:s},m),S),{},{defaultValue:E,ns:N}),D=W(h||o,P?w(P,K):E,O,j,K,b),A=void 0!==i?i:j.defaultTransParent;return A?a.createElement(A,x,D):D}var U=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){var n=e.children,r=e.count,s=e.parent,i=e.i18nKey,p=e.context,d=e.tOptions,u=void 0===d?{}:d,m=e.values,f=e.defaults,h=e.components,y=e.ns,v=e.i18n,g=e.t,b=e.shouldUnescape,x=t(e,U),O=a.useContext(l)||{},w=O.i18n,j=O.defaultNS,N=v||w||c(),E=g||N&&N.t.bind(N);return B(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:n,count:r,parent:s,i18nKey:i,context:p,tOptions:u,values:m,defaults:f,components:h,ns:y||E&&E.ns||j||N&&N.options&&N.options.defaultNS,i18n:N,t:g,shouldUnescape:b},x))}function L({error:e}){const{t:t}=p();return d(u,{className:"flex flex-col space-y-4",method:"post",action:"/",children:[d("label",{htmlFor:"username",children:[m("p",{children:t`ui.username`}),m(w,{name:"username",id:"username",required:!0})]}),d("label",{htmlFor:"password",children:[m("p",{children:t`ui.password`}),m(w,{name:"password",id:"password",type:"password",minLength:10,required:!0}),m("p",{className:"text-gray-700",children:t`ui.password_hint`})]}),e&&m("p",{className:"bold text-red-500",children:e.error}),m("button",{className:"rounded bg-brand p-2 text-white",children:t`ui.log in`})]})}const q=[{to:"/new/mau_giao",labelKey:"new form children less than five"},{to:"/new/tieu_hoc",labelKey:"new form children six to fifteen"},{to:"/new/nguoi_lon",labelKey:"new form adults"}],z=[{to:"/new/who_children_surface",labelKey:"new who children surface"}];function C({actions:e,lang:t}){return m("ul",{className:"divide-y divide-slate-300",children:e.map((({to:e,labelKey:n})=>d(y,{to:e,className:"block w-full py-2 hover:bg-slate-200",children:[t&&d("span",{className:"text-sm text-gray-700",children:["(",t,")"]})," ",m(R,{ns:"home",children:n})]},e)))})}e("default",(()=>{const{t:e}=p("home"),{t:t}=p(),n=f(),r=h(),[o,s]=a.useState(!1);return a.useEffect((()=>{navigator.serviceWorker&&("activated"==navigator.serviceWorker.controller?.state?s(!0):navigator.serviceWorker.ready.then((e=>{e.active&&s(!0)})))}),[s]),d("div",{className:"voser-container voser-page-padding space-y-8 py-8",children:[d("div",{className:"mt-4 space-y-2 text-center",children:[d(x,{children:["VOSER - ",t`voser explain`]}),m("p",{className:"text-xl",children:t`voser maker`})]}),d("div",{className:"space-y-6 px-2 sm:px-0",children:[m(y,{to:"/manage",className:"inline-block rounded-lg bg-brand py-2 px-3 text-xl text-white hover:bg-brand-400",children:e("form manage page")}),m("h2",{className:v(O(2),"text-brand"),children:e`create new form`}),d("div",{className:"flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4",children:[d("article",{className:"w-full max-w-md space-y-4 rounded-lg border bg-white p-4 shadow-md sm:p-8",children:[m("h5",{className:"text-xl font-bold leading-none text-gray-900",children:e`ump forms`}),m(C,{actions:q,lang:"vi"})]}),d("article",{className:"w-full max-w-md space-y-4 rounded-lg border bg-white p-4 shadow-md sm:p-8",children:[m("h5",{className:"text-xl font-bold leading-none text-gray-900",children:e`who forms`}),m(C,{actions:z,lang:"en"})]}),m("article",{className:"w-full max-w-md space-y-4 rounded-lg border bg-white p-4 shadow-md sm:p-8",children:d(g,r?{children:[d("h5",{className:"text-xl font-bold leading-none text-gray-900",children:[e("hi")," ",r.name?`${r.name} (${r.username})`:r.username]}),m(C,{actions:[{to:"/manage",labelKey:"manage forms.on device"}]})]}:{children:[m("h5",{className:"text-xl font-bold leading-none text-gray-900",children:t`ui.log in for syncing`}),m(L,{error:n})]})})]}),o&&d("div",{className:"flex space-x-2 text-green-600",children:[e`offline_ready`,m(b,{name:"check_check",className:"ml-1 h-6 w-6"})]})]})]})}))}}}));

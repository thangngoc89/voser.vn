System.register(["./index-legacy-eb79b584.js","./Heading-legacy-76e39911.js","./TextInput-legacy-e1d59691.js"],(function(e,t){"use strict";var n,r,a,o,s,i,c,l,p,u,d,h,m,f,y,b,v,g,x,O;return{setters:[e=>{n=e.w,r=e.a,a=e.b,o=e._,s=e.c,i=e.d,c=e.e,l=e.I,p=e.f,u=e.F,d=e.h,h=e.u,m=e.i,f=e.k,y=e.L,b=e.l,v=e.m},e=>{g=e.H,x=e.l},e=>{O=e.T}],execute:function(){function t(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},w=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function E(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(j[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(w),o=null;null!==(o=a.exec(e));)if(o[0].trim())if(o[1]){var s=o[1].trim(),i=[s,""];s.indexOf("=")>-1&&(i=s.split("=")),t.attrs[i[0]]=i[1],a.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return t}var N=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,k=/^\s*$/,P=Object.create(null),K=function(e,t){t||(t={}),t.components||(t.components=P);var n,r=[],a=[],o=-1,s=!1;if(0!==e.indexOf("<")){var i=e.indexOf("<");r.push({type:"text",content:-1===i?e:e.substring(0,i)})}return e.replace(N,(function(i,c){if(s){if(i!=="</"+n.name+">")return;s=!1}var l,p="/"!==i.charAt(1),u=i.startsWith("\x3c!--"),d=c+i.length,h=e.charAt(d);if(u){var m=E(i);return o<0?(r.push(m),r):((l=a[o]).children.push(m),r)}if(p&&(o++,"tag"===(n=E(i)).type&&t.components[n.name]&&(n.type="component",s=!0),n.voidElement||s||!h||"<"===h||n.children.push({type:"text",content:e.slice(d,e.indexOf("<",d))}),0===o&&r.push(n),(l=a[o-1])&&l.children.push(n),a[o]=n),(!p||n.voidElement)&&(o>-1&&(n.voidElement||n.name===i.slice(2,-1))&&(o--,n=-1===o?r:a[o]),!s&&"<"!==h&&h)){l=-1===o?r:a[o].children;var f=e.indexOf("<",d),y=e.slice(d,-1===f?void 0:f);k.test(y)&&(y=" "),(f>-1&&o+l.length>=0||" "!==y)&&l.push({type:"text",content:y})}})),r},S=["format"],D=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function H(e){return e?e.props?e.props.children:e.children:[]}function V(e){return Array.isArray(e)?e:[e]}function I(e,n){if(!e)return"";var r="",o=V(e),c=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return o.forEach((function(e,o){if("string"==typeof e)r+="".concat(e);else if(a.isValidElement(e)){var l=Object.keys(e.props).length,p=c.indexOf(e.type)>-1,u=e.props.children;if(!u&&p&&0===l)r+="<".concat(e.type,"/>");else if(u||p&&0===l)if(e.props.i18nIsDynamicList)r+="<".concat(o,"></").concat(o,">");else if(p&&1===l&&"string"==typeof u)r+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var d=I(u,n);r+="<".concat(o,">").concat(d,"</").concat(o,">")}else r+="<".concat(o,"></").concat(o,">")}else if(null===e)s("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===i(e)){var h=e.format,m=t(e,S),f=Object.keys(m);if(1===f.length){var y=h?"".concat(f[0],", ").concat(h):f[0];r+="{{".concat(y,"}}")}else s("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else s("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),r}function B(e,t,n,r,o,s){if(""===t)return[];var c=r.transKeepBasicHtmlNodesFor||[],l=t&&new RegExp(c.join("|")).test(t);if(!e&&!l)return[t];var p={};!function e(t){V(t).forEach((function(t){"string"!=typeof t&&(A(t)?e(H(t)):"object"!==i(t)||a.isValidElement(t)||Object.assign(p,t))}))}(e);var u=K("<0>".concat(t,"</0>")),d=T(T({},p),o);function h(e,t,n){var r=H(e),o=f(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return a.isValidElement(e)}))}(r)&&0===o.length?r:o}function m(e,t,n,r,o){e.dummy&&(e.children=t),n.push(a.cloneElement(e,T(T({},e.props),{},{key:r}),o?void 0:t))}function f(t,o,p){var u=V(t);return V(o).reduce((function(t,o,y){var b,v,g,x=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,d,n.language);if("tag"===o.type){var O=u[parseInt(o.name,10)];!O&&1===p.length&&p[0][o.name]&&(O=p[0][o.name]),O||(O={});var j=0!==Object.keys(o.attrs).length?(b={props:o.attrs},(g=T({},v=O)).props=Object.assign(b.props,v.props),g):O,w=a.isValidElement(j),E=w&&A(o,!0)&&!o.voidElement,N=l&&"object"===i(j)&&j.dummy&&!w,k="object"===i(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof j){var P=n.services.interpolator.interpolate(j,d,n.language);t.push(P)}else if(A(j)||E)m(j,h(j,o,p),t,y);else if(N){var K=f(u,o.children,p);t.push(a.cloneElement(j,T(T({},j.props),{},{key:y}),K))}else if(Number.isNaN(parseFloat(o.name)))if(k)m(j,h(j,o,p),t,y,o.voidElement);else if(r.transSupportBasicHtmlNodes&&c.indexOf(o.name)>-1)if(o.voidElement)t.push(a.createElement(o.name,{key:"".concat(o.name,"-").concat(y)}));else{var S=f(u,o.children,p);t.push(a.createElement(o.name,{key:"".concat(o.name,"-").concat(y)},S))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var D=f(u,o.children,p);t.push("<".concat(o.name,">").concat(D,"</").concat(o.name,">"))}else if("object"!==i(j)||w)1===o.children.length&&x?t.push(a.cloneElement(j,T(T({},j.props),{},{key:y}),x)):t.push(a.cloneElement(j,T(T({},j.props),{},{key:y})));else{var F=o.children[0]?x:null;F&&t.push(F)}}else if("text"===o.type){var H=r.transWrapTextNodes,V=s?r.unescape(n.services.interpolator.interpolate(o.content,d,n.language)):n.services.interpolator.interpolate(o.content,d,n.language);H?t.push(a.createElement(H,{key:"".concat(o.name,"-").concat(y)},V)):t.push(V)}return t}),[])}return H(f([{dummy:!0,children:e||[]}],u,V(e||[]))[0])}function U(e){var o=e.children,s=e.count,i=e.parent,l=e.i18nKey,p=e.context,u=e.tOptions,d=void 0===u?{}:u,h=e.values,m=e.defaults,f=e.components,y=e.ns,b=e.i18n,v=e.t,g=e.shouldUnescape,x=t(e,D),O=b||c();if(!O)return n("You will need to pass in an i18next instance by using i18nextReactModule"),o;var j=v||O.t.bind(O)||function(e){return e};p&&(d.context=p);var w=T(T({},r()),O.options&&O.options.react),E=y||j.ns||O.options&&O.options.defaultNS;E="string"==typeof E?[E]:E||["translation"];var N=m||I(o,w)||w.transEmptyNodeValue||l,k=w.hashTransKey,P=l||(k?k(N):N),K=h?d.interpolation:{interpolation:T(T({},d.interpolation),{},{prefix:"#$?",suffix:"?$#"})},S=T(T(T(T({},d),{},{count:s},h),K),{},{defaultValue:N,ns:E}),F=B(f||o,P?j(P,S):N,O,w,S,g),A=void 0!==i?i:w.defaultTransParent;return A?a.createElement(A,x,F):F}var $=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){var n=e.children,r=e.count,s=e.parent,i=e.i18nKey,p=e.context,u=e.tOptions,d=void 0===u?{}:u,h=e.values,m=e.defaults,f=e.components,y=e.ns,b=e.i18n,v=e.t,g=e.shouldUnescape,x=t(e,$),O=a.useContext(l)||{},j=O.i18n,w=O.defaultNS,E=b||j||c(),N=v||E&&E.t.bind(E);return U(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:n,count:r,parent:s,i18nKey:i,context:p,tOptions:d,values:h,defaults:m,components:f,ns:y||N&&N.ns||w||E&&E.options&&E.options.defaultNS,i18n:E,t:v,shouldUnescape:g},x))}function L({error:e}){return p(u,{className:"flex flex-col space-y-4",method:"post",action:"/",children:[p("label",{htmlFor:"username",children:[d("p",{children:"Tên đăng nhập"}),d(O,{name:"username",id:"username",required:!0})]}),p("label",{htmlFor:"password",children:[d("p",{children:"Mật khẩu"}),d(O,{name:"password",id:"password",type:"password",minLength:10,required:!0}),d("p",{className:"text-gray-700",children:"Mật khẩu tối thiểu 10 kí tự"})]}),e&&d("p",{className:"bold text-red-500",children:e.error}),d("button",{className:"rounded bg-brand p-2 text-white",children:"Đăng nhập"})]})}const M=[{to:"/new/mau_giao",labelKey:"new form children less than five"},{to:"/new/tieu_hoc",labelKey:"new form children six to fifteen"},{to:"/new/nguoi_lon",labelKey:"new form adults"}];function W({actions:e,lang:t}){return d("ul",{className:"divide-y divide-slate-300",children:e.map((({to:e,labelKey:n})=>p(y,{to:e,className:"block w-full py-2 hover:bg-slate-200",children:[p("span",{className:"text-sm text-gray-700",children:["(",t,")"]})," ",d(_,{ns:"home",children:n})]},e)))})}e("default",(()=>{const{t:e}=h("home"),{t:t}=h(),n=m(),r=f();return p("div",{className:"voser-container voser-page-padding space-y-8 py-8",children:[p("div",{className:"mt-4 space-y-2 text-center",children:[p(g,{children:["VOSER - ",t`voser explain`]}),d("p",{className:"text-xl",children:t`voser maker`})]}),p("div",{className:"space-y-6",children:[d(y,{to:"/manage",className:"rounded-lg bg-brand-400 py-2 px-3 text-xl text-white hover:bg-brand",children:"Quản lí hồ sơ"}),d("h2",{className:b(x(2),"text-brand"),children:e`create new form`}),p("div",{className:"flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4",children:[p("article",{className:"w-full max-w-md space-y-4 rounded-lg border bg-white p-4 shadow-md sm:p-8",children:[d("h5",{className:"text-xl font-bold leading-none text-gray-900",children:"Form thực địa"}),d(W,{actions:M,lang:"vi"})]}),d("article",{className:"w-full max-w-md space-y-4 rounded-lg border bg-white p-4 shadow-md sm:p-8",children:p(v,r?{children:[p("h5",{className:"text-xl font-bold leading-none text-gray-900",children:["Chào"," ",r.name?`${r.name} (${r.username})`:r.username]}),d(W,{actions:[{to:"/manage",labelKey:"Quản lí hồ sơ trên thiết bị"}],lang:"vi"})]}:{children:[d("h5",{className:"text-xl font-bold leading-none text-gray-900",children:"Đăng nhập để đồng bộ hồ sơ"}),d(L,{error:n})]})})]})]})]})}))}}}));

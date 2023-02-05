System.register(["./index-legacy.675748b1.js"],(function(e,t){"use strict";var r,s;return{setters:[e=>{r=e.R,s=e.j}],execute:function(){e({b:function(e){const t=C(),{name:s,control:a=t.control,shouldUnregister:i}=e,n=l(a._names.array,s),o=function(e){const t=C(),{control:s=t.control,name:a,defaultValue:i,disabled:n,exact:o}=e||{},u=r.useRef(a);u.current=a,B({disabled:n,subject:s._subjects.watch,callback:e=>{if(U(u.current,e.name,o)){const t=M(u.current,s._names,e.values||s._formValues);c(d(t)?i:q(t))}}});const[l,c]=r.useState(d(i)?s._getWatch(a):i);return r.useEffect((()=>s._removeUnmounted())),l}({control:a,name:s,defaultValue:f(a._formValues,s,f(a._defaultValues,s,e.defaultValue)),exact:!0}),c=L({control:a,name:s}),m=r.useRef(a.register(s,{...e.rules,value:o}));return r.useEffect((()=>{const e=(e,t)=>{const r=f(a._fields,e);r&&(r._f.mount=t)};return e(s,!0),()=>{const t=a._options.shouldUnregister||i;(n?t&&!a._stateFlags.action:t)?a.unregister(s):e(s,!1)}}),[s,a,n,i]),{field:{name:s,value:o,onChange:r.useCallback((e=>m.current.onChange({target:{value:u(e),name:s},type:h})),[s]),onBlur:r.useCallback((()=>m.current.onBlur({target:{value:f(a._formValues,s),name:s},type:y})),[s,a]),ref:e=>{const t=f(a._fields,s);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:c,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!f(c.errors,s)},isDirty:{enumerable:!0,get:()=>!!f(c.dirtyFields,s)},isTouched:{enumerable:!0,get:()=>!!f(c.touchedFields,s)},error:{enumerable:!0,get:()=>f(c.errors,s)}})}},d:L,s:H,u:function(e={}){const t=r.useRef(),[s,a]=r.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...xe(e),formState:s});const i=t.current.control;return i._options=e,B({subject:i._subjects.state,callback:r.useCallback((e=>{O(e,i._proxyFormState,!0)&&(i._formState={...i._formState,...e},a({...i._formState}))}),[i])}),r.useEffect((()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),r.useEffect((()=>{s.submitCount&&i._focusError()}),[i,s.submitCount]),t.current.formState=E(s,i),t.current}});var t=e=>"checkbox"===e.type,a=e=>e instanceof Date,i=e=>null==e;const n=e=>"object"==typeof e;var o=e=>!i(e)&&!Array.isArray(e)&&n(e)&&!a(e),u=e=>o(e)&&e.target?t(e.target)?e.target.checked:e.target.value:e,l=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),c=e=>Array.isArray(e)?e.filter(Boolean):[],d=e=>void 0===e,f=e("g",((e,t,r)=>{if(!t||!o(e))return r;const s=c(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return d(s)||s===e?d(e[t])?r:e[t]:s}));const y="blur",m="focusout",h="change",g="onBlur",v="onChange",b="onSubmit",p="onTouched",_="all",V="max",A="min",w="maxLength",F="minLength",S="pattern",x="required",k="validate",D=r.createContext(null),C=e("c",(()=>r.useContext(D)));e("F",(e=>{const{children:t,...r}=e;return s(D.Provider,{value:r,children:t})}));var E=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==_&&(t._proxyFormState[a]=!s||_),r&&(r[a]=!0),e[a]}});return a},j=e=>o(e)&&!Object.keys(e).length,O=(e,t,r)=>{const{name:s,...a}=e;return j(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||_)))},T=e=>Array.isArray(e)?e:[e],U=(e,t,r)=>r&&t?e===t:!e||!t||e===t||T(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function B(e){const t=r.useRef(e);t.current=e,r.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}}),[e.disabled])}function L(e){const t=C(),{control:s=t.control,disabled:a,name:i,exact:n}=e||{},[o,u]=r.useState(s._formState),l=r.useRef(!0),c=r.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=r.useRef(i);return d.current=i,B({disabled:a,callback:r.useCallback((e=>l.current&&U(d.current,e.name,n)&&O(e,c.current)&&u({...s._formState,...e})),[s,n]),subject:s._subjects.state}),r.useEffect((()=>{l.current=!0;const e=s._proxyFormState.isDirty&&s._getDirty();return e!==s._formState.isDirty&&s._subjects.state.next({isDirty:e}),s._updateValid(),()=>{l.current=!1}}),[s]),E(o,s,c.current,!1)}var N=e=>"string"==typeof e,M=(e,t,r,s)=>N(e)?(s&&t.watch.add(e),f(r,e)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),f(r,e)))):(t.watchAll=!!s,r),R="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function q(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(R&&(e instanceof Blob||e instanceof FileList)||!r&&!o(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return o(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=q(e[r]);else t=e}return t}var P=e("a",((e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{})),W=e=>/^\w*$/.test(e),$=e=>c(e.replace(/["|']|\]/g,"").split(/\.|\[/));function H(e,t,r){let s=-1;const a=W(t)?[t]:$(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=o(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}const I=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=f(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else o(s)&&I(s,t)}}};var z=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),G=(e,t,r)=>{const s=c(f(e,r));return H(s,"root",t[r]),H(e,r,s),e},J=e=>"boolean"==typeof e,K=e=>"file"===e.type,Q=e=>"function"==typeof e,X=e=>N(e)||r.isValidElement(e),Y=e=>"radio"===e.type,Z=e=>e instanceof RegExp;const ee={value:!1,isValid:!1},te={value:!0,isValid:!0};var re=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!d(e[0].attributes.value)?d(e[0].value)||""===e[0].value?te:{value:e[0].value,isValid:!0}:te:ee}return ee};const se={isValid:!1,value:null};var ae=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),se):se;function ie(e,t,r="validate"){if(X(e)||Array.isArray(e)&&e.every(X)||J(e)&&!e)return{type:r,message:X(e)?e:"",ref:t}}var ne=e=>o(e)&&!Z(e)?e:{value:e,message:""},oe=async(e,r,s,a,n)=>{const{ref:u,refs:l,required:c,maxLength:d,minLength:f,min:y,max:m,pattern:h,validate:g,name:v,valueAsNumber:b,mount:p,disabled:_}=e._f;if(!p||_)return{};const D=l?l[0]:u,C=e=>{a&&D.reportValidity&&(D.setCustomValidity(J(e)?"":e||""),D.reportValidity())},E={},O=Y(u),T=t(u),U=O||T,B=(b||K(u))&&!u.value||""===r||Array.isArray(r)&&!r.length,L=P.bind(null,v,s,E),M=(e,t,r,s=w,a=F)=>{const i=e?t:r;E[v]={type:e?s:a,message:i,ref:u,...L(e?s:a,i)}};if(n?!Array.isArray(r)||!r.length:c&&(!U&&(B||i(r))||J(r)&&!r||T&&!re(l).isValid||O&&!ae(l).isValid)){const{value:e,message:t}=X(c)?{value:!!c,message:c}:ne(c);if(e&&(E[v]={type:x,message:t,ref:D,...L(x,t)},!s))return C(t),E}if(!(B||i(y)&&i(m))){let e,t;const a=ne(m),n=ne(y);if(i(r)||isNaN(r)){const s=u.valueAsDate||new Date(r),i=e=>new Date((new Date).toDateString()+" "+e),o="time"==u.type,l="week"==u.type;N(a.value)&&r&&(e=o?i(r)>i(a.value):l?r>a.value:s>new Date(a.value)),N(n.value)&&r&&(t=o?i(r)<i(n.value):l?r<n.value:s<new Date(n.value))}else{const s=u.valueAsNumber||(r?+r:r);i(a.value)||(e=s>a.value),i(n.value)||(t=s<n.value)}if((e||t)&&(M(!!e,a.message,n.message,V,A),!s))return C(E[v].message),E}if((d||f)&&!B&&(N(r)||n&&Array.isArray(r))){const e=ne(d),t=ne(f),a=!i(e.value)&&r.length>e.value,n=!i(t.value)&&r.length<t.value;if((a||n)&&(M(a,e.message,t.message),!s))return C(E[v].message),E}if(h&&!B&&N(r)){const{value:e,message:t}=ne(h);if(Z(e)&&!r.match(e)&&(E[v]={type:S,message:t,ref:u,...L(S,t)},!s))return C(t),E}if(g)if(Q(g)){const e=ie(await g(r),D);if(e&&(E[v]={...e,...L(k,e.message)},!s))return C(e.message),E}else if(o(g)){let e={};for(const t in g){if(!j(e)&&!s)break;const a=ie(await g[t](r),D,t);a&&(e={...a,...L(t,a.message)},C(a.message),s&&(E[v]=e))}if(!j(e)&&(E[v]={ref:D,...e},!s))return E}return C(!0),E},ue=e=>({isOnSubmit:!e||e===b,isOnBlur:e===g,isOnChange:e===v,isOnAll:e===_,isOnTouch:e===p});function le(e){for(const t in e)if(!d(e[t]))return!1;return!0}function ce(e,t){const r=W(t)?[t]:$(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=d(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let i;s&&delete s[a];for(let n=0;n<r.slice(0,-1).length;n++){let t,s=-1;const a=r.slice(0,-(n+1)),u=a.length-1;for(n>0&&(i=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],u===s&&(o(t)&&j(t)||Array.isArray(t)&&le(t))&&(i?delete i[r]:delete e[r]),i=t}}return e}function de(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var fe=e=>i(e)||!n(e);function ye(e,t){if(fe(e)||fe(t))return e===t;if(a(e)&&a(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const i of r){const r=e[i];if(!s.includes(i))return!1;if("ref"!==i){const e=t[i];if(a(r)&&a(e)||o(r)&&o(e)||Array.isArray(r)&&Array.isArray(e)?!ye(r,e):r!==e)return!1}}return!0}var me=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},he=e=>"select-multiple"===e.type,ge=e=>me(e)&&e.isConnected,ve=e=>{for(const t in e)if(Q(e[t]))return!0;return!1};function be(e,t={}){const r=Array.isArray(e);if(o(e)||r)for(const s in e)Array.isArray(e[s])||o(e[s])&&!ve(e[s])?(t[s]=Array.isArray(e[s])?[]:{},be(e[s],t[s])):i(e[s])||(t[s]=!0);return t}function pe(e,t,r){const s=Array.isArray(e);if(o(e)||s)for(const a in e)Array.isArray(e[a])||o(e[a])&&!ve(e[a])?d(t)||fe(r[a])?r[a]=Array.isArray(e[a])?be(e[a],[]):{...be(e[a])}:pe(e[a],i(t)?{}:t[a],r[a]):ye(e[a],t[a])?delete r[a]:r[a]=!0;return r}var _e=(e,t)=>pe(e,t,be(t)),Ve=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>d(e)?e:t?""===e?NaN:e?+e:e:r&&N(e)?new Date(e):s?s(e):e;function Ae(e){const r=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):r.disabled))return K(r)?r.files:Y(r)?ae(e.refs).value:he(r)?[...r.selectedOptions].map((({value:e})=>e)):t(r)?re(e.refs).value:Ve(d(r.value)?e.ref.value:r.value,e)}var we=e=>d(e)?e:Z(e)?e.source:o(e)?Z(e.value)?e.value.source:e.value:e;function Fe(e,t,r){const s=f(e,r);if(s||W(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=f(t,s),n=f(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}const Se={mode:b,reValidateMode:v,shouldFocusError:!0};function xe(e={}){let r,s={...Se,...e},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},h=q(s.defaultValues)||{},g=s.shouldUnregister?{}:q(h),v={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,V={};const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},w={watch:de(),array:de(),state:de()},F=ue(s.mode),S=ue(s.reValidateMode),x=s.criteriaMode===_,k=async()=>{let e=!1;return A.isValid&&(e=s.resolver?j((await O()).errors):await U(o,!0),e!==n.isValid&&(n.isValid=e,w.state.next({isValid:e}))),e},D=(e,t,r,s)=>{const a=f(o,e);if(a){const i=f(g,e,d(r)?f(h,e):r);d(i)||s&&s.defaultChecked||t?H(g,e,t?i:Ae(a._f)):P(e,i),v.mount&&k()}},C=(e,t,r,s,a)=>{let i=!1,o=!1;const u={name:e};if(A.isDirty&&(o=n.isDirty,n.isDirty=u.isDirty=B(),i=o!==u.isDirty),A.dirtyFields&&(!r||s)){o=f(n.dirtyFields,e);const r=ye(f(h,e),t);r?ce(n.dirtyFields,e):H(n.dirtyFields,e,!0),u.dirtyFields=n.dirtyFields,i=i||o!==!r}if(r){const t=f(n.touchedFields,e);t||(H(n.touchedFields,e,r),u.touchedFields=n.touchedFields,i=i||A.touchedFields&&t!==r)}return i&&a&&w.state.next(u),i?u:{}},E=(t,s,a,i)=>{const o=f(n.errors,t),u=A.isValid&&J(s)&&n.isValid!==s;var l;if(e.delayError&&a?(l=()=>((e,t)=>{H(n.errors,e,t),w.state.next({errors:n.errors})})(t,a),r=e=>{clearTimeout(p),p=window.setTimeout(l,e)},r(e.delayError)):(clearTimeout(p),r=null,a?H(n.errors,t,a):ce(n.errors,t)),(a?!ye(o,a):o)||!j(i)||u){const e={...i,...u&&J(s)?{isValid:s}:{},errors:n.errors,name:t};n={...n,...e},w.state.next(e)}V[t]--,A.isValidating&&!Object.values(V).some((e=>e))&&(w.state.next({isValidating:!1}),V={})},O=async e=>s.resolver?await s.resolver({...g},s.context,((e,t,r,s)=>{const a={};for(const i of e){const e=f(t,i);e&&H(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||b.mount,o,s.criteriaMode,s.shouldUseNativeValidation)):{},U=async(e,t,r={valid:!0})=>{for(const a in e){const i=e[a];if(i){const{_f:e,...a}=i;if(e){const a=b.array.has(e.name),o=await oe(i,f(g,e.name),x,s.shouldUseNativeValidation,a);if(o[e.name]&&(r.valid=!1,t))break;!t&&(f(o,e.name)?a?G(n.errors,o,e.name):H(n.errors,e.name,o[e.name]):ce(n.errors,e.name))}a&&await U(a,t,r)}}return r.valid},B=(e,t)=>(e&&t&&H(g,e,t),!ye(ee(),h)),L=(e,t,r)=>M(e,b,{...v.mount?g:d(t)?h:N(e)?{[e]:t}:t},r),P=(e,r,s={})=>{const a=f(o,e);let n=r;if(a){const s=a._f;s&&(!s.disabled&&H(g,e,Ve(r,s)),n=R&&me(s.ref)&&i(r)?"":r,he(s.ref)?[...s.ref.options].forEach((e=>e.selected=n.includes(e.value))):s.refs?t(s.ref)?s.refs.length>1?s.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):s.refs[0]&&(s.refs[0].checked=!!n):s.refs.forEach((e=>e.checked=e.value===n)):K(s.ref)?s.ref.value="":(s.ref.value=n,s.ref.type||w.watch.next({name:e})))}(s.shouldDirty||s.shouldTouch)&&C(e,n,s.shouldTouch,s.shouldDirty,!0),s.shouldValidate&&Z(e)},W=(e,t,r)=>{for(const s in t){const i=t[s],n=`${e}.${s}`,u=f(o,n);!b.array.has(e)&&fe(i)&&(!u||u._f)||a(i)?P(n,i,r):W(n,i,r)}},$=(e,t,r={})=>{const s=f(o,e),a=b.array.has(e),u=q(t);H(g,e,u),a?(w.array.next({name:e,values:g}),(A.isDirty||A.dirtyFields)&&r.shouldDirty&&(n.dirtyFields=_e(h,g),w.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:B(e,u)}))):!s||s._f||i(u)?P(e,u,r):W(e,u,r),z(e,b)&&w.state.next({}),w.watch.next({name:e})},X=async e=>{const t=e.target;let a=t.name;const i=f(o,a);if(i){let c,d;const h=t.type?Ae(i._f):u(e),v=e.type===y||e.type===m,p=!((l=i._f).mount&&(l.required||l.min||l.max||l.maxLength||l.minLength||l.pattern||l.validate)||s.resolver||f(n.errors,a)||i._f.deps)||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(v,f(n.touchedFields,a),n.isSubmitted,S,F),_=z(a,b,v);H(g,a,h),v?(i._f.onBlur&&i._f.onBlur(e),r&&r(0)):i._f.onChange&&i._f.onChange(e);const D=C(a,h,v,!1),T=!j(D)||_;if(!v&&w.watch.next({name:a,type:e.type}),p)return A.isValid&&k(),T&&w.state.next({name:a,..._?{}:D});if(!v&&_&&w.state.next({}),V[a]=V[a]?V[a]+1:1,w.state.next({isValidating:!0}),s.resolver){const{errors:e}=await O([a]),t=Fe(n.errors,o,a),r=Fe(e,o,t.name||a);c=r.error,a=r.name,d=j(e)}else c=(await oe(i,f(g,a),x,s.shouldUseNativeValidation))[a],k();i._f.deps&&Z(i._f.deps),E(a,d,c,D)}var l},Z=async(e,t={})=>{let r,a;const i=T(e);if(w.state.next({isValidating:!0}),s.resolver){const t=await(async e=>{const{errors:t}=await O();if(e)for(const r of e){const e=f(t,r);e?H(n.errors,r,e):ce(n.errors,r)}else n.errors=t;return t})(d(e)?e:i);r=j(t),a=e?!i.some((e=>f(t,e))):r}else e?(a=(await Promise.all(i.map((async e=>{const t=f(o,e);return await U(t&&t._f?{[e]:t}:t)})))).every(Boolean),(a||n.isValid)&&k()):a=r=await U(o);return w.state.next({...!N(e)||A.isValid&&r!==n.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:n.errors,isValidating:!1}),t.shouldFocus&&!a&&I(o,(e=>e&&f(n.errors,e)),e?i:b.mount),a},ee=e=>{const t={...h,...v.mount?g:{}};return d(e)?t:N(e)?f(t,e):e.map((e=>f(t,e)))},te=(e,t)=>({invalid:!!f((t||n).errors,e),isDirty:!!f((t||n).dirtyFields,e),isTouched:!!f((t||n).touchedFields,e),error:f((t||n).errors,e)}),re=(e,t={})=>{for(const r of e?T(e):b.mount)b.mount.delete(r),b.array.delete(r),f(o,r)&&(t.keepValue||(ce(o,r),ce(g,r)),!t.keepError&&ce(n.errors,r),!t.keepDirty&&ce(n.dirtyFields,r),!t.keepTouched&&ce(n.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&ce(h,r));w.watch.next({}),w.state.next({...n,...t.keepDirty?{isDirty:B()}:{}}),!t.keepIsValid&&k()},se=(e,r={})=>{let a=f(o,e);const i=J(r.disabled);return H(o,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...r}}),b.mount.add(e),a?i&&H(g,e,r.disabled?void 0:f(g,e,Ae(a._f))):D(e,!0,r.value),{...i?{disabled:r.disabled}:{},...s.shouldUseNativeValidation?{required:!!r.required,min:we(r.min),max:we(r.max),minLength:we(r.minLength),maxLength:we(r.maxLength),pattern:we(r.pattern)}:{},name:e,onChange:X,onBlur:X,ref:i=>{if(i){se(e,r),a=f(o,e);const s=d(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,n=(e=>Y(e)||t(e))(s),u=a._f.refs||[];if(n?u.find((e=>e===s)):s===a._f.ref)return;H(o,e,{_f:{...a._f,...n?{refs:[...u.filter(ge),s,...Array.isArray(f(h,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),D(e,!1,void 0,s)}else a=f(o,e,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||r.shouldUnregister)&&(!l(b.array,e)||!v.action)&&b.unMount.add(e)}}},ae=()=>s.shouldFocusError&&I(o,(e=>e&&f(n.errors,e)),b.mount);return{control:{register:se,unregister:re,getFieldState:te,_executeSchema:O,_focusError:ae,_getWatch:L,_getDirty:B,_updateValid:k,_removeUnmounted:()=>{for(const e of b.unMount){const t=f(o,e);t&&(t._f.refs?t._f.refs.every((e=>!ge(e))):!ge(t._f.ref))&&re(e)}b.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(v.action=!0,i&&Array.isArray(f(o,e))){const t=r(f(o,e),s.argA,s.argB);a&&H(o,e,t)}if(i&&Array.isArray(f(n.errors,e))){const t=r(f(n.errors,e),s.argA,s.argB);a&&H(n.errors,e,t),((e,t)=>{!c(f(e,t)).length&&ce(e,t)})(n.errors,e)}if(A.touchedFields&&i&&Array.isArray(f(n.touchedFields,e))){const t=r(f(n.touchedFields,e),s.argA,s.argB);a&&H(n.touchedFields,e,t)}A.dirtyFields&&(n.dirtyFields=_e(h,g)),w.state.next({isDirty:B(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else H(g,e,t)},_getFieldArray:t=>c(f(v.mount?g:h,t,e.shouldUnregister?f(h,t,[]):[])),_subjects:w,_proxyFormState:A,get _fields(){return o},get _formValues(){return g},get _stateFlags(){return v},set _stateFlags(e){v=e},get _defaultValues(){return h},get _names(){return b},set _names(e){b=e},get _formState(){return n},set _formState(e){n=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:Z,register:se,handleSubmit:(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=!0,i=q(g);w.state.next({isSubmitting:!0});try{if(s.resolver){const{errors:e,values:t}=await O();n.errors=e,i=t}else await U(o);j(n.errors)?(w.state.next({errors:{},isSubmitting:!0}),await e(i,r)):(t&&await t({...n.errors},r),ae())}catch(u){throw a=!1,u}finally{n.isSubmitted=!0,w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:j(n.errors)&&a,submitCount:n.submitCount+1,errors:n.errors})}},watch:(e,t)=>Q(e)?w.watch.subscribe({next:r=>e(L(void 0,t),r)}):L(e,t,!0),setValue:$,getValues:ee,reset:(t,r)=>((t,r={})=>{const s=t||h,a=q(s),i=t&&!j(t)?a:h;if(r.keepDefaultValues||(h=s),!r.keepValues){if(r.keepDirtyValues)for(const e of b.mount)f(n.dirtyFields,e)?H(i,e,f(g,e)):$(e,f(i,e));else{if(R&&d(t))for(const e of b.mount){const t=f(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(me(e)){const t=e.closest("form");if(t){t.reset();break}}}}o={}}g=e.shouldUnregister?r.keepDefaultValues?q(h):{}:a,w.array.next({values:i}),w.watch.next({values:i})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},v.mount=!A.isValid||!!r.keepIsValid,v.watch=!!e.shouldUnregister,w.state.next({submitCount:r.keepSubmitCount?n.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?n.isDirty:!(!r.keepDefaultValues||ye(t,h)),isSubmitted:!!r.keepIsSubmitted&&n.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?n.dirtyFields:r.keepDefaultValues&&t?_e(h,t):{},touchedFields:r.keepTouched?n.touchedFields:{},errors:r.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(Q(t)?t(g):t,r),resetField:(e,t={})=>{f(o,e)&&(d(t.defaultValue)?$(e,f(h,e)):($(e,t.defaultValue),H(h,e,t.defaultValue)),t.keepTouched||ce(n.touchedFields,e),t.keepDirty||(ce(n.dirtyFields,e),n.isDirty=t.defaultValue?B(e,f(h,e)):B()),t.keepError||(ce(n.errors,e),A.isValid&&k()),w.state.next({...n}))},clearErrors:e=>{e?T(e).forEach((e=>ce(n.errors,e))):n.errors={},w.state.next({errors:n.errors})},unregister:re,setError:(e,t,r)=>{const s=(f(o,e,{_f:{}})._f||{}).ref;H(n.errors,e,{...t,ref:s}),w.state.next({name:e,errors:n.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},setFocus:(e,t={})=>{const r=f(o,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:te}}}}}));

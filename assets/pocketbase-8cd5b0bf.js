var k=function(s,i){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},k(s,i)};function p(s,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function t(){this.constructor=s}k(s,i),s.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var E=function(){return E=Object.assign||function(i){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=t[o]);return i},E.apply(this,arguments)};function f(s,i,t,e){return new(t||(t=Promise))(function(n,o){function r(l){try{c(e.next(l))}catch(d){o(d)}}function a(l){try{c(e.throw(l))}catch(d){o(d)}}function c(l){l.done?n(l.value):function(u){return u instanceof t?u:new t(function(h){h(u)})}(l.value).then(r,a)}c((e=e.apply(s,i||[])).next())})}function v(s,i){var t,e,n,o,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,e&&(n=2&u[0]?e.return:u[0]?e.throw||((n=e.return)&&n.call(e),0):e.next)&&!(n=n.call(e,u[1])).done)return n;switch(e=0,n&&(u=[2&u[0],n.value]),u[0]){case 0:case 1:n=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,e=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!((n=n.length>0&&n[n.length-1])||u[0]!==6&&u[0]!==2)){r=0;continue}if(u[0]===3&&(!n||u[1]>n[0]&&u[1]<n[3])){r.label=u[1];break}if(u[0]===6&&r.label<n[1]){r.label=n[1],n=u;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(u);break}n[2]&&r.ops.pop(),r.trys.pop();continue}u=i.call(s,r)}catch(h){u=[6,h],e=0}finally{t=n=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([c,l])}}}var N,S=function(s){function i(t){var e,n,o,r,a=this;return(a=s.call(this,"ClientResponseError")||this).url="",a.status=0,a.data={},a.isAbort=!1,a.originalError=null,Object.setPrototypeOf(a,i.prototype),t instanceof i||(a.originalError=t),t!==null&&typeof t=="object"&&(a.url=typeof t.url=="string"?t.url:"",a.status=typeof t.status=="number"?t.status:0,a.data=t.data!==null&&typeof t.data=="object"?t.data:{}),typeof DOMException<"u"&&t instanceof DOMException&&(a.isAbort=!0),a.name="ClientResponseError "+a.status,a.message=(e=a.data)===null||e===void 0?void 0:e.message,a.message||(a.isAbort?a.message="The request was autocancelled. More info you could find in https://github.com/pocketbase/js-sdk#auto-cancellation.":!((r=(o=(n=a.originalError)===null||n===void 0?void 0:n.cause)===null||o===void 0?void 0:o.message)===null||r===void 0)&&r.includes("ECONNREFUSED ::1")?a.message="Failed to connect to the PocketBase server. Try replacing the SDK url from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":a.message="Something went wrong while processing your request."),a}return p(i,s),i.prototype.toJSON=function(){return E({},this)},i}(Error),P=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function A(s,i,t){var e=Object.assign({},t||{}),n=e.encode||D;if(!P.test(s))throw new TypeError("argument name is invalid");var o=n(i);if(o&&!P.test(o))throw new TypeError("argument val is invalid");var r=s+"="+o;if(e.maxAge!=null){var a=e.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(a)}if(e.domain){if(!P.test(e.domain))throw new TypeError("option domain is invalid");r+="; Domain="+e.domain}if(e.path){if(!P.test(e.path))throw new TypeError("option path is invalid");r+="; Path="+e.path}if(e.expires){if(!function(l){return Object.prototype.toString.call(l)==="[object Date]"||l instanceof Date}(e.expires)||isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(r+="; HttpOnly"),e.secure&&(r+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r}function F(s){return s.indexOf("%")!==-1?decodeURIComponent(s):s}function D(s){return encodeURIComponent(s)}function _(s){if(s)try{var i=decodeURIComponent(N(s.split(".")[1]).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)||{}}catch(t){}return{}}N=typeof atob=="function"?atob:function(s){var i=String(s).replace(/=+$/,"");if(i.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,e,n=0,o=0,r="";e=i.charAt(o++);~e&&(t=n%4?64*t+e:e,n++%4)?r+=String.fromCharCode(255&t>>(-2*n&6)):0)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);return r};var C=function(){function s(i){i===void 0&&(i={}),this.load(i||{})}return s.prototype.load=function(i){for(var t=0,e=Object.entries(i);t<e.length;t++){var n=e[t],o=n[0],r=n[1];this[o]=r}this.id=i.id!==void 0?i.id:"",this.created=i.created!==void 0?i.created:"",this.updated=i.updated!==void 0?i.updated:""},Object.defineProperty(s.prototype,"isNew",{get:function(){return!this.id},enumerable:!1,configurable:!0}),s.prototype.clone=function(){var i=typeof structuredClone=="function"?structuredClone(this):JSON.parse(JSON.stringify(this));return new this.constructor(i)},s.prototype.export=function(){return Object.assign({},this)},s}(),I=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.load=function(t){s.prototype.load.call(this,t),this.collectionId=typeof t.collectionId=="string"?t.collectionId:"",this.collectionName=typeof t.collectionName=="string"?t.collectionName:"",this.loadExpand(t.expand)},i.prototype.loadExpand=function(t){for(var e in t=t||{},this.expand={},t)Array.isArray(t[e])?this.expand[e]=t[e].map(function(n){return new i(n||{})}):this.expand[e]=new i(t[e]||{})},i}(C),j=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.load=function(t){s.prototype.load.call(this,t),this.avatar=typeof t.avatar=="number"?t.avatar:0,this.email=typeof t.email=="string"?t.email:""},i}(C),G=function(){function s(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}return Object.defineProperty(s.prototype,"token",{get:function(){return this.baseToken},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"model",{get:function(){return this.baseModel},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"isValid",{get:function(){return!function(t,e){e===void 0&&(e=0);var n=_(t);return!(Object.keys(n).length>0&&(!n.exp||n.exp-e>Date.now()/1e3))}(this.token)},enumerable:!1,configurable:!0}),s.prototype.save=function(i,t){this.baseToken=i||"",this.baseModel=t!==null&&typeof t=="object"?t.collectionId!==void 0?new I(t):new j(t):null,this.triggerChange()},s.prototype.clear=function(){this.baseToken="",this.baseModel=null,this.triggerChange()},s.prototype.loadFromCookie=function(i,t){t===void 0&&(t="pb_auth");var e=function(r,a){var c={};if(typeof r!="string")return c;for(var l=Object.assign({},a||{}).decode||F,d=0;d<r.length;){var u=r.indexOf("=",d);if(u===-1)break;var h=r.indexOf(";",d);if(h===-1)h=r.length;else if(h<u){d=r.lastIndexOf(";",u-1)+1;continue}var y=r.slice(d,u).trim();if(c[y]===void 0){var m=r.slice(u+1,h).trim();m.charCodeAt(0)===34&&(m=m.slice(1,-1));try{c[y]=l(m)}catch(T){c[y]=m}}d=h+1}return c}(i||"")[t]||"",n={};try{(typeof(n=JSON.parse(e))===null||typeof n!="object"||Array.isArray(n))&&(n={})}catch(o){}this.save(n.token||"",n.model||null)},s.prototype.exportToCookie=function(i,t){var e,n,o;t===void 0&&(t="pb_auth");var r={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},a=_(this.token);a!=null&&a.exp?r.expires=new Date(1e3*a.exp):r.expires=new Date("1970-01-01"),i=Object.assign({},r,i);var c={token:this.token,model:((e=this.model)===null||e===void 0?void 0:e.export())||null},l=A(t,JSON.stringify(c),i),d=typeof Blob<"u"?new Blob([l]).size:l.length;return c.model&&d>4096&&(c.model={id:(n=c==null?void 0:c.model)===null||n===void 0?void 0:n.id,email:(o=c==null?void 0:c.model)===null||o===void 0?void 0:o.email},this.model instanceof I&&(c.model.username=this.model.username,c.model.verified=this.model.verified,c.model.collectionId=this.model.collectionId),l=A(t,JSON.stringify(c),i)),l},s.prototype.onChange=function(i,t){var e=this;return t===void 0&&(t=!1),this._onChangeCallbacks.push(i),t&&i(this.token,this.model),function(){for(var n=e._onChangeCallbacks.length-1;n>=0;n--)if(e._onChangeCallbacks[n]==i)return delete e._onChangeCallbacks[n],void e._onChangeCallbacks.splice(n,1)}},s.prototype.triggerChange=function(){for(var i=0,t=this._onChangeCallbacks;i<t.length;i++){var e=t[i];e&&e(this.token,this.model)}},s}(),M=function(s){function i(t){t===void 0&&(t="pocketbase_auth");var e=s.call(this)||this;return e.storageFallback={},e.storageKey=t,e}return p(i,s),Object.defineProperty(i.prototype,"token",{get:function(){return(this._storageGet(this.storageKey)||{}).token||""},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"model",{get:function(){var t,e=this._storageGet(this.storageKey)||{};return e===null||typeof e!="object"||e.model===null||typeof e.model!="object"?null:((t=e.model)===null||t===void 0?void 0:t.collectionId)===void 0?new j(e.model):new I(e.model)},enumerable:!1,configurable:!0}),i.prototype.save=function(t,e){this._storageSet(this.storageKey,{token:t,model:e}),s.prototype.save.call(this,t,e)},i.prototype.clear=function(){this._storageRemove(this.storageKey),s.prototype.clear.call(this)},i.prototype._storageGet=function(t){if(typeof window<"u"&&(window!=null&&window.localStorage)){var e=window.localStorage.getItem(t)||"";try{return JSON.parse(e)}catch(n){return e}}return this.storageFallback[t]},i.prototype._storageSet=function(t,e){if(typeof window<"u"&&(window!=null&&window.localStorage)){var n=e;typeof e!="string"&&(n=JSON.stringify(e)),window.localStorage.setItem(t,n)}else this.storageFallback[t]=e},i.prototype._storageRemove=function(t){var e;typeof window<"u"&&(window!=null&&window.localStorage)&&((e=window.localStorage)===null||e===void 0||e.removeItem(t)),delete this.storageFallback[t]},i}(G),O=function(i){this.client=i},B=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.getAll=function(t){return t===void 0&&(t={}),this.client.send("/api/settings",{method:"GET",params:t}).then(function(e){return e||{}})},i.prototype.update=function(t,e){return t===void 0&&(t={}),e===void 0&&(e={}),this.client.send("/api/settings",{method:"PATCH",params:e,body:t}).then(function(n){return n||{}})},i.prototype.testS3=function(t){return t===void 0&&(t={}),this.client.send("/api/settings/test/s3",{method:"POST",params:t}).then(function(){return!0})},i.prototype.testEmail=function(t,e,n){n===void 0&&(n={});var o={email:t,template:e};return this.client.send("/api/settings/test/email",{method:"POST",params:n,body:o}).then(function(){return!0})},i}(O),U=function(i,t,e,n,o){this.page=i>0?i:1,this.perPage=t>=0?t:0,this.totalItems=e>=0?e:0,this.totalPages=n>=0?n:0,this.items=o||[]},R=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.getFullList=function(t,e){return t===void 0&&(t=200),e===void 0&&(e={}),this._getFullList(this.baseCrudPath,t,e)},i.prototype.getList=function(t,e,n){return t===void 0&&(t=1),e===void 0&&(e=30),n===void 0&&(n={}),this._getList(this.baseCrudPath,t,e,n)},i.prototype.getFirstListItem=function(t,e){return e===void 0&&(e={}),this._getFirstListItem(this.baseCrudPath,t,e)},i.prototype.getOne=function(t,e){return e===void 0&&(e={}),this._getOne(this.baseCrudPath,t,e)},i.prototype.create=function(t,e){return t===void 0&&(t={}),e===void 0&&(e={}),this._create(this.baseCrudPath,t,e)},i.prototype.update=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),this._update(this.baseCrudPath,t,e,n)},i.prototype.delete=function(t,e){return e===void 0&&(e={}),this._delete(this.baseCrudPath,t,e)},i}(function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype._getFullList=function(t,e,n){var o=this;e===void 0&&(e=100),n===void 0&&(n={});var r=[],a=function(c){return f(o,void 0,void 0,function(){return v(this,function(l){return[2,this._getList(t,c,e,n).then(function(d){var u=d,h=u.items,y=u.totalItems;return r=r.concat(h),h.length&&y>r.length?a(c+1):r})]})})};return a(1)},i.prototype._getList=function(t,e,n,o){var r=this;return e===void 0&&(e=1),n===void 0&&(n=30),o===void 0&&(o={}),o=Object.assign({page:e,perPage:n},o),this.client.send(t,{method:"GET",params:o}).then(function(a){var c=[];if(a!=null&&a.items){a.items=a.items||[];for(var l=0,d=a.items;l<d.length;l++){var u=d[l];c.push(r.decode(u))}}return new U((a==null?void 0:a.page)||1,(a==null?void 0:a.perPage)||0,(a==null?void 0:a.totalItems)||0,(a==null?void 0:a.totalPages)||0,c)})},i.prototype._getOne=function(t,e,n){var o=this;return n===void 0&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"GET",params:n}).then(function(r){return o.decode(r)})},i.prototype._getFirstListItem=function(t,e,n){return n===void 0&&(n={}),n=Object.assign({filter:e,$cancelKey:"one_by_filter_"+t+"_"+e},n),this._getList(t,1,1,n).then(function(o){var r;if(!(!((r=o==null?void 0:o.items)===null||r===void 0)&&r.length))throw new S({status:404,data:{code:404,message:"The requested resource wasn't found.",data:{}}});return o.items[0]})},i.prototype._create=function(t,e,n){var o=this;return e===void 0&&(e={}),n===void 0&&(n={}),this.client.send(t,{method:"POST",params:n,body:e}).then(function(r){return o.decode(r)})},i.prototype._update=function(t,e,n,o){var r=this;return n===void 0&&(n={}),o===void 0&&(o={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"PATCH",params:o,body:n}).then(function(a){return r.decode(a)})},i.prototype._delete=function(t,e,n){return n===void 0&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"DELETE",params:n}).then(function(){return!0})},i}(O)),J=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.decode=function(t){return new j(t)},Object.defineProperty(i.prototype,"baseCrudPath",{get:function(){return"/api/admins"},enumerable:!1,configurable:!0}),i.prototype.update=function(t,e,n){var o=this;return e===void 0&&(e={}),n===void 0&&(n={}),s.prototype.update.call(this,t,e,n).then(function(r){var a,c;return o.client.authStore.model&&((a=o.client.authStore.model)===null||a===void 0?void 0:a.collectionId)===void 0&&((c=o.client.authStore.model)===null||c===void 0?void 0:c.id)===(r==null?void 0:r.id)&&o.client.authStore.save(o.client.authStore.token,r),r})},i.prototype.delete=function(t,e){var n=this;return e===void 0&&(e={}),s.prototype.delete.call(this,t,e).then(function(o){var r,a;return o&&n.client.authStore.model&&((r=n.client.authStore.model)===null||r===void 0?void 0:r.collectionId)===void 0&&((a=n.client.authStore.model)===null||a===void 0?void 0:a.id)===t&&n.client.authStore.clear(),o})},i.prototype.authResponse=function(t){var e=this.decode((t==null?void 0:t.admin)||{});return t!=null&&t.token&&(t!=null&&t.admin)&&this.client.authStore.save(t.token,e),Object.assign({},t,{token:(t==null?void 0:t.token)||"",admin:e})},i.prototype.authWithPassword=function(t,e,n,o){return n===void 0&&(n={}),o===void 0&&(o={}),n=Object.assign({identity:t,password:e},n),this.client.send(this.baseCrudPath+"/auth-with-password",{method:"POST",params:o,body:n}).then(this.authResponse.bind(this))},i.prototype.authRefresh=function(t,e){return t===void 0&&(t={}),e===void 0&&(e={}),this.client.send(this.baseCrudPath+"/auth-refresh",{method:"POST",params:e,body:t}).then(this.authResponse.bind(this))},i.prototype.requestPasswordReset=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath+"/request-password-reset",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmPasswordReset=function(t,e,n,o,r){return o===void 0&&(o={}),r===void 0&&(r={}),o=Object.assign({token:t,password:e,passwordConfirm:n},o),this.client.send(this.baseCrudPath+"/confirm-password-reset",{method:"POST",params:r,body:o}).then(function(){return!0})},i}(R),K=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.load=function(t){s.prototype.load.call(this,t),this.recordId=typeof t.recordId=="string"?t.recordId:"",this.collectionId=typeof t.collectionId=="string"?t.collectionId:"",this.provider=typeof t.provider=="string"?t.provider:"",this.providerId=typeof t.providerId=="string"?t.providerId:""},i}(C),H=function(s){function i(t,e){var n=s.call(this,t)||this;return n.collectionIdOrName=e,n}return p(i,s),i.prototype.decode=function(t){return new I(t)},Object.defineProperty(i.prototype,"baseCrudPath",{get:function(){return this.baseCollectionPath+"/records"},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"baseCollectionPath",{get:function(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)},enumerable:!1,configurable:!0}),i.prototype.subscribeOne=function(t,e){return f(this,void 0,void 0,function(){return v(this,function(n){return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."),[2,this.client.realtime.subscribe(this.collectionIdOrName+"/"+t,e)]})})},i.prototype.subscribe=function(t,e){return f(this,void 0,void 0,function(){var n;return v(this,function(o){if(typeof t=="function")return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."),[2,this.client.realtime.subscribe(this.collectionIdOrName,t)];if(!e)throw new Error("Missing subscription callback.");if(t==="")throw new Error("Missing topic.");return n=this.collectionIdOrName,t!=="*"&&(n+="/"+t),[2,this.client.realtime.subscribe(n,e)]})})},i.prototype.unsubscribe=function(t){return f(this,void 0,void 0,function(){return v(this,function(e){return t==="*"?[2,this.client.realtime.unsubscribe(this.collectionIdOrName)]:t?[2,this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+t)]:[2,this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)]})})},i.prototype.getFullList=function(t,e){return t===void 0&&(t=200),e===void 0&&(e={}),s.prototype.getFullList.call(this,t,e)},i.prototype.getList=function(t,e,n){return t===void 0&&(t=1),e===void 0&&(e=30),n===void 0&&(n={}),s.prototype.getList.call(this,t,e,n)},i.prototype.getFirstListItem=function(t,e){return e===void 0&&(e={}),s.prototype.getFirstListItem.call(this,t,e)},i.prototype.getOne=function(t,e){return e===void 0&&(e={}),s.prototype.getOne.call(this,t,e)},i.prototype.create=function(t,e){return t===void 0&&(t={}),e===void 0&&(e={}),s.prototype.create.call(this,t,e)},i.prototype.update=function(t,e,n){var o=this;return e===void 0&&(e={}),n===void 0&&(n={}),s.prototype.update.call(this,t,e,n).then(function(r){var a,c,l;return((a=o.client.authStore.model)===null||a===void 0?void 0:a.id)!==(r==null?void 0:r.id)||((c=o.client.authStore.model)===null||c===void 0?void 0:c.collectionId)!==o.collectionIdOrName&&((l=o.client.authStore.model)===null||l===void 0?void 0:l.collectionName)!==o.collectionIdOrName||o.client.authStore.save(o.client.authStore.token,r),r})},i.prototype.delete=function(t,e){var n=this;return e===void 0&&(e={}),s.prototype.delete.call(this,t,e).then(function(o){var r,a,c;return!o||((r=n.client.authStore.model)===null||r===void 0?void 0:r.id)!==t||((a=n.client.authStore.model)===null||a===void 0?void 0:a.collectionId)!==n.collectionIdOrName&&((c=n.client.authStore.model)===null||c===void 0?void 0:c.collectionName)!==n.collectionIdOrName||n.client.authStore.clear(),o})},i.prototype.authResponse=function(t){var e=this.decode((t==null?void 0:t.record)||{});return this.client.authStore.save(t==null?void 0:t.token,e),Object.assign({},t,{token:(t==null?void 0:t.token)||"",record:e})},i.prototype.listAuthMethods=function(t){return t===void 0&&(t={}),this.client.send(this.baseCollectionPath+"/auth-methods",{method:"GET",params:t}).then(function(e){return Object.assign({},e,{usernamePassword:!!(e!=null&&e.usernamePassword),emailPassword:!!(e!=null&&e.emailPassword),authProviders:Array.isArray(e==null?void 0:e.authProviders)?e==null?void 0:e.authProviders:[]})})},i.prototype.authWithPassword=function(t,e,n,o){var r=this;return n===void 0&&(n={}),o===void 0&&(o={}),n=Object.assign({identity:t,password:e},n),this.client.send(this.baseCollectionPath+"/auth-with-password",{method:"POST",params:o,body:n}).then(function(a){return r.authResponse(a)})},i.prototype.authWithOAuth2=function(t,e,n,o,r,a,c){var l=this;return r===void 0&&(r={}),a===void 0&&(a={}),c===void 0&&(c={}),a=Object.assign({provider:t,code:e,codeVerifier:n,redirectUrl:o,createData:r},a),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",{method:"POST",params:c,body:a}).then(function(d){return l.authResponse(d)})},i.prototype.authRefresh=function(t,e){var n=this;return t===void 0&&(t={}),e===void 0&&(e={}),this.client.send(this.baseCollectionPath+"/auth-refresh",{method:"POST",params:e,body:t}).then(function(o){return n.authResponse(o)})},i.prototype.requestPasswordReset=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCollectionPath+"/request-password-reset",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmPasswordReset=function(t,e,n,o,r){return o===void 0&&(o={}),r===void 0&&(r={}),o=Object.assign({token:t,password:e,passwordConfirm:n},o),this.client.send(this.baseCollectionPath+"/confirm-password-reset",{method:"POST",params:r,body:o}).then(function(){return!0})},i.prototype.requestVerification=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCollectionPath+"/request-verification",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmVerification=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({token:t},e),this.client.send(this.baseCollectionPath+"/confirm-verification",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.requestEmailChange=function(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),e=Object.assign({newEmail:t},e),this.client.send(this.baseCollectionPath+"/request-email-change",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmEmailChange=function(t,e,n,o){return n===void 0&&(n={}),o===void 0&&(o={}),n=Object.assign({token:t,password:e},n),this.client.send(this.baseCollectionPath+"/confirm-email-change",{method:"POST",params:o,body:n}).then(function(){return!0})},i.prototype.listExternalAuths=function(t,e){return e===void 0&&(e={}),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(t)+"/external-auths",{method:"GET",params:e}).then(function(n){var o=[];if(Array.isArray(n))for(var r=0,a=n;r<a.length;r++){var c=a[r];o.push(new K(c))}return o})},i.prototype.unlinkExternalAuth=function(t,e,n){return n===void 0&&(n={}),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(t)+"/external-auths/"+encodeURIComponent(e),{method:"DELETE",params:n}).then(function(){return!0})},i}(R),V=function(){function s(i){i===void 0&&(i={}),this.load(i||{})}return s.prototype.load=function(i){this.id=i.id!==void 0?i.id:"",this.name=i.name!==void 0?i.name:"",this.type=i.type!==void 0?i.type:"text",this.system=!!i.system,this.required=!!i.required,this.unique=!!i.unique,this.options=typeof i.options=="object"&&i.options!==null?i.options:{}},s}(),$=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.load=function(t){s.prototype.load.call(this,t),this.system=!!t.system,this.name=typeof t.name=="string"?t.name:"",this.type=typeof t.type=="string"?t.type:"base",this.options=t.options!==void 0?t.options:{},this.listRule=typeof t.listRule=="string"?t.listRule:null,this.viewRule=typeof t.viewRule=="string"?t.viewRule:null,this.createRule=typeof t.createRule=="string"?t.createRule:null,this.updateRule=typeof t.updateRule=="string"?t.updateRule:null,this.deleteRule=typeof t.deleteRule=="string"?t.deleteRule:null,t.schema=Array.isArray(t.schema)?t.schema:[],this.schema=[];for(var e=0,n=t.schema;e<n.length;e++){var o=n[e];this.schema.push(new V(o))}},Object.defineProperty(i.prototype,"isBase",{get:function(){return this.type==="base"},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isAuth",{get:function(){return this.type==="auth"},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"isSingle",{get:function(){return this.type==="single"},enumerable:!1,configurable:!0}),i}(C),z=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.decode=function(t){return new $(t)},Object.defineProperty(i.prototype,"baseCrudPath",{get:function(){return"/api/collections"},enumerable:!1,configurable:!0}),i.prototype.import=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n={}),f(this,void 0,void 0,function(){return v(this,function(o){return[2,this.client.send(this.baseCrudPath+"/import",{method:"PUT",params:n,body:{collections:t,deleteMissing:e}}).then(function(){return!0})]})})},i}(R),x=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.load=function(t){s.prototype.load.call(this,t),t.remoteIp=t.remoteIp||t.ip,this.url=typeof t.url=="string"?t.url:"",this.method=typeof t.method=="string"?t.method:"GET",this.status=typeof t.status=="number"?t.status:200,this.auth=typeof t.auth=="string"?t.auth:"guest",this.remoteIp=typeof t.remoteIp=="string"?t.remoteIp:"",this.userIp=typeof t.userIp=="string"?t.userIp:"",this.referer=typeof t.referer=="string"?t.referer:"",this.userAgent=typeof t.userAgent=="string"?t.userAgent:"",this.meta=typeof t.meta=="object"&&t.meta!==null?t.meta:{}},i}(C),W=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.getRequestsList=function(t,e,n){return t===void 0&&(t=1),e===void 0&&(e=30),n===void 0&&(n={}),n=Object.assign({page:t,perPage:e},n),this.client.send("/api/logs/requests",{method:"GET",params:n}).then(function(o){var r=[];if(o!=null&&o.items){o.items=(o==null?void 0:o.items)||[];for(var a=0,c=o.items;a<c.length;a++){var l=c[a];r.push(new x(l))}}return new U((o==null?void 0:o.page)||1,(o==null?void 0:o.perPage)||0,(o==null?void 0:o.totalItems)||0,(o==null?void 0:o.totalPages)||0,r)})},i.prototype.getRequest=function(t,e){return e===void 0&&(e={}),this.client.send("/api/logs/requests/"+encodeURIComponent(t),{method:"GET",params:e}).then(function(n){return new x(n)})},i.prototype.getRequestsStats=function(t){return t===void 0&&(t={}),this.client.send("/api/logs/requests/stats",{method:"GET",params:t}).then(function(e){return e})},i}(O),Q=function(s){function i(){var t=s!==null&&s.apply(this,arguments)||this;return t.clientId="",t.eventSource=null,t.subscriptions={},t.lastSentTopics=[],t.maxConnectTimeout=15e3,t.reconnectAttempts=0,t.maxReconnectAttempts=1/0,t.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],t.pendingConnects=[],t}return p(i,s),Object.defineProperty(i.prototype,"isConnected",{get:function(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length},enumerable:!1,configurable:!0}),i.prototype.subscribe=function(t,e){var n;return f(this,void 0,void 0,function(){var o,r=this;return v(this,function(a){switch(a.label){case 0:if(!t)throw new Error("topic must be set.");return o=function(c){var l,d=c;try{l=JSON.parse(d==null?void 0:d.data)}catch(u){}e(l||{})},this.subscriptions[t]||(this.subscriptions[t]=[]),this.subscriptions[t].push(o),this.isConnected?[3,2]:[4,this.connect()];case 1:return a.sent(),[3,5];case 2:return this.subscriptions[t].length!==1?[3,4]:[4,this.submitSubscriptions()];case 3:return a.sent(),[3,5];case 4:(n=this.eventSource)===null||n===void 0||n.addEventListener(t,o),a.label=5;case 5:return[2,function(){return f(r,void 0,void 0,function(){return v(this,function(c){return[2,this.unsubscribeByTopicAndListener(t,o)]})})}]}})})},i.prototype.unsubscribe=function(t){var e;return f(this,void 0,void 0,function(){var n,o,r;return v(this,function(a){switch(a.label){case 0:if(!this.hasSubscriptionListeners(t))return[2];if(t){for(n=0,o=this.subscriptions[t];n<o.length;n++)r=o[n],(e=this.eventSource)===null||e===void 0||e.removeEventListener(t,r);delete this.subscriptions[t]}else this.subscriptions={};return this.hasSubscriptionListeners()?[3,1]:(this.disconnect(),[3,3]);case 1:return this.hasSubscriptionListeners(t)?[3,3]:[4,this.submitSubscriptions()];case 2:a.sent(),a.label=3;case 3:return[2]}})})},i.prototype.unsubscribeByPrefix=function(t){var e;return f(this,void 0,void 0,function(){var n,o,r,a,c;return v(this,function(l){switch(l.label){case 0:for(o in n=!1,this.subscriptions)if(o.startsWith(t)){for(n=!0,r=0,a=this.subscriptions[o];r<a.length;r++)c=a[r],(e=this.eventSource)===null||e===void 0||e.removeEventListener(o,c);delete this.subscriptions[o]}return n?this.hasSubscriptionListeners()?[4,this.submitSubscriptions()]:[3,2]:[2];case 1:return l.sent(),[3,3];case 2:this.disconnect(),l.label=3;case 3:return[2]}})})},i.prototype.unsubscribeByTopicAndListener=function(t,e){var n;return f(this,void 0,void 0,function(){var o,r;return v(this,function(a){switch(a.label){case 0:if(!Array.isArray(this.subscriptions[t])||!this.subscriptions[t].length)return[2];for(o=!1,r=this.subscriptions[t].length-1;r>=0;r--)this.subscriptions[t][r]===e&&(o=!0,delete this.subscriptions[t][r],this.subscriptions[t].splice(r,1),(n=this.eventSource)===null||n===void 0||n.removeEventListener(t,e));return o?(this.subscriptions[t].length||delete this.subscriptions[t],this.hasSubscriptionListeners()?[3,1]:(this.disconnect(),[3,3])):[2];case 1:return this.hasSubscriptionListeners(t)?[3,3]:[4,this.submitSubscriptions()];case 2:a.sent(),a.label=3;case 3:return[2]}})})},i.prototype.hasSubscriptionListeners=function(t){var e,n;if(this.subscriptions=this.subscriptions||{},t)return!!(!((e=this.subscriptions[t])===null||e===void 0)&&e.length);for(var o in this.subscriptions)if(!((n=this.subscriptions[o])===null||n===void 0)&&n.length)return!0;return!1},i.prototype.submitSubscriptions=function(){return f(this,void 0,void 0,function(){return v(this,function(t){return this.clientId?(this.addAllSubscriptionListeners(),this.lastSentTopics=this.getNonEmptySubscriptionTopics(),[2,this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentTopics},params:{$cancelKey:"realtime_"+this.clientId}}).catch(function(e){if(!(e!=null&&e.isAbort))throw e})]):[2]})})},i.prototype.getNonEmptySubscriptionTopics=function(){var t=[];for(var e in this.subscriptions)this.subscriptions[e].length&&t.push(e);return t},i.prototype.addAllSubscriptionListeners=function(){if(this.eventSource)for(var t in this.removeAllSubscriptionListeners(),this.subscriptions)for(var e=0,n=this.subscriptions[t];e<n.length;e++){var o=n[e];this.eventSource.addEventListener(t,o)}},i.prototype.removeAllSubscriptionListeners=function(){if(this.eventSource)for(var t in this.subscriptions)for(var e=0,n=this.subscriptions[t];e<n.length;e++){var o=n[e];this.eventSource.removeEventListener(t,o)}},i.prototype.connect=function(){return f(this,void 0,void 0,function(){var t=this;return v(this,function(e){return this.reconnectAttempts>0?[2]:[2,new Promise(function(n,o){t.pendingConnects.push({resolve:n,reject:o}),t.pendingConnects.length>1||t.initConnect()})]})})},i.prototype.initConnect=function(){var t=this;this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout(function(){t.connectErrorHandler(new Error("EventSource connect took too long."))},this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.onerror=function(e){t.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",function(e){var n=e;t.clientId=n==null?void 0:n.lastEventId,t.submitSubscriptions().then(function(){return f(t,void 0,void 0,function(){var o;return v(this,function(r){switch(r.label){case 0:o=3,r.label=1;case 1:return this.hasUnsentSubscriptions()&&o>0?(o--,[4,this.submitSubscriptions()]):[3,3];case 2:return r.sent(),[3,1];case 3:return[2]}})})}).then(function(){for(var o=0,r=t.pendingConnects;o<r.length;o++)r[o].resolve();t.pendingConnects=[],t.reconnectAttempts=0,clearTimeout(t.reconnectTimeoutId),clearTimeout(t.connectTimeoutId)}).catch(function(o){t.clientId="",t.connectErrorHandler(o)})})},i.prototype.hasUnsentSubscriptions=function(){var t=this.getNonEmptySubscriptionTopics();if(t.length!=this.lastSentTopics.length)return!0;for(var e=0,n=t;e<n.length;e++){var o=n[e];if(!this.lastSentTopics.includes(o))return!0}return!1},i.prototype.connectErrorHandler=function(t){var e=this;if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(var n=0,o=this.pendingConnects;n<o.length;n++)o[n].reject(new S(t));this.disconnect()}else{this.disconnect(!0);var r=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout(function(){e.initConnect()},r)}},i.prototype.disconnect=function(t){var e;if(t===void 0&&(t=!1),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),(e=this.eventSource)===null||e===void 0||e.close(),this.eventSource=null,this.clientId="",!t){this.reconnectAttempts=0;for(var n=new S(new Error("Realtime disconnected.")),o=0,r=this.pendingConnects;o<r.length;o++)r[o].reject(n);this.pendingConnects=[]}},i}(O),X=function(s){function i(){return s!==null&&s.apply(this,arguments)||this}return p(i,s),i.prototype.check=function(t){return t===void 0&&(t={}),this.client.send("/api/health",{method:"GET",params:t})},i}(O),Y=function(){function s(i,t,e){i===void 0&&(i="/"),e===void 0&&(e="en-US"),this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseUrl=i,this.lang=e,this.authStore=t||new M,this.admins=new J(this),this.collections=new z(this),this.logs=new W(this),this.settings=new B(this),this.realtime=new Q(this),this.health=new X(this)}return s.prototype.collection=function(i){return this.recordServices[i]||(this.recordServices[i]=new H(this,i)),this.recordServices[i]},s.prototype.autoCancellation=function(i){return this.enableAutoCancellation=!!i,this},s.prototype.cancelRequest=function(i){return this.cancelControllers[i]&&(this.cancelControllers[i].abort(),delete this.cancelControllers[i]),this},s.prototype.cancelAllRequests=function(){for(var i in this.cancelControllers)this.cancelControllers[i].abort();return this.cancelControllers={},this},s.prototype.send=function(i,t){var e,n,o,r,a,c,l,d;return f(this,void 0,void 0,function(){var u,h,y,m,T,q=this;return v(this,function(tt){return(u=Object.assign({method:"GET"},t)).body&&u.body.constructor.name!=="FormData"&&(typeof u.body!="string"&&(u.body=JSON.stringify(u.body)),((e=u==null?void 0:u.headers)===null||e===void 0?void 0:e["Content-Type"])===void 0&&(u.headers=Object.assign({},u.headers,{"Content-Type":"application/json"}))),((n=u==null?void 0:u.headers)===null||n===void 0?void 0:n["Accept-Language"])===void 0&&(u.headers=Object.assign({},u.headers,{"Accept-Language":this.lang})),!((o=this.authStore)===null||o===void 0)&&o.token&&((r=u==null?void 0:u.headers)===null||r===void 0?void 0:r.Authorization)===void 0&&(u.headers=Object.assign({},u.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&((a=u.params)===null||a===void 0?void 0:a.$autoCancel)!==!1&&(h=((c=u.params)===null||c===void 0?void 0:c.$cancelKey)||(u.method||"GET")+i,this.cancelRequest(h),y=new AbortController,this.cancelControllers[h]=y,u.signal=y.signal),(l=u.params)===null||l===void 0||delete l.$autoCancel,(d=u.params)===null||d===void 0||delete d.$cancelKey,m=this.buildUrl(i),u.params!==void 0&&((T=this.serializeQueryParams(u.params))&&(m+=(m.includes("?")?"&":"?")+T),delete u.params),this.beforeSend&&(u=Object.assign({},this.beforeSend(m,u))),[2,fetch(m,u).then(function(b){return f(q,void 0,void 0,function(){var g;return v(this,function(w){switch(w.label){case 0:g={},w.label=1;case 1:return w.trys.push([1,3,,4]),[4,b.json()];case 2:return g=w.sent(),[3,4];case 3:return w.sent(),[3,4];case 4:if(this.afterSend&&(g=this.afterSend(b,g)),b.status>=400)throw new S({url:b.url,status:b.status,data:g});return[2,g]}})})}).catch(function(b){throw new S(b)})]})})},s.prototype.getFileUrl=function(i,t,e){e===void 0&&(e={});var n=[];n.push("api"),n.push("files"),n.push(encodeURIComponent(i.collectionId||i.collectionName)),n.push(encodeURIComponent(i.id)),n.push(encodeURIComponent(t));var o=this.buildUrl(n.join("/"));if(Object.keys(e).length){var r=new URLSearchParams(e);o+=(o.includes("?")?"&":"?")+r}return o},s.prototype.buildUrl=function(i){var t=this.baseUrl+(this.baseUrl.endsWith("/")?"":"/");return i&&(t+=i.startsWith("/")?i.substring(1):i),t},s.prototype.serializeQueryParams=function(i){var t=[];for(var e in i)if(i[e]!==null){var n=i[e],o=encodeURIComponent(e);if(Array.isArray(n))for(var r=0,a=n;r<a.length;r++){var c=a[r];t.push(o+"="+encodeURIComponent(c))}else n instanceof Date?t.push(o+"="+encodeURIComponent(n.toISOString())):typeof n!==null&&typeof n=="object"?t.push(o+"="+encodeURIComponent(JSON.stringify(n))):t.push(o+"="+encodeURIComponent(n))}return t.join("&")},s}();const Z="https://db.voser.vn",L=new Y(Z),et=()=>{var i;return L.authStore.isValid?(i=L.authStore)==null?void 0:i.model:null};export{et as i,L as p,S as t};

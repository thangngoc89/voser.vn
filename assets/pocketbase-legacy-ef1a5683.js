System.register([],(function(t,e){"use strict";return{execute:function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)};function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var i=function(){return i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function o(t,e,n,i){return new(n||(n=Promise))((function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){t.done?o(t.value):function(t){return t instanceof n?t:new n((function(e){e(t)}))}(t.value).then(s,a)}u((i=i.apply(t,e||[])).next())}))}function r(t,e){var n,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}var s,a=t("t",function(t){function e(n){var i,o,r,s,a=this;return(a=t.call(this,"ClientResponseError")||this).url="",a.status=0,a.response={},a.isAbort=!1,a.originalError=null,Object.setPrototypeOf(a,e.prototype),n instanceof e||(a.originalError=n),null!==n&&"object"==typeof n&&(a.url="string"==typeof n.url?n.url:"",a.status="number"==typeof n.status?n.status:0,a.response=null!==n.data&&"object"==typeof n.data?n.data:{},a.isAbort=!!n.isAbort),"undefined"!=typeof DOMException&&n instanceof DOMException&&(a.isAbort=!0),a.name="ClientResponseError "+a.status,a.message=null===(i=a.response)||void 0===i?void 0:i.message,a.message||(a.isAbort?a.message="The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.":(null===(s=null===(r=null===(o=a.originalError)||void 0===o?void 0:o.cause)||void 0===r?void 0:r.message)||void 0===s?void 0:s.includes("ECONNREFUSED ::1"))?a.message="Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).":a.message="Something went wrong while processing your request."),a}return n(e,t),Object.defineProperty(e.prototype,"data",{get:function(){return this.response},enumerable:!1,configurable:!0}),e.prototype.toJSON=function(){return i({},this)},e}(Error)),u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function c(t,e,n){var i=Object.assign({},n||{}),o=i.encode||d;if(!u.test(t))throw new TypeError("argument name is invalid");var r=o(e);if(r&&!u.test(r))throw new TypeError("argument val is invalid");var s=t+"="+r;if(null!=i.maxAge){var a=i.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(i.domain){if(!u.test(i.domain))throw new TypeError("option domain is invalid");s+="; Domain="+i.domain}if(i.path){if(!u.test(i.path))throw new TypeError("option path is invalid");s+="; Path="+i.path}if(i.expires){if(!function(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}(i.expires)||isNaN(i.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.priority)switch("string"==typeof i.priority?i.priority.toLowerCase():i.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function l(t){return-1!==t.indexOf("%")?decodeURIComponent(t):t}function d(t){return encodeURIComponent(t)}function h(t){if(t)try{var e=decodeURIComponent(s(t.split(".")[1]).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(e)||{}}catch(s){}return{}}s="function"==typeof atob?atob:function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,i,o=0,r=0,s="";i=e.charAt(r++);~i&&(n=o%4?64*n+i:i,o++%4)?s+=String.fromCharCode(255&n>>(-2*o&6)):0)i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);return s};var p=function(){function t(t){void 0===t&&(t={}),this.load(t||{})}return t.prototype.load=function(t){for(var e=0,n=Object.entries(t);e<n.length;e++){var i=n[e],o=i[0],r=i[1];this[o]=r}this.id=void 0!==t.id?t.id:"",this.created=void 0!==t.created?t.created:"",this.updated=void 0!==t.updated?t.updated:""},Object.defineProperty(t.prototype,"isNew",{get:function(){return!this.id},enumerable:!1,configurable:!0}),t.prototype.clone=function(){var t="function"==typeof structuredClone?structuredClone(this):JSON.parse(JSON.stringify(this));return new this.constructor(t)},t.prototype.export=function(){return Object.assign({},this)},t}(),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.load=function(e){t.prototype.load.call(this,e),this.collectionId="string"==typeof e.collectionId?e.collectionId:"",this.collectionName="string"==typeof e.collectionName?e.collectionName:"",this.loadExpand(e.expand)},e.prototype.loadExpand=function(t){for(var n in t=t||{},this.expand={},t)Array.isArray(t[n])?this.expand[n]=t[n].map((function(t){return new e(t||{})})):this.expand[n]=new e(t[n]||{})},e}(p),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.load=function(e){t.prototype.load.call(this,e),this.avatar="number"==typeof e.avatar?e.avatar:0,this.email="string"==typeof e.email?e.email:""},e}(p),m=function(){function t(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}return Object.defineProperty(t.prototype,"token",{get:function(){return this.baseToken},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"model",{get:function(){return this.baseModel},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isValid",{get:function(){return!function(t,e){void 0===e&&(e=0);var n=h(t);return!(Object.keys(n).length>0&&(!n.exp||n.exp-e>Date.now()/1e3))}(this.token)},enumerable:!1,configurable:!0}),t.prototype.save=function(t,e){this.baseToken=t||"",this.baseModel=null!==e&&"object"==typeof e?void 0!==e.collectionId?new f(e):new v(e):null,this.triggerChange()},t.prototype.clear=function(){this.baseToken="",this.baseModel=null,this.triggerChange()},t.prototype.loadFromCookie=function(t,e){void 0===e&&(e="pb_auth");var n=function(t,e){var n={};if("string"!=typeof t)return n;for(var i=Object.assign({},e||{}).decode||l,o=0;o<t.length;){var r=t.indexOf("=",o);if(-1===r)break;var s=t.indexOf(";",o);if(-1===s)s=t.length;else if(s<r){o=t.lastIndexOf(";",r-1)+1;continue}var a=t.slice(o,r).trim();if(void 0===n[a]){var u=t.slice(r+1,s).trim();34===u.charCodeAt(0)&&(u=u.slice(1,-1));try{n[a]=i(u)}catch(t){n[a]=u}}o=s+1}return n}(t||"")[e]||"",i={};try{(null===typeof(i=JSON.parse(n))||"object"!=typeof i||Array.isArray(i))&&(i={})}catch(t){}this.save(i.token||"",i.model||null)},t.prototype.exportToCookie=function(t,e){var n,i,o;void 0===e&&(e="pb_auth");var r={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},s=h(this.token);(null==s?void 0:s.exp)?r.expires=new Date(1e3*s.exp):r.expires=new Date("1970-01-01"),t=Object.assign({},r,t);var a={token:this.token,model:(null===(n=this.model)||void 0===n?void 0:n.export())||null},u=c(e,JSON.stringify(a),t),l="undefined"!=typeof Blob?new Blob([u]).size:u.length;return a.model&&l>4096&&(a.model={id:null===(i=null==a?void 0:a.model)||void 0===i?void 0:i.id,email:null===(o=null==a?void 0:a.model)||void 0===o?void 0:o.email},this.model instanceof f&&(a.model.username=this.model.username,a.model.verified=this.model.verified,a.model.collectionId=this.model.collectionId),u=c(e,JSON.stringify(a),t)),u},t.prototype.onChange=function(t,e){var n=this;return void 0===e&&(e=!1),this._onChangeCallbacks.push(t),e&&t(this.token,this.model),function(){for(var e=n._onChangeCallbacks.length-1;e>=0;e--)if(n._onChangeCallbacks[e]==t)return delete n._onChangeCallbacks[e],void n._onChangeCallbacks.splice(e,1)}},t.prototype.triggerChange=function(){for(var t=0,e=this._onChangeCallbacks;t<e.length;t++){var n=e[t];n&&n(this.token,this.model)}},t}(),b=function(t){function e(e){void 0===e&&(e="pocketbase_auth");var n=t.call(this)||this;return n.storageFallback={},n.storageKey=e,n}return n(e,t),Object.defineProperty(e.prototype,"token",{get:function(){return(this._storageGet(this.storageKey)||{}).token||""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"model",{get:function(){var t,e=this._storageGet(this.storageKey)||{};return null===e||"object"!=typeof e||null===e.model||"object"!=typeof e.model?null:void 0===(null===(t=e.model)||void 0===t?void 0:t.collectionId)?new v(e.model):new f(e.model)},enumerable:!1,configurable:!0}),e.prototype.save=function(e,n){this._storageSet(this.storageKey,{token:e,model:n}),t.prototype.save.call(this,e,n)},e.prototype.clear=function(){this._storageRemove(this.storageKey),t.prototype.clear.call(this)},e.prototype._storageGet=function(t){if("undefined"!=typeof window&&(null===window||void 0===window?void 0:window.localStorage)){var e=window.localStorage.getItem(t)||"";try{return JSON.parse(e)}catch(t){return e}}return this.storageFallback[t]},e.prototype._storageSet=function(t,e){if("undefined"!=typeof window&&(null===window||void 0===window?void 0:window.localStorage)){var n=e;"string"!=typeof e&&(n=JSON.stringify(e)),window.localStorage.setItem(t,n)}else this.storageFallback[t]=e},e.prototype._storageRemove=function(t){var e;"undefined"!=typeof window&&(null===window||void 0===window?void 0:window.localStorage)&&(null===(e=window.localStorage)||void 0===e||e.removeItem(t)),delete this.storageFallback[t]},e}(m),y=function(t){this.client=t},g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.getAll=function(t){return void 0===t&&(t={}),this.client.send("/api/settings",{method:"GET",params:t}).then((function(t){return t||{}}))},e.prototype.update=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send("/api/settings",{method:"PATCH",params:e,body:t}).then((function(t){return t||{}}))},e.prototype.testS3=function(t){return void 0===t&&(t={}),this.client.send("/api/settings/test/s3",{method:"POST",params:t}).then((function(){return!0}))},e.prototype.testEmail=function(t,e,n){void 0===n&&(n={});var i={email:t,template:e};return this.client.send("/api/settings/test/email",{method:"POST",params:n,body:i}).then((function(){return!0}))},e}(y),w=function(t,e,n,i,o){this.page=t>0?t:1,this.perPage=e>=0?e:0,this.totalItems=n>=0?n:0,this.totalPages=i>=0?i:0,this.items=o||[]},S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.getFullList=function(t,e){if("number"==typeof t)return this._getFullList(this.baseCrudPath,t,e);var n=Object.assign({},t,e);return this._getFullList(this.baseCrudPath,n.batch||200,n)},e.prototype.getList=function(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=30),void 0===n&&(n={}),this._getList(this.baseCrudPath,t,e,n)},e.prototype.getFirstListItem=function(t,e){return void 0===e&&(e={}),this._getFirstListItem(this.baseCrudPath,t,e)},e.prototype.getOne=function(t,e){return void 0===e&&(e={}),this._getOne(this.baseCrudPath,t,e)},e.prototype.create=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this._create(this.baseCrudPath,t,e)},e.prototype.update=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this._update(this.baseCrudPath,t,e,n)},e.prototype.delete=function(t,e){return void 0===e&&(e={}),this._delete(this.baseCrudPath,t,e)},e}(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype._getFullList=function(t,e,n){var i=this;void 0===e&&(e=200),void 0===n&&(n={});var s=[],a=function(u){return o(i,void 0,void 0,(function(){return r(this,(function(i){return[2,this._getList(t,u,e||200,n).then((function(t){var e=t,n=e.items,i=e.totalItems;return s=s.concat(n),n.length&&i>s.length?a(u+1):s}))]}))}))};return a(1)},e.prototype._getList=function(t,e,n,i){var o=this;return void 0===e&&(e=1),void 0===n&&(n=30),void 0===i&&(i={}),i=Object.assign({page:e,perPage:n},i),this.client.send(t,{method:"GET",params:i}).then((function(t){var e=[];if(null==t?void 0:t.items){t.items=t.items||[];for(var n=0,i=t.items;n<i.length;n++){var r=i[n];e.push(o.decode(r))}}return new w((null==t?void 0:t.page)||1,(null==t?void 0:t.perPage)||0,(null==t?void 0:t.totalItems)||0,(null==t?void 0:t.totalPages)||0,e)}))},e.prototype._getOne=function(t,e,n){var i=this;return void 0===n&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"GET",params:n}).then((function(t){return i.decode(t)}))},e.prototype._getFirstListItem=function(t,e,n){return void 0===n&&(n={}),n=Object.assign({filter:e,$cancelKey:"one_by_filter_"+t+"_"+e},n),this._getList(t,1,1,n).then((function(t){var e;if(!(null===(e=null==t?void 0:t.items)||void 0===e?void 0:e.length))throw new a({status:404,data:{code:404,message:"The requested resource wasn't found.",data:{}}});return t.items[0]}))},e.prototype._create=function(t,e,n){var i=this;return void 0===e&&(e={}),void 0===n&&(n={}),this.client.send(t,{method:"POST",params:n,body:e}).then((function(t){return i.decode(t)}))},e.prototype._update=function(t,e,n,i){var o=this;return void 0===n&&(n={}),void 0===i&&(i={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"PATCH",params:i,body:n}).then((function(t){return o.decode(t)}))},e.prototype._delete=function(t,e,n){return void 0===n&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"DELETE",params:n}).then((function(){return!0}))},e}(y)),C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.decode=function(t){return new v(t)},Object.defineProperty(e.prototype,"baseCrudPath",{get:function(){return"/api/admins"},enumerable:!1,configurable:!0}),e.prototype.update=function(e,n,i){var o=this;return void 0===n&&(n={}),void 0===i&&(i={}),t.prototype.update.call(this,e,n,i).then((function(t){var e,n;return o.client.authStore.model&&void 0===(null===(e=o.client.authStore.model)||void 0===e?void 0:e.collectionId)&&(null===(n=o.client.authStore.model)||void 0===n?void 0:n.id)===(null==t?void 0:t.id)&&o.client.authStore.save(o.client.authStore.token,t),t}))},e.prototype.delete=function(e,n){var i=this;return void 0===n&&(n={}),t.prototype.delete.call(this,e,n).then((function(t){var n,o;return t&&i.client.authStore.model&&void 0===(null===(n=i.client.authStore.model)||void 0===n?void 0:n.collectionId)&&(null===(o=i.client.authStore.model)||void 0===o?void 0:o.id)===e&&i.client.authStore.clear(),t}))},e.prototype.authResponse=function(t){var e=this.decode((null==t?void 0:t.admin)||{});return(null==t?void 0:t.token)&&(null==t?void 0:t.admin)&&this.client.authStore.save(t.token,e),Object.assign({},t,{token:(null==t?void 0:t.token)||"",admin:e})},e.prototype.authWithPassword=function(t,e,n,i){return void 0===n&&(n={}),void 0===i&&(i={}),n=Object.assign({identity:t,password:e},n),this.client.send(this.baseCrudPath+"/auth-with-password",{method:"POST",params:i,body:n}).then(this.authResponse.bind(this))},e.prototype.authRefresh=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send(this.baseCrudPath+"/auth-refresh",{method:"POST",params:e,body:t}).then(this.authResponse.bind(this))},e.prototype.requestPasswordReset=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath+"/request-password-reset",{method:"POST",params:n,body:e}).then((function(){return!0}))},e.prototype.confirmPasswordReset=function(t,e,n,i,o){return void 0===i&&(i={}),void 0===o&&(o={}),i=Object.assign({token:t,password:e,passwordConfirm:n},i),this.client.send(this.baseCrudPath+"/confirm-password-reset",{method:"POST",params:o,body:i}).then((function(){return!0}))},e}(S),O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.load=function(e){t.prototype.load.call(this,e),this.recordId="string"==typeof e.recordId?e.recordId:"",this.collectionId="string"==typeof e.collectionId?e.collectionId:"",this.provider="string"==typeof e.provider?e.provider:"",this.providerId="string"==typeof e.providerId?e.providerId:""},e}(p),P=function(t){function e(e,n){var i=t.call(this,e)||this;return i.collectionIdOrName=n,i}return n(e,t),e.prototype.decode=function(t){return new f(t)},Object.defineProperty(e.prototype,"baseCrudPath",{get:function(){return this.baseCollectionPath+"/records"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"baseCollectionPath",{get:function(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)},enumerable:!1,configurable:!0}),e.prototype.subscribeOne=function(t,e){return o(this,void 0,void 0,(function(){return r(this,(function(n){return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."),[2,this.client.realtime.subscribe(this.collectionIdOrName+"/"+t,e)]}))}))},e.prototype.subscribe=function(t,e){return o(this,void 0,void 0,(function(){var n;return r(this,(function(i){if("function"==typeof t)return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."),[2,this.client.realtime.subscribe(this.collectionIdOrName,t)];if(!e)throw new Error("Missing subscription callback.");if(""===t)throw new Error("Missing topic.");return n=this.collectionIdOrName,"*"!==t&&(n+="/"+t),[2,this.client.realtime.subscribe(n,e)]}))}))},e.prototype.unsubscribe=function(t){return o(this,void 0,void 0,(function(){return r(this,(function(e){return"*"===t?[2,this.client.realtime.unsubscribe(this.collectionIdOrName)]:t?[2,this.client.realtime.unsubscribe(this.collectionIdOrName+"/"+t)]:[2,this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)]}))}))},e.prototype.getFullList=function(e,n){if("number"==typeof e)return t.prototype.getFullList.call(this,e,n);var i=Object.assign({},e,n);return t.prototype.getFullList.call(this,i)},e.prototype.getList=function(e,n,i){return void 0===e&&(e=1),void 0===n&&(n=30),void 0===i&&(i={}),t.prototype.getList.call(this,e,n,i)},e.prototype.getFirstListItem=function(e,n){return void 0===n&&(n={}),t.prototype.getFirstListItem.call(this,e,n)},e.prototype.getOne=function(e,n){return void 0===n&&(n={}),t.prototype.getOne.call(this,e,n)},e.prototype.create=function(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),t.prototype.create.call(this,e,n)},e.prototype.update=function(e,n,i){var o=this;return void 0===n&&(n={}),void 0===i&&(i={}),t.prototype.update.call(this,e,n,i).then((function(t){var e,n,i;return(null===(e=o.client.authStore.model)||void 0===e?void 0:e.id)!==(null==t?void 0:t.id)||(null===(n=o.client.authStore.model)||void 0===n?void 0:n.collectionId)!==o.collectionIdOrName&&(null===(i=o.client.authStore.model)||void 0===i?void 0:i.collectionName)!==o.collectionIdOrName||o.client.authStore.save(o.client.authStore.token,t),t}))},e.prototype.delete=function(e,n){var i=this;return void 0===n&&(n={}),t.prototype.delete.call(this,e,n).then((function(t){var n,o,r;return!t||(null===(n=i.client.authStore.model)||void 0===n?void 0:n.id)!==e||(null===(o=i.client.authStore.model)||void 0===o?void 0:o.collectionId)!==i.collectionIdOrName&&(null===(r=i.client.authStore.model)||void 0===r?void 0:r.collectionName)!==i.collectionIdOrName||i.client.authStore.clear(),t}))},e.prototype.authResponse=function(t){var e=this.decode((null==t?void 0:t.record)||{});return this.client.authStore.save(null==t?void 0:t.token,e),Object.assign({},t,{token:(null==t?void 0:t.token)||"",record:e})},e.prototype.listAuthMethods=function(t){return void 0===t&&(t={}),this.client.send(this.baseCollectionPath+"/auth-methods",{method:"GET",params:t}).then((function(t){return Object.assign({},t,{usernamePassword:!!(null==t?void 0:t.usernamePassword),emailPassword:!!(null==t?void 0:t.emailPassword),authProviders:Array.isArray(null==t?void 0:t.authProviders)?null==t?void 0:t.authProviders:[]})}))},e.prototype.authWithPassword=function(t,e,n,i){var o=this;return void 0===n&&(n={}),void 0===i&&(i={}),n=Object.assign({identity:t,password:e},n),this.client.send(this.baseCollectionPath+"/auth-with-password",{method:"POST",params:i,body:n}).then((function(t){return o.authResponse(t)}))},e.prototype.authWithOAuth2=function(t,e,n,i,o,r,s){var a=this;return void 0===o&&(o={}),void 0===r&&(r={}),void 0===s&&(s={}),r=Object.assign({provider:t,code:e,codeVerifier:n,redirectUrl:i,createData:o},r),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",{method:"POST",params:s,body:r}).then((function(t){return a.authResponse(t)}))},e.prototype.authRefresh=function(t,e){var n=this;return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send(this.baseCollectionPath+"/auth-refresh",{method:"POST",params:e,body:t}).then((function(t){return n.authResponse(t)}))},e.prototype.requestPasswordReset=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCollectionPath+"/request-password-reset",{method:"POST",params:n,body:e}).then((function(){return!0}))},e.prototype.confirmPasswordReset=function(t,e,n,i,o){return void 0===i&&(i={}),void 0===o&&(o={}),i=Object.assign({token:t,password:e,passwordConfirm:n},i),this.client.send(this.baseCollectionPath+"/confirm-password-reset",{method:"POST",params:o,body:i}).then((function(){return!0}))},e.prototype.requestVerification=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCollectionPath+"/request-verification",{method:"POST",params:n,body:e}).then((function(){return!0}))},e.prototype.confirmVerification=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({token:t},e),this.client.send(this.baseCollectionPath+"/confirm-verification",{method:"POST",params:n,body:e}).then((function(){return!0}))},e.prototype.requestEmailChange=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({newEmail:t},e),this.client.send(this.baseCollectionPath+"/request-email-change",{method:"POST",params:n,body:e}).then((function(){return!0}))},e.prototype.confirmEmailChange=function(t,e,n,i){return void 0===n&&(n={}),void 0===i&&(i={}),n=Object.assign({token:t,password:e},n),this.client.send(this.baseCollectionPath+"/confirm-email-change",{method:"POST",params:i,body:n}).then((function(){return!0}))},e.prototype.listExternalAuths=function(t,e){return void 0===e&&(e={}),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(t)+"/external-auths",{method:"GET",params:e}).then((function(t){var e=[];if(Array.isArray(t))for(var n=0,i=t;n<i.length;n++){var o=i[n];e.push(new O(o))}return e}))},e.prototype.unlinkExternalAuth=function(t,e,n){return void 0===n&&(n={}),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(t)+"/external-auths/"+encodeURIComponent(e),{method:"DELETE",params:n}).then((function(){return!0}))},e}(S),I=function(){function t(t){void 0===t&&(t={}),this.load(t||{})}return t.prototype.load=function(t){this.id=void 0!==t.id?t.id:"",this.name=void 0!==t.name?t.name:"",this.type=void 0!==t.type?t.type:"text",this.system=!!t.system,this.required=!!t.required,this.unique=!!t.unique,this.options="object"==typeof t.options&&null!==t.options?t.options:{}},t}(),T=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.load=function(e){t.prototype.load.call(this,e),this.system=!!e.system,this.name="string"==typeof e.name?e.name:"",this.type="string"==typeof e.type?e.type:"base",this.options=void 0!==e.options?e.options:{},this.listRule="string"==typeof e.listRule?e.listRule:null,this.viewRule="string"==typeof e.viewRule?e.viewRule:null,this.createRule="string"==typeof e.createRule?e.createRule:null,this.updateRule="string"==typeof e.updateRule?e.updateRule:null,this.deleteRule="string"==typeof e.deleteRule?e.deleteRule:null,e.schema=Array.isArray(e.schema)?e.schema:[],this.schema=[];for(var n=0,i=e.schema;n<i.length;n++){var o=i[n];this.schema.push(new I(o))}},Object.defineProperty(e.prototype,"isBase",{get:function(){return"base"===this.type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isAuth",{get:function(){return"auth"===this.type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isView",{get:function(){return"view"===this.type},enumerable:!1,configurable:!0}),e}(p),j=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.decode=function(t){return new T(t)},Object.defineProperty(e.prototype,"baseCrudPath",{get:function(){return"/api/collections"},enumerable:!1,configurable:!0}),e.prototype.import=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n={}),o(this,void 0,void 0,(function(){return r(this,(function(i){return[2,this.client.send(this.baseCrudPath+"/import",{method:"PUT",params:n,body:{collections:t,deleteMissing:e}}).then((function(){return!0}))]}))}))},e}(S),k=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.load=function(e){t.prototype.load.call(this,e),e.remoteIp=e.remoteIp||e.ip,this.url="string"==typeof e.url?e.url:"",this.method="string"==typeof e.method?e.method:"GET",this.status="number"==typeof e.status?e.status:200,this.auth="string"==typeof e.auth?e.auth:"guest",this.remoteIp="string"==typeof e.remoteIp?e.remoteIp:"",this.userIp="string"==typeof e.userIp?e.userIp:"",this.referer="string"==typeof e.referer?e.referer:"",this.userAgent="string"==typeof e.userAgent?e.userAgent:"",this.meta="object"==typeof e.meta&&null!==e.meta?e.meta:{}},e}(p),E=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.getRequestsList=function(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=30),void 0===n&&(n={}),n=Object.assign({page:t,perPage:e},n),this.client.send("/api/logs/requests",{method:"GET",params:n}).then((function(t){var e=[];if(null==t?void 0:t.items){t.items=(null==t?void 0:t.items)||[];for(var n=0,i=t.items;n<i.length;n++){var o=i[n];e.push(new k(o))}}return new w((null==t?void 0:t.page)||1,(null==t?void 0:t.perPage)||0,(null==t?void 0:t.totalItems)||0,(null==t?void 0:t.totalPages)||0,e)}))},e.prototype.getRequest=function(t,e){return void 0===e&&(e={}),this.client.send("/api/logs/requests/"+encodeURIComponent(t),{method:"GET",params:e}).then((function(t){return new k(t)}))},e.prototype.getRequestsStats=function(t){return void 0===t&&(t={}),this.client.send("/api/logs/requests/stats",{method:"GET",params:t}).then((function(t){return t}))},e}(y),R=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clientId="",e.eventSource=null,e.subscriptions={},e.lastSentTopics=[],e.maxConnectTimeout=15e3,e.reconnectAttempts=0,e.maxReconnectAttempts=1/0,e.predefinedReconnectIntervals=[200,300,500,1e3,1200,1500,2e3],e.pendingConnects=[],e}return n(e,t),Object.defineProperty(e.prototype,"isConnected",{get:function(){return!!this.eventSource&&!!this.clientId&&!this.pendingConnects.length},enumerable:!1,configurable:!0}),e.prototype.subscribe=function(t,e){var n;return o(this,void 0,void 0,(function(){var i,s=this;return r(this,(function(a){switch(a.label){case 0:if(!t)throw new Error("topic must be set.");return i=function(t){var n,i=t;try{n=JSON.parse(null==i?void 0:i.data)}catch(t){}e(n||{})},this.subscriptions[t]||(this.subscriptions[t]=[]),this.subscriptions[t].push(i),this.isConnected?[3,2]:[4,this.connect()];case 1:return a.sent(),[3,5];case 2:return 1!==this.subscriptions[t].length?[3,4]:[4,this.submitSubscriptions()];case 3:return a.sent(),[3,5];case 4:null===(n=this.eventSource)||void 0===n||n.addEventListener(t,i),a.label=5;case 5:return[2,function(){return o(s,void 0,void 0,(function(){return r(this,(function(e){return[2,this.unsubscribeByTopicAndListener(t,i)]}))}))}]}}))}))},e.prototype.unsubscribe=function(t){var e;return o(this,void 0,void 0,(function(){var n,i,o;return r(this,(function(r){switch(r.label){case 0:if(!this.hasSubscriptionListeners(t))return[2];if(t){for(n=0,i=this.subscriptions[t];n<i.length;n++)o=i[n],null===(e=this.eventSource)||void 0===e||e.removeEventListener(t,o);delete this.subscriptions[t]}else this.subscriptions={};return this.hasSubscriptionListeners()?[3,1]:(this.disconnect(),[3,3]);case 1:return this.hasSubscriptionListeners(t)?[3,3]:[4,this.submitSubscriptions()];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))},e.prototype.unsubscribeByPrefix=function(t){var e;return o(this,void 0,void 0,(function(){var n,i,o,s,a;return r(this,(function(r){switch(r.label){case 0:for(i in n=!1,this.subscriptions)if(i.startsWith(t)){for(n=!0,o=0,s=this.subscriptions[i];o<s.length;o++)a=s[o],null===(e=this.eventSource)||void 0===e||e.removeEventListener(i,a);delete this.subscriptions[i]}return n?this.hasSubscriptionListeners()?[4,this.submitSubscriptions()]:[3,2]:[2];case 1:return r.sent(),[3,3];case 2:this.disconnect(),r.label=3;case 3:return[2]}}))}))},e.prototype.unsubscribeByTopicAndListener=function(t,e){var n;return o(this,void 0,void 0,(function(){var i,o;return r(this,(function(r){switch(r.label){case 0:if(!Array.isArray(this.subscriptions[t])||!this.subscriptions[t].length)return[2];for(i=!1,o=this.subscriptions[t].length-1;o>=0;o--)this.subscriptions[t][o]===e&&(i=!0,delete this.subscriptions[t][o],this.subscriptions[t].splice(o,1),null===(n=this.eventSource)||void 0===n||n.removeEventListener(t,e));return i?(this.subscriptions[t].length||delete this.subscriptions[t],this.hasSubscriptionListeners()?[3,1]:(this.disconnect(),[3,3])):[2];case 1:return this.hasSubscriptionListeners(t)?[3,3]:[4,this.submitSubscriptions()];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))},e.prototype.hasSubscriptionListeners=function(t){var e,n;if(this.subscriptions=this.subscriptions||{},t)return!!(null===(e=this.subscriptions[t])||void 0===e?void 0:e.length);for(var i in this.subscriptions)if(null===(n=this.subscriptions[i])||void 0===n?void 0:n.length)return!0;return!1},e.prototype.submitSubscriptions=function(){return o(this,void 0,void 0,(function(){return r(this,(function(t){return this.clientId?(this.addAllSubscriptionListeners(),this.lastSentTopics=this.getNonEmptySubscriptionTopics(),[2,this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:this.lastSentTopics},params:{$cancelKey:"realtime_"+this.clientId}}).catch((function(t){if(!(null==t?void 0:t.isAbort))throw t}))]):[2]}))}))},e.prototype.getNonEmptySubscriptionTopics=function(){var t=[];for(var e in this.subscriptions)this.subscriptions[e].length&&t.push(e);return t},e.prototype.addAllSubscriptionListeners=function(){if(this.eventSource)for(var t in this.removeAllSubscriptionListeners(),this.subscriptions)for(var e=0,n=this.subscriptions[t];e<n.length;e++){var i=n[e];this.eventSource.addEventListener(t,i)}},e.prototype.removeAllSubscriptionListeners=function(){if(this.eventSource)for(var t in this.subscriptions)for(var e=0,n=this.subscriptions[t];e<n.length;e++){var i=n[e];this.eventSource.removeEventListener(t,i)}},e.prototype.connect=function(){return o(this,void 0,void 0,(function(){var t=this;return r(this,(function(e){return this.reconnectAttempts>0?[2]:[2,new Promise((function(e,n){t.pendingConnects.push({resolve:e,reject:n}),t.pendingConnects.length>1||t.initConnect()}))]}))}))},e.prototype.initConnect=function(){var t=this;this.disconnect(!0),clearTimeout(this.connectTimeoutId),this.connectTimeoutId=setTimeout((function(){t.connectErrorHandler(new Error("EventSource connect took too long."))}),this.maxConnectTimeout),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.onerror=function(e){t.connectErrorHandler(new Error("Failed to establish realtime connection."))},this.eventSource.addEventListener("PB_CONNECT",(function(e){var n=e;t.clientId=null==n?void 0:n.lastEventId,t.submitSubscriptions().then((function(){return o(t,void 0,void 0,(function(){var t;return r(this,(function(e){switch(e.label){case 0:t=3,e.label=1;case 1:return this.hasUnsentSubscriptions()&&t>0?(t--,[4,this.submitSubscriptions()]):[3,3];case 2:return e.sent(),[3,1];case 3:return[2]}}))}))})).then((function(){for(var e=0,n=t.pendingConnects;e<n.length;e++)n[e].resolve();t.pendingConnects=[],t.reconnectAttempts=0,clearTimeout(t.reconnectTimeoutId),clearTimeout(t.connectTimeoutId)})).catch((function(e){t.clientId="",t.connectErrorHandler(e)}))}))},e.prototype.hasUnsentSubscriptions=function(){var t=this.getNonEmptySubscriptionTopics();if(t.length!=this.lastSentTopics.length)return!0;for(var e=0,n=t;e<n.length;e++){var i=n[e];if(!this.lastSentTopics.includes(i))return!0}return!1},e.prototype.connectErrorHandler=function(t){var e=this;if(clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),!this.clientId&&!this.reconnectAttempts||this.reconnectAttempts>this.maxReconnectAttempts){for(var n=0,i=this.pendingConnects;n<i.length;n++)i[n].reject(new a(t));this.disconnect()}else{this.disconnect(!0);var o=this.predefinedReconnectIntervals[this.reconnectAttempts]||this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length-1];this.reconnectAttempts++,this.reconnectTimeoutId=setTimeout((function(){e.initConnect()}),o)}},e.prototype.disconnect=function(t){var e;if(void 0===t&&(t=!1),clearTimeout(this.connectTimeoutId),clearTimeout(this.reconnectTimeoutId),this.removeAllSubscriptionListeners(),null===(e=this.eventSource)||void 0===e||e.close(),this.eventSource=null,this.clientId="",!t){this.reconnectAttempts=0;for(var n=new a(new Error("Realtime disconnected.")),i=0,o=this.pendingConnects;i<o.length;i++)o[i].reject(n);this.pendingConnects=[]}},e}(y),A=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.check=function(t){return void 0===t&&(t={}),this.client.send("/api/health",{method:"GET",params:t})},e}(y),x=function(){function t(t,e,n){void 0===t&&(t="/"),void 0===n&&(n="en-US"),this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseUrl=t,this.lang=n,this.authStore=e||new b,this.admins=new C(this),this.collections=new j(this),this.logs=new E(this),this.settings=new g(this),this.realtime=new R(this),this.health=new A(this)}return t.prototype.collection=function(t){return this.recordServices[t]||(this.recordServices[t]=new P(this,t)),this.recordServices[t]},t.prototype.autoCancellation=function(t){return this.enableAutoCancellation=!!t,this},t.prototype.cancelRequest=function(t){return this.cancelControllers[t]&&(this.cancelControllers[t].abort(),delete this.cancelControllers[t]),this},t.prototype.cancelAllRequests=function(){for(var t in this.cancelControllers)this.cancelControllers[t].abort();return this.cancelControllers={},this},t.prototype.send=function(t,e){var n,i,s,u,c,l,d,h;return o(this,void 0,void 0,(function(){var p,f,v,m,b,y,g=this;return r(this,(function(w){return p=Object.assign({method:"GET"},e),this.isFormData(p.body)||(p.body&&"string"!=typeof p.body&&(p.body=JSON.stringify(p.body)),void 0===(null===(n=null==p?void 0:p.headers)||void 0===n?void 0:n["Content-Type"])&&(p.headers=Object.assign({},p.headers,{"Content-Type":"application/json"}))),void 0===(null===(i=null==p?void 0:p.headers)||void 0===i?void 0:i["Accept-Language"])&&(p.headers=Object.assign({},p.headers,{"Accept-Language":this.lang})),(null===(s=this.authStore)||void 0===s?void 0:s.token)&&void 0===(null===(u=null==p?void 0:p.headers)||void 0===u?void 0:u.Authorization)&&(p.headers=Object.assign({},p.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&!1!==(null===(c=p.params)||void 0===c?void 0:c.$autoCancel)&&(f=(null===(l=p.params)||void 0===l?void 0:l.$cancelKey)||(p.method||"GET")+t,this.cancelRequest(f),v=new AbortController,this.cancelControllers[f]=v,p.signal=v.signal),null===(d=p.params)||void 0===d||delete d.$autoCancel,null===(h=p.params)||void 0===h||delete h.$cancelKey,m=this.buildUrl(t),void 0!==p.params&&((b=this.serializeQueryParams(p.params))&&(m+=(m.includes("?")?"&":"?")+b),delete p.params),this.beforeSend&&(void 0!==(y=Object.assign({},this.beforeSend(m,p))).url||void 0!==y.options?(m=y.url||m,p=y.options||p):Object.keys(y).length&&(p=y,(null===console||void 0===console?void 0:console.warn)&&console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."))),[2,fetch(m,p).then((function(t){return o(g,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:e={},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.json()];case 2:return e=n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:if(this.afterSend&&(e=this.afterSend(t,e)),t.status>=400)throw new a({url:t.url,status:t.status,data:e});return[2,e]}}))}))})).catch((function(t){throw new a(t)}))]}))}))},t.prototype.getFileUrl=function(t,e,n){void 0===n&&(n={});var i=[];i.push("api"),i.push("files"),i.push(encodeURIComponent(t.collectionId||t.collectionName)),i.push(encodeURIComponent(t.id)),i.push(encodeURIComponent(e));var o=this.buildUrl(i.join("/"));if(Object.keys(n).length){var r=new URLSearchParams(n);o+=(o.includes("?")?"&":"?")+r}return o},t.prototype.buildUrl=function(t){var e=this.baseUrl+(this.baseUrl.endsWith("/")?"":"/");return t&&(e+=t.startsWith("/")?t.substring(1):t),e},t.prototype.isFormData=function(t){return t&&("FormData"===t.constructor.name||"undefined"!=typeof FormData&&t instanceof FormData)},t.prototype.serializeQueryParams=function(t){var e=[];for(var n in t)if(null!==t[n]){var i=t[n],o=encodeURIComponent(n);if(Array.isArray(i))for(var r=0,s=i;r<s.length;r++){var a=s[r];e.push(o+"="+encodeURIComponent(a))}else i instanceof Date?e.push(o+"="+encodeURIComponent(i.toISOString())):null!==typeof i&&"object"==typeof i?e.push(o+"="+encodeURIComponent(JSON.stringify(i))):e.push(o+"="+encodeURIComponent(i))}return e.join("&")},t}();const L=t("p",new x("/api"));t("i",(()=>L.authStore.isValid?L.authStore?.model:null))}}}));

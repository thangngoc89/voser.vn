if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(r.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/create-survey-route-b883c245.js",revision:null},{url:"assets/create-survey-route-legacy-b2bc30d2.js",revision:null},{url:"assets/db_calls-7a24e399.js",revision:null},{url:"assets/db_calls-legacy-ad43cccb.js",revision:null},{url:"assets/db-e5ae38dc.js",revision:null},{url:"assets/db-legacy-30cedf1f.js",revision:null},{url:"assets/error-page-30be06f4.js",revision:null},{url:"assets/error-page-legacy-40e5eae7.js",revision:null},{url:"assets/form-edit--loader-004696a6.js",revision:null},{url:"assets/form-edit--loader-legacy-1f987ffc.js",revision:null},{url:"assets/form-edit-5ea97522.css",revision:null},{url:"assets/form-edit-a7ec9530.js",revision:null},{url:"assets/form-edit-legacy-cb60863d.js",revision:null},{url:"assets/Heading-9e2462f5.js",revision:null},{url:"assets/Heading-legacy-84466061.js",revision:null},{url:"assets/home--loader-f12ed8c8.js",revision:null},{url:"assets/home--loader-legacy-8f4db496.js",revision:null},{url:"assets/home-f30fbdc8.js",revision:null},{url:"assets/home-legacy-e64be363.js",revision:null},{url:"assets/index-b0b07812.js",revision:null},{url:"assets/index-c50d1876.js",revision:null},{url:"assets/index-d41d53c9.css",revision:null},{url:"assets/index-legacy-196a83eb.js",revision:null},{url:"assets/index-legacy-5b0f4730.js",revision:null},{url:"assets/login--action-cfa91828.js",revision:null},{url:"assets/login--action-legacy-ac4e7f50.js",revision:null},{url:"assets/logout--loader-4c931e53.js",revision:null},{url:"assets/logout--loader-legacy-b2f5786e.js",revision:null},{url:"assets/manage--loader-6721f0bb.js",revision:null},{url:"assets/manage--loader-legacy-94776025.js",revision:null},{url:"assets/manage-c2ad2f8a.js",revision:null},{url:"assets/manage-legacy-666972ee.js",revision:null},{url:"assets/pocketbase-7569c031.js",revision:null},{url:"assets/pocketbase-legacy-30e6144f.js",revision:null},{url:"assets/polyfills-legacy-31d03e97.js",revision:null},{url:"assets/schema_loader-04346830.js",revision:null},{url:"assets/schema_loader-legacy-60c801b4.js",revision:null},{url:"assets/survey-edit--loader-294c59cc.js",revision:null},{url:"assets/survey-edit--loader-legacy-867ef59e.js",revision:null},{url:"assets/survey-edit-646cce71.js",revision:null},{url:"assets/survey-edit-legacy-2d860db8.js",revision:null},{url:"assets/sync--action-c684c22a.js",revision:null},{url:"assets/sync--action-legacy-23788615.js",revision:null},{url:"assets/TextInput-2f536473.js",revision:null},{url:"assets/TextInput-legacy-a103a17b.js",revision:null},{url:"assets/tieu_hoc_child_oidp-3baf1c59.js",revision:null},{url:"assets/tieu_hoc_child_oidp-legacy-8c5c0e37.js",revision:null},{url:"assets/types-e41d77eb.js",revision:null},{url:"assets/types-legacy-b58b22a3.js",revision:null},{url:"assets/workbox-window.prod.es5-bd8efbfb.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy-ab6aa431.js",revision:null},{url:"index.html",revision:"104bdec095697372a02d568e1e39be4a"},{url:"manifest.webmanifest",revision:"9c39d93bf153112d079ab23627a29978"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

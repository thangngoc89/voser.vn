if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/create-survey-route-d07d7fca.js",revision:null},{url:"assets/create-survey-route-legacy-9f02f775.js",revision:null},{url:"assets/db_calls-11354407.js",revision:null},{url:"assets/db_calls-legacy-00b17c77.js",revision:null},{url:"assets/db-d72aea4d.js",revision:null},{url:"assets/db-legacy-1a76ad35.js",revision:null},{url:"assets/DropdownLazy-80845797.js",revision:null},{url:"assets/DropdownLazy-legacy-525eb182.js",revision:null},{url:"assets/error-page-f7527407.js",revision:null},{url:"assets/error-page-legacy-cdc76756.js",revision:null},{url:"assets/form-edit--loader-5e350027.js",revision:null},{url:"assets/form-edit--loader-legacy-00a060fb.js",revision:null},{url:"assets/form-edit-5ea97522.css",revision:null},{url:"assets/form-edit-d11684da.js",revision:null},{url:"assets/form-edit-legacy-45ad1fe7.js",revision:null},{url:"assets/Heading-744074cd.js",revision:null},{url:"assets/Heading-legacy-ef5858be.js",revision:null},{url:"assets/home--loader-969e2ec2.js",revision:null},{url:"assets/home--loader-legacy-1f55ec4a.js",revision:null},{url:"assets/home-31e1c555.js",revision:null},{url:"assets/home-legacy-b5659637.js",revision:null},{url:"assets/index-33b61bf4.js",revision:null},{url:"assets/index-6d7011ea.css",revision:null},{url:"assets/index-b0b07812.js",revision:null},{url:"assets/index-legacy-a763c449.js",revision:null},{url:"assets/index-legacy-f5cb693b.js",revision:null},{url:"assets/login--action-6fc95479.js",revision:null},{url:"assets/login--action-legacy-707208d6.js",revision:null},{url:"assets/manage--loader-bfc153c8.js",revision:null},{url:"assets/manage--loader-legacy-0c434136.js",revision:null},{url:"assets/manage-b4994803.js",revision:null},{url:"assets/manage-legacy-0caf6a84.js",revision:null},{url:"assets/pocketbase-46b56a28.js",revision:null},{url:"assets/pocketbase-legacy-7a1413fe.js",revision:null},{url:"assets/polyfills-legacy-a687082b.js",revision:null},{url:"assets/survey-edit--loader-fc294ed3.js",revision:null},{url:"assets/survey-edit--loader-legacy-cdbe00a1.js",revision:null},{url:"assets/survey-edit-9cc3c7cf.js",revision:null},{url:"assets/survey-edit-legacy-574343b6.js",revision:null},{url:"assets/sync--action-645c4f66.js",revision:null},{url:"assets/sync--action-legacy-06a3d1ba.js",revision:null},{url:"assets/TextInput-982921c5.js",revision:null},{url:"assets/TextInput-legacy-49be5124.js",revision:null},{url:"assets/tieu_hoc_child_oidp-3baf1c59.js",revision:null},{url:"assets/tieu_hoc_child_oidp-legacy-8c5c0e37.js",revision:null},{url:"assets/types-2fda5662.js",revision:null},{url:"assets/types-legacy-1a4ebede.js",revision:null},{url:"index.html",revision:"54e5a4d03862645101e698ccc2d72090"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"9c39d93bf153112d079ab23627a29978"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

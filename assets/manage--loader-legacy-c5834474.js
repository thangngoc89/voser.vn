System.register(["./db-legacy-1802c10b.js","./db_calls-legacy-123a5513.js","./pocketbase-legacy-d584ed5d.js","./index-legacy-b6c698d1.js"],(function(t,e){"use strict";var a,r,s,n;return{setters:[t=>{a=t.d},t=>{r=t.l},t=>{s=t.i},t=>{n=t.j}],execute:function(){const e=t("defaultLimit",25);function o(t,e){const a=function(t,e){return e.get(t)}(t,e);return a&&parseInt(a)||null}function i(t){switch(t){case"mau_giao":return"mau_giao_form";case"tieu_hoc":return"tieu_hoc_form";case"nguoi_lon":return"nguoi_lon_form"}}t("loader",(async({request:t,params:u})=>{const c=new URL(t.url),l=Math.max(o("offset",c.searchParams)||0,0),f=Math.max(o("limit",c.searchParams)||e,10),[m,_]=await Promise.all([a.list.orderBy("createdAt").reverse().offset(l).limit(f).toArray(),a.list.count()]),h=[];for(const e of m){const t=await r(e.surveyId,i(e.surveyType));if(t){const a=t?.data?.ho_va_ten,r=t?.data?.nguoi_kham;let s={...e,extra:{ho_va_ten:a,nguoi_kham:r}};h.push(s)}else h.push({...e,extra:{}})}return n({list:h,count:_,offset:l,limit:f,auth:s()})}))}}}));

import{d as m}from"./db-d72aea4d.js";import{l as v}from"./db_calls-11354407.js";import{p as y}from"./pocketbase-46b56a28.js";import{j as x}from"./index-5e3a7d3e.js";const P=25,A=async({request:t,params:r})=>{var i,c,l;const o=new URL(t.url),n=Math.max(f("offset",o.searchParams)||0,0),u=Math.max(f("limit",o.searchParams)||P,10),[h,_]=await Promise.all([m.list.orderBy("createdAt").reverse().offset(n).limit(u).toArray(),m.list.count()]),s=[];for(const e of h){const a=await v(e.surveyId,S(e.surveyType));if(a){const p=(i=a==null?void 0:a.data)==null?void 0:i.ho_va_ten,d=(c=a==null?void 0:a.data)==null?void 0:c.nguoi_kham;let g={...e,extra:{ho_va_ten:p,nguoi_kham:d}};s.push(g)}else s.push({...e,extra:{}})}return x({list:s,count:_,offset:n,limit:u,auth:(l=y.authStore)==null?void 0:l.model})};function w(t,r){return r.get(t)}function f(t,r){const o=w(t,r);return o&&parseInt(o)||null}function S(t){switch(t){case"mau_giao":return"mau_giao_form";case"tieu_hoc":return"tieu_hoc_form";case"nguoi_lon":return"nguoi_lon_form"}}export{P as defaultLimit,A as loader};

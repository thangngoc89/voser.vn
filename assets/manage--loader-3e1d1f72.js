import{d as l}from"./db-d72aea4d.js";import{l as g}from"./db_calls-11354407.js";import{i as v}from"./pocketbase-8cd5b0bf.js";import{j as y}from"./index-500e795c.js";const x=25,k=async({request:t,params:r})=>{var u,c;const e=new URL(t.url),n=Math.max(m("offset",e.searchParams)||0,0),i=Math.max(m("limit",e.searchParams)||x,10),[f,h]=await Promise.all([l.list.orderBy("createdAt").reverse().offset(n).limit(i).toArray(),l.list.count()]),s=[];for(const o of f){const a=await g(o.surveyId,w(o.surveyType));if(a){const _=(u=a==null?void 0:a.data)==null?void 0:u.ho_va_ten,d=(c=a==null?void 0:a.data)==null?void 0:c.nguoi_kham;let p={...o,extra:{ho_va_ten:_,nguoi_kham:d}};s.push(p)}else s.push({...o,extra:{}})}return y({list:s,count:h,offset:n,limit:i,auth:v()})};function P(t,r){return r.get(t)}function m(t,r){const e=P(t,r);return e&&parseInt(e)||null}function w(t){switch(t){case"mau_giao":return"mau_giao_form";case"tieu_hoc":return"tieu_hoc_form";case"nguoi_lon":return"nguoi_lon_form"}}export{x as defaultLimit,k as loader};

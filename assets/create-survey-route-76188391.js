import{Q as o,t as s,r as y,g as a}from"./index-e9493124.js";import{i as r,a as i}from"./schema_loader-e31391a6.js";import{c as u}from"./db_calls-7a24e399.js";import{s as v}from"./types-dc12b7a3.js";import"./index-b0b07812.js";import"./tieu_hoc_child_oidp-3baf1c59.js";import"./db-e5ae38dc.js";const l=async({request:m,params:e})=>{r(e.surveyType),r(i(e.surveyType)),o.info(s("form.new survey created",{name:v(e.surveyType)}),{autoClose:1500});const t=await u(e.surveyType);return y(a("/survey/:surveyId",{surveyId:t}))};export{l as loader};

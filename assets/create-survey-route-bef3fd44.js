import{i as r,a as t,s as y}from"./types-9f717ec2.js";import{c as o}from"./db_calls-b73e5498.js";import{Q as a,t as u,r as v,g as i}from"./index-654a6f85.js";import"./db-a8aa823d.js";const f=async({request:n,params:e})=>{r(e.surveyType),r(t(e.surveyType)),a.info(u("form.new survey created",{name:y(e.surveyType)}),{autoClose:1500});const s=await o(e.surveyType);return v(i("/survey/:surveyId",{surveyId:s}))};export{f as loader};

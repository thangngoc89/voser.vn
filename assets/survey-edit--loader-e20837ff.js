import{i as n,a,s as u}from"./schema_loader-8b4c3283.js";import{d as m}from"./db-61ab6f32.js";import{r as y,g as f,j as i}from"./index-14ddf7f0.js";import"./index-b0b07812.js";import"./tieu_hoc_child_oidp-3baf1c59.js";async function v(s){n(s.surveyId);const e=await m.list.get(s.surveyId);if(typeof e>"u")throw new Response("Not Found",{status:404,statusText:"Not Found"});const{surveyType:r}=e;if(!a(r))throw new Response("Unknown survey type",{status:400,statusText:"Unknown survey type"});const t=u(r);return{survey:e,surveySchema:t}}const S=async({request:s,params:e})=>{const{survey:r,surveySchema:t}=await v(e),o=c(t);return e.formName?i({survey:r,surveySchema:t}):y(f("/survey/:surveyId/:formName",{surveyId:r.surveyId,formName:o[0]}))};function c(s){return s.forms.map(r=>r.form.name)}export{c as getAllFormNames,S as loader,v as loaderSurveyDataAndSchema};

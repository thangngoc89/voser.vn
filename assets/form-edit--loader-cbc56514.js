import{i as f}from"./schema_loader-e31391a6.js";import{f as u}from"./index-b0b07812.js";import{l}from"./db_calls-7a24e399.js";import{loaderSurveyDataAndSchema as i}from"./survey-edit--loader-c9d09d99.js";import{j as y}from"./index-846d4f20.js";import"./tieu_hoc_child_oidp-3baf1c59.js";import"./db-e5ae38dc.js";const d=a=>{const{survey:e}=a;let t={};return e.forEach(o=>{m(o,t)}),t};function m(a,e){switch(a.type){case"date":if(a.defaultValue){const t=a.defaultValue;if(t.value=="now()"){const o=t.format||"dd-MM-yyyy";e[a.name]=u(new Date,o)}}break;case"group":a.fields.forEach(t=>{m(t,e)});break;case"select_one":case"select_one_ref":case"matrix_select_one":case"select_many":e[a.name]=[];case"select_many_ref":e[a.name]=[]}}const D=async({request:a,params:e})=>{f(e.formName);const{survey:t,surveySchema:o}=await i(e),r=o.forms.find(({form:c})=>c.name===e.formName);if(r==null)throw new Response(`Form ${e.formName} isn't available`,{status:400,statusText:"Unknown form name"});const s=await l(t.surveyId,e.formName),n=r.makeInitialValues?r.makeInitialValues():d(r.form);return y({formSchema:r,survey:t,formData:s||null,defaultValues:n})};export{D as loader};

System.register(["./schema_loader-legacy-60c801b4.js","./db-legacy-30cedf1f.js","./index-legacy-5b0f4730.js","./index-legacy-196a83eb.js","./tieu_hoc_child_oidp-legacy-8c5c0e37.js"],(function(e,s){"use strict";var r,t,u,a,n,o,y;return{setters:[e=>{r=e.i,t=e.a,u=e.s},e=>{a=e.d},e=>{n=e.r,o=e.g,y=e.j},null,null],execute:function(){async function s(e){r(e.surveyId);const s=await a.list.get(e.surveyId);if(void 0===s)throw new Response("Not Found",{status:404,statusText:"Not Found"});const{surveyType:n}=s;if(!t(n))throw new Response("Unknown survey type",{status:400,statusText:"Unknown survey type"});return{survey:s,surveySchema:u(n)}}function c(e){return e.forms.map((e=>e.form.name))}e({getAllFormNames:c,loaderSurveyDataAndSchema:s}),e("loader",(async({request:e,params:r})=>{const{survey:t,surveySchema:u}=await s(r),a=c(u);return r.formName?y({survey:t,surveySchema:u}):n(o("/survey/:surveyId/:formName",{surveyId:t.surveyId,formName:a[0]}))}))}}}));

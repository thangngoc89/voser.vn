System.register(["./types-legacy-208efae0.js","./db_calls-legacy-123a5513.js","./survey-edit--loader-legacy-fc2044da.js","./index-legacy-6f8d08d0.js","./db-legacy-1802c10b.js","./index-legacy-f5cb693b.js","./tieu_hoc_child_oidp-legacy-8c5c0e37.js"],(function(e,a){"use strict";var s,r,l,t;return{setters:[e=>{s=e.i},e=>{r=e.l},e=>{l=e.loaderSurveyDataAndSchema},e=>{t=e.j},null,null,null],execute:function(){e("loader",(async({request:e,params:a})=>{s(a.formName);const{survey:n,surveySchema:u}=await l(a),m=u.forms.find((({form:e})=>e.name===a.formName));if(null==m)throw new Response(`Form ${a.formName} isn't available`,{status:400,statusText:"Unknown form name"});const o=await r(n.surveyId,a.formName);return t({formSchema:m,survey:n,formData:o||null,defaultValues:m.makeInitialValues()})}))}}}));

System.register(["./types-legacy-1afb519b.js","./db_calls-legacy-3372b455.js","./index-legacy-b851a6ee.js","./db-legacy-33cc27f9.js"],(function(e,s){"use strict";var r,y,t,u,a,c,n,l;return{setters:[e=>{r=e.i,y=e.a,t=e.s},e=>{u=e.c},e=>{a=e.Q,c=e.t,n=e.r,l=e.g},null],execute:function(){e("loader",(async({request:e,params:s})=>{r(s.surveyType),r(y(s.surveyType)),a.info(c("form.new survey created",{name:t(s.surveyType)}),{autoClose:1500});const v=await u(s.surveyType);return n(l("/survey/:surveyId",{surveyId:v}))}))}}}));

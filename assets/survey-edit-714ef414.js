import{k as c,f as d,h as e,l as a,N as l,g as o,b as i,S as m,O as p}from"./index-19927acb.js";function v(){const{survey:s,surveySchema:t}=c();return d("div",{children:[e("nav",{className:a("voser-page-padding voser-sticky z-50 border-b border-gray-200 bg-gray-100 text-center text-sm font-medium text-gray-500"),children:e("div",{className:"voser-container",children:e("ul",{className:"-mb-px flex flex-wrap space-x-1 sm:space-x-2",children:t.forms.map(({form:r})=>e(l,{to:o("/survey/:surveyId/:formName",{surveyId:s.surveyId,formName:r.name}),className:({isActive:n})=>a("inline-block rounded-t-lg border-b-2 px-4 py-2",n?"active border-brand_accent text-brand_accent":"border-transparent px-4 py-2 hover:border-gray-300 hover:text-gray-600"),children:r.labelShort},r.name))})})}),e("article",{className:"voser-padding",children:e(i.Suspense,{fallback:e(m,{className:"w-full pt-8 text-center"}),children:e(p,{})})})]})}export{v as default};

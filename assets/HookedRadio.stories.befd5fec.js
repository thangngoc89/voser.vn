import{o as p,c as b,a as h}from"./array.7c1c8d9c.js";import{c as F,d as w,u as x,F as R}from"./index.esm.de6502f6.js";import{F as S}from"./FormGroup.7c294765.js";import{R as T}from"./Radio.ec343f64.js";import{I as j}from"./InputTile.010dd91c.js";import{j as o,a as y}from"./index.87c977da.js";import"./clsx.m.256e9345.js";function g({value:e,name:r,register:a,label:n,error:t}){return o(j,{value:e,name:r,label:n,error:t,children:o(T,{name:r,value:e,register:a,error:!!t})})}function E({name:e,label:r,choices:a,optional:n,labelVerbose:t=!1}){var i;const{register:d}=F(),{errors:c,touchedFields:l,isSubmitted:u}=w({name:e,exact:!0}),s=(u||l[e])&&((i=c[e])==null?void 0:i.message);return o(S,{name:e,label:r,labelVerbose:t,optional:n,error:s,children:o("div",{className:"flex flex-col space-y-2",children:a.map(({name:m,label:f})=>o(g,{value:m,name:e,register:d,error:s,label:f},m))})})}const I=[{name:"1",label:"One"},{name:"2",label:"Two"},{name:"3",label:"Three"}],H=()=>{const e=x({resolver:p(b({name:h().required()}))});return o(R,{...e,children:y("form",{onSubmit:e.handleSubmit(()=>{}),children:[o(E,{label:"Radio",name:"name",choices:I}),o("button",{children:"Submit"})]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{H as Normal};

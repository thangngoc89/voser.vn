import{d as t,m as o,S as n}from"./index-31befd26.js";const d=async(a,s)=>{const r=await t.data.get([a,s]);return s==="tieu_hoc_form"&&typeof r>"u"?await t.data.get([a,"mau_giao_form"]):r},i=async(a,s,r)=>await t.transaction("rw",["record_list","record_data","record_revisions"],async()=>{const e={surveyDataId:o(),surveyId:a,surveyForm:s,data:r,syncStatus:n.NotSync};await t.data.put(e,[a,s]),await t.revision.add(e,e.surveyDataId),await t.list.update(a,{syncStatus:n.NotSync})}),u=async a=>await t.list.add({surveyId:o(),surveyType:a,createdAt:Date.now(),syncStatus:n.NotSync});export{u as c,d as l,i as s};

import{d as s,S as a,a as p}from"./db-61ab6f32.js";import{t as v,p as n}from"./pocketbase-8cd5b0bf.js";import{Q as I,t as S,r as g,j as h}from"./index-14ddf7f0.js";const O=async()=>{try{return await I.promise(_,{pending:S`notify.syncing in progress`,success:S`notify.syncing completed`,error:{render({data:e}){return S("notify.syncing error",{error:JSON.stringify(e)+`
`+JSON.stringify(e==null?void 0:e.data)})}}}),g("/manage")}catch(e){return e instanceof v&&console.error(e.data),h({error:"Có lỗi xảy ra"})}},_=async()=>{var d;const[e,i]=await Promise.all([s.list.where("syncStatus").anyOf([a.NotSync,a.NeedResync]).toArray(),s.data.where("syncStatus").anyOf([a.NotSync,a.NeedResync]).toArray()]);for(const t of e){const l=i.filter(({surveyId:o})=>o===t.surveyId),y={};for(let o of l)y[o.surveyForm]=o.data;await w(t,y)}const f=await s.revision.where({syncStatus:a.NotSync}).toArray(),c=[];for(const t of f)await n.collection("survey_revisions").create({user:(d=n.authStore.model)==null?void 0:d.id,survey_offline_id:t.surveyId,form_name:t.surveyForm,created:p(t.surveyDataId),data:t.data}),c.push(t.surveyDataId);await s.revision.bulkDelete(c)};async function w(e,i,f=!0){var c,d,t,l,y,o;try{if(e.remoteSurveyId)await n.collection("surveys").update(e.remoteSurveyId,{survey_data:i}),await s.list.update(e.surveyId,{syncStatus:a.Synced});else{const r=await n.collection("surveys").create({user:(c=n.authStore.model)==null?void 0:c.id,offline_id:e.surveyId,type:e.surveyType,created:e.createdAt,survey_data:i});await s.list.update(e.surveyId,{remoteSurveyId:r.id,syncStatus:a.Synced})}}catch(r){if(r instanceof v&&r.status===404){if(await s.list.update(e.surveyId,{remoteSurveyId:null}),f){const{remoteSurveyId:m,...u}=e;await w(u,i,!1)}return}if(r instanceof v&&r.status===400&&((l=(t=(d=r.data)==null?void 0:d.data)==null?void 0:t.offline_id)==null?void 0:l.code)==="validation_not_unique"){const m=await n.collection("surveys").getList(1,1,{filter:`offline_id = "${e.surveyId}"`});if(m.totalItems===1){const u=(o=(y=m.items)==null?void 0:y[0])==null?void 0:o.id;if(u){await s.list.update(e.surveyId,{remoteSurveyId:u}),f&&await w({...e,remoteSurveyId:u},i,!1);return}}}throw r}}export{O as action};

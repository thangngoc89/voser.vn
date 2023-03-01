import{d as o,S as i,a as I}from"./db-61ab6f32.js";import{p as n,t as S}from"./pocketbase-8cd5b0bf.js";import{Q as w,r as p,j as h}from"./index-3daa9cda.js";window.pb=n;const N=async()=>{var t;try{const[e,y]=await Promise.all([o.list.where("syncStatus").anyOf([i.NotSync,i.NeedResync]).toArray(),o.data.where("syncStatus").anyOf([i.NotSync,i.NeedResync]).toArray()]);for(const a of e){const l=y.filter(({surveyId:s})=>s===a.surveyId),d={};for(let s of l)d[s.surveyForm]=s.data;await v(a,d)}const f=await o.revision.where({syncStatus:i.NotSync}).toArray(),c=[];for(const a of f)await n.collection("survey_revisions").create({user:(t=n.authStore.model)==null?void 0:t.id,survey_offline_id:a.surveyId,form_name:a.surveyForm,created:I(a.surveyDataId),data:a.data}),c.push(a.surveyDataId);return await o.revision.bulkDelete(c),w.success("Đồng bộ thành công"),p("/manage")}catch(e){return e instanceof S&&console.error(e.data),w.error(`Có lỗi xảy ra trong quá trình đồng bộ, vui lòng thử lại
`+e.toString()+`
`+JSON.stringify(e.data)),h({error:"Có lỗi xảy ra"})}};async function v(t,e,y=!0){var f,c,a,l,d,s;try{if(t.remoteSurveyId)await n.collection("surveys").update(t.remoteSurveyId,{survey_data:e}),await o.list.update(t.surveyId,{syncStatus:i.Synced});else{const r=await n.collection("surveys").create({user:(f=n.authStore.model)==null?void 0:f.id,offline_id:t.surveyId,type:t.surveyType,created:t.createdAt,survey_data:e});await o.list.update(t.surveyId,{remoteSurveyId:r.id,syncStatus:i.Synced})}}catch(r){if(r instanceof S&&r.status===404){if(await o.list.update(t.surveyId,{remoteSurveyId:null}),y){const{remoteSurveyId:m,...u}=t;await v(u,e,!1)}return}if(r instanceof S&&r.status===400&&((l=(a=(c=r.data)==null?void 0:c.data)==null?void 0:a.offline_id)==null?void 0:l.code)==="validation_not_unique"){const m=await n.collection("surveys").getList(1,1,{filter:`offline_id = "${t.surveyId}"`});if(m.totalItems===1){const u=(s=(d=m.items)==null?void 0:d[0])==null?void 0:s.id;if(u){await o.list.update(t.surveyId,{remoteSurveyId:u}),y&&await v({...t,remoteSurveyId:u},e,!1);return}}}throw r}}export{N as action};

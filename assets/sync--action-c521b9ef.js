import{d as o,S as u,a as I}from"./db-d72aea4d.js";import{p as i,t as S}from"./pocketbase-8cd5b0bf.js";import{Q as w,r as p,j as h}from"./index-c66b48bc.js";window.pb=i;const D=async()=>{var t;try{const[e,l]=await Promise.all([o.list.where({syncStatus:u.NotSync}).toArray(),o.data.where({syncStatus:u.NotSync}).toArray()]);for(const r of e){const f=l.filter(({surveyId:s})=>s===r.surveyId),c={};for(let s of f)c[s.surveyForm]=s.data;await v(r,c)}const y=await o.revision.where({syncStatus:u.NotSync}).toArray(),n=[];for(const r of y)await i.collection("survey_revisions").create({user:(t=i.authStore.model)==null?void 0:t.id,survey_offline_id:r.surveyId,form_name:r.surveyForm,created:I(r.surveyDataId),data:r.data}),n.push(r.surveyDataId);return await o.revision.bulkDelete(n),w.success("Đồng bộ thành công"),p("/manage")}catch(e){return e instanceof S&&console.error(e.data),w.error(`Có lỗi xảy ra trong quá trình đồng bộ, vui lòng thử lại
`+e.toString()+`
`+JSON.stringify(e.data)),h({error:"Có lỗi xảy ra"})}};async function v(t,e,l=!0){var y,n,r,f,c,s;try{if(t.remoteSurveyId)await i.collection("surveys").update(t.remoteSurveyId,{survey_data:e}),await o.list.update(t.surveyId,{syncStatus:u.Synced});else{const a=await i.collection("surveys").create({user:(y=i.authStore.model)==null?void 0:y.id,offline_id:t.surveyId,type:t.surveyType,created:t.createdAt,survey_data:e});await o.list.update(t.surveyId,{remoteSurveyId:a.id,syncStatus:u.Synced})}}catch(a){if(a instanceof S&&a.status===404){if(await o.list.update(t.surveyId,{remoteSurveyId:null}),l){const{remoteSurveyId:m,...d}=t;await v(d,e,!1)}return}if(a instanceof S&&a.status===400&&((f=(r=(n=a.data)==null?void 0:n.data)==null?void 0:r.offline_id)==null?void 0:f.code)==="validation_not_unique"){const m=await i.collection("surveys").getList(1,1,{filter:`offline_id = "${t.surveyId}"`});if(m.totalItems===1){const d=(s=(c=m.items)==null?void 0:c[0])==null?void 0:s.id;if(d){await o.list.update(t.surveyId,{remoteSurveyId:d}),l&&await v({...t,remoteSurveyId:d},e,!1);return}}}throw a}}export{D as action};

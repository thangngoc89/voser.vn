System.register(["./db-legacy-1a76ad35.js"],(function(t,a){"use strict";var s,e,r;return{setters:[t=>{s=t.d,e=t.m,r=t.S}],execute:function(){t("l",(async(t,a)=>{const e=await s.data.get([t,a]);return"tieu_hoc_form"===a&&void 0===e?await s.data.get([t,"mau_giao_form"]):e})),t("s",(async(t,a,c)=>await s.transaction("rw",["record_list","record_data","record_revisions"],(async()=>{const n={surveyDataId:e(),surveyId:t,surveyForm:a,data:c,syncStatus:r.NotSync};await s.data.put(n,[t,a]),await s.revision.add(n,n.surveyDataId),await s.list.update(t,{syncStatus:r.NotSync})})))),t("c",(async t=>await s.list.add({surveyId:e(),surveyType:t,createdAt:Date.now(),syncStatus:r.NotSync})))}}}));

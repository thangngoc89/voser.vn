import{u as T,b as F,k as V,f as l,h as e,L as S,F as q,g as E,m as j,S as I,l as A}from"./index-c50d1876.js";import{S as C}from"./db-e5ae38dc.js";import{H as X}from"./Heading-9e2462f5.js";import{s as Y}from"./types-e41d77eb.js";import{r as W,t as _,g as N,e as R,a as U,s as H,f as G,b as J,c as P,d as y,h as K,i as w}from"./index-b0b07812.js";function L(n){W(1,arguments);var a=_(n);return a.setHours(0,0,0,0),a}var Z=864e5;function ee(n,a){W(2,arguments);var r=L(n),t=L(a),i=r.getTime()-N(r),o=t.getTime()-N(t);return Math.round((i-o)/Z)}function te(n,a,r){var t,i,o,c,f,p,s,u,m,x;W(2,arguments);var b=_(n),k=_(a),M=J(),g=(t=(i=r==null?void 0:r.locale)!==null&&i!==void 0?i:M.locale)!==null&&t!==void 0?t:R,D=U((o=(c=(f=(p=r==null?void 0:r.weekStartsOn)!==null&&p!==void 0?p:r==null||(s=r.locale)===null||s===void 0||(u=s.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&f!==void 0?f:M.weekStartsOn)!==null&&c!==void 0?c:(m=M.locale)===null||m===void 0||(x=m.options)===null||x===void 0?void 0:x.weekStartsOn)!==null&&o!==void 0?o:0);if(!g.localize)throw new RangeError("locale must contain localize property");if(!g.formatLong)throw new RangeError("locale must contain formatLong property");if(!g.formatRelative)throw new RangeError("locale must contain formatRelative property");var d=ee(b,k);if(isNaN(d))throw new RangeError("Invalid time value");var h;d<-6?h="other":d<-1?h="lastWeek":d<0?h="yesterday":d<1?h="today":d<2?h="tomorrow":d<7?h="nextWeek":h="other";var z=H(b,N(b)),Q=H(k,N(k)),B=g.formatRelative(h,z,Q,{locale:g,weekStartsOn:D});return G(b,B,{locale:g,weekStartsOn:D})}var ae={lessThanXSeconds:{one:"dưới 1 giây",other:"dưới {{count}} giây"},xSeconds:{one:"1 giây",other:"{{count}} giây"},halfAMinute:"nửa phút",lessThanXMinutes:{one:"dưới 1 phút",other:"dưới {{count}} phút"},xMinutes:{one:"1 phút",other:"{{count}} phút"},aboutXHours:{one:"khoảng 1 giờ",other:"khoảng {{count}} giờ"},xHours:{one:"1 giờ",other:"{{count}} giờ"},xDays:{one:"1 ngày",other:"{{count}} ngày"},aboutXWeeks:{one:"khoảng 1 tuần",other:"khoảng {{count}} tuần"},xWeeks:{one:"1 tuần",other:"{{count}} tuần"},aboutXMonths:{one:"khoảng 1 tháng",other:"khoảng {{count}} tháng"},xMonths:{one:"1 tháng",other:"{{count}} tháng"},aboutXYears:{one:"khoảng 1 năm",other:"khoảng {{count}} năm"},xYears:{one:"1 năm",other:"{{count}} năm"},overXYears:{one:"hơn 1 năm",other:"hơn {{count}} năm"},almostXYears:{one:"gần 1 năm",other:"gần {{count}} năm"}},ne=function(a,r,t){var i,o=ae[a];return typeof o=="string"?i=o:r===1?i=o.one:i=o.other.replace("{{count}}",String(r)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?i+" nữa":i+" trước":i};const re=ne;var ie={full:"EEEE, 'ngày' d MMMM 'năm' y",long:"'ngày' d MMMM 'năm' y",medium:"d MMM 'năm' y",short:"dd/MM/y"},oe={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},se={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},le={date:P({formats:ie,defaultWidth:"full"}),time:P({formats:oe,defaultWidth:"full"}),dateTime:P({formats:se,defaultWidth:"full"})};const he=le;var de={lastWeek:"eeee 'tuần trước vào lúc' p",yesterday:"'hôm qua vào lúc' p",today:"'hôm nay vào lúc' p",tomorrow:"'ngày mai vào lúc' p",nextWeek:"eeee 'tới vào lúc' p",other:"P"},ce=function(a,r,t,i){return de[a]};const ue=ce;var me={narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},ge={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},ve={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},fe={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},pe={narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},ye={narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},we={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},be={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}},Te=function(a,r){var t=Number(a),i=r==null?void 0:r.unit;if(i==="quarter")switch(t){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if(i==="day")switch(t){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else{if(i==="week")return t===1?"thứ nhất":"thứ "+t;if(i==="dayOfYear")return t===1?"đầu tiên":"thứ "+t}return String(t)},Ne={ordinalNumber:Te,era:y({values:me,defaultWidth:"wide"}),quarter:y({values:ge,defaultWidth:"wide",formattingValues:ve,defaultFormattingWidth:"wide",argumentCallback:function(a){return a-1}}),month:y({values:fe,defaultWidth:"wide",formattingValues:pe,defaultFormattingWidth:"wide"}),day:y({values:ye,defaultWidth:"wide"}),dayPeriod:y({values:we,defaultWidth:"wide",formattingValues:be,defaultFormattingWidth:"wide"})};const xe=Ne;var ke=/^(\d+)/i,Me=/\d+/i,Ce={narrow:/^(tcn|scn)/i,abbreviated:/^(trước CN|sau CN)/i,wide:/^(trước Công Nguyên|sau Công Nguyên)/i},Pe={any:[/^t/i,/^s/i]},Se={narrow:/^([1234]|i{1,3}v?)/i,abbreviated:/^q([1234]|i{1,3}v?)/i,wide:/^quý ([1234]|i{1,3}v?)/i},_e={any:[/(1|i)$/i,/(2|ii)$/i,/(3|iii)$/i,/(4|iv)$/i]},We={narrow:/^(0?[2-9]|10|11|12|0?1)/i,abbreviated:/^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,wide:/^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},De={narrow:[/0?1$/i,/0?2/i,/3/,/4/,/5/,/6/,/7/,/8/,/9/,/10/,/11/,/12/],abbreviated:[/^thg[ _]?0?1(?!\d)/i,/^thg[ _]?0?2/i,/^thg[ _]?0?3/i,/^thg[ _]?0?4/i,/^thg[ _]?0?5/i,/^thg[ _]?0?6/i,/^thg[ _]?0?7/i,/^thg[ _]?0?8/i,/^thg[ _]?0?9/i,/^thg[ _]?10/i,/^thg[ _]?11/i,/^thg[ _]?12/i],wide:[/^tháng ?(Một|0?1(?!\d))/i,/^tháng ?(Hai|0?2)/i,/^tháng ?(Ba|0?3)/i,/^tháng ?(Tư|0?4)/i,/^tháng ?(Năm|0?5)/i,/^tháng ?(Sáu|0?6)/i,/^tháng ?(Bảy|0?7)/i,/^tháng ?(Tám|0?8)/i,/^tháng ?(Chín|0?9)/i,/^tháng ?(Mười|10)/i,/^tháng ?(Mười ?Một|11)/i,/^tháng ?(Mười ?Hai|12)/i]},Ie={narrow:/^(CN|T2|T3|T4|T5|T6|T7)/i,short:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,abbreviated:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,wide:/^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i},He={narrow:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],short:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],abbreviated:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],wide:[/(Chủ|Chúa) ?Nhật/i,/Hai/i,/Ba/i,/Tư/i,/Năm/i,/Sáu/i,/Bảy/i]},Le={narrow:/^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,abbreviated:/^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,wide:/^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i},$e={any:{am:/^(a|sa)/i,pm:/^(p|ch[^i]*)/i,midnight:/nửa đêm/i,noon:/trưa/i,morning:/sáng/i,afternoon:/chiều/i,evening:/tối/i,night:/^đêm/i}},Oe={ordinalNumber:K({matchPattern:ke,parsePattern:Me,valueCallback:function(a){return parseInt(a,10)}}),era:w({matchPatterns:Ce,defaultMatchWidth:"wide",parsePatterns:Pe,defaultParseWidth:"any"}),quarter:w({matchPatterns:Se,defaultMatchWidth:"wide",parsePatterns:_e,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:w({matchPatterns:We,defaultMatchWidth:"wide",parsePatterns:De,defaultParseWidth:"wide"}),day:w({matchPatterns:Ie,defaultMatchWidth:"wide",parsePatterns:He,defaultParseWidth:"wide"}),dayPeriod:w({matchPatterns:Le,defaultMatchWidth:"wide",parsePatterns:$e,defaultParseWidth:"any"})};const Re=Oe;var ze={code:"vi",formatDistance:re,formatLong:he,formatRelative:ue,localize:xe,match:Re,options:{weekStartsOn:1,firstWeekContainsDate:1}};const Qe=ze;function Be(){const{i18n:n}=T(),a=n.language;return F.useMemo(()=>{switch(a){case"vi":return Qe;case"en":default:return R}},[a])}function Ge(){const{t:n}=T("manage"),{t:a}=T(),{count:r,offset:t,limit:i,list:o,auth:c}=V(),f=Be(),p=new Date;return l("div",{className:"voser-container relative space-y-8 pt-8",children:[l("section",{className:"voser-page-padding flex w-full flex-col justify-between space-y-4 md:flex-row",children:[l("div",{children:[e(X,{tag:1,children:n`survey manage`}),e("p",{className:"leading-6 text-gray-600",children:n`survey manage subtitle`})]}),l("div",{className:"self-end md:self-start",children:[!c&&e(S,{to:"/",className:"h-fit rounded bg-orange-100 p-2 text-orange-600",children:a`ui.log in for syncing`}),c&&e(q,{method:"post",action:"/manage",children:e("button",{className:"h-fit rounded bg-brand p-2 text-white",children:n("sync")})})]})]}),e("section",{className:"voser-sticky z-10 flex items-center justify-end space-x-2 px-2 backdrop-blur-sm md:-mx-2",children:e(Fe,{offset:t,limit:i,count:r})}),e("div",{className:"flex flex-col",children:e("div",{className:"overflow-x-auto",children:e("div",{className:"inline-block min-w-full py-2 align-middle ",children:e("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:l("table",{className:"relative min-w-full divide-y divide-gray-300 rounded border border-gray-200",children:[e("thead",{className:"bg-gray-50",children:l("tr",{children:[e(v,{children:n`col.id`}),e(v,{children:n`col.fullname`}),e(v,{children:n`col.nguoi_kham`}),e(v,{children:n`col.survey type`}),e(v,{children:n`col.sync`}),e(v,{children:n`col.created at`}),e("th",{})]})}),e("tbody",{className:"divide-y divide-gray-200 bg-white",children:o.map(s=>{var u,m;return l("tr",{className:"hover:bg-gray-50",children:[e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 font-mono text-sm font-medium text-gray-500 sm:pl-6",children:s.surveyId.slice(-10)}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-900",children:(u=s.extra)==null?void 0:u.ho_va_ten}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-900",children:(m=s.extra)==null?void 0:m.nguoi_kham}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-900",children:Y(s.surveyType)}),l("td",{className:"center flex justify-center whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:[s.syncStatus==C.NotSync&&e(Ve,{}),s.syncStatus==C.Synced&&e(qe,{}),s.syncStatus==C.NeedResync&&e(Ee,{})]}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:te(s.createdAt,p,{locale:f})}),e("td",{className:"whitespace-nowrap py-4 pr-4 text-sm",children:e(S,{to:E("/survey/:surveyId",{surveyId:s.surveyId}),className:"font-semibold text-brand",children:n`edit`})})]},s.surveyId)})})]})})})})})]})}function v({children:n}){return e("th",{scope:"col",className:"py-3.5 px-3 text-left text-sm text-gray-900 first:pl-4 first:sm:pl-6",children:n})}function Fe({offset:n,limit:a,count:r}){const{t}=T("manage"),i=Math.ceil(r/a),o=Math.floor(n/a)+1;return l(j,{children:[l(O,{to:`/manage/?offset=${(o-2)*a}&limit=${a}`,disabled:o<=1,label:t`previous page`,children:[e(I,{name:"chevron_left",className:"inline h-6 w-6"}),e("span",{className:"hidden md:inline",children:t`previous page`}),e("span",{className:"md:hidden",children:t`previous page_short`})]}),l("span",{className:"text-gray-900",children:[t`page`," ",o,"/",i," (",t("record",{count:r}),")"]}),l(O,{to:`/manage/?offset=${o*a}&limit=${a}`,disabled:o>=i,label:t`next page`,children:[e("span",{className:"hidden md:inline",children:t`next page`}),e("span",{className:"md:hidden",children:t`next page_short`}),e(I,{name:"chevron_right",className:"inline h-6 w-6"})]})]})}const $="rounded bg-gray-100 p-1 text-center text-gray-900 hover:bg-gray-200";function O({to:n,disabled:a,label:r,children:t}){return a?e("span",{className:A($,"cursor-not-allowed opacity-20"),"aria-label":r,"aria-disabled":!0,children:t}):e(S,{to:n,className:$,"aria-label":r,children:t})}const Ve=()=>e("div",{className:"relative mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-400 text-white ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:e("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:e("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),qe=()=>e("div",{className:"relative mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-white ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:e("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:e("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),Ee=()=>e("div",{className:"relative mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-white ring-2 ring-yellow-500 dark:bg-yellow-500 dark:ring-yellow-500",children:e("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 192 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"})})});export{Fe as Pagination,O as PaginationArrow,Ge as default};

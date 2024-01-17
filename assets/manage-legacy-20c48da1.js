System.register(["./index-legacy-1eb2cd50.js","./db-legacy-93e2ed40.js","./Heading-legacy-1afca062.js","./types-legacy-4b98c235.js","./index-legacy-196a83eb.js"],(function(e,t){"use strict";var n,i,a,r,o,h,l,d,s,c,g,u,m,f,v,y,p,w,b,T,N,x,k,M,C,W;return{setters:[e=>{n=e.u,i=e.b,a=e.k,r=e.f,o=e.h,h=e.L,l=e.F,d=e.g,s=e.m,c=e.S,g=e.l},e=>{u=e.S},e=>{m=e.H},e=>{f=e.s},e=>{v=e.r,y=e.t,p=e.g,w=e.e,b=e.a,T=e.s,N=e.f,x=e.b,k=e.c,M=e.d,C=e.h,W=e.i}],execute:function(){function t(e){v(1,arguments);var t=y(e);return t.setHours(0,0,0,0),t}e({Pagination:Q,PaginationArrow:q,default:function(){const{t:e}=n("manage"),{t:t}=n(),{count:s,offset:c,limit:g,list:v,auth:y}=a(),p=function(){const{i18n:e}=n(),t=e.language,a=i.useMemo((()=>"vi"===t?B:w),[t]);return a}(),b=new Date;return r("div",{className:"voser-container relative space-y-8 pt-8",children:[r("section",{className:"voser-page-padding flex w-full flex-col justify-between space-y-4 md:flex-row",children:[r("div",{children:[o(m,{tag:1,children:e`survey manage`}),o("p",{className:"leading-6 text-gray-600",children:e`survey manage subtitle`})]}),r("div",{className:"self-end md:self-start",children:[!y&&o(h,{to:"/",className:"h-fit rounded bg-orange-100 p-2 text-orange-600",children:t`ui.log in for syncing`}),y&&o(l,{method:"post",action:"/manage",children:o("button",{className:"h-fit rounded bg-brand p-2 text-white",children:e("sync")})})]})]}),o("section",{className:"voser-sticky z-10 flex items-center justify-end space-x-2 px-2 backdrop-blur-sm md:-mx-2",children:o(Q,{offset:c,limit:g,count:s})}),o("div",{className:"flex flex-col",children:o("div",{className:"overflow-x-auto",children:o("div",{className:"inline-block min-w-full py-2 align-middle ",children:o("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:r("table",{className:"relative min-w-full divide-y divide-gray-300 rounded border border-gray-200",children:[o("thead",{className:"bg-gray-50",children:r("tr",{children:[o(L,{children:e`col.id`}),o(L,{children:e`col.fullname`}),o(L,{children:e`col.nguoi_kham`}),o(L,{children:e`col.survey type`}),o(L,{children:e`col.sync`}),o(L,{children:e`col.created at`}),o("th",{})]})}),o("tbody",{className:"divide-y divide-gray-200 bg-white",children:v.map((t=>r("tr",{className:"hover:bg-gray-50",children:[o("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 font-mono text-sm font-medium text-gray-500 sm:pl-6",children:t.surveyId.slice(-10)}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-900",children:t.extra?.ho_va_ten}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-900",children:t.extra?.nguoi_kham}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-900",children:f(t.surveyType)}),r("td",{className:"center flex justify-center whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:[t.syncStatus==u.NotSync&&o(R,{}),t.syncStatus==u.Synced&&o($,{}),t.syncStatus==u.NeedResync&&o(E,{})]}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:H(t.createdAt,b,{locale:p})}),o("td",{className:"whitespace-nowrap py-4 pr-4 text-sm",children:o(h,{to:d("/survey/:surveyId",{surveyId:t.surveyId}),className:"font-semibold text-brand",children:e`edit`})})]},t.surveyId)))})]})})})})})]})}});var S=864e5;function H(e,n,i){var a,r,o,h,l,d,s,c,g,u;v(2,arguments);var m=y(e),f=y(n),k=x(),M=null!==(a=null!==(r=null==i?void 0:i.locale)&&void 0!==r?r:k.locale)&&void 0!==a?a:w,C=b(null!==(o=null!==(h=null!==(l=null!==(d=null==i?void 0:i.weekStartsOn)&&void 0!==d?d:null==i||null===(s=i.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==l?l:k.weekStartsOn)&&void 0!==h?h:null===(g=k.locale)||void 0===g||null===(u=g.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==o?o:0);if(!M.localize)throw new RangeError("locale must contain localize property");if(!M.formatLong)throw new RangeError("locale must contain formatLong property");if(!M.formatRelative)throw new RangeError("locale must contain formatRelative property");var W,H=function(e,n){v(2,arguments);var i=t(e),a=t(n),r=i.getTime()-p(i),o=a.getTime()-p(a);return Math.round((r-o)/S)}(m,f);if(isNaN(H))throw new RangeError("Invalid time value");W=H<-6?"other":H<-1?"lastWeek":H<0?"yesterday":H<1?"today":H<2?"tomorrow":H<7?"nextWeek":"other";var P=T(m,p(m)),I=T(f,p(f)),_=M.formatRelative(W,P,I,{locale:M,weekStartsOn:C});return N(m,_,{locale:M,weekStartsOn:C})}var P={lessThanXSeconds:{one:"dưới 1 giây",other:"dưới {{count}} giây"},xSeconds:{one:"1 giây",other:"{{count}} giây"},halfAMinute:"nửa phút",lessThanXMinutes:{one:"dưới 1 phút",other:"dưới {{count}} phút"},xMinutes:{one:"1 phút",other:"{{count}} phút"},aboutXHours:{one:"khoảng 1 giờ",other:"khoảng {{count}} giờ"},xHours:{one:"1 giờ",other:"{{count}} giờ"},xDays:{one:"1 ngày",other:"{{count}} ngày"},aboutXWeeks:{one:"khoảng 1 tuần",other:"khoảng {{count}} tuần"},xWeeks:{one:"1 tuần",other:"{{count}} tuần"},aboutXMonths:{one:"khoảng 1 tháng",other:"khoảng {{count}} tháng"},xMonths:{one:"1 tháng",other:"{{count}} tháng"},aboutXYears:{one:"khoảng 1 năm",other:"khoảng {{count}} năm"},xYears:{one:"1 năm",other:"{{count}} năm"},overXYears:{one:"hơn 1 năm",other:"hơn {{count}} năm"},almostXYears:{one:"gần 1 năm",other:"gần {{count}} năm"}};const I=function(e,t,n){var i,a=P[e];return i="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",String(t)),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?i+" nữa":i+" trước":i};var _={date:k({formats:{full:"EEEE, 'ngày' d MMMM 'năm' y",long:"'ngày' d MMMM 'năm' y",medium:"d MMM 'năm' y",short:"dd/MM/y"},defaultWidth:"full"}),time:k({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:k({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},j={lastWeek:"eeee 'tuần trước vào lúc' p",yesterday:"'hôm qua vào lúc' p",today:"'hôm nay vào lúc' p",tomorrow:"'ngày mai vào lúc' p",nextWeek:"eeee 'tới vào lúc' p",other:"P"};const B={code:"vi",formatDistance:I,formatLong:_,formatRelative:function(e,t,n,i){return j[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),i=null==t?void 0:t.unit;if("quarter"===i)switch(n){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if("day"===i)switch(n){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else{if("week"===i)return 1===n?"thứ nhất":"thứ "+n;if("dayOfYear"===i)return 1===n?"đầu tiên":"thứ "+n}return String(n)},era:M({values:{narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},defaultFormattingWidth:"wide",argumentCallback:function(e){return e-1}}),month:M({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},defaultWidth:"wide",formattingValues:{narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},defaultFormattingWidth:"wide"}),day:M({values:{narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:C({matchPattern:/^(\d+)/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:W({matchPatterns:{narrow:/^(tcn|scn)/i,abbreviated:/^(trước CN|sau CN)/i,wide:/^(trước Công Nguyên|sau Công Nguyên)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^t/i,/^s/i]},defaultParseWidth:"any"}),quarter:W({matchPatterns:{narrow:/^([1234]|i{1,3}v?)/i,abbreviated:/^q([1234]|i{1,3}v?)/i,wide:/^quý ([1234]|i{1,3}v?)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|i)$/i,/(2|ii)$/i,/(3|iii)$/i,/(4|iv)$/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:W({matchPatterns:{narrow:/^(0?[2-9]|10|11|12|0?1)/i,abbreviated:/^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,wide:/^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/0?1$/i,/0?2/i,/3/,/4/,/5/,/6/,/7/,/8/,/9/,/10/,/11/,/12/],abbreviated:[/^thg[ _]?0?1(?!\d)/i,/^thg[ _]?0?2/i,/^thg[ _]?0?3/i,/^thg[ _]?0?4/i,/^thg[ _]?0?5/i,/^thg[ _]?0?6/i,/^thg[ _]?0?7/i,/^thg[ _]?0?8/i,/^thg[ _]?0?9/i,/^thg[ _]?10/i,/^thg[ _]?11/i,/^thg[ _]?12/i],wide:[/^tháng ?(Một|0?1(?!\d))/i,/^tháng ?(Hai|0?2)/i,/^tháng ?(Ba|0?3)/i,/^tháng ?(Tư|0?4)/i,/^tháng ?(Năm|0?5)/i,/^tháng ?(Sáu|0?6)/i,/^tháng ?(Bảy|0?7)/i,/^tháng ?(Tám|0?8)/i,/^tháng ?(Chín|0?9)/i,/^tháng ?(Mười|10)/i,/^tháng ?(Mười ?Một|11)/i,/^tháng ?(Mười ?Hai|12)/i]},defaultParseWidth:"wide"}),day:W({matchPatterns:{narrow:/^(CN|T2|T3|T4|T5|T6|T7)/i,short:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,abbreviated:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,wide:/^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],short:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],abbreviated:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],wide:[/(Chủ|Chúa) ?Nhật/i,/Hai/i,/Ba/i,/Tư/i,/Năm/i,/Sáu/i,/Bảy/i]},defaultParseWidth:"wide"}),dayPeriod:W({matchPatterns:{narrow:/^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,abbreviated:/^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,wide:/^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^(a|sa)/i,pm:/^(p|ch[^i]*)/i,midnight:/nửa đêm/i,noon:/trưa/i,morning:/sáng/i,afternoon:/chiều/i,evening:/tối/i,night:/^đêm/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};function L({children:e}){return o("th",{scope:"col",className:"py-3.5 px-3 text-left text-sm text-gray-900 first:pl-4 first:sm:pl-6",children:e})}function Q({offset:e,limit:t,count:i}){const{t:a}=n("manage"),h=Math.ceil(i/t),l=Math.floor(e/t)+1;return r(s,{children:[r(q,{to:`/manage/?offset=${(l-2)*t}&limit=${t}`,disabled:l<=1,label:a`previous page`,children:[o(c,{name:"chevron_left",className:"inline h-6 w-6"}),o("span",{className:"hidden md:inline",children:a`previous page`}),o("span",{className:"md:hidden",children:a`previous page_short`})]}),r("span",{className:"text-gray-900",children:[a`page`," ",l,"/",h," (",a("record",{count:i}),")"]}),r(q,{to:`/manage/?offset=${l*t}&limit=${t}`,disabled:l>=h,label:a`next page`,children:[o("span",{className:"hidden md:inline",children:a`next page`}),o("span",{className:"md:hidden",children:a`next page_short`}),o(c,{name:"chevron_right",className:"inline h-6 w-6"})]})]})}const z="rounded bg-gray-100 p-1 text-center text-gray-900 hover:bg-gray-200";function q({to:e,disabled:t,label:n,children:i}){return t?o("span",{className:g(z,"cursor-not-allowed opacity-20"),"aria-label":n,"aria-disabled":!0,children:i}):o(h,{to:e,className:z,"aria-label":n,children:i})}const R=()=>o("div",{className:"relative mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-400 text-white ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:o("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:o("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),$=()=>o("div",{className:"relative mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-white ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:o("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:o("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),E=()=>o("div",{className:"relative mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-white ring-2 ring-yellow-500 dark:bg-yellow-500 dark:ring-yellow-500",children:o("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 192 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"})})})}}}));

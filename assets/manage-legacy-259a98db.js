System.register(["./index-legacy-b851a6ee.js","./Heading-legacy-e41ab5f8.js","./index-legacy-f5cb693b.js"],(function(e,t){"use strict";var n,a,i,r,o,h,d,l,s,c,g,u,m,p,f,v,y,w,T,b,N,x,M;return{setters:[e=>{n=e.u,a=e.b,i=e.k,r=e.f,o=e.h,h=e.L,d=e.g,l=e.m,s=e.s,c=e.l},e=>{g=e.H},e=>{u=e.r,m=e.t,p=e.g,f=e.e,v=e.a,y=e.s,w=e.f,T=e.b,b=e.c,N=e.d,x=e.h,M=e.i}],execute:function(){function t(e){u(1,arguments);var t=m(e);return t.setHours(0,0,0,0),t}e({Pagination:Q,PaginationArrow:z,default:function(){const{t:e}=n("manage"),{count:t,offset:l,limit:s,list:c}=i(),u=function(){const{i18n:e}=n(),t=e.language,i=a.useMemo((()=>"vi"===t?_:f),[t]);return i}(),m=new Date;return r("div",{className:"voser-container relative space-y-8 pt-8",children:[r("section",{className:"voser-page-padding flex w-full flex-row justify-between",children:[r("div",{children:[r(g,{tag:1,children:[e`survey manage`," trên thiết bị"]}),o("p",{className:"leading-6 text-gray-600",children:e`survey manage subtitle`})]}),o("button",{type:"button",className:"h-fit rounded bg-brand p-2 text-white",children:"Đồng bộ"})]}),o("section",{className:"voser-sticky z-10 flex items-center justify-end space-x-2 px-2 backdrop-blur-sm md:-mx-2",children:o(Q,{offset:l,limit:s,count:t})}),o("div",{className:"flex flex-col",children:o("div",{className:"overflow-x-auto",children:o("div",{className:"inline-block min-w-full py-2 align-middle ",children:o("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:r("table",{className:"relative min-w-full divide-y divide-gray-300 rounded border border-gray-200",children:[o("thead",{className:"bg-gray-50",children:r("tr",{children:[o(B,{children:e`col.id`}),o(B,{children:e`col.fullname`}),o(B,{children:e`col.survey type`}),o(B,{children:e`col.status`}),o(B,{children:e`col.sync`}),o(B,{children:e`col.created at`}),o("th",{})]})}),o("tbody",{className:"divide-y divide-gray-200 bg-white",children:c.map((t=>r("tr",{className:"hover:bg-gray-50",children:[o("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6",children:t.surveyId}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-900",children:t.surveyType}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:o("span",{className:"rounded-lg bg-orange-100 px-2 py-1 text-orange-600",children:"in progress"})}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:o("span",{className:"rounded-lg bg-red-100 px-2 py-1 text-red-600",children:"no"})}),o("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:W(t.createdAt,m,{locale:u})}),o("td",{className:"whitespace-nowrap py-4 pr-4 text-sm",children:o(h,{to:d("/survey/:surveyId",{surveyId:t.surveyId}),className:"font-semibold text-brand",children:e`edit`})})]},t.surveyId)))})]})})})})})]})}});var C=864e5;function k(e,n){u(2,arguments);var a=t(e),i=t(n),r=a.getTime()-p(a),o=i.getTime()-p(i);return Math.round((r-o)/C)}function W(e,t,n){var a,i,r,o,h,d,l,s,c,g;u(2,arguments);var b=m(e),N=m(t),x=T(),M=null!==(a=null!==(i=null==n?void 0:n.locale)&&void 0!==i?i:x.locale)&&void 0!==a?a:f,C=v(null!==(r=null!==(o=null!==(h=null!==(d=null==n?void 0:n.weekStartsOn)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(s=l.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==h?h:x.weekStartsOn)&&void 0!==o?o:null===(c=x.locale)||void 0===c||null===(g=c.options)||void 0===g?void 0:g.weekStartsOn)&&void 0!==r?r:0);if(!M.localize)throw new RangeError("locale must contain localize property");if(!M.formatLong)throw new RangeError("locale must contain formatLong property");if(!M.formatRelative)throw new RangeError("locale must contain formatRelative property");var W,H=k(b,N);if(isNaN(H))throw new RangeError("Invalid time value");W=H<-6?"other":H<-1?"lastWeek":H<0?"yesterday":H<1?"today":H<2?"tomorrow":H<7?"nextWeek":"other";var P=y(b,p(b)),S=y(N,p(N)),I=M.formatRelative(W,P,S,{locale:M,weekStartsOn:C});return w(b,I,{locale:M,weekStartsOn:C})}var H={lessThanXSeconds:{one:"dưới 1 giây",other:"dưới {{count}} giây"},xSeconds:{one:"1 giây",other:"{{count}} giây"},halfAMinute:"nửa phút",lessThanXMinutes:{one:"dưới 1 phút",other:"dưới {{count}} phút"},xMinutes:{one:"1 phút",other:"{{count}} phút"},aboutXHours:{one:"khoảng 1 giờ",other:"khoảng {{count}} giờ"},xHours:{one:"1 giờ",other:"{{count}} giờ"},xDays:{one:"1 ngày",other:"{{count}} ngày"},aboutXWeeks:{one:"khoảng 1 tuần",other:"khoảng {{count}} tuần"},xWeeks:{one:"1 tuần",other:"{{count}} tuần"},aboutXMonths:{one:"khoảng 1 tháng",other:"khoảng {{count}} tháng"},xMonths:{one:"1 tháng",other:"{{count}} tháng"},aboutXYears:{one:"khoảng 1 năm",other:"khoảng {{count}} năm"},xYears:{one:"1 năm",other:"{{count}} năm"},overXYears:{one:"hơn 1 năm",other:"hơn {{count}} năm"},almostXYears:{one:"gần 1 năm",other:"gần {{count}} năm"}};const P=function(e,t,n){var a,i=H[e];return a="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?a+" nữa":a+" trước":a};var S={date:b({formats:{full:"EEEE, 'ngày' d MMMM 'năm' y",long:"'ngày' d MMMM 'năm' y",medium:"d MMM 'năm' y",short:"dd/MM/y"},defaultWidth:"full"}),time:b({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},I={lastWeek:"eeee 'tuần trước vào lúc' p",yesterday:"'hôm qua vào lúc' p",today:"'hôm nay vào lúc' p",tomorrow:"'ngày mai vào lúc' p",nextWeek:"eeee 'tới vào lúc' p",other:"P"};const _={code:"vi",formatDistance:P,formatLong:S,formatRelative:function(e,t,n,a){return I[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=null==t?void 0:t.unit;if("quarter"===a)switch(n){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if("day"===a)switch(n){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else{if("week"===a)return 1===n?"thứ nhất":"thứ "+n;if("dayOfYear"===a)return 1===n?"đầu tiên":"thứ "+n}return String(n)},era:N({values:{narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},defaultWidth:"wide"}),quarter:N({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},defaultFormattingWidth:"wide",argumentCallback:function(e){return e-1}}),month:N({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},defaultWidth:"wide",formattingValues:{narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},defaultFormattingWidth:"wide"}),day:N({values:{narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},defaultWidth:"wide"}),dayPeriod:N({values:{narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:x({matchPattern:/^(\d+)/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:M({matchPatterns:{narrow:/^(tcn|scn)/i,abbreviated:/^(trước CN|sau CN)/i,wide:/^(trước Công Nguyên|sau Công Nguyên)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^t/i,/^s/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^([1234]|i{1,3}v?)/i,abbreviated:/^q([1234]|i{1,3}v?)/i,wide:/^quý ([1234]|i{1,3}v?)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|i)$/i,/(2|ii)$/i,/(3|iii)$/i,/(4|iv)$/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:M({matchPatterns:{narrow:/^(0?[2-9]|10|11|12|0?1)/i,abbreviated:/^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,wide:/^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/0?1$/i,/0?2/i,/3/,/4/,/5/,/6/,/7/,/8/,/9/,/10/,/11/,/12/],abbreviated:[/^thg[ _]?0?1(?!\d)/i,/^thg[ _]?0?2/i,/^thg[ _]?0?3/i,/^thg[ _]?0?4/i,/^thg[ _]?0?5/i,/^thg[ _]?0?6/i,/^thg[ _]?0?7/i,/^thg[ _]?0?8/i,/^thg[ _]?0?9/i,/^thg[ _]?10/i,/^thg[ _]?11/i,/^thg[ _]?12/i],wide:[/^tháng ?(Một|0?1(?!\d))/i,/^tháng ?(Hai|0?2)/i,/^tháng ?(Ba|0?3)/i,/^tháng ?(Tư|0?4)/i,/^tháng ?(Năm|0?5)/i,/^tháng ?(Sáu|0?6)/i,/^tháng ?(Bảy|0?7)/i,/^tháng ?(Tám|0?8)/i,/^tháng ?(Chín|0?9)/i,/^tháng ?(Mười|10)/i,/^tháng ?(Mười ?Một|11)/i,/^tháng ?(Mười ?Hai|12)/i]},defaultParseWidth:"wide"}),day:M({matchPatterns:{narrow:/^(CN|T2|T3|T4|T5|T6|T7)/i,short:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,abbreviated:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,wide:/^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],short:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],abbreviated:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],wide:[/(Chủ|Chúa) ?Nhật/i,/Hai/i,/Ba/i,/Tư/i,/Năm/i,/Sáu/i,/Bảy/i]},defaultParseWidth:"wide"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,abbreviated:/^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,wide:/^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^(a|sa)/i,pm:/^(p|ch[^i]*)/i,midnight:/nửa đêm/i,noon:/trưa/i,morning:/sáng/i,afternoon:/chiều/i,evening:/tối/i,night:/^đêm/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};function B({children:e}){return o("th",{scope:"col",className:"py-3.5 px-3 text-left text-sm text-gray-900 first:pl-4 first:sm:pl-6",children:e})}function Q({offset:e,limit:t,count:a}){const{t:i}=n("manage"),h=Math.ceil(a/t),d=Math.floor(e/t)+1;return r(l,{children:[r(z,{to:`/manage/?offset=${(d-2)*t}&limit=${t}`,disabled:d<=1,label:i`previous page`,children:[o(s,{name:"chevron_left",className:"inline h-6 w-6"}),o("span",{className:"hidden md:inline",children:i`previous page`}),o("span",{className:"md:hidden",children:i`previous page_short`})]}),r("span",{className:"text-gray-900",children:[i`page`," ",d,"/",h," (",i("record",{count:a}),")"]}),r(z,{to:`/manage/?offset=${d*t}&limit=${t}`,disabled:d>=h,label:i`next page`,children:[o("span",{className:"hidden md:inline",children:i`next page`}),o("span",{className:"md:hidden",children:i`next page_short`}),o(s,{name:"chevron_right",className:"inline h-6 w-6"})]})]})}const q="rounded bg-gray-100 p-1 text-center text-gray-900 hover:bg-gray-200";function z({to:e,disabled:t,label:n,children:a}){return t?o("span",{className:c(q,"cursor-not-allowed opacity-20"),"aria-label":n,"aria-disabled":!0,children:a}):o(h,{to:e,className:q,"aria-label":n,children:a})}}}}));

(()=>{"use strict";const t=document.getElementById("content");function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){return e(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function a(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(t){if(e(1,arguments),!n(t)&&"number"!=typeof t)return!1;var r=a(t);return!isNaN(Number(r))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(t,n){e(2,arguments);var r=a(t).getTime(),o=i(n);return new Date(r+o)}function d(t,n){e(2,arguments);var a=i(n);return o(t,-a)}var u=864e5;function s(t){e(1,arguments);var n=1,r=a(t),i=r.getUTCDay(),o=(i<n?7:0)+i-n;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function c(t){e(1,arguments);var n=a(t),r=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=s(i),d=new Date(0);d.setUTCFullYear(r,0,4),d.setUTCHours(0,0,0,0);var u=s(d);return n.getTime()>=o.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function l(t){e(1,arguments);var n=c(t),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=s(a);return r}var m=6048e5,h={};function f(){return h}function g(t,n){var r,o,d,u,s,c,l,m;e(1,arguments);var h=f(),g=i(null!==(r=null!==(o=null!==(d=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==d?d:h.weekStartsOn)&&void 0!==o?o:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==r?r:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=a(t),p=v.getUTCDay(),w=(p<g?7:0)+p-g;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function v(t,n){var r,o,d,u,s,c,l,m;e(1,arguments);var h=a(t),v=h.getUTCFullYear(),p=f(),w=i(null!==(r=null!==(o=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==d?d:p.firstWeekContainsDate)&&void 0!==o?o:null===(l=p.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,w),b.setUTCHours(0,0,0,0);var y=g(b,n),C=new Date(0);C.setUTCFullYear(v,0,w),C.setUTCHours(0,0,0,0);var T=g(C,n);return h.getTime()>=y.getTime()?v+1:h.getTime()>=T.getTime()?v:v-1}function p(t,n){var a,r,o,d,u,s,c,l;e(1,arguments);var m=f(),h=i(null!==(a=null!==(r=null!==(o=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(u=n.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==r?r:null===(c=m.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==a?a:1),p=v(t,n),w=new Date(0);w.setUTCFullYear(p,0,h),w.setUTCHours(0,0,0,0);var b=g(w,n);return b}var w=6048e5;function b(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const y=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return b("yy"===e?a%100:a,e.length)},C=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):b(n+1,2)},T=function(t,e){return b(t.getUTCDate(),e.length)},k=function(t,e){return b(t.getUTCHours()%12||12,e.length)},M=function(t,e){return b(t.getUTCHours(),e.length)},x=function(t,e){return b(t.getUTCMinutes(),e.length)},E=function(t,e){return b(t.getUTCSeconds(),e.length)},D=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return b(Math.floor(a*Math.pow(10,n-3)),e.length)};function S(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+b(i,2)}function P(t,e){return t%60==0?(t>0?"-":"+")+b(Math.abs(t)/60,2):U(t,e)}function U(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+b(Math.floor(r/60),2)+n+b(r%60,2)}const L={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return y(t,e)},Y:function(t,e,n,a){var r=v(t,a),i=r>0?r:1-r;return"YY"===e?b(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):b(i,e.length)},R:function(t,e){return b(c(t),e.length)},u:function(t,e){return b(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return b(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return b(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return C(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return b(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,n,r,i){var o=function(t,n){e(1,arguments);var r=a(t),i=g(r,n).getTime()-p(r,n).getTime();return Math.round(i/w)+1}(t,i);return"wo"===n?r.ordinalNumber(o,{unit:"week"}):b(o,n.length)},I:function(t,n,r){var i=function(t){e(1,arguments);var n=a(t),r=s(n).getTime()-l(n).getTime();return Math.round(r/m)+1}(t);return"Io"===n?r.ordinalNumber(i,{unit:"week"}):b(i,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):T(t,e)},D:function(t,n,r){var i=function(t){e(1,arguments);var n=a(t),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=n.getTime(),o=r-i;return Math.floor(o/u)+1}(t);return"Do"===n?r.ordinalNumber(i,{unit:"dayOfYear"}):b(i,n.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return b(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return b(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return b(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return k(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):M(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):b(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):b(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):x(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):E(t,e)},S:function(t,e){return D(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return P(r);case"XXXX":case"XX":return U(r);default:return U(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return P(r);case"xxxx":case"xx":return U(r);default:return U(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+S(r,":");default:return"GMT"+U(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+S(r,":");default:return"GMT"+U(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return b(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return b((a._originalDate||t).getTime(),e.length)}};var W=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Y=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},q={p:Y,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return W(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",W(r,e)).replace("{{time}}",Y(i,e))}};const N=q;function O(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var H=["D","DD"],F=["YY","YYYY"];function j(t){return-1!==H.indexOf(t)}function z(t){return-1!==F.indexOf(t)}function A(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function X(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var G,B={date:X({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:X({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:X({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function I(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function J(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,d=i[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?$(u,(function(t){return t.test(d)})):_(u,(function(t){return t.test(d)}));o=t.valueCallback?t.valueCallback(s):s,o=n.valueCallback?n.valueCallback(o):o;var c=e.slice(d.length);return{value:o,rest:c}}}function _(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function $(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const V={code:"en-US",formatDistance:function(t,e,n){var a,r=Q[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:B,formatRelative:function(t,e,n,a){return R[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:I({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:I({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:I({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:I({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:I({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(G={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(G.matchPattern);if(!n)return null;var a=n[0],r=t.match(G.parsePattern);if(!r)return null;var i=G.valueCallback?G.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(a.length);return{value:i,rest:o}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tt=/^'([^]*?)'?$/,et=/''/g,nt=/[a-zA-Z]/;function at(t,n,o){var u,s,c,l,m,h,g,v,p,w,b,y,C,T,k,M,x,E;e(2,arguments);var D=String(n),S=f(),P=null!==(u=null!==(s=null==o?void 0:o.locale)&&void 0!==s?s:S.locale)&&void 0!==u?u:V,U=i(null!==(c=null!==(l=null!==(m=null!==(h=null==o?void 0:o.firstWeekContainsDate)&&void 0!==h?h:null==o||null===(g=o.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==m?m:S.firstWeekContainsDate)&&void 0!==l?l:null===(p=S.locale)||void 0===p||null===(w=p.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==c?c:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=i(null!==(b=null!==(y=null!==(C=null!==(T=null==o?void 0:o.weekStartsOn)&&void 0!==T?T:null==o||null===(k=o.locale)||void 0===k||null===(M=k.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==C?C:S.weekStartsOn)&&void 0!==y?y:null===(x=S.locale)||void 0===x||null===(E=x.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==b?b:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var Y=a(t);if(!r(Y))throw new RangeError("Invalid time value");var q=O(Y),H=d(Y,q),F={firstWeekContainsDate:U,weekStartsOn:W,locale:P,_originalDate:Y},Q=D.match(Z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,N[e])(t,P.formatLong):t})).join("").match(K).map((function(e){if("''"===e)return"'";var a=e[0];if("'"===a)return rt(e);var r=L[a];if(r)return null!=o&&o.useAdditionalWeekYearTokens||!z(e)||A(e,n,String(t)),null!=o&&o.useAdditionalDayOfYearTokens||!j(e)||A(e,n,String(t)),r(H,e,P.localize,F);if(a.match(nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return e})).join("");return Q}function rt(t){var e=t.match(tt);return e?e[1].replace(et,"'"):t}const it=[];class ot{constructor(t,e,n){this.description=t,this.priority=e,this.dueDate=n,this.completed=!1}}function dt(){const t=document.querySelector(".container"),e=document.createElement("form");e.classList.add("task-form"),e.name="task-form",e.textContent="Add New Task";const n=document.createElement("div"),a=document.createElement("label");a.for="task";const r=document.createElement("input");r.type="text",r.id="task",r.name="task",r.placeholder="Task Description",r.required=!0,r.maxLength="40",n.appendChild(a),n.appendChild(r);const i=document.createElement("div"),o=document.createElement("select");o.name="Priority";const d=document.createElement("option");d.value="low",d.textContent="Low";const u=document.createElement("option");u.value="medium",u.textContent="Medium";const s=document.createElement("option");s.value="high",s.textContent="High",i.appendChild(o),o.appendChild(d),o.appendChild(u),o.appendChild(s);const c=document.createElement("div"),l=document.createElement("input");l.type="date",l.id="due-date",l.name="due-date",l.required=!0,c.appendChild(l);const m=document.createElement("button");m.type="submit",m.id="submit-btn",m.textContent="Create Task",e.addEventListener("submit",st),e.appendChild(n),e.appendChild(i),e.appendChild(c),e.appendChild(m),t.appendChild(e)}function ut(t){function e(){const t=this.parentNode.querySelector(".description");console.log(t.textContent);const e=it.findIndex((e=>e.description===t.textContent));it.splice(e,1),this.parentNode.remove()}function n(){const t=this.parentNode,e=this.parentNode.querySelector(".description");if(this.checked){t.classList.add("completed");const n=it.findIndex((t=>t.description===e.textContent));it[n].completed=!0,console.log(it[n].completed)}else{t.classList.remove("completed");const n=it.findIndex((t=>t.description===e.textContent));it[n].completed=!1,console.log(it[n].completed)}}!function(t){const a=document.createElement("li");a.classList.add("task");const r=document.createElement("input");r.classList.add("task-check"),!0===t.completed&&(a.classList.add("completed"),r.checked=!0),r.setAttribute("type","checkbox"),r.addEventListener("click",n);const i=document.createElement("div");i.textContent=`${t.description}`,i.classList.add("description");const o=document.createElement("div"),d=new Date(t.dueDate);d.setMinutes(d.getMinutes()+d.getTimezoneOffset()),o.textContent=at(d,"MM/dd/yy"),o.classList.add("due-date");const u=document.createElement("div");u.textContent=`${t.priority}`,u.classList.add(`${t.priority}`),u.classList.add("priority");const s=document.createElement("button");s.classList.add("task-delete"),s.textContent="X",s.addEventListener("click",e),a.appendChild(r),a.appendChild(i),a.appendChild(o),a.appendChild(u),a.appendChild(s),document.querySelector(".task-list").appendChild(a)}(t)}function st(t){const e=document.querySelector('[name="task"]').value,n=document.querySelector('[name="Priority"]').value,a=document.querySelector('[name="due-date"]').value,r=new ot(e,n,a);!function(t){it.push(t)}(r),ut(r),console.log(it),t.preventDefault(),this.reset(),this.remove()}function ct(){const t=document.querySelector(".task-list");for(;t.firstChild;)t.firstChild.remove()}function lt(){ct(),console.log(it),it.forEach((t=>{ut(t)}))}function mt(){var t;ct(),t=function(){const t=at(new Date,"yyyy-MM-dd");console.log(t),console.log(it);const e=it.filter((e=>e.dueDate===t));return e}(),t.forEach((t=>{ut(t)}))}!function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("div");n.textContent="Task Master";const a=document.createElement("img");a.src="./images/check.svg",a.alt="Task Manager",e.appendChild(n),e.appendChild(a),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("nav-bar");const n=document.createElement("ul"),a=document.createElement("li");a.classList.add("nav-item"),a.classList.add("nav-tasks");const r=document.createElement("img");r.src="./images/tasks.svg",r.alt="tasks";const i=document.createElement("div");i.textContent="Tasks",a.appendChild(r),a.appendChild(i);const o=document.createElement("li");o.classList.add("nav-item"),o.classList.add("nav-today");const d=document.createElement("img");d.src="./images/date2.svg",d.alt="today's tasks";const u=document.createElement("div");u.textContent="Today",o.appendChild(d),o.appendChild(u);const s=document.createElement("li");s.classList.add("nav-item");const c=document.createElement("img");c.src="./images/calendar.svg",c.alt="this week's tasks";const l=document.createElement("div");l.textContent="This Week",s.appendChild(c),s.appendChild(l),n.appendChild(a),n.appendChild(o),n.appendChild(s),e.appendChild(n),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("container");const n=document.createElement("ul");n.classList.add("task-list");const a=document.createElement("li");a.classList.add("task");const r=document.createElement("input");r.classList.add("task-check"),r.setAttribute("type","checkbox");const i=document.createElement("div");i.textContent="Test Task";const o=document.createElement("div");o.textContent="Low",o.classList.add("low"),o.classList.add("priority");const d=document.createElement("button");d.classList.add("task-delete"),d.textContent="X";const u=document.createElement("button");u.classList.add("add-task-btn"),u.textContent="+",a.appendChild(r),a.appendChild(i),a.appendChild(o),a.appendChild(d),n.appendChild(a),e.appendChild(n),e.appendChild(u),t.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("footer");const n=document.createElement("img");n.src="./images/github-icon.svg",n.alt="github icon";const a=document.createElement("div");a.innerHTML="&copy brennanjk",e.appendChild(n),e.appendChild(a),t.appendChild(e)}(),function(){const t=document.querySelector(".add-task-btn"),e=document.querySelector(".nav-tasks"),n=document.querySelector(".nav-today");t.addEventListener("click",dt),e.addEventListener("click",lt),n.addEventListener("click",mt)}()})();
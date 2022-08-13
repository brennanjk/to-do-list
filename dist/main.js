(()=>{"use strict";let e=[];class t{constructor(e,t,n){this.description=e,this.priority=t,this.dueDate=n,this.completed=!1}}function n(){const e=document.querySelector(".task-list");for(;e.firstChild;)e.firstChild.remove()}function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){return a(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function o(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(e){if(a(1,arguments),!r(e)&&"number"!=typeof e)return!1;var t=o(e);return!isNaN(Number(t))}function d(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function s(e,t){a(2,arguments);var n=o(e).getTime(),r=d(t);return new Date(n+r)}function u(e,t){a(2,arguments);var n=d(t);return s(e,-n)}var c=864e5;function l(e){a(1,arguments);var t=1,n=o(e),r=n.getUTCDay(),i=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function m(e){a(1,arguments);var t=o(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=l(r),d=new Date(0);d.setUTCFullYear(n,0,4),d.setUTCHours(0,0,0,0);var s=l(d);return t.getTime()>=i.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function h(e){a(1,arguments);var t=m(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=l(n);return r}var f=6048e5,g={};function v(){return g}function p(e,t){var n,r,i,s,u,c,l,m;a(1,arguments);var h=v(),f=d(null!==(n=null!==(r=null!==(i=null!==(s=null==t?void 0:t.weekStartsOn)&&void 0!==s?s:null==t||null===(u=t.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==i?i:h.weekStartsOn)&&void 0!==r?r:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=o(e),p=g.getUTCDay(),w=(p<f?7:0)+p-f;return g.setUTCDate(g.getUTCDate()-w),g.setUTCHours(0,0,0,0),g}function w(e,t){var n,r,i,s,u,c,l,m;a(1,arguments);var h=o(e),f=h.getUTCFullYear(),g=v(),w=d(null!==(n=null!==(r=null!==(i=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t||null===(u=t.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==r?r:null===(l=g.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(f+1,0,w),b.setUTCHours(0,0,0,0);var y=p(b,t),C=new Date(0);C.setUTCFullYear(f,0,w),C.setUTCHours(0,0,0,0);var k=p(C,t);return h.getTime()>=y.getTime()?f+1:h.getTime()>=k.getTime()?f:f-1}function b(e,t){var n,r,o,i,s,u,c,l;a(1,arguments);var m=v(),h=d(null!==(n=null!==(r=null!==(o=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(s=t.locale)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==r?r:null===(c=m.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),f=w(e,t),g=new Date(0);g.setUTCFullYear(f,0,h),g.setUTCHours(0,0,0,0);var b=p(g,t);return b}var y=6048e5;function C(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const k=function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return C("yy"===t?a%100:a,t.length)},T=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):C(n+1,2)},E=function(e,t){return C(e.getUTCDate(),t.length)},M=function(e,t){return C(e.getUTCHours()%12||12,t.length)},x=function(e,t){return C(e.getUTCHours(),t.length)},D=function(e,t){return C(e.getUTCMinutes(),t.length)},S=function(e,t){return C(e.getUTCSeconds(),t.length)},P=function(e,t){var n=t.length,a=e.getUTCMilliseconds();return C(Math.floor(a*Math.pow(10,n-3)),t.length)};function L(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+C(o,2)}function U(e,t){return e%60==0?(e>0?"-":"+")+C(Math.abs(e)/60,2):W(e,t)}function W(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+C(Math.floor(r/60),2)+n+C(r%60,2)}const q={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return k(e,t)},Y:function(e,t,n,a){var r=w(e,a),o=r>0?r:1-r;return"YY"===t?C(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):C(o,t.length)},R:function(e,t){return C(m(e),t.length)},u:function(e,t){return C(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return C(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return C(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return T(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return C(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var i=function(e,t){a(1,arguments);var n=o(e),r=p(n,t).getTime()-b(n,t).getTime();return Math.round(r/y)+1}(e,r);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):C(i,t.length)},I:function(e,t,n){var r=function(e){a(1,arguments);var t=o(e),n=l(t).getTime()-h(t).getTime();return Math.round(n/f)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):C(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):E(e,t)},D:function(e,t,n){var r=function(e){a(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),i=n-r;return Math.floor(i/c)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):C(r,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return C(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return C(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return C(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return M(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):x(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):C(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):C(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):D(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):S(e,t)},S:function(e,t){return P(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return U(r);case"XXXX":case"XX":return W(r);default:return W(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return U(r);case"xxxx":case"xx":return W(r);default:return W(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+L(r,":");default:return"GMT"+W(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+L(r,":");default:return"GMT"+W(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return C(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return C((a._originalDate||e).getTime(),t.length)}};var N=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},O=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},Y={p:O,P:function(e,t){var n,a=e.match(/(P+)(p+)?/)||[],r=a[1],o=a[2];if(!o)return N(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",N(r,t)).replace("{{time}}",O(o,t))}};const j=Y;function H(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var F=["D","DD"],z=["YY","YYYY"];function A(e){return-1!==F.indexOf(e)}function Q(e){return-1!==z.indexOf(e)}function G(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var X={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function B(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}}var R,I={date:B({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:B({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:B({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},J={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function $(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,d=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[d]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function _(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,d=o[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?K(s,(function(e){return e.test(d)})):V(s,(function(e){return e.test(d)}));i=e.valueCallback?e.valueCallback(u):u,i=n.valueCallback?n.valueCallback(i):i;var c=t.slice(d.length);return{value:i,rest:c}}}function V(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function K(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const Z={code:"en-US",formatDistance:function(e,t,n){var a,r=X[e];return a="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:I,formatRelative:function(e,t,n,a){return J[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:$({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:$({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:$({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:$({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:$({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(R={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(R.matchPattern);if(!n)return null;var a=n[0],r=e.match(R.parsePattern);if(!r)return null;var o=R.valueCallback?R.valueCallback(r[0]):r[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(a.length);return{value:o,rest:i}}),era:_({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:_({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:_({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:_({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:_({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var ee=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ne=/^'([^]*?)'?$/,ae=/''/g,re=/[a-zA-Z]/;function oe(e,t,n){var r,s,c,l,m,h,f,g,p,w,b,y,C,k,T,E,M,x;a(2,arguments);var D=String(t),S=v(),P=null!==(r=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:S.locale)&&void 0!==r?r:Z,L=d(null!==(c=null!==(l=null!==(m=null!==(h=null==n?void 0:n.firstWeekContainsDate)&&void 0!==h?h:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:S.firstWeekContainsDate)&&void 0!==l?l:null===(p=S.locale)||void 0===p||null===(w=p.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==c?c:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=d(null!==(b=null!==(y=null!==(C=null!==(k=null==n?void 0:n.weekStartsOn)&&void 0!==k?k:null==n||null===(T=n.locale)||void 0===T||null===(E=T.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==C?C:S.weekStartsOn)&&void 0!==y?y:null===(M=S.locale)||void 0===M||null===(x=M.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==b?b:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var W=o(e);if(!i(W))throw new RangeError("Invalid time value");var N=H(W),O=u(W,N),Y={firstWeekContainsDate:L,weekStartsOn:U,locale:P,_originalDate:W},F=D.match(te).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,j[t])(e,P.formatLong):e})).join("").match(ee).map((function(a){if("''"===a)return"'";var r=a[0];if("'"===r)return ie(a);var o=q[r];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!Q(a)||G(a,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!A(a)||G(a,t,String(e)),o(O,a,P.localize,Y);if(r.match(re))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return a})).join("");return F}function ie(e){var t=e.match(ne);return t?t[1].replace(ae,"'"):e}function de(){localStorage.setItem("taskList",JSON.stringify(e));const t=JSON.parse(localStorage.getItem("taskList"));console.log(t)}function se(){const e=document.querySelector(".container"),t=document.createElement("form");t.classList.add("task-form"),t.name="task-form",t.textContent="Add New Task";const n=document.createElement("div"),a=document.createElement("label");a.for="task";const r=document.createElement("input");r.type="text",r.id="task",r.name="task",r.placeholder="Task Description",r.required=!0,r.maxLength="40",n.appendChild(a),n.appendChild(r);const o=document.createElement("div"),i=document.createElement("select");i.name="Priority";const d=document.createElement("option");d.value="low",d.textContent="Low";const s=document.createElement("option");s.value="medium",s.textContent="Medium";const u=document.createElement("option");u.value="high",u.textContent="High",o.appendChild(i),i.appendChild(d),i.appendChild(s),i.appendChild(u);const c=document.createElement("div"),l=document.createElement("input");l.type="date",l.id="due-date",l.name="due-date",l.required=!0,c.appendChild(l);const m=document.createElement("button");m.type="submit",m.id="submit-btn",m.textContent="Create Task",t.addEventListener("submit",ue),t.appendChild(n),t.appendChild(o),t.appendChild(c),t.appendChild(m),e.appendChild(t),ce()}function ue(n){const a=document.querySelector('[name="task"]').value,r=document.querySelector('[name="Priority"]').value,o=document.querySelector('[name="due-date"]').value,i=new t(a,r,o),d=e.find((e=>e.description===a));d?(alert("A task with that name already exists. Please enter a different name"),n.preventDefault()):(function(t){e.push(t),de()}(i),le(i),console.log(e),n.preventDefault(),this.reset(),this.remove(),ce())}function ce(){const e=document.querySelector(".add-task-btn");!1===e.disabled?e.disabled=!0:e.disabled=!1}function le(t){function n(){const t=this.parentNode.querySelector(".description");console.log(t.textContent);const n=e.findIndex((e=>e.description===t.textContent));e.splice(n,1),de(),this.parentNode.remove()}function a(){const t=this.parentNode,n=this.parentNode.querySelector(".description");if(this.checked){t.classList.add("completed");const a=e.findIndex((e=>e.description===n.textContent));e[a].completed=!0,console.log(e[a].completed),de()}else{t.classList.remove("completed");const a=e.findIndex((e=>e.description===n.textContent));e[a].completed=!1,console.log(e[a].completed),de()}}!function(e){const t=document.createElement("li");t.classList.add("task");const r=document.createElement("input");r.classList.add("task-check"),!0===e.completed&&(t.classList.add("completed"),r.checked=!0),r.setAttribute("type","checkbox"),r.addEventListener("click",a);const o=document.createElement("div");o.textContent=`${e.description}`,o.classList.add("description");const i=document.createElement("div"),d=new Date(e.dueDate);d.setMinutes(d.getMinutes()+d.getTimezoneOffset()),i.textContent=oe(d,"MM/dd/yy"),i.classList.add("due-date");const s=document.createElement("div");s.textContent=`${e.priority}`,s.classList.add(`${e.priority}`),s.classList.add("priority");const u=document.createElement("button");u.classList.add("task-delete"),u.textContent="X",u.addEventListener("click",n),t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(s),t.appendChild(u),document.querySelector(".task-list").appendChild(t)}(t)}function me(){n(),console.log(e),e.forEach((e=>{le(e)}))}const he=document.getElementById("content");function fe(){var t;n(),t=function(){const t=oe(new Date,"yyyy-MM-dd");console.log(t),console.log(e);const n=e.filter((e=>e.dueDate===t));return n}(),t.forEach((e=>{le(e)}))}function ge(e,t){var n,r,i,s,u,c,l,m;a(1,arguments);var h=v(),f=d(null!==(n=null!==(r=null!==(i=null!==(s=null==t?void 0:t.weekStartsOn)&&void 0!==s?s:null==t||null===(u=t.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==i?i:h.weekStartsOn)&&void 0!==r?r:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=o(e),p=g.getDay(),w=(p<f?7:0)+p-f;return g.setDate(g.getDate()-w),g.setHours(0,0,0,0),g}function ve(){var t;n(),t=function(){const t=new Date,n=e.filter((e=>function(e,t,n){a(2,arguments);var r=ge(e,n),o=ge(t,n);return r.getTime()===o.getTime()}(new Date(e.dueDate),t)));return console.log(n),n}(),t.forEach((e=>{le(e)}))}let pe=[];class we{constructor(e){this.name=e,this.projectTasks=[]}}function be(){const e=document.querySelector(".container"),t=document.createElement("form");t.classList.add("project-form"),t.name="project-form",t.textContent="Add New Project";const n=document.createElement("div"),a=document.createElement("label");a.for="project";const r=document.createElement("input");r.type="text",r.id="project",r.name="project",r.placeholder="New Project",r.required=!0,r.maxLength="20",n.appendChild(a),n.appendChild(r);const o=document.createElement("button");o.type="submit",o.id="submit-project-btn",o.textContent="Create Project",t.addEventListener("submit",ye),t.appendChild(n),t.appendChild(o),e.appendChild(t),ce()}function ye(e){const t=document.querySelector('[name="project"]').value,n=new we(t);!function(e){pe.push(e)}(n),console.log(pe),function(e){const t=document.querySelector(".projects-nav-list"),n=document.createElement("li");n.classList.add("project");const a=document.createElement("img");a.src="../dist/images/blueprint.svg",a.alt="project icon";const r=document.createElement("div");r.textContent=e.name,n.appendChild(a),n.appendChild(r),t.appendChild(n)}(n),e.preventDefault(),this.reset(),this.remove(),ce()}!function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");t.textContent="Task Master";const n=document.createElement("img");n.src="./images/check.svg",n.alt="Task Manager",e.appendChild(t),e.appendChild(n),he.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("nav-bar");const t=document.createElement("ul"),n=document.createElement("li");n.classList.add("nav-item"),n.classList.add("nav-tasks");const a=document.createElement("img");a.src="./images/tasks.svg",a.alt="tasks";const r=document.createElement("div");r.textContent="Tasks",n.appendChild(a),n.appendChild(r);const o=document.createElement("li");o.classList.add("nav-item"),o.classList.add("nav-today");const i=document.createElement("img");i.src="./images/date2.svg",i.alt="today's tasks";const d=document.createElement("div");d.textContent="Today",o.appendChild(i),o.appendChild(d);const s=document.createElement("li");s.classList.add("nav-item"),s.classList.add("nav-week");const u=document.createElement("img");u.src="./images/calendar.svg",u.alt="this week's tasks";const c=document.createElement("div");c.textContent="This Week",s.appendChild(u),s.appendChild(c),t.appendChild(n),t.appendChild(o),t.appendChild(s),e.appendChild(t);const l=document.createElement("div");l.classList.add("projects-nav"),l.textContent="Projects";const m=document.createElement("ul");m.classList="projects-nav-list";const h=document.createElement("button");h.classList="add-project-btn",h.textContent="New Project",l.appendChild(m),l.appendChild(h),e.appendChild(l),he.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("ul");t.classList.add("task-list");const n=document.createElement("button");n.classList.add("add-task-btn"),n.textContent="+",e.appendChild(t),e.appendChild(n),he.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("img");t.src="./images/github-icon.svg",t.alt="github icon";const n=document.createElement("div");n.innerHTML="&copy brennanjk",e.appendChild(t),e.appendChild(n),he.appendChild(e)}(),function(){if(localStorage.getItem("taskList")){const t=JSON.parse(localStorage.getItem("taskList"));e=t,console.log(`The task list is ${e}`)}}(),me(),function(){const e=document.querySelector(".add-task-btn"),t=document.querySelector(".nav-tasks"),n=document.querySelector(".nav-today"),a=document.querySelector(".nav-week"),r=document.querySelector(".add-project-btn");e.addEventListener("click",se),t.addEventListener("click",me),n.addEventListener("click",fe),a.addEventListener("click",ve),r.addEventListener("click",be)}()})();
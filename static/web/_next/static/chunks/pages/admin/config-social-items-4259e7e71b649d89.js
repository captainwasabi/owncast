(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{48689:function(t,n,r){"use strict";r.d(n,{Z:function(){return a}});var e=r(1413),i=r(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},u=r(42135),c=function(t,n){return i.createElement(u.Z,(0,e.Z)((0,e.Z)({},t),{},{ref:n,icon:o}))};c.displayName="DeleteOutlined";var a=i.forwardRef(c)},27561:function(t,n,r){var e=r(67990),i=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(i,""):t}},67990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},23279:function(t,n,r){var e=r(13218),i=r(7771),o=r(14841),u=Math.max,c=Math.min;t.exports=function(t,n,r){var a,f,s,l,v,d,m=0,p=!1,h=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var r=a,e=f;return a=f=void 0,m=n,l=t.apply(e,r)}function g(t){return m=t,v=setTimeout(w,n),p?b(t):l}function x(t){var r=t-d;return void 0===d||r>=n||r<0||h&&t-m>=s}function w(){var t=i();if(x(t))return Z(t);v=setTimeout(w,function(t){var r=n-(t-d);return h?c(r,s-(t-m)):r}(t))}function Z(t){return v=void 0,y&&a?b(t):(a=f=void 0,l)}function _(){var t=i(),r=x(t);if(a=arguments,f=this,d=t,r){if(void 0===v)return g(d);if(h)return clearTimeout(v),v=setTimeout(w,n),b(d)}return void 0===v&&(v=setTimeout(w,n)),l}return n=o(n)||0,e(r)&&(p=!!r.leading,s=(h="maxWait"in r)?u(o(r.maxWait)||0,n):s,y="trailing"in r?!!r.trailing:y),_.cancel=function(){void 0!==v&&clearTimeout(v),m=0,a=d=f=v=void 0},_.flush=function(){return void 0===v?l:Z(i())},_}},33448:function(t,n,r){var e=r(44239),i=r(37005);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==e(t)}},7771:function(t,n,r){var e=r(55639);t.exports=function(){return e.Date.now()}},14841:function(t,n,r){var e=r(27561),i=r(13218),o=r(33448),u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(i(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=i(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=c.test(t);return r||a.test(t)?f(t.slice(2),r?2:8):u.test(t)?NaN:+t}},81009:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-social-items",function(){return r(97063)}])},97063:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var e=r(85893),i=(r(67294),r(84485)),o=r(72877),u=i.Z.Title;function c(){return(0,e.jsxs)("div",{className:"config-social-items",children:[(0,e.jsx)(u,{children:"Social Items"}),(0,e.jsx)(o.h,{})]})}},20943:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}r.d(n,{Z:function(){return e}})},13375:function(t,n,r){"use strict";function e(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r.d(n,{Z:function(){return e}})},29815:function(t,n,r){"use strict";r.d(n,{Z:function(){return u}});var e=r(20943);var i=r(13375);var o=r(91566);function u(t){return function(t){if(Array.isArray(t))return(0,e.Z)(t)}(t)||(0,i.Z)(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(t,n,r){"use strict";r.d(n,{Z:function(){return i}});var e=r(20943);function i(t,n){if(t){if("string"===typeof t)return(0,e.Z)(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,e.Z)(t,n):void 0}}}},function(t){t.O(0,[8939,3903,4267,3626,2877,9774,2888,179],(function(){return n=81009,t(t.s=n);var n}));var n=t.O();_N_E=n}]);
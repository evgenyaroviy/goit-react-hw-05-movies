"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{256:function(t,e,n){n.d(e,{$_:function(){return l},$m:function(){return d},GM:function(){return f},jV:function(){return p},lc:function(){return u}});var r=n(861),a=n(757),o=n.n(a),i=n(243),s="https://api.themoviedb.org/3/",c="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA",u=function(){var t=(0,r.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"trending/movie/day"),{headers:{accept:"application/json",Authorization:"Bearer ".concat(c)}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"search/movie?query=").concat(e),{headers:{accept:"application/json",Authorization:"Bearer ".concat(c)}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"movie/").concat(e),{headers:{accept:"application/json",Authorization:"Bearer ".concat(c)}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"movie/").concat(e,"/credits"),{headers:{accept:"application/json",Authorization:"Bearer ".concat(c)}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"movie/").concat(e,"/reviews"),{headers:{accept:"application/json",Authorization:"Bearer ".concat(c)}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},319:function(t,e,n){n.r(e),n.d(e,{default:function(){return Dt}});var r=n(861),a=n(439),o=n(757),i=n.n(o),s=n(791),c=n(256),u=n(689),l=n(87);function f(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var p=n(433);function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={data:""},g=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||h},y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,w=function t(e,n){var r="",a="",o="",i=function(i){var c=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":a+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":n)+"}":"object"==typeof c?a+=t(c,n?n.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(e){return/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in e)i(s);return r+(n&&o?n+"{"+o+"}":o)+a},j={},k=function t(e){if("object"==typeof e){var n="";for(var r in e)n+=r+t(e[r]);return n}return e},O=function(t,e,n,r,a){var o=k(t),i=j[o]||(j[o]=function(t){for(var e=0,n=11;e<t.length;)n=101*n+t.charCodeAt(e++)>>>0;return"go"+n}(o));if(!j[i]){var s=o!==t?t:function(t){for(var e,n,r=[{}];e=y.exec(t.replace(b,""));)e[4]?r.shift():e[3]?(n=e[3].replace(x," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][e[1]]=e[2].replace(x," ").trim();return r[0]}(t);j[i]=w(a?d({},"@keyframes "+i,s):s,n?"":"."+i)}var c=n&&j.g?j.g:null;return n&&(j.g=j[i]),function(t,e,n,r){r?e.data=e.data.replace(r,t):-1===e.data.indexOf(t)&&(e.data=n?t+e.data:e.data+t)}(j[i],e,r,c),i},E=function(t,e,n){return t.reduce((function(t,r,a){var o=e[a];if(o&&o.call){var i=o(n),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=s?"."+s:i&&"object"==typeof i?i.props?"":w(i,""):!1===i?"":i}return t+r+(null==o?"":o)}),"")};function N(t){var e=this||{},n=t.call?t(e.p):t;return O(n.unshift?n.raw?E(n,[].slice.call(arguments,1),e.p):n.reduce((function(t,n){return Object.assign(t,n&&n.call?n(e.p):n)}),{}):n,g(e.target),e.g,e.o,e.k)}N.bind({g:1});var Z,P,I,z,C,_,A,D,S,J,M,T,B,Y,H,q,F,U,W,G=N.bind({k:1});function L(t,e){var n=this||{};return function(){var r=arguments;function a(o,i){var s=Object.assign({},o),c=s.className||a.className;n.p=Object.assign({theme:P&&P()},s),n.o=/ *go\d+/.test(c),s.className=N.apply(n,r)+(c?" "+c:""),e&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),I&&u[0]&&I(s),Z(u,s)}return e?e(a):a}}var $=function(t,e){return function(t){return"function"==typeof t}(t)?t(e):t},Q=function(){var t=0;return function(){return(++t).toString()}}(),V=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}}(),K=new Map,R=function(t){if(!K.has(t)){var e=setTimeout((function(){K.delete(t),nt({type:4,toastId:t})}),1e3);K.set(t,e)}},X=function t(e,n){switch(n.type){case 0:return v(v({},e),{},{toasts:[n.toast].concat((0,p.Z)(e.toasts)).slice(0,20)});case 1:return n.toast.id&&function(t){var e=K.get(t);e&&clearTimeout(e)}(n.toast.id),v(v({},e),{},{toasts:e.toasts.map((function(t){return t.id===n.toast.id?v(v({},t),n.toast):t}))});case 2:var r=n.toast;return e.toasts.find((function(t){return t.id===r.id}))?t(e,{type:1,toast:r}):t(e,{type:0,toast:r});case 3:var a=n.toastId;return a?R(a):e.toasts.forEach((function(t){R(t.id)})),v(v({},e),{},{toasts:e.toasts.map((function(t){return t.id===a||void 0===a?v(v({},t),{},{visible:!1}):t}))});case 4:return void 0===n.toastId?v(v({},e),{},{toasts:[]}):v(v({},e),{},{toasts:e.toasts.filter((function(t){return t.id!==n.toastId}))});case 5:return v(v({},e),{},{pausedAt:n.time});case 6:var o=n.time-(e.pausedAt||0);return v(v({},e),{},{pausedAt:void 0,toasts:e.toasts.map((function(t){return v(v({},t),{},{pauseDuration:t.pauseDuration+o})}))})}},tt=[],et={toasts:[],pausedAt:void 0},nt=function(t){et=X(et,t),tt.forEach((function(t){t(et)}))},rt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},at=function(t){return function(e,n){var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return v(v({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n),{},{id:(null==n?void 0:n.id)||Q()})}(e,t,n);return nt({type:2,toast:r}),r.id}},ot=function(t,e){return at("blank")(t,e)};ot.error=at("error"),ot.success=at("success"),ot.loading=at("loading"),ot.custom=at("custom"),ot.dismiss=function(t){nt({type:3,toastId:t})},ot.remove=function(t){return nt({type:4,toastId:t})},ot.promise=function(t,e,n){var r=ot.loading(e.loading,v(v({},n),null==n?void 0:n.loading));return t.then((function(t){return ot.success($(e.success,t),v(v({id:r},n),null==n?void 0:n.success)),t})).catch((function(t){ot.error($(e.error,t),v(v({id:r},n),null==n?void 0:n.error))})),t};var it=function(t,e){nt({type:1,toast:{id:t,height:e}})},st=function(){nt({type:5,time:Date.now()})},ct=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,s.useState)(et),n=(0,a.Z)(e,2),r=n[0],o=n[1];(0,s.useEffect)((function(){return tt.push(o),function(){var t=tt.indexOf(o);t>-1&&tt.splice(t,1)}}),[r]);var i=r.toasts.map((function(e){var n,r;return v(v(v(v({},t),t[e.type]),e),{},{duration:e.duration||(null==(n=t[e.type])?void 0:n.duration)||(null==t?void 0:t.duration)||rt[e.type],style:v(v(v({},t.style),null==(r=t[e.type])?void 0:r.style),e.style)})}));return v(v({},r),{},{toasts:i})}(t),n=e.toasts,r=e.pausedAt;(0,s.useEffect)((function(){if(!r){var t=Date.now(),e=n.map((function(e){if(e.duration!==1/0){var n=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(!(n<0))return setTimeout((function(){return ot.dismiss(e.id)}),n);e.visible&&ot.dismiss(e.id)}}));return function(){e.forEach((function(t){return t&&clearTimeout(t)}))}}}),[n,r]);var o=(0,s.useCallback)((function(){r&&nt({type:6,time:Date.now()})}),[r]),i=(0,s.useCallback)((function(t,e){var r,a=e||{},o=a.reverseOrder,i=void 0!==o&&o,s=a.gutter,c=void 0===s?8:s,u=a.defaultPosition,l=n.filter((function(e){return(e.position||u)===(t.position||u)&&e.height})),f=l.findIndex((function(e){return e.id===t.id})),d=l.filter((function(t,e){return e<f&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,(0,p.Z)(i?[d+1]:[0,d])).reduce((function(t,e){return t+(e.height||0)+c}),0)}),[n]);return{toasts:n,handlers:{updateHeight:it,startPause:st,endPause:o,calculateOffset:i}}},ut=G(z||(z=f(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),lt=G(C||(C=f(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ft=G(_||(_=f(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),pt=L("div")(A||(A=f(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),ut,lt,(function(t){return t.secondary||"#fff"}),ft),dt=G(D||(D=f(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),mt=L("div")(S||(S=f(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),dt),vt=G(J||(J=f(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),ht=G(M||(M=f(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),gt=L("div")(T||(T=f(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),vt,ht,(function(t){return t.secondary||"#fff"})),yt=L("div")(B||(B=f(["\n  position: absolute;\n"]))),bt=L("div")(Y||(Y=f(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),xt=G(H||(H=f(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),wt=L("div")(q||(q=f(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),xt),jt=function(t){var e=t.toast,n=e.icon,r=e.type,a=e.iconTheme;return void 0!==n?"string"==typeof n?s.createElement(wt,null,n):n:"blank"===r?null:s.createElement(bt,null,s.createElement(mt,v({},a)),"loading"!==r&&s.createElement(yt,null,"error"===r?s.createElement(pt,v({},a)):s.createElement(gt,v({},a))))},kt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Ot=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Et=L("div")(F||(F=f(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Nt=L("div")(U||(U=f(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Zt=s.memo((function(t){var e=t.toast,n=t.position,r=t.style,o=t.children,i=e.height?function(t,e){var n=t.includes("top")?1:-1,r=V()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[kt(n),Ot(n)],o=(0,a.Z)(r,2),i=o[0],s=o[1];return{animation:e?"".concat(G(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(G(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(e.position||n||"top-center",e.visible):{opacity:0},c=s.createElement(jt,{toast:e}),u=s.createElement(Nt,v({},e.ariaProps),$(e.message,e));return s.createElement(Et,{className:e.className,style:v(v(v({},i),r),e.style)},"function"==typeof o?o({icon:c,message:u}):s.createElement(s.Fragment,null,c,u))}));!function(t,e,n,r){w.p=e,Z=t,P=n,I=r}(s.createElement);var Pt=function(t){var e=t.id,n=t.className,r=t.style,a=t.onHeightUpdate,o=t.children,i=s.useCallback((function(t){if(t){var n=function(){var n=t.getBoundingClientRect().height;a(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,a]);return s.createElement("div",{ref:i,className:n,style:r},o)},It=N(W||(W=f(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),zt=function(t){var e=t.reverseOrder,n=t.position,r=void 0===n?"top-center":n,a=t.toastOptions,o=t.gutter,i=t.children,c=t.containerStyle,u=t.containerClassName,l=ct(a),f=l.toasts,p=l.handlers;return s.createElement("div",{style:v({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:u,onMouseEnter:p.startPause,onMouseLeave:p.endPause},f.map((function(t){var n=t.position||r,a=function(t,e){var n=t.includes("top"),r=n?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return v(v({left:0,right:0,display:"flex",position:"absolute",transition:V()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(e*(n?1:-1),"px)")},r),a)}(n,p.calculateOffset(t,{reverseOrder:e,gutter:o,defaultPosition:r}));return s.createElement(Pt,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?It:"",style:a},"custom"===t.type?$(t.message,t):i?i(t):s.createElement(Zt,{toast:t,position:n}))})))},Ct=ot,_t={page:"moviesPage_page__aB4eG",links:"moviesPage_links__IcKHa"},At=n(184),Dt=function(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],o=e[1],f=(0,s.useState)([]),p=(0,a.Z)(f,2),d=p[0],m=p[1],v=(0,s.useState)(""),h=(0,a.Z)(v,2),g=h[0],y=h[1],b=(0,l.lr)(),x=(0,a.Z)(b,2),w=x[0],j=x[1],k=w.get("query"),O=(0,u.TH)(),E=(0,s.useRef)(!0),N=(0,s.useCallback)(function(){var t=(0,r.Z)(i().mark((function t(e){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n&&!k){t.next=22;break}return t.prev=1,t.next=4,(0,c.$_)(e);case 4:if(r=t.sent,0!==(a=r.results).length){t.next=10;break}return t.abrupt("return",Ct.error("Sorry, we couldn't find any movies. Please, try again."));case 10:j({query:n||k}),m(a);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),y(t.t0.message);case 17:return t.prev=17,o(""),t.finish(17);case 20:t.next=23;break;case 22:return t.abrupt("return",Ct.error("Please enter keywords for search"));case 23:case"end":return t.stop()}}),t,null,[[1,14,17,20]])})));return function(e){return t.apply(this,arguments)}}(),[n,k,m,j]);return(0,s.useEffect)((function(){!0===E.current&&k&&N(k)}),[k,N,j]),(0,At.jsxs)("div",{children:[(0,At.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),N(n)},children:[(0,At.jsx)("input",{className:_t.input,type:"text",autoComplete:"off",name:"query",placeholder:"Search",value:n,onChange:function(t){o(t.target.value),E.current=!1}}),(0,At.jsx)("button",{type:"submit",className:_t.button,children:"Search"})]}),d.length>0?(0,At.jsx)("ul",{className:_t.page,children:d.map((function(t){return(0,At.jsx)(l.rU,{to:"/movies/".concat(t.id),className:_t.links,state:O,children:t.title},t.id)}))}):(0,At.jsx)("div",{children:g}),(0,At.jsx)(zt,{})]})}}}]);
//# sourceMappingURL=319.a4312533.chunk.js.map
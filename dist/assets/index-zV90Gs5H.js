(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Sg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ig={exports:{}},ol={},Ag={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),I_=Symbol.for("react.portal"),A_=Symbol.for("react.fragment"),k_=Symbol.for("react.strict_mode"),C_=Symbol.for("react.profiler"),P_=Symbol.for("react.provider"),x_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),N_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),b_=Symbol.for("react.lazy"),Md=Symbol.iterator;function O_(t){return t===null||typeof t!="object"?null:(t=Md&&t[Md]||t["@@iterator"],typeof t=="function"?t:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cg=Object.assign,Pg={};function yi(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||kg}yi.prototype.isReactComponent={};yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xg(){}xg.prototype=yi.prototype;function Vf(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||kg}var Lf=Vf.prototype=new xg;Lf.constructor=Vf;Cg(Lf,yi.prototype);Lf.isPureReactComponent=!0;var Fd=Array.isArray,Rg=Object.prototype.hasOwnProperty,Mf={current:null},Ng={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rg.call(e,r)&&!Ng.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ys,type:t,key:s,ref:o,props:i,_owner:Mf.current}}function V_(t,e){return{$$typeof:Ys,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ys}function L_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $d=/\/+/g;function nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L_(""+t.key):e.toString(36)}function ea(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ys:case I_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nu(o,0):r,Fd(i)?(n="",t!=null&&(n=t.replace($d,"$&/")+"/"),ea(i,e,n,"",function(u){return u})):i!=null&&(Ff(i)&&(i=V_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($d,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+nu(s,a);o+=ea(s,e,n,l,i)}else if(l=O_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+nu(s,a++),o+=ea(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _o(t,e,n){if(t==null)return t;var r=[],i=0;return ea(t,r,"","",function(s){return e.call(n,s,i++)}),r}function M_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},ta={transition:null},F_={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ta,ReactCurrentOwner:Mf};H.Children={map:_o,forEach:function(t,e,n){_o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _o(t,function(){e++}),e},toArray:function(t){return _o(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=yi;H.Fragment=A_;H.Profiler=C_;H.PureComponent=Vf;H.StrictMode=k_;H.Suspense=N_;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rg.call(e,l)&&!Ng.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ys,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:x_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P_,_context:t},t.Consumer=t};H.createElement=Dg;H.createFactory=function(t){var e=Dg.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:R_,render:t}};H.isValidElement=Ff;H.lazy=function(t){return{$$typeof:b_,_payload:{_status:-1,_result:t},_init:M_}};H.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=ta.transition;ta.transition={};try{t()}finally{ta.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Je.current.useCallback(t,e)};H.useContext=function(t){return Je.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};H.useEffect=function(t,e){return Je.current.useEffect(t,e)};H.useId=function(){return Je.current.useId()};H.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Je.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};H.useRef=function(t){return Je.current.useRef(t)};H.useState=function(t){return Je.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Je.current.useTransition()};H.version="18.2.0";Ag.exports=H;var $t=Ag.exports;const $f=Sg($t);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_=$t,j_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),U_=Object.prototype.hasOwnProperty,B_=$_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H_={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)U_.call(e,r)&&!H_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:j_,type:t,key:s,ref:o,props:i,_owner:B_.current}}ol.Fragment=z_;ol.jsx=bg;ol.jsxs=bg;Ig.exports=ol;var _=Ig.exports,Yu={},Og={exports:{}},ft={},Vg={exports:{}},Lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,$){var U=D.length;D.push($);e:for(;0<U;){var pe=U-1>>>1,Ae=D[pe];if(0<i(Ae,$))D[pe]=$,D[U]=Ae,U=pe;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var $=D[0],U=D.pop();if(U!==$){D[0]=U;e:for(var pe=0,Ae=D.length,vo=Ae>>>1;pe<vo;){var Hn=2*(pe+1)-1,tu=D[Hn],Wn=Hn+1,yo=D[Wn];if(0>i(tu,U))Wn<Ae&&0>i(yo,tu)?(D[pe]=yo,D[Wn]=U,pe=Wn):(D[pe]=tu,D[Hn]=U,pe=Hn);else if(Wn<Ae&&0>i(yo,U))D[pe]=yo,D[Wn]=U,pe=Wn;else break e}}return $}function i(D,$){var U=D.sortIndex-$.sortIndex;return U!==0?U:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=D)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function y(D){if(w=!1,m(D),!v)if(n(l)!==null)v=!0,Zl(S);else{var $=n(u);$!==null&&eu(y,$.startTime-D)}}function S(D,$){v=!1,w&&(w=!1,p(O),O=-1),g=!0;var U=h;try{for(m($),f=n(l);f!==null&&(!(f.expirationTime>$)||D&&!Et());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,h=f.priorityLevel;var Ae=pe(f.expirationTime<=$);$=t.unstable_now(),typeof Ae=="function"?f.callback=Ae:f===n(l)&&r(l),m($)}else r(l);f=n(l)}if(f!==null)var vo=!0;else{var Hn=n(u);Hn!==null&&eu(y,Hn.startTime-$),vo=!1}return vo}finally{f=null,h=U,g=!1}}var P=!1,x=null,O=-1,G=5,z=-1;function Et(){return!(t.unstable_now()-z<G)}function xi(){if(x!==null){var D=t.unstable_now();z=D;var $=!0;try{$=x(!0,D)}finally{$?Ri():(P=!1,x=null)}}else P=!1}var Ri;if(typeof d=="function")Ri=function(){d(xi)};else if(typeof MessageChannel<"u"){var Ld=new MessageChannel,S_=Ld.port2;Ld.port1.onmessage=xi,Ri=function(){S_.postMessage(null)}}else Ri=function(){I(xi,0)};function Zl(D){x=D,P||(P=!0,Ri())}function eu(D,$){O=I(function(){D(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Zl(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var U=h;h=$;try{return D()}finally{h=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var U=h;h=D;try{return $()}finally{h=U}},t.unstable_scheduleCallback=function(D,$,U){var pe=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?pe+U:pe):U=pe,D){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=U+Ae,D={id:c++,callback:$,priorityLevel:D,startTime:U,expirationTime:Ae,sortIndex:-1},U>pe?(D.sortIndex=U,e(u,D),n(l)===null&&D===n(u)&&(w?(p(O),O=-1):w=!0,eu(y,U-pe))):(D.sortIndex=Ae,e(l,D),v||g||(v=!0,Zl(S))),D},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(D){var $=h;return function(){var U=h;h=$;try{return D.apply(this,arguments)}finally{h=U}}}})(Lg);Vg.exports=Lg;var W_=Vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg=$t,ut=W_;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fg=new Set,ps={};function wr(t,e){ri(t,e),ri(t+"Capture",e)}function ri(t,e){for(ps[t]=e,t=0;t<e.length;t++)Fg.add(e[t])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jd={},zd={};function Q_(t){return Xu.call(zd,t)?!0:Xu.call(jd,t)?!1:q_.test(t)?zd[t]=!0:(jd[t]=!0,!1)}function K_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G_(t,e,n,r){if(e===null||typeof e>"u"||K_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Me[t]=new Ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Me[e]=new Ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Me[t]=new Ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Me[t]=new Ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Me[t]=new Ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Me[t]=new Ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Me[t]=new Ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Me[t]=new Ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Me[t]=new Ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var jf=/[\-:]([a-z])/g;function zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jf,zf);Me[e]=new Ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jf,zf);Me[e]=new Ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jf,zf);Me[e]=new Ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Me[t]=new Ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Me[t]=new Ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uf(t,e,n,r){var i=Me.hasOwnProperty(e)?Me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(G_(e,n,i,r)&&(n=null),r||i===null?Q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),Wf=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),Ud=Symbol.iterator;function Ni(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,ru;function Ui(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var iu=!1;function su(t,e){if(!t||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ui(t):""}function Y_(t){switch(t.tag){case 5:return Ui(t.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 2:case 15:return t=su(t.type,!1),t;case 11:return t=su(t.type.render,!1),t;case 1:return t=su(t.type,!0),t;default:return""}}function tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xr:return"Fragment";case Pr:return"Portal";case Ju:return"Profiler";case Bf:return"StrictMode";case Zu:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case $g:return(t._context.displayName||"Context")+".Provider";case Hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wf:return e=t.displayName||null,e!==null?e:tc(t.type)||"Memo";case fn:e=t._payload,t=t._init;try{return tc(t(e))}catch{}}return null}function X_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J_(t){var e=Ug(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=J_(t))}function Bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ug(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nc(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hg(t,e){e=e.checked,e!=null&&Uf(t,"checked",e,!1)}function rc(t,e){Hg(t,e);var n=Nn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,Nn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function Hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Bi(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nn(n)}}function Wg(t,e){var n=Nn(e.value),r=Nn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var To,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=To.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z_=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(t){Z_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xi[e]=Xi[t]})});function Kg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xi.hasOwnProperty(t)&&Xi[t]?(""+e).trim():e+"px"}function Gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ew=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(t,e){if(e){if(ew[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cc=null,Wr=null,qr=null;function Qd(t){if(t=Zs(t)){if(typeof cc!="function")throw Error(T(280));var e=t.stateNode;e&&(e=fl(e),cc(t.stateNode,t.type,e))}}function Yg(t){Wr?qr?qr.push(t):qr=[t]:Wr=t}function Xg(){if(Wr){var t=Wr,e=qr;if(qr=Wr=null,Qd(t),e)for(t=0;t<e.length;t++)Qd(e[t])}}function Jg(t,e){return t(e)}function Zg(){}var ou=!1;function ev(t,e,n){if(ou)return t(e,n);ou=!0;try{return Jg(t,e,n)}finally{ou=!1,(Wr!==null||qr!==null)&&(Zg(),Xg())}}function gs(t,e){var n=t.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var fc=!1;if(Jt)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){fc=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{fc=!1}function tw(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ji=!1,ya=null,_a=!1,hc=null,nw={onError:function(t){Ji=!0,ya=t}};function rw(t,e,n,r,i,s,o,a,l){Ji=!1,ya=null,tw.apply(nw,arguments)}function iw(t,e,n,r,i,s,o,a,l){if(rw.apply(this,arguments),Ji){if(Ji){var u=ya;Ji=!1,ya=null}else throw Error(T(198));_a||(_a=!0,hc=u)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kd(t){if(Er(t)!==t)throw Error(T(188))}function sw(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kd(i),t;if(s===r)return Kd(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function nv(t){return t=sw(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var iv=ut.unstable_scheduleCallback,Gd=ut.unstable_cancelCallback,ow=ut.unstable_shouldYield,aw=ut.unstable_requestPaint,me=ut.unstable_now,lw=ut.unstable_getCurrentPriorityLevel,Qf=ut.unstable_ImmediatePriority,sv=ut.unstable_UserBlockingPriority,wa=ut.unstable_NormalPriority,uw=ut.unstable_LowPriority,ov=ut.unstable_IdlePriority,al=null,jt=null;function cw(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(al,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:dw,fw=Math.log,hw=Math.LN2;function dw(t){return t>>>=0,t===0?32:31-(fw(t)/hw|0)|0}var So=64,Io=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ea(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Hi(a):(s&=o,s!==0&&(r=Hi(s)))}else o=n&~i,o!==0?r=Hi(o):s!==0&&(r=Hi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function pw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=pw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function av(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function gw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,Gf,cv,fv,hv,pc=!1,Ao=[],wn=null,En=null,Tn=null,vs=new Map,ys=new Map,dn=[],vw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ys.delete(e.pointerId)}}function bi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Zs(e),e!==null&&Gf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yw(t,e,n,r,i){switch(e){case"focusin":return wn=bi(wn,t,e,n,r,i),!0;case"dragenter":return En=bi(En,t,e,n,r,i),!0;case"mouseover":return Tn=bi(Tn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vs.set(s,bi(vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ys.set(s,bi(ys.get(s)||null,t,e,n,r,i)),!0}return!1}function dv(t){var e=Yn(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,hv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return e=Zs(n),e!==null&&Gf(e),t.blockedOn=n,!1;e.shift()}return!0}function Xd(t,e,n){na(t)&&n.delete(e)}function _w(){pc=!1,wn!==null&&na(wn)&&(wn=null),En!==null&&na(En)&&(En=null),Tn!==null&&na(Tn)&&(Tn=null),vs.forEach(Xd),ys.forEach(Xd)}function Oi(t,e){t.blockedOn===e&&(t.blockedOn=null,pc||(pc=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,_w)))}function _s(t){function e(i){return Oi(i,t)}if(0<Ao.length){Oi(Ao[0],t);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wn!==null&&Oi(wn,t),En!==null&&Oi(En,t),Tn!==null&&Oi(Tn,t),vs.forEach(e),ys.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)dv(n),n.blockedOn===null&&dn.shift()}var Qr=an.ReactCurrentBatchConfig,Ta=!0;function ww(t,e,n,r){var i=J,s=Qr.transition;Qr.transition=null;try{J=1,Yf(t,e,n,r)}finally{J=i,Qr.transition=s}}function Ew(t,e,n,r){var i=J,s=Qr.transition;Qr.transition=null;try{J=4,Yf(t,e,n,r)}finally{J=i,Qr.transition=s}}function Yf(t,e,n,r){if(Ta){var i=mc(t,e,n,r);if(i===null)vu(t,e,r,Sa,n),Yd(t,r);else if(yw(i,t,e,n,r))r.stopPropagation();else if(Yd(t,r),e&4&&-1<vw.indexOf(t)){for(;i!==null;){var s=Zs(i);if(s!==null&&uv(s),s=mc(t,e,n,r),s===null&&vu(t,e,r,Sa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vu(t,e,r,null,n)}}var Sa=null;function mc(t,e,n,r){if(Sa=null,t=qf(r),t=Yn(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sa=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lw()){case Qf:return 1;case sv:return 4;case wa:case uw:return 16;case ov:return 536870912;default:return 16}default:return 16}}var mn=null,Xf=null,ra=null;function mv(){if(ra)return ra;var t,e=Xf,n=e.length,r,i="value"in mn?mn.value:mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ra=i.slice(t,1<r?1-r:void 0)}function ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Jd(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ko:Jd,this.isPropagationStopped=Jd,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),e}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jf=ht(_i),Js=ue({},_i,{view:0,detail:0}),Tw=ht(Js),lu,uu,Vi,ll=ue({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(lu=t.screenX-Vi.screenX,uu=t.screenY-Vi.screenY):uu=lu=0,Vi=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),Zd=ht(ll),Sw=ue({},ll,{dataTransfer:0}),Iw=ht(Sw),Aw=ue({},Js,{relatedTarget:0}),cu=ht(Aw),kw=ue({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),Cw=ht(kw),Pw=ue({},_i,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xw=ht(Pw),Rw=ue({},_i,{data:0}),ep=ht(Rw),Nw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ow(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bw[t])?!!e[t]:!1}function Zf(){return Ow}var Vw=ue({},Js,{key:function(t){if(t.key){var e=Nw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lw=ht(Vw),Mw=ue({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=ht(Mw),Fw=ue({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),$w=ht(Fw),jw=ue({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),zw=ht(jw),Uw=ue({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bw=ht(Uw),Hw=[9,13,27,32],eh=Jt&&"CompositionEvent"in window,Zi=null;Jt&&"documentMode"in document&&(Zi=document.documentMode);var Ww=Jt&&"TextEvent"in window&&!Zi,gv=Jt&&(!eh||Zi&&8<Zi&&11>=Zi),np=" ",rp=!1;function vv(t,e){switch(t){case"keyup":return Hw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function qw(t,e){switch(t){case"compositionend":return yv(e);case"keypress":return e.which!==32?null:(rp=!0,np);case"textInput":return t=e.data,t===np&&rp?null:t;default:return null}}function Qw(t,e){if(Rr)return t==="compositionend"||!eh&&vv(t,e)?(t=mv(),ra=Xf=mn=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gv&&e.locale!=="ko"?null:e.data;default:return null}}var Kw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kw[t.type]:e==="textarea"}function _v(t,e,n,r){Yg(r),e=Ia(e,"onChange"),0<e.length&&(n=new Jf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var es=null,ws=null;function Gw(t){Rv(t,0)}function ul(t){var e=br(t);if(Bg(e))return t}function Yw(t,e){if(t==="change")return e}var wv=!1;if(Jt){var fu;if(Jt){var hu="oninput"in document;if(!hu){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),hu=typeof sp.oninput=="function"}fu=hu}else fu=!1;wv=fu&&(!document.documentMode||9<document.documentMode)}function op(){es&&(es.detachEvent("onpropertychange",Ev),ws=es=null)}function Ev(t){if(t.propertyName==="value"&&ul(ws)){var e=[];_v(e,ws,t,qf(t)),ev(Gw,e)}}function Xw(t,e,n){t==="focusin"?(op(),es=e,ws=n,es.attachEvent("onpropertychange",Ev)):t==="focusout"&&op()}function Jw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(ws)}function Zw(t,e){if(t==="click")return ul(e)}function eE(t,e){if(t==="input"||t==="change")return ul(e)}function tE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xt=typeof Object.is=="function"?Object.is:tE;function Es(t,e){if(xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xu.call(e,i)||!xt(t[i],e[i]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,e){var n=ap(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ap(n)}}function Tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sv(){for(var t=window,e=va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=va(t.document)}return e}function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nE(t){var e=Sv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(r!==null&&th(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lp(n,s);var o=lp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rE=Jt&&"documentMode"in document&&11>=document.documentMode,Nr=null,gc=null,ts=null,vc=!1;function up(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||Nr==null||Nr!==va(r)||(r=Nr,"selectionStart"in r&&th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&Es(ts,r)||(ts=r,r=Ia(gc,"onSelect"),0<r.length&&(e=new Jf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Nr)))}function Co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dr={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},du={},Iv={};Jt&&(Iv=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function cl(t){if(du[t])return du[t];if(!Dr[t])return t;var e=Dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Iv)return du[t]=e[n];return t}var Av=cl("animationend"),kv=cl("animationiteration"),Cv=cl("animationstart"),Pv=cl("transitionend"),xv=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){xv.set(t,e),wr(e,[t])}for(var pu=0;pu<cp.length;pu++){var mu=cp[pu],iE=mu.toLowerCase(),sE=mu[0].toUpperCase()+mu.slice(1);$n(iE,"on"+sE)}$n(Av,"onAnimationEnd");$n(kv,"onAnimationIteration");$n(Cv,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Pv,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function fp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iw(r,e,void 0,t),t.currentTarget=null}function Rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;fp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;fp(i,a,u),s=l}}}if(_a)throw t=hc,_a=!1,hc=null,t}function te(t,e){var n=e[Tc];n===void 0&&(n=e[Tc]=new Set);var r=t+"__bubble";n.has(r)||(Nv(e,t,2,!1),n.add(r))}function gu(t,e,n){var r=0;e&&(r|=4),Nv(n,t,r,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[Po]){t[Po]=!0,Fg.forEach(function(n){n!=="selectionchange"&&(oE.has(n)||gu(n,!1,t),gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Po]||(e[Po]=!0,gu("selectionchange",!1,e))}}function Nv(t,e,n,r){switch(pv(e)){case 1:var i=ww;break;case 4:i=Ew;break;default:i=Yf}n=i.bind(null,e,n,t),i=void 0,!fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Yn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ev(function(){var u=s,c=qf(n),f=[];e:{var h=xv.get(t);if(h!==void 0){var g=Jf,v=t;switch(t){case"keypress":if(ia(n)===0)break e;case"keydown":case"keyup":g=Lw;break;case"focusin":v="focus",g=cu;break;case"focusout":v="blur",g=cu;break;case"beforeblur":case"afterblur":g=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Iw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$w;break;case Av:case kv:case Cv:g=Cw;break;case Pv:g=zw;break;case"scroll":g=Tw;break;case"wheel":g=Bw;break;case"copy":case"cut":case"paste":g=xw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=tp}var w=(e&4)!==0,I=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=gs(d,p),y!=null&&w.push(Ss(d,y,m)))),I)break;d=d.return}0<w.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==uc&&(v=n.relatedTarget||n.fromElement)&&(Yn(v)||v[Zt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Yn(v):null,v!==null&&(I=Er(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Zd,y="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(w=tp,y="onPointerLeave",p="onPointerEnter",d="pointer"),I=g==null?h:br(g),m=v==null?h:br(v),h=new w(y,d+"leave",g,n,c),h.target=I,h.relatedTarget=m,y=null,Yn(c)===u&&(w=new w(p,d+"enter",v,n,c),w.target=m,w.relatedTarget=I,y=w),I=y,g&&v)t:{for(w=g,p=v,d=0,m=w;m;m=Sr(m))d++;for(m=0,y=p;y;y=Sr(y))m++;for(;0<d-m;)w=Sr(w),d--;for(;0<m-d;)p=Sr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Sr(w),p=Sr(p)}w=null}else w=null;g!==null&&hp(f,h,g,w,!1),v!==null&&I!==null&&hp(f,I,v,w,!0)}}e:{if(h=u?br(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=Yw;else if(ip(h))if(wv)S=eE;else{S=Jw;var P=Xw}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Zw);if(S&&(S=S(t,u))){_v(f,S,n,c);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&ic(h,"number",h.value)}switch(P=u?br(u):window,t){case"focusin":(ip(P)||P.contentEditable==="true")&&(Nr=P,gc=u,ts=null);break;case"focusout":ts=gc=Nr=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,up(f,n,c);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":up(f,n,c)}var x;if(eh)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Rr?vv(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(gv&&n.locale!=="ko"&&(Rr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Rr&&(x=mv()):(mn=c,Xf="value"in mn?mn.value:mn.textContent,Rr=!0)),P=Ia(u,O),0<P.length&&(O=new ep(O,t,null,n,c),f.push({event:O,listeners:P}),x?O.data=x:(x=yv(n),x!==null&&(O.data=x)))),(x=Ww?qw(t,n):Qw(t,n))&&(u=Ia(u,"onBeforeInput"),0<u.length&&(c=new ep("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=x))}Rv(f,e)})}function Ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gs(t,n),s!=null&&r.unshift(Ss(t,s,i)),s=gs(t,e),s!=null&&r.push(Ss(t,s,i))),t=t.return}return r}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gs(n,s),l!=null&&o.unshift(Ss(n,l,a))):i||(l=gs(n,s),l!=null&&o.push(Ss(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aE=/\r\n?/g,lE=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(aE,`
`).replace(lE,"")}function xo(t,e,n){if(e=dp(e),dp(t)!==e&&n)throw Error(T(425))}function Aa(){}var yc=null,_c=null;function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,cE=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(t){return pp.resolve(null).then(t).catch(fE)}:Ec;function fE(t){setTimeout(function(){throw t})}function yu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_s(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wi=Math.random().toString(36).slice(2),bt="__reactFiber$"+wi,Is="__reactProps$"+wi,Zt="__reactContainer$"+wi,Tc="__reactEvents$"+wi,hE="__reactListeners$"+wi,dE="__reactHandles$"+wi;function Yn(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zt]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mp(t);t!==null;){if(n=t[bt])return n;t=mp(t)}return e}t=n,n=t.parentNode}return null}function Zs(t){return t=t[bt]||t[Zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function fl(t){return t[Is]||null}var Sc=[],Or=-1;function jn(t){return{current:t}}function ie(t){0>Or||(t.current=Sc[Or],Sc[Or]=null,Or--)}function ee(t,e){Or++,Sc[Or]=t.current,t.current=e}var Dn={},qe=jn(Dn),nt=jn(!1),ur=Dn;function ii(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rt(t){return t=t.childContextTypes,t!=null}function ka(){ie(nt),ie(qe)}function gp(t,e,n){if(qe.current!==Dn)throw Error(T(168));ee(qe,e),ee(nt,n)}function Dv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,X_(t)||"Unknown",i));return ue({},n,r)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,ur=qe.current,ee(qe,t),ee(nt,nt.current),!0}function vp(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Dv(t,e,ur),r.__reactInternalMemoizedMergedChildContext=t,ie(nt),ie(qe),ee(qe,t)):ie(nt),ee(nt,n)}var Qt=null,hl=!1,_u=!1;function bv(t){Qt===null?Qt=[t]:Qt.push(t)}function pE(t){hl=!0,bv(t)}function zn(){if(!_u&&Qt!==null){_u=!0;var t=0,e=J;try{var n=Qt;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qt=null,hl=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(t+1)),iv(Qf,zn),i}finally{J=e,_u=!1}}return null}var Vr=[],Lr=0,Pa=null,xa=0,pt=[],mt=0,cr=null,Kt=1,Gt="";function qn(t,e){Vr[Lr++]=xa,Vr[Lr++]=Pa,Pa=t,xa=e}function Ov(t,e,n){pt[mt++]=Kt,pt[mt++]=Gt,pt[mt++]=cr,cr=t;var r=Kt;t=Gt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-Ct(e)+i|n<<i|r,Gt=s+t}else Kt=1<<s|n<<i|r,Gt=t}function nh(t){t.return!==null&&(qn(t,1),Ov(t,1,0))}function rh(t){for(;t===Pa;)Pa=Vr[--Lr],Vr[Lr]=null,xa=Vr[--Lr],Vr[Lr]=null;for(;t===cr;)cr=pt[--mt],pt[mt]=null,Gt=pt[--mt],pt[mt]=null,Kt=pt[--mt],pt[mt]=null}var lt=null,at=null,oe=!1,At=null;function Vv(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,lt=t,at=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,lt=t,at=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cr!==null?{id:Kt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,lt=t,at=null,!0):!1;default:return!1}}function Ic(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ac(t){if(oe){var e=at;if(e){var n=e;if(!yp(t,e)){if(Ic(t))throw Error(T(418));e=Sn(n.nextSibling);var r=lt;e&&yp(t,e)?Vv(r,n):(t.flags=t.flags&-4097|2,oe=!1,lt=t)}}else{if(Ic(t))throw Error(T(418));t.flags=t.flags&-4097|2,oe=!1,lt=t}}}function _p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;lt=t}function Ro(t){if(t!==lt)return!1;if(!oe)return _p(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wc(t.type,t.memoizedProps)),e&&(e=at)){if(Ic(t))throw Lv(),Error(T(418));for(;e;)Vv(t,e),e=Sn(e.nextSibling)}if(_p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){at=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}at=null}}else at=lt?Sn(t.stateNode.nextSibling):null;return!0}function Lv(){for(var t=at;t;)t=Sn(t.nextSibling)}function si(){at=lt=null,oe=!1}function ih(t){At===null?At=[t]:At.push(t)}var mE=an.ReactCurrentBatchConfig;function St(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ra=jn(null),Na=null,Mr=null,sh=null;function oh(){sh=Mr=Na=null}function ah(t){var e=Ra.current;ie(Ra),t._currentValue=e}function kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Kr(t,e){Na=t,sh=Mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tt=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(sh!==t)if(t={context:t,memoizedValue:e,next:null},Mr===null){if(Na===null)throw Error(T(308));Mr=t,Na.dependencies={lanes:0,firstContext:t}}else Mr=Mr.next=t;return e}var Xn=null;function lh(t){Xn===null?Xn=[t]:Xn.push(t)}function Mv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lh(e)):(n.next=i.next,i.next=n),e.interleaved=n,en(t,r)}function en(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hn=!1;function uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function In(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,en(t,n)}return i=r.interleaved,i===null?(e.next=e,lh(r)):(e.next=i.next,i.next=e),r.interleaved=e,en(t,n)}function sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kf(t,n)}}function wp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Da(t,e,n,r){var i=t.updateQueue;hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(h=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=ue({},f,h);break e;case 2:hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hr|=o,t.lanes=o,t.memoizedState=f}}function Ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var $v=new Mg.Component().refs;function Cc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dl={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=kn(t),s=Xt(r,i);s.payload=e,n!=null&&(s.callback=n),e=In(t,s,i),e!==null&&(Pt(e,t,i,r),sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=kn(t),s=Xt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=In(t,s,i),e!==null&&(Pt(e,t,i,r),sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=kn(t),i=Xt(n,r);i.tag=2,e!=null&&(i.callback=e),e=In(t,i,r),e!==null&&(Pt(e,t,r,n),sa(e,t,r))}};function Tp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Es(n,r)||!Es(i,s):!0}function jv(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=rt(e)?ur:qe.current,r=e.contextTypes,s=(r=r!=null)?ii(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dl.enqueueReplaceState(e,e.state,null)}function Pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$v,uh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=rt(e)?ur:qe.current,i.context=ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dl.enqueueReplaceState(i,i.state,null),Da(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$v&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function No(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ip(t){var e=t._init;return e(t._payload)}function zv(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Cn(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,y){return d===null||d.tag!==6?(d=ku(m,p.mode,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,y){var S=m.type;return S===xr?c(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fn&&Ip(S)===d.type)?(y=i(d,m.props),y.ref=Li(p,d,m),y.return=p,y):(y=fa(m.type,m.key,m.props,null,p.mode,y),y.ref=Li(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Cu(m,p.mode,y),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,y,S){return d===null||d.tag!==7?(d=or(m,p.mode,y,S),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ku(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wo:return m=fa(d.type,d.key,d.props,null,p.mode,m),m.ref=Li(p,null,d),m.return=p,m;case Pr:return d=Cu(d,p.mode,m),d.return=p,d;case fn:var y=d._init;return f(p,y(d._payload),m)}if(Bi(d)||Ni(d))return d=or(d,p.mode,m,null),d.return=p,d;No(p,d)}return null}function h(p,d,m,y){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wo:return m.key===S?l(p,d,m,y):null;case Pr:return m.key===S?u(p,d,m,y):null;case fn:return S=m._init,h(p,d,S(m._payload),y)}if(Bi(m)||Ni(m))return S!==null?null:c(p,d,m,y,null);No(p,m)}return null}function g(p,d,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(d,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wo:return p=p.get(y.key===null?m:y.key)||null,l(d,p,y,S);case Pr:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,S);case fn:var P=y._init;return g(p,d,m,P(y._payload),S)}if(Bi(y)||Ni(y))return p=p.get(m)||null,c(d,p,y,S,null);No(d,y)}return null}function v(p,d,m,y){for(var S=null,P=null,x=d,O=d=0,G=null;x!==null&&O<m.length;O++){x.index>O?(G=x,x=null):G=x.sibling;var z=h(p,x,m[O],y);if(z===null){x===null&&(x=G);break}t&&x&&z.alternate===null&&e(p,x),d=s(z,d,O),P===null?S=z:P.sibling=z,P=z,x=G}if(O===m.length)return n(p,x),oe&&qn(p,O),S;if(x===null){for(;O<m.length;O++)x=f(p,m[O],y),x!==null&&(d=s(x,d,O),P===null?S=x:P.sibling=x,P=x);return oe&&qn(p,O),S}for(x=r(p,x);O<m.length;O++)G=g(x,p,O,m[O],y),G!==null&&(t&&G.alternate!==null&&x.delete(G.key===null?O:G.key),d=s(G,d,O),P===null?S=G:P.sibling=G,P=G);return t&&x.forEach(function(Et){return e(p,Et)}),oe&&qn(p,O),S}function w(p,d,m,y){var S=Ni(m);if(typeof S!="function")throw Error(T(150));if(m=S.call(m),m==null)throw Error(T(151));for(var P=S=null,x=d,O=d=0,G=null,z=m.next();x!==null&&!z.done;O++,z=m.next()){x.index>O?(G=x,x=null):G=x.sibling;var Et=h(p,x,z.value,y);if(Et===null){x===null&&(x=G);break}t&&x&&Et.alternate===null&&e(p,x),d=s(Et,d,O),P===null?S=Et:P.sibling=Et,P=Et,x=G}if(z.done)return n(p,x),oe&&qn(p,O),S;if(x===null){for(;!z.done;O++,z=m.next())z=f(p,z.value,y),z!==null&&(d=s(z,d,O),P===null?S=z:P.sibling=z,P=z);return oe&&qn(p,O),S}for(x=r(p,x);!z.done;O++,z=m.next())z=g(x,p,O,z.value,y),z!==null&&(t&&z.alternate!==null&&x.delete(z.key===null?O:z.key),d=s(z,d,O),P===null?S=z:P.sibling=z,P=z);return t&&x.forEach(function(xi){return e(p,xi)}),oe&&qn(p,O),S}function I(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===xr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wo:e:{for(var S=m.key,P=d;P!==null;){if(P.key===S){if(S=m.type,S===xr){if(P.tag===7){n(p,P.sibling),d=i(P,m.props.children),d.return=p,p=d;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fn&&Ip(S)===P.type){n(p,P.sibling),d=i(P,m.props),d.ref=Li(p,P,m),d.return=p,p=d;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===xr?(d=or(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=fa(m.type,m.key,m.props,null,p.mode,y),y.ref=Li(p,d,m),y.return=p,p=y)}return o(p);case Pr:e:{for(P=m.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Cu(m,p.mode,y),d.return=p,p=d}return o(p);case fn:return P=m._init,I(p,d,P(m._payload),y)}if(Bi(m))return v(p,d,m,y);if(Ni(m))return w(p,d,m,y);No(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=ku(m,p.mode,y),d.return=p,p=d),o(p)):n(p,d)}return I}var oi=zv(!0),Uv=zv(!1),eo={},zt=jn(eo),As=jn(eo),ks=jn(eo);function Jn(t){if(t===eo)throw Error(T(174));return t}function ch(t,e){switch(ee(ks,e),ee(As,t),ee(zt,eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}ie(zt),ee(zt,e)}function ai(){ie(zt),ie(As),ie(ks)}function Bv(t){Jn(ks.current);var e=Jn(zt.current),n=oc(e,t.type);e!==n&&(ee(As,t),ee(zt,n))}function fh(t){As.current===t&&(ie(zt),ie(As))}var ae=jn(0);function ba(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wu=[];function hh(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var oa=an.ReactCurrentDispatcher,Eu=an.ReactCurrentBatchConfig,fr=0,le=null,Ee=null,Ce=null,Oa=!1,ns=!1,Cs=0,gE=0;function Fe(){throw Error(T(321))}function dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xt(t[n],e[n]))return!1;return!0}function ph(t,e,n,r,i,s){if(fr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oa.current=t===null||t.memoizedState===null?wE:EE,t=n(r,i),ns){s=0;do{if(ns=!1,Cs=0,25<=s)throw Error(T(301));s+=1,Ce=Ee=null,e.updateQueue=null,oa.current=TE,t=n(r,i)}while(ns)}if(oa.current=Va,e=Ee!==null&&Ee.next!==null,fr=0,Ce=Ee=le=null,Oa=!1,e)throw Error(T(300));return t}function mh(){var t=Cs!==0;return Cs=0,t}function Dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?le.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function wt(){if(Ee===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=Ce===null?le.memoizedState:Ce.next;if(e!==null)Ce=e,Ee=t;else{if(t===null)throw Error(T(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ce===null?le.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function Ps(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,le.lanes|=c,hr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,xt(r,e.memoizedState)||(tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=wt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xt(s,e.memoizedState)||(tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Hv(){}function Wv(t,e){var n=le,r=wt(),i=e(),s=!xt(r.memoizedState,i);if(s&&(r.memoizedState=i,tt=!0),r=r.queue,gh(Kv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,xs(9,Qv.bind(null,n,r,i,e),void 0,null),Pe===null)throw Error(T(349));fr&30||qv(n,e,i)}return i}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qv(t,e,n,r){e.value=n,e.getSnapshot=r,Gv(e)&&Yv(t)}function Kv(t,e,n){return n(function(){Gv(e)&&Yv(t)})}function Gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xt(t,n)}catch{return!0}}function Yv(t){var e=en(t,1);e!==null&&Pt(e,t,1,-1)}function Ap(t){var e=Dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:t},e.queue=t,t=t.dispatch=_E.bind(null,le,t),[e.memoizedState,t]}function xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xv(){return wt().memoizedState}function aa(t,e,n,r){var i=Dt();le.flags|=t,i.memoizedState=xs(1|e,n,void 0,r===void 0?null:r)}function pl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&dh(r,o.deps)){i.memoizedState=xs(e,n,s,r);return}}le.flags|=t,i.memoizedState=xs(1|e,n,s,r)}function kp(t,e){return aa(8390656,8,t,e)}function gh(t,e){return pl(2048,8,t,e)}function Jv(t,e){return pl(4,2,t,e)}function Zv(t,e){return pl(4,4,t,e)}function ey(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ty(t,e,n){return n=n!=null?n.concat([t]):null,pl(4,4,ey.bind(null,e,t),n)}function vh(){}function ny(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ry(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iy(t,e,n){return fr&21?(xt(n,e)||(n=av(),le.lanes|=n,hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tt=!0),t.memoizedState=n)}function vE(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Eu.transition;Eu.transition={};try{t(!1),e()}finally{J=n,Eu.transition=r}}function sy(){return wt().memoizedState}function yE(t,e,n){var r=kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oy(t))ay(e,n);else if(n=Mv(t,e,n,r),n!==null){var i=Xe();Pt(n,t,r,i),ly(n,e,r)}}function _E(t,e,n){var r=kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oy(t))ay(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,xt(a,o)){var l=e.interleaved;l===null?(i.next=i,lh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Mv(t,e,i,r),n!==null&&(i=Xe(),Pt(n,t,r,i),ly(n,e,r))}}function oy(t){var e=t.alternate;return t===le||e!==null&&e===le}function ay(t,e){ns=Oa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ly(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kf(t,n)}}var Va={readContext:_t,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},wE={readContext:_t,useCallback:function(t,e){return Dt().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,aa(4194308,4,ey.bind(null,e,t),n)},useLayoutEffect:function(t,e){return aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return aa(4,2,t,e)},useMemo:function(t,e){var n=Dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yE.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Dt();return t={current:t},e.memoizedState=t},useState:Ap,useDebugValue:vh,useDeferredValue:function(t){return Dt().memoizedState=t},useTransition:function(){var t=Ap(!1),e=t[0];return t=vE.bind(null,t[1]),Dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Dt();if(oe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Pe===null)throw Error(T(349));fr&30||qv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kp(Kv.bind(null,r,s,t),[t]),r.flags|=2048,xs(9,Qv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dt(),e=Pe.identifierPrefix;if(oe){var n=Gt,r=Kt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Cs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EE={readContext:_t,useCallback:ny,useContext:_t,useEffect:gh,useImperativeHandle:ty,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:ry,useReducer:Tu,useRef:Xv,useState:function(){return Tu(Ps)},useDebugValue:vh,useDeferredValue:function(t){var e=wt();return iy(e,Ee.memoizedState,t)},useTransition:function(){var t=Tu(Ps)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Wv,useId:sy,unstable_isNewReconciler:!1},TE={readContext:_t,useCallback:ny,useContext:_t,useEffect:gh,useImperativeHandle:ty,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:ry,useReducer:Su,useRef:Xv,useState:function(){return Su(Ps)},useDebugValue:vh,useDeferredValue:function(t){var e=wt();return Ee===null?e.memoizedState=t:iy(e,Ee.memoizedState,t)},useTransition:function(){var t=Su(Ps)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Wv,useId:sy,unstable_isNewReconciler:!1};function li(t,e){try{var n="",r=e;do n+=Y_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SE=typeof WeakMap=="function"?WeakMap:Map;function uy(t,e,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ma||(Ma=!0,$c=r),xc(t,e)},n}function cy(t,e,n){n=Xt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xc(t,e),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ME.bind(null,t,e,n),e.then(t,t))}function Pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xt(-1,1),e.tag=2,In(n,e,1))),n.lanes|=1),t)}var IE=an.ReactCurrentOwner,tt=!1;function Ke(t,e,n,r){e.child=t===null?Uv(e,null,n,r):oi(e,t.child,n,r)}function Rp(t,e,n,r,i){n=n.render;var s=e.ref;return Kr(e,i),r=ph(t,e,n,r,s,i),n=mh(),t!==null&&!tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(oe&&n&&nh(e),e.flags|=1,Ke(t,e,r,i),e.child)}function Np(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ah(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fy(t,e,s,r,i)):(t=fa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Es,n(o,r)&&t.ref===e.ref)return tn(t,e,i)}return e.flags|=1,t=Cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function fy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Es(s,r)&&t.ref===e.ref)if(tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tt=!0);else return e.lanes=t.lanes,tn(t,e,i)}return Rc(t,e,n,r,i)}function hy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee($r,ot),ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee($r,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee($r,ot),ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee($r,ot),ot|=r;return Ke(t,e,i,n),e.child}function dy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rc(t,e,n,r,i){var s=rt(n)?ur:qe.current;return s=ii(e,s),Kr(e,i),n=ph(t,e,n,r,s,i),r=mh(),t!==null&&!tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(oe&&r&&nh(e),e.flags|=1,Ke(t,e,n,i),e.child)}function Dp(t,e,n,r,i){if(rt(n)){var s=!0;Ca(e)}else s=!1;if(Kr(e,i),e.stateNode===null)la(t,e),jv(e,n,r),Pc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=rt(n)?ur:qe.current,u=ii(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Sp(e,o,r,u),hn=!1;var h=e.memoizedState;o.state=h,Da(e,r,o,i),l=e.memoizedState,a!==r||h!==l||nt.current||hn?(typeof c=="function"&&(Cc(e,n,c,r),l=e.memoizedState),(a=hn||Tp(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:St(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=rt(n)?ur:qe.current,l=ii(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Sp(e,o,r,l),hn=!1,h=e.memoizedState,o.state=h,Da(e,r,o,i);var v=e.memoizedState;a!==f||h!==v||nt.current||hn?(typeof g=="function"&&(Cc(e,n,g,r),v=e.memoizedState),(u=hn||Tp(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Nc(t,e,n,r,s,i)}function Nc(t,e,n,r,i,s){dy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vp(e,n,!1),tn(t,e,s);r=e.stateNode,IE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oi(e,t.child,null,s),e.child=oi(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&vp(e,n,!0),e.child}function py(t){var e=t.stateNode;e.pendingContext?gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gp(t,e.context,!1),ch(t,e.containerInfo)}function bp(t,e,n,r,i){return si(),ih(i),e.flags|=256,Ke(t,e,n,r),e.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function my(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ae,i&1),t===null)return Ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vl(o,r,0,null),t=or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bc(n),e.memoizedState=Dc,t):yh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return AE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cn(a,s):(s=or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dc,r}return s=t.child,t=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yh(t,e){return e=vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Do(t,e,n,r){return r!==null&&ih(r),oi(e,t.child,null,n),t=yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Iu(Error(T(422))),Do(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vl({mode:"visible",children:r.children},i,0,null),s=or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oi(e,t.child,null,o),e.child.memoizedState=bc(o),e.memoizedState=Dc,s);if(!(e.mode&1))return Do(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=Iu(s,r,void 0),Do(t,e,o,r)}if(a=(o&t.childLanes)!==0,tt||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,en(t,i),Pt(r,t,i,-1))}return Ih(),r=Iu(Error(T(421))),Do(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,at=Sn(i.nextSibling),lt=e,oe=!0,At=null,t!==null&&(pt[mt++]=Kt,pt[mt++]=Gt,pt[mt++]=cr,Kt=t.id,Gt=t.overflow,cr=e),e=yh(e,r.children),e.flags|=4096,e)}function Op(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kc(t.return,e,n)}function Au(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,n,e);else if(t.tag===19)Op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ba(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Au(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ba(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Au(e,!0,n,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function la(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kE(t,e,n){switch(e.tag){case 3:py(e),si();break;case 5:Bv(e);break;case 1:rt(e.type)&&Ca(e);break;case 4:ch(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?my(t,e,n):(ee(ae,ae.current&1),t=tn(t,e,n),t!==null?t.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,hy(t,e,n)}return tn(t,e,n)}var vy,Oc,yy,_y;vy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oc=function(){};yy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jn(zt.current);var s=null;switch(n){case"input":i=nc(t,i),r=nc(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=sc(t,i),r=sc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Aa)}ac(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ps.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ps.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_y=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mi(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CE(t,e,n){var r=e.pendingProps;switch(rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return rt(e.type)&&ka(),$e(e),null;case 3:return r=e.stateNode,ai(),ie(nt),ie(qe),hh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,At!==null&&(Uc(At),At=null))),Oc(t,e),$e(e),null;case 5:fh(e);var i=Jn(ks.current);if(n=e.type,t!==null&&e.stateNode!=null)yy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return $e(e),null}if(t=Jn(zt.current),Ro(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bt]=e,r[Is]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)te(Wi[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Bd(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Wd(r,s),te("invalid",r)}ac(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",""+a]):ps.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Eo(r),Hd(r,s,!0);break;case"textarea":Eo(r),qd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Aa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bt]=e,t[Is]=r,vy(t,e,!1,!1),e.stateNode=t;e:{switch(o=lc(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)te(Wi[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Bd(t,r),i=nc(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),te("invalid",t);break;case"textarea":Wd(t,r),i=sc(t,r),te("invalid",t);break;default:i=r}ac(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ms(t,l):typeof l=="number"&&ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ps.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&Uf(t,s,l,o))}switch(n){case"input":Eo(t),Hd(t,r,!1);break;case"textarea":Eo(t),qd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Aa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)_y(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Jn(ks.current),Jn(zt.current),Ro(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(s=r.nodeValue!==n)&&(t=lt,t!==null))switch(t.tag){case 3:xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return $e(e),null;case 13:if(ie(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&at!==null&&e.mode&1&&!(e.flags&128))Lv(),si(),e.flags|=98560,s=!1;else if(s=Ro(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[bt]=e}else si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else At!==null&&(Uc(At),At=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?Se===0&&(Se=3):Ih())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return ai(),Oc(t,e),t===null&&Ts(e.stateNode.containerInfo),$e(e),null;case 10:return ah(e.type._context),$e(e),null;case 17:return rt(e.type)&&ka(),$e(e),null;case 19:if(ie(ae),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Mi(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ba(t),o!==null){for(e.flags|=128,Mi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>ui&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=ba(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return $e(e),null}else 2*me()-s.renderingStartTime>ui&&n!==1073741824&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=ae.current,ee(ae,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Sh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ot&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function PE(t,e){switch(rh(e),e.tag){case 1:return rt(e.type)&&ka(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ai(),ie(nt),ie(qe),hh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fh(e),null;case 13:if(ie(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ae),null;case 4:return ai(),null;case 10:return ah(e.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var bo=!1,Ue=!1,xE=typeof WeakSet=="function"?WeakSet:Set,N=null;function Fr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Vc(t,e,n){try{n()}catch(r){ce(t,e,r)}}var Vp=!1;function RE(t,e){if(yc=Ta,t=Sv(),th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_c={focusedElem:t,selectionRange:n},Ta=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,I=v.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:St(e.type,w),I);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(y){ce(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return v=Vp,Vp=!1,v}function rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vc(e,n,s)}i=i.next}while(i!==r)}}function ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wy(t){var e=t.alternate;e!==null&&(t.alternate=null,wy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[Is],delete e[Tc],delete e[hE],delete e[dE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ey(t){return t.tag===5||t.tag===3||t.tag===4}function Lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ey(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Aa));else if(r!==4&&(t=t.child,t!==null))for(Mc(t,e,n),t=t.sibling;t!==null;)Mc(t,e,n),t=t.sibling}function Fc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}var Ne=null,It=!1;function un(t,e,n){for(n=n.child;n!==null;)Ty(t,e,n),n=n.sibling}function Ty(t,e,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Ue||Fr(n,e);case 6:var r=Ne,i=It;Ne=null,un(t,e,n),Ne=r,It=i,Ne!==null&&(It?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(It?(t=Ne,n=n.stateNode,t.nodeType===8?yu(t.parentNode,n):t.nodeType===1&&yu(t,n),_s(t)):yu(Ne,n.stateNode));break;case 4:r=Ne,i=It,Ne=n.stateNode.containerInfo,It=!0,un(t,e,n),Ne=r,It=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vc(n,e,o),i=i.next}while(i!==r)}un(t,e,n);break;case 1:if(!Ue&&(Fr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,un(t,e,n),Ue=r):un(t,e,n);break;default:un(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xE),e.forEach(function(r){var i=$E.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,It=!1;break e;case 3:Ne=a.stateNode.containerInfo,It=!0;break e;case 4:Ne=a.stateNode.containerInfo,It=!0;break e}a=a.return}if(Ne===null)throw Error(T(160));Ty(s,o,i),Ne=null,It=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sy(e,t),e=e.sibling}function Sy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tt(e,t),Nt(t),r&4){try{rs(3,t,t.return),ml(3,t)}catch(w){ce(t,t.return,w)}try{rs(5,t,t.return)}catch(w){ce(t,t.return,w)}}break;case 1:Tt(e,t),Nt(t),r&512&&n!==null&&Fr(n,n.return);break;case 5:if(Tt(e,t),Nt(t),r&512&&n!==null&&Fr(n,n.return),t.flags&32){var i=t.stateNode;try{ms(i,"")}catch(w){ce(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hg(i,s),lc(a,o);var u=lc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Gg(i,f):c==="dangerouslySetInnerHTML"?Qg(i,f):c==="children"?ms(i,f):Uf(i,c,f,u)}switch(a){case"input":rc(i,s);break;case"textarea":Wg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Hr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Hr(i,!!s.multiple,s.defaultValue,!0):Hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Is]=s}catch(w){ce(t,t.return,w)}}break;case 6:if(Tt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ce(t,t.return,w)}}break;case 3:if(Tt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_s(e.containerInfo)}catch(w){ce(t,t.return,w)}break;case 4:Tt(e,t),Nt(t);break;case 13:Tt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Eh=me())),r&4&&Mp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(u=Ue)||c,Tt(e,t),Ue=u):Tt(e,t),Nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(f=N=c;N!==null;){switch(h=N,g=h.child,h.tag){case 0:case 11:case 14:case 15:rs(4,h,h.return);break;case 1:Fr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:Fr(h,h.return);break;case 22:if(h.memoizedState!==null){$p(f);continue}}g!==null?(g.return=h,N=g):$p(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kg("display",o))}catch(w){ce(t,t.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ce(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tt(e,t),Nt(t),r&4&&Mp(t);break;case 21:break;default:Tt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ey(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ms(i,""),r.flags&=-33);var s=Lp(t);Fc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lp(t);Mc(t,a,o);break;default:throw Error(T(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NE(t,e,n){N=t,Iy(t)}function Iy(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=bo;var u=Ue;if(bo=o,(Ue=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?jp(i):l!==null?(l.return=o,N=l):jp(i);for(;s!==null;)N=s,Iy(s),s=s.sibling;N=i,bo=a,Ue=u}Fp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Fp(t)}}function Fp(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ue||ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:St(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ep(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&_s(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ue||e.flags&512&&Lc(e)}catch(h){ce(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function $p(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function jp(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ml(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{Lc(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{Lc(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var DE=Math.ceil,La=an.ReactCurrentDispatcher,_h=an.ReactCurrentOwner,yt=an.ReactCurrentBatchConfig,K=0,Pe=null,_e=null,Oe=0,ot=0,$r=jn(0),Se=0,Rs=null,hr=0,gl=0,wh=0,is=null,et=null,Eh=0,ui=1/0,qt=null,Ma=!1,$c=null,An=null,Oo=!1,gn=null,Fa=0,ss=0,jc=null,ua=-1,ca=0;function Xe(){return K&6?me():ua!==-1?ua:ua=me()}function kn(t){return t.mode&1?K&2&&Oe!==0?Oe&-Oe:mE.transition!==null?(ca===0&&(ca=av()),ca):(t=J,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function Pt(t,e,n,r){if(50<ss)throw ss=0,jc=null,Error(T(185));Xs(t,n,r),(!(K&2)||t!==Pe)&&(t===Pe&&(!(K&2)&&(gl|=n),Se===4&&pn(t,Oe)),it(t,r),n===1&&K===0&&!(e.mode&1)&&(ui=me()+500,hl&&zn()))}function it(t,e){var n=t.callbackNode;mw(t,e);var r=Ea(t,t===Pe?Oe:0);if(r===0)n!==null&&Gd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gd(n),e===1)t.tag===0?pE(zp.bind(null,t)):bv(zp.bind(null,t)),cE(function(){!(K&6)&&zn()}),n=null;else{switch(lv(r)){case 1:n=Qf;break;case 4:n=sv;break;case 16:n=wa;break;case 536870912:n=ov;break;default:n=wa}n=Dy(n,Ay.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ay(t,e){if(ua=-1,ca=0,K&6)throw Error(T(327));var n=t.callbackNode;if(Gr()&&t.callbackNode!==n)return null;var r=Ea(t,t===Pe?Oe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$a(t,r);else{e=r;var i=K;K|=2;var s=Cy();(Pe!==t||Oe!==e)&&(qt=null,ui=me()+500,sr(t,e));do try{VE();break}catch(a){ky(t,a)}while(!0);oh(),La.current=s,K=i,_e!==null?e=0:(Pe=null,Oe=0,e=Se)}if(e!==0){if(e===2&&(i=dc(t),i!==0&&(r=i,e=zc(t,i))),e===1)throw n=Rs,sr(t,0),pn(t,r),it(t,me()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!bE(i)&&(e=$a(t,r),e===2&&(s=dc(t),s!==0&&(r=s,e=zc(t,s))),e===1))throw n=Rs,sr(t,0),pn(t,r),it(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Qn(t,et,qt);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=Eh+500-me(),10<e)){if(Ea(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ec(Qn.bind(null,t,et,qt),e);break}Qn(t,et,qt);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DE(r/1960))-r,10<r){t.timeoutHandle=Ec(Qn.bind(null,t,et,qt),r);break}Qn(t,et,qt);break;case 5:Qn(t,et,qt);break;default:throw Error(T(329))}}}return it(t,me()),t.callbackNode===n?Ay.bind(null,t):null}function zc(t,e){var n=is;return t.current.memoizedState.isDehydrated&&(sr(t,e).flags|=256),t=$a(t,e),t!==2&&(e=et,et=n,e!==null&&Uc(e)),t}function Uc(t){et===null?et=t:et.push.apply(et,t)}function bE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~wh,e&=~gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function zp(t){if(K&6)throw Error(T(327));Gr();var e=Ea(t,0);if(!(e&1))return it(t,me()),null;var n=$a(t,e);if(t.tag!==0&&n===2){var r=dc(t);r!==0&&(e=r,n=zc(t,r))}if(n===1)throw n=Rs,sr(t,0),pn(t,e),it(t,me()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qn(t,et,qt),it(t,me()),null}function Th(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(ui=me()+500,hl&&zn())}}function dr(t){gn!==null&&gn.tag===0&&!(K&6)&&Gr();var e=K;K|=1;var n=yt.transition,r=J;try{if(yt.transition=null,J=1,t)return t()}finally{J=r,yt.transition=n,K=e,!(K&6)&&zn()}}function Sh(){ot=$r.current,ie($r)}function sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uE(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(rh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ka();break;case 3:ai(),ie(nt),ie(qe),hh();break;case 5:fh(r);break;case 4:ai();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:ah(r.type._context);break;case 22:case 23:Sh()}n=n.return}if(Pe=t,_e=t=Cn(t.current,null),Oe=ot=e,Se=0,Rs=null,wh=gl=hr=0,et=is=null,Xn!==null){for(e=0;e<Xn.length;e++)if(n=Xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xn=null}return t}function ky(t,e){do{var n=_e;try{if(oh(),oa.current=Va,Oa){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oa=!1}if(fr=0,Ce=Ee=le=null,ns=!1,Cs=0,_h.current=null,n===null||n.return===null){Se=1,Rs=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Pp(o);if(g!==null){g.flags&=-257,xp(g,o,a,s,e),g.mode&1&&Cp(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Cp(s,u,e),Ih();break e}l=Error(T(426))}}else if(oe&&a.mode&1){var I=Pp(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),xp(I,o,a,s,e),ih(li(l,a));break e}}s=l=li(l,a),Se!==4&&(Se=2),is===null?is=[s]:is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=uy(s,l,e);wp(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(An===null||!An.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=cy(s,a,e);wp(s,y);break e}}s=s.return}while(s!==null)}xy(n)}catch(S){e=S,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function Cy(){var t=La.current;return La.current=Va,t===null?Va:t}function Ih(){(Se===0||Se===3||Se===2)&&(Se=4),Pe===null||!(hr&268435455)&&!(gl&268435455)||pn(Pe,Oe)}function $a(t,e){var n=K;K|=2;var r=Cy();(Pe!==t||Oe!==e)&&(qt=null,sr(t,e));do try{OE();break}catch(i){ky(t,i)}while(!0);if(oh(),K=n,La.current=r,_e!==null)throw Error(T(261));return Pe=null,Oe=0,Se}function OE(){for(;_e!==null;)Py(_e)}function VE(){for(;_e!==null&&!ow();)Py(_e)}function Py(t){var e=Ny(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?xy(t):_e=e,_h.current=null}function xy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PE(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,_e=null;return}}else if(n=CE(n,e,ot),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Se===0&&(Se=5)}function Qn(t,e,n){var r=J,i=yt.transition;try{yt.transition=null,J=1,LE(t,e,n,r)}finally{yt.transition=i,J=r}return null}function LE(t,e,n,r){do Gr();while(gn!==null);if(K&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gw(t,s),t===Pe&&(_e=Pe=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,Dy(wa,function(){return Gr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=J;J=1;var a=K;K|=4,_h.current=null,RE(t,n),Sy(n,t),nE(_c),Ta=!!yc,_c=yc=null,t.current=n,NE(n),aw(),K=a,J=o,yt.transition=s}else t.current=n;if(Oo&&(Oo=!1,gn=t,Fa=i),s=t.pendingLanes,s===0&&(An=null),cw(n.stateNode),it(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ma)throw Ma=!1,t=$c,$c=null,t;return Fa&1&&t.tag!==0&&Gr(),s=t.pendingLanes,s&1?t===jc?ss++:(ss=0,jc=t):ss=0,zn(),null}function Gr(){if(gn!==null){var t=lv(Fa),e=yt.transition,n=J;try{if(yt.transition=null,J=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,Fa=0,K&6)throw Error(T(331));var i=K;for(K|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:rs(8,c,s)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var h=c.sibling,g=c.return;if(wy(c),c===u){N=null;break}if(h!==null){h.return=g,N=h;break}N=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var d=t.current;for(N=d;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ml(9,a)}}catch(S){ce(a,a.return,S)}if(a===o){N=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,N=y;break e}N=a.return}}if(K=i,zn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(al,t)}catch{}r=!0}return r}finally{J=n,yt.transition=e}}return!1}function Up(t,e,n){e=li(n,e),e=uy(t,e,1),t=In(t,e,1),e=Xe(),t!==null&&(Xs(t,1,e),it(t,e))}function ce(t,e,n){if(t.tag===3)Up(t,t,n);else for(;e!==null;){if(e.tag===3){Up(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){t=li(n,t),t=cy(e,t,1),e=In(e,t,1),t=Xe(),e!==null&&(Xs(e,1,t),it(e,t));break}}e=e.return}}function ME(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,Pe===t&&(Oe&n)===n&&(Se===4||Se===3&&(Oe&130023424)===Oe&&500>me()-Eh?sr(t,0):wh|=n),it(t,e)}function Ry(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=Xe();t=en(t,e),t!==null&&(Xs(t,e,n),it(t,n))}function FE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ry(t,n)}function $E(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Ry(t,n)}var Ny;Ny=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nt.current)tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tt=!1,kE(t,e,n);tt=!!(t.flags&131072)}else tt=!1,oe&&e.flags&1048576&&Ov(e,xa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;la(t,e),t=e.pendingProps;var i=ii(e,qe.current);Kr(e,n),i=ph(null,e,r,t,i,n);var s=mh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rt(r)?(s=!0,Ca(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uh(e),i.updater=dl,e.stateNode=i,i._reactInternals=e,Pc(e,r,t,n),e=Nc(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&nh(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(la(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zE(r),t=St(r,t),i){case 0:e=Rc(null,e,r,t,n);break e;case 1:e=Dp(null,e,r,t,n);break e;case 11:e=Rp(null,e,r,t,n);break e;case 14:e=Np(null,e,r,St(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Rc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Dp(t,e,r,i,n);case 3:e:{if(py(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fv(t,e),Da(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=li(Error(T(423)),e),e=bp(t,e,r,n,i);break e}else if(r!==i){i=li(Error(T(424)),e),e=bp(t,e,r,n,i);break e}else for(at=Sn(e.stateNode.containerInfo.firstChild),lt=e,oe=!0,At=null,n=Uv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),r===i){e=tn(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return Bv(e),t===null&&Ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,wc(r,i)?o=null:s!==null&&wc(r,s)&&(e.flags|=32),dy(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&Ac(e),null;case 13:return my(t,e,n);case 4:return ch(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oi(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Rp(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Ra,r._currentValue),r._currentValue=o,s!==null)if(xt(s.value,o)){if(s.children===i.children&&!nt.current){e=tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Kr(e,n),i=_t(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=St(r,e.pendingProps),i=St(r.type,i),Np(t,e,r,i,n);case 15:return fy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),la(t,e),e.tag=1,rt(r)?(t=!0,Ca(e)):t=!1,Kr(e,n),jv(e,r,i),Pc(e,r,i,n),Nc(null,e,r,!0,t,n);case 19:return gy(t,e,n);case 22:return hy(t,e,n)}throw Error(T(156,e.tag))};function Dy(t,e){return iv(t,e)}function jE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new jE(t,e,n,r)}function Ah(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zE(t){if(typeof t=="function")return Ah(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hf)return 11;if(t===Wf)return 14}return 2}function Cn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ah(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xr:return or(n.children,i,s,e);case Bf:o=8,i|=8;break;case Ju:return t=vt(12,n,e,i|2),t.elementType=Ju,t.lanes=s,t;case Zu:return t=vt(13,n,e,i),t.elementType=Zu,t.lanes=s,t;case ec:return t=vt(19,n,e,i),t.elementType=ec,t.lanes=s,t;case zg:return vl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $g:o=10;break e;case jg:o=9;break e;case Hf:o=11;break e;case Wf:o=14;break e;case fn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function or(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function vl(t,e,n,r){return t=vt(22,t,r,e),t.elementType=zg,t.lanes=n,t.stateNode={isHidden:!1},t}function ku(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Cu(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kh(t,e,n,r,i,s,o,a,l){return t=new UE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(s),t}function BE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function by(t){if(!t)return Dn;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(rt(n))return Dv(t,n,e)}return e}function Oy(t,e,n,r,i,s,o,a,l){return t=kh(n,r,!0,t,i,s,o,a,l),t.context=by(null),n=t.current,r=Xe(),i=kn(n),s=Xt(r,i),s.callback=e??null,In(n,s,i),t.current.lanes=i,Xs(t,i,r),it(t,r),t}function yl(t,e,n,r){var i=e.current,s=Xe(),o=kn(i);return n=by(n),e.context===null?e.context=n:e.pendingContext=n,e=Xt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=In(i,e,o),t!==null&&(Pt(t,i,o,s),sa(t,i,o)),o}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ch(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function HE(){return null}var Vy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ph(t){this._internalRoot=t}_l.prototype.render=Ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));yl(t,e,null,null)};_l.prototype.unmount=Ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){yl(null,t,null,null)}),e[Zt]=null}};function _l(t){this._internalRoot=t}_l.prototype.unstable_scheduleHydration=function(t){if(t){var e=fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&dv(t)}};function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function WE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ja(o);s.call(u)}}var o=Oy(e,r,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=o,t[Zt]=o.current,Ts(t.nodeType===8?t.parentNode:t),dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ja(l);a.call(u)}}var l=kh(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=l,t[Zt]=l.current,Ts(t.nodeType===8?t.parentNode:t),dr(function(){yl(e,l,n,r)}),l}function El(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ja(o);a.call(l)}}yl(e,o,t,i)}else o=WE(n,e,t,i,r);return ja(o)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(Kf(e,n|1),it(e,me()),!(K&6)&&(ui=me()+500,zn()))}break;case 13:dr(function(){var r=en(t,1);if(r!==null){var i=Xe();Pt(r,t,1,i)}}),Ch(t,1)}};Gf=function(t){if(t.tag===13){var e=en(t,134217728);if(e!==null){var n=Xe();Pt(e,t,134217728,n)}Ch(t,134217728)}};cv=function(t){if(t.tag===13){var e=kn(t),n=en(t,e);if(n!==null){var r=Xe();Pt(n,t,e,r)}Ch(t,e)}};fv=function(){return J};hv=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};cc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fl(r);if(!i)throw Error(T(90));Bg(r),rc(r,i)}}}break;case"textarea":Wg(t,n);break;case"select":e=n.value,e!=null&&Hr(t,!!n.multiple,e,!1)}};Jg=Th;Zg=dr;var qE={usingClientEntryPoint:!1,Events:[Zs,br,fl,Yg,Xg,Th]},Fi={findFiberByHostInstance:Yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QE={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||HE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{al=Vo.inject(QE),jt=Vo}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(e))throw Error(T(200));return BE(t,e,null,n)};ft.createRoot=function(t,e){if(!xh(t))throw Error(T(299));var n=!1,r="",i=Vy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kh(t,1,!1,null,null,n,!1,r,i),t[Zt]=e.current,Ts(t.nodeType===8?t.parentNode:t),new Ph(e)};ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};ft.flushSync=function(t){return dr(t)};ft.hydrate=function(t,e,n){if(!wl(e))throw Error(T(200));return El(null,t,e,!0,n)};ft.hydrateRoot=function(t,e,n){if(!xh(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Oy(e,null,t,1,n??null,i,!1,s,o),t[Zt]=e.current,Ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _l(e)};ft.render=function(t,e,n){if(!wl(e))throw Error(T(200));return El(null,t,e,!1,n)};ft.unmountComponentAtNode=function(t){if(!wl(t))throw Error(T(40));return t._reactRootContainer?(dr(function(){El(null,null,t,!1,function(){t._reactRootContainer=null,t[Zt]=null})}),!0):!1};ft.unstable_batchedUpdates=Th;ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wl(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return El(t,e,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";function Ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ly)}catch(t){console.error(t)}}Ly(),Og.exports=ft;var KE=Og.exports,Wp=KE;Yu.createRoot=Wp.createRoot,Yu.hydrateRoot=Wp.hydrateRoot;const GE=()=>{const[t,e]=$t.useState(!1),[n,r]=$t.useState(!1),i=()=>{e(!t)},s=()=>{const a=window.scrollY;r(a>100)};$t.useEffect(()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}),[]);const o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return _.jsxs("div",{className:`header ${n?"sticky":""}`,children:[_.jsxs("nav",{className:"nav-header",children:[_.jsx("a",{href:"",className:"icon-github-nav",children:_.jsx("i",{className:"bx bxl-github"})}),_.jsxs("ul",{children:[_.jsx("li",{children:_.jsx("a",{href:"#home",onClick:o,children:"Home"})}),_.jsx("li",{children:_.jsx("a",{href:"#about",children:"About"})}),_.jsx("li",{children:_.jsx("a",{href:"#skills",children:"Skills"})}),_.jsx("li",{children:_.jsx("a",{href:"#project",children:"Projets"})}),_.jsx("li",{children:_.jsx("a",{href:"#contact",children:"Contact"})})]})]}),t&&_.jsx("div",{className:"nav-header-mobile mobile-menu",children:_.jsxs("ul",{children:[_.jsx("li",{children:_.jsx("a",{href:"#home",onClick:o,children:"Home"})}),_.jsx("li",{children:_.jsx("a",{href:"#about",children:"About"})}),_.jsx("li",{children:_.jsx("a",{href:"#skills",children:"Skills"})}),_.jsx("li",{children:_.jsx("a",{href:"#project",children:"Projets"})}),_.jsx("li",{children:_.jsx("a",{href:"#contact",children:"Contact"})})]})}),_.jsxs("div",{className:`burger-menu ${t?"change":""}`,onClick:i,children:[_.jsx("div",{className:"bar1"}),_.jsx("div",{className:"bar2"}),_.jsx("div",{className:"bar3"})]})]})},YE=()=>_.jsx("section",{className:"presentation",children:_.jsx("div",{className:"content-presentation"})}),XE=()=>{const t=()=>{window.open("../../../public/CV_MS.pdf","_blank")};return _.jsx("button",{className:"btn-resume",onClick:t,children:_.jsx("i",{className:"bx bx-file icon-cv"})})},JE="/assets/photo-eIfaWrNO.jpeg",ZE=()=>_.jsxs("section",{id:"about",className:"about",children:[_.jsx("h2",{className:"title-section",children:"About"}),_.jsxs("div",{className:"about-content",children:[_.jsxs("div",{className:"description-about-content",children:[_.jsx("h1",{className:"title-about",children:"Matthieu Simon"}),_.jsx("h2",{className:"subtitle",children:"Développeur Front-end."}),_.jsxs("p",{className:"text-about",children:["Bonjour, je suis Matthieu Simon, passioné par le développement web et particulièrement le développement front-end avec une spécialité en ReactJS.",_.jsx("br",{}),"Aprés avoir découvert la programmation, j'ai décidé de m'y consacrer pleinement. J'ai suivi une formation d'intégrateur web avec OpenClassRooms ou j'ai pu acquérir des bases en développement web en apprenant le HTML, CSS, le langage JavaScript ainsi que sa bibliothèque ReactJS en réalisant différents projets."]}),_.jsx("p",{className:"text-about",children:"En plus de ma formation, je maintiens une veille concernant les dernières tendances et technologies du développement web. Je continue mon apprentissage autour de l'ecosystème JavaScript."}),_.jsx("p",{className:"text-about",children:"Je suis actuellement ouvert à de nouvelles opportunités où je pourrais contribuer, apprendre et évoluer en tant que développeur web et me perfectionner dans la création d'interfaces utilisateur dynamiques."})]}),_.jsxs("div",{className:"link-about",children:[_.jsx("img",{className:"img-profil",src:JE,alt:"Photo Profil"}),_.jsxs("div",{className:"link-media",children:[_.jsx("a",{href:"https://www.linkedin.com/in/matthieu-simon-8a9210222/",target:"_blank",rel:"noreferrer",children:_.jsx("i",{className:"bx bxl-linkedin-square social-media"})}),_.jsx("a",{href:"https://github.com/Matthieu-Simon",target:"_blank",rel:"noreferrer",children:_.jsx("i",{className:"bx bxl-github social-media"})}),_.jsx(XE,{})]})]})]})]}),eT=()=>_.jsxs("section",{id:"skills",className:"skills",children:[_.jsx("h2",{className:"title-section",children:"Skills"}),_.jsx("div",{className:"skills-content",children:_.jsxs("div",{className:"icon-content",children:[_.jsxs("div",{className:"icon-top",children:[_.jsx("i",{className:"bx bxl-html5"}),_.jsx("i",{className:"bx bxl-css3"}),_.jsx("i",{className:"bx bxl-javascript"}),_.jsx("i",{className:"bx bxl-react"}),_.jsx("i",{className:"bx bxl-redux"})]}),_.jsxs("div",{className:"icon-bottom",children:[_.jsx("i",{className:"bx bxl-sass"}),_.jsx("i",{className:"bx bxl-tailwind-css"}),_.jsx("i",{className:"bx bxl-figma"}),_.jsx("i",{className:"bx bxl-github"}),_.jsx("i",{className:"bx bxl-git"})]})]})})]}),tT="/assets/Kasa-z4R-xfZl.png",nT="/assets/argentBankLogo-mZRcdaa7.png",rT="/assets/sophie-bluel-1GFZxofG.png";function qp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qp(Object(n),!0).forEach(function(r){Ie(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function za(t){"@babel/helpers - typeof";return za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},za(t)}function iT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qp(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function sT(t,e,n){return e&&Qp(t.prototype,e),n&&Qp(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ie(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rh(t,e){return aT(t)||uT(t,e)||My(t,e)||fT()}function to(t){return oT(t)||lT(t)||My(t)||cT()}function oT(t){if(Array.isArray(t))return Bc(t)}function aT(t){if(Array.isArray(t))return t}function lT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function uT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function My(t,e){if(t){if(typeof t=="string")return Bc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bc(t,e)}}function Bc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function cT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Kp=function(){},Nh={},Fy={},$y=null,jy={mark:Kp,measure:Kp};try{typeof window<"u"&&(Nh=window),typeof document<"u"&&(Fy=document),typeof MutationObserver<"u"&&($y=MutationObserver),typeof performance<"u"&&(jy=performance)}catch{}var hT=Nh.navigator||{},Gp=hT.userAgent,Yp=Gp===void 0?"":Gp,bn=Nh,se=Fy,Xp=$y,Lo=jy;bn.document;var ln=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",zy=~Yp.indexOf("MSIE")||~Yp.indexOf("Trident/"),Mo,Fo,$o,jo,zo,nn="___FONT_AWESOME___",Hc=16,Uy="fa",By="svg-inline--fa",pr="data-fa-i2svg",Wc="data-fa-pseudo-element",dT="data-fa-pseudo-element-pending",Dh="data-prefix",bh="data-icon",Jp="fontawesome-i2svg",pT="async",mT=["HTML","HEAD","STYLE","SCRIPT"],Hy=function(){try{return!0}catch{return!1}}(),ne="classic",fe="sharp",Oh=[ne,fe];function no(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ne]}})}var Ns=no((Mo={},Ie(Mo,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ie(Mo,fe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Mo)),Ds=no((Fo={},Ie(Fo,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ie(Fo,fe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Fo)),bs=no(($o={},Ie($o,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ie($o,fe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),$o)),gT=no((jo={},Ie(jo,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ie(jo,fe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),jo)),vT=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Wy="fa-layers-text",yT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_T=no((zo={},Ie(zo,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ie(zo,fe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),zo)),qy=[1,2,3,4,5,6,7,8,9,10],wT=qy.concat([11,12,13,14,15,16,17,18,19,20]),ET=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Os=new Set;Object.keys(Ds[ne]).map(Os.add.bind(Os));Object.keys(Ds[fe]).map(Os.add.bind(Os));var TT=[].concat(Oh,to(Os),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Zn.GROUP,Zn.SWAP_OPACITY,Zn.PRIMARY,Zn.SECONDARY]).concat(qy.map(function(t){return"".concat(t,"x")})).concat(wT.map(function(t){return"w-".concat(t)})),os=bn.FontAwesomeConfig||{};function ST(t){var e=se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function IT(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(se&&typeof se.querySelector=="function"){var AT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];AT.forEach(function(t){var e=Rh(t,2),n=e[0],r=e[1],i=IT(ST(n));i!=null&&(os[r]=i)})}var Qy={styleDefault:"solid",familyDefault:"classic",cssPrefix:Uy,replacementClass:By,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};os.familyPrefix&&(os.cssPrefix=os.familyPrefix);var ci=R(R({},Qy),os);ci.autoReplaceSvg||(ci.observeMutations=!1);var b={};Object.keys(Qy).forEach(function(t){Object.defineProperty(b,t,{enumerable:!0,set:function(n){ci[t]=n,as.forEach(function(r){return r(b)})},get:function(){return ci[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(e){ci.cssPrefix=e,as.forEach(function(n){return n(b)})},get:function(){return ci.cssPrefix}});bn.FontAwesomeConfig=b;var as=[];function kT(t){return as.push(t),function(){as.splice(as.indexOf(t),1)}}var cn=Hc,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function CT(t){if(!(!t||!ln)){var e=se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return se.head.insertBefore(e,r),t}}var PT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vs(){for(var t=12,e="";t-- >0;)e+=PT[Math.random()*62|0];return e}function Ei(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vh(t){return t.classList?Ei(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ky(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ky(t[n]),'" ')},"").trim()}function Tl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Lh(t){return t.size!==Lt.size||t.x!==Lt.x||t.y!==Lt.y||t.rotate!==Lt.rotate||t.flipX||t.flipY}function RT(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function NT(t){var e=t.transform,n=t.width,r=n===void 0?Hc:n,i=t.height,s=i===void 0?Hc:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&zy?l+="translate(".concat(e.x/cn-r/2,"em, ").concat(e.y/cn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/cn,"em), calc(-50% + ").concat(e.y/cn,"em)) "):l+="translate(".concat(e.x/cn,"em, ").concat(e.y/cn,"em) "),l+="scale(".concat(e.size/cn*(e.flipX?-1:1),", ").concat(e.size/cn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var DT=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Gy(){var t=Uy,e=By,n=b.cssPrefix,r=b.replacementClass,i=DT;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Zp=!1;function Pu(){b.autoAddCss&&!Zp&&(CT(Gy()),Zp=!0)}var bT={mixout:function(){return{dom:{css:Gy,insertCss:Pu}}},hooks:function(){return{beforeDOMElementCreation:function(){Pu()},beforeI2svg:function(){Pu()}}}},rn=bn||{};rn[nn]||(rn[nn]={});rn[nn].styles||(rn[nn].styles={});rn[nn].hooks||(rn[nn].hooks={});rn[nn].shims||(rn[nn].shims=[]);var kt=rn[nn],Yy=[],OT=function t(){se.removeEventListener("DOMContentLoaded",t),Ua=1,Yy.map(function(e){return e()})},Ua=!1;ln&&(Ua=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Ua||se.addEventListener("DOMContentLoaded",OT));function VT(t){ln&&(Ua?setTimeout(t,0):Yy.push(t))}function ro(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Ky(t):"<".concat(e," ").concat(xT(r),">").concat(s.map(ro).join(""),"</").concat(e,">")}function em(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var LT=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},xu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?LT(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function MT(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function qc(t){var e=MT(t);return e.length===1?e[0].toString(16):null}function FT(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function tm(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Qc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=tm(e);typeof kt.hooks.addPack=="function"&&!i?kt.hooks.addPack(t,tm(e)):kt.styles[t]=R(R({},kt.styles[t]||{}),s),t==="fas"&&Qc("fa",e)}var Uo,Bo,Ho,jr=kt.styles,$T=kt.shims,jT=(Uo={},Ie(Uo,ne,Object.values(bs[ne])),Ie(Uo,fe,Object.values(bs[fe])),Uo),Mh=null,Xy={},Jy={},Zy={},e0={},t0={},zT=(Bo={},Ie(Bo,ne,Object.keys(Ns[ne])),Ie(Bo,fe,Object.keys(Ns[fe])),Bo);function UT(t){return~TT.indexOf(t)}function BT(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!UT(i)?i:null}var n0=function(){var e=function(s){return xu(jr,function(o,a,l){return o[l]=xu(a,s,{}),o},{})};Xy=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Jy=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),t0=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in jr||b.autoFetchSvg,r=xu($T,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Zy=r.names,e0=r.unicodes,Mh=Sl(b.styleDefault,{family:b.familyDefault})};kT(function(t){Mh=Sl(t.styleDefault,{family:b.familyDefault})});n0();function Fh(t,e){return(Xy[t]||{})[e]}function HT(t,e){return(Jy[t]||{})[e]}function er(t,e){return(t0[t]||{})[e]}function r0(t){return Zy[t]||{prefix:null,iconName:null}}function WT(t){var e=e0[t],n=Fh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function On(){return Mh}var $h=function(){return{prefix:null,iconName:null,rest:[]}};function Sl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ne:n,i=Ns[r][t],s=Ds[r][t]||Ds[r][i],o=t in kt.styles?t:null;return s||o||null}var nm=(Ho={},Ie(Ho,ne,Object.keys(bs[ne])),Ie(Ho,fe,Object.keys(bs[fe])),Ho);function Il(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ie(e,ne,"".concat(b.cssPrefix,"-").concat(ne)),Ie(e,fe,"".concat(b.cssPrefix,"-").concat(fe)),e),o=null,a=ne;(t.includes(s[ne])||t.some(function(u){return nm[ne].includes(u)}))&&(a=ne),(t.includes(s[fe])||t.some(function(u){return nm[fe].includes(u)}))&&(a=fe);var l=t.reduce(function(u,c){var f=BT(b.cssPrefix,c);if(jr[c]?(c=jT[a].includes(c)?gT[a][c]:c,o=c,u.prefix=c):zT[a].indexOf(c)>-1?(o=c,u.prefix=Sl(c,{family:a})):f?u.iconName=f:c!==b.replacementClass&&c!==s[ne]&&c!==s[fe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?r0(u.iconName):{},g=er(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!jr.far&&jr.fas&&!b.autoFetchSvg&&(u.prefix="fas")}return u},$h());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===fe&&(jr.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=er(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=On()||"fas"),l}var qT=function(){function t(){iT(this,t),this.definitions={}}return sT(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),o[a]),Qc(a,o[a]);var l=bs[ne][a];l&&Qc(l,o[a]),n0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),rm=[],zr={},Yr={},QT=Object.keys(Yr);function KT(t,e){var n=e.mixoutsTo;return rm=t,zr={},Object.keys(Yr).forEach(function(r){QT.indexOf(r)===-1&&delete Yr[r]}),rm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),za(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){zr[o]||(zr[o]=[]),zr[o].push(s[o])})}r.provides&&r.provides(Yr)}),n}function Kc(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=zr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function mr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=zr[t]||[];i.forEach(function(s){s.apply(null,n)})}function sn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Yr[t]?Yr[t].apply(null,e):void 0}function Gc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||On();if(e)return e=er(n,e)||e,em(i0.definitions,n,e)||em(kt.styles,n,e)}var i0=new qT,GT=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,mr("noAuto")},YT={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ln?(mr("beforeI2svg",e),sn("pseudoElements2svg",e),sn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,VT(function(){JT({autoReplaceSvgRoot:n}),mr("watch",e)})}},XT={icon:function(e){if(e===null)return null;if(za(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:er(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Sl(e[0]);return{prefix:r,iconName:er(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(b.cssPrefix,"-"))>-1||e.match(vT))){var i=Il(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||On(),iconName:er(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=On();return{prefix:s,iconName:er(s,e)||e}}}},dt={noAuto:GT,config:b,dom:YT,parse:XT,library:i0,findIconDefinition:Gc,toHtml:ro},JT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(kt.styles).length>0||b.autoFetchSvg)&&ln&&b.autoReplaceSvg&&dt.dom.i2svg({node:r})};function Al(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ro(r)})}}),Object.defineProperty(t,"node",{get:function(){if(ln){var r=se.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function ZT(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Lh(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Tl(R(R({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function eS(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function jh(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,g=h===void 0?!1:h,v=r.found?r:n,w=v.width,I=v.height,p=i==="fak",d=[b.replacementClass,s?"".concat(b.cssPrefix,"-").concat(s):""].filter(function(G){return f.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(f.classes).join(" "),m={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(I)})},y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/I*16*.0625,"em")}:{};g&&(m.attributes[pr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Vs())},children:[l]}),delete m.attributes.title);var S=R(R({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:R(R({},y),f.styles)}),P=r.found&&n.found?sn("generateAbstractMask",S)||{children:[],attributes:{}}:sn("generateAbstractIcon",S)||{children:[],attributes:{}},x=P.children,O=P.attributes;return S.children=x,S.attributes=O,a?eS(S):ZT(S)}function im(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=R(R(R({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[pr]="");var c=R({},o.styles);Lh(i)&&(c.transform=NT({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Tl(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function tS(t){var e=t.content,n=t.title,r=t.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Tl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ru=kt.styles;function Yc(t){var e=t[0],n=t[1],r=t.slice(4),i=Rh(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Zn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Zn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Zn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var nS={found:!1,width:512,height:512};function rS(t,e){!Hy&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Xc(t,e){var n=e;return e==="fa"&&b.styleDefault!==null&&(e=On()),new Promise(function(r,i){if(sn("missingIconAbstract"),n==="fa"){var s=r0(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ru[e]&&Ru[e][t]){var o=Ru[e][t];return r(Yc(o))}rS(t,e),r(R(R({},nS),{},{icon:b.showMissingIcons&&t?sn("missingIconAbstract")||{}:{}}))})}var sm=function(){},Jc=b.measurePerformance&&Lo&&Lo.mark&&Lo.measure?Lo:{mark:sm,measure:sm},qi='FA "6.5.1"',iS=function(e){return Jc.mark("".concat(qi," ").concat(e," begins")),function(){return s0(e)}},s0=function(e){Jc.mark("".concat(qi," ").concat(e," ends")),Jc.measure("".concat(qi," ").concat(e),"".concat(qi," ").concat(e," begins"),"".concat(qi," ").concat(e," ends"))},zh={begin:iS,end:s0},ha=function(){};function om(t){var e=t.getAttribute?t.getAttribute(pr):null;return typeof e=="string"}function sS(t){var e=t.getAttribute?t.getAttribute(Dh):null,n=t.getAttribute?t.getAttribute(bh):null;return e&&n}function oS(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function aS(){if(b.autoReplaceSvg===!0)return da.replace;var t=da[b.autoReplaceSvg];return t||da.replace}function lS(t){return se.createElementNS("http://www.w3.org/2000/svg",t)}function uS(t){return se.createElement(t)}function o0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?lS:uS:n;if(typeof t=="string")return se.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(o0(o,{ceFn:r}))}),i}function cS(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var da={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(o0(i),n)}),n.getAttribute(pr)===null&&b.keepOriginalSource){var r=se.createComment(cS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Vh(n).indexOf(b.replacementClass))return da.replace(e);var i=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===b.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ro(a)}).join(`
`);n.setAttribute(pr,""),n.innerHTML=o}};function am(t){t()}function a0(t,e){var n=typeof e=="function"?e:ha;if(t.length===0)n();else{var r=am;b.mutateApproach===pT&&(r=bn.requestAnimationFrame||am),r(function(){var i=aS(),s=zh.begin("mutate");t.map(i),s(),n()})}}var Uh=!1;function l0(){Uh=!0}function Zc(){Uh=!1}var Ba=null;function lm(t){if(Xp&&b.observeMutations){var e=t.treeCallback,n=e===void 0?ha:e,r=t.nodeCallback,i=r===void 0?ha:r,s=t.pseudoElementsCallback,o=s===void 0?ha:s,a=t.observeMutationsRoot,l=a===void 0?se:a;Ba=new Xp(function(u){if(!Uh){var c=On();Ei(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!om(f.addedNodes[0])&&(b.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&b.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&om(f.target)&&~ET.indexOf(f.attributeName))if(f.attributeName==="class"&&sS(f.target)){var h=Il(Vh(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(Dh,g||c),v&&f.target.setAttribute(bh,v)}else oS(f.target)&&i(f.target)})}}),ln&&Ba.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fS(){Ba&&Ba.disconnect()}function hS(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function dS(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Il(Vh(t));return i.prefix||(i.prefix=On()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=HT(i.prefix,t.innerText)||Fh(i.prefix,qc(t.innerText))),!i.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function pS(t){var e=Ei(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||Vs()):(e["aria-hidden"]="true",e.focusable="false")),e}function mS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function um(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=dS(t),r=n.iconName,i=n.prefix,s=n.rest,o=pS(t),a=Kc("parseNodeAttributes",{},t),l=e.styleParser?hS(t):[];return R({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var gS=kt.styles;function u0(t){var e=b.autoReplaceSvg==="nest"?um(t,{styleParser:!1}):um(t);return~e.extra.classes.indexOf(Wy)?sn("generateLayersText",t,e):sn("generateSvgReplacementMutation",t,e)}var Vn=new Set;Oh.map(function(t){Vn.add("fa-".concat(t))});Object.keys(Ns[ne]).map(Vn.add.bind(Vn));Object.keys(Ns[fe]).map(Vn.add.bind(Vn));Vn=to(Vn);function cm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ln)return Promise.resolve();var n=se.documentElement.classList,r=function(f){return n.add("".concat(Jp,"-").concat(f))},i=function(f){return n.remove("".concat(Jp,"-").concat(f))},s=b.autoFetchSvg?Vn:Oh.map(function(c){return"fa-".concat(c)}).concat(Object.keys(gS));s.includes("fa")||s.push("fa");var o=[".".concat(Wy,":not([").concat(pr,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(pr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ei(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=zh.begin("onTree"),u=a.reduce(function(c,f){try{var h=u0(f);h&&c.push(h)}catch(g){Hy||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){a0(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function vS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;u0(t).then(function(n){n&&a0([n],e)})}function yS(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Gc(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Gc(i||{})),t(r,R(R({},n),{},{mask:i}))}}var _S=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Lt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,w=n.classes,I=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(e){var S=e.prefix,P=e.iconName,x=e.icon;return Al(R({type:"icon"},e),function(){return mr("beforeDOMElementCreation",{iconDefinition:e,params:n}),b.autoA11y&&(h?d["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(v||Vs()):(d["aria-hidden"]="true",d.focusable="false")),jh({icons:{main:Yc(x),mask:l?Yc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:P,transform:R(R({},Lt),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:y,classes:I}})})}},wS={mixout:function(){return{icon:yS(_S)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=cm,n.nodeCallback=vS,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?se:r,s=n.callback,o=s===void 0?function(){}:s;return cm(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Xc(i,a),c.iconName?Xc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var I=Rh(w,2),p=I[0],d=I[1];g([n,jh({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Tl(a);l.length>0&&(i.style=l);var u;return Lh(o)&&(u=sn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},ES={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Al({type:"layer"},function(){mr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(to(s)).join(" ")},children:o}]})}}}},TS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Al({type:"counter",content:n},function(){return mr("beforeDOMElementCreation",{content:n,params:r}),tS({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(to(a))}})})}}}},SS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Lt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Al({type:"text",content:n},function(){return mr("beforeDOMElementCreation",{content:n,params:r}),im({content:n,transform:R(R({},Lt),s),title:a,extra:{attributes:f,styles:g,classes:["".concat(b.cssPrefix,"-layers-text")].concat(to(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(zy){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return b.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,im({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},IS=new RegExp('"',"ug"),fm=[1105920,1112319];function AS(t){var e=t.replace(IS,""),n=FT(e,0),r=n>=fm[0]&&n<=fm[1],i=e.length===2?e[0]===e[1]:!1;return{value:qc(i?e[0]:e),isSecondary:r||i}}function hm(t,e){var n="".concat(dT).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ei(t.children),o=s.filter(function(x){return x.getAttribute(Wc)===e})[0],a=bn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(yT),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?fe:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ds[h][l[2].toLowerCase()]:_T[h][u],v=AS(f),w=v.value,I=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=Fh(g,w),m=d;if(p){var y=WT(w);y.iconName&&y.prefix&&(d=y.iconName,g=y.prefix)}if(d&&!I&&(!o||o.getAttribute(Dh)!==g||o.getAttribute(bh)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var S=mS(),P=S.extra;P.attributes[Wc]=e,Xc(d,g).then(function(x){var O=jh(R(R({},S),{},{icons:{main:x,mask:$h()},prefix:g,iconName:m,extra:P,watchable:!0})),G=se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=O.map(function(z){return ro(z)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function kS(t){return Promise.all([hm(t,"::before"),hm(t,"::after")])}function CS(t){return t.parentNode!==document.head&&!~mT.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function dm(t){if(ln)return new Promise(function(e,n){var r=Ei(t.querySelectorAll("*")).filter(CS).map(kS),i=zh.begin("searchPseudoElements");l0(),Promise.all(r).then(function(){i(),Zc(),e()}).catch(function(){i(),Zc(),n()})})}var PS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=dm,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?se:r;b.searchPseudoElements&&dm(i)}}},pm=!1,xS={mixout:function(){return{dom:{unwatch:function(){l0(),pm=!0}}}},hooks:function(){return{bootstrap:function(){lm(Kc("mutationObserverCallbacks",{}))},noAuto:function(){fS()},watch:function(n){var r=n.observeMutationsRoot;pm?Zc():lm(Kc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},mm=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},RS={mixout:function(){return{parse:{transform:function(n){return mm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=mm(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:f,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Nu={x:0,y:0,width:"100%",height:"100%"};function gm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function NS(t){return t.tag==="g"?t.children:[t]}var DS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Il(i.split(" ").map(function(o){return o.trim()})):$h();return s.prefix||(s.prefix=On()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,g=RT({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:R(R({},Nu),{},{fill:"white"})},w=c.children?{children:c.children.map(gm)}:{},I={tag:"g",attributes:R({},g.inner),children:[gm(R({tag:c.tag,attributes:R(R({},c.attributes),g.path)},w))]},p={tag:"g",attributes:R({},g.outer),children:[I]},d="mask-".concat(a||Vs()),m="clip-".concat(a||Vs()),y={tag:"mask",attributes:R(R({},Nu),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:NS(h)},y]};return r.push(S,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Nu)}),{children:r,attributes:i}}}},bS={provides:function(e){var n=!1;bn.matchMedia&&(n=bn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},OS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},VS=[bT,wS,ES,TS,SS,PS,xS,RS,DS,bS,OS];KT(VS,{mixoutsTo:dt});dt.noAuto;dt.config;dt.library;dt.dom;var ef=dt.parse;dt.findIconDefinition;dt.toHtml;var LS=dt.icon;dt.layer;dt.text;dt.counter;var c0={exports:{}},MS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",FS=MS,$S=FS;function f0(){}function h0(){}h0.resetWarningCache=f0;var jS=function(){function t(r,i,s,o,a,l){if(l!==$S){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:h0,resetWarningCache:f0};return n.PropTypes=n,n};c0.exports=jS();var zS=c0.exports;const B=Sg(zS);function vm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function vn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vm(Object(n),!0).forEach(function(r){Ur(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ha(t){"@babel/helpers - typeof";return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ha(t)}function Ur(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function US(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function BS(t,e){if(t==null)return{};var n=US(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function tf(t){return HS(t)||WS(t)||qS(t)||QS()}function HS(t){if(Array.isArray(t))return nf(t)}function WS(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qS(t,e){if(t){if(typeof t=="string")return nf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nf(t,e)}}function nf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function QS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KS(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,g=t.inverse,v=t.border,w=t.listItem,I=t.flip,p=t.size,d=t.rotation,m=t.pull,y=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},Ur(e,"fa-".concat(p),typeof p<"u"&&p!==null),Ur(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Ur(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Ur(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}function GS(t){return t=t-0,t===t}function d0(t){return GS(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var YS=["style"];function XS(t){return t.charAt(0).toUpperCase()+t.slice(1)}function JS(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=d0(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[XS(i)]=s:e[i]=s,e},{})}function p0(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return p0(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=JS(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[d0(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=BS(n,YS);return i.attrs.style=vn(vn({},i.attrs.style),o),t.apply(void 0,[e.tag,vn(vn({},i.attrs),a)].concat(tf(r)))}var m0=!1;try{m0=!0}catch{}function ZS(){if(!m0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ym(t){if(t&&Ha(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ef.icon)return ef.icon(t);if(t===null)return null;if(t&&Ha(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Du(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ur({},t,e):{}}var kl=$f.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=ym(n),c=Du("classes",[].concat(tf(KS(t)),tf(s.split(" ")))),f=Du("transform",typeof t.transform=="string"?ef.transform(t.transform):t.transform),h=Du("mask",ym(r)),g=LS(u,vn(vn(vn(vn({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return ZS("Could not find icon",u),null;var v=g.abstract,w={ref:e};return Object.keys(t).forEach(function(I){kl.defaultProps.hasOwnProperty(I)||(w[I]=t[I])}),eI(v[0],w)});kl.displayName="FontAwesomeIcon";kl.propTypes={beat:B.bool,border:B.bool,beatFade:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf([!0,!1,"horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool};kl.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var eI=p0.bind(null,$f.createElement),_m={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},v0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new nI;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rI=function(t){const e=g0(t);return v0.encodeByteArray(e,!0)},Wa=function(t){return rI(t).replace(/\./g,"")},iI=function(t){try{return v0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=()=>sI().__FIREBASE_DEFAULTS__,aI=()=>{if(typeof process>"u"||typeof _m>"u")return;const t=_m.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iI(t[1]);return e&&JSON.parse(e)},Bh=()=>{try{return oI()||aI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uI=t=>{var e,n;return(n=(e=Bh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cI=t=>{const e=uI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y0=()=>{var t;return(t=Bh())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wa(JSON.stringify(n)),Wa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dI(){var t;const e=(t=Bh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){return!dI()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _0(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FirebaseError";class Ti extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gI,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w0.prototype.create)}}class w0{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ti(i,a,r)}}function vI(t,e){return t.replace(yI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yI=/\{\$([^}]+)}/g;function rf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wm(s)&&wm(o)){if(!rf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){return t&&t._delegate?t._delegate:t}class Ls{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TI(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:EI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EI(t){return t===Kn?void 0:t}function TI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const II={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},AI=q.INFO,kI={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},CI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class E0{constructor(e){this.name=e,this._logLevel=AI,this._logHandler=CI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?II[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const PI=(t,e)=>e.some(n=>t instanceof n);let Em,Tm;function xI(){return Em||(Em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RI(){return Tm||(Tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const T0=new WeakMap,sf=new WeakMap,S0=new WeakMap,bu=new WeakMap,Hh=new WeakMap;function NI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&T0.set(n,t)}).catch(()=>{}),Hh.set(e,t),e}function DI(t){if(sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sf.set(t,e)}let of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||S0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bI(t){of=t(of)}function OI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ou(this),e,...n);return S0.set(r,e.sort?e.sort():[e]),Pn(r)}:RI().includes(t)?function(...e){return t.apply(Ou(this),e),Pn(T0.get(this))}:function(...e){return Pn(t.apply(Ou(this),e))}}function VI(t){return typeof t=="function"?OI(t):(t instanceof IDBTransaction&&DI(t),PI(t,xI())?new Proxy(t,of):t)}function Pn(t){if(t instanceof IDBRequest)return NI(t);if(bu.has(t))return bu.get(t);const e=VI(t);return e!==t&&(bu.set(t,e),Hh.set(e,t)),e}const Ou=t=>Hh.get(t);function LI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pn(o.result),l.oldVersion,l.newVersion,Pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const MI=["get","getKey","getAll","getAllKeys","count"],FI=["put","add","delete","clear"],Vu=new Map;function Sm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vu.get(e))return Vu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Vu.set(e,s),s}bI(t=>({...t,get:(e,n,r)=>Sm(e,n)||t.get(e,n,r),has:(e,n)=>!!Sm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const af="@firebase/app",Im="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new E0("@firebase/app"),zI="@firebase/app-compat",UI="@firebase/analytics-compat",BI="@firebase/analytics",HI="@firebase/app-check-compat",WI="@firebase/app-check",qI="@firebase/auth",QI="@firebase/auth-compat",KI="@firebase/database",GI="@firebase/database-compat",YI="@firebase/functions",XI="@firebase/functions-compat",JI="@firebase/installations",ZI="@firebase/installations-compat",e2="@firebase/messaging",t2="@firebase/messaging-compat",n2="@firebase/performance",r2="@firebase/performance-compat",i2="@firebase/remote-config",s2="@firebase/remote-config-compat",o2="@firebase/storage",a2="@firebase/storage-compat",l2="@firebase/firestore",u2="@firebase/firestore-compat",c2="firebase",f2="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="[DEFAULT]",h2={[af]:"fire-core",[zI]:"fire-core-compat",[BI]:"fire-analytics",[UI]:"fire-analytics-compat",[WI]:"fire-app-check",[HI]:"fire-app-check-compat",[qI]:"fire-auth",[QI]:"fire-auth-compat",[KI]:"fire-rtdb",[GI]:"fire-rtdb-compat",[YI]:"fire-fn",[XI]:"fire-fn-compat",[JI]:"fire-iid",[ZI]:"fire-iid-compat",[e2]:"fire-fcm",[t2]:"fire-fcm-compat",[n2]:"fire-perf",[r2]:"fire-perf-compat",[i2]:"fire-rc",[s2]:"fire-rc-compat",[o2]:"fire-gcs",[a2]:"fire-gcs-compat",[l2]:"fire-fst",[u2]:"fire-fst-compat","fire-js":"fire-js",[c2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Map,uf=new Map;function d2(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ka(t){const e=t.name;if(uf.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;uf.set(e,t);for(const n of Qa.values())d2(n,t);return!0}function p2(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xn=new w0("app","Firebase",m2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=f2;function I0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(n||(n=y0()),!n)throw xn.create("no-options");const s=Qa.get(i);if(s){if(rf(n,s.options)&&rf(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new SI(i);for(const l of uf.values())o.addComponent(l);const a=new g2(n,r,o);return Qa.set(i,a),a}function y2(t=lf){const e=Qa.get(t);if(!e&&t===lf&&y0())return I0();if(!e)throw xn.create("no-app",{appName:t});return e}function Xr(t,e,n){var r;let i=(r=h2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}Ka(new Ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="firebase-heartbeat-database",w2=1,Ms="firebase-heartbeat-store";let Lu=null;function A0(){return Lu||(Lu=LI(_2,w2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ms)}catch(n){console.warn(n)}}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),Lu}async function E2(t){try{return await(await A0()).transaction(Ms).objectStore(Ms).get(k0(t))}catch(e){if(e instanceof Ti)gr.warn(e.message);else{const n=xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function Am(t,e){try{const r=(await A0()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(e,k0(t)),await r.done}catch(n){if(n instanceof Ti)gr.warn(n.message);else{const r=xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function k0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=1024,S2=30*24*60*60*1e3;class I2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=km();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=S2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=km(),{heartbeatsToSend:r,unsentEntries:i}=A2(this._heartbeatsCache.heartbeats),s=Wa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function km(){return new Date().toISOString().substring(0,10)}function A2(t,e=T2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class k2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _0()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await E2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cm(t){return Wa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(t){Ka(new Ls("platform-logger",e=>new $I(e),"PRIVATE")),Ka(new Ls("heartbeat",e=>new I2(e),"PRIVATE")),Xr(af,Im,t),Xr(af,Im,"esm2017"),Xr("fire-js","")}C2("");var P2="firebase",x2="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xr(P2,x2,"app");var R2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,Wh=Wh||{},M=R2||self;function Cl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function io(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function N2(t){return Object.prototype.hasOwnProperty.call(t,Mu)&&t[Mu]||(t[Mu]=++D2)}var Mu="closure_uid_"+(1e9*Math.random()>>>0),D2=0;function b2(t,e,n){return t.call.apply(t.bind,arguments)}function O2(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=b2:He=O2,He.apply(null,arguments)}function Wo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Re(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Un(){this.s=this.s,this.o=this.o}var V2=0;Un.prototype.s=!1;Un.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),V2!=0)&&N2(this)};Un.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Pm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Cl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var L2=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};M.addEventListener("test",n,e),M.removeEventListener("test",n,e)}catch{}return t}();function Fs(t){return/^[\s\xa0]*$/.test(t)}function Pl(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function Ot(t){return Pl().indexOf(t)!=-1}function Qh(t){return Qh[" "](t),t}Qh[" "]=function(){};function M2(t,e){var n=xA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var F2=Ot("Opera"),fi=Ot("Trident")||Ot("MSIE"),P0=Ot("Edge"),cf=P0||fi,x0=Ot("Gecko")&&!(Pl().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),$2=Pl().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function R0(){var t=M.document;return t?t.documentMode:void 0}var ff;e:{var Fu="",$u=function(){var t=Pl();if(x0)return/rv:([^\);]+)(\)|;)/.exec(t);if(P0)return/Edge\/([\d\.]+)/.exec(t);if(fi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($2)return/WebKit\/(\S+)/.exec(t);if(F2)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($u&&(Fu=$u?$u[1]:""),fi){var ju=R0();if(ju!=null&&ju>parseFloat(Fu)){ff=String(ju);break e}}ff=Fu}var hf;if(M.document&&fi){var xm=R0();hf=xm||parseInt(ff,10)||void 0}else hf=void 0;var j2=hf;function $s(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(x0){e:{try{Qh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:z2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$s.$.h.call(this)}}Re($s,We);var z2={2:"touch",3:"pen",4:"mouse"};$s.prototype.h=function(){$s.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var so="closure_listenable_"+(1e6*Math.random()|0),U2=0;function B2(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++U2,this.fa=this.ia=!1}function xl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Kh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function H2(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function N0(t){const e={};for(const n in t)e[n]=t[n];return e}const Rm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Rm.length;s++)n=Rm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rl(t){this.src=t,this.g={},this.h=0}Rl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=pf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new B2(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function df(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=C0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(xl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Gh="closure_lm_"+(1e6*Math.random()|0),zu={};function b0(t,e,n,r,i){if(r&&r.once)return V0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)b0(t,e[s],n,r,i);return null}return n=Jh(n),t&&t[so]?t.O(e,n,io(r)?!!r.capture:!!r,i):O0(t,e,n,!1,r,i)}function O0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=io(i)?!!i.capture:!!i,a=Xh(t);if(a||(t[Gh]=a=new Rl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=W2(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)L2||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(M0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function W2(){function t(n){return e.call(t.src,t.listener,n)}const e=q2;return t}function V0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)V0(t,e[s],n,r,i);return null}return n=Jh(n),t&&t[so]?t.P(e,n,io(r)?!!r.capture:!!r,i):O0(t,e,n,!0,r,i)}function L0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)L0(t,e[s],n,r,i);else r=io(r)?!!r.capture:!!r,n=Jh(n),t&&t[so]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=pf(s,n,r,i),-1<n&&(xl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pf(e,n,r,i)),(n=-1<t?e[t]:null)&&Yh(n))}function Yh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[so])df(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(M0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Xh(e))?(df(n,t),n.h==0&&(n.src=null,e[Gh]=null)):xl(t)}}}function M0(t){return t in zu?zu[t]:zu[t]="on"+t}function q2(t,e){if(t.fa)t=!0;else{e=new $s(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Yh(t),t=n.call(r,e)}return t}function Xh(t){return t=t[Gh],t instanceof Rl?t:null}var Uu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jh(t){return typeof t=="function"?t:(t[Uu]||(t[Uu]=function(e){return t.handleEvent(e)}),t[Uu])}function xe(){Un.call(this),this.i=new Rl(this),this.S=this,this.J=null}Re(xe,Un);xe.prototype[so]=!0;xe.prototype.removeEventListener=function(t,e,n,r){L0(this,t,e,n,r)};function Ve(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var i=e;e=new We(r,t),D0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=qo(o,r,!0,e)&&i}if(o=e.g=t,i=qo(o,r,!0,e)&&i,i=qo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=qo(o,r,!1,e)&&i}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)xl(n[r]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&df(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zh=M.JSON.stringify;class Q2{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function K2(){var t=ed;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class G2{constructor(){this.h=this.g=null}add(e,n){const r=F0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var F0=new Q2(()=>new Y2,t=>t.reset());class Y2{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function X2(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function J2(t){M.setTimeout(()=>{throw t},0)}let js,zs=!1,ed=new G2,$0=()=>{const t=M.Promise.resolve(void 0);js=()=>{t.then(Z2)}};var Z2=()=>{for(var t;t=K2();){try{t.h.call(t.g)}catch(n){J2(n)}var e=F0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zs=!1};function Nl(t,e){xe.call(this),this.h=t||1,this.g=e||M,this.j=He(this.qb,this),this.l=Date.now()}Re(Nl,xe);k=Nl.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ve(this,"tick"),this.ga&&(td(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function td(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){Nl.$.N.call(this),td(this),delete this.g};function nd(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function j0(t){t.g=nd(()=>{t.g=null,t.i&&(t.i=!1,j0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eA extends Un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:j0(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(t){Un.call(this),this.h=t,this.g={}}Re(Us,Un);var Nm=[];function z0(t,e,n,r){Array.isArray(n)||(n&&(Nm[0]=n.toString()),n=Nm);for(var i=0;i<n.length;i++){var s=b0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function U0(t){Kh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yh(e)},t),t.g={}}Us.prototype.N=function(){Us.$.N.call(this),U0(this)};Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dl(){this.g=!0}Dl.prototype.Ea=function(){this.g=!1};function tA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function nA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+iA(t,n)+(r?" "+r:"")})}function rA(t,e){t.info(function(){return"TIMEOUT: "+e})}Dl.prototype.info=function(){};function iA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zh(n)}catch{return e}}var Tr={},Dm=null;function bl(){return Dm=Dm||new xe}Tr.Ta="serverreachability";function B0(t){We.call(this,Tr.Ta,t)}Re(B0,We);function Bs(t){const e=bl();Ve(e,new B0(e))}Tr.STAT_EVENT="statevent";function H0(t,e){We.call(this,Tr.STAT_EVENT,t),this.stat=e}Re(H0,We);function Ye(t){const e=bl();Ve(e,new H0(e,t))}Tr.Ua="timingevent";function W0(t,e){We.call(this,Tr.Ua,t),this.size=e}Re(W0,We);function oo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var Ol={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},q0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rd(){}rd.prototype.h=null;function bm(t){return t.h||(t.h=t.i())}function Q0(){}var ao={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function id(){We.call(this,"d")}Re(id,We);function sd(){We.call(this,"c")}Re(sd,We);var mf;function Vl(){}Re(Vl,rd);Vl.prototype.g=function(){return new XMLHttpRequest};Vl.prototype.i=function(){return{}};mf=new Vl;function lo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Us(this),this.P=sA,t=cf?125:void 0,this.V=new Nl(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new K0}function K0(){this.i=null,this.g="",this.h=!1}var sA=45e3,G0={},gf={};k=lo.prototype;k.setTimeout=function(t){this.P=t};function vf(t,e,n){t.L=1,t.A=Ml(on(e)),t.u=n,t.S=!0,Y0(t,null)}function Y0(t,e){t.G=Date.now(),uo(t),t.B=on(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),i1(n.i,"t",r),t.o=0,n=t.l.J,t.h=new K0,t.g=A1(t.l,n?e:null,!t.u),0<t.O&&(t.M=new eA(He(t.Pa,t,t.g),t.O)),z0(t.U,t.g,"readystatechange",t.nb),e=t.I?N0(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Bs(),tA(t.j,t.v,t.B,t.m,t.W,t.u)}k.nb=function(t){t=t.target;const e=this.M;e&&Mt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=Mt(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||cf||this.g&&(this.h.h||this.g.ja()||Mm(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?Bs(3):Bs(2)),Ll(this);var n=this.g.da();this.ca=n;t:if(X0(this)){var r=Mm(this.g);t="";var i=r.length,s=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),ls(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nA(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fs(a)){var u=a;break t}}u=null}if(n=u)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yf(this,n);else{this.i=!1,this.s=3,Ye(12),tr(this),ls(this);break e}}this.S?(J0(this,c,o),cf&&this.i&&c==3&&(z0(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),yf(this,o)),c==4&&tr(this),this.i&&!this.J&&(c==4?E1(this.l,this):(this.i=!1,uo(this)))}else kA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),tr(this),ls(this)}}}catch{}finally{}};function X0(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function J0(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=oA(t,n),i==gf){e==4&&(t.s=4,Ye(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(i==G0){t.s=4,Ye(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,i,null),yf(t,i);X0(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ye(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),fd(e),e.M=!0,Ye(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),tr(t),ls(t))}k.mb=function(){if(this.g){var t=Mt(this.g),e=this.g.ja();this.o<e.length&&(Ll(this),J0(this,t,e),this.i&&t!=4&&uo(this))}};function oA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?gf:(n=Number(e.substring(n,r)),isNaN(n)?G0:(r+=1,r+n>e.length?gf:(e=e.slice(r,r+n),t.o=r+n,e)))}k.cancel=function(){this.J=!0,tr(this)};function uo(t){t.Y=Date.now()+t.P,Z0(t,t.P)}function Z0(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=oo(He(t.lb,t),e)}function Ll(t){t.C&&(M.clearTimeout(t.C),t.C=null)}k.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(rA(this.j,this.B),this.L!=2&&(Bs(),Ye(17)),tr(this),this.s=2,ls(this)):Z0(this,this.Y-t)};function ls(t){t.l.H==0||t.J||E1(t.l,t)}function tr(t){Ll(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,td(t.V),U0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function yf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_f(n.i,t))){if(!t.K&&_f(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xa(n),zl(n);else break e;cd(n),Ye(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=oo(He(n.ib,n),6e3));if(1>=a1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else nr(n,11)}else if((t.K||n.g==t)&&Xa(n),!Fs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(od(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,re(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=I1(r,r.J?r.pa:null,r.Y),o.K){l1(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ll(a),uo(a)),r.g=o}else _1(r);0<n.j.length&&Ul(n)}else u[0]!="stop"&&u[0]!="close"||nr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nr(n,7):ud(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Bs(4)}catch{}}function aA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Cl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function lA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Cl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function e1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Cl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lA(t),r=aA(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var t1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ar(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ar){this.h=t.h,Ga(this,t.j),this.s=t.s,this.g=t.g,Ya(this,t.m),this.l=t.l;var e=t.i,n=new Hs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Om(this,n),this.o=t.o}else t&&(e=String(t).match(t1))?(this.h=!1,Ga(this,e[1]||"",!0),this.s=Qi(e[2]||""),this.g=Qi(e[3]||"",!0),Ya(this,e[4]),this.l=Qi(e[5]||"",!0),Om(this,e[6]||"",!0),this.o=Qi(e[7]||"")):(this.h=!1,this.i=new Hs(null,this.h))}ar.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ki(e,Vm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ki(e,Vm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ki(n,n.charAt(0)=="/"?hA:fA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ki(n,pA)),t.join("")};function on(t){return new ar(t)}function Ga(t,e,n){t.j=n?Qi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ya(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Om(t,e,n){e instanceof Hs?(t.i=e,mA(t.i,t.h)):(n||(e=Ki(e,dA)),t.i=new Hs(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Ml(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ki(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vm=/[#\/\?@]/g,fA=/[#\?:]/g,hA=/[#\?]/g,dA=/[#\?@]/g,pA=/#/g;function Hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bn(t){t.g||(t.g=new Map,t.h=0,t.i&&uA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Hs.prototype;k.add=function(t,e){Bn(this),this.i=null,t=Si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function n1(t,e){Bn(t),e=Si(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function r1(t,e){return Bn(t),e=Si(t,e),t.g.has(e)}k.forEach=function(t,e){Bn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.ta=function(){Bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){Bn(this);let e=[];if(typeof t=="string")r1(this,t)&&(e=e.concat(this.g.get(Si(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return Bn(this),this.i=null,t=Si(this,t),r1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function i1(t,e,n){n1(t,e),0<n.length&&(t.i=null,t.g.set(Si(t,e),qh(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mA(t,e){e&&!t.j&&(Bn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(n1(this,r),i1(this,i,n))},t)),t.j=e}var gA=class{constructor(t,e){this.g=t,this.map=e}};function s1(t){this.l=t||vA,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vA=10;function o1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function a1(t){return t.h?1:t.g?t.g.size:0}function _f(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function od(t,e){t.g?t.g.add(e):t.h=e}function l1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}s1.prototype.cancel=function(){if(this.i=u1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function u1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return qh(t.i)}var yA=class{stringify(t){return M.JSON.stringify(t,void 0)}parse(t){return M.JSON.parse(t,void 0)}};function _A(){this.g=new yA}function wA(t,e,n){const r=n||"";try{e1(t,function(i,s){let o=i;io(i)&&(o=Zh(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function EA(t,e){const n=new Dl;if(M.Image){const r=new Image;r.onload=Wo(Qo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wo(Qo,n,r,"TestLoadImage: error",!1,e),r.onabort=Wo(Qo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wo(Qo,n,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Qo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Fl(t){this.l=t.ec||null,this.j=t.ob||!1}Re(Fl,rd);Fl.prototype.g=function(){return new $l(this.l,this.j)};Fl.prototype.i=function(t){return function(){return t}}({});function $l(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ad,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Re($l,xe);var ad=0;k=$l.prototype;k.open=function(t,e){if(this.readyState!=ad)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ws(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,co(this)),this.readyState=ad};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;c1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function c1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?co(this):Ws(this),this.readyState==3&&c1(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,co(this))};k.Ya=function(t){this.g&&(this.response=t,co(this))};k.ka=function(){this.g&&co(this)};function co(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ws(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ws(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var TA=M.JSON.parse;function de(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=f1,this.L=this.M=!1}Re(de,xe);var f1="",SA=/^https?$/i,IA=["POST","PUT"];k=de.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():mf.g(),this.C=this.u?bm(this.u):bm(mf),this.g.onreadystatechange=He(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Lm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=C0(IA,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{p1(this),0<this.B&&((this.L=AA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.ua,this)):this.A=nd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lm(this,s)}};function AA(t){return fi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof Wh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Lm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,h1(t),jl(t)}function h1(t){t.F||(t.F=!0,Ve(t,"complete"),Ve(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),jl(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jl(this,!0)),de.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?d1(this):this.kb())};k.kb=function(){d1(this)};function d1(t){if(t.h&&typeof Wh<"u"&&(!t.C[1]||Mt(t)!=4||t.da()!=2)){if(t.v&&Mt(t)==4)nd(t.La,0,t);else if(Ve(t,"readystatechange"),Mt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(t1)[1]||null;!i&&M.self&&M.self.location&&(i=M.self.location.protocol.slice(0,-1)),r=!SA.test(i?i.toLowerCase():"")}n=r}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var s=2<Mt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",h1(t)}}finally{jl(t)}}}}function jl(t,e){if(t.g){p1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=r}catch{}}}function p1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Mt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),TA(e)}};function Mm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case f1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kA(t){const e={};t=(t.g&&2<=Mt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Fs(t[r]))continue;var n=X2(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}H2(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function m1(t){let e="";return Kh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ld(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=m1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function $i(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function g1(t){this.Ga=0,this.j=[],this.l=new Dl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$i("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$i("baseRetryDelayMs",5e3,t),this.hb=$i("retryDelaySeedMs",1e4,t),this.eb=$i("forwardChannelMaxRetries",2,t),this.xa=$i("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new s1(t&&t.concurrentRequestLimit),this.Ja=new _A,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=g1.prototype;k.ra=8;k.H=1;function ud(t){if(v1(t),t.H==3){var e=t.W++,n=on(t.I);if(re(n,"SID",t.K),re(n,"RID",e),re(n,"TYPE","terminate"),fo(t,n),e=new lo(t,t.l,e),e.L=2,e.A=Ml(on(n)),n=!1,M.navigator&&M.navigator.sendBeacon)try{n=M.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&M.Image&&(new Image().src=e.A,n=!0),n||(e.g=A1(e.l,null),e.g.ha(e.A)),e.G=Date.now(),uo(e)}S1(t)}function zl(t){t.g&&(fd(t),t.g.cancel(),t.g=null)}function v1(t){zl(t),t.u&&(M.clearTimeout(t.u),t.u=null),Xa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function Ul(t){if(!o1(t.i)&&!t.m){t.m=!0;var e=t.Na;js||$0(),zs||(js(),zs=!0),ed.add(e,t),t.C=0}}function CA(t,e){return a1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=oo(He(t.Na,t,e),T1(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new lo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=N0(s),D0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=y1(this,i,e),n=on(this.I),re(n,"RID",t),re(n,"CVER",22),this.F&&re(n,"X-HTTP-Session-Id",this.F),fo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(m1(s)))+"&"+e:this.o&&ld(n,this.o,s)),od(this.i,i),this.bb&&re(n,"TYPE","init"),this.P?(re(n,"$req",e),re(n,"SID","null"),i.aa=!0,vf(i,n,null)):vf(i,n,e),this.H=2}}else this.H==3&&(t?Fm(this,t):this.j.length==0||o1(this.i)||Fm(this))};function Fm(t,e){var n;e?n=e.m:n=t.W++;const r=on(t.I);re(r,"SID",t.K),re(r,"RID",n),re(r,"AID",t.V),fo(t,r),t.o&&t.s&&ld(r,t.o,t.s),n=new lo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=y1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),od(t.i,n),vf(n,r,e)}function fo(t,e){t.na&&Kh(t.na,function(n,r){re(e,r,n)}),t.h&&e1({},function(n,r){re(e,r,n)})}function y1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?He(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{wA(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function _1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;js||$0(),zs||(js(),zs=!0),ed.add(e,t),t.A=0}}function cd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=oo(He(t.Ma,t),T1(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,w1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oo(He(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ye(10),zl(this),w1(this))};function fd(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function w1(t){t.g=new lo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=on(t.wa);re(e,"RID","rpc"),re(e,"SID",t.K),re(e,"AID",t.V),re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&re(e,"TO",t.qa),re(e,"TYPE","xmlhttp"),fo(t,e),t.o&&t.s&&ld(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ml(on(e)),n.u=null,n.S=!0,Y0(n,t)}k.ib=function(){this.v!=null&&(this.v=null,zl(this),cd(this),Ye(19))};function Xa(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function E1(t,e){var n=null;if(t.g==e){Xa(t),fd(t),t.g=null;var r=2}else if(_f(t.i,e))n=e.F,l1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=bl(),Ve(r,new W0(r,n)),Ul(t)}else _1(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&CA(t,e)||r==2&&cd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:nr(t,5);break;case 4:nr(t,10);break;case 3:nr(t,6);break;default:nr(t,2)}}}function T1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function nr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=He(t.pb,t);n||(n=new ar("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Ga(n,"https"),Ml(n)),EA(n.toString(),r)}else Ye(2);t.H=0,t.h&&t.h.za(e),S1(t),v1(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ye(2)):(this.l.info("Failed to ping google.com"),Ye(1))};function S1(t){if(t.H=0,t.ma=[],t.h){const e=u1(t.i);(e.length!=0||t.j.length!=0)&&(Pm(t.ma,e),Pm(t.ma,t.j),t.i.i.length=0,qh(t.j),t.j.length=0),t.h.ya()}}function I1(t,e,n){var r=n instanceof ar?on(n):new ar(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ya(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ar(null);r&&Ga(s,r),e&&(s.g=e),i&&Ya(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&re(r,n,e),re(r,"VER",t.ra),fo(t,r),r}function A1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new de(new Fl({ob:n})):new de(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function k1(){}k=k1.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function Ja(){if(fi&&!(10<=Number(j2)))throw Error("Environmental error: no available transport.")}Ja.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){xe.call(this),this.g=new g1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Fs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}Re(ct,xe);ct.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ye(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=I1(t,null,t.Y),Ul(t)};ct.prototype.close=function(){ud(this.g)};ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zh(t),t=n);e.j.push(new gA(e.fb++,t)),e.H==3&&Ul(e)};ct.prototype.N=function(){this.g.h=null,delete this.j,ud(this.g),delete this.g,ct.$.N.call(this)};function C1(t){id.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Re(C1,id);function P1(){sd.call(this),this.status=1}Re(P1,sd);function Ii(t){this.g=t}Re(Ii,k1);Ii.prototype.Ba=function(){Ve(this.g,"a")};Ii.prototype.Aa=function(t){Ve(this.g,new C1(t))};Ii.prototype.za=function(t){Ve(this.g,new P1)};Ii.prototype.ya=function(){Ve(this.g,"b")};function PA(){this.blockSize=-1}function Rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Re(Rt,PA);Rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Rt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Bu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Bu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Bu(this,r),i=0;break}}this.h=i,this.i+=e};Rt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Z(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var xA={};function hd(t){return-128<=t&&128>t?M2(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function Ft(t){if(isNaN(t)||!isFinite(t))return Jr;if(0>t)return be(Ft(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=wf;return new Z(e,0)}function x1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return be(x1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ft(Math.pow(e,8)),r=Jr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ft(Math.pow(e,s)),r=r.R(s).add(Ft(o))):(r=r.R(n),r=r.add(Ft(o)))}return r}var wf=4294967296,Jr=hd(0),Ef=hd(1),$m=hd(16777216);k=Z.prototype;k.ea=function(){if(gt(this))return-be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:wf+r)*e,e*=wf}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Yt(this))return"0";if(gt(this))return"-"+be(this).toString(t);for(var e=Ft(Math.pow(t,6)),n=this,r="";;){var i=el(n,e).g;n=Za(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Yt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Yt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function gt(t){return t.h==-1}k.X=function(t){return t=Za(this,t),gt(t)?-1:Yt(t)?0:1};function be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Z(n,~t.h).add(Ef)}k.abs=function(){return gt(this)?be(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function Za(t,e){return t.add(be(e))}k.R=function(t){if(Yt(this)||Yt(t))return Jr;if(gt(this))return gt(t)?be(this).R(be(t)):be(be(this).R(t));if(gt(t))return be(this.R(be(t)));if(0>this.X($m)&&0>t.X($m))return Ft(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ko(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ko(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ko(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ko(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Z(n,0)};function Ko(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ji(t,e){this.g=t,this.h=e}function el(t,e){if(Yt(e))throw Error("division by zero");if(Yt(t))return new ji(Jr,Jr);if(gt(t))return e=el(be(t),e),new ji(be(e.g),be(e.h));if(gt(e))return e=el(t,be(e)),new ji(be(e.g),e.h);if(30<t.g.length){if(gt(t)||gt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ef,r=e;0>=r.X(t);)n=jm(n),r=jm(r);var i=Ir(n,1),s=Ir(r,1);for(r=Ir(r,2),n=Ir(n,2);!Yt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ir(r,1),n=Ir(n,1)}return e=Za(t,i.R(e)),new ji(i,e)}for(i=Jr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ft(n),o=s.R(e);gt(o)||0<o.X(t);)n-=r,s=Ft(n),o=s.R(e);Yt(s)&&(s=Ef),i=i.add(s),t=Za(t,o)}return new ji(i,t)}k.gb=function(t){return el(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Z(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Z(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Z(n,this.h^t.h)};function jm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Z(n,t.h)}function Ir(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Z(i,t.h)}Ja.prototype.createWebChannel=Ja.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;Ol.NO_ERROR=0;Ol.TIMEOUT=8;Ol.HTTP_ERROR=6;q0.COMPLETE="complete";Q0.EventType=ao;ao.OPEN="a";ao.CLOSE="b";ao.ERROR="c";ao.MESSAGE="d";xe.prototype.listen=xe.prototype.O;de.prototype.listenOnce=de.prototype.P;de.prototype.getLastError=de.prototype.Sa;de.prototype.getLastErrorCode=de.prototype.Ia;de.prototype.getStatus=de.prototype.da;de.prototype.getResponseJson=de.prototype.Wa;de.prototype.getResponseText=de.prototype.ja;de.prototype.send=de.prototype.ha;de.prototype.setWithCredentials=de.prototype.Oa;Rt.prototype.digest=Rt.prototype.l;Rt.prototype.reset=Rt.prototype.reset;Rt.prototype.update=Rt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=Ft;Z.fromString=x1;var RA=function(){return new Ja},NA=function(){return bl()},Hu=Ol,DA=q0,bA=Tr,zm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Go=Q0,OA=de,VA=Rt,Zr=Z;const Um="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new E0("@firebase/firestore");function zi(){return vr.logLevel}function C(t,...e){if(vr.logLevel<=q.DEBUG){const n=e.map(dd);vr.debug(`Firestore (${Ai}): ${t}`,...n)}}function Bt(t,...e){if(vr.logLevel<=q.ERROR){const n=e.map(dd);vr.error(`Firestore (${Ai}): ${t}`,...n)}}function hi(t,...e){if(vr.logLevel<=q.WARN){const n=e.map(dd);vr.warn(`Firestore (${Ai}): ${t}`,...n)}}function dd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw Bt(e),new Error(e)}function we(t,e){t||j()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class MA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FA{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new R1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new ze(e)}}class $A{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $A(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new zA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=BA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function di(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new st(0,0))}static max(){return new F(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,r){n===void 0?n=0:n>e.length&&j(),r===void 0?r=e.length-n:r>e.length-n&&j(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends qs{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const WA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends qs{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return WA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(he.fromString(e))}static fromName(e){return new L(he.fromString(e).popFirst(5))}static empty(){return new L(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new he(e.slice()))}}function qA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Ln(i,L.empty(),e)}function QA(t){return new Ln(t.readTime,t.key,-1)}class Ln{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ln(F.min(),L.empty(),-1)}static max(){return new Ln(F.max(),L.empty(),-1)}}function KA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==GA)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Rn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new us(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=gd(r.target.error);this.V.reject(new us(e,i))}}static open(e,n,r,i){try{return new md(n,e.transaction(i,r))}catch(s){throw new us(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new JA(n)}}class rr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,rr.S(qa())===12.2&&Bt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Gn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!_0())return!1;if(rr.C())return!0;const e=qa(),n=rr.S(e),r=0<n&&n<10,i=rr.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new us(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new V(A.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(A.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new us(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=md.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class XA{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Gn(this.k.delete())}}class us extends V{constructor(e,n){super(A.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ho(t){return t.name==="IndexedDbTransactionError"}class JA{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Gn(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Gn(this.store.add(e))}get(e){return Gn(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Gn(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Gn(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new E((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new E((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const o=gd(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new XA(a),u=n(a.primaryKey,a.value,l);if(u instanceof E){const c=u.catch(f=>(l.done(),E.reject(f)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Gn(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=gd(r.target.error);n(i)}})}let Bm=!1;function gd(t){const e=rr.S(qa());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Bm||(Bm=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}vd._e=-1;function Bl(t){return t==null}function Tf(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yo(this.root,e,this.comparator,!0)}}class Yo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??De.EMPTY,this.right=s??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return De.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,n,r,i,s){return this}insert(e,n,r){return new De(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wm(this.data.getIterator())}getIteratorFrom(e){return new Wm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Wm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new yn([])}unionWith(e){let n=new Le(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new N1("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(we(!!t),typeof t=="string"){let e=0;const n=ek.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _d(t){const e=t.mapValue.fields.__previous_value__;return yd(e)?_d(e):e}function Qs(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ks{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ks&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yd(t)?4:nk(t)?9007199254740991:10:j()}function Ht(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qs(t).isEqual(Qs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Mn(i.timestampValue),a=Mn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yr(i.bytesValue).isEqual(yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ye(i.geoPointValue.latitude)===ye(s.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ye(i.integerValue)===ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ye(i.doubleValue),a=ye(s.doubleValue);return o===a?Tf(o)===Tf(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Hm(o)!==Hm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ht(o[l],a[l])))return!1;return!0}(t,e);default:return j()}}function Gs(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function pi(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ye(s.integerValue||s.doubleValue),l=ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return qm(t.timestampValue,e.timestampValue);case 4:return qm(Qs(t),Qs(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(s,o){const a=yr(s),l=yr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=X(a[u],l[u]);if(c!==0)return c}return X(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(ye(s.latitude),ye(o.latitude));return a!==0?a:X(ye(s.longitude),ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=pi(a[u],l[u]);if(c)return c}return X(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Xo.mapValue&&o===Xo.mapValue)return 0;if(s===Xo.mapValue)return 1;if(o===Xo.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=X(l[f],c[f]);if(h!==0)return h;const g=pi(a[l[f]],u[c[f]]);if(g!==0)return g}return X(l.length,c.length)}(t.mapValue,e.mapValue);default:throw j()}}function qm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=Mn(t),r=Mn(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function mi(t){return Sf(t)}function Sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Mn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sf(n.fields[o])}`;return i+"}"}(t.mapValue):j()}function If(t){return!!t&&"integerValue"in t}function wd(t){return!!t&&"arrayValue"in t}function Qm(t){return!!t&&"nullValue"in t}function Km(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wu(t){return!!t&&"mapValue"in t}function cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cs(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=cs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(cs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Be(e,0,F.min(),F.min(),F.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new Be(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new Be(e,2,n,F.min(),F.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,F.min(),F.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.position=e,this.inclusive=n}}function Gm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=pi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n="asc"){this.field=e,this.dir=n}}function rk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{}class Te extends D1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sk(e,n,r):n==="array-contains"?new lk(e,r):n==="in"?new uk(e,r):n==="not-in"?new ck(e,r):n==="array-contains-any"?new fk(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ok(e,r):new ak(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(pi(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends D1{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Wt(e,n)}matches(e){return b1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function b1(t){return t.op==="and"}function O1(t){return ik(t)&&b1(t)}function ik(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Af(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+mi(t.value);if(O1(t))return t.filters.map(e=>Af(e)).join(",");{const e=t.filters.map(n=>Af(n)).join(",");return`${t.op}(${e})`}}function V1(t,e){return t instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&Ht(r.value,i.value)}(t,e):t instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&V1(o,i.filters[a]),!0):!1}(t,e):void j()}function L1(t){return t instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${mi(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(L1).join(" ,")+"}"}(t):"Filter"}class sk extends Te{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class ok extends Te{constructor(e,n){super(e,"in",n),this.keys=M1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ak extends Te{constructor(e,n){super(e,"not-in",n),this.keys=M1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function M1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class lk extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wd(n)&&Gs(n.arrayValue,this.value)}}class uk extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gs(this.value.arrayValue,n)}}class ck extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gs(this.value.arrayValue,n)}}class fk extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Xm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hk(t,e,n,r,i,s,o)}function Ed(t){const e=Y(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mi(r)).join(",")),e.ce=n}return e.ce}function Td(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!V1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ym(t.startAt,e.startAt)&&Ym(t.endAt,e.endAt)}function kf(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function dk(t,e,n,r,i,s,o,a){return new Wl(t,e,n,r,i,s,o,a)}function F1(t){return new Wl(t)}function Jm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pk(t){return t.collectionGroup!==null}function fs(t){const e=Y(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Le(Ge.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new nl(s,r))}),n.has(Ge.keyField().canonicalString())||e.le.push(new nl(Ge.keyField(),r))}return e.le}function Ut(t){const e=Y(t);return e.he||(e.he=mk(e,fs(t))),e.he}function mk(t,e){if(t.limitType==="F")return Xm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new nl(i.field,s)});const n=t.endAt?new tl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tl(t.startAt.position,t.startAt.inclusive):null;return Xm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cf(t,e,n){return new Wl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ql(t,e){return Td(Ut(t),Ut(e))&&t.limitType===e.limitType}function $1(t){return`${Ed(Ut(t))}|lt:${t.limitType}`}function Ar(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>L1(i)).join(", ")}]`),Bl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>mi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>mi(i)).join(",")),`Target(${r})`}(Ut(t))}; limitType=${t.limitType})`}function Ql(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of fs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Gm(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,fs(r),i)||r.endAt&&!function(o,a,l){const u=Gm(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,fs(r),i))}(t,e)}function gk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function j1(t){return(e,n)=>{let r=!1;for(const i of fs(t)){const s=vk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vk(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?pi(l,u):j()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new ge(L.comparator);function Fn(){return yk}const z1=new ge(L.comparator);function Gi(...t){let e=z1;for(const n of t)e=e.insert(n.key,n);return e}function _k(t){let e=z1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ir(){return hs()}function U1(){return hs()}function hs(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const wk=new Le(L.comparator);function Q(...t){let e=wk;for(const n of t)e=e.add(n);return e}const Ek=new Le(X);function Tk(){return Ek}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tf(e)?"-0":e}}function Ik(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this._=void 0}}function Ak(t,e,n){return t instanceof Pf?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&yd(s)&&(s=_d(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof rl?B1(t,e):t instanceof il?H1(t,e):function(i,s){const o=Ck(i,s),a=Zm(o)+Zm(i.Ie);return If(o)&&If(i.Ie)?Ik(a):Sk(i.serializer,a)}(t,e)}function kk(t,e,n){return t instanceof rl?B1(t,e):t instanceof il?H1(t,e):n}function Ck(t,e){return t instanceof xf?function(r){return If(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pf extends Kl{}class rl extends Kl{constructor(e){super(),this.elements=e}}function B1(t,e){const n=W1(e);for(const r of t.elements)n.some(i=>Ht(i,r))||n.push(r);return{arrayValue:{values:n}}}class il extends Kl{constructor(e){super(),this.elements=e}}function H1(t,e){let n=W1(e);for(const r of t.elements)n=n.filter(i=>!Ht(i,r));return{arrayValue:{values:n}}}class xf extends Kl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Zm(t){return ye(t.integerValue||t.doubleValue)}function W1(t){return wd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Pk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof rl&&i instanceof rl||r instanceof il&&i instanceof il?di(r.elements,i.elements,Ht):r instanceof xf&&i instanceof xf?Ht(r.Ie,i.Ie):r instanceof Pf&&i instanceof Pf}(t.transform,e.transform)}class lr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new lr}static exists(e){return new lr(void 0,e)}static updateTime(e){return new lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sd{}function q1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rk(t.key,lr.none()):new Id(t.key,t.data,lr.none());{const n=t.data,r=Vt.empty();let i=new Le(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gl(t.key,r,new yn(i.toArray()),lr.none())}}function xk(t,e,n){t instanceof Id?function(i,s,o){const a=i.value.clone(),l=tg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Gl?function(i,s,o){if(!pa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=tg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Q1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ds(t,e,n,r){return t instanceof Id?function(s,o,a,l){if(!pa(s.precondition,o))return a;const u=s.value.clone(),c=ng(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gl?function(s,o,a,l){if(!pa(s.precondition,o))return a;const u=ng(s.fieldTransforms,l,o),c=o.data;return c.setAll(Q1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return pa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&di(r,i,(s,o)=>Pk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Id extends Sd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gl extends Sd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Q1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tg(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,kk(o,a,n[i]))}return r}function ng(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ak(s,o,e))}return r}class Rk extends Sd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&xk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ds(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ds(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=U1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=q1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>eg(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>eg(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,W;function K1(t){if(t===void 0)return Bt("GRPC error has no .code"),A.UNKNOWN;switch(t){case ve.OK:return A.OK;case ve.CANCELLED:return A.CANCELLED;case ve.UNKNOWN:return A.UNKNOWN;case ve.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ve.INTERNAL:return A.INTERNAL;case ve.UNAVAILABLE:return A.UNAVAILABLE;case ve.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ve.NOT_FOUND:return A.NOT_FOUND;case ve.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ve.ABORTED:return A.ABORTED;case ve.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ve.DATA_LOSS:return A.DATA_LOSS;default:return j()}}(W=ve||(ve={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new Zr([4294967295,4294967295],0);function rg(t){const e=Ok().encode(t),n=new VA;return n.update(e),new Uint8Array(n.digest())}function ig(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([i,s],0)]}class Ad{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yi(`Invalid padding: ${n}`);if(r<0)throw new Yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Zr.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Zr.fromNumber(r)));return i.compare(Vk)===1&&(i=new Zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=rg(e),[r,i]=ig(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ad(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=rg(e),[r,i]=ig(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yl(F.min(),i,new ge(X),Fn(),Q())}}class po{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new po(r,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class G1{constructor(e,n){this.targetId=e,this.fe=n}}class Y1{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sg{constructor(){this.ge=0,this.pe=ag(),this.ye=Qe.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Q(),n=Q(),r=Q();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:j()}}),new po(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=ag()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,we(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Lk{constructor(e){this.Le=e,this.ke=new Map,this.qe=Fn(),this.Qe=og(),this.Ke=new ge(X)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(kf(s))if(r===0){const o=new L(s.path);this.We(n,o,Be.newNoDocument(o,F.min()))}else we(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=yr(r).toUint8Array()}catch(l){if(l instanceof N1)return hi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ad(o,i,s)}catch(l){return hi(l instanceof Yi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&kf(a.target)){const l=new L(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Be.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=Q();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Yl(e,n,this.Ke,this.qe,r);return this.qe=Fn(),this.Qe=og(),this.Ke=new ge(X),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new sg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Le(X),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new sg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function og(){return new ge(L.comparator)}function ag(){return new ge(L.comparator)}const Mk={asc:"ASCENDING",desc:"DESCENDING"},Fk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$k={and:"AND",or:"OR"};class jk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json||Bl(e)?e:{value:e}}function zk(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ei(t){return we(!!t),F.fromTimestamp(function(n){const r=Mn(n);return new st(r.seconds,r.nanos)}(t))}function Bk(t,e){return Nf(t,e).canonicalString()}function Nf(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function X1(t){const e=he.fromString(t);return we(n_(e)),e}function qu(t,e){const n=X1(e);if(n.get(1)!==t.databaseId.projectId)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(Z1(n))}function J1(t,e){return Bk(t.databaseId,e)}function Hk(t){const e=X1(t);return e.length===4?he.emptyPath():Z1(e)}function lg(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Z1(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(we(c===void 0||typeof c=="string"),Qe.fromBase64String(c||"")):(we(c===void 0||c instanceof Uint8Array),Qe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:K1(u.code);return new V(c,u.message||"")}(o);n=new Y1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qu(t,r.document.name),s=ei(r.document.updateTime),o=r.document.createTime?ei(r.document.createTime):F.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=Be.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ma(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qu(t,r.document),s=r.readTime?ei(r.readTime):F.min(),o=Be.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ma([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qu(t,r.document),s=r.removedTargetIds||[];n=new ma([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bk(i,s),a=r.targetId;n=new G1(a,o)}}return n}function qk(t,e){return{documents:[J1(t,e.path)]}}function Qk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=J1(t,i);const s=function(u){if(u.length!==0)return t_(Wt.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:kr(h.field),direction:Yk(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Rf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function Kk(t){let e=Hk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=e_(f);return h instanceof Wt&&O1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(v){return new nl(Cr(v.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,Bl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,g=f.values||[];return new tl(g,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,g=f.values||[];return new tl(g,h)}(n.endAt)),dk(e,i,o,s,a,"F",l,u)}function Gk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function e_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cr(n.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Cr(n.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cr(n.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cr(n.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(n){return Te.create(Cr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>e_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(n.compositeFilter.op))}(t):j()}function Yk(t){return Mk[t]}function Xk(t){return Fk[t]}function Jk(t){return $k[t]}function kr(t){return{fieldPath:t.canonicalString()}}function Cr(t){return Ge.fromServerFormat(t.fieldPath)}function t_(t){return t instanceof Te?function(n){if(n.op==="=="){if(Km(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NAN"}};if(Qm(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Km(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NAN"}};if(Qm(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(n.field),op:Xk(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(i=>t_(i));return r.length===1?r[0]:{compositeFilter:{op:Jk(n.op),filters:r}}}(t):j()}function n_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.ct=e}}function eC(t){const e=Kk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this._n=new nC}addToCollectionParentIndex(e,n){return this._n.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}deleteAllFieldIndexes(e){return E.resolve()}createTargetIndexes(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Ln.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class nC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new gi(0)}static Bn(){return new gi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ds(r.mutation,i,yn.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Gi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Fn();const o=hs(),a=function(){return hs()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Gl)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ds(c.mutation,u,c.mutation.getFieldMask(),st.now())):o.set(u.key,yn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new iC(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=hs();let i=new ge((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||yn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=U1();c.forEach(h=>{if(!s.has(h)){const g=q1(n.get(h),r.get(h));g!==null&&f.set(h,g),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(ir());let a=-1,l=s;return o.next(u=>E.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?E.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:_k(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Gi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Gi();return this.indexManager.getCollectionParents(e,s).next(a=>E.forEach(a,l=>{const u=function(f,h){return new Wl(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Be.newInvalidDocument(c)))});let a=Gi();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ds(c.mutation,u,yn.empty(),st.now()),Ql(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return E.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ei(i.createTime)}}(n)),E.resolve()}getNamedQuery(e,n){return E.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:eC(i.bundledQuery),readTime:ei(i.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.overlays=new ge(L.comparator),this.hr=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ir();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=ir(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ge((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ir(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ir(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return E.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Dk(n,r));let s=this.hr.get(n);s===void 0&&(s=Q(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.Pr=new Le(ke.Ir),this.Tr=new Le(ke.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ke(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ke(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new L(new he([])),r=new ke(n,e),i=new ke(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new L(new he([])),r=new ke(n,e),i=new ke(n,e+1);let s=Q();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ke(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return L.comparator(e.key,n.key)||X(e.pr,n.pr)}static Er(e,n){return X(e.pr,n.pr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Le(ke.Ir)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nk(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),i=new ke(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(X);return n.forEach(i=>{const s=new ke(i,0),o=new ke(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),E.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new ke(new L(s),0);let a=new Le(X);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),E.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return E.forEach(n.mutations,i=>{const s=new ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ke(n,0),i=this.wr.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.vr=e,this.docs=function(){return new ge(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Be.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fn();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||KA(QA(c),r)<=0||(i.has(c.key)||Ql(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,n,r,i){j()}Fr(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cC(this)}getSize(e){return E.resolve(this.size)}}class cC extends rC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.persistence=e,this.Mr=new ki(n=>Ed(n),Td),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new kd,this.targetCount=0,this.Br=gi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),E.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.qn(n),E.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.Lr={},this.overlays={},this.kr=new vd(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new fC(this),this.indexManager=new tC,this.remoteDocumentCache=function(i){return new uC(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Zk(n),this.$r=new oC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new lC(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new dC(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return E.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class dC extends YA{constructor(e){super(),this.currentSequenceNumber=e}}class Cd{constructor(e){this.persistence=e,this.zr=new kd,this.jr=null}static Hr(e){return new Cd(e)}get Jr(){if(this.jr)return this.jr;throw j()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),E.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Jr,r=>{const i=L.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return E.or([()=>E.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return pI()?8:rr.v(qa())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pC;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(zi()<=q.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Ar(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),E.resolve()):(zi()<=q.DEBUG&&C("QueryEngine","Query:",Ar(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(zi()<=q.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Ar(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(n))):E.resolve())}ji(e,n){if(Jm(n))return E.resolve(null);let r=Ut(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Cf(n,null,"F"),r=Ut(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Cf(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return Jm(n)||i.isEqual(F.min())?E.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?E.resolve(null):(zi()<=q.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ar(n)),this.es(e,o,n,qA(i,-1)).next(a=>a))})}Zi(e,n){let r=new Le(j1(e));return n.forEach((i,s)=>{Ql(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return zi()<=q.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Ar(n)),this.zi.getDocumentsMatchingQuery(e,n,Ln.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ge(X),this.rs=new ki(s=>Ed(s),Td),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function vC(t,e,n,r){return new gC(t,e,n,r)}async function r_(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function i_(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function yC(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,f)));let g=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Qe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(f,g),function(w,I,p){return w.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,g,c)&&a.push(n.Qr.updateTargetData(s,g))});let l=Fn(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(_C(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(F.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function _C(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function wC(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new _n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Df(t,e,n){const r=Y(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ho(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function ug(t,e,n){const r=Y(t);let i=F.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=Y(l),h=f.rs.get(c);return h!==void 0?E.resolve(f.ns.get(h)):f.Qr.getTargetData(u,c)}(r,o,Ut(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:Q())).next(a=>(EC(r,gk(e),a),{documents:a,hs:s})))}function EC(t,e,n){let r=t.ss.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class cg{constructor(){this.activeTargetIds=Tk()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TC{constructor(){this.no=new cg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo=null;function Qu(){return Jo===null?Jo=function(){return 268435456+Math.round(2147483648*Math.random())}():Jo++,"0x"+Jo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="WebChannelConnection";class kC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Qu(),l=this.bo(n,r.toUriEncodedString());C("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(C("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw hi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ai}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=IC[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Qu();return new Promise((o,a)=>{const l=new OA;l.setWithCredentials(!0),l.listenOnce(DA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hu.NO_ERROR:const c=l.getResponseJson();C(je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Hu.TIMEOUT:C(je,`RPC '${e}' ${s} timed out`),a(new V(A.DEADLINE_EXCEEDED,"Request time out"));break;case Hu.HTTP_ERROR:const f=l.getStatus();if(C(je,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const g=h==null?void 0:h.error;if(g&&g.status&&g.message){const v=function(I){const p=I.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(p)>=0?p:A.UNKNOWN}(g.status);a(new V(v,g.message))}else a(new V(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(A.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{C(je,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);C(je,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Qu(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=RA(),a=NA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");C(je,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,g=!1;const v=new AC({lo:I=>{g?C(je,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(h||(C(je,`Opening RPC '${e}' stream ${i} transport.`),f.open(),h=!0),C(je,`RPC '${e}' stream ${i} sending:`,I),f.send(I))},ho:()=>f.close()}),w=(I,p,d)=>{I.listen(p,m=>{try{d(m)}catch(y){setTimeout(()=>{throw y},0)}})};return w(f,Go.EventType.OPEN,()=>{g||C(je,`RPC '${e}' stream ${i} transport opened.`)}),w(f,Go.EventType.CLOSE,()=>{g||(g=!0,C(je,`RPC '${e}' stream ${i} transport closed`),v.Vo())}),w(f,Go.EventType.ERROR,I=>{g||(g=!0,hi(je,`RPC '${e}' stream ${i} transport errored:`,I),v.Vo(new V(A.UNAVAILABLE,"The operation could not be completed")))}),w(f,Go.EventType.MESSAGE,I=>{var p;if(!g){const d=I.data[0];we(!!d);const m=d,y=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(y){C(je,`RPC '${e}' stream ${i} received error:`,y);const S=y.status;let P=function(G){const z=ve[G];if(z!==void 0)return K1(z)}(S),x=y.message;P===void 0&&(P=A.INTERNAL,x="Unknown error status: "+S+" with message "+y.message),g=!0,v.Vo(new V(P,x)),f.close()}else C(je,`RPC '${e}' stream ${i} received:`,d),v.mo(d)}}),w(a,bA.STAT_EVENT,I=>{I.stat===zm.PROXY?C(je,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===zm.NOPROXY&&C(je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}function Ku(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){return new jk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new o_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Bt(n.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new V(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PC extends CC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Wk(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?ei(o.readTime):F.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=lg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=kf(l)?{documents:qk(s,l)}:{query:Qk(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Uk(s,o.resumeToken);const u=Rf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=zk(s,o.snapshotVersion.toTimestamp());const u=Rf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Gk(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=lg(this.serializer),n.removeTarget=e,this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Nf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(A.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Nf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(A.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class RC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Bt(n),this.g_=!1):C("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{go(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Y(l);u.v_.add(4),await mo(u),u.x_.set("Unknown"),u.v_.delete(4),await Xl(u)}(this))})}),this.x_=new RC(r,i)}}async function Xl(t){if(go(t))for(const e of t.F_)await e(!0)}async function mo(t){for(const e of t.F_)await e(!1)}function a_(t,e){const n=Y(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Nd(n)?Rd(n):Ci(n).Jo()&&xd(n,e))}function l_(t,e){const n=Y(t),r=Ci(n);n.C_.delete(e),r.Jo()&&u_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():go(n)&&n.x_.set("Unknown"))}function xd(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ci(t).c_(e)}function u_(t,e){t.O_.Oe(e),Ci(t).l_(e)}function Rd(t){t.O_=new Lk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ci(t).start(),t.x_.p_()}function Nd(t){return go(t)&&!Ci(t).Ho()&&t.C_.size>0}function go(t){return Y(t).v_.size===0}function c_(t){t.O_=void 0}async function DC(t){t.C_.forEach((e,n)=>{xd(t,e)})}async function bC(t,e){c_(t),Nd(t)?(t.x_.S_(e),Rd(t)):t.x_.set("Unknown")}async function OC(t,e,n){if(t.x_.set("Online"),e instanceof Y1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hg(t,r)}else if(e instanceof ma?t.O_.$e(e):e instanceof G1?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(F.min()))try{const r=await i_(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),u_(s,l);const f=new _n(c.target,l,u,c.sequenceNumber);xd(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await hg(t,r)}}async function hg(t,e,n){if(!ho(e))throw e;t.v_.add(1),await mo(t),t.x_.set("Offline"),n||(n=()=>i_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Xl(t)})}async function dg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=go(n);n.v_.add(3),await mo(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Xl(n)}async function VC(t,e){const n=Y(t);e?(n.v_.delete(2),await Xl(n)):e||(n.v_.add(2),await mo(n),n.x_.set("Unknown"))}function Ci(t){return t.N_||(t.N_=function(n,r,i){const s=Y(n);return s.R_(),new PC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:DC.bind(null,t),To:bC.bind(null,t),u_:OC.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Nd(t)?Rd(t):t.x_.set("Unknown")):(await t.N_.stop(),c_(t))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Dd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function f_(t,e){if(Bt("AsyncQueue",`${e}: ${t}`),ho(t))return new V(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Gi(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.L_=new ge(L.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):j():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vi(e,n,ti.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.q_=void 0,this.Q_=[]}}class MC{constructor(){this.queries=new ki(e=>$1(e),ql),this.onlineState="Unknown",this.K_=new Set}}async function FC(t,e){const n=Y(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new LC),i)try{s.q_=await n.onListen(r)}catch(o){const a=f_(o,`Initialization of query '${Ar(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&bd(n)}async function $C(t,e){const n=Y(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function jC(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&bd(n)}function zC(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function bd(t){t.K_.forEach(e=>{e.next()})}class UC{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.key=e}}class d_{constructor(e){this.key=e}}class BC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Q(),this.mutatedKeys=Q(),this.ua=j1(e),this.ca=new ti(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new pg,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const h=i.get(c),g=Ql(this.query,f)?f:null,v=!!h&&this.mutatedKeys.has(h.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;h&&g?h.data.isEqual(g.data)?v!==w&&(r.track({type:3,doc:g}),I=!0):this.Ia(h,g)||(r.track({type:2,doc:g}),I=!0,(l&&this.ua(g,l)>0||u&&this.ua(g,u)<0)&&(a=!0)):!h&&g?(r.track({type:0,doc:g}),I=!0):h&&!g&&(r.track({type:1,doc:h}),I=!0,(l||u)&&(a=!0)),I&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,f)=>function(g,v){const w=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return w(g)-w(v)}(c.type,f.type)||this.ua(c.doc,f.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new vi(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new pg,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=Q(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new d_(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new h_(r))}),n}Ra(e){this.oa=e.hs,this.aa=Q();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return vi.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class HC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WC{constructor(e){this.key=e,this.ma=!1}}class qC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ki(a=>$1(a),ql),this.pa=new Map,this.ya=new Set,this.wa=new ge(L.comparator),this.Sa=new Map,this.ba=new kd,this.Da={},this.Ca=new Map,this.va=gi.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function QC(t,e){const n=eP(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await wC(n.localStore,Ut(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await KC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&a_(n.remoteStore,o)}return i}async function KC(t,e,n,r,i){t.Ma=(f,h,g)=>async function(w,I,p,d){let m=I.view.ha(p);m.Xi&&(m=await ug(w.localStore,I.query,!1).then(({documents:x})=>I.view.ha(x,m)));const y=d&&d.targetChanges.get(I.targetId),S=d&&d.targetMismatches.get(I.targetId)!=null,P=I.view.applyChanges(m,w.isPrimaryClient,y,S);return gg(w,I.targetId,P.da),P.snapshot}(t,f,h,g);const s=await ug(t.localStore,e,!0),o=new BC(e,s.hs),a=o.ha(s.documents),l=po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);gg(t,n,u.da);const c=new HC(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function GC(t,e){const n=Y(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!ql(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Df(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),l_(n.remoteStore,r.targetId),bf(n,r.targetId)}).catch(pd)):(bf(n,r.targetId),await Df(n.localStore,r.targetId,!0))}async function p_(t,e){const n=Y(t);try{const r=await yC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?we(o.ma):i.removedDocuments.size>0&&(we(o.ma),o.ma=!1))}),await g_(n,r,e)}catch(r){await pd(r)}}function mg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Y(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.Q_)h.U_(a)&&(u=!0)}),u&&bd(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YC(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ge(L.comparator);o=o.insert(s,Be.newNoDocument(s,F.min()));const a=Q().add(s),l=new Yl(F.min(),new Map,new ge(X),o,a);await p_(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Od(r)}else await Df(r.localStore,e,!1).then(()=>bf(r,e,n)).catch(pd)}function bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||m_(t,r)})}function m_(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(l_(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Od(t))}function gg(t,e,n){for(const r of n)r instanceof h_?(t.ba.addReference(r.key,e),XC(t,r)):r instanceof d_?(C("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||m_(t,r.key)):j()}function XC(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(C("SyncEngine","New document in limbo: "+n),t.ya.add(r),Od(t))}function Od(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new L(he.fromString(e)),r=t.va.next();t.Sa.set(r,new WC(n)),t.wa=t.wa.insert(n,r),a_(t.remoteStore,new _n(Ut(F1(n.path)),r,"TargetPurposeLimboResolution",vd._e))}}async function g_(t,e,n){const r=Y(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Pd.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=Y(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>E.forEach(u,h=>E.forEach(h.qi,g=>c.persistence.referenceDelegate.addReference(f,h.targetId,g)).next(()=>E.forEach(h.Qi,g=>c.persistence.referenceDelegate.removeReference(f,h.targetId,g)))))}catch(f){if(!ho(f))throw f;C("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const g=c.ns.get(h),v=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(v);c.ns=c.ns.insert(h,w)}}}(r.localStore,s))}async function JC(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await r_(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new V(A.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await g_(n,r.us)}}function ZC(t,e){const n=Y(t),r=n.Sa.get(e);if(r&&r.ma)return Q().add(r.key);{let i=Q();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function eP(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=p_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.fa.u_=jC.bind(null,e.eventManager),e.fa.xa=zC.bind(null,e.eventManager),e}class vg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=s_(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vC(this.persistence,new mC,e.initialUser,this.serializer)}createPersistence(e){return new hC(Cd.Hr,this.serializer)}createSharedClientState(e){return new TC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JC.bind(null,this.syncEngine),await VC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MC}()}createDatastore(e){const n=s_(e.databaseInfo.databaseId),r=function(s){return new kC(s)}(e.databaseInfo);return function(s,o,a,l){return new xC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new NC(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>mg(this.syncEngine,n,0),function(){return fg.D()?new fg:new SC}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const f=new qC(i,s,o,a,l,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Y(r);C("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await mo(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Bt("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=HA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=f_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gu(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await r_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sP(t);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>dg(e.remoteStore,i)),t._onlineComponents=e}function iP(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function sP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!iP(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await Gu(t,new vg)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Gu(t,new vg);return t._offlineComponents}async function oP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await yg(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await yg(t,new tP))),t._onlineComponents}async function aP(t){const e=await oP(t),n=e.eventManager;return n.onListen=QC.bind(null,e.syncEngine),n.onUnlisten=GC.bind(null,e.syncEngine),n}function lP(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new nP({next:h=>{o.enqueueAndForget(()=>$C(s,f)),h.fromCache&&l.source==="server"?u.reject(new V(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new UC(a,c,{includeMetadataChanges:!0,Z_:!0});return FC(s,f)}(await aP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e,n){if(!n)throw new V(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cP(t,e,n,r){if(e===!0&&r===!0)throw new V(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wg(t){if(L.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fP(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function Of(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fP(t);throw new V(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new LA;switch(r.type){case"firstParty":return new jA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_g.get(n);r&&(C("ComponentProvider","Removing Datastore"),_g.delete(n),r.terminate())}(this),Promise.resolve()}}function hP(t,e,n,r={}){var i;const s=(t=Of(t,Vd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ze.MOCK_USER;else{a=hI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ze(u)}t._authCredentials=new MA(new R1(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jl(this.firestore,e,this._query)}}class Pi{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pi(this.firestore,e,this._key)}}class ni extends Jl{constructor(e,n,r){super(e,n,F1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pi(this.firestore,null,new L(e))}withConverter(e){return new ni(this.firestore,e,this._path)}}function dP(t,e,...n){if(t=_I(t),uP("collection","path",e),t instanceof Vd){const r=he.fromString(e,...n);return wg(r),new ni(t,null,r)}{if(!(t instanceof Pi||t instanceof ni))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return wg(r),new ni(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new o_(this,"async_queue_retry"),this._u=()=>{const n=Ku();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Ku();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Ku();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Rn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!ho(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=Dd.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&j()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class y_ extends Vd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new pP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||__(this),this._firestoreClient.terminate()}}function mP(t,e){const n=typeof t=="object"?t:y2(),r=typeof t=="string"?t:e||"(default)",i=p2(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cI("firestore");s&&hP(i,...s)}return i}function gP(t){return t._firestoreClient||__(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function __(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new tk(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,v_(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new rP(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sl(Qe.fromBase64String(e))}catch(n){throw new V(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sl(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}const yP=new RegExp("[~\\*/\\[\\]]");function _P(t,e,n){if(e.search(yP)>=0)throw Tg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new w_(...e.split("."))._internalPath}catch{throw Tg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tg(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(A.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(T_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wP extends E_{data(){return super.data()}}function T_(t,e){return typeof e=="string"?_P(t,e):e instanceof w_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TP{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hl(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new vP(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_d(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const n=Mn(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);we(n_(r));const i=new Ks(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SP extends E_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(T_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ga extends SP{data(e={}){return super.data(e)}}class IP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ga(this._firestore,this._userDataWriter,r.key,r,new Zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:AP(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}class kP extends TP{constructor(e){super(),this.firestore=e}convertBytes(e){return new sl(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pi(this.firestore,null,n)}}function CP(t){t=Of(t,Jl);const e=Of(t.firestore,y_),n=gP(e),r=new kP(e);return EP(t._query),lP(n,t._query).then(i=>new IP(e,r,t,i))}(function(e,n=!0){(function(i){Ai=i})(v2),Ka(new Ls("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new y_(new FA(r.getProvider("auth-internal")),new UA(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Xr(Um,"4.4.1",e),Xr(Um,"4.4.1","esm2017")})();const PP={apiKey:"AIzaSyAxbV0L4PwuwbBBIb6m1eqJv-EgTahJisQ",authDomain:"portfolio-ms-336df.firebaseapp.com",projectId:"portfolio-ms-336df",storageBucket:"portfolio-ms-336df.appspot.com",messagingSenderId:"1097504005679",appId:"1:1097504005679:web:e5cf2db3dee6e5914d30da",measurementId:"G-NFZYPC7QFV"},xP=I0(PP),RP=mP(xP),NP=()=>{const[t,e]=$t.useState([]),n={Kasa:tT,"Argent Bank":nT,"Portfolio - Sophie Bluel":rT};$t.useEffect(()=>{r()},[]);const r=async()=>{try{const s=(await CP(dP(RP,"Projects"))).docs.map(o=>o.data());e(s)}catch(i){console.error("Error fetching projects: ",i)}};return _.jsxs("section",{id:"project",className:"project",children:[_.jsx("h2",{className:"title-section",children:"Projets"}),_.jsx("div",{className:"content-project",children:_.jsx("div",{className:"list-project",children:t.map((i,s)=>_.jsxs("div",{className:"card",children:[_.jsx("img",{className:"img-project",src:n[i.title],alt:`Image du projet ${i.title}`}),_.jsx("h3",{className:"title-card-content",children:i.title}),_.jsx("a",{href:i.link,className:"card-link",target:"_blank",rel:"noreferrer",children:_.jsx("i",{className:"bx bxl-github icon-card"})}),_.jsxs("div",{children:[_.jsx("p",{className:"description-project",children:i.description}),_.jsx("ul",{className:"list-skills-content",children:i.technologies&&Array.isArray(i.technologies)&&i.technologies.map((o,a)=>_.jsxs("li",{className:"list-skills",children:[_.jsx("i",{className:o.icon})," ",o.name]},a))})]})]},s))})})]})},DP=()=>{const[t,e]=$t.useState({lastname:"",firstname:"",email:"",message:""}),[n,r]=$t.useState({lastname:"",firstname:"",email:"",message:""}),i=a=>{const{name:l,value:u}=a.target;e(c=>({...c,[l]:u})),r(c=>({...c,[l]:""}))},s=()=>{const a={},l=(u,c)=>{t[u]||(a[u]=c)};return l("lastname","Veuillez saisir votre nom."),l("firstname","Veuillez saisir votre prénom."),l("email","Veuillez saisir votre email."),l("message","Veuillez saisir votre message."),r(a),Object.keys(a).length===0},o=a=>{a.preventDefault(),s()&&(console.log(t),e({lastname:"",firstname:"",email:"",message:""}))};return _.jsxs("section",{id:"contact",className:"contact",children:[_.jsx("h2",{className:"title-section",children:"Contact"}),_.jsxs("form",{className:"form",action:"#",method:"post",onSubmit:o,children:[_.jsx("h3",{className:"subtitle-section",children:"Me contacter"}),_.jsx("a",{href:"mailto:simon.matthieu89@gmail.com",className:"link-mail",children:_.jsx("span",{className:"mail",children:"simon.matthieu89@gmail.com"})}),_.jsxs("div",{className:"info-form",children:[_.jsx("label",{htmlFor:"lastname",className:"label",children:"Nom"}),_.jsx("input",{type:"text",id:"lastname",name:"lastname",placeholder:"Votre Nom",className:"input",value:t.lastname,onChange:i,required:!0}),n.lastname&&_.jsx("span",{className:"error",children:n.lastname}),_.jsx("label",{htmlFor:"firstname",className:"label",children:"Prénom"}),_.jsx("input",{type:"text",id:"firstname",name:"firstname",placeholder:"Votre Prénom",className:"input",value:t.firstname,onChange:i,required:!0}),n.firstname&&_.jsx("span",{className:"error",children:n.firstname}),_.jsx("label",{htmlFor:"email",className:"label",children:"Email"}),_.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Votre Email",className:"input",value:t.email,onChange:i,required:!0}),n.email&&_.jsx("span",{className:"error",children:n.email})]}),_.jsxs("div",{className:"message-form",children:[_.jsx("label",{htmlFor:"message",className:"label",children:"Votre message"}),_.jsx("textarea",{name:"message",id:"message",cols:"40",rows:"8",placeholder:"Votre Message...",className:"textarea",value:t.message,onChange:i,required:!0}),n.message&&_.jsx("span",{className:"error",children:n.message}),_.jsx("button",{type:"submit",className:"btn-form",children:"Envoyer"})]})]})]})},bP=()=>_.jsx("footer",{className:"footer",children:_.jsx("p",{className:"text-footer",children:"© 2024 Matthieu Simon, Tous droits réservés."})}),OP=()=>_.jsxs("div",{children:[_.jsx(GE,{}),_.jsxs("main",{children:[_.jsx(YE,{}),_.jsx(ZE,{}),_.jsx(eT,{}),_.jsx(NP,{}),_.jsx(DP,{})]}),_.jsx(bP,{})]});Yu.createRoot(document.getElementById("root")).render(_.jsx($f.StrictMode,{children:_.jsx(OP,{})}));

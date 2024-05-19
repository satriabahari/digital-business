import{r as g,g as O,R}from"./index.CEThVCg_.js";const m=e=>{let t;const n=new Set,o=(s,d)=>{const c=typeof s=="function"?s(t):s;if(!Object.is(c,t)){const i=t;t=d??(typeof c!="object"||c===null)?c:Object.assign({},t,c),n.forEach(a=>a(t,i))}},r=()=>t,E={setState:o,getState:r,getInitialState:()=>p,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{n.clear()}},p=t=e(o,r,E);return E},A=e=>e?m(e):m;var x={exports:{}},D={},b={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=g;function I(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var T=typeof Object.is=="function"?Object.is:I,F=f.useState,P=f.useEffect,_=f.useLayoutEffect,j=f.useDebugValue;function V(e,t){var n=t(),o=F({inst:{value:n,getSnapshot:t}}),r=o[0].inst,u=o[1];return _(function(){r.value=n,r.getSnapshot=t,y(r)&&u({inst:r})},[e,n,t]),P(function(){return y(r)&&u({inst:r}),e(function(){y(r)&&u({inst:r})})},[e]),j(n),n}function y(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!T(e,n)}catch{return!0}}function q(e,t){return t()}var M=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?q:V;w.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:M;b.exports=w;var W=b.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=g,$=W;function B(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var C=typeof Object.is=="function"?Object.is:B,L=$.useSyncExternalStore,U=v.useRef,z=v.useEffect,X=v.useMemo,k=v.useDebugValue;D.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var u=U(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=X(function(){function E(i){if(!p){if(p=!0,s=i,i=o(i),r!==void 0&&l.hasValue){var a=l.value;if(r(a,i))return d=a}return d=i}if(a=d,C(s,i))return a;var h=o(i);return r!==void 0&&r(a,h)?a:(s=i,d=h)}var p=!1,s,d,c=n===void 0?null:n;return[function(){return E(t())},c===null?void 0:function(){return E(c())}]},[t,n,o,r]);var S=L(e,u[0],u[1]);return z(function(){l.hasValue=!0,l.value=S},[S]),k(S),S};x.exports=D;var H=x.exports;const G=O(H),{useDebugValue:J}=R,{useSyncExternalStoreWithSelector:K}=G;const N=e=>e;function Q(e,t=N,n){const o=K(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return J(o),o}const Y=e=>{const t=typeof e=="function"?A(e):e,n=(o,r)=>Q(t,o,r);return Object.assign(n,t),n},Z=e=>Y,te=Z()(e=>({isActive:"Home",setIsActive:t=>e({isActive:t}),isOpen:!1,showMenu:()=>e({isOpen:!0}),hideMenu:()=>e({isOpen:!1}),toggleMenu:()=>e(t=>({isOpen:!t.isOpen}))}));export{te as u};

import{j as h}from"./jsx-runtime.CmXs-U30.js";import{c as V,h as K,b as J,$ as Q,i as X,d as ee,f as E,_ as M,e as U,j as C,g as G,k as P,l as te}from"./index.n203Kk1A.js";import{r}from"./index.CEThVCg_.js";import"./index.CgzD9ugd.js";import{u as ne}from"./menu.DNi8UsRi.js";import{c as re}from"./utils.BR_JCrAi.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=V("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=V("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),ie=[{title:"Home",href:"#",isShow:!0},{title:"About",href:"#about",isShow:!0},{title:"Courses",href:"#courses",isShow:!0},{title:"Testimonials",href:"#testimonials",isShow:!0},{title:"Faq",href:"#faq",isShow:!0},{title:"Contact",href:"#contact",isShow:!0}];function se(t){const e=r.useRef({value:t,previous:t});return r.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}const y="NavigationMenu",[z,Fe,ce]=K(y),[_,ue,le]=K(y),[S,Le]=J(y,[ce,le]),[de,A]=S(y),[fe,je]=S(y),ve=r.forwardRef((t,e)=>{const{__scopeNavigationMenu:n,value:o,onValueChange:a,defaultValue:s,delayDuration:c=200,skipDelayDuration:u=300,orientation:l="horizontal",dir:i,...m}=t,[d,b]=r.useState(null),w=Q(e,v=>b(v)),g=X(i),$=r.useRef(0),p=r.useRef(0),k=r.useRef(0),[I,T]=r.useState(!0),[x="",f]=ee({prop:o,onChange:v=>{const R=v!=="",Z=u>0;R?(window.clearTimeout(k.current),Z&&T(!1)):(window.clearTimeout(k.current),k.current=window.setTimeout(()=>T(!0),u)),a?.(v)},defaultProp:s}),N=r.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>f(""),150)},[f]),B=r.useCallback(v=>{window.clearTimeout(p.current),f(v)},[f]),Y=r.useCallback(v=>{x===v?window.clearTimeout(p.current):$.current=window.setTimeout(()=>{window.clearTimeout(p.current),f(v)},c)},[x,f,c]);return r.useEffect(()=>()=>{window.clearTimeout($.current),window.clearTimeout(p.current),window.clearTimeout(k.current)},[]),r.createElement(me,{scope:n,isRootMenu:!0,value:x,dir:g,orientation:l,rootNavigationMenu:d,onTriggerEnter:v=>{window.clearTimeout($.current),I?Y(v):B(v)},onTriggerLeave:()=>{window.clearTimeout($.current),N()},onContentEnter:()=>window.clearTimeout(p.current),onContentLeave:N,onItemSelect:v=>{f(R=>R===v?"":v)},onItemDismiss:()=>f("")},r.createElement(E.nav,M({"aria-label":"Main","data-orientation":l,dir:g},m,{ref:w})))}),me=t=>{const{scope:e,isRootMenu:n,rootNavigationMenu:o,dir:a,orientation:s,children:c,value:u,onItemSelect:l,onItemDismiss:i,onTriggerEnter:m,onTriggerLeave:d,onContentEnter:b,onContentLeave:w}=t,[g,$]=r.useState(null),[p,k]=r.useState(new Map),[I,T]=r.useState(null);return r.createElement(de,{scope:e,isRootMenu:n,rootNavigationMenu:o,value:u,previousValue:se(u),baseId:U(),dir:a,orientation:s,viewport:g,onViewportChange:$,indicatorTrack:I,onIndicatorTrackChange:T,onTriggerEnter:C(m),onTriggerLeave:C(d),onContentEnter:C(b),onContentLeave:C(w),onItemSelect:C(l),onItemDismiss:C(i),onViewportContentChange:r.useCallback((x,f)=>{k(N=>(N.set(x,f),new Map(N)))},[]),onViewportContentRemove:r.useCallback(x=>{k(f=>f.has(x)?(f.delete(x),new Map(f)):f)},[])},r.createElement(z.Provider,{scope:e},r.createElement(fe,{scope:e,items:p},c)))},be="NavigationMenuList",$e=r.forwardRef((t,e)=>{const{__scopeNavigationMenu:n,...o}=t,a=A(be,n),s=r.createElement(E.ul,M({"data-orientation":a.orientation},o,{ref:e}));return r.createElement(E.div,{style:{position:"relative"},ref:a.onIndicatorTrackChange},r.createElement(z.Slot,{scope:n},a.isRootMenu?r.createElement(Ee,{asChild:!0},s):s))}),pe="NavigationMenuItem",[ge,Ve]=S(pe),he=r.forwardRef((t,e)=>{const{__scopeNavigationMenu:n,value:o,...a}=t,s=U(),c=o||s||"LEGACY_REACT_AUTO_VALUE",u=r.useRef(null),l=r.useRef(null),i=r.useRef(null),m=r.useRef(()=>{}),d=r.useRef(!1),b=r.useCallback((g="start")=>{if(u.current){m.current();const $=F(u.current);$.length&&H(g==="start"?$:$.reverse())}},[]),w=r.useCallback(()=>{if(u.current){const g=F(u.current);g.length&&(m.current=Ne(g))}},[]);return r.createElement(ge,{scope:n,value:c,triggerRef:l,contentRef:u,focusProxyRef:i,wasEscapeCloseRef:d,onEntryKeyDown:b,onFocusProxyEnter:b,onRootContentClose:w,onContentFocusOutside:w},r.createElement(E.li,M({},a,{ref:e})))}),D="navigationMenu.linkSelect",we=r.forwardRef((t,e)=>{const{__scopeNavigationMenu:n,active:o,onSelect:a,...s}=t;return r.createElement(Me,{asChild:!0},r.createElement(E.a,M({"data-active":o?"":void 0,"aria-current":o?"page":void 0},s,{ref:e,onClick:G(t.onClick,c=>{const u=c.target,l=new CustomEvent(D,{bubbles:!0,cancelable:!0});if(u.addEventListener(D,i=>a?.(i),{once:!0}),P(u,l),!l.defaultPrevented&&!c.metaKey){const i=new CustomEvent(xe,{bubbles:!0,cancelable:!0});P(u,i)}},{checkForDefaultPrevented:!1})})))}),xe="navigationMenu.rootContentDismiss",ke="FocusGroup",Ee=r.forwardRef((t,e)=>{const{__scopeNavigationMenu:n,...o}=t,a=A(ke,n);return r.createElement(_.Provider,{scope:n},r.createElement(_.Slot,{scope:n},r.createElement(E.div,M({dir:a.dir},o,{ref:e}))))}),O=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],Ce="FocusGroupItem",Me=r.forwardRef((t,e)=>{const{__scopeNavigationMenu:n,...o}=t,a=ue(n),s=A(Ce,n);return r.createElement(_.ItemSlot,{scope:n},r.createElement(E.button,M({},o,{ref:e,onKeyDown:G(t.onKeyDown,c=>{if(["Home","End",...O].includes(c.key)){let l=a().map(d=>d.ref.current);if([s.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(c.key)&&l.reverse(),O.includes(c.key)){const d=l.indexOf(c.currentTarget);l=l.slice(d+1)}setTimeout(()=>H(l)),c.preventDefault()}})})))});function F(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const a=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||a?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function H(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}function Ne(t){return t.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{t.forEach(e=>{const n=e.dataset.tabindex;e.setAttribute("tabindex",n)})}}const ye=({href:t,title:e})=>{const{setIsActive:n,hideMenu:o}=ne(),a=()=>{o(),n(e)};return h.jsx(he,{onClick:a,children:h.jsx("a",{href:t,children:h.jsx(we,{asChild:!0,className:"w-full rounded-md px-2 py-1 dark:bg-dark-tertiary dark:bg-transparent",children:h.jsx("p",{className:"font-medium dark:text-slate-50",children:e})})})})},Ke=()=>{const t=ie.filter(e=>e.isShow);return h.jsx(ve,{children:h.jsx($e,{className:"flex h-screen cursor-pointer flex-col gap-x-8 gap-y-4 lg:h-auto lg:flex-row",children:t.map((e,n)=>h.jsx(ye,{href:e.href,title:e.title},n))})})};function W(t){var e,n,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=W(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function Te(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=W(t))&&(o&&(o+=" "),o+=e);return o}const L=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,j=Te,Re=(t,e)=>n=>{var o;if(e?.variants==null)return j(t,n?.class,n?.className);const{variants:a,defaultVariants:s}=e,c=Object.keys(a).map(i=>{const m=n?.[i],d=s?.[i];if(m===null)return null;const b=L(m)||L(d);return a[i][b]}),u=n&&Object.entries(n).reduce((i,m)=>{let[d,b]=m;return b===void 0||(i[d]=b),i},{}),l=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((i,m)=>{let{class:d,className:b,...w}=m;return Object.entries(w).every(g=>{let[$,p]=g;return Array.isArray(p)?p.includes({...s,...u}[$]):{...s,...u}[$]===p})?[...i,d,b]:i},[]);return j(t,c,l,n?.class,n?.className)},Ie=Re("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),q=r.forwardRef(({className:t,variant:e,size:n,asChild:o=!1,...a},s)=>{const c=o?te:"button";return h.jsx(c,{className:re(Ie({variant:e,size:n,className:t})),ref:s,...a})});q.displayName="Button";const Ue=()=>{const[t,e]=r.useState("light");r.useEffect(()=>{const o=document.documentElement.classList.contains("dark");e(o?"dark":"light")},[]),r.useEffect(()=>{const o=t==="dark"||t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList[o?"add":"remove"]("dark")},[t]);const n=()=>{e(o=>o==="light"?"dark":"light")};return h.jsx(q,{variant:"outline",size:"icon",onClick:n,className:"rounded-full dark:bg-secondary dark:text-neutral-50 dark:hover:bg-neutral-900",children:t==="light"?h.jsx(ae,{className:"h-[1.2rem] w-[1.2rem]"}):h.jsx(oe,{className:"h-[1.2rem] w-[1.2rem]"})})};export{Ke as M,Ue as T};
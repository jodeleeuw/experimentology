import{i as B,_ as Ze,s as et,p as H,a as O,b as l,c as F,d as X,g as L,e as x,f as me,h as R,j as u,m as w,k as I,l as d,n as tt,o as g,q as C,r as nt,t as ye,u as Q,v as rt,w as T,x as be,y as ve,z as ot,A as Y,B as it,C as st,D as at,E as Re,F as Se,G as lt,H as ut,I as ct,J as Pe,K as ft,L as Z,M as D,N as dt,O as gt}from"../chunks/chunk-e54b7259.js";function _(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function se(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function V(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function ht(e){return typeof e=="object"&&e!==null&&"then"in e&&B(e.then)}const pt=["passToClient","prerender","onBeforeRender","render"],mt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"})),yt=()=>!0,bt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"})),vt=["render"],Rt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vt},Symbol.toStringTag,{value:"Module"})),ee={},_e={},St={},W={},Pt=[],_t={},wt=!0,Ot=[],Ft={onBeforeRoute:null},Et=Object.assign({}),Ct={...Et};ee[".page"]=Ct;const kt=Object.assign({}),Tt={...kt};W[".page"]=Tt;const xt=Object.assign({"/src/index.page.server.jsx":mt}),At={...xt};W[".page.server"]=At;const It=Object.assign({"/src/index.page.route.js":bt}),jt={...It};_e[".page.route"]=jt;const Nt=Object.assign({"/src/index.page.client.jsx":()=>Ze(()=>import("./src_index.page.client.bea4ffd1.js"),["assets/entries/src_index.page.client.bea4ffd1.js","assets/static/index.page.client.425ab545.css"])}),$t={...Nt};ee[".page.client"]=$t;const Bt=Object.assign({"/src/index.page.client.jsx":Rt}),Ht={...Bt};W[".page.client"]=Ht;const Lt=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:wt,neverLoaded:_t,pageConfigGlobal:Ft,pageConfigs:Ot,pageFilesEager:_e,pageFilesExportNamesEager:W,pageFilesExportNamesLazy:St,pageFilesLazy:ee,pageFilesList:Pt},Symbol.toStringTag,{value:"Module"}));et(Lt);function Wt(e){return H(e,"/").pathname}function Ut(){var e,t,n,o;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),i=!!(!((o=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||o===void 0)&&o.size),s=!!window.__vite_plugin_react_preamble_installed__;return r||i||s}function we(e,t){const n=Object.keys,o=typeof e;return e&&t&&o==="object"&&o===typeof t?n(e).length===n(t).length&&n(e).every(i=>we(e[i],t[i])):e===t}function Dt(e,t){return O(e)&&O(t)&&e.constructor===t.constructor&&we({...e,stack:null},{...t,stack:null})&&t.message===t.message}function N(e){window.location.href=e}function Vt(e){return new Promise(t=>setTimeout(t,e))}function Gt(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}l(X());F();const ae=L("navigationState.ts",{}),zt=x(),Oe={markNavigationChange(){ae.navigationChanged=!0},get noNavigationChangeYet(){return!ae.navigationChanged&&this.isFirstUrl(x())},isFirstUrl(e){return e===zt}};async function Kt(e,t){const o=me(e,t).filter(i=>i.fileType===".page.server");return await Promise.all(o.map(async i=>{i.exportNames||(l(i.loadExportNames,t),await i.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:o.some(({exportNames:i})=>(l(i),i.includes("onBeforeRender")))}}function Yt(e,t){if(!_(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function Mt(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}X()&&F();function Fe(e,t=!0){l(e.urlOriginal),"urlPathname"in e&&l(V(e,"urlPathname")),Object.defineProperty(e,"urlPathname",{get:Ce,enumerable:t,configurable:!0}),"url"in e&&l(V(e,"url")),Object.defineProperty(e,"url",{get:qt,enumerable:!1,configurable:!0}),"urlParsed"in e&&l(V(e,"urlParsed")),Object.defineProperty(e,"urlParsed",{get:Jt,enumerable:t,configurable:!0})}function Ee(e){let t=e._urlHandler;t||(t=r=>r);const n=t(e.urlOriginal),o=e._baseServer;return l(o.startsWith("/")),H(n,o)}function Ce(){const{pathname:e}=Ee(this),t=e;return l(t.startsWith("/")),t}function qt(){return R(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),Ce.call(this)}function Jt(){const e=Ee(this),{origin:t,pathname:n,pathnameOriginal:o,search:r,searchAll:i,searchOriginal:s,hash:a,hashOriginal:f}=e,c={origin:t,pathname:n,pathnameOriginal:o,search:r,searchAll:i,searchOriginal:s,hash:a,hashOriginal:f,get hashString(){return R(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),f},get searchString(){return R(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),s}};return le(c,"hashString"),le(c,"searchString"),c}function le(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function Xt(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(_(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const ke="@",M=":";function Qt(e,t){u(e.startsWith("/")||e==="*",(()=>{t?t=t+" invalid":t="Invalid";const n=[`'${e}'`,e!==""?null:"(empty string)"].filter(Boolean).join(" ");return`${t} Route String ${n}: Route Strings should start with a leading slash '/' (or be '*')`})())}function q(e,t){Qt(e),l(t.startsWith("/"));const n=e.split("/"),o=t.split("/"),r={};Zt(e),e==="*"&&(e="/*");for(let i=0;i<Math.max(n.length,o.length);i++){const s=n[i],a=o[i];if(s==="*")return r["*"]=o.slice(Math.max(1,i)).join("/"),{routeParams:r};if(s&&j(s)){if(R(!s.startsWith(M),`Outdated Route String \`${e}\`, use \`${e.split(M).join(ke)}\` instead.`,{onlyOnce:!0}),!a)return null;r[s.slice(1)]=a}else if((s||"")!==(a||""))return null}return{routeParams:r}}function Zt(e){const t=e.split("*").length-1;u(t<=1,`Invalid Route String '${e}': Route Strings are not allowed to contain more than one glob character '*'`),u(t===0||t===1&&e.endsWith("*"),`Invalid Route String '${e}': make sure your Route String ends with the glob character '*'`)}function E(e){const t=e.split("/").filter(s=>s!==""&&s!=="*");let n=0;for(const s of t){if(j(s))break;n++}const o=t.filter(s=>!j(s)).length,r=t.filter(s=>j(s)).length,i=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:o,isCatchAll:i}}function j(e){return e.startsWith(ke)||e.startsWith(M)}function ue(e){const n=q(e,e);return l(n),Object.keys(n.routeParams).length===0}function en(e){e.sort(tn).sort(w(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(w(t=>t.routeType==="STRING"&&ue(t.routeString)===!1)).sort(w(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(w(t=>t.routeType==="STRING"&&ue(t.routeString)===!0)).sort(w(t=>t.routeType==="FILESYSTEM")).sort(w(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function tn(e,t){var n,o;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,i=(o=t.precedence)!==null&&o!==void 0?o:0;if(r!==i)return r>i?-1:1}if(!t.routeString||!e.routeString)return 0;{const i=I(s=>E(s).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(i!==0)return i}{const i=I(s=>E(s).numberOfStaticSegements)(e.routeString,t.routeString);if(i!==0)return i}{const i=I(s=>E(s).numberOfParameterSegments)(e.routeString,t.routeString);if(i!==0)return i}{if(E(t.routeString).isCatchAll)return-1;if(E(e.routeString).isCatchAll)return 1}return 0}async function nn(e,t,n){Xt(t);let o=e(t);if(Te(o,`The Route Function ${n}`),o=await o,o===!1)return null;if(o===!0&&(o={}),u(_(o),`The Route Function ${n} should return a boolean or a plain JavaScript object, instead it returns \`${d(o,"constructor")?o.constructor:o}\`.`),"match"in o){const{match:s}=o;if(u(typeof s=="boolean",`The \`match\` value returned by the Route Function ${n} should be a boolean.`),!s)return null}let r=null;"precedence"in o&&(r=o.precedence,u(typeof r=="number",`The \`precedence\` value returned by the Route Function ${n} should be a number.`)),xe(o,`The \`routeParams\` object returned by the Route Function ${n} should`);const i=o.routeParams||{};return u(!("pageContext"in o),"Providing `pageContext` in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"),l(_(i)),Object.keys(o).forEach(s=>{u(s==="match"||s==="routeParams"||s==="precedence",`The Route Function ${n} returned an object with an unknown key \`{ ${s} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:r,routeParams:i}}function Te(e,t){R(!ht(e),`${t} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vite-plugin-ssr.com/route-function#async`,{onlyOnce:!0})}function xe(e,t){l(t.endsWith(" should")),d(e,"routeParams")&&(l(t.endsWith(" should")),u(_(e.routeParams),`${t} be a plain JavaScript object.`),u(Mt(e.routeParams),`${t} only hold string values.`))}function te(e,{hook:t,errorMessagePrefix:n,isRenderErrorPage:o}){const r=(()=>{if(n)return n;{l(t);const{hookName:i,hookFilePath:s}=t;return l(!i.endsWith(")")),`The \`pageContext\` object provided by the ${i}() hook defined by ${s}`}})();u(O(e),`${r} should be an object instead of \`${typeof e}\``),u(!("_objectCreatedByVitePluginSsr"in e),`${r} shouldn't be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),R(!("_pageId"in e),`${r} sets \`pageContext._pageId\` which means that vite-plugin-ssr's routing is overriden. This is an experimental feature: make sure to contact a vite-plugin-ssr maintainer before using this.`,{onlyOnce:!0}),o||u(!("is404"in e),`${r} sets \`pageContext.is404\` which is forbidden, use \`throw RenderErrorPage()\` instead, see https://vite-plugin-ssr.com/RenderErrorPage`)}async function rn(e,t){let n=e.onBeforeRoute(t);Te(n,`The onBeforeRoute() hook ${e.hookFilePath}`),n=await n;const o=`The onBeforeRoute() hook defined by ${e.hookFilePath}`;if(u(n==null||Yt(n,["pageContext"])&&d(n,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(d(n,"pageContext","object"),`${o} returned \`{ pageContext }\` but pageContext should be a plain JavaScript object.`),d(n.pageContext,"_pageId")&&!d(n.pageContext,"_pageId","null")){const i=`${o} returned \`{ pageContext: { _pageId } }\` but _pageId should be`;u(d(n.pageContext,"_pageId","string"),`${i} a string or null`),u(t._allPageIds.includes(n.pageContext._pageId),`${i} one of following values: \`[${t._allPageIds.map(s=>`'${s}'`).join(", ")}]\`.`)}d(n.pageContext,"routeParams")&&xe(n.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but routeParams should`);const r={};return d(n.pageContext,"url")&&(R(!1,`${o} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),d(n.pageContext,"urlOriginal")&&(tt(n.pageContext.urlOriginal,`${o} returned \`{ pageContext: { urlOriginal } }\` but urlOriginal`),g(r,{_urlPristine:t.urlOriginal})),te(n.pageContext,{hook:{hookFilePath:e.hookFilePath,hookName:"onBeforeRoute"}}),g(r,n.pageContext),r}var A;function ce(...e){var t,n;A||(A=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),A&&A(...e)}X()&&F();async function Ae(e){Fe(e),ce("Pages routes:",e._pageRoutes);const t={};if(e._onBeforeRouteHook){const s=await rn(e._onBeforeRouteHook,e);if(s){if(g(t,s),d(t,"_pageId","string")||d(t,"_pageId","null"))return d(t,"routeParams")?l(d(t,"routeParams","object")):g(t,{routeParams:{}}),g(t,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:t};g(e,t)}}g(t,{_routingProvidedByOnBeforeRouteHook:!1});const n=e._allPageIds;l(n.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(n.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:o}=e;l(o.startsWith("/"));const r=[];await Promise.all(e._pageRoutes.map(async s=>{const{pageId:a,routeType:f}=s;if(s.routeType==="FILESYSTEM"){const{routeString:c}=s,p=q(c,o);if(p){const{routeParams:h}=p;r.push({pageId:a,routeParams:h,routeString:c,routeType:f})}return}if(s.routeType==="STRING"){const{routeString:c}=s,p=q(c,o);if(p){const{routeParams:h}=p;l(f==="STRING"),r.push({pageId:a,routeString:c,routeParams:h,routeType:f})}return}if(s.routeType==="FUNCTION"){const{routeFunction:c,routeDefinedAt:p}=s,h=await nn(c,e,p);if(h){const{routeParams:v,precedence:S}=h;r.push({pageId:a,precedence:S,routeParams:v,routeType:f})}return}l(!1)})),en(r);const i=r[0];if(ce(`Route matches for URL \`${o}\` (in precedence order):`,r),g(t,{_routeMatches:r}),!i)return g(t,{_pageId:null,routeParams:{}}),{pageContextAddendum:t};{const{routeParams:s}=i;l(_(s)),g(t,{_pageId:i.pageId,routeParams:i.routeParams})}return{pageContextAddendum:t}}const fe=["urlPathname","urlParsed"],on=["Page","pageExports","exports"];function Ie(e){[...on,...fe].forEach(n=>{n in e&&(fe.includes(n)?(l(n.startsWith("url")),R(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):R(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}const sn="/";function an(e,t,n){const{pathnameOriginal:o,searchOriginal:r,hashOriginal:i}=H(e,sn);e.startsWith("/")&&l(e===`${o}${r||""}${i||""}`,{url:e});const s=o.endsWith("/");let a;return n&&o!=="/"?(s?a=C(o,0,-1):a=o,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=o+(s?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${i||""}`}const ln=".pageContext.json",un=!1;function cn(e){return an(e,ln,un)}function fn(e,t,n){l(!n.endsWith(" "));const o=[],r=Object.keys(e);for(const i of r)t.includes(i)||o.push(i);u(o.length===0,[n,"returned an object with following unknown keys:",se(o)+".","Only following keys are allowed:",se(t)+"."].join(" "))}function dn(e,t){if(e==null)return;const n=`The onBeforeRender() hook defined by ${t}`;u(_(e),`${n} should return a plain JavaScript object or \`undefined\`/\`null\``),fn(e,["pageContext"],n),e.pageContext&&te(e.pageContext,{hook:{hookName:"onBeforeRender",hookFilePath:t}})}function gn(e,t){const o=t.filter(({filesystemRoot:i})=>e.startsWith(i)).sort(I(({filesystemRoot:i})=>i.length))[0];let r;if(o){const{filesystemRoot:i,urlRoot:s}=o,a={pageId:e,filesystemRoot:i,urlRoot:s};l(s.startsWith("/")&&e.startsWith("/")&&i.startsWith("/"),a),l(e.startsWith(i),a),i!=="/"?(l(!i.endsWith("/"),a),r=C(e,i.length,0)):r=e,l(r.startsWith("/"),a),r=s+(s.endsWith("/")?"":"/")+C(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(i=>i!=="pages"&&i!=="src"&&i!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=C(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function hn(e,t,n,o){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var f;return(f=a.loadFile)===null||f===void 0?void 0:f.call(a)}));const{onBeforeRouteHook:r,filesystemRoots:i}=mn(e,t,n);return{pageRoutes:pn(i,e,t,o),onBeforeRouteHook:r}}function pn(e,t,n,o){const r=[];let i=[...o];if(n.length>0){l(e===null);const s=!0;n.filter(a=>!a.isErrorPage).forEach(a=>{const f=a.pageId;i=vn(i,f);let c=null;{const p=a.configElements.route;if(p){l("configValue"in p);const h=p.configValue,v=p.configDefinedAt;if(l(v),typeof h=="string")c={pageId:f,comesFromV1PageConfig:s,routeString:h,routeDefinedAt:v,routeType:"STRING"};else{l(B(h));{const S=a.configElements.iKnowThePerformanceRisksOfAsyncRouteFunctions;if(S){const m=S.configValue;l(typeof m=="boolean",`${S.configDefinedAt} should be a boolean`)}}c={pageId:f,comesFromV1PageConfig:s,routeFunction:h,routeDefinedAt:v,routeType:"FUNCTION"}}}}if(!c){const{routeFilesystem:p,routeFilesystemDefinedBy:h}=a;l(p),l(p.startsWith("/")),l(h),c={pageId:f,routeFilesystemDefinedBy:h,comesFromV1PageConfig:s,routeString:p,routeDefinedAt:null,routeType:"FILESYSTEM"}}l(c),r.push(c)})}if(n.length===0){l(e);const s=!1;i.filter(a=>!nt(a)).forEach(a=>{const f=je(a,t);if(!f||!("default"in f.fileExports)){const c=gn(a,e);l(c.startsWith("/")),l(!c.endsWith("/")||c==="/"),r.push({pageId:a,comesFromV1PageConfig:s,routeString:c,routeDefinedAt:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}else{const{filePath:c,fileExports:p}=f;if(l(p.default),d(p,"default","string")){const h=p.default;u(h.startsWith("/"),`A Route String should start with a leading slash '/' but ${c} has \`export default '${h}'\`. Make sure to \`export default '/${h}'\` instead.`),r.push({pageId:a,comesFromV1PageConfig:s,routeString:h,routeDefinedAt:c,routeType:"STRING"});return}if(d(p,"default","function")){const h=p.default;{const v="iKnowThePerformanceRisksOfAsyncRouteFunctions";v in p&&u(d(p,v,"boolean"),`The export \`${v}\` of ${c} should be a boolean.`)}r.push({pageId:a,comesFromV1PageConfig:s,routeFunction:h,routeDefinedAt:c,routeType:"FUNCTION"});return}u(!1,`The default export of ${c} should be a string or a function.`)}})}return r}function mn(e,t,n){if(t.length>0){if(n.onBeforeRoute){const i=n.onBeforeRoute.configValue;if(i){const s=n.onBeforeRoute.codeFilePath;return l(s),u(B(i),`The hook onBeforeRoute() defined by ${s} should be a function.`),{onBeforeRouteHook:{hookFilePath:s,onBeforeRoute:i},filesystemRoots:null}}}return{onBeforeRouteHook:null,filesystemRoots:null}}let o=null;const r=[];return e.filter(i=>i.fileType===".page.route"&&i.isDefaultPageFile).forEach(({filePath:i,fileExports:s})=>{if(l(s),"onBeforeRoute"in s){u(d(s,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${i} should be a function.`);const{onBeforeRoute:a}=s;o={hookFilePath:`${i} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in s&&(u(d(s,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} should be a string.`),u(d(s,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} is \`'${s.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),r.push({filesystemRoot:bn(i),urlRoot:s.filesystemRoutingRoot}))}),{onBeforeRouteHook:o,filesystemRoots:r}}function je(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function yn(e,t){const n=je(e,t);if(!n)return null;const{filePath:o,fileExports:r}=n;l(r);const i=r.guard;if(!i)return null;const s=o;return u(B(i),`guard() defined by ${s} should be a function`),{hookFn:i,hookFilePath:s}}function bn(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=C(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function vn(e,t){const{length:n}=e;return e=e.filter(o=>o!==t),l(e.length===n-1),e}async function Rn(e,t){let n;if(e._pageFilesAll.length>0?(l(e._pageConfigs.length===0),n=yn(e._pageId,e._pageFilesAll)):n=ye(e,"guard"),!n)return;const o=n.hookFn;let r=e;const i=t(e);i&&(r=i);const s=await Q(()=>o(r),"guard",n.hookFilePath);u(s===void 0,`The guard() hook of ${n.hookFilePath} returns a value, but guard() doesn't accept any return value`)}async function Sn(e){return e._isFirstRenderAttempt&&Oe.isFirstUrl(e.urlOriginal)?(l(d(e,"_isFirstRenderAttempt","true")),Pn(e)):(l(d(e,"_isFirstRenderAttempt","false")),wn(e))}async function Pn(e){const t=rt();return Ie(t),g(t,{isHydration:!0,_comesDirectlyFromServer:!0}),g(t,await T(e._pageFilesAll,e._pageConfigs,t._pageId)),t}async function _n(e){const t=be(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return g(n,await T(e._pageFilesAll,e._pageConfigs,n._pageId)),n}async function wn(e){let t={};g(t,{isHydration:!1}),g(t,await En(e)),g(t,await T(e._pageFilesAll,e._pageConfigs,t._pageId)),await Rn({_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null,...e,...t},o=>ve(o,!0));const n=await On({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(d(n,"is404","boolean")),l(d(n,"pageProps","object")),l(d(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const o=be(e._pageFilesAll,e._pageConfigs);return l(o),g(t,{isHydration:!1,_pageId:o}),g(t,n),g(t,await T(e._pageFilesAll,e._pageConfigs,t._pageId)),t}else return g(t,n),t}async function On(e){const t=ye(e,"onBeforeRender");if(t){const o=t.hookFn,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},i=ve({...e,...r},!0),s=await Q(()=>o(i),"onBeforeRender",t.hookFilePath);dn(s,t.hookFilePath);const a=s==null?void 0:s.pageContext;return g(r,a),r}if(await Fn(e)){const o=await Tn(e),r={};return Object.assign(r,o),g(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:o}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function Fn(e){if(e._pageConfigs.length>0){const t=ot(e._pageId,e._pageConfigs);return!!Y(t,"onBeforeRender")&&t.configElements.onBeforeRender.configEnv==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:t}=await Kt(e._pageFilesAll,e._pageId);return t}}async function En(e){const n=(await Ae(e)).pageContextAddendum;if(!n._pageId){const o=new Error("No routing match");throw Cn(o),o}return l(d(n,"_pageId","string")),n}function Cn(e){g(e,{_is404:!0})}function kn(e){return O(e)&&e._is404===!0}async function Tn(e){var t;const n=cn((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),o=await fetch(n);{const a=o.headers.get("content-type"),f=a&&a.includes("application/json");if(!f&&o.status===404){N(e.urlOriginal);const c=new Error("Page doesn't exist");throw Object.assign(c,{_abortRendering:!0}),c}u(f,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await o.text(),i=it(r);if("serverSideError"in i)throw st("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(d(i,"pageContext"));const s=i.pageContext;return l(_(s)),l(d(s,"_pageId","string")),Ie(s),s}function Ne(){const e="/";return l(xn(e)),e}function xn(e){return e.startsWith("/")}const G=L("createPageContext.ts",{});async function $e(e){G.pageFilesData||(G.pageFilesData=await at(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:o,pageConfigGlobal:r}=G.pageFilesData,{pageRoutes:i,onBeforeRouteHook:s}=await hn(t,o,r,n),a=Ne();l(Re(a));const f={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_baseServer:a,_isProduction:!0,_pageFilesAll:t,_pageConfigs:o,_pageConfigGlobal:r,_allPageIds:n,_pageRoutes:i,_onBeforeRouteHook:s};return g(f,e),Fe(f),f}async function Be(e){const t=await $e({urlOriginal:e}),n=await Ae(t),o=t._pageFilesAll,r=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:o,pageConfigs:r};const i=n.pageContextAddendum._pageId;return i?{pageId:i,pageFilesAll:o,pageConfigs:r}:{pageId:null,pageFilesAll:o,pageConfigs:r}}function k(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function An({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:o(),isClientRouting:i()};function o(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&k(a).includes("render")))}function r(){const s=e.some(a=>k(a).includes("render"));u(s,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,f)=>` (${f+1}): ${a.filePath}`)].join(`
`)].join(" "))}function i(){return e.some(a=>k(a).includes("clientRouting"))}}function In({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:o}){let r=[];const i=t.filter(a=>!e.includes(a)),s=[];if(s.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),s.push(...i.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)r=e.map(a=>a.filePath);else{const a=jn(o);s.push({id:a,onlyAssets:!1,eagerlyImported:!1}),r=[a]}return{clientEntries:r,clientDependencies:s}}function jn(e){return e?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js"}function Nn(e,t){let n=Se(e,t);const o=me(e,t),{isHtmlOnly:r,isClientRouting:i}=An({pageFilesClientSide:n,pageFilesServerSide:o,pageId:t});r&&(n=n.filter(f=>f.isEnv("CLIENT_ONLY")&&!k(f).includes("render")),n=Bn(n));const{clientEntries:s,clientDependencies:a}=In({pageFilesClientSide:n,pageFilesServerSide:o,isHtmlOnly:r,isClientRouting:i});return{isHtmlOnly:r,isClientRouting:i,clientEntries:s,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:o}}async function $n(e,t,{sharedPageFilesAlreadyLoaded:n}){const o=Se(e,t);await Promise.all(o.map(async r=>{var i;l(r.isEnv("CLIENT_ONLY")||r.isEnv("CLIENT_AND_SERVER")),!(n&&r.isEnv("CLIENT_AND_SERVER"))&&await((i=r.loadExportNames)===null||i===void 0?void 0:i.call(r))}))}function Bn(e){const t=[];for(const n of e)if(t.push(n),k(n).includes("overrideDefaultPages"))break;return t}function Hn(e,t,n){var o;if(e){const r=(o=lt(e,"clientRouting","boolean"))!==null&&o!==void 0?o:!1,i=!!Y(e,"onRenderClient"),s=!!Y(e,"Page")&&e.configElements.Page.configEnv!=="server-only";return{isClientSideRenderable:i&&s,isClientRouting:r}}else{const{isHtmlOnly:r,isClientRouting:i}=Nn(t,n);return{isClientSideRenderable:!r,isClientRouting:i}}}async function He(e){const{pageId:t,pageFilesAll:n,pageConfigs:o}=await Be(e);if(!t)return!1;await $n(n,t,{sharedPageFilesAlreadyLoaded:!1});const r=ut(o,t),{isClientSideRenderable:i,isClientRouting:s}=Hn(r,n,t);return i&&s}function Le(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function We(e){const t=e.getAttribute("href");return!!(t===null||t===""||Le(t)||Wn(e)||Un(t)||!Dn(t)||!ct(t)||!Ln(e))}function Ln(e){if(lr()){const n=e.getAttribute("data-vike-link");return n!==null&&n!=="false"}else return!0}function Wn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Un(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Dn(e){const t=Ne();l(Re(t));const{hasBaseServer:n}=H(e,t);return n}function Vn(e,t){let n=Gn(e,t);return n==="viewport"&&!e._isProduction&&(Pe(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),n="hover"),{prefetchStaticAssets:n}}function Gn(e,t){{const n=zn(t);if(n!==null)return n}if("prefetchLinks"in e.exports&&u(!1,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:n}=e.exports;if(n===!1)return!1;if(n==="hover")return"hover";if(n==="viewport")return"viewport";const o="prefetchStaticAssets value should be false, 'hover', or 'viewport'";u(_(n),o);const r=Object.keys(n);u(r.length===1&&r[0]==="when",o);const{when:i}=n;if(i==="HOVER"||i==="VIEWPORT"){const s=i.toLowerCase();return R(!1,`prefetchStaticAssets value \`{ when: '${i}' }\` is outdated: set prefetchStaticAssets to '${s}' instead`,{onlyOnce:!0}),s}u(!1,o)}return"hover"}function zn(e){const t=e.getAttribute("data-prefetch-static-assets"),n=e.getAttribute("data-prefetch");if(t===null&&n===null)return null;const o="The attribute data-prefetch is outdated, use data-prefetch-static-assets instead.";if(t){if(u(n===null,o),t==="hover"||t==="viewport")return t;if(t==="false")return!1;u(!1,`data-prefetch-static-assets has value "${t}" but it should instead be "false", "hover", or "viewport"`)}if(n){if(l(!t),R(!1,o,{onlyOnce:!0}),n==="true")return"viewport";if(n==="false")return"hover";u(!1,`data-prefetch has value "${n}" but it should instead be "true" or "false"`)}l(!1)}const Ue=new Map;function De(e){const t=Ge(e);return Ue.has(t)}function Ve(e){const t=Ge(e);Ue.set(t,!0)}function Ge(e){return Wt(e)}F();const de=new Map;async function z(e){if(u(ft(),"prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch",{showStackTrace:!0}),u(!Le(e),`You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`,{showStackTrace:!0}),De(e))return;Ve(e);const{pageId:t,pageFilesAll:n,pageConfigs:o}=await Be(e);if(t)try{await T(n,o,t)}catch(r){if(Z(r))J(r,!0);else throw r}}function Kn(e){Ve(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(de.has(n))return;de.set(n,!0);const o=n.getAttribute("href");if(We(n))return;l(o);try{if(!await He(o))return}catch{return}if(De(o))return;const{prefetchStaticAssets:r}=Vn(e,n);if(r){if(r==="hover")n.addEventListener("mouseover",()=>z(o)),n.addEventListener("touchstart",()=>z(o),{passive:!0});else if(r==="viewport"){const i=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(z(o),i.disconnect())})});i.observe(n)}}else return})}function ze(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=Ye()),"scrollPosition"in e||(t=!0,e.scrollPosition=Ke()),Me(e),t&&re(e)}function ne(){const e=window.history.state||{};return Me(e),e}function Ke(){return{x:window.scrollX,y:window.scrollY}}function Ye(){return new Date().getTime()}function ge(){const e=Ke(),t=ne();re({...t,scrollPosition:e})}function Yn(e,t){if(t)re(ne(),e);else{const n=Ye();Mn({timestamp:n,scrollPosition:null},e)}}function Me(e){if(l(O(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(d(t,"x","number")&&d(t,"y","number"))}}function re(e,t){window.history.replaceState(e,"",t??null)}function Mn(e,t){window.history.pushState(e,"",t)}F();const qn=L("navigate.ts",{});function Jn(e){qn.navigate=e}const qe="__isRenderErrorPageException";function K(e){return Xn(e),typeof e=="object"&&e!==null&&qe in e}function Je({pageContext:e}={}){{const n=this;u(!(typeof n=="object"&&(n==null?void 0:n.constructor)===Je),"Don't use the `new` operator: use `throw RenderErrorPage()` instead of `throw new RenderErrorPage()`.",{showStackTrace:!0})}e!==void 0&&te(e,{errorMessagePrefix:"The `pageContext` object provided by `throw RenderErrorPage({ pageContext })`",isRenderErrorPage:!0});const t=new Error("RenderErrorPage");return g(t,{pageContext:e,[qe]:!0}),t}function Xn(e){u(e!==Je,"Missing parentheses `()` in `throw RenderErrorPage`: it should be `throw RenderErrorPage()`.",{showStackTrace:!0})}const b=L("useClientRouter.ts",{previousState:$()});ir();ze();function J(e,t){l(Z(e)),b.clientRoutingIsDisabled=!0,t&&console.log(e),Pe(!1,["Failed to fetch static asset.","This usually happens when a new frontend is deployed.","Falling back to Server Routing.","(The next page navigation will use Server Routing instead of Client Routing.)"].filter(Boolean).join(" "),{onlyOnce:!0})}function Qn(){rr(),Zn((r,{keepScrollPosition:i})=>{o({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),er((r,i)=>{o({scrollTarget:r,isBackwardNavigation:i})}),Jn(async(r,{keepScrollPosition:i=!1,overwriteLastHistoryEntry:s=!1}={})=>{await o({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:s,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;o({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function o({scrollTarget:r,url:i=x(),overwriteLastHistoryEntry:s=!1,isBackwardNavigation:a,checkClientSideRenderable:f}){var c;if(b.clientRoutingIsDisabled){N(i);return}if(f){let y;try{y=await He(i)}catch(P){if(K(P))y=!0;else throw P}if(!y){N(i);return}}const p={urlOriginal:i,isBackwardNavigation:a},h=++e;l(h>=1),h>1&&n===!1&&((c=b.onPageTransitionStart)===null||c===void 0||c.call(b,p),n=!0);let v=!1;const S=()=>h===1&&v===!1?!1:h!==e,m=await $e(p);if(S())return;const ie=h===1;g(m,{_isFirstRenderAttempt:ie});let U;try{U=await Sn(m)}catch(y){if(K(y)||console.error(y),pe(y,m))return;K(y)?(g(m,{is404:!0}),g(m,y.pageContext)):g(m,{is404:kn(y)});try{U=await _n(m)}catch(P){if(pe(P,m)||(ie||setTimeout(()=>{window.location.pathname=i},0),Dt(y,P)))return;throw P}}if(g(m,U),D(m,"onPageTransitionStart"),b.onPageTransitionStart=m.exports.onPageTransitionStart,m.exports.hydrationCanBeAborted?v=!0:R(!Ut(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),!S()&&(t&&await t,!S())){if(tr(i,s),Oe.markNavigationChange(),l(t===void 0),t=(async()=>{await dt(m,!0),Kn(m)})(),await t,t=void 0,m._isFirstRenderAttempt){D(m,"onHydrationEnd");const{onHydrationEnd:y}=m.exports;if(y){const P=m.exportsAll.onHydrationEnd[0].exportSource;l(P),await Q(()=>y(m),"onHydrationEnd",P)}}else h===e&&(m.exports.onPageTransitionEnd&&(D(m,"onPageTransitionEnd"),m.exports.onPageTransitionEnd(m)),n=!1);Xe(r),oe(),b.initialRenderIsDone=!0}}}function Zn(e){document.addEventListener("click",t);return;function t(r){if(!n(r))return;const i=o(r.target);if(!i)return;const s=i.getAttribute("href");if(We(i))return;l(s),r.preventDefault();const a=![null,"false"].includes(i.getAttribute("keep-scroll-position"));e(s,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function o(r){for(;r.tagName!=="A";){const{parentNode:i}=r;if(!i)return null;r=i}return r}}function er(e){window.addEventListener("popstate",()=>{const t=$(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",o=t.urlWithoutHash===b.previousState.urlWithoutHash,r=!t.historyState.timestamp||!b.previousState.historyState.timestamp?null:t.historyState.timestamp<b.previousState.historyState.timestamp;b.previousState=t,o?window.history.state===null?(ze(),b.previousState=$()):Xe(n):e(n,r)})}function tr(e,t){x()!==e&&(oe(),Yn(e,t),b.previousState=$())}function $(){return{urlWithoutHash:x({withoutHash:!0}),historyState:ne()}}function Xe(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=or();if(n&&n!=="top"){const o=document.getElementById(n)||document.getElementsByName(n)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;nr(t)}function nr(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const o=new Date().getTime();for(;;)if(await Vt(10),t(),n()||new Date().getTime()-o>100)return},0)}))}function rr(){window.addEventListener("scroll",Gt(ge,Math.ceil(1e3/3)),{passive:!0}),Qe(ge)}function or(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function ir(){he(),Qe(he),sr(()=>b.initialRenderIsDone&&oe())}function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function he(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Qe(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function sr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function pe(e,t){return!!(O(e)&&e._abortRendering||ar(e,t))}function ar(e,t){if(!Z(e))return!1;if(t._isFirstRenderAttempt)throw J(e,!1),e;return J(e,!0),N(t.urlOriginal),!0}function lr(){return!!window._disableAutomaticLinkInterception}F();gt(!0);Qn();

(()=>{var e,t,r,n,o={69314:()=>{},18983:()=>{},48731:(e,t,r)=>{"use strict";r.d(t,{UT:()=>i,k8:()=>o});var n=r(33661);function o(e,t){return function(e,t){if(!e)throw new Error((0,n.m)(t)?t():t)}(null!=e,t),e}function i(e){throw new Error(`This codepath should be unreachable. Unhandled input: ${e}`)}},43071:(e,t,r)=>{"use strict";var n=r(36631),o=r(60576),i=r(38090);const a=(0,n.Z)((async function(e){const t=new o.U(e);return await i.G.create({provider:t})}));onmessage=e=>{const{endpoint:t,stakerAddress:r}=e.data;(async function(e,t){console.log(`fastUnstake eligibility is checking for ${t}`);const r=await a(e),n=(await r.query.fastUnstake.erasToCheckPerBlock()).toNumber();if(!n)return;const o=(await r.query.staking.currentEra()).unwrap();return!(await Promise.all([...Array(n)].map(((e,t)=>r.query.staking.erasStakers.entries(o-t))))).flat().map((e=>e[1].others)).flat().find((e=>String(e.who)===t))})(t,r).then((e=>{postMessage(e)}))}}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,a.x=()=>{var e=a.O(void 0,[593],(()=>a(43071)));return a.O(e)},e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(f=0;f<e.length;f++){for(var[r,n,o]=e[f],s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(f--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={199:1};a.f.i=(t,r)=>{e[t]||importScripts(a.p+a.u(t))};var t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],r=t.push.bind(t);t.push=t=>{var[n,o,i]=t;for(var s in o)a.o(o,s)&&(a.m[s]=o[s]);for(i&&i(a);n.length;)e[n.pop()]=1;r(t)}})(),n=a.x,a.x=()=>a.e(593).then(n),a.x()})();
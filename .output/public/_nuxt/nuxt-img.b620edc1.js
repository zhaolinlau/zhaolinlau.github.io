import{h as w,C as A,D as y,p as M,E as _,G as S,H as E,I as P,u as $,c as v,d as W,r as z,j as N,o as O,e as q}from"./entry.b8bc1214.js";async function R(e,t){return await H(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function H(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const o={width:i.width,height:i.height,ratio:i.width/i.height};t(o)},i.onerror=o=>r(o),i.src=e})}function b(e){return t=>t?e[t]||t:e.missingValue}function L({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(s,a)=>`${s}=${a}`),t&&typeof t!="function"&&(t=b(t));const o=i||{};return Object.keys(o).forEach(s=>{typeof o[s]!="function"&&(o[s]=b(o[s]))}),(s={})=>Object.entries(s).filter(([u,c])=>typeof c<"u").map(([u,c])=>{const g=o[u];return typeof g=="function"&&(c=g(s[u])),u=typeof t=="function"?t(u):u,e(u,c)}).join(r)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function B(e){const t={options:e},r=(o,s={})=>I(t,o,s),i=(o,s={},a={})=>r(o,{...a,modifiers:_(s,a.modifiers||{})}).url;for(const o in e.presets)i[o]=(s,a,u)=>i(s,a,{...e.presets[o],...u});return i.options=e,i.getImage=r,i.getMeta=(o,s)=>U(t,o,s),i.getSizes=(o,s)=>F(t,o,s),t.$img=i,i}async function U(e,t,r){const i=I(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await R(e,i.url)}function I(e,t,r){var g,l;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:o}=C(e,r.provider||e.options.provider),s=D(e,r.preset);if(t=w(t)?t:A(t),!i.supportsAlias)for(const d in e.options.alias)t.startsWith(d)&&(t=y(e.options.alias[d],t.substr(d.length)));if(i.validateDomains&&w(t)){const d=M(t).host;if(!e.options.domains.find(f=>f===d))return{url:t}}const a=_(r,s,o);a.modifiers={...a.modifiers};const u=a.modifiers.format;(g=a.modifiers)!=null&&g.width&&(a.modifiers.width=h(a.modifiers.width)),(l=a.modifiers)!=null&&l.height&&(a.modifiers.height=h(a.modifiers.height));const c=i.getImage(t,a,e);return c.format=c.format||u||"",c}function C(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function D(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function F(e,t,r){var g,l;const i=h((g=r.modifiers)==null?void 0:g.width),o=h((l=r.modifiers)==null?void 0:l.height),s=i&&o?o/i:0,a=[],u={};if(typeof r.sizes=="string")for(const d of r.sizes.split(/[\s,]+/).filter(f=>f)){const f=d.split(":");f.length===2&&(u[f[0].trim()]=f[1].trim())}else Object.assign(u,r.sizes);for(const d in u){const f=e.options.screens&&e.options.screens[d]||parseInt(d);let n=String(u[d]);const m=n.endsWith("vw");if(!m&&/^\d+$/.test(n)&&(n=n+"px"),!m&&!n.endsWith("px"))continue;let p=parseInt(n);if(!f||!p)continue;m&&(p=Math.round(p/100*f));const j=s?Math.round(p*s):o;a.push({width:p,size:n,screenMaxWidth:f,media:`(max-width: ${f}px)`,src:e.$img(t,{...r.modifiers,width:p,height:j},r)})}a.sort((d,f)=>d.screenMaxWidth-f.screenMaxWidth);const c=a[a.length-1];return c&&(c.media=""),{sizes:a.map(d=>`${d.media?d.media+" ":""}${d.size}`).join(", "),srcset:a.map(d=>`${d.src} ${d.width}w`).join(", "),src:c==null?void 0:c.src}}const G=L({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>S(e)+"_"+S(t)}),T=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const o=G(t)||"_";return r||(r=y(i.options.nuxt.baseURL,"/_ipx")),{url:y(r,o,E(e))}},J=!0,Y=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,getImage:T,supportsAlias:Y,validateDomains:J},Symbol.toStringTag,{value:"Module"})),x={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};x.providers={ipx:{provider:Q,defaults:void 0}};const V=()=>{const e=P(),t=$();return t.$img||t._img||(t._img=B({...x,nuxt:{baseURL:e.app.baseURL}}))},X={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},Z=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),r=v(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=v(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:i}},k={...X,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ee=W({name:"NuxtImg",props:k,emits:["load","error"],setup:(e,t)=>{const r=V(),i=Z(e),o=z(!1),s=v(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),a=v(()=>{const n={...i.attrs.value,"data-nuxt-img":""};return e.sizes&&(n.sizes=s.value.sizes,n.srcset=s.value.srcset),n}),u=v(()=>{let n=e.placeholder;if(n===""&&(n=!0),!n||o.value)return!1;if(typeof n=="string")return n;const m=Array.isArray(n)?n:typeof n=="number"?[n,n]:[10,10];return r(e.src,{...i.modifiers.value,width:m[0],height:m[1],quality:m[2]||50},i.options.value)}),c=v(()=>e.sizes?s.value.src:r(e.src,i.modifiers.value,i.options.value)),g=v(()=>u.value?u.value:c.value);if(e.preload){const n=Object.values(s.value).every(m=>m);N({link:[{rel:"preload",as:"image",...n?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:g.value}}]})}const l=z(),f=$().isHydrating;return O(()=>{if(u.value){const n=new Image;n.src=c.value,n.onload=m=>{l.value&&(l.value.src=c.value),o.value=!0,t.emit("load",m)};return}l.value&&(l.value.complete&&f&&(l.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),l.value.onload=n=>{t.emit("load",n)},l.value.onerror=n=>{t.emit("error",n)})}),()=>q("img",{ref:l,key:g.value,src:g.value,...a.value,...t.attrs})}});export{ee as _};

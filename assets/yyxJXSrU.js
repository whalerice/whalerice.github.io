const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B1YuQh4H.js","./Cfv4kRKQ.js","./entry.Jvidmmcs.css"])))=>i.map(i=>d[i]);
import{Q as h,R as f,S as $}from"./Cfv4kRKQ.js";const N={content:"v3.3.0--FeFt1u9fdG"},y={content:"_content_content",info:"_content_info"},w={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",tags:"json",image:"string",date:"date"}},info:{type:"data",fields:{}}},l=(o,i)=>{const e=o._conditions;return e.length>0?`(${e.join(` ${i} `)})`:""},d=o=>{const i=[],e={_conditions:i,where(n,s,t){let r;switch(s.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(t)){const c=t.map(a=>u(a)).join(", ");r=`"${String(n)}" ${s.toUpperCase()} (${c})`}else throw new TypeError(`Value for ${s} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(t)&&t.length===2)r=`"${String(n)}" ${s.toUpperCase()} ${u(t[0])} AND ${u(t[1])}`;else throw new Error(`Value for ${s} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":r=`"${String(n)}" ${s.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":r=`"${String(n)}" ${s.toUpperCase()} ${u(t)}`;break;default:r=`"${String(n)}" ${s} ${u(typeof t=="boolean"?Number(t):t)}`}return i.push(`${r}`),e},andWhere(n){const s=n(d());return i.push(l(s,"AND")),e},orWhere(n){const s=n(d());return i.push(l(s,"OR")),e}};return e},m=(o,i)=>{const e={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},n={__params:e,andWhere(t){const r=t(d());return e.conditions.push(l(r,"AND")),n},orWhere(t){const r=t(d());return e.conditions.push(l(r,"OR")),n},path(t){return n.where("path","=",h(t))},skip(t){return e.offset=t,n},where(t,r,c){return n.andWhere(a=>a.where(String(t),r,c)),n},limit(t){return e.limit=t,n},select(...t){return t.length&&e.selectedFields.push(...t),n},order(t,r){return e.orderBy.push(`"${String(t)}" ${r}`),n},async all(){return i(o,s()).then(t=>t||[])},async first(){return i(o,s({limit:1})).then(t=>t[0]||null)},async count(t="*",r=!1){return i(o,s({count:{field:String(t),distinct:r}})).then(c=>c[0].count)}};function s(t={}){let r="SELECT ";if(t!=null&&t.count)r+=`COUNT(${t.count.distinct?"DISTINCT ":""}${t.count.field}) as count`;else{const a=Array.from(new Set(e.selectedFields));r+=a.length>0?a.map(g=>`"${String(g)}"`).join(", "):"*"}r+=` FROM ${y[String(o)]}`,e.conditions.length>0&&(r+=` WHERE ${e.conditions.join(" AND ")}`),e.orderBy.length>0?r+=` ORDER BY ${e.orderBy.join(", ")}`:r+=" ORDER BY stem ASC";const c=(t==null?void 0:t.limit)||e.limit;return c>0&&(e.offset>0?r+=` LIMIT ${c} OFFSET ${e.offset}`:r+=` LIMIT ${c}`),r}return n};function u(o){return`'${String(o).replace(/'/g,"''")}'`}const T=o=>{var e,n;const i=(n=(e=f())==null?void 0:e.ssrContext)==null?void 0:n.event;return m(o,(s,t)=>p(i,s,t))};async function p(o,i,e){return S(i,e)}async function S(o,i){return await $(()=>import("./B1YuQh4H.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(n=>n.loadDatabaseAdapter(o)).then(n=>n.all(i))}export{w as a,N as c,T as q,y as t};

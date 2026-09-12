import e from"node:test";import a from"node:assert/strict"
;import{normalizeEntry as t,validateEntry as s,filterEntries as o,searchEntries as n,sortEntries as r}from"../src/domain.js";const d=t({id:"a",name:" Meadow ",
description:"Daisies",hoop:'6"',status:"In Progress",started:"2024-02-29",colors:"sage",notes:"gift"});e("normalization",()=>{
a.equal(d.name,"Meadow"),a.equal(d.finished,"")}),e("valid leap day",()=>a.deepEqual(s(d,"2026-09-12"),{})),
e("rejects invalid leap dates",()=>a.ok(s({...d,started:"2025-02-29"},"2026-09-12").started)),e("invalid dates",()=>{
for(const e of["2027-01-01","2024-13-01","2024-04-31"])a.ok(s({...d,started:e},"2026-09-12").started)}),e("requires project details",()=>{
for(const e of["name","description","hoop"])a.ok(s({...d,[e]:""},"2026-09-12")[e])}),e("enforces name boundary",()=>{a.ok(!s({...d,name:"a".repeat(60)
},"2026-09-12").name),a.ok(s({...d,name:"a".repeat(61)},"2026-09-12").name)}),e("checks status and finish chronology",()=>{a.ok(s({...d,status:"Other"
},"2026-09-12").status),a.ok(s({...d,status:"Finished",finished:"2023-01-01"},"2026-09-12").finished),a.ok(s({...d,finished:"2024-03-01"
},"2026-09-12").finished)}),e("multi-field search",()=>{a.equal(n([d]," SAGE ").length,1),a.equal(n([d],"gift").length,1)}),
e("immutability",()=>{const e=Object.freeze([Object.freeze(d),Object.freeze({...d,id:"b",name:"Aster",status:"Queued"})])
;a.equal(r(e,"name")[0].name,"Aster"),a.equal(e[0].name,"Meadow"),a.equal(o(e,"Queued").length,1)}),e("safe keys",()=>{
const e=t(JSON.parse('{"__proto__":{"polluted":true},"name":"Safe"}'));a.equal(e.polluted,void 0),a.equal(Object.hasOwn(e,"__proto__"),!1),
a.equal({}.polluted,void 0)});
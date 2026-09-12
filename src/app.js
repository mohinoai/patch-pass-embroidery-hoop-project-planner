import{statuses as e,normalizeEntry as t,validateEntry as n,filterEntries as r,searchEntries as o,sortEntries as a,keys as _,parseStored as X}from"./domain.js"
;import{hoopArt as i}from"./art.js";const s=e=>document.querySelector(e),l="patch-pass-projects-v1",d=()=>{const e=new Date
;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`
},c=[["Wildflower daydream","A little meadow, one French knot at a time.",'6" round',"In Progress","DMC 301, DMC 734, DMC 3822, DMC 3865, DMC 3052","2026-09-06","","French knots & lazy daisies. A little just-for-me project.",0],["Lavender Sundays","A quiet bundle of lavender for the hallway.",'4" round',"Finished","DMC 553, DMC 554, DMC 3052, DMC 3865","2026-08-24","2026-09-02","A little reminder to slow down.",1],["A monogram for Mum","Her initial, tucked inside a leafy wreath.",'6" round',"Queued","DMC 301, DMC 3052, DMC 734","2026-08-20","","For Mum’s birthday. Pattern: my own sketch.",2],["Golden hour garden","Warm blooms inspired by late summer light.",'8" round',"In Progress","DMC 3776, DMC 3822, DMC 734, DMC 301, DMC 3865","2026-08-15","","Practicing satin stitch & long-and-short stitch.",3],["Somewhere, in the mountains","A tiny landscape to carry a big memory.",'6" round',"Finished","DMC 3052, DMC 930, DMC 734, DMC 3822","2026-08-01","2026-08-18","Inspired by our weekend away.",4]].map((e,n)=>t(Object.fromEntries([["id",`sample-${n}`],...[..._.slice(1),"art"].map((t,n)=>[t,e[n]])])))
;let u,m=[],p="All projects",h=null,f=!1,g=null;const b=s("#project-form"),F=b.elements,E=e=>document.getElementById(e+"-error"),y=s("#editor"),Q=s("#search"),P=s("#add-project"),T=s("#toast"),R=s("#retry"),H=s("#theme"),V=s("#save"),L=s("#live-region"),G=s("#grid-error");function v(e,t,n){const r=document.createElement(e)
;return t&&(r.className=t),void 0!==n&&(r.textContent=n),r}function C(e){L.textContent=e,T.textContent=e,
T.classList.add("show"),clearTimeout(u),u=setTimeout(()=>T.classList.remove("show"),2800)}function w(){g&&(g.textContent="Delete",
g.classList.remove("confirm"),g=null)}function A(e,t){try{if(f)throw Error();return localStorage.setItem(l,JSON.stringify(e)),m=e,s(t).textContent="",!0}catch{
return s(t).textContent="Your changes couldn’t be saved on this device. Free up browser storage or check site permissions, then try again. Your project is still here.",
!1}}function j(e){return new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(new Date(e+"T12:00:00"))}const k={301:"#a76a46",734:"#979b61",
3822:"#d7bb69",3865:"#e5ddc7",3052:"#849172",553:"#8b7a9e",554:"#b4a1bb",3776:"#c78559",930:"#647b7a"};function D(e){const t=e.replace(/DMC\s*/i,"").trim()
;if(k[t])return k[t];if(CSS.supports("color",t))return t;let n=0;for(const t of e)n=(31*n+t.charCodeAt(0))%360;return`hsl(${n} 25% 58%)`}function S(){w(),
s("#total-count").textContent=m.length;const t=s("#filters");t.replaceChildren();for(const n of["All projects",...e]){const e=v("button","",n);e.type="button",
e.setAttribute("aria-pressed",String(p===n)),e.append(v("span","filter-count","All projects"===n?m.length:m.filter(e=>e.status===n).length)),e.onclick=()=>{p=n,
S()},t.append(e)}const n=s("#grid");n.replaceChildren();const q=Q.value.trim(),l=a(o(r(m,p),q),s("#sort").value);if(!l.length){const e=v("div","empty-state")
;e.append(v("h3","",m.length?q?"No threads to follow just yet.":`Nothing ${p.toLowerCase()} just yet.`:"Your first stitch starts here."),v("p","",m.length?q?`No projects match “${q}”. Try another name or thread color.`:"There’s room in your basket for something lovely.":"Give that idea in your head a little home."))
;const t=v("button","secondary",m.length?q?"Clear search":"Show all projects":"Add your first project");t.onclick=()=>{if(!m.length)return x();q?Q.value="":p="All projects",S()
},e.append(t),n.append(e)}for(const[e,t]of l.entries()){const r=v("article","project-card");r.style.animationDelay=35*e+"ms";const o=v("div","art-area")
;o.dataset.art=t.art,o.append(i(t.art),v("span","badge "+("Finished"===t.status?"finished":"Queued"===t.status?"queued":""),t.status))
;const a=v("div","card-content"),s=v("div","card-title-row"),l=v("button","card-edit","↗");l.setAttribute("aria-label",`Edit ${t.name}`),
l.onclick=()=>x(t),s.append(v("h3","",t.name),l);const d=v("div","card-meta"),c=v("span","")
;c.append(v("span","meta-hoop","◯"),document.createTextNode(t.hoop)),
d.append(c,v("span","",`${"Finished"===t.status&&t.finished?"Finished":"Started"} ${j("Finished"===t.status&&t.finished?t.finished:t.started)}`))
;const u=v("div","threads"),p=t.colors.split(",").map(e=>e.trim()).filter(Boolean);for(const e of p.slice(0,6)){const t=v("span","swatch")
;t.style.background=D(e),t.title=e,t.setAttribute("aria-label",e),u.append(t)}
u.append(v("span","thread-label",p.length?`${p.length} thread color${1===p.length?"":"s"}`:"A palette yet to be picked"))
;const h=v("div","card-bottom"),f=v("span","note-snippet",`♧  ${t.notes||"A little story still unfolding."}`);f.title=t.notes;const b=v("button","","Delete")
;b.setAttribute("aria-label",`Delete ${t.name}`),b.onclick=()=>{if(g!==b)return w(),g=b,b.textContent="Delete?",void b.classList.add("confirm");w(),
A(m.filter(e=>e.id!==t.id),"#grid-error")&&(S(),C("Project removed from your basket."))},b.onblur=()=>{g===b&&w()},h.append(f,b),
a.append(s,v("p","card-description",t.description),d,u,h),r.append(o,a),n.append(r)}if(l.length){const e=v("button","add-card")
;e.append(v("span","add-circle","＋"),v("strong","","An idea waiting to bloom?"),v("p","","A new pattern, a thoughtful gift,\nor just a little something for you."),v("span","little-link","Start a new project  ↗")),
e.onclick=()=>x(),e.disabled=f,n.append(e)}L.textContent=`${l.length} projects shown.`}function M(){
s("#counter").textContent=`${F.name.value.length}/60`,s("#preview-name").textContent=F.name.value.trim()||"Your next lovely thing",
s("#preview-detail").textContent=`${F.status.value} · ${F.hoop.value.trim()||"Choose a hoop"}`}function N(){for(const e of b.querySelectorAll(".error"))e.textContent="";for(const e of b.querySelectorAll("[aria-invalid]"))e.removeAttribute("aria-invalid")}
function x(e){if(!f){h=e||null,b.reset()
;N()
;if(s("#editor-title").textContent=e?"A little work in progress.":"Start something lovely.",V.textContent=e?"Save changes ↗":"Save project ↗",
e)for(const[t,n]of Object.entries(e))F.namedItem(t)&&(F.namedItem(t).value=n);else F.started.value=d(),
F.hoop.value='6" round';F.started.max=d(),F.finished.max=d(),M(),y.showModal(),s("#name").focus()}}function $(){try{
const e=localStorage.getItem(l);m=null===e?c:X(e,d()),f=!1,G.textContent="",R.hidden=!0,P.disabled=!1,V.disabled=!1,S()}catch{f=!0,
G.textContent="We couldn’t read your saved notebook. Your original data has been kept safe. Check browser storage permissions or restore the saved data, then try reading again.",
R.hidden=!1,P.disabled=!0,V.disabled=!0,s("#grid").replaceChildren()}}P.onclick=()=>x(),
s("#cancel").onclick=()=>y.close(),s("#close-editor").onclick=()=>y.close(),y.addEventListener("click",e=>{if(e.target===y){const t=y.getBoundingClientRect()
;(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&y.close()}}),b.addEventListener("input",e=>{
const t=E(e.target.name);t&&(t.textContent=""),e.target.removeAttribute("aria-invalid"),M()}),b.onsubmit=e=>{e.preventDefault()
;const r=Object.fromEntries(new FormData(b)),o=t({...r,id:h?.id||crypto.randomUUID(),art:h?.art??m.length%6}),a=n(o,d())
;N()
;if(Object.keys(a).length){for(const[e,t]of Object.entries(a))E(e).textContent=t,
F[e].setAttribute("aria-invalid","true"),F[e].setAttribute("aria-describedby",`${e}-error`);return void F[Object.keys(a)[0]].focus()}
A(h?m.map(e=>e.id===h.id?o:e):[o,...m],"#form-error")&&(y.close(),p="All projects",Q.value="",S(),
C(h?"Your project is all up to date.":"A new project, a little possibility."))},Q.oninput=S,s("#sort").onchange=S,
document.addEventListener("pointerdown",e=>{g&&e.target!==g&&w()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&w()}),H.onclick=()=>{
const e="dark"!==document.documentElement.dataset.theme;document.documentElement.dataset.theme=e?"dark":"light",H.textContent=e?"☀":"☾",
H.setAttribute("aria-label",e?"Switch to light theme":"Switch to dark theme")},R.onclick=$,s("#hero-hoop").append(i(5)),
requestAnimationFrame(()=>requestAnimationFrame($));
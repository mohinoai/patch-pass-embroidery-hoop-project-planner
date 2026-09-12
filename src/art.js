function t(t,e={},r){const o=document.createElementNS("http://www.w3.org/2000/svg",t);for(const[t,r]of Object.entries(e))o.setAttribute(t,r)
;return r&&r.append(o),o}export function hoopArt(e=0){const r=t("svg",{viewBox:"0 0 300 300","aria-hidden":"true"}),o=t("defs",{},r),c=t("pattern",{
id:`linen-${e}`,width:4,height:4,patternUnits:"userSpaceOnUse"},o);t("path",{d:"M0 1H4M1 0V4",stroke:"#b9aa82","stroke-width":.3,opacity:.25},c),t("rect",{
x:139,y:16,width:22,height:25,rx:3,fill:"#b89c65",stroke:"#8c744a"},r),t("path",{d:"M132 22h36",stroke:"#82785b","stroke-width":4,"stroke-linecap":"round"},r),
t("circle",{cx:150,cy:155,r:120,fill:"#c39d69",stroke:"#a58051","stroke-width":1},r),t("circle",{cx:150,cy:155,r:113,fill:"#ede8d5",stroke:"#ddbf8c",
"stroke-width":5},r),t("circle",{cx:150,cy:155,r:109,fill:`url(#linen-${e})`,stroke:"#9c815740","stroke-width":1},r);const i=t("g",{},r),a=(e,r,o=2)=>t("path",{
d:e,fill:"none",stroke:r,"stroke-width":o,"stroke-linecap":"round","stroke-linejoin":"round"},i);function f(e,r,o,c=15,a="#798653"){const f=t("g",{
transform:`translate(${e} ${r}) rotate(${o})`},i);t("path",{d:`M0 0Q${-c} ${.35*-c} 0 ${1.8*-c}Q${c} ${.35*-c} 0 0`,fill:a,stroke:"#5c6a4730","stroke-width":1
},f),t("path",{d:"M0 -2V"+1.5*-c,stroke:"#dce0b1",opacity:.45,"stroke-width":.7},f)}function l(e,r,o,c,a=7){const f=t("g",{},i);for(let i=0;i<a;i++){
const l=360*i/a;t("ellipse",{cx:e,cy:r-.7*o,rx:.32*o,ry:.65*o,fill:c,stroke:"#a8796630","stroke-width":.7,transform:`rotate(${l} ${e} ${r})`},f),t("path",{
d:`M${e} ${r-.3*o}v${.65*-o}`,stroke:"#f8edd3","stroke-width":.8,opacity:.55,transform:`rotate(${l} ${e} ${r})`},f)}t("circle",{cx:e,cy:r,r:.3*o,fill:"#bf9a49"
},f);for(let c=0;c<7;c++)t("circle",{cx:e+Math.cos(c)*o*.17,cy:r+Math.sin(c)*o*.17,r:.8,fill:"#795f31"},f)}
if(0!==e&&5!==e||(a("M150 236Q155 180 132 93","#6a794d",2.5),a("M153 210Q112 180 94 135","#78804e"),a("M151 218Q187 175 198 128","#78804e"),
a("M148 170Q183 146 174 100","#78804e"),a("M150 202Q127 172 128 143","#78804e"),
[[148,209,-55],[152,224,45],[141,155,-45],[149,181,50],[116,174,-60],[104,152,30],[173,184,55],[190,151,-40],[164,152,45],[133,122,-60]].forEach(t=>f(...t,12)),
l(131,94,15,"#eee9d7"),l(94,132,18,5===e?"#bc694f":"#f9f4df"),l(174,99,13,"#c39370"),l(199,127,17,"#faf5de"),l(127,141,11,"#bb795c"),l(158,157,15,"#fbf6e8"),
l(182,179,10,"#e2bc67"),a("M141 226Q150 218 160 226L146 234M152 228l10 10","#c7966c",2)),1===e){
for(const[e,r,o]of[[117,199,-25],[147,211,5],[177,201,24],[105,190,-43],[194,180,38]]){a(`M150 229Q${e} 184 ${e+.3*o} ${r-73}`,"#778354",2)
;for(let c=0;c<7;c++){const a=e+.3*o+(150-e)*c*.008,f=r-78+6*c;t("ellipse",{cx:a+(c%2?4:-4),cy:f,rx:4,ry:6,fill:["#8a779d","#a393b0","#75658b"][c%3],
transform:`rotate(${o} ${a} ${f})`},i)}f(e,r,o>0?50:-50,14,"#8c9870")}a("M137 219q14 13 28 0m-13 7l-10 14m10-14l13 11","#c39c71")}if(2===e){
a("M117 224Q67 177 110 106M182 223Q224 171 188 108","#78815c",2);for(let t=0;t<7;t++)f(99-11*Math.sin(t/6*Math.PI),117+15*t,12*t-55,11),
f(199+9*Math.sin(t/6*Math.PI),117+15*t,55-12*t,11);t("text",{x:150,y:184,"text-anchor":"middle",fill:"#a7644a","font-family":"Georgia,serif","font-size":83,
"font-style":"italic"},i).textContent="M",l(116,104,11,"#d1a27e"),l(181,105,11,"#eddfb4"),l(147,219,12,"#c69772")}if(3===e){
a("M150 229Q123 166 104 125M150 229Q174 185 190 127M149 222Q154 165 151 100","#788055",2)
;for(const t of[[139,203,-40],[162,199,45],[117,159,-45],[180,158,40],[151,147,40]])f(...t,16);l(104,125,26,"#ce8266",8),l(190,128,23,"#e0ad83",8),
l(151,98,21,"#d1af5a",9),l(130,183,13,"#eee3c2")}if(4===e){t("path",{d:"M60 195L111 133 143 173 181 111 239 195Z",fill:"#87978a"},i),t("path",{
d:"M98 149l13-16 19 27-18-9-8 5m59-22l18-23 20 30-20-10-7 7",fill:"#f6f1dc"},i),t("path",{d:"M62 197Q110 176 150 202T240 191L230 215Q149 237 77 216Z",
fill:"#a7ad8a"},i),t("circle",{cx:116,cy:107,r:15,fill:"#d6ae65"},i);for(const[t,e,r]of[[87,198,20],[206,199,24],[195,211,15]]){
a(`M${t} ${e}v${1.8*-r}`,"#4f6b58");for(let o=0;o<4;o++)a(`M${t-.2*r-2*o} ${e-1.5*r+7*o}l${.2*r+2*o} -7 ${.2*r+2*o} 7`,"#60785e",2)}}return r}
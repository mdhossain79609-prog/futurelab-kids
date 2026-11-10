<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Eye Examination Machine Builder (3D)</title>
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}
html,body{position:fixed;inset:0;overflow:hidden;overscroll-behavior:none;touch-action:none;font-family:"Segoe UI",Roboto,Arial,sans-serif;background:#0d1b26;color:#e8f6ff}
#app{display:flex;flex-direction:column;height:100%}
header{padding:10px 14px 8px;background:linear-gradient(90deg,#0b3550,#137a8c,#0b3550);box-shadow:0 2px 12px #0008;text-align:center}
header h1{font-size:18px;letter-spacing:2px;font-weight:800;text-transform:uppercase;background:linear-gradient(90deg,#a6f4ff,#fff,#a6f4ff);-webkit-background-clip:text;background-clip:text;color:transparent}
header small{font-size:10px;letter-spacing:3px;color:#bfe9f2}
#bar{height:6px;background:#ffffff22;border-radius:4px;margin:7px 0 0;overflow:hidden}
#bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#22d3ee,#4ade80);transition:width .3s}
#stage{flex:1;position:relative;min-height:0;background:radial-gradient(ellipse at 50% 38%,#24465c,#0d1b26 75%)}
#stage.light{background:radial-gradient(ellipse at 50% 38%,#fff,#d9e4ee 80%)}
#stage canvas{display:block;width:100%;height:100%;touch-action:none}
#count{position:absolute;top:10px;left:12px;padding:4px 10px;border-radius:20px;background:#0007;color:#67e8f9;font-weight:800;font-size:13px;pointer-events:none}
#help{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);width:max-content;max-width:92%;text-align:center;padding:6px 12px;border-radius:20px;font-size:11px;font-weight:700;background:#0008;pointer-events:none}
#tray{height:132px;background:#0a1620;border-top:2px solid #22d3ee55;display:flex;gap:8px;overflow-x:auto;overflow-y:hidden;padding:8px;touch-action:pan-x;scrollbar-width:none}
#tray::-webkit-scrollbar{display:none}
.tile{flex:0 0 96px;height:112px;border-radius:14px;background:#13283b;border:2px solid var(--c);display:flex;flex-direction:column;align-items:center;justify-content:center;touch-action:none;box-shadow:0 0 12px var(--c) inset;position:relative;transition:opacity .15s,transform .15s}
.tile.drag{opacity:.25;transform:scale(.93)}
.tile.hint{animation:hint .5s 3}
.tile img{width:86px;height:78px;object-fit:contain;pointer-events:none}
.tile span{font-size:10px;font-weight:800;margin-top:2px;text-align:center;line-height:1.1;pointer-events:none}
.tile b{position:absolute;top:4px;left:7px;font-size:9px;color:var(--c)}
.done{margin:auto;font-weight:800;color:#4ade80}
nav{display:flex;gap:6px;padding:8px;background:#06101a}
nav button{flex:1;padding:11px 4px;border:0;border-radius:12px;font-weight:800;font-size:13px;color:#fff;background:linear-gradient(180deg,#1f4e6e,#123247);box-shadow:0 3px 0 #061a28,0 0 0 1px #2dd4ff44 inset}
nav button:active{transform:translateY(2px);box-shadow:0 1px 0 #061a28}
#pwr{background:linear-gradient(180deg,#555,#333)}
#pwr.ready{background:linear-gradient(180deg,#22c55e,#15803d);animation:pulse 1.2s infinite}
#pwr.on{background:linear-gradient(180deg,#ef4444,#b91c1c)}
@keyframes pulse{50%{box-shadow:0 0 18px #4ade80}}
@keyframes hint{50%{transform:translateY(-6px);box-shadow:0 0 18px var(--c)}}
#cc{position:fixed;right:10px;bottom:70px;width:min(270px,calc(100vw - 20px));max-height:calc(100vh - 160px);overflow-y:auto;background:#0f2233f2;border:1px solid #22d3ee66;border-radius:16px;padding:14px;z-index:40;display:none;box-shadow:0 10px 30px #000a;touch-action:pan-y}
#cc h3{font-size:13px;letter-spacing:2px;margin-bottom:6px;color:#7dd3fc}
#cc label{font-size:12px;display:block;margin:9px 0 5px;color:#cbd5e1}
.sw{display:flex;gap:8px}.sw b{width:34px;height:34px;border-radius:50%;border:3px solid #fff3}.sw b.act{border-color:#22d3ee}
.row{display:flex;gap:6px}.row button{flex:1;padding:8px;border:0;border-radius:10px;background:#1e3a52;color:#fff;font-weight:700;font-size:12px}.row button.act{background:#0891b2}
#toast{position:fixed;top:92px;left:50%;transform:translateX(-50%);background:#16a34a;padding:10px 18px;border-radius:20px;font-weight:800;display:none;z-index:60;box-shadow:0 4px 16px #0008;white-space:nowrap}
#load{position:absolute;inset:0;display:grid;place-items:center;color:#67e8f9;font-weight:800}
</style>
<script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/"}}</script>
</head>
<body>
<div id="app">
<header><h1>Eye Examination Machine</h1><small>AUTO REFRACTOMETER · 30 PARTS</small><div id="bar"><i></i></div></header>
<div id="stage"><div id="load">Loading 3D machine…</div><div id="count">0/30</div><div id="help">Drag a part from below onto its glowing outline · Drag empty space to rotate</div></div>
<div id="tray"></div>
<nav><button id="bReset">↺ Reset</button><button id="bHint">◎ Hint</button><button id="bCC">⚙ Control</button><button id="pwr">⏻ Power</button></nav>
</div>
<div id="toast"></div>
<div id="cc">
<h3>CONTROL CENTER</h3>
<label>Machine Color</label><div class="sw" id="colors"></div>
<label>Background</label><div class="row"><button data-bg="dark" class="act">Dark</button><button data-bg="light">Light</button></div>
<label>Placement Guide</label><div class="row"><button data-g="1" class="act">On</button><button data-g="0">Off</button></div>
<label>Auto Rotate</label><div class="row"><button data-r="1">On</button><button data-r="0" class="act">Off</button></div>
<label>Assembly</label><div class="row"><button id="auto">Auto Build</button><button id="shuf">Shuffle</button></div>
<label>Scan Mode (when ON)</label><div class="row"><button data-m="ref" class="act">Refraction</button><button data-m="topo">Topography</button></div>
</div>

<script type="module">
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

/* ================= PART LIST (30) ================= */
const PARTS = [
 ["feet","Rubber Feet","#ef4444"],["bottomPlate","Bottom Plate","#f97316"],["baseBody","Base Housing","#3b82f6"],
 ["labelPlate","Label Plate","#94a3b8"],["powerPort","Power Socket","#a3e635"],["powerSwitch","Power Switch","#dc2626"],
 ["carriageTrim","Carriage Rail","#eab308"],["carriage","Sliding Carriage","#0ea5e9"],["joyCollar","Joystick Collar","#f59e0b"],
 ["joyStem","Joystick Stem","#cbd5e1"],["joyGrip","Joystick Grip","#f43f5e"],["lockLever","Lock Lever","#84cc16"],
 ["printer","Thermal Printer","#f472b6"],["column","Lift Column","#2563eb"],["sideDoor","Side Door","#10b981"],
 ["collar","Column Collar","#14b8a6"],["head","Measuring Head","#38bdf8"],["topCover","Top Cover","#64748b"],
 ["bezel","Screen Bezel","#60a5fa"],["screen","LCD Screen","#22d3ee"],["buttonsL","Left Keys","#34d399"],
 ["buttonsR","Right Keys","#4ade80"],["badge","Model Badge","#fde047"],["lens","Objective Lens","#67e8f9"],
 ["ledRing","LED Ring","#facc15"],["chinBase","Chin Rest Base","#fb923c"],["chinPoles","Chin Rest Poles","#a8a29e"],
 ["chinCup","Chin Cup","#fda4af"],["forehead","Forehead Rest","#2dd4bf"],["eyeMarkers","Eye Markers","#e11d48"]
].map(([id,name,color],i)=>({id,name,color,n:i+1}));
const TOTAL=30, H=Math.PI/2, JX=-0.22, JZ=0.2;
const PALETTES={White:["#f4f6f8","#d3dbe2"],Ivory:["#f7f2e8","#dcd2c0"],Sky:["#e7f3fb","#a9cde6"],Mint:["#eaf8f2","#a9dcc8"],Graphite:["#9aa3ac","#5b636c"]};

/* ================= MATERIALS ================= */
function badgeTex(){const c=document.createElement("canvas");c.width=512;c.height=128;const g=c.getContext("2d");
 g.fillStyle="#f4f6f8";g.fillRect(0,0,512,128);g.fillStyle="#3d4650";g.font="bold 76px Arial";g.textBaseline="middle";g.fillText("KR-9000",40,66);
 g.fillStyle="#1aa7c4";g.fillRect(40,108,140,6);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}
const M={
 body:new THREE.MeshPhysicalMaterial({color:PALETTES.White[0],roughness:.35,clearcoat:.6,clearcoatRoughness:.25}),
 bodyDark:new THREE.MeshPhysicalMaterial({color:PALETTES.White[1],roughness:.4,clearcoat:.3}),
 bezel:new THREE.MeshStandardMaterial({color:"#8b97a3",roughness:.3,metalness:.55}),
 metal:new THREE.MeshStandardMaterial({color:"#d4dae0",roughness:.22,metalness:.92}),
 dark:new THREE.MeshStandardMaterial({color:"#3a424b",roughness:.45,metalness:.15}),
 rubber:new THREE.MeshStandardMaterial({color:"#15181c",roughness:.8}),
 glass:new THREE.MeshPhysicalMaterial({color:"#123b52",roughness:.04,metalness:.1,clearcoat:1,emissive:"#00ffff",emissiveIntensity:0}),
 accent:new THREE.MeshStandardMaterial({color:"#1aa7c4",roughness:.35,metalness:.2}),
 red:new THREE.MeshStandardMaterial({color:"#d9283a",roughness:.35,emissive:"#ff2030",emissiveIntensity:0}),
 white:new THREE.MeshStandardMaterial({color:"#fbfcfd",roughness:.5}),
 led:new THREE.MeshStandardMaterial({color:"#d6f6ff",roughness:.3,emissive:"#8ff0ff",emissiveIntensity:0,toneMapped:false}),
 screen:new THREE.MeshBasicMaterial({color:"#0a1118",toneMapped:false}),
 vent:new THREE.MeshStandardMaterial({color:"#1d2329",roughness:.7}),
 badge:new THREE.MeshStandardMaterial({map:badgeTex(),roughness:.5})
};
const ghostOf=(color,op)=>{const m=new THREE.MeshBasicMaterial({color,transparent:true,opacity:op,depthWrite:false});return new Proxy({}, {get:()=>m})};
const GHOST=ghostOf("#6fe3ff",.13), GHOST_HI=ghostOf("#ffd23f",.5);

/* ================= SHAPE HELPERS ================= */
function B(g,s,p,m,r=.012,rot=[0,0,0]){const rad=Math.max(.0005,Math.min(r,Math.min(...s)/2-.0005));
 const me=new THREE.Mesh(new RoundedBoxGeometry(s[0],s[1],s[2],3,rad),m);me.position.set(...p);me.rotation.set(...rot);g.add(me)}
function C(g,r,r2,h,p,m,rot=[0,0,0],seg=32){const me=new THREE.Mesh(new THREE.CylinderGeometry(r,r2??r,h,seg),m);me.position.set(...p);me.rotation.set(...rot);g.add(me)}
function T(g,r,tube,p,m,rot=[0,0,0]){const me=new THREE.Mesh(new THREE.TorusGeometry(r,tube,12,40),m);me.position.set(...p);me.rotation.set(...rot);g.add(me)}
function P(g,w,h,p,m,rot=[0,0,0]){const me=new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);me.position.set(...p);me.rotation.set(...rot);g.add(me)}

/* ================= PART SHAPES (KR-9000 style) ================= */
const BUILD={
 feet:(g,m)=>[[-.55,-.36],[.55,-.36],[-.55,.36],[.55,.36]].forEach(([x,z])=>C(g,.05,.055,.06,[x,.03,z],m.rubber)),
 bottomPlate:(g,m)=>B(g,[1.4,.08,.95],[0,.1,0],m.bodyDark,.03),
 baseBody:(g,m)=>B(g,[1.36,.3,.92],[0,.295,0],m.body,.06),
 labelPlate:(g,m)=>{B(g,[.62,.14,.012],[-.12,.29,.462],m.metal,.004);[.32,.29,.26].forEach(y=>B(g,[.5,.008,.004],[-.12,y,.47],m.vent,.001))},
 powerPort:(g,m)=>{B(g,[.014,.12,.16],[.684,.29,.18],m.dark,.004);B(g,[.008,.05,.06],[.692,.29,.18],m.vent,.002)},
 powerSwitch:(g,m)=>{B(g,[.02,.09,.07],[.686,.29,.32],m.dark,.005);B(g,[.014,.06,.04],[.696,.3,.32],m.red,.004,[0,0,.15])},
 carriageTrim:(g,m)=>B(g,[1.33,.025,.9],[0,.457,0],m.bodyDark,.01),
 carriage:(g,m)=>B(g,[1.3,.2,.88],[0,.57,0],m.body,.08),
 joyCollar:(g,m)=>{C(g,.075,null,.02,[JX,.68,JZ],m.metal);C(g,.05,null,.015,[JX,.695,JZ],m.rubber)},
 joyStem:(g,m)=>{C(g,.022,null,.2,[JX,.8,JZ],m.metal);C(g,.032,null,.03,[JX,.73,JZ],m.metal,[0,0,0],6)},
 joyGrip:(g,m)=>{C(g,.052,.062,.22,[JX,.98,JZ],m.rubber);const s=new THREE.Mesh(new THREE.SphereGeometry(.052,28,16,0,Math.PI*2,0,H),m.rubber);s.position.set(JX,1.09,JZ);g.add(s);
   T(g,.06,.006,[JX,.9,JZ],m.dark,[H,0,0]);T(g,.058,.006,[JX,.94,JZ],m.dark,[H,0,0])},
 lockLever:(g,m)=>{B(g,[.09,.035,.11],[.08,.685,.2],m.dark,.008,[-.25,0,0]);B(g,[.04,.02,.03],[.08,.705,.24],m.vent,.004)},
 printer:(g,m)=>{B(g,[.26,.09,.24],[.45,.715,.24],m.bodyDark,.02);B(g,[.18,.01,.012],[.45,.74,.362],m.vent,.003);B(g,[.14,.003,.12],[.45,.745,.42],m.white,.001,[-.4,0,0])},
 column:(g,m)=>B(g,[.66,.62,.52],[.05,.98,-.14],m.body,.04),
 sideDoor:(g,m)=>{B(g,[.014,.34,.26],[.386,.98,-.16],m.bodyDark,.004);B(g,[.008,.03,.05],[.394,1.1,-.16],m.vent,.003)},
 collar:(g,m)=>B(g,[.7,.05,.56],[.05,1.3,-.14],m.bodyDark,.015),
 head:(g,m)=>B(g,[.96,.62,.98],[.05,1.63,-.1],m.body,.12),
 topCover:(g,m)=>B(g,[.9,.07,.92],[.05,1.955,-.12],m.dark,.035),
 bezel:(g,m)=>B(g,[.74,.52,.06],[0,1.64,.39],m.bezel,.06),
 screen:(g,m)=>{B(g,[.54,.42,.012],[0,1.64,.421],m.dark,.004);P(g,.47,.367,[0,1.64,.4285],m.screen)},
 buttonsL:(g,m)=>[1.76,1.64,1.52].forEach(y=>B(g,[.07,.045,.02],[-.31,y,.425],m.white,.008)),
 buttonsR:(g,m)=>[1.76,1.64,1.52].forEach(y=>B(g,[.07,.045,.02],[.31,y,.425],m.white,.008)),
 badge:(g,m)=>P(g,.36,.09,[.532,1.68,-.02],m.badge,[0,H,0]),
 lens:(g,m)=>{C(g,.13,.11,.1,[0,1.6,-.63],m.dark,[H,0,0]);C(g,.085,null,.012,[0,1.6,-.682],m.glass,[H,0,0])},
 ledRing:(g,m)=>T(g,.098,.008,[0,1.6,-.684],m.led),
 chinBase:(g,m)=>{B(g,[.94,.06,.12],[0,.5,-.64],m.dark,.015);B(g,[.24,.1,.2],[0,.5,-.53],m.dark,.015)},
 chinPoles:(g,m)=>[-.44,.44].forEach(x=>{C(g,.02,null,1.28,[x,1.15,-.64],m.metal);C(g,.028,null,.03,[x,1.8,-.64],m.dark)}),
 chinCup:(g,m)=>{B(g,[.86,.05,.06],[0,1.28,-.64],m.bodyDark,.01);B(g,[.24,.035,.15],[0,1.32,-.7],m.white,.015);C(g,.005,null,.04,[-.08,1.35,-.7],m.metal);C(g,.005,null,.04,[.08,1.35,-.7],m.metal)},
 forehead:(g,m)=>{C(g,.022,null,.9,[0,1.78,-.64],m.bodyDark,[0,0,H]);C(g,.035,null,.5,[0,1.72,-.69],m.white,[0,0,H])},
 eyeMarkers:(g,m)=>[-.44,.44].forEach(x=>{T(g,.03,.007,[x,1.6,-.64],m.red,[H,0,0]);B(g,[.04,.008,.008],[x*.9,1.6,-.64],m.red,.002)})
};

/* ================= SCENE ================= */
const stage=document.getElementById("stage");
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.outputColorSpace=THREE.SRGBColorSpace;
stage.prepend(renderer.domElement);
const scene=new THREE.Scene();
const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromScene(new RoomEnvironment(),.04).texture;
scene.add(new THREE.AmbientLight(0xffffff,.35));
const d1=new THREE.DirectionalLight(0xffffff,1.5);d1.position.set(3,5,4);scene.add(d1);
const d2=new THREE.DirectionalLight(0xbfe6ff,.5);d2.position.set(-4,2,-2);scene.add(d2);
const camera=new THREE.PerspectiveCamera(38,1,.05,60);
const TARGET=new THREE.Vector3(0,1,0);
const controls=new OrbitControls(camera,renderer.domElement);
controls.target.copy(TARGET);controls.enablePan=false;controls.enableDamping=true;controls.minDistance=2.2;controls.maxDistance=9;controls.maxPolarAngle=1.5;controls.autoRotateSpeed=.9;

// floor + soft shadow
function floorTex(){const c=document.createElement("canvas");c.width=c.height=512;const g=c.getContext("2d");g.fillStyle="#fff";g.fillRect(0,0,512,512);
 g.strokeStyle="rgba(0,0,0,.1)";g.lineWidth=2;for(let i=0;i<=512;i+=64){g.beginPath();g.moveTo(i,0);g.lineTo(i,512);g.stroke();g.beginPath();g.moveTo(0,i);g.lineTo(512,i);g.stroke()}
 const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(4,4);t.colorSpace=THREE.SRGBColorSpace;return t}
const floorMat=new THREE.MeshStandardMaterial({map:floorTex(),roughness:.85,color:"#2a3d4a"});
const floor=new THREE.Mesh(new THREE.CircleGeometry(2.6,64),floorMat);floor.rotation.x=-H;scene.add(floor);
const sc=document.createElement("canvas");sc.width=sc.height=256;{const g=sc.getContext("2d");const gr=g.createRadialGradient(128,128,10,128,128,128);gr.addColorStop(0,"rgba(0,0,0,.6)");gr.addColorStop(1,"rgba(0,0,0,0)");g.fillStyle=gr;g.fillRect(0,0,256,256)}
const shadow=new THREE.Mesh(new THREE.PlaneGeometry(2.2,2),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(sc),transparent:true,depthWrite:false}));shadow.rotation.x=-H;shadow.position.y=.003;scene.add(shadow);

// parts, ghosts, centers
const groups={},ghosts={},hiGhosts={},info={},offsets={};
for(const p of PARTS){
 const g=new THREE.Group();BUILD[p.id](g,M);g.visible=false;scene.add(g);groups[p.id]=g;
 const gh=new THREE.Group();BUILD[p.id](gh,GHOST);scene.add(gh);ghosts[p.id]=gh;
 const hg=new THREE.Group();BUILD[p.id](hg,GHOST_HI);hg.visible=false;scene.add(hg);hiGhosts[p.id]=hg;
 g.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(g);
 info[p.id]={c:box.getCenter(new THREE.Vector3()),r:box.getSize(new THREE.Vector3()).length()/2};
 offsets[p.id]=new THREE.Vector3();
}

/* ================= SCREEN (power on) ================= */
const SW=512,SH=400;const scrC=document.createElement("canvas");scrC.width=SW;scrC.height=SH;const sg=scrC.getContext("2d");
const scrTex=new THREE.CanvasTexture(scrC);scrTex.colorSpace=THREE.SRGBColorSpace;
const topoC=document.createElement("canvas");topoC.width=topoC.height=120;
function hsl(h,s,l){const k=n=>(n+h/30)%12,a=s*Math.min(l,1-l),f=n=>l-a*Math.max(-1,Math.min(k(n)-3,9-k(n),1));return[f(0)*255,f(8)*255,f(4)*255]}
function drawEye(g,cx,cy,t){
 const bg=g.createRadialGradient(cx,cy,20,cx,cy,220);bg.addColorStop(0,"#4a5058");bg.addColorStop(1,"#07090b");g.fillStyle=bg;g.fillRect(0,40,SW,SH-90);
 for(let i=0;i<6;i++){const a=i/6*Math.PI*2+Math.PI/6,x=cx+Math.cos(a)*118,y=cy+Math.sin(a)*100;const lg=g.createRadialGradient(x,y,2,x,y,30);lg.addColorStop(0,"rgba(255,255,255,.95)");lg.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=lg;g.beginPath();g.arc(x,y,30,0,7);g.fill()}
 const ir=g.createRadialGradient(cx,cy,20,cx,cy,78);ir.addColorStop(0,"#9aa0a6");ir.addColorStop(.6,"#5e646b");ir.addColorStop(1,"#22262a");g.fillStyle=ir;g.beginPath();g.arc(cx,cy,78,0,7);g.fill();
 for(let i=0;i<90;i++){const a=i/90*Math.PI*2;g.strokeStyle=`rgba(210,215,220,${.06+((i*37)%7)/60})`;g.lineWidth=1.2;g.beginPath();g.moveTo(cx+Math.cos(a)*30,cy+Math.sin(a)*30);g.lineTo(cx+Math.cos(a+.05)*74,cy+Math.sin(a+.05)*74);g.stroke()}
 g.strokeStyle="#15181b";g.lineWidth=5;g.beginPath();g.arc(cx,cy,78,0,7);g.stroke();
 g.fillStyle="#040506";g.beginPath();g.arc(cx,cy,27+4*Math.sin(t*1.3),0,7);g.fill();
 g.fillStyle="#ff3344";for(let i=0;i<8;i++){const a=i/8*Math.PI*2+t*.6;g.beginPath();g.arc(cx+Math.cos(a)*12,cy+Math.sin(a)*12,2.4,0,7);g.fill()}g.beginPath();g.arc(cx,cy,2.4,0,7);g.fill();
 const k=Math.max(0,Math.cos(t*.25)),ox=16*Math.sin(t*.9)*k,oy=10*Math.cos(t*1.1)*k;
 g.strokeStyle="#46f08c";g.lineWidth=2;g.beginPath();g.arc(cx+ox,cy+oy,40,0,7);g.stroke();g.beginPath();
 g.moveTo(cx+ox-56,cy+oy);g.lineTo(cx+ox-30,cy+oy);g.moveTo(cx+ox+30,cy+oy);g.lineTo(cx+ox+56,cy+oy);g.moveTo(cx+ox,cy+oy-56);g.lineTo(cx+ox,cy+oy-30);g.moveTo(cx+ox,cy+oy+30);g.lineTo(cx+ox,cy+oy+56);g.stroke();
 g.strokeStyle="rgba(255,255,255,.5)";g.lineWidth=1;g.strokeRect(cx-14,cy-14,28,28)}
function drawTopo(g,cx,cy,t){
 const c=topoC.getContext("2d"),img=c.createImageData(120,120),d=img.data,axis=.35+.25*Math.sin(t*.4);
 for(let y=0;y<120;y++)for(let x=0;x<120;x++){const dx=(x-60)/58,dy=(y-60)/58,r2=dx*dx+dy*dy,i=(y*120+x)*4;if(r2>1){d[i+3]=0;continue}
  const r=Math.sqrt(r2),th=Math.atan2(dy,dx),Pw=44.2-3.2*r2+1.7*Math.cos(2*(th-axis))*(.35+r)+.25*Math.sin(r*14-t*2);
  const n=Math.max(0,Math.min(1,(Pw-40)/6)),[a,b,cc]=hsl(240*(1-n),.85,.52);d[i]=a;d[i+1]=b;d[i+2]=cc;d[i+3]=255}
 c.putImageData(img,0,0);g.fillStyle="#05080c";g.fillRect(0,40,SW,SH-90);g.drawImage(topoC,cx-130,cy-130,260,260);
 g.strokeStyle="rgba(0,0,0,.35)";g.lineWidth=1;for(let r=26;r<=130;r+=26){g.beginPath();g.arc(cx,cy,r,0,7);g.stroke()}
 g.setLineDash([5,5]);g.strokeStyle="rgba(255,255,255,.7)";g.beginPath();g.moveTo(cx-Math.cos(axis)*135,cy-Math.sin(axis)*135);g.lineTo(cx+Math.cos(axis)*135,cy+Math.sin(axis)*135);g.stroke();g.setLineDash([]);
 const lg=g.createLinearGradient(0,70,0,300);for(let i=0;i<=6;i++){const[r,gg,b]=hsl(240*i/6,.85,.52);lg.addColorStop(i/6,`rgb(${r|0},${gg|0},${b|0})`)}g.fillStyle=lg;g.fillRect(SW-196,70,14,230)}
function drawScreen(t){const g=sg,cx=190,cy=190;
 if(mode=="ref")drawEye(g,cx,cy,t);else drawTopo(g,cx,cy,t);
 g.fillStyle="#0c2433";g.fillRect(0,0,SW,40);g.font="bold 20px Arial";
 g.fillStyle="#3fb8ff";g.fillText("VD 12",14,27);g.fillStyle="#ff9a2e";g.fillText("PD 64",110,27);g.fillStyle="#7ff0ff";g.fillText(mode=="ref"?"REF/KER":"TOPO",212,27);g.fillStyle="#46f08c";g.fillText("R",SW-40,27);
 for(let i=0;i<3;i++){g.fillStyle="#1f7a3c";g.fillRect(10,80+i*90,30,26);g.fillStyle="#59e38a";g.fillRect(16,86+i*90,18,14)}
 const px=SW-170;g.fillStyle="rgba(4,10,16,.82)";g.fillRect(px,48,162,SH-106);g.font="bold 15px Arial";
 const k=Math.floor(t/2.2)%3,R=[["-1.25","-0.50","175"],["-1.25","-0.75","178"],["-1.00","-0.50","176"]];
 g.fillStyle="#9fdcff";g.fillText("   S      C     A",px+6,70);
 R.forEach((r,i)=>{g.fillStyle=i==k?"#fff":"#6f8796";g.fillText(`${i+1} ${r[0]} ${r[1]} ${r[2]}`,px+6,96+i*24)});
 g.fillStyle="#46f08c";g.fillText("< -1.25 -0.50 176 >",px+4,172);g.fillStyle="#ffd36b";g.fillText("K1 43.25D  180",px+6,206);g.fillText("K2 44.00D   90",px+6,230);g.fillStyle="#9fdcff";g.fillText("CYL -0.75",px+6,256);
 g.fillStyle="#0c2433";g.fillRect(0,SH-50,SW,50);const pr=(t%2.2)/2.2;g.fillStyle="#123a50";g.fillRect(14,SH-30,300,12);g.fillStyle="#3fd8ff";g.fillRect(14,SH-30,300*pr,12);
 g.font="bold 16px Arial";g.fillStyle=pr>.92?"#46f08c":"#bfe9ff";g.fillText(pr>.92?"OK":"MEASURING",330,SH-18);
 g.fillStyle="rgba(255,255,255,.04)";for(let y=0;y<SH;y+=4)g.fillRect(0,y,SW,1);scrTex.needsUpdate=true}

/* ================= SOUND ================= */
let AC=null;function tone(f,d,type="sine",v=.12,delay=0,to){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state=="suspended")AC.resume();
 const t=AC.currentTime+delay,o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(to)o.frequency.exponentialRampToValueAtTime(to,t+d);
 g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.02)}catch(e){}}
const sfx={pick:()=>tone(420,.06,"triangle",.06),snap:()=>{tone(540,.07,"triangle");tone(900,.1,"sine",.1,.05)},tick:()=>tone(760,.05,"sine",.05),miss:()=>tone(220,.14,"sine",.06,0,140),
 on:()=>tone(300,.5,"sine",.12,0,1200),off:()=>tone(900,.35,"sine",.1,0,200),done:()=>[523,659,784,1046].forEach((f,i)=>tone(f,.25,"triangle",.09,i*.1))};

/* ================= STATE + UI ================= */
let placed={},dragging=null,hint=null,guide=true,powered=false,mode="ref",order=[],thumbs={};
const tray=document.getElementById("tray");
function shuffled(){const a=PARTS.map(p=>p.id);for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a}
function toast(t){const e=document.getElementById("toast");e.textContent=t;e.style.display="block";clearTimeout(e._t);e._t=setTimeout(()=>e.style.display="none",2300)}
function count(){return Object.keys(placed).length}
function buildTray(){tray.innerHTML="";order.forEach(id=>{if(placed[id])return;const p=PARTS.find(x=>x.id==id);const t=document.createElement("div");
 t.className="tile";t.dataset.id=id;t.style.setProperty("--c",p.color);t.innerHTML=`<b>${p.n}</b><img src="${thumbs[id]||""}" alt=""><span>${p.name}</span>`;
 t.addEventListener("pointerdown",e=>startDrag(e,id,t));tray.appendChild(t)});
 if(count()==TOTAL)tray.innerHTML=`<div class="done">All parts fitted ✓ Press Power</div>`}
function refresh(){const n=count();document.querySelector("#bar i").style.width=n/TOTAL*100+"%";document.getElementById("count").textContent=`${n}/${TOTAL}`;
 document.getElementById("help").style.display=n?"none":"";
 for(const p of PARTS){groups[p.id].visible=!!placed[p.id]||dragging==p.id;ghosts[p.id].visible=!placed[p.id]&&guide&&hint!=p.id&&dragging!=p.id;hiGhosts[p.id].visible=!placed[p.id]&&(hint==p.id||dragging==p.id)}
 const pw=document.getElementById("pwr");pw.classList.toggle("ready",n==TOTAL&&!powered);pw.classList.toggle("on",powered)}
function place(id,fly){if(placed[id])return;placed[id]=1;if(fly&&offsets[id].lengthSq()<1e-6)offsets[id].set(0,1.6,.3);if(dragging==id)dragging=null;
 tray.querySelector(`[data-id="${id}"]`)?.remove();refresh();if(count()==TOTAL){toast("Assembly complete! Press Power");sfx.done();buildTray()}}

/* ================= DRAG ================= */
const ptr={x:0,y:0,touch:false},ray=new THREE.Raycaster(),ndc=new THREE.Vector2(),plane=new THREE.Plane(),hit=new THREE.Vector3(),nrm=new THREE.Vector3();
function follow(id){const inf=info[id],r=renderer.domElement.getBoundingClientRect(),py=ptr.y-(ptr.touch?70:0);
 ndc.set((ptr.x-r.left)/r.width*2-1,-((py-r.top)/r.height)*2+1);ray.setFromCamera(ndc,camera);camera.getWorldDirection(nrm).negate();
 plane.setFromNormalAndCoplanarPoint(nrm,inf.c);if(ray.ray.intersectPlane(plane,hit))offsets[id].copy(hit).sub(inf.c)}
function toScreen(v,r){const p=v.clone().project(camera);return[r.left+(p.x+1)/2*r.width,r.top+(1-p.y)/2*r.height]}
let curTile=null;
function startDrag(e,id,tile){if(dragging)return;e.preventDefault();ptr.x=e.clientX;ptr.y=e.clientY;ptr.touch=e.pointerType!="mouse";dragging=id;curTile=tile;tile.classList.add("drag");
 controls.enabled=false;follow(id);refresh();sfx.pick();
 addEventListener("pointermove",move,{passive:true});addEventListener("pointerup",end);addEventListener("pointercancel",cancel)}
function move(e){ptr.x=e.clientX;ptr.y=e.clientY}
function stop(){removeEventListener("pointermove",move);removeEventListener("pointerup",end);removeEventListener("pointercancel",cancel);controls.enabled=true}
function cancel(){stop();const id=dragging;dragging=null;offsets[id].set(0,0,0);curTile?.classList.remove("drag");refresh()}
function end(e){move(e);stop();const id=dragging,inf=info[id],r=renderer.domElement.getBoundingClientRect();
 if(ptr.y<=r.bottom){follow(id);const[tx,ty]=toScreen(inf.c,r),[cx,cy]=toScreen(inf.c.clone().add(offsets[id]),r);
  const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),[ex,ey]=toScreen(inf.c.clone().addScaledVector(right,inf.r),r);
  if(Math.hypot(cx-tx,cy-ty)<Math.max(55,Math.hypot(ex-tx,ey-ty)*.45)){place(id);sfx.snap();return}}
 dragging=null;offsets[id].set(0,0,0);curTile?.classList.remove("drag");refresh();sfx.miss()}

/* ================= THUMBNAILS ================= */
function makeThumbs(){const r=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});r.setPixelRatio(1);r.setSize(168,152,false);
 r.outputColorSpace=THREE.SRGBColorSpace;r.toneMapping=THREE.ACESFilmicToneMapping;const pm=new THREE.PMREMGenerator(r),env=pm.fromScene(new RoomEnvironment(),.04).texture;
 const s=new THREE.Scene();s.environment=env;const dl=new THREE.DirectionalLight(0xffffff,1.6);dl.position.set(2,3,2);s.add(dl,new THREE.AmbientLight(0xffffff,.4));
 const cam=new THREE.PerspectiveCamera(30,168/152,.01,50),dir=new THREE.Vector3(.8,.6,1.4).normalize();
 for(const p of PARTS){const c=groups[p.id].clone(true);c.visible=true;c.position.set(0,0,0);s.add(c);c.updateMatrixWorld(true);
  const b=new THREE.Box3().setFromObject(c),ctr=b.getCenter(new THREE.Vector3()),rad=Math.max(.05,b.getSize(new THREE.Vector3()).length()/2);
  cam.position.copy(ctr).addScaledVector(dir,rad/Math.sin(THREE.MathUtils.degToRad(15))*.92);cam.lookAt(ctr);r.render(s,cam);thumbs[p.id]=r.domElement.toDataURL();s.remove(c)}
 env.dispose();pm.dispose();r.dispose();r.forceContextLoss()}

/* ================= CAMERA FIT + LOOP ================= */
function resize(){const w=stage.clientWidth,h=stage.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();
 const vh=Math.tan(THREE.MathUtils.degToRad(19)),dist=Math.max(1.25/vh,1.05/(vh*camera.aspect))+.4;
 camera.position.copy(TARGET).addScaledVector(new THREE.Vector3(.62,.42,1).normalize(),dist);controls.update()}
addEventListener("resize",resize);
const clock=new THREE.Clock();let lastScr=-1;
function loop(){requestAnimationFrame(loop);const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
 if(dragging)follow(dragging);const keep=Math.exp(-11*dt);
 for(const p of PARTS){const o=offsets[p.id];if(placed[p.id]&&dragging!=p.id){o.multiplyScalar(keep);if(o.lengthSq()<1e-8)o.set(0,0,0)}groups[p.id].position.copy(o);hiGhosts[p.id].position.set(0,0,0)}
 M.led.emissiveIntensity=powered?2.4+.8*Math.sin(t*4):0;M.glass.emissiveIntensity=powered?.25:0;M.red.emissiveIntensity=powered?.35:0;
 if(powered&&t-lastScr>.06){lastScr=t;drawScreen(t)}
 controls.update();renderer.render(scene,camera)}

/* ================= BUTTONS ================= */
function setColor(k){M.body.color.set(PALETTES[k][0]);M.bodyDark.color.set(PALETTES[k][1]);document.querySelectorAll("#colors b").forEach(b=>b.classList.toggle("act",b.dataset.k==k))}
Object.keys(PALETTES).forEach(k=>{const b=document.createElement("b");b.dataset.k=k;b.style.background=PALETTES[k][0];b.onclick=()=>setColor(k);document.getElementById("colors").appendChild(b)});setColor("White");
function setPower(on){powered=on;M.screen.map=on?scrTex:null;M.screen.color.set(on?"#fff":"#0a1118");M.screen.needsUpdate=true;refresh()}
document.getElementById("pwr").onclick=()=>{if(count()<TOTAL){toast("Complete all 30 parts first");return}setPower(!powered);powered?sfx.on():sfx.off()};
document.getElementById("bReset").onclick=()=>{placed={};setPower(false);for(const p of PARTS)offsets[p.id].set(0,0,0);order=shuffled();buildTray();refresh();document.getElementById("cc").style.display="none"};
document.getElementById("bHint").onclick=()=>{const id=order.find(x=>!placed[x]);if(!id)return;hint=id;refresh();const t=tray.querySelector(`[data-id="${id}"]`);
 if(t){t.classList.add("hint");t.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}setTimeout(()=>{hint=null;t?.classList.remove("hint");refresh()},1600)};
const cc=document.getElementById("cc");document.getElementById("bCC").onclick=()=>cc.style.display=cc.style.display=="block"?"none":"block";
const seg=(attr,fn)=>cc.querySelectorAll(`[${attr}]`).forEach(b=>b.onclick=()=>{cc.querySelectorAll(`[${attr}]`).forEach(x=>x.classList.toggle("act",x==b));fn(b.getAttribute(attr))});
seg("data-bg",v=>{stage.classList.toggle("light",v=="light");floorMat.color.set(v=="light"?"#e9eef2":"#2a3d4a")});
seg("data-g",v=>{guide=v=="1";refresh()});
seg("data-r",v=>controls.autoRotate=v=="1");
seg("data-m",v=>mode=v);
document.getElementById("auto").onclick=()=>{cc.style.display="none";const left=PARTS.map(p=>p.id).filter(id=>!placed[id]);let i=0;
 const iv=setInterval(()=>{if(i>=left.length)return clearInterval(iv);place(left[i++],true);sfx.tick()},130)};
document.getElementById("shuf").onclick=()=>{order=shuffled();buildTray()};
document.addEventListener("touchmove",e=>{if(!e.target.closest("#tray")&&!e.target.closest("#cc"))e.preventDefault()},{passive:false});

/* ================= START ================= */
resize();makeThumbs();order=shuffled();buildTray();refresh();document.getElementById("load").remove();loop();
</script>
</body>
</html>

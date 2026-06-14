/* ===== James Swing shared engine: styles, catalog, chrome, agent strip ===== */
(function(){
const CSS=`
:root{--blue:#0a3d8f;--blue2:#1565d8;--sky:#3b9cff;--ink:#0c1424;--paper:#fff;--grey:#5d6b82;--line:#e2e8f1;--red:#c8102e;--soft:#eef2f8;--steel:#8aa0bd;--gold:#e2a52b;--green:#15803d;--shadow:0 10px 30px rgba(10,61,143,.10)}
*{box-sizing:border-box}
body{margin:0;font-family:'Segoe UI',system-ui,Arial,sans-serif;color:var(--ink);background:#fff;line-height:1.45}
a{color:inherit;text-decoration:none}
.wrap{max-width:1280px;margin:0 auto;padding:0 22px}
.promo{background:#000;color:#fff;text-align:center;font-size:12.5px;font-weight:700;letter-spacing:.5px;padding:9px;text-transform:uppercase}
.promo a{color:var(--sky);text-decoration:underline;cursor:pointer}
.utility{border-bottom:1px solid var(--line);font-size:11px;font-weight:700;color:var(--grey);text-transform:uppercase;letter-spacing:.5px}
.utility .wrap{display:flex;justify-content:space-between;padding:6px 22px}
header.site .wrap{display:flex;align-items:center;gap:22px;padding:16px 22px}
.logo{display:flex;align-items:center;gap:9px;font-weight:800;font-size:26px;font-style:italic;letter-spacing:-.5px}
.logo .ball{width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#bcd3f0);box-shadow:inset -3px -3px 6px rgba(0,0,0,.2);border:1px solid #cfe}
.logo span{color:var(--blue)} .logo em{color:var(--red);font-style:italic}
.search{flex:1;display:flex;border:2px solid var(--ink);border-radius:3px;overflow:hidden;max-width:560px}
.search input{flex:1;border:none;padding:11px 14px;font-size:14px;outline:none}
.search button{border:none;background:var(--red);color:#fff;font-weight:800;padding:0 22px;cursor:pointer;letter-spacing:.5px}
.htools{display:flex;align-items:center;gap:18px;margin-left:auto;font-size:12px;font-weight:700;color:var(--grey)}
.htools .store small{display:block;color:var(--ink);font-size:13px}
.icons{display:flex;gap:14px;font-size:18px}
@media(max-width:860px){.search,.htools{display:none}}
nav.cats{background:#000}
nav.cats .wrap{display:flex;justify-content:center;flex-wrap:wrap;gap:24px;padding:13px 22px}
nav.cats a{color:#fff;font-size:13px;font-weight:700;letter-spacing:.5px;cursor:pointer;text-transform:uppercase}
nav.cats a:hover,nav.cats a.on{color:var(--sky)}
.sechead{text-align:center;font-size:24px;font-weight:900;font-style:italic;letter-spacing:.5px;margin:0}
.sechead.sub{font-size:14px;font-weight:700;color:var(--grey);font-style:italic}
.cta{display:inline-block;background:var(--red);color:#fff;border:none;border-radius:4px;padding:14px 30px;font-weight:800;font-size:15px;letter-spacing:1px;cursor:pointer;text-transform:uppercase;transition:.15s}
.cta:hover{transform:translateY(-2px);box-shadow:var(--shadow)} .cta.ghost{background:transparent;border:2px solid #fff;color:#fff}
.cta.blue{background:var(--blue)}
/* product cards */
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
@media(max-width:1000px){.grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.grid{grid-template-columns:1fr}}
.fcard{border:1px solid var(--line);border-radius:8px;padding:18px;display:flex;flex-direction:column;box-shadow:var(--shadow);background:#fff}
.fcard .ph{height:150px;background:linear-gradient(135deg,#eef3fb,#d7e4f8);border-radius:6px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;position:relative}
.fcard .ph svg{width:118px;height:118px;filter:drop-shadow(0 6px 8px rgba(15,30,60,.18))}
.fcard .cond{position:absolute;top:8px;left:8px;background:var(--blue);color:#fff;font-size:10.5px;font-weight:800;padding:3px 9px;border-radius:14px;text-transform:uppercase}
.fcard .ai{position:absolute;top:8px;right:8px;background:#eaf2ff;color:var(--blue);font-size:10px;font-weight:800;padding:3px 8px;border-radius:14px;border:1px solid #cfe0fb}
.fbrand{font-weight:900;font-style:italic;font-size:18px}
.fmodel{color:var(--red);font-weight:800;font-style:italic;font-size:14px;margin-bottom:6px}
.fmsrp{font-size:12px;color:var(--grey);text-decoration:line-through}
.flabel{font-size:12px;color:var(--grey);margin-top:2px}
.fprice{font-size:24px;font-weight:900;font-style:italic;margin:2px 0 12px}
.shopnow{margin-top:auto;text-align:center;background:var(--red);color:#fff;border:none;padding:11px;border-radius:4px;font-weight:800;letter-spacing:.5px;cursor:pointer;text-transform:uppercase;font-size:13px;display:block}
.shopnow:hover{background:#a50d26}
/* agent strip */
.agentstrip{background:linear-gradient(135deg,#0a1326,#13234a);color:#fff;border-radius:14px;padding:18px 20px;margin:22px 0;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.agentstrip .lab{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--sky);font-weight:800}
.agentstrip h3{margin:2px 0 0;font-size:16px}
.agentchips{display:flex;gap:10px;flex-wrap:wrap;margin-left:auto}
.agentchip{background:rgba(255,255,255,.08);border:1px solid #2a3b59;border-radius:10px;padding:8px 12px;font-size:12.5px;font-weight:700;color:#dce8ff;cursor:pointer;display:flex;align-items:center;gap:7px;transition:.15s}
.agentchip:hover{background:var(--blue2);border-color:var(--blue2)}
.agentchip .d{width:8px;height:8px;border-radius:50%;background:#3ad17a;box-shadow:0 0 6px #3ad17a}
/* footer */
footer.site{background:#000;color:#9fb0c8;margin-top:50px}
footer.site .fnewsletter{border-bottom:1px solid #1b2436}
footer.site .fnewsletter .wrap{display:flex;flex-wrap:wrap;gap:30px;justify-content:space-between;align-items:center;padding:24px 22px}
footer.site .fnewsletter input{border:1px solid #33425e;background:#0b1322;color:#fff;padding:11px 14px;font-size:13px;width:240px;border-radius:3px}
footer.site .social{display:flex;gap:10px;font-size:18px}
.fcols{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding:34px 22px;max-width:1280px;margin:0 auto}
@media(max-width:800px){.fcols{grid-template-columns:repeat(2,1fr)}}
.fcols h4{color:#fff;font-size:14px;font-weight:800;letter-spacing:.5px;margin:0 0 14px;text-transform:uppercase}
.fcols a{display:block;font-size:13px;margin-bottom:9px;color:#9fb0c8;cursor:pointer}
.fcols a:hover{color:#fff}
.fbottom{border-top:1px solid #1b2436;text-align:center;font-size:11.5px;color:#6a7d97;padding:16px}
.toast{position:fixed;bottom:84px;left:50%;transform:translateX(-50%) translateY(90px);background:var(--ink);color:#fff;padding:13px 24px;border-radius:8px;font-weight:700;box-shadow:0 12px 30px rgba(0,0,0,.3);transition:.3s;z-index:150}
.toast.show{transform:translateX(-50%) translateY(0)}
`;
const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);

/* ---- catalog ---- */
window.SVG={
 "Driver":`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="88" y1="12" x2="50" y2="66" stroke="#9aa7bd" stroke-width="5" stroke-linecap="round"/><line x1="86" y1="14" x2="96" y2="5" stroke="#1f2d44" stroke-width="7" stroke-linecap="round"/><ellipse cx="48" cy="82" rx="38" ry="27" fill="#1f2d44"/><ellipse cx="39" cy="74" rx="13" ry="8" fill="#33456b"/><circle cx="30" cy="86" r="3.5" fill="#cfd8e6"/></svg>`,
 "Iron Set":`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="82" y1="12" x2="52" y2="70" stroke="#9aa7bd" stroke-width="5" stroke-linecap="round"/><path d="M30 64 L74 86 q9 4 5 14 l-3 6 q-4 7 -12 3 L26 90 q-8 -4 -4 -14 z" fill="#c7cfdb"/><line x1="36" y1="74" x2="62" y2="88" stroke="#9aa7bd" stroke-width="1.6"/><line x1="33" y1="80" x2="59" y2="94" stroke="#9aa7bd" stroke-width="1.6"/></svg>`,
 "Wedge":`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="10" x2="52" y2="68" stroke="#9aa7bd" stroke-width="5" stroke-linecap="round"/><path d="M28 60 L74 84 q10 5 6 16 l-4 8 q-4 8 -13 4 L24 92 q-9 -4 -5 -16 z" fill="#aab4c4"/><line x1="34" y1="72" x2="62" y2="88" stroke="#7f8ba0" stroke-width="1.6"/></svg>`,
 "Putter":`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="60" y1="8" x2="60" y2="64" stroke="#9aa7bd" stroke-width="5" stroke-linecap="round"/><rect x="26" y="64" width="68" height="30" rx="7" fill="#1f2d44"/><rect x="55" y="64" width="10" height="22" fill="#c8102e"/><circle cx="38" cy="79" r="4" fill="#33456b"/><circle cx="82" cy="79" r="4" fill="#33456b"/></svg>`
};
window.PRODUCTS=[
 {id:1,b:"Cobra",m:"DS-Adapt X Driver",t:"Driver",cond:"9 · Above Avg",msrp:549.99,price:209.99,flex:"Stiff",dex:"RH",loft:"10.5°",blurb:"Adjustable, forgiving, and long off the tee."},
 {id:2,b:"Ping",m:"G430 Max Driver",t:"Driver",cond:"8 · Average",msrp:549.99,price:279.99,flex:"Regular",dex:"RH",loft:"10.5°",blurb:"Maximum forgiveness for straighter drives."},
 {id:3,b:"Callaway",m:"Paradym Driver",t:"Driver",cond:"9 · Above Avg",msrp:599.99,price:259.99,flex:"Stiff",dex:"RH",loft:"9°",blurb:"Fast ball speed with a clean, modern look."},
 {id:4,b:"Titleist",m:"TSR3 Driver",t:"Driver",cond:"9 · Above Avg",msrp:599.99,price:299.99,flex:"Stiff",dex:"RH",loft:"9°",blurb:"A players' driver with precise adjustability."},
 {id:5,b:"TaylorMade",m:"P790 Irons 4-PW",t:"Iron Set",cond:"8 · Average",msrp:1399.99,price:749.99,flex:"Stiff",dex:"RH",loft:"4-PW",blurb:"Players-distance irons with forged feel."},
 {id:6,b:"Ping",m:"i230 Irons 4-PW",t:"Iron Set",cond:"9 · Above Avg",msrp:1450.00,price:799.99,flex:"Regular",dex:"RH",loft:"4-PW",blurb:"Tour-level control with a compact profile."},
 {id:7,b:"Mizuno",m:"JPX 923 Irons",t:"Iron Set",cond:"8 · Average",msrp:1100.00,price:579.99,flex:"Regular",dex:"RH",loft:"5-PW",blurb:"Soft feel and easy distance."},
 {id:8,b:"Titleist",m:"Vokey SM9 Wedge",t:"Wedge",cond:"8 · Average",msrp:179.99,price:99.99,flex:"Wedge",dex:"RH",loft:"56°",blurb:"Tour-proven spin and control."},
 {id:9,b:"Cleveland",m:"RTX ZipCore Wedge",t:"Wedge",cond:"7 · Below Avg",msrp:149.99,price:69.99,flex:"Wedge",dex:"RH",loft:"60°",blurb:"Great-value spin around the greens."},
 {id:10,b:"Scotty Cameron",m:"Newport 2 Putter",t:"Putter",cond:"8 · Average",msrp:449.99,price:279.99,flex:"—",dex:"RH",loft:"34\"",blurb:"Premium milled feel, classic blade."},
 {id:11,b:"Odyssey",m:"White Hot OG Putter",t:"Putter",cond:"8 · Average",msrp:249.99,price:119.99,flex:"—",dex:"RH",loft:"34\"",blurb:"Iconic soft insert at a great price."},
 {id:12,b:"TaylorMade",m:"Spider Tour Putter",t:"Putter",cond:"9 · Above Avg",msrp:349.99,price:159.99,flex:"—",dex:"RH",loft:"34\"",blurb:"High-MOI stability for a steady stroke."}
];
window.money=n=>"$"+Number(n).toFixed(2);
window.qp=k=>new URLSearchParams(location.search).get(k);
window.svgFor=t=>SVG[t]||SVG.Driver;

/* ---- chrome ---- */
const NAV=[["Drivers","shop.html?cat=Driver"],["Iron Sets","shop.html?cat=Iron%20Set"],["Trade + Sell","trade-in.html"],["Fitting","fitting.html"],["Shafts","shop.html"],["Fairway Woods","shop.html"],["Putters","shop.html?cat=Putter"],["Wedges","shop.html?cat=Wedge"],["Comparison Videos","agents-hub.html"]];
window.renderChrome=function(active){
 const top=document.createElement('div');
 top.innerHTML=`
 <div class="promo">⛳ NEW: AI TRADE-IN AGENT — VALUE YOUR CLUBS IN SECONDS · <a href="listing-agent.html" target="_blank">TRY IT NOW</a></div>
 <div class="utility"><div class="wrap"><span>🏌️ Lefties</span><span>Women's</span></div></div>
 <header class="site"><div class="wrap">
   <a class="logo" href="index.html"><span class="ball"></span><span>James</span><em>Swing</em></a>
   <form class="search" onsubmit="return false"><input placeholder="Search over 197,154 used golf clubs"><button>SEARCH</button></form>
   <div class="htools"><div class="store">📍 My Store<small>Select a store</small></div><div class="icons"><span>👤</span><span>📍</span><span>📞</span></div></div>
 </div></header>
 <nav class="cats"><div class="wrap">${NAV.map(([t,u])=>`<a href="${u}" class="${active===t?'on':''}">${t}</a>`).join("")}</div></nav>`;
 document.body.insertBefore(top,document.body.firstChild);

 const f=document.createElement('footer');f.className='site';
 f.innerHTML=`
 <div class="fnewsletter"><div class="wrap">
   <form onsubmit="window.toast&&toast('Thanks for subscribing!');return false"><input placeholder="Enter your email address"> <button class="cta blue" style="padding:11px 18px">SUBSCRIBE</button></form>
   <div><div style="color:#fff;font-weight:800;letter-spacing:1px;margin-bottom:8px;font-size:13px">CONNECT WITH US</div><div class="social"><span>▶️</span><span>📘</span><span>📸</span><span>𝕏</span><span>🎵</span><span>💼</span></div></div>
 </div></div>
 <div class="fcols">
   <div><h4>Customer Service</h4><a>Contact Us</a><a>Shipping Info</a><a>Return Policy</a><a>Condition Guide</a></div>
   <div><h4>Company Info</h4><a href="index.html">Home</a><a href="trade-in.html">Trade + Sell</a><a href="fitting.html">Fitting</a><a>Our Story</a></div>
   <div><h4>AI Services</h4><a href="listing-agent.html" target="_blank">AI Trade-In Agent</a><a href="club-fit-assistant.html" target="_blank">AI Club Fitting</a><a href="pricing-engine.html" target="_blank">AI Dynamic Pricing</a><a href="agents-hub.html">AI Operations Center</a></div>
   <div><h4>Golf Club Brands</h4><a>PING</a><a>Titleist</a><a>Callaway</a><a>TaylorMade</a><a>Scotty Cameron</a></div>
 </div>
 <div class="fbottom">© 2026 James Swing · Demo storefront built as an AI portfolio project. Original design — not affiliated with any existing retailer.</div>`;
 document.body.appendChild(f);
};

/* agent strip: list of [emoji,label,url] */
window.agentStrip=function(title,agents){
 return `<div class="agentstrip"><div><div class="lab">⚙ Powered by the AI agent team</div><h3>${title}</h3></div>
  <div class="agentchips">${agents.map(([ic,lab,url])=>`<div class="agentchip" onclick="${url?`window.open('${url}','_blank')`:''}"><span class="d"></span>${ic} ${lab}</div>`).join("")}</div></div>`;
};
window.toast=function(msg){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t);}t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),1800);};
})();

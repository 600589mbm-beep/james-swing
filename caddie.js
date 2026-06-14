/* ===== James Swing AI Caddie — self-injecting chat assistant ===== */
(function(){
const CSS=`
#aiBtn{position:fixed;bottom:22px;right:22px;z-index:200;background:linear-gradient(135deg,#1565d8,#0a3d8f);color:#fff;border:none;border-radius:50px;padding:14px 20px;font-weight:800;font-size:14px;cursor:pointer;box-shadow:0 10px 26px rgba(10,61,143,.4);display:flex;align-items:center;gap:9px;font-family:inherit}
#aiBtn:hover{transform:translateY(-2px)}
#aiBtn .dot{width:9px;height:9px;border-radius:50%;background:#3ad17a;animation:aipl 1.6s infinite}
@keyframes aipl{0%{box-shadow:0 0 0 0 rgba(58,209,122,.6)}70%{box-shadow:0 0 0 9px rgba(58,209,122,0)}100%{box-shadow:0 0 0 0 rgba(58,209,122,0)}}
#aiPanel{position:fixed;bottom:22px;right:22px;z-index:201;width:370px;max-width:calc(100vw - 24px);height:540px;max-height:calc(100vh - 40px);background:#fff;border-radius:16px;box-shadow:0 24px 60px rgba(8,20,40,.34);display:none;flex-direction:column;overflow:hidden;font-family:inherit}
#aiPanel.open{display:flex}
.ai-head{background:linear-gradient(135deg,#0a3d8f,#1565d8);color:#fff;padding:15px 16px;display:flex;align-items:center;gap:11px}
.ai-head .av{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;font-size:20px}
.ai-head b{font-size:15px;display:block} .ai-head span{font-size:11.5px;opacity:.85}
.ai-head .x{margin-left:auto;background:none;border:none;color:#fff;font-size:22px;cursor:pointer}
.ai-body{flex:1;overflow-y:auto;padding:16px;background:#f4f7fb;display:flex;flex-direction:column;gap:10px}
.ai-msg{max-width:84%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.45}
.ai-bot{background:#fff;border:1px solid #e2e8f1;align-self:flex-start;border-bottom-left-radius:4px}
.ai-me{background:#0a3d8f;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
.ai-acts{display:flex;flex-wrap:wrap;gap:7px;align-self:flex-start;max-width:92%}
.ai-acts button{background:#fff;border:1.5px solid #1565d8;color:#0a3d8f;font-size:12px;font-weight:700;padding:7px 11px;border-radius:16px;cursor:pointer;font-family:inherit}
.ai-acts button:hover{background:#0a3d8f;color:#fff}
.ai-foot{display:flex;border-top:1px solid #e2e8f1;background:#fff}
.ai-foot input{flex:1;border:none;padding:13px 14px;font-size:13.5px;outline:none;font-family:inherit}
.ai-foot button{border:none;background:#0a3d8f;color:#fff;font-weight:800;padding:0 18px;cursor:pointer}
.ai-tag{font-size:10.5px;color:#5d6b82;text-align:center;padding:5px;background:#fff}
.ai-typing{font-size:13px;color:#5d6b82;align-self:flex-start}`;
const s=document.createElement('style');s.textContent=CSS;document.head.appendChild(s);

const btn=document.createElement('button');btn.id='aiBtn';btn.innerHTML='<span class="dot"></span>⛳ AI Caddie';
const panel=document.createElement('div');panel.id='aiPanel';
panel.innerHTML=`<div class="ai-head"><div class="av">⛳</div><div><b>Swing AI Caddie</b><span>Your personal golf assistant</span></div><button class="x">×</button></div>
<div class="ai-body" id="aiBody"></div>
<div class="ai-foot"><input id="aiInput" placeholder="Ask about clubs, trade-ins, fitting…" autocomplete="off"><button id="aiSend">Send</button></div>
<div class="ai-tag">AI demo · built-in golf knowledge. Production version uses a live LLM.</div>`;
document.body.appendChild(btn);document.body.appendChild(panel);
const body=panel.querySelector('#aiBody'),input=panel.querySelector('#aiInput');

function toggle(open){panel.classList.toggle('open',open);btn.style.display=open?'none':'flex';if(open&&!body.dataset.init){body.dataset.init=1;bot("Hi! I'm your AI Caddie ⛳ I can value a trade-in, recommend clubs for your game, or help you find a deal. What are you working on today?",[["Value my trade-in","trade"],["Find clubs for me","fit"],["Recommend a driver","driver"],["Meet the agent team","team"]]);}}
btn.onclick=()=>toggle(true);panel.querySelector('.x').onclick=()=>toggle(false);
function bub(cls,html){const d=document.createElement('div');d.className='ai-msg '+cls;d.innerHTML=html;body.appendChild(d);body.scrollTop=body.scrollHeight;}
function chips(list){if(!list)return;const w=document.createElement('div');w.className='ai-acts';list.forEach(([l,k])=>{const b=document.createElement('button');b.textContent=l;b.onclick=()=>{me(l);respond(k||l);};w.appendChild(b);});body.appendChild(w);body.scrollTop=body.scrollHeight;}
function act(label,fn){const w=document.createElement('div');w.className='ai-acts';const b=document.createElement('button');b.textContent=label;b.style.background='#0a3d8f';b.style.color='#fff';b.onclick=fn;w.appendChild(b);body.appendChild(w);}
function me(t){bub('ai-me',t.replace(/</g,'&lt;'));}
function bot(t,ch){const ty=document.createElement('div');ty.className='ai-typing';ty.textContent='Caddie is typing…';body.appendChild(ty);body.scrollTop=body.scrollHeight;setTimeout(()=>{ty.remove();bub('ai-bot',t);if(ch)chips(ch);},400);}
function send(){const v=input.value.trim();if(!v)return;me(v);input.value='';respond(v);}
panel.querySelector('#aiSend').onclick=send;input.addEventListener('keydown',e=>{if(e.key==='Enter')send();});

function respond(raw){const t=raw.toLowerCase();
 if(/trade|sell|value|worth/.test(t)||t==='trade'){bot("I can value it in seconds — tell me the club, or open the full AI Trade-In Agent.");act("Open AI Trade-In Agent →",()=>window.open('listing-agent.html','_blank'));return;}
 if(/fit|recommend|which|suggest|beginner|handicap|what club/.test(t)||t==='fit'){bot("Let's find your fit! A few quick questions and I'll match you to in-stock clubs.");act("Open AI Club-Fit Assistant →",()=>window.open('club-fit-assistant.html','_blank'));return;}
 if(/team|agent|operations|ops/.test(t)||t==='team'){bot("Behind the scenes, a team of agents runs the store — grading, listing, pricing, fitting and SEO — coordinated by an orchestrator. Want to watch them work?");act("Open AI Operations Center →",()=>window.open('agents-hub.html','_blank'));return;}
 if(/price|pricing|deal|cheap|discount|sale/.test(t)){bot("Our Pricing Agent reprices inventory against the market daily. Want to see today's deals or the pricing engine?",[["Shop deals","shop"]]);act("Open Pricing Agent →",()=>window.open('pricing-engine.html','_blank'));return;}
 if(t==='shop'){window.open('shop.html','_blank');bot("Opening the shop for you ⬆");return;}
 if(/driver/.test(t)||t==='driver'){bot("For most golfers I'd start with the <b>Ping G430 Max</b> ($279) or <b>TaylorMade-style</b> speed. Want me to fit you, or shop drivers?",[["Fit me","fit"],["Shop drivers","shopdrivers"]]);return;}
 if(t==='shopdrivers'){window.open('shop.html?cat=Driver','_blank');bot("Opening drivers ⬆");return;}
 if(/iron/.test(t)){bot("Great irons in stock: <b>TaylorMade P790</b> ($749) and <b>Ping i230</b> ($799).");act("Shop irons →",()=>window.open('shop.html?cat=Iron%20Set','_blank'));return;}
 if(/putter/.test(t)){bot("Try a <b>Scotty Cameron Newport 2</b> ($279) or <b>Odyssey White Hot OG</b> ($119).");act("Shop putters →",()=>window.open('shop.html?cat=Putter','_blank'));return;}
 if(/grade|condition|rating|scale/.test(t)){bot("Every club is graded 6–10: 10 Brand New, 9.5 Mint, 9 Above Average, 8 Average, 7 Below Average, 6 Poor.",[["Value my trade-in","trade"]]);return;}
 if(/ship|deliver|return|guarantee/.test(t)){bot("Free shipping over $99 and a 90-day playability guarantee. 👍",[["Find clubs","fit"]]);return;}
 if(/^(hi|hey|hello)\b/.test(t)){bot("Hey! ⛳ Trade-in, fitting, or deals?",[["Value my trade-in","trade"],["Find clubs for me","fit"]]);return;}
 if(/thank|thanks/.test(t)){bot("Anytime — happy golfing! 🏌️");return;}
 bot("I can help with trade-in values, club fitting, recommendations, pricing, and our agent team. What would you like?",[["Value my trade-in","trade"],["Find clubs for me","fit"],["Meet the agent team","team"]]);
}
})();

(() => {
'use strict';
const DATA = {
 'global-talent/technology':{title:'UK Global Talent Visa Guide: Digital Technology',category:'Global Talent Visa Guide',intro:'A free step-by-step guide to the Digital Technology pathway, including endorsement criteria, evidence requirements and application preparation.',related:[['Technology checklist','global-talent/technology-checklist'],['Global Talent overview','global-talent/README'],['Tracker guidance','global-talent/tracker-guide']]},
 'global-talent/arts-and-culture':{title:'UK Global Talent Visa Guide: Arts & Culture',category:'Global Talent Visa Guide',intro:'An educational guide to the Arts & Culture pathway, explaining relevant disciplines, endorsement evidence and professional recognition.',related:[['Arts checklist','global-talent/arts-and-culture-checklist'],['Global Talent overview','global-talent/README']]},
 'global-talent/academia-and-research':{title:'UK Global Talent Visa Guide: Academia & Research',category:'Global Talent Visa Guide',intro:'A practical guide to research endorsement routes, including qualifying appointments, fellowships, funding and peer review.',related:[['Research checklist','global-talent/research-checklist'],['Global Talent overview','global-talent/README']]},
 'innovator-founder/guide':{title:'UK Innovator Founder Visa Guide',category:'Innovator Founder Visa Guide',intro:'A free educational guide to understanding the Innovator Founder visa and preparing an evidence-led business case. Mettelo does not endorse or submit applications.',related:[['Founder checklist','innovator-founder/checklist'],['Founder tracker guide','innovator-founder/tracker-guide'],['Founder resources','innovator-founder/README']]},
 'nigerian-passport/passport-renewal-uk':{title:'Nigerian Passport Renewal in the UK: Step-by-Step Guide',category:'Passport Renewal Guide',intro:'A free information guide explaining the official Nigerian passport renewal process for applicants in the UK. Mettelo does not provide passport services.',related:[['Passport resources','nigerian-passport/README']]},
 'global-talent/technology-checklist':{title:'UK Global Talent Visa: Digital Technology Checklist',category:'Supporting resource',intro:'An evidence and application readiness checklist.',related:[['Main guide','global-talent/technology']]},
 'global-talent/arts-and-culture-checklist':{title:'UK Global Talent Visa: Arts & Culture Checklist',category:'Supporting resource',intro:'Review the correct evidence and route requirements.',related:[['Main guide','global-talent/arts-and-culture']]},
 'global-talent/research-checklist':{title:'UK Global Talent Visa: Academia & Research Checklist',category:'Supporting resource',intro:'Route-specific evidence and readiness.',related:[['Main guide','global-talent/academia-and-research']]},
 'global-talent/tracker-guide':{title:'UK Global Talent Visa Preparation Tracker Guide',category:'Supporting resource',intro:'Plan, record and verify your preparation.',related:[['Global Talent overview','global-talent/README']]},
 'innovator-founder/checklist':{title:'Innovator Founder Visa Preparation Checklist',category:'Supporting resource',intro:'Review business and immigration readiness.',related:[['Main guide','innovator-founder/guide']]},
 'innovator-founder/tracker-guide':{title:'Innovator Founder Visa Preparation Tracker Guide',category:'Supporting resource',intro:'Follow and record your business development activities.',related:[['Main guide','innovator-founder/guide']]},
 'global-talent/README':{title:'UK Global Talent Visa Guide Collection',category:'Resource directory',intro:'Choose the relevant Global Talent pathway.',related:[]},
 'innovator-founder/README':{title:'UK Innovator Founder Visa Guide Resources',category:'Resource directory',intro:'Guides, checklists and preparation materials.',related:[]},
 'nigerian-passport/README':{title:'Nigerian Passport Renewal Guide Resources',category:'Resource directory',intro:'Renewal guidance for UK-based applicants.',related:[]},
 'README':{title:'Free Immigration Guide Directory',category:'Resource directory',intro:'The full immigration resource collection.',related:[]}
};
const params=new URLSearchParams(location.search);
const requested=params.get('doc')||'global-talent/technology';
const doc=Object.hasOwn(DATA,requested)?requested:'global-talent/technology';
const meta=DATA[doc];
const $=id=>document.getElementById(id);
document.title=meta.title+' | Free Mettelo Immigration Guides';
$('reader-title').textContent=meta.title;
$('reader-category').textContent=meta.category;
$('reader-intro').textContent=meta.intro;
const selector=$('guide-select'); if(selector){selector.value=doc;selector.addEventListener('change',e=>{location.href='?doc='+encodeURIComponent(e.target.value)})}
const toggle=$('mobile-nav-toggle');
toggle?.addEventListener('click',()=>{const open=$('reader-sidebar').classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
$('copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);$('copy-link').textContent='Link copied ✓';setTimeout(()=>$('copy-link').textContent='Copy page link',2100)}catch{$('copy-link').textContent='Copy the URL from your browser';}});
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').slice(0,90)||'section';}
function remap(relative){
 if(!relative||relative.startsWith('#')||/^(https?:|mailto:|tel:|data:)/i.test(relative))return relative;
 // Resolve relative filenames against the current original Markdown directory.
 const base=new URL('https://source.example/'+doc+'.md');
 const full=new URL(relative,base);
 const ext=full.pathname.split('/').pop()||'';
 if(!full.pathname.endsWith('.md')) return relative;
 const key=decodeURIComponent(full.pathname.slice(1,-3));
 if(Object.hasOwn(DATA,key))return '?doc='+encodeURIComponent(key)+(full.hash||'');
 if(key==='README'||key==='../README'||key==='')return '../';
 return '../';
}
async function run(){
 const target=$('guide-content');
 if(typeof window.marked==='undefined'||typeof window.DOMPurify==='undefined'){
   $('render-error').hidden=false;
   $('render-error').textContent='The documentation renderer could not load. Please refresh when you have a stable internet connection.';
   return;
 }
 try{
  const res=await fetch('../content/'+doc+'.md',{cache:'no-cache'});
  if(!res.ok) throw new Error('HTTP '+res.status);
  const source=await res.text();
  // Extract Mermaid source before parsing Markdown. Never expose raw Mermaid code as a broken diagram.
  const transformedSource=source.replace(/(^|\n)```mermaid[^\n]*\n[\s\S]*?\n```/g,(_,prefix)=>prefix+'\n<div class="architecture-placeholder" data-mettelo-architecture="1"></div>\n');
  const renderer=new marked.Renderer();
  renderer.link=function({href,title,text}){const dest=remap(href);const external=/^https?:/i.test(dest);return '<a href="'+escapeHtml(dest||'#')+'"'+(title?' title="'+escapeHtml(title)+'"':'')+(external?' target="_blank" rel="noopener noreferrer"':'')+'>'+text+'</a>';};
  const markup=marked.parse(transformedSource,{gfm:true,breaks:false,renderer});
  target.innerHTML=DOMPurify.sanitize(markup,{USE_PROFILES:{html:true},ADD_ATTR:['target','rel','class']});
  const used=new Map();
  const heads=[...target.querySelectorAll('h2,h3')];
  const toc=$('toc');toc.replaceChildren();
  heads.forEach(h=>{
    const clean=h.textContent.trim();let id=slug(clean);
    const count=used.get(id)||0;used.set(id,count+1);if(count)id+='-'+(count+1);
    h.id=id;
    const a=document.createElement('a');a.textContent=clean.length>75?clean.slice(0,72)+'…':clean;a.href='#'+id;a.className=h.tagName==='H3'?'toc-h3':'toc-h2';toc.append(a);
  });
  toc.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=900){$('reader-sidebar').classList.remove('open');toggle?.setAttribute('aria-expanded','false')}}));
  target.querySelectorAll('table').forEach(t=>{const box=document.createElement('div');box.className='table-scroll';t.parentNode.insertBefore(box,t);box.append(t)});
  // Replace cramped technical Mermaid graphs with full-width editorial process architecture.
  // Each stage is a real HTML section: readable at natural size, accessible, and printable.
  const placeholders=target.querySelectorAll('[data-mettelo-architecture], pre code.language-mermaid');
  placeholders.forEach(node=>{
    const host=node.matches('code')?node.closest('pre'):node;
    const architecture=window.MetteloArchitecture?.render(doc);
    if(architecture) host.replaceWith(architecture);
    else {
      const warning=document.createElement('p');
      warning.className='error-box';
      warning.textContent='The visual process map is temporarily unavailable. Follow the full guidance in the sections below.';
      host.replaceWith(warning);
    }
  });
  setupTocNavigation(heads,toc);
  setupFind(target);
 }catch(err){console.error('Resource loading failed',err);$('render-error').hidden=false;$('reader-intro').textContent='The requested resource could not be retrieved.';}
}
function prepareDiagram(frame){
 const svg=frame.querySelector('svg');if(!svg)return;
 const viewport=frame.querySelector('.diagram-viewport'),canvas=frame.querySelector('.diagram-canvas');
 const box=svg.viewBox?.baseVal;
 const nativeWidth=box?.width||parseFloat(svg.getAttribute('width'))||1050;
 const nativeHeight=box?.height||parseFloat(svg.getAttribute('height'))||600;
 svg.removeAttribute('width');svg.removeAttribute('height');
 svg.setAttribute('role','img');svg.setAttribute('aria-label','Immigration process map. Scroll horizontally and vertically to inspect every step.');
 let scale=1;
 const label=document.createElement('span');label.className='diagram-zoom-label';label.setAttribute('aria-live','polite');
 frame.querySelector('.diagram-controls')?.prepend(label);
 function apply(next,reset=false){
  scale=Math.max(.25,Math.min(3,next));
  const width=Math.ceil(nativeWidth*scale),height=Math.ceil(nativeHeight*scale);
  svg.style.setProperty('width',width+'px','important');
  svg.style.setProperty('height',height+'px','important');
  svg.style.setProperty('min-width',width+'px','important');
  canvas.style.width=width+'px';canvas.style.height=height+'px';
  canvas.style.minWidth=width+'px';canvas.style.minHeight=height+'px';
  label.textContent=Math.round(scale*100)+'%';
  if(reset){viewport.scrollLeft=0;viewport.scrollTop=0}
 }
 function fit(){apply(Math.min(1,(viewport.clientWidth-28)/nativeWidth),true)}
 frame.querySelectorAll('[data-diagram-action]').forEach(button=>button.addEventListener('click',()=>{
  const action=button.dataset.diagramAction;
  if(action==='in')apply(scale*1.3);
  if(action==='out')apply(scale/1.3);
  if(action==='actual')apply(1,true);
  if(action==='fit')fit();
  if(action==='expand'){
   const expanded=frame.classList.toggle('diagram-fullscreen');
   button.textContent=expanded?'Close ✕':'Expand ↗';
   button.setAttribute('aria-label',expanded?'Close expanded diagram':'Expand diagram to full screen');
   document.body.classList.toggle('diagram-is-open',expanded);
   apply(1,true);
  }
 }));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&frame.classList.contains('diagram-fullscreen'))frame.querySelector('[data-diagram-action="expand"]')?.click()});
 apply(1,true);
}
function setupTocNavigation(headings,toc){
 const sidebar=$('reader-sidebar'),toggle=$('mobile-nav-toggle');
 const links=[...toc.querySelectorAll('a[href^="#"]')];
 if(!headings.length||!links.length)return;
 const linkById=new Map(links.map(link=>[decodeURIComponent(link.hash.slice(1)),link]));
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const progress=document.createElement('div');progress.id='reading-progress';progress.setAttribute('aria-hidden','true');document.body.prepend(progress);
 let activeId='',pending=false,manualScroll=false,releaseTimer;
 function activate(id){
  if(!id||activeId===id)return;
  activeId=id;
  for(const [key,link] of linkById){
   const isCurrent=key===id;link.classList.toggle('active',isCurrent);
   if(isCurrent)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
  }
  const active=linkById.get(id);
  if(active&&sidebar&&window.innerWidth>900){
   const itemTop=active.getBoundingClientRect().top,sidebarRect=sidebar.getBoundingClientRect();
   if(itemTop<sidebarRect.top+65||itemTop>sidebarRect.bottom-75){
    sidebar.scrollTo({top:sidebar.scrollTop+itemTop-sidebarRect.top-sidebar.clientHeight*.35,behavior:reduced.matches?'instant':'smooth'});
   }
  }
 }
 function update(){
  pending=false;
  const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  progress.style.transform='scaleX('+Math.max(0,Math.min(1,window.scrollY/max))+')';
  if(manualScroll)return;
  const threshold=Math.min(210,window.innerHeight*.27);
  let current=headings[0];
  for(const heading of headings){
   if(heading.getBoundingClientRect().top<=threshold)current=heading;else break;
  }
  if(current)activate(current.id);
 }
 function schedule(){if(pending)return;pending=true;requestAnimationFrame(update)}
 for(const link of links){
  link.addEventListener('click',event=>{
   const id=decodeURIComponent(link.hash.slice(1)),heading=document.getElementById(id);
   if(!heading)return;event.preventDefault();
   clearTimeout(releaseTimer);manualScroll=true;
   activate(id);
   history.replaceState(null,'','#'+encodeURIComponent(id));
   heading.scrollIntoView({block:'start',behavior:reduced.matches?'instant':'smooth'});
   if(window.innerWidth<=900){sidebar?.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}
   releaseTimer=setTimeout(()=>{manualScroll=false;schedule()},reduced.matches?50:650);
  });
 }
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule,{passive:true});
 const initial=decodeURIComponent(location.hash.slice(1));
 if(initial&&document.getElementById(initial)){
  requestAnimationFrame(()=>document.getElementById(initial).scrollIntoView({block:'start',behavior:'instant'}));
  activate(initial);
 }else activate(headings[0].id);
 schedule();
}
function setupFind(root){
 const input=$('find-in-guide'),counter=$('find-count');
 let timer;
 input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>highlight(input.value.trim()),170)});
 function highlight(term){
  root.querySelectorAll('mark.mark-hit').forEach(mark=>mark.replaceWith(document.createTextNode(mark.textContent)));
  root.normalize();
  if(term.length<2){counter.textContent='';return}
  const matches=[];
  const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){
    if(!node.parentElement||node.parentElement.closest('script,style,pre,code,a,svg'))return NodeFilter.FILTER_REJECT;
    return node.textContent.toLowerCase().includes(term.toLowerCase())?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;
  }});
  let n;while((n=walk.nextNode())&&matches.length<100){matches.push(n)}
  let found=0,first;
  for(const node of matches){const s=node.textContent;const idx=s.toLowerCase().indexOf(term.toLowerCase());if(idx<0)continue;
   const before=document.createTextNode(s.slice(0,idx)),after=document.createTextNode(s.slice(idx+term.length));const mark=document.createElement('mark');mark.className='mark-hit';mark.textContent=s.slice(idx,idx+term.length);
   node.replaceWith(before,mark,after);first??=mark;found++;
  }
  counter.textContent=found?(found>=100?'100+ matches':found+' matches'):'No matches';
  first?.scrollIntoView({behavior:'smooth',block:'center'});
 }
}
run();
})();
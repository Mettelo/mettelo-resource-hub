(() => {
'use strict';
const menuButton=document.getElementById('site-menu-toggle');
const mainNav=document.getElementById('main-navigation');
if(menuButton&&mainNav){
 const close=()=>{mainNav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false')};
 const toggle=()=>{const open=mainNav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open))};
 menuButton.addEventListener('click',toggle);
 mainNav.addEventListener('click',event=>{if(event.target.closest('a'))close()});
 document.addEventListener('pointerdown',event=>{
  if(!mainNav.contains(event.target)&&!menuButton.contains(event.target))close();
 });
 document.addEventListener('keydown',event=>{if(event.key==='Escape')close()});
 window.addEventListener('resize',()=>{if(window.innerWidth>980)close()},{passive:true});
}
const toc=document.getElementById('reader-sidebar');
const tocTrigger=document.getElementById('mobile-nav-toggle');
if(!toc||!tocTrigger)return;
const backdrop=document.createElement('div');
backdrop.className='toc-backdrop';
backdrop.setAttribute('aria-hidden','true');
document.body.append(backdrop);
const closeButton=document.createElement('button');
closeButton.className='toc-close';closeButton.type='button';closeButton.textContent='Close contents ✕';
closeButton.setAttribute('aria-label','Close guide contents');
toc.prepend(closeButton);
let lastFocus=null;
function open(){
 lastFocus=document.activeElement;
 toc.classList.add('open');backdrop.classList.add('is-visible');
 document.body.classList.add('toc-is-open');
 tocTrigger.setAttribute('aria-expanded','true');
 requestAnimationFrame(()=>closeButton.focus({preventScroll:true}));
}
function close(){
 toc.classList.remove('open');backdrop.classList.remove('is-visible');
 document.body.classList.remove('toc-is-open');
 tocTrigger.setAttribute('aria-expanded','false');
 lastFocus?.focus?.({preventScroll:true});
}
tocTrigger.addEventListener('click',event=>{
 event.preventDefault();event.stopImmediatePropagation();
 if(toc.classList.contains('open'))close();else open();
},true);
closeButton.addEventListener('click',close);
backdrop.addEventListener('click',close);
toc.addEventListener('click',event=>{
 if(event.target.closest('a[href^="#"]')&&window.innerWidth<=980)close();
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&toc.classList.contains('open')){close();return;}
 if(event.key!=='Tab'||!toc.classList.contains('open'))return;
 const focusable=[...toc.querySelectorAll('a[href],button:not([disabled])')].filter(element=>element.getClientRects().length);
 if(!focusable.length)return;
 const first=focusable[0],last=focusable[focusable.length-1];
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
});
window.addEventListener('resize',()=>{if(window.innerWidth>980&&toc.classList.contains('open'))close()},{passive:true});
})();
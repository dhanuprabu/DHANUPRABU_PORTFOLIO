window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);
  const s=['home','about','education','projects','services','contact'];
  let cur='home';
  s.forEach(id=>{const el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-120)cur=id;});
  document.querySelectorAll('.nav-link').forEach((a,i)=>a.classList.toggle('active',s[i]===cur));
});
function goTo(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}
function animCount(el,target,suf=''){
  let n=0;const step=Math.ceil(target/25);
  const t=setInterval(()=>{n=Math.min(n+step,target);el.textContent=n+suf;if(n>=target)clearInterval(t);},60);
}
setTimeout(()=>{animCount(document.getElementById('c1'),6);animCount(document.getElementById('c2'),2,'+');},700);
const obs=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Background video is purely atmospheric — always muted.
const heroBgVideo = document.getElementById('heroBgVideo');
if(heroBgVideo){
  heroBgVideo.muted = true;
  heroBgVideo.volume = 0;
  const playBg = () => heroBgVideo.play().catch(()=>{});
  document.addEventListener('DOMContentLoaded', playBg);
  window.addEventListener('load', playBg);
}

// Card video (right side) — always muted visual loop, independent play/pause toggle
const heroCardVideo = document.getElementById('heroCardVideo');
if(heroCardVideo){
  heroCardVideo.muted = true;
  const tryPlayCard = () => heroCardVideo.play().catch(()=>{});
  document.addEventListener('DOMContentLoaded', tryPlayCard);
  window.addEventListener('load', tryPlayCard);
}
function toggleHeroCardVideo(){
  const v = document.getElementById('heroCardVideo');
  const btn = document.getElementById('vcPlayPause');
  if(v.paused){ v.play(); btn.innerHTML = '<i class="fas fa-pause"></i>'; }
  else { v.pause(); btn.innerHTML = '<i class="fas fa-play"></i>'; }
}
function toggleHeroCardMute(){
  const v = document.getElementById('heroCardVideo');
  const btn = document.getElementById('vcMute');
  v.muted = !v.muted;
  btn.innerHTML = v.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
}
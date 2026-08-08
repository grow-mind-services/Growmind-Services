document.querySelector('.menu').addEventListener('click',()=>{const nav=document.querySelector('.nav nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='74px';nav.style.left='0';nav.style.right='0';nav.style.background='white';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #e8edf3';});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=800)document.querySelector('nav').style.display='none'}));
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);const subject=encodeURIComponent('Growmind Services Website Enquiry - '+f.get('interest'));const body=encodeURIComponent('Name: '+f.get('name')+'\\nInterest: '+f.get('interest')+'\\n\\nMessage:\\n'+f.get('message'));window.location.href='mailto:info@growmindservices.com?subject='+subject+'&body='+body;document.getElementById('formMsg').textContent='Your email app should open now. Email: growmindservices@gmail.com';});

(function(){
  const slides=[...document.querySelectorAll('.hero-slider .slide')];
  const dots=[...document.querySelectorAll('.hero-slider .slider-dots button')];
  if(!slides.length)return;
  let index=0, timer;
  function show(i){index=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===index));dots.forEach((d,n)=>d.classList.toggle('active',n===index));}
  document.querySelector('.hero-slider .next')?.addEventListener('click',()=>{show(index+1);restart()});
  document.querySelector('.hero-slider .prev')?.addEventListener('click',()=>{show(index-1);restart()});
  dots.forEach((d,n)=>d.addEventListener('click',()=>{show(n);restart()}));
  function start(){timer=setInterval(()=>show(index+1),5000)}
  function restart(){clearInterval(timer);start()}
  start();
})();

(function(){
  const filters=[...document.querySelectorAll('.job-filter')];
  const jobs=[...document.querySelectorAll('.job-list .job')];
  if(!filters.length)return;
  filters.forEach(btn=>btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    const f=btn.dataset.filter;
    jobs.forEach(job=>job.classList.toggle('hidden', f!=='all' && !job.dataset.category.split(' ').includes(f)));
  }));
})();

(function(){
  const slides=[...document.querySelectorAll('.top-image-slider .image-slide')];
  const dots=[...document.querySelectorAll('.top-slide-dots button')];
  const prev=document.querySelector('.top-slide-arrow.prev'), next=document.querySelector('.top-slide-arrow.next');
  if(!slides.length)return;
  let i=0, timer;
  function show(n){i=(n+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle('active',k===i));dots.forEach((d,k)=>d.classList.toggle('active',k===i));}
  function restart(){clearInterval(timer);timer=setInterval(()=>show(i+1),5000);}
  prev?.addEventListener('click',()=>{show(i-1);restart()});
  next?.addEventListener('click',()=>{show(i+1);restart()});
  dots.forEach((d,k)=>d.addEventListener('click',()=>{show(k);restart()}));
  restart();
})();

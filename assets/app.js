(() => {
  const toggle=document.querySelector('.menu'), nav=document.querySelector('.header nav');
  toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
  const filters=[...document.querySelectorAll('.filter')], products=[...document.querySelectorAll('.product')];
  filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.toggle('active',b===btn));products.forEach(p=>p.classList.toggle('hidden',btn.dataset.filter!=='all'&&p.dataset.category!==btn.dataset.filter))}));
  const dialog=document.querySelector('#product-dialog');
  document.querySelectorAll('.quick').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('#dialog-title').textContent=btn.dataset.product;dialog.showModal()}));
  document.querySelector('.close')?.addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  document.querySelector('#dialog-enquire')?.addEventListener('click',()=>dialog.close());
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  const toast=document.querySelector('.toast');let timer;
  document.querySelector('#contact-form')?.addEventListener('submit',e=>{
    e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const d=new FormData(form);
    const subject=encodeURIComponent(`ATELIER NOIR enquiry — ${d.get('interest')}`);
    const body=encodeURIComponent(`Hello ATELIER NOIR,\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nInterest: ${d.get('interest')}\n\nProject details:\n${d.get('message')}\n\nSent from the ATELIER NOIR demo website.`);
    toast.textContent='Your email draft is being prepared.';toast.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('show'),3500);
    window.location.href=`mailto:studio@ateliernoir.example?subject=${subject}&body=${body}`;
  });
})();
(function(){
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var header = document.getElementById('site-nav');
  function onScroll(){ if(!header) return; header.classList.toggle('scrolled', window.scrollY > 8); }
  document.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  function closeNav(){ if(!links) return; links.classList.remove('open'); if(toggle) toggle.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  function openNav(){ if(!links) return; links.classList.add('open'); if(toggle) toggle.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
  if (toggle && links){
    toggle.addEventListener('click', function(){ links.classList.contains('open') ? closeNav() : openNav(); });
    links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeNav); });
    window.addEventListener('keydown', function(e){ if(e.key==='Escape') closeNav(); });
    window.addEventListener('resize', function(){ if(window.innerWidth>700) closeNav(); });
  }

  document.body.classList.add('js');

  // Progressive scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold: 0.15, rootMargin: '0px 0px -40px 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  // Subtle grain texture on hero/page-hero/driver-band/cta (added via JS so it never blocks first paint)
  document.querySelectorAll('.hero, .page-hero, .driver-band, .cta').forEach(function(el){
    el.classList.add('grain');
  });

  function wireForm(formId){
    var form = document.getElementById(formId);
    if (!form) return;
    var loadedAt = Date.now();
    var dateField = form.querySelector('input[type="date"]');
    if (dateField){ dateField.min = new Date().toISOString().split('T')[0]; }

    var nextField = form.querySelector('#next-url');
    if (nextField && location.protocol.indexOf('http') === 0){
      nextField.value = location.origin + '/thank-you.html';
    }

    form.addEventListener('submit', function(e){
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value){ e.preventDefault(); return; }
      if (Date.now() - loadedAt < 1500){ e.preventDefault(); return; }

      if (location.protocol === 'file:'){
        e.preventDefault();
        location.href = 'thank-you.html';
        return;
      }

      if (!form.checkValidity()){ e.preventDefault(); form.reportValidity(); return; }

      var hidden = document.createElement('input');
      hidden.type = 'hidden'; hidden.name = 'Sent from page'; hidden.value = location.href;
      form.appendChild(hidden);

      var btn = form.querySelector('button[type="submit"]');
      if (btn){ btn.disabled = true; btn.textContent = 'Sending...'; }
    });
  }
  wireForm('quote-form');
  wireForm('apply-form');
})();

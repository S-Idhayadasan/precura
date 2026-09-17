var els = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:.2});
  els.forEach(function(el){ io.observe(el); });
} else {
  els.forEach(function(el){ el.classList.add('in'); });
}

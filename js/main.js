/* Livarix — livarix.vercel.app */
(function () {
  'use strict';

  function menu() {
    var btn = document.querySelector('.nav-btn');
    var list = document.getElementById('nav-list');
    if (!btn || !list) return;
    function shut() {
      list.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function () {
      btn.setAttribute('aria-expanded', list.classList.toggle('is-open') ? 'true' : 'false');
    });
    list.addEventListener('click', function (e) { if (e.target.closest('a')) shut(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });
  }

  /* Order bar rises past the hero and stands down over the price cards. */
  function dock() {
    var bar = document.querySelector('.dock');
    var hero = document.querySelector('.hero');
    var plans = document.getElementById('prices');
    if (!bar || !hero || !('IntersectionObserver' in window)) return;
    var past = false, onPlans = false;
    function set() { bar.classList.toggle('is-up', past && !onPlans); }
    new IntersectionObserver(function (e) { past = !e[0].isIntersecting; set(); }).observe(hero);
    if (plans) new IntersectionObserver(function (e) { onPlans = e[0].isIntersecting; set(); }).observe(plans);
  }

  function start() { menu(); dock(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

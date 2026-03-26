/* Social Soup — main.js
   Global utilities and progressive enhancements.
   Page-specific scripts live inline in each HTML file.
   ───────────────────────────────────────────────── */

(function() {
  'use strict';

  /* Polyfill: mark all .reveal elements visible if IntersectionObserver is
     unavailable (very old browsers / crawlers). */
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.classList.add('visible');
    });
  }

})();

// German or English: remembered choice, else the browser language.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  function set(l) {
    document.documentElement.dataset.lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-set]').forEach(function (b) { b.classList.toggle('on', b.dataset.set === l); });
  }
  set(saved || ((navigator.language || '').slice(0, 2) === 'de' ? 'de' : 'en'));
  document.querySelectorAll('[data-set]').forEach(function (b) {
    b.addEventListener('click', function () { set(b.dataset.set); try { localStorage.setItem('lang', b.dataset.set); } catch (e) {} });
  });
})();

(() => {
  const markup = "<nav aria-label=\"Hauptnavigation\" class=\"nav\"><a class=\"brand\" href=\"index.html\">✧ Platino Ladies</a><button aria-expanded=\"false\" aria-label=\"Menü öffnen\" class=\"mobile\">☰ Menü</button><div class=\"menu\"><a class=\"direct\" href=\"index.html\">Startseite</a><div class=\"group\"><a class=\"group-link\" href=\"ueber-uns.html\">Über uns</a><button aria-expanded=\"false\" aria-label=\"Untermenü Über uns öffnen\" type=\"button\">▾</button><div class=\"sub\"><a href=\"konzept.html\">Konzept</a><a href=\"leitung.html\">Leitung</a><a href=\"wochenplan.html\">Wochenplan</a><a href=\"outfit.html\">Uniform</a><a href=\"begleiter.html\">Begleiter</a><a href=\"rangsystem.html\">Rangsystem</a></div></div><div class=\"group\"><a class=\"group-link\" href=\"bewerbungen.html\">Bewerbungen</a><button aria-expanded=\"false\" aria-label=\"Untermenü Bewerbungen öffnen\" type=\"button\">▾</button><div class=\"sub\"><a href=\"informationen.html\">Informationen</a><a href=\"voraussetzungen.html\">Voraussetzungen</a><a href=\"bewerbungsfach.html\">Bewerbungsfach</a><a href=\"warteliste.html\">Warteliste</a></div></div><a class=\"direct\" href=\"gaestebuch.html\">Gästebuch</a><div class=\"group\"><a class=\"group-link\" href=\"mitglieder.html\">Privatbereich</a><button aria-expanded=\"false\" aria-label=\"Untermenü Privatbereich öffnen\" type=\"button\">▾</button><div class=\"sub\"><a href=\"mitglieder.html\">Mitgliederbereich 🔒</a><a href=\"leitungszentrale.html\">Leitungszentrale 🔒</a></div></div></div></nav>";
  function install() {
    const existing = document.querySelector('header nav.nav');
    const header = existing?.closest('header') || document.querySelector('header') || document.createElement('header');
    if (!header.isConnected) document.body.insertBefore(header, document.body.firstChild);
    if (existing) existing.remove();
    header.insertAdjacentHTML('afterbegin', markup);
    const nav = header.querySelector('nav.nav');
    const mobile = nav.querySelector('.mobile');
    const menu = nav.querySelector('.menu');
    mobile?.addEventListener('click', () => {
      const open = menu.classList.toggle('show');
      mobile.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.group > button').forEach(button => {
      button.addEventListener('click', () => {
        const open = button.parentElement.classList.toggle('open');
        button.setAttribute('aria-expanded', String(open));
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, {once:true});
  else install();
})();
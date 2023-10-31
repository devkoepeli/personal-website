let menu = document.getElementById('menu');

let menuLinks = document.querySelectorAll('.header__menu-link'); // NodeList

document.getElementById('hamburger').addEventListener('click', function() {
  this.classList.toggle('hamburger-active');
  menu.classList.toggle('header__menu-overlay');
});

menuLinks.forEach(function (link) { 
    // über alle Elemente der NodeList iterieren und für jedes Element den Event-Listener hinzufügen
    link.addEventListener('click', closeMenu);
})

function closeMenu() {
    menu.classList.remove('header__menu-overlay');
    document.getElementById('hamburger').classList.remove('hamburger-active');
}
//This will allow for the menu to show and hide;
var menu = document.querySelector('.hamburger');
var main = document.querySelector('main');
var drawer = document.querySelector('.sidebar');

menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});
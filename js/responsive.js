//This will allow for the menu to show and hide;
const menu = document.querySelector('.hamburger');
const main = document.querySelector('main');
const drawer = document.querySelector('.sidebar');

menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});

//The animation form for the contact popup
$(function ()  {
    // contact form animations
    $("#contact").click(function () {
        $('#contactForm').fadeToggle();
    });
   $(document).mouseup(function (element) {
       const container = $("#contactForm");

      if (!container.is(element.target) // if the target of the click isn't the container...
           && container.has(element.target).length === 0) // ... nor a descendant of the container
        {
          container.fadeOut();
        }
    });
    // When the user clicks on <span> (x), close the modal
    $("span").click(function(){
        $("#contactForm").fadeOut();
    });
});
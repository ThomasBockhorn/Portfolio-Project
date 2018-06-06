//The animation form for the contact popup
$(function () {
    // contact form animations
    $("#contact").click(function () {
        $('#contactForm').fadeToggle();
    });
   $(document).mouseup(function (element) {
       var container = $("#contactForm");

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

// When the user clicks on <span> (x), close the welcome modal
$("span").click(function (){
    $(".welcome").fadeOut();
});

//When the user clicks on about, the about modal pops up
$("#about").click(function (){
   $(".aboutWindow").fadeToggle();
});

//This fades out the about form
$("span").click(function (){
    $(".aboutWindow").fadeOut();
});

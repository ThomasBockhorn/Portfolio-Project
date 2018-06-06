//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Text Input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //Creat a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

//toggles the edit icon to fade the text input in or out
$("#toggle-form").click(function(){
    $("input[type='text']").fadeToggle();
})
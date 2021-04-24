// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on "x" to delete todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add Listener to fire input when user hits "Enter" key
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // Grab new to do text from input
        var todoText = $(this).val();
        // create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
        // delete text from input once enter has been hit
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(500);
});
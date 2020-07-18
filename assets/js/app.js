//* need to be able to click each li and have it checked or line throughed and also grey it out.

$('ul').on("click", "li", function(){
    //! use toggle class to toggle between a pre-written css class.
 $(this).toggleClass("completed");
});

//* need to be able to click on X to delete ToDo on that line. 
$("ul").on("click", "span", function(event){
   
    //* .parent() targets the elements parent directly. 
    //* in the code below we target the span clicked and then target its parent and then remove said parent.
    //$(this).parent().remove();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //* this prevents the LI from firing since the span is nested inside the LI so when it is clicked technically the li is also clicked.

    event.stopPropagation();
});

$("#toDoInput").keypress(function(event){
    if(event.which === 13){
        var textVal = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + textVal + "</li>");
    }
});
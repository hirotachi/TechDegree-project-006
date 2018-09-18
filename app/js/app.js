$(".game").hide();

$(".start-btn").on("click", function(e){
   $(this).parent().fadeOut(500);
    
   $(".game").show();
});



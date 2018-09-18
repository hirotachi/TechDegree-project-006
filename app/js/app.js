$(".game").hide();

$(".start-btn").on("click", function(e){
   $(this).parent().fadeOut();
    
   $(".game").show();
});



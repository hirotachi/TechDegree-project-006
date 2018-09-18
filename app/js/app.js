const strings = ["lucky", "the lake", "tester testing"];
const keyboard = "abcdefghijklmnopqrstuvwxyz";
const liveHeart = `<li><img src="images/liveHeart.png" alt="alive heart"><li>`
let current = "test";
$(".game").hide();


$(".start-btn").on("click", function(e){
   $(this).parent().fadeOut(500); //fade the screen when the start game button clicked
    
   $(".game").show(); //show the game screen and remove the hide function



   
// insert random string from strings array into an li in .word_fill ul

   const randIndex = Math.floor(Math.random() * strings.length); //generate random index based on strings length
   for(let i = 0; i<strings[randIndex].length; i++){
    $(".word_fill").append(`<li class="placeholder">${strings[randIndex][i]}</li>`);
    }

    // removes spaces in string and replaces it by adding margin to the prev letter

    $(".placeholder").each(function(){
         current = $(this).text(); //get current string in screen and assign it to "current"
        if($(this).text() === " "){
            $(this).prev().css("marginRight", "3rem");
            $(this).remove();
        }
        $(this).text(" ");
        console.log(current);
    });

    // 
    for(let i = 0; i< 20; i++){
        const index = Math.floor(Math.random() * keyboard.length);
        $(".keyboard").append(`<li class="keyboard_letter">${keyboard[index]}</li>`);
    }
    
});



for(let i = 0; i < 5; i++){

    $(".hearts").append(liveHeart);
}
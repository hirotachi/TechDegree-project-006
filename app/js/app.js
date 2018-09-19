const strings = ["lucky", "the lake", "tester testing"];
const keyboard = "abcdefghijklmnopqrstuvwxyz";
const liveHeart = `<li><img src="images/liveHeart.png" alt="alive heart"></li>`;
const deadHeart = "images/lostHeart.png";
const liveSrc = "images/liveHeart.png";
const $hearts = $(".hearts ul");

$(".game").hide();


$(".btn").on("click", function(e){
   $(this).parent().fadeOut(500); //fade the screen when the start game button clicked
    
   $(".game").show(); //show the game screen and remove the hide function



   
// insert random string from strings array into an li in .word_fill ul

 
    
});

const randIndex = Math.floor(Math.random() * strings.length); //generate random index based on strings length
const current = strings[randIndex];

for(let i = 0; i<strings[randIndex].length; i++){
 $(".word_fill").append(`<li class="placeholder">${strings[randIndex][i]}</li>`);
  //get current string in screen and assign it to "current"
 }

 // removes spaces in string and replaces it by adding margin to the prev letter
 $(".placeholder").each(function(){
      
     if($(this).text() === " "){
         $(this).prev().css("marginRight", "3rem");
         $(this).hide();
     }
     $(this).text("");
 });

 // add letter from the keyboard array
 for(let i = 0; i< 26; i++){
     const index = Math.floor(Math.random() * keyboard.length);
     $(".keyboard").append(`<li class="keyboard_letter">${keyboard[i]}</li>`);
 }

//  place current word letters randomly in keyboard
 


// add live hearts to screen
for(i = 0; i < 5; i++){
$hearts.append(liveHeart)
}

// place selected letter into its place if its right letter if not change next heart to deadHeart
let place = 0;
$(".keyboard_letter").on("click", function()  {
    if(current.indexOf($(this).text()) >= 0){
        for (let i = 0; i < current.length; i++){
            if(current[i] === $(this).text()){
                $(".placeholder").eq(i).text($(this).text()).addClass("letterFound");
                $(this).addClass("found").off("click");
            }
        }
    }else {
        $hearts.children().eq(place).children()[0].src = deadHeart;
        place++;
        $(this).addClass("notFound").off("click");
    }

// hide the game if the place is bigger than 5 and show the welcome message for now and rest the hreats src
    if(place > 4){
        $(".game").hide();
        
        $(".btn").text("Try again").css({
            backgroundColor: "white",
            color: "#e95453"
        });
        $(".greeting").css({
            backgroundColor: "#e95453"
        }).show();

    }

    // check if the word complete is the same as the one from strings and show end game
    if($(".word_fill").text().trim() === current.replace(" ", "")){
        $(".word_fill").html(`<li class="complete">${current}<li>`);
    }
    
});


$(".btn").on("click" function(){
    $(".placeholder").each(function(){
        $(this).text("");
    });

    place = 0;
        for(let i = 0; i < 5; i++){
            $hearts.children().eq(i).children()[0].src = liveSrc;
        }
})





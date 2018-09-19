const strings = ["lucky", "the lake", "tester testing"];
const keyboard = "abcdefghijklmnopqrstuvwxyz";
const liveHeart = `<li><img src="images/liveHeart.png" alt="alive heart"></li>`;
const deadHeart = "images/lostHeart.png";
const liveSrc = "images/liveHeart.png";
const $hearts = $(".hearts ul");
let current = "test";
let place = 0;

// genearte random number based on element passed in
function randomize(number){
    return number = Math.floor(Math.random() * number);
}

// choose word from strings array and append the letters as li in word_fill
function createWord(){
    $(".word_fill").empty();
    // create elemets and append
    const index = randomize(strings.length);
    for(let i = 0; i<strings[index].length; i++){
        $(".word_fill").append(`<li class="placeholder">${strings[index][i]}</li>`);
        }
    replaceLetters(); //replace the current word
    current = strings[index];
    place = 0;
    for(let i = 0; i < 5; i++){
            $hearts.children().eq(i).children()[0].src = liveSrc; //change hearts back to live
    };

    const keys = createKeyBoard(current);
    for (let i = 0; i < keys.length; i++){
        $(".keyboard").append(`<li class="keyboard_letter">${keys[i]}</li>`);
    }
}

// remove class
function classRemove(){
    // remove class letterFund from board letter
    $(".placeholder").each(function(){
        $(this).text("").removeClass("letterFound");
    });
    // remove notFound and found class from the keyboard elements
    $(".keyboard_letter").each(function(){
        $(this).removeClass("notFound found");
    });
}

// removes spaces in string and replaces it by adding margin to the prev letter
function replaceLetters(){
    $(".placeholder").each(function(){
        
        if($(this).text() === " "){
            $(this).prev().css("marginRight", "3rem");
            $(this).hide();
        }
        $(this).text("");
    });
}

// create a keyboard layout from current word and keyboard array randomly
function createKeyBoard(element){
    let key= [];
    const word = element.replace(" ", "");
    for(let i = 0; i< word.length; i++){
        key.push(keyboard[randomize(keyboard.length)]);
    }
    for(let i = 0; i < word.length; i++){
        key.push(word[i]);
    }
     key = shuffle(key);
    return key;
}

// hide the game at the begining
$(".game").hide();

 
// add live hearts to screen
for(i = 0; i < 5; i++){
$hearts.append(liveHeart)
}

// place selected letter into its place if its right letter if not change next heart to deadHeart

$(".keyboard").on("click", ".keyboard_letter", function()  {
    if(current.indexOf($(this).text()) >= 0){
        for (let i = 0; i < current.length; i++){
            if(current[i] === $(this).text()){
                $(".placeholder").eq(i).text($(this).text()).addClass("letterFound");
                $(this).addClass("found");
            }
        }
    }else {
        $hearts.children().eq(place).children()[0].src = deadHeart;
        place++;
        $(this).addClass("notFound");
    }

// hide the game if the place is bigger than 5 and show the welcome message for now and rest the hreats src
    if(place > 4){
        $(".game").hide();
        
        $(".btn").text("Try again").css({
            backgroundColor: "white",
            color: "#e95453"
        });
        $(".message-board").css({
            backgroundColor: "#e95453"
        }).show();
        $(".message-board").append(`<p>You lose!</p>`);
    }

    // check if the word complete is the same as the one from strings and show end game
    if($(".word_fill").text().trim() === current.replace(" ", "")){
        $(".word_fill").html(`<li class="complete">${current}<li>`);
        
    }
    
});

// reset the game and remove modified css on click
$(".btn").on("click", function(){
    $(".keyboard").empty();
    createWord();
    classRemove();
    $("p").remove();
    $(this).parent().fadeOut(500); //fade the screen when the start game button clicked
   $(".game").show(); //show the game screen and remove the hide function
});

// change word on click

$(".another").on("click", function(){
    $(".keyboard").empty();
    createWord();
    classRemove();
    
});

// shuffle passed array
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}



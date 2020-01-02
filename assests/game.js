var words = ["tarzan" , "bambi" , "foxandthehound" , "bolt" , "princessandthefrog" ]

var rWord = "";
var letters = []
var blanks = 0;
var blanksLetters = [];
var wrong = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9

function image() {
    if (rWord === words[0]) {
    document.getElementById("image").src = "./assets/images/tarzan.jpg";
}}
function Game() {
    rWord = words[Math.floor(Math.random() * words.length)];
    letters = rWord.split("");
    blanks = letters.length;
    for (var i=0; i<blanks; i++) {
        blanksLetters.push("_");
    }
    document.getElementById("theWord").innnerHtml = " " + blanksLetters.join(" ");
}

function reset() {
    guessesRemaining = 9;
    wrong = [];
    blanksLetters = [];
    Game()
}
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (rWord[i] == letter) {
            letterInWord = true
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (rWord[i] == letter) {
                blanksLetters[i] = letter;
            }
        }
    }
    else {
        wrong.push(letter);
        guessesRemaining--;
    }
}
function complete() {
    if (letters.toString() == blanksLetters.toString()) {
        wins ++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    document.getElementById("theWord").innerHTML = "  " + blanksLetters.join(" ");
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
}
Game()
 
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    document.getElementById("playerguesses").innerHTML = "  " + wrong.join(" ");
}


var alphabet = "abcdefghijklmnopqrstuvwxyz"
var theWord;
var guesses;
var remainingLetterCount;
var manCount;
var reveal;

var michaelWords = ["hakuna", "matata", "pride", "lion", "mufasa", "rafiki"];

reset();

function reset(){
    theWord = michaelWords[Math.floor(Math.random() * michaelWords.length)];
    guesses = "";
    remainingLetterCount = theWord.length;
    manCount = 6;
    reveal = "_".repeat(remainingLetterCount).split("");
    document.getElementById("revealing-word").innerHTML = reveal.join("  ");
    console.log(reveal);
    document.getElementById("previous-guesses").innerHTML = "Guesses: ";
    document.getElementById("message").innerHTML = "<h3>New game!</h3>";
    document.getElementById("the-pic").innerHTML = "<img src = 'assets/simba_6.jpg' alt = '6'>";
}

function userGuess(event){
    var letter = event.key;
    if (alphabet.includes(letter)&&!guesses.includes(letter)){              //we only continue if the key is new and a letter
        guesses+=letter;                                                    //add users guess to the list of guessed letters
        document.getElementById("previous-guesses").innerHTML = "Guesses: "+ guesses;    //display them                              
        var i;
        var match = false;
        

        //CHECK the guess letter by looping through each letter in theWord
        for (i=0;i<theWord.length;i++){                         
            if (letter===theWord.split("")[i]){                             //If the guessed letter matches a letter in theWord, we... 
                match = true;                                               //verify a match, 
                remainingLetterCount--;                                     //descrease the remainingLetterCount,
                reveal[i]=letter;
                document.getElementById("revealing-word").innerHTML = reveal.join("  ");             //and display the letter.
                document.getElementById("message").innerHTML = "<h3>It's a match!</h3>";
            }
        }
        if (!match){                                                        //If there were no matches, we... 
            manCount--;                                                     //decrease manCount and
            if (manCount==1){document.getElementById("the-pic").innerHTML = "<img src = 'assets/simba_1.jpg' alt = '1'>";} 
            if (manCount==2){document.getElementById("the-pic").innerHTML = "<img src = 'assets/simba_2.jpg' alt = '2'>";} 
            if (manCount==3){document.getElementById("the-pic").innerHTML = "<img src = 'assets/simba_3.jpg' alt = '3'>";} 
            if (manCount==4){document.getElementById("the-pic").innerHTML = "<img src = 'assets/simba_4.jpg' alt = '4'>";} 
            if (manCount==5){document.getElementById("the-pic").innerHTML = "<img src = 'assets/simba_5.jpg' alt = '5'>";} 
            if (manCount==0){document.getElementById("the-pic").innerHTML = "<img src = 'assets/simba_0.jpg' alt = '0'>";} 
            document.getElementById("message").innerHTML = "<h3>No match, sorry.</h3>";
        }
        console.log(match);

        //END GAME?
        if (remainingLetterCount<=0){                                       //if youve won...
            document.getElementById("message").innerHTML = "<h3>You won! </h3>";
        }
        if (manCount<=0){                                                   //if you've lost...
        document.getElementById("message").innerHTML = "<h3>You lost, sorry.</h3>";
        }
        console.log(manCount);
    }
}

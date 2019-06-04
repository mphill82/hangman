var alphabet = "abcdefghijklmnopqrstuvwxyz"
var theWord;
var guesses;
var remainingLetterCount;
var manCount;
var reveal;

reset();

function reset(){
    theWord = "secret";
    guesses = "";
    remainingLetterCount = theWord.length;
    manCount = 6;
    reveal = "_".repeat(remainingLetterCount).split("");
    document.getElementById("revealing-word").innerHTML = reveal.join("  ");
    console.log(reveal);
}

function userGuess(event){
    var letter = event.key;
    if (alphabet.includes(letter)&&!guesses.includes(letter)){              //we only continue if the key is new and a letter
        guesses+=letter;                                                    //add users guess to the list of guessed letters
        document.getElementById("previous_guesses").innerHTML = "Guesses: "+ guesses;    //display them                              
        var i;
        var match = false;
        

        //CHECK the guess letter by looping through each letter in theWord
        for (i=0;i<theWord.length;i++){                         
            if (letter===theWord.split("")[i]){                             //If the guessed letter matches a letter in theWord, we... 
                match = true;                                               //verify a match, 
                remainingLetterCount--;                                     //descrease the remainingLetterCount,
                //-->adjust display of theWord                              //and display the letter.
                reveal[i]=letter;
                document.getElementById("revealing-word").innerHTML = reveal.join("  ");
                document.getElementById("message").innerHTML = "<h3>It's a match!</h3>";
            }
        }
        if (!match){                                                        //If there were no matches, we... 
            manCount--;                                                     //decrease manCount and
            //-->change the image of the man                                //change the image of the man.
            document.getElementById("message").innerHTML = "<h3>No match, sorry.</h3>";
        }
        console.log(match);

        //END GAME?
        if (remainingLetterCount<=0){                                       //if youve won...
            document.getElementById("message").innerHTML = "<h3>You won! </h3>";
            //--> make reset button which, if pressed, executes reset()
        }
        if (manCount<=0){                                                   //if you've lost...
        document.getElementById("message").innerHTML = "<h3>You lost, sorry.</h3>";
            //--> make reset button which, if pressed, executes reset()
        }
        console.log(manCount);
    }
}

function reset(){
    var theWord = "secret";
    var guesses = "";
    remainingLetterCount = theWord.length;
    manCount = 6;
}

reset();

while (1==1){
    //LISTEN for a typed character, call it letter
    //--> call the typed character letter
    guesses+=letter;                                        //add users guess to the list of guessed letters
    //--> adjust guessed letters display
    var i;
    var match = false;

    //CHECK the guess letter by looping through each letter in theWord
    for (i=0;i<theWord.length;i++){                         
        if (letter===theWord.split("")[i]){                 //If the guessed letter matches a letter in theWord, we... 
            match = true;                                   //verify a match, 
            remainingLetterCount--;                         //descrease the remainingLetterCount,
            //-->adjust display of theWord                  //and display the letter.
            //-->change displayed message to "it's a match"
        }
    }
    if (!match){                                            //If there were no matches, we... 
        manCount--;                                         //decrease manCount and
        //-->change the image of the man                    //change the image of the man.
        //-->change displayed message to "no matches"
    }

    //END GAME?
    if (remainingLetterCount<=0){                           //if youve won...
        //-->change message display "win"
        //--> make reset button which, if pressed, executes reset()
    }
    if (manCount<=0){                                       //if you've lost...
        //-->change message display "lose"
        //--> make reset button which, if pressed, executes reset()
    }
}

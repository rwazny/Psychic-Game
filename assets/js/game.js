
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

 var wins = 0;
 var losses = 0;
 var numGuesses = 10;
 var guessChoices = [];

 document.onkeyup = function(event) {

     var userGuess = event.key;

     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

     var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
     


    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 10;
  guessChoices = [];
  alert("You Might consider a Career Change...Good Job!");
  console.log(wins);
        }

        if (userGuess != computerGuess) {
            numGuesses --;
         guessChoices.push(userGuess);

        }

        if (numGuesses === 0) {

        numGuesses = 10;
        losses ++;
        guessChoices = [];
        alert("A Psychic you are not...Try Again!");
        console.log(losses);

        }

    var html = 
"<p><h1>Guess what letter I'm thinking of!</h1></p>" +
"<p><h2>The game begins by entering your letter choice</h2></p>" +
    "<p><h2>wins: " + wins + "</h2></p>" +
    "<p><h2>losses: " + losses + "</h2></p>" +
    "<p><h2>Guesses Left: " + numGuesses + "</h2></p>" +
    "<p><h2>Your Guesses so far: " + guessChoices.join(", ") + "</h2></p>";

    document.querySelector("#game").innerHTML = html;

   
    
    }
}
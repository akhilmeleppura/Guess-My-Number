function checkGuess() {
    var guess = document.getElementById("guessInput").value;
    var secretNumber = Math.floor(Math.random() * 10) + 1;
  
    if (guess == secretNumber) {
      document.getElementById("result").innerText = "Congratulations! You won!";
    } else {
      document.getElementById("result").innerText = "Sorry, the secret number was " + secretNumber + ". Try again!";
    }
  }
  
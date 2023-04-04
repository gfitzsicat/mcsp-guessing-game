let player = {};

function guessGame() {
  let name

  while (name === null || Number.isInteger(Number(name)) || name === "" || name === undefined) {
    name = prompt("Who's playing?")
  }

  let secretNumber = 5;
  let guess = prompt(`Guess the number ${name}`);
  let number = Number(guess);
  let tries = 1;
  let guesses = [guess];

  while (number !== secretNumber) {
    if (number < secretNumber) {
      number = Number(prompt(`${name}, too Low, try again`));
    } else if (number > secretNumber) {
      number = Number(prompt(`${name}, too High, try again`));
    } else {
      number = Number(prompt(`${name}, that is not a Number`));
    }

    guess = number;
    guesses.push(guess);
    tries++;
  }

  if (number === secretNumber) {
    alert(
      ` ${name}! You got the number (${secretNumber}) correct! It took you ${tries} tries!`
    );
    alert(`These were your guesses ${guesses}!`);
  }


  if (player[name] === undefined) {
    player[name] = guesses;
  } else {
    if (player[name].length > guesses.length) {
      alert(`Correct! ${name}! You did better in your last game by ${player[name].length - guesses.length}`);
    } else {
        alert(` ${name}! You got the number (${secretNumber}) correct! It took you ${tries} tries!`);
      alert(`These were your guesses ${guesses}!`);
  }
}
  

  // determine if user wants to play again.
  const playAgain = prompt('Do you want to play again? type "yes"');
  if (playAgain === "yes") {
    guessGame();
  } else {
    alert("Goodbye!");
  }
}

guessGame();


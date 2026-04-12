//first step is to create a function that will prompt the user to enter code
// they will have the option of rock, vs paper vs siccors
//next create function to have computer randomly select rock paper siccors
// math.random() will be the key to obtaining these values
//finally use console.log() to print these values

function p1() {
  let x = prompt("Type in Rock, Paper, or Scissors: ");
  return x.toUpperCase();
}

function p2() {
  let y = Math.floor(Math.random() * 100);
  if (y <= 33) return "ROCK";
  if (y <= 66) return "PAPER";
  return "SCISSORS";
}

function determineWinner(user, cpu) {
  if (user === cpu) {
    return "TIE";
  }

  if (
    (user === "ROCK" && cpu === "SCISSORS") ||
    (user === "PAPER" && cpu === "ROCK") ||
    (user === "SCISSORS" && cpu === "PAPER")
  ) {
    return "W";
  } else {
    return "L";
  }
}




function playGame() {
  let userScore = 0;
  let cpuScore = 0;

  
  for (let i = 0; i < 5; i++) {
    let playerChoice = p1();
    let cpuChoice = p2();
    
    let result = determineWinner(playerChoice, cpuChoice);
    console.log(`Round ${i + 1}: You chose ${playerChoice}, CPU chose ${cpuChoice}. Result: ${result}`);

    
    if (result === "W") {
      userScore++;
    } else if (result === "L") {
      cpuScore++;
    }
  
  }

  console.log("--- FINAL SCORE ---");
  console.log(`You: ${userScore} | CPU: ${cpuScore}`);

  if (userScore > cpuScore) {
    console.log("Victory! You won the best of 5!");
  } else if (cpuScore > userScore) {
    console.log("Game Over. The CPU defeated you.");
  } else {
    console.log("It's a total stalemate!");
  }
}

playGame();
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

const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// 1. Create a container for the buttons
const container = document.createElement('div');
const resultDisplay = document.createElement('h2');
resultDisplay.textContent = "Choose your move to play!";
resultDisplay.style.textAlign = "center"; // Optional: centers the text
document.body.appendChild(resultDisplay);
document.body.appendChild(container);

// 2. Loop through the choices to create buttons
choices.forEach(choice => {
  const btn = document.createElement('button');
  container.style.display = "flex";
container.style.justifyContent = "space-evenly";
  btn.textContent = choice;
  
  // 3. Attach the same logic to every button
  btn.addEventListener('click', () => {
    playRound(choice);
  });
btn.style.padding = "10px 20px";
btn.style.margin = "5px"
btn.style.fontSize = "16px";
btn.style.cursor = "pointer";
container.appendChild(btn);
});

// 4. Single function to handle the logic
function playRound(playerSelection) {
  const cpuSelection = p2(); // Your existing math function
  const result = determineWinner(playerSelection, cpuSelection);
  
  // Update the webpage instead of just the console
  if (result === "TIE") {
    resultDisplay.textContent = `It's a tie! Both chose ${playerSelection}.`;
  } else if (result === "W") {
    resultDisplay.textContent = `You Win! ${playerSelection} beats ${cpuSelection}.`;
  } else {
    resultDisplay.textContent = `You Lose! ${cpuSelection} beats ${playerSelection}.`;
  }

  console.log(`You: ${playerSelection} | CPU: ${cpuSelection} | Result: ${result}`);
}

//function for game result
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





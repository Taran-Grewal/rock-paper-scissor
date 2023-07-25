const rock = "rock";
const paper= "paper";
const scissor = "scissor";

function playerSelection(){
  let choose = prompt("choose rock paper or scissor");
  lowercase = choose.toLowerCase();
  return lowercase;
  



}
function getComputerChoice(values){
  
  return values[Math.floor(Math.random()*values.length)];


}



function playGround(playerChoice,computerSelection){
  

  if(playerChoice == rock && computerSelection == rock){
    return "DRAW";
  
  }
  if(playerChoice ==paper&& computerSelection == paper){
    return "DRAW";
  
  }
  if(playerChoice == scissor && computerSelection == scissor){
    return "DRAW";
  
  }
  else if(playerChoice==rock &&computerSelection==paper){
   return "YOU LOOSE";
    
  }
  else if(playerChoice==paper &&computerSelection==scissor){
    return "YOU LOOSE";
}
else if(playerChoice==scissor &&computerSelection==rock){
  return "YOU LOOSE";
}
else if(playerChoice==rock &&computerSelection==scissor){
  return "YOU WIN";
}
else if(playerChoice==scissor &&computerSelection==paper){
  return "YOU WIN";
}
else if(playerChoice==paper &&computerSelection==rock){
  return "YOU WIN";
}
else{
  return "NULL";
}

}



let values = [rock,paper,scissor];
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
let computerSelection = getComputerChoice(values);
let playerChoice = playerSelection();

let result = playGround(playerChoice, computerSelection);

console.log(`Game ${i + 1}: You chose ${playerChoice}, Computer chose ${computerSelection}. Result: ${result}`);

if (result === "YOU WIN") {
  playerScore++;
} else if (result === "YOU LOOSE") {
  computerScore++;
}
}



//console.log(getComputerChoice(values))


console.log(`Final Score: You ${playerScore} - ${computerScore} Computer`);







const rock = "rock";
const paper= "paper";
const scissors = "scissors";

function playerSelection(){
  prompt("choose rock paper or scissor")



}
function getComputerChoice(values){
  
  return values[Math.floor(Math.random()*values.length)];


}



function playGround(playerSelection,computerSelection){
  if(playerSelection == computerSelection){
  return "draw";
  }
  else if(playerSelection==rock &&computerSelection==paper){
    return "ou loose";
  }
  else if(playerSelection==paper &&computerSelection==scissors){
    return "ou loose";
}
else if(playerSelection==scissors &&computerSelection==rock){
  return "ou loose";
}
else{
  return "you win";
}
}

let values = [rock,paper,scissors];
const computerSelection =getComputerChoice(values);

console.log(getComputerChoice(values));
console.log(playerSelection());
console.log(playGround(playerSelection,computerSelection));
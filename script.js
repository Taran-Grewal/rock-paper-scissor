const rock = "rock";
const paper= "paper";
const scissors = "scissors";

function getComputerChoice(values){
  
        return values[Math.floor(Math.random()*values.length)];
  
  
}
let values = [rock,paper,scissors];
console.log(getComputerChoice(values));
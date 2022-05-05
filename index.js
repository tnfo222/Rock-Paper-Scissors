

let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number                        

//Conditional logic goes here to determine the computers selection
if (computerSelection < .33) {
  computerSelection = "rock";
}
else if (computerSelection <= .66) {
  computerSelection = "paper";
}
else {
  computerSelection = "scissors";
}
  

//Function to compare the userSelection and the computerSelection to determine the winner
let compare=function(selection1,selection2){
  if (selection1 === selection2){
    return "It is a Tie!";
  }
  if (selection1 === "rock"){
    if (selection2 === "scissors"){
      return "Rock Wins!";
    }
    else if (selection2 === "paper"){
      return "Paper Wins";
    }
  }
  if (selection1 === "paper"){
    if (selection2 === "scissors") {
      return "Scissors Win!";
    }
    else if (selection2 === "rock"){
      return "Rock Wins!";
    }
  }
  if (selection1 === "scissors"){
    if (selection2 === "paper"){
      return "Scissors Win!";
    }
    else if(selection2 === "rock"){
      return "Rock Wins!";
    }
  }  
}
console.log(compare(userSelection,computerSelection)); //call the function to compare and display result
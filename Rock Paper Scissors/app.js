let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionMessage_p = document.getElementById('action-message');
let button = document.createElement("button");


function getComputerChoice(computerChoice) {
	const choices = ['r','p','s'];
	const randomNumber = (Math.floor(Math.random() * 3));
	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter==="r") return "Rock";
    if (letter==="p") return "Paper";
    if (letter==="s") return "Scissors"; 
}

function win(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);

  if (userScore===10) { endOfGame("win");}
}

function lose(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);

  if (computerScore===10) { endOfGame("lose");}
}

function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}


function game(userChoice) {
	const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){

    	case "rs":
    	case "pr":
    	case "sp":
    	 win(userChoice, computerChoice);
    	 break;

    	case "rp":
    	case "ps":
    	case "sr":
    	 lose(userChoice, computerChoice); 
    	 break;

    	case "rr":
    	case "pp":
    	case "ss":
    	 draw(userChoice, computerChoice);
    	 break;

    }
}




function main(){
   rock_div.addEventListener('click', () => game("r"));
   paper_div.addEventListener('click', () => game("p"));
   scissors_div.addEventListener('click', () => game("s"));   
}

function endOfGame(end){
 switch(end){
  
  case "win":	
   result_p.innerHTML = "Congratulations! You win :)";
   result_p.style.marginTop ="50px";
   document.getElementById("choices").style.display = "none";
   button.innerHTML = "Try again";
   button.classList.add('button-style');
   actionMessage_p.replaceWith(button);
   button.addEventListener('click', ()=> document.location.reload());
   break;

  case "lose":	
   result_p.innerHTML = "Sorry...You lose :(";
   result_p.style.marginTop ="50px";
   document.getElementById("choices").style.display = "none";
   button.innerHTML = "Try again";
   button.classList.add('button-style');
   actionMessage_p.replaceWith(button);
   button.addEventListener('click', ()=> document.location.reload());
   break; 
}}



main();
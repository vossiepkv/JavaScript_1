//Javascript

//head
const randomNumber = Math.random();

//grabs data from local storage if null > creates default values

const score = JSON.parse(localStorage.getItem('score')) || { Wins: 0, Losses: 0, Ties: 0 };


function playGame(playerMove)
{
  const computerMove = randomMove();
  
  let result = '';

  if (playerMove === 'Rock')
  {
    if (computerMove === 'rock') 
    {
      result = 'Tie';
    }  
    else if (computerMove === 'paper') 
    {
      result = 'You Lose';
    } 
    else if (computerMove === 'scissors') 
    {
      result = 'You Win';
    } 
  }

  else if (playerMove === 'Paper')
  {
  if (computerMove === 'rock') 
  {
    result = 'You Win';
  }  
  else if (computerMove === 'paper') 
  {
    result = 'Tie';
  } 
  else if (computerMove === 'scissors') 
  {
    result = 'You Lose';
  } 
  }

  else if (playerMove === 'Scissors')
  {
  if (computerMove === 'rock') 
  {
    result = 'You Lose';
  }  
  else if (computerMove === 'paper') 
  {
    result = 'You Win';
  } 
  else if (computerMove === 'scissors') 
  {
    result = 'Tie';
  } 
  }

  if (result === 'You Win')
  {
    score.Wins += 1;
  }
  else if (result === 'You Lose')
  {
    score.Losses += 1;
  }
  else if (result === 'Tie')
  {
    score.Ties += 1;
  }
  
  localStorage.setItem('score', JSON.stringify(score));
  
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
Wins:${score.Wins}, Losses:${score.Losses}, Ties${score.Ties}`);
}

function randomMove() 
{
  let computerMove = '';

  const randomNumber = Math.random();


  if (randomNumber >= 0 && randomNumber < 1 / 3)
  {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2 / 3)
  {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber <= 1)
  {
    computerMove = 'scissors';
  }

  return computerMove;
}


// button behaviour
document.getElementById("Rock").onclick = function () 
{
  playGame('Rock');

  randomMove();
}

document.getElementById("Paper").onclick = function () 
{
  playGame('Paper');

  randomMove();
}

document.getElementById("Scissors").onclick = function () 
{
  playGame('Scissors')
  randomMove();
}

document.getElementById("Reset").onclick = function () 
{
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem('score');

  alert('Your Score Has Been Reset.');
}
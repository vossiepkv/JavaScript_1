//Javascript

//head
const randomNumber = Math.random();

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
      result = 'you lose';
    } 
    else if (computerMove === 'scissors') 
    {
      result = 'you win';
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
  
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);
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
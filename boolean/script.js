const randomNumber = Math.random();

document.getElementById("Rock").onclick = function () 
{
  const randomNumber = Math.random();

  let computerMove = '';

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

  let result = '';

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

  alert(`You picked rock. Computer picked ${computerMove}. ${result}.`);
}

document.getElementById("Paper").onclick = function () 
{
  const randomNumber = Math.random();

  let computerMove = '';

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

  let result = '';

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

  alert(`You picked Paper. Computer picked ${computerMove}. ${result}.`);
}

document.getElementById("Scissors").onclick = function () 
{
  const randomNumber = Math.random();

  let computerMove = '';

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

  let result = '';

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

  alert(`You picked Scissors. Computer picked ${computerMove}. ${result}.`);
}
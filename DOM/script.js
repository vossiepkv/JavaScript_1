//DOM - controls aspects of the webpage 
//document.body.innerHTML = 'hello';
document.title = 'good';

console.log(document.body);

//changes certain aspects of HTML defined in query selector
document.querySelector('button')
  .innerHTML = 'changed';

const buttonElement = document.querySelector('.js-button')
  .innerHTML = 'huhhhh';
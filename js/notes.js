/* Assignment 11 */
function buttonClicked () {
  document.getElementById('button-11').classList.toggle('is-red');
  console.log('button clicked'); /* for debugging, see console on browser */
}

function windowLoaded () {
  document.getElementById('button-11').addEventListener('click', buttonClicked);
  document.addEventListener('scroll',)
}

function scrollEventFunction(eventData)
{
  console.log(eventData)
}

window.onload = windowLoaded;




// Use cmd + / to comment quickly

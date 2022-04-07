/* Sidebar Toggles */
/* Select the ID 'main', and listen for a click */
document.getElementById('burger').addEventListener('click', openNav);
document.getElementById('overlay').addEventListener('click', closeNav);

/* Function for expanding the sidebar */
function openNav() {
  document.getElementById("sidenavigation").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
  console.log('hamburger clicked open, overlay on'); /* for debugging, see console on browser */
}

/* Function for minimizing the sidebar */
function closeNav() {
  document.getElementById("sidenavigation").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  console.log('hamburger clicked closed, overlay off'); /* for debugging, see console on browser */
}

/* Scrolling Event Listener */
function windowLoaded () {
  document.addEventListener('wheel',scrollEventFunction)
}

function scrollEventFunction(eventData){
  console.log(eventData)
}
/*then find the delta*/

/*const response await fetch(api url)


window.onload = windowLoaded;

/*
function buttonClicked () {
  document.getElementById('button-11').classList.toggle('is-red');
  console.log('button clicked');
}
function windowLoaded () {
  document.getElementById('button-11').addEventListener('click', buttonClicked);
}
window.onload = windowLoaded;
*/

/* Toggle the sidebar */
/*
function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
}
*/

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
/*function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}*/

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
/*function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}*/

/*
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
*/

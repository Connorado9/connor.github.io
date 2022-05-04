/*** Sidebar Toggles ***/
/* Select the ID 'main', and listen for a click */
document.getElementById('burger').addEventListener('click', openNav);
document.getElementById('overlay').addEventListener('click', closeNav);
/* Function for expanding the sidebar */
function openNav()
{
  document.getElementById("sidenavigation").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
  console.log('hamburger clicked open, overlay on'); /* for debugging, see console on browser */
}
/* Function for minimizing the sidebar */
function closeNav()
{
  document.getElementById("sidenavigation").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  console.log('hamburger clicked closed, overlay off'); /* for debugging, see console on browser */
}


/*** Reveal Effect ***/
function reveal() {
  var reveals = document.querySelectorAll(".reveal"); //select reveal elements

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight; //height of viewport
    var elementTop = reveals[i].getBoundingClientRect().top; //distance from top of viewport
    var elementVisible = 150; //height at which the element should be revealed

    if (elementTop < windowHeight - elementVisible) { //trigger animation
      reveals[i].classList.add("active"); //display the element
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

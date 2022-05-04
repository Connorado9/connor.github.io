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


/*** Resume Expereince vs Education Filter ***/
document.getElementById('edu-btn').addEventListener('click', showEducation);
document.getElementById('exp-btn').addEventListener('click', showExperience);
function showExperience()
{
  document.getElementById('exp-btn').style.color = "#1B1B1B";
  document.getElementById('edu-btn').style.color = "#969595";
  document.getElementById('experience').style.display = "grid";
  document.getElementById('education').style.display = "none";
}
function showEducation()
{
  document.getElementById('exp-btn').style.color = "#969595";
  document.getElementById('edu-btn').style.color = "#1B1B1B";
  document.getElementById('experience').style.display = "none";
  document.getElementById('education').style.display = "grid";
}
window.onload = showExperience;

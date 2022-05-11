let openMenu = document.getElementsByClassName("open")[0];
let closeMenu =document.getElementsByClassName("close")[0];
let links = document.getElementsByClassName("links");
let overlay = document.getElementsByClassName("overlay");

window.onload = function()
{
openMenu.onclick = function() {
    links.style.display = "block";
    overlay.style.display = "block";
    console.log("clicked");
  }
}
function changeColor()
{
  links.style.display = "block";
  overlay.style.display = "block";
  console.log("clicked");
}


window.onload = function()
{

openMenu.onclick = changeColor;
};
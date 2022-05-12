let openMenu = document.getElementsByClassName("open")[0];
let closeMenu =document.getElementsByClassName("close");
let links = document.getElementsByClassName("links");
let overlay = document.getElementsByClassName("overlay");

openMenu.onclick = function() {
    links.style.display = "block";
    overlay.style.display = "block";
    console.log("clicked");
  }
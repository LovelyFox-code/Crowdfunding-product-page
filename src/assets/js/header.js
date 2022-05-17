let openMenu = document.getElementsByClassName("open")[0];
let closeMenu = document.getElementsByClassName("close")[0];
let links = document.getElementsByClassName("links")[0];
let overlay = document.getElementsByClassName("overlay")[0];

openMenu.onclick = function () {
  links.style.display = "block";
  overlay.style.display = "block";
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
  console.log("clicked");
};
closeMenu.onclick = function () {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  links.style.display = "none";
  overlay.style.display = "none";
};

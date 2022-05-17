
// pledge open
let activeRadio = document.getElementsByClassName("radio__item");
let pledge = document.getElementsByClassName("selected-pledge");
let boxModal = document.getElementsByClassName("modal__content__box");

for (let i = 0; i < activeRadio.length; i++) {
  activeRadio[i].addEventListener("click", function handleClick() {
    boxModal[i].classList.add("selected");
    pledge[i - 1].style.display = "block";
  });
}

// bamboo plage open

let continueBamboo = document.getElementById("bamboo");
let successBamboo = document.getElementsByClassName("modal__success")[0];
let btnClose = document.getElementById("btn-close");
continueBamboo.onclick = function () {
  modal.style.display = "none";
  successBamboo.style.display = "block";
  window.scrollTo(0, 0);
  overlay.style.display = "block";
};
btnClose.onclick = function () {
  successBamboo.style.display = "none";
  overlay.style.display = "none";
};

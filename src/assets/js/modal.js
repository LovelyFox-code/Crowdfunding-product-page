// Get the modal
let modal = document.getElementsByClassName("modal")[0];
let btn = document.getElementById("open-modal");
let closeBtn = document.getElementById("close");
//open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block";
}
closeBtn.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
}
// By clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
}

// pledge open
let activeRadio = document.getElementsByClassName("radio__item");
let pledge = document.getElementsByClassName("selected-pledge")[0];
let boxModal = document.getElementsByClassName("modal__content__box");
let modalContent = document.getElementsByClassName("modal__content");

for(let i = 0; i<activeRadio.length; i++){
  activeRadio[i].addEventListener('click', function handleClick(){
    boxModal[i].classList.add("selected");
    pledge.style.display = "block";
  })
}

// bamboo plage open

let continueBamboo = document.getElementById("bamboo");
let successBamboo = document.getElementById("success");
let btnClose = document.getElementById("btn-close");
continueBamboo.onclick = function() {
  successBamboo.style.display = "block";
  modal.style.display = "none";
}
continueBamboo.addEventListener('click', function handleClick(){
  // successBamboo.classList.add("selected");
  successBamboo.style.display = "block";
})
btnClose.onclick = function() {
  successBamboo.style.display = "none";
}
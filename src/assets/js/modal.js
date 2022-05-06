// Get the modal
let modal = document.getElementById("modal");

// Get the button that opens the modal
let btn = document.getElementById("open-modal");

// Get the <svg> element that closes the modal
let closeBtn = document.getElementById("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";

}

// When the user clicks on <svg> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//pledge open
// let activeRadio = document.getElementsByClassName("radio__item");
// let pledge = document.getElementsByClassName("selected-pledge");
// let boxModal = document.getElementsByClassName("modal-content__box");
// activeRadio.onclick = function() {
//   pledge.style.display = "block";
//   boxModal.style.border = "1px solid rgba(60, 179, 171, 1)"
// }
//bamboo plage open

let continueBamboo = document.getElementById("bamboo");
let successBamboo = document.getElementById("success");
let btnClose = document.getElementById("btn-close");
continueBamboo.onclick = function() {
  successBamboo.style.display = "block";
  modal.style.display = "none";
}
btnClose.onclick = function() {
  successBamboo.style.display = "none";
}
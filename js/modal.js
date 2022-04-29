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


//bamboo plage open

let continueBamboo = document.getElementById("bamboo");
let successBamboo = document.getElementById("success")
continueBamboo.onclick = function() {
  successBamboo.style.display = "block";
  modal.style.display = "none";
}
// Get the modal
let modal = document.getElementsByClassName("modal")[0];
let btn = document.getElementById("open-modal");
let closeBtn = document.getElementById("close");
//open the modal
btn.onclick = function () {
  modal.style.display = "block";
  overlay.style.display = "block";
};
closeBtn.onclick = function () {
  modal.style.display = "none";
  overlay.style.display = "none";
};
// By clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
};

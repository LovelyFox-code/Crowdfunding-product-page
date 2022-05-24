// By clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == overlay) {
    modal.style.display = "none";
    overlay.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    links.style.display = "none";
    successModal.style.display = "none"
  }
};
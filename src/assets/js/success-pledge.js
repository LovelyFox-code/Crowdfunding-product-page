// PLEDGE SUCCESS

let successModal = document.getElementsByClassName("modal__success")[0];
let btnClose = document.getElementById("btn-close");
let changedText = document.getElementsByClassName("text-success")[0];

//onSubmit open modal NO REWARD success

function openNoRewardSuccess() {
  console.log("NO REWARD");
  modal.style.display = "none";
  successModal.style.display = "block";
  window.scrollTo(0, 0);
  overlay.style.display = "block";
  changedText.innerHTML = " with no rewards";
}

//onSubmit open modal BAMBOO success

function openBambooSuccess() {
  console.log("Bammmbooo");
  modal.style.display = "none";
  successModal.style.display = "block";
  window.scrollTo(0, 0);
  overlay.style.display = "block";
  changedText.innerHTML = " Bamboo Monitor Riser";
}

//onSubmit open modal BLACK success

function openBlackSuccess() {
  console.log("BLACK");
  modal.style.display = "none";
  successModal.style.display = "block";
  window.scrollTo(0, 0);
  overlay.style.display = "block";
  changedText.innerHTML = " Black Edition Stand";
}
//onSubmit open modal SPECIAL success

// function openSpecialSuccess() {
//   console.log("SPECIAL");
//   modal.style.display = "none";
//   successModal.style.display = "block";
//   window.scrollTo(0, 0);
//   overlay.style.display = "block";
//   changedText.innerHTML = " Mahogany Special Edition";

// }

btnClose.onclick = function () {
  successModal.style.display = "none";
  overlay.style.display = "none";
};

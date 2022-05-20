// pledge open
let activeRadio = document.getElementsByClassName("radio__item");
let pledge = document.getElementsByClassName("selected-pledge");
let boxModal = document.getElementsByClassName("modal__content__box");

for (let i = 0; i < boxModal.length; i++) {
  boxModal[i].addEventListener("click", () =>
    addPledge(boxModal[i], pledge[i])
  );
}
function addPledge(div, btn) {
  for (let i = 0; i < boxModal.length; i++) {
    boxModal[i].classList.remove("selected");
    pledge[i].style.display = "none";
  }
  if(div.classList.contains("disable")){
    console.log("Disable");
  }else{
    div.classList.add("selected");
    btn.style.display = "block";
  }

}

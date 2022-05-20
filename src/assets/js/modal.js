// Get the modal
let modal = document.getElementsByClassName("modal")[0];
let btn = document.getElementsByClassName("open-modal");
let closeBtn = document.getElementById("close");
//open the modal
for(let i = 0; i < btn.length; i++){
  btn[i].onclick = function () {
    modal.style.display = "block";
    overlay.style.display = "block";
    window.scrollTo(0, 0);
  };
}
//close modal
closeBtn.onclick = function () {
  modal.style.display = "none";
  overlay.style.display = "none";
};


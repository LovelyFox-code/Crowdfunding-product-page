// add class selected to the same pledge

function selectBamboo() {
    console.log("success");
    for (let i = 1; i < boxModal.length; i++) {
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
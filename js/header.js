function burgerMenu() {
    let links = document.getElementById("overlay");
    let close = document.getElementById("close");
    let open = document.getElementById("open");
    if (links.style.display === "block") {
        close.style.display = "none";
        open.style.display = "block";
        links.style.display = "none";
    } else {
        close.style.display = "block";
        open.style.display = "none";
        links.style.display = "block";
    }
  }
//button bookmark 
let bookmark = document.getElementsByClassName("bookmark")[0];
//on click change for bookmarked 

bookmark.onclick = function(){
    bookmark.classList.toggle("bookmark-active");
    // bookmark.innerHTML="bookmarked";
    
}
// bookmark.addEventListener("click", function handleBookmark() {
//     bookmark.classList.add("bookmark-active");
//     bookmark.innerHTML="bookmarked";
//     console.log("it works");
//   });
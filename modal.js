var modal = document.getElementById("myModal");
$(".myImg").click(function () { 
    var myId = $(this).prop("class");
    var myId = myId.split(" ");
    var img = document.getElementById(myId[0]);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

document.onkeyup = function(event) {
    if (event.keyCode === 27){
        modal.style.display = "none";
    }
 }
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
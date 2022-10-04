// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption





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



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



document.onkeyup = function(event) {
    if (event.keyCode === 27){
        modal.style.display = "none";
    }
 }

//  When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
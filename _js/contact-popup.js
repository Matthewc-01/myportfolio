(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('I3RsCbbME6cyFeiqL');
})();

var contactModal = document.getElementById("contact-popup");

$(".myBtn").click(function () { 
    contactModal.style.display = "block";  
});

$(".contact-popup-close").click(function () { 
    contactModal.style.display = "none";
});

function isEmail(email) {
  var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return EmailRegex.test(email);
}
function hasValue(object) {
  const isEmpty = Object.values(object).every(x => x !== null && x !== '');
  // console.log(isEmpty);
  return isEmpty
}


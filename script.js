
var addListButton = document.getElementById("add-list");

addListButton.addEventListener("click", function() {
  console.log("button clicked");

  var addListPopup = document.getElementById("add-list-popup");
  addListPopup.style.display = "flex";

});


var closeButtonsArray = document.querySelectorAll(".close");
closeButtonsArray = Array.from(closeButtonsArray);

closeButtonsArray.forEach(function(closeButton, i){
  closeButton.addEventListener("click", function() {
    var addListPopup = document.getElementById("add-list-popup");
    addListPopup.style.display = "none";

  });
});



var addItemButton = document.getElementById("add-item");

addItemButton.addEventListener("click", function() {
  console.log("button clicked");

  var addListPopup = document.getElementById("add-item-popup");
  addListPopup.style.display = "flex";

});


var closeButtonsArray = document.querySelectorAll(".close");
closeButtonsArray = Array.from(closeButtonsArray);

closeButtonsArray.forEach(function(closeButton, i){
  closeButton.addEventListener("click", function() {
    var addItemPopup = document.getElementById("add-item-popup");
    addItemPopup.style.display = "none";

  });
});

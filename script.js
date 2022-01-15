"use strict";

var add = document.getElementById('add');
var deleteFirst = document.getElementById('deleteFirst');
var deleteLast = document.getElementById('deleteLast');
var table = document.getElementById('table');



add.addEventListener('click', function () {
  if (document.getElementById("inputValue1").value.length == 0 || document.getElementById("inputValue2").value.length == 0 || document.getElementById("inputValue3").value.length == 0 || document.getElementById("inputValue3").value <= 0) {
    alert("Įveskite duomenis")
  } else {
    var text = table.insertRow();
    for (var i = 0; i < 3; i++) {
      text.insertCell();
      var inputValue = document.querySelectorAll('input');
      text.cells[i].innerText = inputValue[i].value;
      inputValue[i].value = '';
    }
    text.classList.add('data');
  }
})

deleteFirst.addEventListener("click", function(){
  var removeFirstRow = document.getElementsByTagName('tr');
  if(removeFirstRow.length && removeFirstRow.length > 1){
  removeFirstRow[removeFirstRow.length - removeFirstRow.length + 1].remove();
} else {
  alert("Nebėra ką trinti");
}
});

deleteLast.addEventListener("click", function(){
  var removeRow = document.getElementsByTagName('tr');
  if(removeRow.length && removeRow.length > 1){
  removeRow[removeRow.length - 1].remove();
} else {
  alert("Nebėra ką trinti");
}
});


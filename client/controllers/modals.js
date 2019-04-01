// Get the modal
var modal = document.getElementById("modal-list");
var modalForm = document.getElementById("modal-form");

// Get the button that opens the modal
var list = document.getElementById("show-list");
var form = document.getElementById("open-form");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
var closeList = document.getElementsByClassName("closeList")[0];

// When the user clicks the button, open the modal
list.onclick = () => {
  modal.style.display = "block";
};

form.onclick = () => {
  modalForm.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
close.onclick = () => {
  modalForm.style.display = "none";
};

closeList.onclick = () => {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

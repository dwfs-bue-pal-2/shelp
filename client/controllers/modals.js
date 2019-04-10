// // // Get the modal
var modal = document.getElementById("modal-list");
// // var modalForm = document.getElementById("modal-form");
var modalShop = document.getElementById("modal-shop");

// // // Get the button that opens the modal
// // var list = document.getElementById("show-list");
// // var form = document.getElementById("open-form");
// var profile = document.getElementsByClassName("shop_name");

// // // Get the <span> element that closes the modal
// // var close = document.getElementsByClassName("close")[0];
// // var closeList = document.getElementsByClassName("closeList")[0];
// // var closeShop = document.getElementsByClassName("closeShop")[0];

// // //Open previous modal
var back = document.getElementsByClassName("back")[0];

// // // When the user clicks the button, open the modal
// // list.onclick = () => {
// //   //   modalForm.style.display = "none";
// //   modalShop.style.display = "none";
// //   //   modal.style.display = "block";
// // };

// form.onclick = () => {
//   //   modal.style.display = "none";
//   modalShop.style.display = "none";
//   //   modalForm.style.display = "block";
// };

// profile.onClick = () => {
//   modalShop.style.display = "block";
// };
// // // When the user clicks on <span> (x), close the modal
// // close.onclick = () => {
// //   modalForm.style.display = "none";
// // };

// // closeList.onclick = () => {
// //   modal.style.display = "none";
// // };

// // closeShop.onclick = () => {
// //   modalShop.style.display = "none";
// // };

// // When the user clicks on Back, go back to List modal
 back.onclick = () => {
 modalShop.style.display = "none";
 modal.style.display = "block";
 };

// // // When the user clicks anywhere outside of the modal, close it
// // window.onclick = event => {
// //   if (event.target == modal) {
// //     modal.style.display = "none";
// //   }
// // };

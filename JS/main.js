// var isOpen=false;
// var boton = document.querySelector('#burger');
//   boton.addEventListener('click', onClick);
//   function onClick(){
//     if (isOpen===false) {
//       var menu = document.querySelector('header');
//       menu.setAttribute("class","open");
//       isOpen=true;
//     }
//     else {
//       var menu = document.querySelector('header');
//       menu.classList.remove("open");
//       isOpen=false;


function d(){
 document.body.classList.toggle("slide-right");
console.log("algo");
}

document.addEventListener("DOMContentLoaded", function(event) {
  d();
 });
function venga(){
console.log("Venga");

}

function filtro(element,button){


  var allButton = document.querySelectorAll(".filtro button");
  for (var i = 0; i < allButton.length; i++) {
    allButton[i].classList.remove("butonflitro");
  }
  button.setAttribute("class", "butonflitro");
  var allCards = document.querySelectorAll(".grid-item");

  for (var i = 0; i < allCards.length; i++) {
    allCards[i].setAttribute("style", "display: none");
  }
  // console.log(element);
  // var matches = document.querySelectorAll(element);
  // for (var i = 0; i < matches.length; i++) {
  //   matches[i].setAttribute("style", "display: flex");
  // }
///TRIGER DE COSA RARA
  setTimeout (function(){ ff(element) }, 0);

}

function ff(element){
  console.log(element);
  var matches = document.querySelectorAll(element);
  for (var i = 0; i < matches.length; i++) {
    matches[i].setAttribute("style", "display: flex");
  }
}

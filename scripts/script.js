// JavaScript Document

var menuButton = document.querySelector("header > button");
console.log(menuButton);
var deNav = document.querySelector("header nav");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  deNav.classList.toggle("open");
}


menuButton.addEventListener("click", kruis);

function kruis() {
  menuButton.classList.toggle("clicked");
}
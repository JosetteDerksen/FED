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



// Footer menu
var footerButtons = document.querySelectorAll("footer nav h4");

footerButtons.forEach(footerButton => {
  footerButton.addEventListener("click", toggleFooter);
});

function toggleFooter(event){
  event.target.nextElementSibling.classList.toggle("open");
  event.target.classList.toggle("open");
}



// Hamburgermenu knop zeggen open en dicht
var hamburgerButton = document.querySelector('.hamburgerbutton');
var menuOpen = false;

hamburgerButton.addEventListener('click', function() {
    if(menuOpen){
        hamburgerButton.setAttribute('aria-label', 'Hamburger menu openen');
        menuOpen = false;
    }else{
        hamburgerButton.setAttribute('aria-label', 'Hamburger menu sluiten');
        menuOpen = true;
    }
});



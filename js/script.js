//Script pour l'écran de chargement

$(window).on("load",function(){
        $(".loader-container").fadeOut(1000);
    });

// Script barre collante en haut de l'écran
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("barrealerte");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Event listener "scroll" sur window

// Récupérer valeur du scroll en Y : window.scrollY

// Savoir quand on monte ou descend 

// Si on monte, Faire apparaitre la navbar : navbar.style.top = 0px;

// Si on descend, Faire disparaitre la navbar : navbar.style.top = -60px;

const navbar = document.getElementById('navbar');

let beforeScrollPosition = window.scrollY;

window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    if (scrollPosition > beforeScrollPosition ) { 
        navbar.style.top = 0 + "px";
    } else if (scrollPosition < beforeScrollPosition) {
        navbar.style.top = -60 + "px";
    }
    beforeScrollPosition = scrollPosition;
})
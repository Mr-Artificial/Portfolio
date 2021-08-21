//Event Listener to respond to user clicks on hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");
const navLink = document.querySelectorAll(".nav-item");

const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const closeMenu = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

//Smooth Scrolling JS from NavBar click
$('nav-link').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

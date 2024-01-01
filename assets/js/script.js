const preloader = document.querySelector("[data-preloader]"); // Corrected selector
window.addEventListener("load", () => {
    preloader.classList.add("remove");
});

const addEventOnElements = function (elements, event, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(event, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]"); // Use querySelectorAll to select all matching elements
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav); // Fix the function name to addEventOnElements


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
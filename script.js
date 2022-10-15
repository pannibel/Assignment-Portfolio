"use strict"



const mainTitle = document.querySelector("#main_title h1");
const aboutText = document.querySelector("#about");
const width = document.documentElement.clientWidth;

window.onscroll = function() { 
    if (width > 420) {
            if (document.documentElement.scrollTop > 320) {
                mainTitle.classList.remove("fixed");
                mainTitle.style.marginTop = "320px";
                aboutText.classList.remove("hidden");
            }
    }
}


const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(link => link.addEventListener("click", () => {
    mainTitle.classList.remove("fixed");
    mainTitle.style.marginTop = "320px";
    aboutText.classList.remove("hidden");
}))
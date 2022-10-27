"use strict"

const mainTitle = document.querySelector("#main_title_h1");
const aboutText = document.querySelector("#about");
const assignments = document.querySelector("#assignments");
const bgd1 = document.querySelector("#bgd_1");
const bgd2 = document.querySelector("#bgd_2");
const width = document.documentElement.clientWidth;

window.onscroll = function() {

    if (width > 1152) {
            if (document.documentElement.scrollTop > 400) {
                mainTitle.textContent = "ABOUT ME";
            };
            if (document.documentElement.scrollTop > 1000) {
                mainTitle.textContent = "PROJECTS";
            };
            if (document.documentElement.scrollTop > 1800) {
                mainTitle.textContent = "CONTACT";
            };
            if (document.documentElement.scrollTop > 2500) {
                mainTitle.textContent = "HIRE ME PLS";
            };
            if (document.documentElement.scrollTop < 400) {
                mainTitle.textContent = "PANNIBEL";
            };
    }



    if (width < 1152) {
        if (document.documentElement.scrollTop > 500) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 1100) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1700) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop > 2200) {
            mainTitle.textContent = "HIRE ME PLS";
        };
        if (document.documentElement.scrollTop < 500) {
            mainTitle.textContent = "PANNIBEL";
        };
}
}
/* const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(link => link.addEventListener("click", () => {
    mainTitle.classList.remove("fixed");
    mainTitle.style.marginTop = "320px";
    aboutText.classList.remove("hidden");
})) */


/* const firstLink = document.querySelector("#firstlink");
const secondLink = document.querySelector("#secondlink");
const thirdLink = document.querySelector("#thirdlink");

firstLink.addEventListener("click", aboutText.scrollIntoView()); */
"use strict"

const mainTitle = document.querySelector("#main_title_h1");
const aboutText = document.querySelector("#about");
const assignments = document.querySelector("#assignments");
const bgd1 = document.querySelector("#bgd_1");
const bgd2 = document.querySelector("#bgd_2");
const width = document.documentElement.clientWidth;

window.onscroll = function() {

    if (width > 1152) {
            if (document.documentElement.scrollTop > 380) {
                mainTitle.textContent = "ABOUT ME";
            };
            if (document.documentElement.scrollTop > 1000) {
                mainTitle.textContent = "PROJECTS";
            };
            if (document.documentElement.scrollTop > 1700) {
                mainTitle.textContent = "CONTACT";
            };
            if (document.documentElement.scrollTop > 2500) {
                mainTitle.textContent = "HIRE ME PLS";
            };
            if (document.documentElement.scrollTop < 380) {
                mainTitle.textContent = "PANNI BELEVSKI";
            };
    }



    if (width < 1152) {
        if (document.documentElement.scrollTop > 360) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 1000) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1600) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 360) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}


    if (width < 1050) {
        if (document.documentElement.scrollTop > 340) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 900) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1500) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 360) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}


    if (width < 875) {
        if (document.documentElement.scrollTop > 300) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 800) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1500) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 300) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}


    if (width < 840) {
        if (document.documentElement.scrollTop > 300) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 850) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1500) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 300) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}


    if (width < 690) {
        if (document.documentElement.scrollTop > 300) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 1000) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1600) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 300) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}


    if (width < 615) {
        if (document.documentElement.scrollTop > 400) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 1300) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1850) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 400) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}


    if (width < 530) {
        if (document.documentElement.scrollTop > 400) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 1070) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1700) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 400) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}

    if (width < 475) {
        if (document.documentElement.scrollTop > 400) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 1450) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 1950) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 400) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}

    if (width < 415) {
        if (document.documentElement.scrollTop > 400) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 1500) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 2300) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 400) {
            mainTitle.textContent = "PANNI BELEVSKI";
        };
}

    if (width < 380) {
        if (document.documentElement.scrollTop > 400) {
            mainTitle.textContent = "ABOUT ME";
        };
        if (document.documentElement.scrollTop > 1400) {
            mainTitle.textContent = "PROJECTS";
        };
        if (document.documentElement.scrollTop > 2000) {
            mainTitle.textContent = "CONTACT";
        };
        if (document.documentElement.scrollTop < 400) {
            mainTitle.textContent = "PANNI BELEVSKI";
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
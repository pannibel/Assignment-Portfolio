"use strict"



const mainTitle = document.querySelector("#main_title h1");
const aboutText = document.querySelector("#about");

window.onscroll = function() { 
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 320 && window.innerWidth > 400) {
        mainTitle.classList.remove("fixed");
        mainTitle.style.marginTop = "320px";
        aboutText.classList.remove("hidden");
    }
}

function removeStuff() {
    if (window.innerWidth > 400) {
        mainTitle.classList.remove("fixed");
        mainTitle.style.marginTop = "320px";
        aboutText.classList.remove("hidden");
    }
}

removeStuff()
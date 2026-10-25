"use strict";
//Till toppen knapp på produkt sidan
const toTop = document.querySelector (".toTop");
//Funktion som tar en till toppen av sidan
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//Hindrar sidan från att laddas om
toTop.addEventListener("click", function(event) {
    event.preventDefault();
    topFunction();
});


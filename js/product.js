"use strict";

const toTop = document.querySelector (".toTop");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

};


toTop.addEventListener("click", function(event) {
    event.preventDefault();
    topFunction();
});


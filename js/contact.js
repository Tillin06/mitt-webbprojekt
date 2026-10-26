"use strict";
//knappar som visar forms
const buttonBuy = document.querySelector("#btn1");
const buttonSell = document.querySelector("#btn2");
const buttonAsk = document.querySelector("#btn3");
const buy = document.querySelector("#buy");
const sell = document.querySelector("#sellProduct");
const question = document.querySelector("#questions");
//forms
const buyForm = document.querySelector("#productBuyForm");
const sellForm = document.querySelector("#productSellForm");
const askForm = document.querySelector("#askForm");



//Visa/Dölja forms
buttonBuy.addEventListener("click", function(){
    buy.classList.toggle("hidden")
});

buttonSell.addEventListener("click", function(){
    sell.classList.toggle("hidden")
});

buttonAsk.addEventListener("click", function(){
    question.classList.toggle("hidden")
});

//Valideraforms

//Validera Köp formuläret
function validateBuyForm() {
const email = buyForm.querySelector("#mail-contact");
const name = buyForm.querySelector("#name-contact");


const emailError = buyForm.querySelector(".emailError");
const nameError = buyForm.querySelector(".nameError");

//tar bort tidigare felmeddelanden
emailError.textContent = "";
nameError.textContent = "";

//kollar om fältet är tomt
if (name.value.trim() === "") {
    nameError.textContent = "Du måste fylla i ditt namn";
}
if (email.value.trim()=== "") {
    emailError.textContent = "Du måste fylla i din e-postadress";
}

return nameError.textContent === "" && emailError.textContent === "";
}
//Hindrar sidan från att laddas om samt kör funktion för validering
buyForm.addEventListener("submit", function (event) {
    if (!validateBuyForm()) {
        event.preventDefault();
    }
});

//Validera sälj formuläret
function validateSellForm () {
const email = sellForm.querySelector("#mail-sell");
const name = sellForm.querySelector("#name-sell");
const text = sellForm.querySelector("#text-sell");

const emailError = sellForm.querySelector(".emailError");
const nameError = sellForm.querySelector(".nameError");
const textError = sellForm.querySelector(".textError");

//tar bort tidigare felmeddelanden
textError.textContent = "";
emailError.textContent = "";
nameError.textContent = "";

//kollar om fältet är tomt
if (name.value.trim() === "") {
    nameError.textContent = "Du måste fylla i ditt namn";
}
if (email.value.trim()=== "") {
    emailError.textContent = "Du måste fylla i din e-postadress";
}
if (text.value.trim() === ""){
    textError.textContent = "Du måste fylla i fältet"
}
return nameError.textContent === "" && emailError.textContent === "" && textError.textContent === "";
}
//Hindrar sidan från att laddas om samt kör funktion för validering
sellForm.addEventListener("submit", function (event) {
    if (!validateSellForm()) {
        event.preventDefault();
    }
});
//Validera frågor formuläret
function validateAskForm () {
const email = askForm.querySelector("#mail");
const name = askForm.querySelector("#name-ask");
const text = askForm.querySelector("#text-ask");

const emailError = askForm.querySelector(".emailError");
const nameError = askForm.querySelector(".nameError");
const textError = askForm.querySelector(".textError");

//tar bort tidigare felmeddelanden
textError.textContent = "";
emailError.textContent = "";
nameError.textContent = "";

//kollar om fältet är tomt
if (name.value.trim() === "") {
    nameError.textContent = "Du måste fylla i ditt namn";
}
if (email.value.trim()=== "") {
    emailError.textContent = "Du måste fylla i din e-postadress";
}
if (text.value.trim() === ""){
    textError.textContent = "Du måste fylla i fältet"
}
return nameError.textContent === "" && emailError.textContent === "" && textError.textContent === "";
}
//Hindrar sidan från att laddas om samt kör funktion för validering
askForm.addEventListener("submit", function (event) {
    if (!validateAskForm()) {
        event.preventDefault();
    }
});
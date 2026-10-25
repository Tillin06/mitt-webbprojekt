"use strict";
const buttonBuy = document.querySelector("#btn1");
const buttonSell = document.querySelector("#btn2");
const buttonAsk = document.querySelector("#btn3");
const buy = document.querySelector("#buy");
const sell = document.querySelector("#sellProduct")
const question =document.querySelector("#questions")

buttonBuy.addEventListener("click", function(){
    buy.classList.toggle("hidden")
});

buttonSell.addEventListener("click", function(){
    sell.classList.toggle("hidden")
});

buttonAsk.addEventListener("click", function(){
    question.classList.toggle("hidden")
});
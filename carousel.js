"use strict";
let leftBtns = document.querySelectorAll(".left-btn");
let rightBtns = document.querySelectorAll(".right-btn");
let dots = [
  document.querySelectorAll(".dot-1"),
  document.querySelectorAll(".dot-2"),
  document.querySelectorAll(".dot-3"),
  document.querySelectorAll(".dot-4"),
];
let card1 = document.querySelector(".card-1");
let card2 = document.querySelector(".card-2");
let card3 = document.querySelector(".card-3");
let card4 = document.querySelector(".card-4");

const goRight = function () {
  let activeCard = document.querySelector(".active-card");
  let nextCard = null;
  let cardInUse = null;
  if (activeCard.classList.contains("card-1")) {
    nextCard = card2;

    cardInUse = card1;
  } else if (activeCard.classList.contains("card-2")) {
    nextCard = card3;

    cardInUse = card2;
  } else if (activeCard.classList.contains("card-3")) {
    nextCard = card4;

    cardInUse = card3;
  } else if (activeCard.classList.contains("card-4")) {
    nextCard = card1;

    cardInUse = card4;
  }

  activeCard.classList.toggle("active-card");
  activeCard.classList.toggle("hide-card");
  nextCard.classList.toggle("hide-card");
  nextCard.classList.toggle("active-card");
};

const goleft = function () {
  let activeCard = document.querySelector(".active-card");
  let previousCard = null;
  let cardInUse = null;

  if (activeCard.classList.contains("card-1")) {
    previousCard = card4;
    activeCard.classList.toggle("active-card");
    cardInUse = card1;
  } else if (activeCard.classList.contains("card-2")) {
    previousCard = card1;
    activeCard.classList.toggle("active-card");
    cardInUse = card2;
  } else if (activeCard.classList.contains("card-3")) {
    previousCard = card2;
    activeCard.classList.toggle("active-card");
    cardInUse = card3;
  } else if (activeCard.classList.contains("card-4")) {
    previousCard = card3;
    activeCard.classList.toggle("active-card");
    cardInUse = card4;
  }

  activeCard.classList.remove("active-card");
  activeCard.classList.toggle("hide-card");
  previousCard.classList.toggle("hide-card");
  previousCard.classList.toggle("active-card");
};

for (let btn of rightBtns) {
  btn.addEventListener("click", goRight);
}

for (let btn of leftBtns) {
  btn.addEventListener("click", goleft);
}

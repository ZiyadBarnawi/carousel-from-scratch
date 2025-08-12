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

const goRight = function func1() {
  let activeCard = document.querySelector(".active-card");
  let nextCard = null;
  let cardInUse = null;
  if (activeCard.classList.contains("card-1")) {
    nextCard = card2;

    console.log(`Inside the first if`);
    cardInUse = card1;
  } else if (activeCard.classList.contains("card-2")) {
    nextCard = card3;

    console.log(`Inside the second if`);
    cardInUse = card2;
  } else if (activeCard.classList.contains("card-3")) {
    nextCard = card4;

    console.log(`Inside the third if`);
    cardInUse = card3;
  } else if (activeCard.classList.contains("card-4")) {
    nextCard = card1;

    console.log(`Inside the fourth if`);
    cardInUse = card4;
  }

  activeCard.classList.toggle("previous-animation");
  activeCard.classList.toggle("active-card");
  activeCard.classList.toggle("hide-card");
  nextCard.classList.toggle("next-animation");
  nextCard.classList.toggle("hide-card");
  nextCard.classList.toggle("active-card");
  cardInUse.classList.remove("next-animation");
  cardInUse.classList.remove("previous-animation");
};

const goleft = function func1() {
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

  activeCard.classList.remove("next-animation");
  activeCard.classList.remove("active-card");
  activeCard.classList.toggle("hide-card");
  previousCard.classList.toggle("previous-animation");
  previousCard.classList.toggle("hide-card");
  previousCard.classList.toggle("active-card");
  cardInUse.classList.remove("next-animation");
  cardInUse.classList.remove("previous-animation");
  previousCard.classList.remove("previous-animation");
};

for (let btn of rightBtns) {
  btn.addEventListener("click", goRight);
}

for (let btn of leftBtns) {
  btn.addEventListener("click", goleft);
}

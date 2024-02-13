"use strict";

const button = document.querySelector(".next-btn");
const text = document.querySelector(".text");
const doors = document.querySelector(".doors");
const houseBox = document.querySelector(".house-box");
const bigBat = document.getElementById("big-bat");
const smallBat = document.getElementById("small-bat");
const smallBat2 = document.getElementById("small-bat-2");
const clocks = document.querySelector(".clocks");
const skulls = document.querySelector(".skulls");
const pie = document.querySelector(".pie");
const body = document.querySelector("body");
let idx = 0;

const storyText = [
  "You come across a mansion.",
  "It's suspicious. Ominous.",
  "You're desperate for help.",
  "You approach the door to check if anyone's home.",
  "The door is large and looms over you.",
  "You hesitate to knock.",
  '"Is anyone there?" you ask.',
  "...",
  "Silence.",
  "But not all hope is lost.",
  '"Please come in..." You hear from inside.',
  "You push the door open gently.",
  "You enter and there's no turning back.",
  "You see a man sitting with his back toward you.",
  '"Welcome to my home," he says.',
  "You hesitate. His voice gives you shivers.",
  '"...I\'m lost," you reply.',
  '"Can you lend me a hand?"',
  '"Lost? I think you\'ve found yourself a nice home."',
  '"I must return. Please. I can\'t stay here forever," you plead.',
  "...",
  '"Very well..."',
  '"I will guide you to the correct path on one condition,"',
  "This doesn't seem right.",
  "The man stands up slowly.",
  "He jolts towards you.",
  '"YOU MUST TRY MY NEW DELICIOUS RECIPE!"',
  '"I\'VE CREATED A BROCCOLI PIE!"',
  "Terrified, you run away.",
  "You escape the house with all your might.",
  "You're outside the house wondering about everything that happened.",
  "After catching your breath you think to yourself,",
  '"Nothing is scarier... than someone who puts broccoli in pie."',
  "...And you wander back into the woods thinking what might come next.",
  "FIN",
];

button.addEventListener("click", function () {
  text.textContent = storyText[idx];
  idx = idx + 1;
  if (idx > 5 && idx < 12) {
    doors.classList.remove("hidden");
    houseBox.classList.add("hidden");
    bigBat.classList.add("hidden");
    smallBat.classList.add("hidden");
    smallBat2.classList.add("hidden");
  }
  if (idx > 13 && idx < 26) {
    doors.classList.add("hidden");
    houseBox.classList.add("hidden");
    bigBat.classList.add("hidden");
    smallBat.classList.add("hidden");
    smallBat2.classList.add("hidden");
    clocks.classList.remove("hidden");
    body.classList.add("background-2");
  }
  if (idx >= 27 && idx <= 28) {
    doors.classList.add("hidden");
    houseBox.classList.add("hidden");
    bigBat.classList.add("hidden");
    smallBat.classList.add("hidden");
    smallBat2.classList.add("hidden");
    clocks.classList.add("hidden");
    skulls.classList.remove("hidden");
  }
  if (idx === 28) {
    pie.classList.remove("hidden");
  }

  if (idx >= 29) {
    body.classList.remove("background-2");
    houseBox.classList.remove("hidden");
    bigBat.classList.remove("hidden");
    smallBat.classList.remove("hidden");
    smallBat2.classList.remove("hidden");
    pie.classList.add("hidden");
    skulls.classList.add("hidden");
  }

  if (idx === 35) {
    button.classList.add("hidden");
  }
});

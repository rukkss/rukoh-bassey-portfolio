// script.js
const quotes = [
  "Believe in yourself and all that you are.",
  "Your only limit is your mind.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Stay positive. Work hard. Make it happen."
];

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
});

'use strict';
let body = document.getElementById('body');
let nextBtn = document.getElementById('switchQ');
let icon = document.getElementById('icon');
let icon2 = document.getElementById('icon2');
let container = document.getElementById('container');
nextBtn.addEventListener('click', showQuotes);
let viewQuote = [];
let quotes = [
  {
    quote: '❝ True knowledge exists in knowing that you know nothing.',
    source: '~ Socrates',
  },
  {
    quote: '❝ The only way to do great work is to LOVE what you do.',
    source: '~ Steve Jobs',
  },
  {
    quote:
      "❝ I don't care that they stole my idea..., I care that they don't have any of their own .",
    source: '~ Nikola Tesla',
  },
  {
    quote: '❝ Happiness is HOW, not WHAT, a talent, not an object.',
    source: '~ Hermann Hesse',
  },
  {
    quote: "❝ Yesterday is but today's memory, and tomorrow is today's dream.",
    source: '~ Khalil Gibran',
  },
  {
    quote: '❝ Imagination should be used, not to escape reality but to create it.',
    source: '~ Colin Wilson',
  },
  {
    quote: '❝ Love which is not reborn every day dies every day.',
    source: '~ Khalil Gibran',
  },
];
// make random color for the
function randomColor() {
  let randomC;
  let intColor = Math.floor(Math.random() * Math.pow(2, 24));
  let red = intColor >> 16;
  let green = (intColor >> 8) & 255;
  let blue = intColor & 255;
  randomC = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return randomC;
}
//function to get random quote object from quotes array
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

function showQuote(quote) {
  //get the box of quote to get the two paragraph and show new quote
  const boxQuote = document.getElementById('quoteBox');
  boxQuote.innerHTML = quote;
}

let message = '';
function showQuotes() {
  // in click event runs function showQuotes , then fires the getRandomQuote function
  let quotes = getRandomQuote();
  message = '<p class="quote">' + quotes.quote + '</p>';
  message += '<p class="source">' + quotes.source;
  // call showQuote to inner in HTML the Random Quote
  showQuote(message);
  //call randomColor() the random color function
  randomColor();
  //Update background with new random color for
  container.style.backgroundColor = randomColor();
}
let opacitySet = 0.7;
body.style.opacity = 0.9;
nextBtn.style.opacity = opacitySet;
icon.style.opacity = opacitySet;
icon2.style.opacity = opacitySet;

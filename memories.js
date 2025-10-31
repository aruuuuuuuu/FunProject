// 🌸 Falling Hearts and Roses
const fallingContainer = document.querySelector('.falling-container');
const emojis = ["♡︎", "⟡", "˙ᵕ˙", "𓇼"];

function createFallingItem() {
  const span = document.createElement('span');
  span.classList.add('falling-item');
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 3 + Math.random() * 5 + "s";
  span.style.fontSize = 20 + Math.random() * 30 + "px";
  fallingContainer.appendChild(span);

  // Remove after animation
  setTimeout(() => span.remove(), 8000);
}

// Generate multiple emojis continuously
setInterval(createFallingItem, 300);

// 🌷 Typing + Section Fades
const typedText = document.getElementById("typed-text");
const sections = [
  document.getElementById("section1"),
  document.getElementById("section2"),
  document.getElementById("section3"),
  document.getElementById("section4"),
  document.getElementById("section5"),
  document.getElementById("section6")
];

let phrase = "ִֶָ𓂃 ࣪ ִֶָ🐇་༘࿐ Things I love about you ִֶָ𓂃 ࣪ ִֶָ🐇་༘࿐";
let charIndex = 0;

function typePhrase(callback) {
  if (charIndex < phrase.length) {
    typedText.textContent += phrase.charAt(charIndex);
    charIndex++;
    setTimeout(() => typePhrase(callback), 100);
  } else {
    setTimeout(callback, 1000); // wait 1s after typing
  }
}

// Fade helpers
function fadeIn(element, duration = 1000) {
  element.style.display = "flex";
  element.style.opacity = 0;
  setTimeout(() => { element.style.transition = `opacity ${duration}ms`; element.style.opacity = 1; }, 50);
}

function fadeOut(element, duration = 1000) {
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = 0;
  setTimeout(() => { element.style.display = "none"; }, duration);
}

// Sequential section fade
function fadeSectionsSequentially(index = 0) {
  if (index >= sections.length) {
    // ✨ Show buttons after last section finishes
    setTimeout(showEndButtons, 1000);
    return;
  }

  fadeIn(sections[index]);

  // display section for 7s before fading out
  setTimeout(() => {
    fadeOut(sections[index]);
    setTimeout(() => fadeSectionsSequentially(index + 1), 1000);
  }, 7000);
}

// Start the sequence
typePhrase(() => {
  fadeOut(typedText, 1000);
  setTimeout(() => fadeSectionsSequentially(0), 1000);
});

// 🌼 End buttons
const endButtons = document.getElementById("end-buttons");
const watchAgain = document.getElementById("watchAgain");
const goBack = document.getElementById("goBack");

// Function to show buttons smoothly
function showEndButtons() {
  endButtons.classList.add("show"); // uses CSS fade-in animation
}

// Click handlers
watchAgain.addEventListener("click", () => {
  endButtons.classList.remove("show");
  setTimeout(() => {
    typedText.textContent = "";
    charIndex = 0;
    typePhrase(() => {
      fadeOut(typedText, 1000);
      fadeSectionsSequentially(0);
    });
  }, 500);
});

goBack.addEventListener("click", () => {
  window.location.href = "yes1.html";
});

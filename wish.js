// 🌸 Falling Hearts and Roses
const fallingContainer = document.querySelector('.falling-container');
const emojis = [ "🎈", "🎁", "ִֶָ🪽"];

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

const sendWish = document.getElementById("sendWish");
const wishBox = document.getElementById("wishBox");

sendWish.addEventListener("click", () => {
  const wish = wishBox.value.trim();
  if (wish) {
    createBubble(wish);  // create floating bubble
    wishBox.value = "";  // clear input
  } else {
    alert("Please type your wish first!");
  }
});

// Back button click
const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', () => {
    window.location.href = "yes1.html";
});
// Function to create floating bubble
function createBubble(text) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = text;

  // Random horizontal offset for more natural effect
  bubble.style.left = `calc(50% + ${Math.random() * 100 - 50}px)`;

  document.body.appendChild(bubble);

  // Remove bubble after animation ends
  bubble.addEventListener("animationend", () => {
    bubble.remove();
  });
}

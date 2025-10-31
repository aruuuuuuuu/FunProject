// Generate falling hearts and roses
const fallingContainer = document.querySelector('.falling-container');
const emojis = ["❤️", "🌹", "💖", "🌸", "💮", "🍁"];

function createFallingItem() {
  const span = document.createElement('span');
  span.classList.add('falling-item');
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 3 + Math.random() * 5 + "s";
  span.style.fontSize = 20 + Math.random() * 30 + "px";
  fallingContainer.appendChild(span);

  // Remove after animation
  setTimeout(() => {
    span.remove();
  }, 8000);
}

// Generate multiple emojis continuously
setInterval(createFallingItem, 300);

// Button click functionality (replace "#" with your target pages)
document.getElementById("memoriesBtn").addEventListener("click", () => {
  window.location.href = "memories.html";
});

document.getElementById("playlistBtn").addEventListener("click", () => {
  window.location.href = "playlist.html";
});

document.getElementById("wishBtn").addEventListener("click", () => {
  window.location.href = "wish.html";
});

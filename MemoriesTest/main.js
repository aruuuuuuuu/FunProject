const yesBtn = document.getElementById("yesBtn");
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });
}

const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("click", () => {
    window.location.href = "no.html";
  });
}

const clk1 = document.getElementById("clk1");
if (clk1) {
  clk1.addEventListener("click", () => {
    window.location.href = "yes1.html";
  });
}

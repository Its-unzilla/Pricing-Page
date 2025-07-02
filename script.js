// Handle pricing toggle
const billingToggle = document.getElementById("billing-toggle");
const prices = document.querySelectorAll(".price");

billingToggle.addEventListener("change", () => {
  prices.forEach(priceEl => {
    const monthly = priceEl.dataset.monthly;
    const annual = priceEl.dataset.annual;
    if (billingToggle.checked) {
      priceEl.innerHTML = `$${annual}<span>/mo</span>`;
    } else {
      priceEl.innerHTML = `$${monthly}<span>/mo</span>`;
    }
  });
});

// Handle dark mode toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});


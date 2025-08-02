// Populate Info Cards
  const cards = [
    { id: "1", name: "Leonardo"},
    { id: "2", name: "Raphael"},
    { id: "3", name: "Michelangelo"},
    { id: "4", name: "Donatello"},
    { id: "5", name: "Splinter"}
  ];

  document.addEventListener("DOMContentLoaded", () => {
  const cardSelect = document.getElementById("card");

  if (cardSelect) {
    cards.forEach(card => {
      const option = document.createElement("option");
      option.value = card.id;
      option.textContent = card.name;
      cardSelect.appendChild(option);
    });
  }
});

// Increment localStorage counter
  document.addEventListener("DOMContentLoaded", () => {
  let count = localStorage.getItem("reviewCount");
  count = count ? parseInt(count) : 0;
  count++;
  localStorage.setItem("reviewCount", count);
  
  const countDisplay = document.getElementById("review-count");
  if (countDisplay) {
    countDisplay.textContent = count;
  }
});

// Get the current year and the last modification date
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    document.getElementById("currentyear").textContent = year;
  
    const lastMod = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modification: ${lastMod}`;
  });

// Hamburger Menu
const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show');

    // Toggle between ☰ and ✖ symbols
    toggleButton.innerHTML = nav.classList.contains('show') ? '✖' : '&#9776;';
});

// Make the active page appear yellow on the nav
function setActive(id) {
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}
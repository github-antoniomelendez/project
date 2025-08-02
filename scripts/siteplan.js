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

// Hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.innerHTML = isOpen ? "✖" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    nav.setAttribute("aria-hidden", !isOpen);
  });
});



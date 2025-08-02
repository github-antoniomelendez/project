// Current Year and Last Modified
document.addEventListener("DOMContentLoaded", () => {
  
  const year = new Date().getFullYear();
  const yearEl = document.getElementById("currentyear");
  if (yearEl) yearEl.textContent = year;

  const lastMod = document.lastModified;
  const lastModEl = document.getElementById("lastModified");
  if (lastModEl) lastModEl.textContent = `Last Modification: ${lastMod}`;

  // Hamburger Menu 
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.innerHTML = isOpen ? "✖" : "☰";
      menuToggle.setAttribute("aria-expanded", isOpen);
      nav.setAttribute("aria-hidden", !isOpen);
    });
  }

  // Card Data
  const cards = [
    {
      name: "April O Neil",
      type: "Human",
      team: "Hero",
      weapon: "Pistol",
      image: "images/april-o-neil.png"
    },
    {
      name: "Bebop",
      type: "Mutant",
      team: "Villain",
      weapon: "Knife",
      image: "images/bebop.png"
    },
    {
      name: "Casey Jones",
      type: "Human",
      team: "Hero",
      weapon: "Wooden Bat",
      image: "images/casey.png"
    },
    {
      name: "Donatello",
      type: "Mutant",
      team: "Hero",
      weapon: "Wooden Bo",
      image: "images/donatello.png"
    },
    {
      name: "Foot Soldier",
      type: "Robot",
      team: "Villain",
      weapon: "Assult Blaster",
      image: "images/foot-clan.png"
    },
    {
      name: "Karai",
      type: "Human",
      team: "Villain",
      weapon: "Sword",
      image: "images/karai.png"
    },
    {
      name: "Leonardo",
      type: "Mutant",
      team: "Hero",
      weapon: "Katanas",
      image: "images/leonardo.png"
    },
    {
      name: "Michelangelo",
      type: "Mutant",
      team: "Hero",
      weapon: "Nunchucks",
      image: "images/michaelangelo.png"
    },
    {
      name: "Raphael",
      type: "Mutant",
      team: "Hero",
      weapon: "Sai",
      image: "images/raphael.png"
    },
    {
      name: "Rocksteady",
      type: "Mutant",
      team: "Villain",
      weapon: "Flamethrower",
      image: "images/rocksteady.png"
    },
    {
      name: "Shredder",
      type: "Human",
      team: "Villain",
      weapon: "Steel Claws",
      image: "images/shredder.png"
    },
    {
      name: "Splinter",
      type: "Mutant",
      team: "Hero",
      weapon: "Walking Cane",
      image: "images/splinter.png"
    }
  ];

  const resGrid = document.querySelector(".res-grid");
  if (resGrid) {
    createInfoCard(cards);

    const heroes = document.getElementById("heroes");
    const mutants = document.getElementById("mutants");
    const villains = document.getElementById("villains");

    if (heroes) {
      heroes.addEventListener("click", () => {
        const heroCharacters = cards.filter(card => card.team === "Hero");
        createInfoCard(heroCharacters);
        setActive("heroes");
      });
    }

    if (mutants) {
      mutants.addEventListener("click", () => {
        const mutantCharacters = cards.filter(card => card.type === "Mutant");
        createInfoCard(mutantCharacters);
        setActive("mutants");
      });
    }

    if (villains) {
      villains.addEventListener("click", () => {
        const villainCharacters = cards.filter(card => card.team === "Villain");
        createInfoCard(villainCharacters);
        setActive("villains");
      });
    }
  }

  // Dropdown on Form
  const cardSelect = document.getElementById("card");
  if (cardSelect) {
    cards.forEach(card => {
      const option = document.createElement("option");
      option.value = card.id;
      option.textContent = card.name;
      cardSelect.appendChild(option);
    });
  }

  // Local Storage Review Counter 
  const countDisplay = document.getElementById("review-count");
  if (countDisplay) {
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count) : 0;
    count++;
    localStorage.setItem("reviewCount", count);
    countDisplay.textContent = count;
  }
});

// Creation of Info Cards
function createInfoCard(filteredCards) {
  const resGrid = document.querySelector(".res-grid");
  if (!resGrid) return;

  resGrid.innerHTML = "";

  filteredCards.forEach(data => {
    const card = document.createElement("section");
    card.classList.add("card");

    const name = document.createElement("h3");
    const type = document.createElement("p");
    const team = document.createElement("p");
    const weapon = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = data.name;
    type.innerHTML = `<span class="label">Type:</span> ${data.type}`;
    team.innerHTML = `<span class="label">Team:</span> ${data.team}`;
    weapon.innerHTML = `<span class="label">Weapon:</span> ${data.weapon}`;
    img.setAttribute("src", data.image);
    img.setAttribute("alt", data.name);
    img.setAttribute("width", "300");
    img.setAttribute("height", "400");
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(team);
    card.appendChild(weapon);
    card.appendChild(img);

    resGrid.appendChild(card);
  });
}

// Set Active Nav Button
function setActive(id) {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => link.classList.remove("active"));

  const activeLink = document.getElementById(id);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}



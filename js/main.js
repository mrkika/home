const cardsPerPage = 3;
let currentCardCount = cardsPerPage;
const allCards = Array.from(document.querySelectorAll('.project-card'));
const projectContainer = document.getElementById("projectsContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Utility: filter + search combo
function getFilteredProjects() {
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const searchTerm = searchInput.value.toLowerCase();

  return allCards.filter(card => {
    const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
    const matchesSearch = card.querySelector('h3').textContent.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
}

// Display logic
function showProjects() {
  const filtered = getFilteredProjects();
  allCards.forEach(card => card.style.display = "none");

  filtered.forEach((card, index) => {
    if (index < currentCardCount) {
      card.style.display = "block";
    }
  });

  loadMoreBtn.style.display = currentCardCount >= filtered.length ? "none" : "inline-block";
}

// Events
loadMoreBtn.addEventListener("click", () => {
  currentCardCount += cardsPerPage;
  showProjects();
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCardCount = cardsPerPage;
    showProjects();
  });
});

searchInput.addEventListener("input", () => {
  currentCardCount = cardsPerPage;
  showProjects();
});

// Initial display
showProjects();


const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const notesGrid = document.getElementById("notesGrid");
const noResult = document.getElementById("noResult");
const logoutBtn = document.getElementById("logoutBtn");

const filterCards = () => {
  const query = searchInput.value.toLowerCase().trim();
  const cards = notesGrid.querySelectorAll(".note-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const keywords = card.dataset.keywords || "";
    const text = card.textContent.toLowerCase();
    const isMatch = !query || keywords.includes(query) || text.includes(query);

    card.style.display = isMatch ? "flex" : "none";
    if (isMatch) {
      visibleCount += 1;
    }
  });

  noResult.style.display = visibleCount === 0 ? "block" : "none";
};

searchBtn.addEventListener("click", filterCards);
searchInput.addEventListener("input", filterCards);
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    filterCards();
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
});

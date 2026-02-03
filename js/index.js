const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cards = Array.from(document.querySelectorAll(".note-card"));
const noResult = document.getElementById("noResult");

function runSearch() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const keywords = card.dataset.keywords || "";
    const title = card.querySelector("h3")?.textContent || "";
    const text = `${keywords} ${title}`.toLowerCase();
    const match = query === "" || text.includes(query);
    card.style.display = match ? "flex" : "none";
    if (match) {
      visibleCount += 1;
    }
  });

  noResult.style.display = visibleCount === 0 ? "block" : "none";
}

searchBtn.addEventListener("click", runSearch);
searchInput.addEventListener("input", runSearch);

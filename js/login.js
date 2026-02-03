const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!userId || !password) {
    loginError.textContent = "Please enter both ID/email and password.";
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html";
});

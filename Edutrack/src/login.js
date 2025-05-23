document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const role = sessionStorage.getItem("selectedRole");

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role })
    });
    const result = await response.json();

    if (response.ok) {
      alert(`✅ Welcome!`);
      window.location.href = role === "student" ? "marking.html" : "dash.html";
    } else {
      alert("❌ " + (result.error || "Login failed"));
    }
  });
});
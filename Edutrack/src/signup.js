document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const role = sessionStorage.getItem("selectedRole") || "student";

  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
      alert("❌ Password and Confirm Password do not match.");
      return;
    }
    if (!firstname || !lastname || !email || !password) {
      alert("❌ Please fill all required fields.");
      return;
    }

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname, email, password, role })
    });
    const result = await response.json();

    if (response.ok) {
      alert("✅ Registration successful!");
      window.location.href = "login.html";
    } else {
      alert("⚠️ " + (result.error || "Signup failed"));
    }
  });
});
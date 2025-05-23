document.addEventListener("DOMContentLoaded", function () {
  const forgotForm = document.getElementById("forgotForm");

  forgotForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email) {
      alert("❌ Please enter your email.");
      return;
    }

    const response = await fetch("/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const result = await response.json();

    if (response.ok) {
      // For offline mode, show the token directly (no email)
      alert("✅ Reset token: " + result.token + "\nUse this token to reset your password.");
    } else {
      alert("⚠️ " + (result.error || "Forgot password failed"));
    }
  });
});
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Kunin ang email at password galing form
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Kunin ang role na pinili mula sa landing page
  const role = sessionStorage.getItem("selectedRole");

  // 🔒 Dummy authentication logic (pwede mo palitan ng real API call sa Rust backend)
  if (email === "user@example.com" && password === "pass123") {
    if (role === "student") {
      window.location.href = "marking.html";
    } else if (role === "teacher") {
      window.location.href = "teacher.html";
    } else {
      alert("No role selected. Please go back to the landing page.");
    }
  } else {
    alert("Invalid email or password.");
  }
});

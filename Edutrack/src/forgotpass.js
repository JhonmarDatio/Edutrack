function redirectToLogin(event) {
    event.preventDefault(); // prevent form from reloading the page
    alert("Change successfully!");
    window.location.href = "login.html"; // go to login page
  }
  
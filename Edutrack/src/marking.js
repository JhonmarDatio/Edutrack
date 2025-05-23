
document.addEventListener("DOMContentLoaded", function () {
    const profileDiv = document.querySelector(".profile");
    if (profileDiv) {
      profileDiv.addEventListener("click", function () {
        window.location.href = "profiles.html";
      });
    }
  });
  

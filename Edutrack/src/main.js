document.getElementById("studentBtn").addEventListener("click", function () {
    sessionStorage.setItem("selectedRole", "student");
    window.location.href = "login.html";
  });
  
  document.getElementById("teacherBtn").addEventListener("click", function () {
    sessionStorage.setItem("selectedRole", "teacher");
    window.location.href = "login.html";
  });
  
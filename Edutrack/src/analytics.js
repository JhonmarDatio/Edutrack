document.addEventListener("DOMContentLoaded", function () {
  const profileDiv = document.querySelector(".profile");
  if (profileDiv) {
    profileDiv.addEventListener("click", function () {
      window.location.href = "profiles.html";
    });
  }

  const ctx = document.getElementById("studentChart").getContext("2d");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Attendance", "Participation", "English", "History"],
    datasets: [{
      label: "Student Progress",
      data: [100, 30, 20, 25],
      backgroundColor: [
        "#3498db",
        "#2ecc71",
        "#f1c40f",
        "#e74c3c"
      ],
      borderWidth: 0.5
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
        labels: {
          color: "white",
          font: {
            size: 16,
            family: "Arial" 
          },
          boxWidth: 40,
          padding: 30
        }
      },
      tooltip: {
        bodyColor: "white",
        titleColor: "white",
        bodyFont: {
          size: 14,
          family: "Arial" 
        },
        titleFont: {
          size: 15,
          family: "Arial" 
        }
      },
      title: {
        display: true,
        align: "center",
        color: "white",
        font: {
          size: 18,
          family: "Arial"
        },
        padding: {
          top: 10,
          bottom: 30
        }
      }
    },
    rotation: Math.PI / 2
  }
});


})

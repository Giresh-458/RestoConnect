
const ctx1 = document.getElementById("chart1").getContext("2d");
const ctx2 = document.getElementById("chart2").getContext("2d");

new Chart(ctx1, {
  type: "pie",
  data: {
    labels: ["Pizza", "Burger", "Pasta"],
    datasets: [
      {
        data: [35, 40, 25],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  },
});

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Domino's", "Subway", "Others"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["orange", "purple", "blue"],
      },
    ],
  },
  options: {
    cutout: "75%",
  },
});


document
  .getElementById("change-password-link")
  .addEventListener("click", function () {
    document.getElementById("passwordModal").style.display = "flex";
  });

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("passwordModal").style.display = "none";
});

document
  .getElementById("change-password-btn")
  .addEventListener("click", function () {
    alert("Password Changed Successfully!");
    document.getElementById("passwordModal").style.display = "none";
  });

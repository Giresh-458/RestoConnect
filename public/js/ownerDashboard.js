document.getElementById("totalOrders").innerText = "120";
document.getElementById("totalCustomers").innerText = "85";
document.getElementById("totalRevenue").innerText = "$45,000";

const overallRevenueChart = new Chart(
  document.getElementById("overallRevenueChart"),
  {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Overall Revenue ($)",
          data: [8000, 12000, 15000, 5000],
          borderColor: "orange",
          backgroundColor: "rgba(255,165,0,0.3)",
          fill: true,
        },
      ],
    },
  }
);

const monthlyRevenueChart = new Chart(
  document.getElementById("monthlyRevenueChart"),
  {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Monthly Revenue ($)",
          data: [5000, 7000, 8000, 6500, 9000, 11000],
          backgroundColor: "rgba(72, 209, 204, 0.7)",
        },
      ],
    },
  }
);

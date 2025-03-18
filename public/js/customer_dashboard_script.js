function createPieChart(canvasId, data, colors, labels) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  new Chart(ctx, {
      type: "pie",
      data: {
          labels: labels,
          datasets: [{
              data: data,
              backgroundColor: colors
          }]
      }
  });
}

const data1 = [10, 20, 30, 40];
const colors1 = ["blue", "green", "red", "orange"];
const labels1 = ["Biryani"];

const data2 = [3, 7, 2, 4];
const colors2 = ["purple", "yellow", "pink", "brown"];
const labels2 = ["The Gourmet Spot "];

createPieChart("pichart1", data1, colors1, labels1);
createPieChart("pichart2", data2, colors2, labels2);

let chg_pass = document.querySelector("#chg_pass");
chg_pass.addEventListener("click", function () {
  document.querySelector(".ncusdasheditform").classList.remove("none");
});

let close_btn = document.querySelector(".close-btn");
close_btn.addEventListener("click", function () {
  document.querySelector(".ncusdasheditform").classList.add("none");
});

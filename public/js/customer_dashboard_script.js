
          




function drawPieChart(canvasId, data, colors) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const total = data.reduce((sum, value) => sum + value, 0);
  let startAngle = 0;
  
  data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.arc(100, 100, 100, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = colors[index];
      ctx.fill();
      startAngle += sliceAngle;
  });
}

const data1 = [10, 20, 30, 40];
const colors1 = ["red", "blue", "green", "yellow"];
drawPieChart("pichart1", data1, colors1);

const data2 = [3, 7, 2, 4];
const colors2 = ["purple", "orange", "cyan", "pink"];
drawPieChart("pichart2", data2, colors2);







let chg_pass = document.querySelector("#chg_pass");


chg_pass.addEventListener('click',function(){


    document.querySelector(".ncusdasheditform").classList.remove("none");


});

let close_btn = document.querySelector(".close-btn");


close_btn.addEventListener('click',function(){

  document.querySelector(".ncusdasheditform").classList.add("none");


});

          
let admin_dash_data = {
  "revenue": {
      "dates": Array.from({ length: 30 }, (_, i) => i + 1), // Dates from 1 to 30
      "income": [
          45, 78, 23, 45, 78, 12, 98, 34, 65, 89, 
          120, 56, 76, 34, 88, 99, 45, 67, 23, 56, 
          78, 123, 98, 45, 67, 88, 34, 76, 99, 150,100
      ]
  }
};




let a = function(){

let btn = document.querySelector("#naddashbtn");



let creatediv = () => {
  
    let rev = document.createElement("div");
    
  rev.classList.add("nadrestlist");

    let h1 = document.createElement('h1');
    h1.style.backgroundColor = "blue";

    h1.innerHTML="this is restaurent";
  rev.appendChild(h1);
  
  let innerdiv = document.createElement('div');
  
  let date = document.createElement('div');
  date.innerHTML = 48;
  let con = document.createElement('con');
  con.innerHTML = 48;
  
  innerdiv.appendChild(date);
  innerdiv.appendChild(con);
  
  
  rev.appendChild(innerdiv);
  return rev;
}

btn.addEventListener('click',()=>{
  
  let di = document.querySelector(".nad.restaurents_list");
  di.appendChild(creatediv());
  
});


let canvas = document.querySelector("#canvas_admi_revenue");

let dates = admin_dash_data.revenue.dates;
let values = admin_dash_data.revenue.income;

var ctx = canvas.getContext("2d");

ctx.moveTo(0,300);
ctx.lineTo(0,10);
ctx.stroke();


ctx.moveTo(0,150);
ctx.lineTo(300,150);


ctx.moveTo(3,10);
let len = dates.length;

let date_red = dates.reduce((acc,num)=>acc+num,0);
let values_red = values.reduce((acc,num)=>acc+num,0);

let x=0;
let y =0;
for(let i=0;i<len;i++){


x+=(dates[i]/date_red)*canvas.width;
 y += (values[i]/values_red)*canvas.height;
ctx.lineTo(y,x);
//ctx.fillText(dates[i],dates[i]+100*i,values[i]+30);

}
ctx.stroke();




};


/*customer dash board */



let b = function(prev_order){

/* function that creates a div which has overflow auto and has a button on click it adds */

let div_order = function(name, items) {
  let temp_div = document.createElement('div');
  temp_div.style.overflow = "auto";
  temp_div.style.height = "150px";
  temp_div.style.border = "1px solid black";
  temp_div.style.padding = "10px";

  let title = document.createElement('h1');
  title.innerText = name;
  temp_div.appendChild(title);

  let ulEl = document.createElement('ul');
  temp_div.appendChild(ulEl);

  
  items.forEach(item => {
    let lli = document.createElement('li');
    lli.innerText = item;
    ulEl.appendChild(lli);
  });
  
  return temp_div;
};


       

  let prevorder = document.querySelector('.ncusprevdiv'); // Fixed selector
    
    prev_order.forEach((rest)=>{ 
    prevorder.appendChild(div_order(rest.name,rest.items));
  
    })




}




  
  let btn = document.querySelector("#naddashbtn");
  
  let creatediv = () => {
    let rev = document.createElement("div");
    rev.classList.add("naddash-container");

    let innerDiv = document.createElement('div');
    innerDiv.classList.add("naddash-details");

    let nameDiv = document.createElement('div');
    nameDiv.classList.add("naddash-name");

    let locationDiv = document.createElement('div');
    locationDiv.classList.add("naddash-location");

    let paymentDiv = document.createElement('div');
    paymentDiv.classList.add("naddash-payment");

    let dateDiv = document.createElement('div');
    dateDiv.classList.add("naddash-date");

    innerDiv.appendChild(nameDiv);
    innerDiv.appendChild(locationDiv);
    innerDiv.appendChild(paymentDiv);
    innerDiv.appendChild(dateDiv);

    rev.appendChild(innerDiv);
    return rev;
}


  
  btn.addEventListener('click', () => {
      let di = document.querySelector(".nad.restaurents_list");
      di.appendChild(creatediv());
  });
  
  


 

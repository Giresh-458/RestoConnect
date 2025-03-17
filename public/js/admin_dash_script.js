
  
  let btn = document.querySelector("#naddashbtn");
  
  let creatediv = () => {
    let rev = document.createElement("div");
    rev.classList.add("naddash-container");

    let innerDiv = document.createElement('div');
    innerDiv.classList.add("naddash-details");

    // Name
    let nameDiv = document.createElement('div');
    nameDiv.classList.add("naddash-name");
    nameDiv.innerHTML = `<strong>Name:</strong> John Doe`;

    // Location
    let locationDiv = document.createElement('div');
    locationDiv.classList.add("naddash-location");
    locationDiv.innerHTML = `<strong>Location:</strong> New York`;

    // Payment Amount
    let paymentDiv = document.createElement('div');
    paymentDiv.classList.add("naddash-payment");
    paymentDiv.innerHTML = `<strong>Payment Amount:</strong> $100`;

    // Date Joined
    let dateDiv = document.createElement('div');
    dateDiv.classList.add("naddash-date");
    dateDiv.innerHTML = `<strong>Date Joined:</strong> 24-Feb-2025`;

    // Append elements
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
  
  


 

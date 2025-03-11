function goToDashboard() {
  const restaurant = document.getElementById("restaurantSelect").value;
  window.location.href = `/owner/dashboard?restaurant=${restaurant}`;
}

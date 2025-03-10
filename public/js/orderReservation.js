document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.querySelector(".order-section form");
    if (orderForm) {
        orderForm.addEventListener("submit", (event) => {
            if (!confirm("Are you sure you want to place this order?")) {
                event.preventDefault();
            }
        });
    }

    const reservationForm = document.querySelector(".reservation-section form");
    if (reservationForm) {
        reservationForm.addEventListener("submit", (event) => {
            if (!confirm("Confirm your table reservation?")) {
                event.preventDefault();
            }
        });
    }
});

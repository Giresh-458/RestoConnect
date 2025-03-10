function setupStarRating(starContainerId, ratingTextId) {
    const stars = document.querySelectorAll(`#${starContainerId} .star`);
    const ratingText = document.getElementById(ratingTextId);

    stars.forEach(star => {
        star.addEventListener('click', function() {
            let rating = this.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('selected');
            }
            ratingText.textContent = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating - 1];
        });
    });
}

setupStarRating('starRating', 'diningRatingText');
setupStarRating('orderStarRating', 'orderRatingText');

document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const extraFeedback = document.getElementById('feedbackInputExtra').value.trim();

    if (extraFeedback) {
        fetch('/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback: extraFeedback }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                document.getElementById('feedbackInputExtra').value = '';
            } else {
                alert('Failed to submit feedback.');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter feedback before submitting!');
    }
});

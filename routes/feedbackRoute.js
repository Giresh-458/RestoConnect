const express = require('express');
const router = express.Router();

let feedbacks = []; 

router.get('/feedback', (req, res) => {
    res.render('feedback');
});

router.post('/submit-feedback', (req, res) => {
    const feedbackText = req.body.feedback;

    if (!feedbackText.trim()) {
        return res.status(400).json({ success: false, message: "Feedback cannot be empty!" });
    }

    feedbacks.push({ id: Date.now(), text: feedbackText });

    res.json({ success: true, message: "Feedback submitted successfully!" });
});

module.exports = router;

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    customerName: { type: String, required: true }, // optional, use session
    diningRating: { type: Number, required: true },
    lovedItems: { type: String, required: true },
    orderRating: { type: Number, required: true },
    additionalFeedback: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);

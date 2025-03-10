const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use feedback routes
app.use(feedbackRoutes);

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});

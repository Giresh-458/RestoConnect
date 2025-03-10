const express = require("express");
const path = require("path");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// Restaurant data
const restaurantsData = [
  { name: "The Gourmet Spot", location: "Chennai" },
  { name: "Spicy Delights", location: "Chennai" },
  { name: "Urban Bites", location: "Chennai" },
  { name: "Ocean Feast", location: "Tada" },
  { name: "Grill House", location: "Hyderabad" },
  { name: "Spicy Biryani House", location: "Bangalore" },
  { name: "Spice Delight", location: "New York, NY" },
  { name: "The Food Hub", location: "Los Angeles, CA" },
  { name: "Tasty Treats", location: "Chicago, IL" },
  { name: "Gourmet Bites", location: "Houston, TX" },
  { name: "Savor Street", location: "San Francisco, CA" },
];

// Routes
app.get("/", (req, res) => {
  res.render("homepage", { restaurantsData }); // Pass restaurantsData to homepage.ejs
});

app.get("/dashboard", (req, res) => {
  const restaurant = req.query.restaurant || "Default Restaurant";
  res.render("dashboard", { restaurant });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    const restaurant = req.query.restaurant || "Default Restaurant";
    res.render("ownerDashboard", { restaurant });
});

module.exports = router
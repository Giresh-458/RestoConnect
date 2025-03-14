
const express = require('express');
const router = express.Router();


const ownerController = require('../Controller/ownerController');

router.get("/", ownerController.getOwnerHomepage);
router.get("/dashboard", ownerController.getDashboard);
router.get('/menuManagement', ownerController.getMenuManagement);
router.post('/menuManagement/add', ownerController.addProduct);
router.post('/menuManagement/edit/:id', ownerController.editProduct);
router.post('/menuManagement/delete/:id', ownerController.deleteProduct);

module.exports = router;

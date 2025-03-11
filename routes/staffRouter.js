const express = require('express');
const router = express.Router();


const staffController = require('../Controller/staffController');


router.get('/Dashboard', staffController.getDashBoard);
router.post('/Dashboard/update-order', staffController.postUpdateOrder);





router.get('/HomePage', staffController.getHomePage);
router.post('/HomePage/tasks', staffController.postHomePageTask);
router.delete('/HomePage/tasks/:id', staffController.deleteHomePageTasks);



module.exports = router;
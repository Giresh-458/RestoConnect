const express = require('express');
const path = require('path');
const router = express.Router();

console.log("vfb");
router.get('/dashboard',(req,res)=>{

res.sendFile(path.join(__dirname,'..','Views','index.html'));

})






module.exports = router;

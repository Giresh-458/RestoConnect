const express = require('express');
const path  = require('path');
const router = express.Router();


router.get('/',(req,res)=>{
    
res.render('login',{
    title: 'Log In',
    buttonText: 'Log In',
    toggleText: 'New user? Sign Up'
});


});

module.exports = router;
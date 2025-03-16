const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login', {
        title: 'Log In',
        buttonText: 'Log In',
        toggleText: 'New user? Sign Up'
    });
});

router.post('/', (req, res) => {
    const { username, password, fullName, email, mobile } = req.body;
    
    if (fullName && email && mobile) {
        // Handle sign-up logic
        console.log('Sign-up:', { username, fullName, email, mobile });
        return res.send('Sign-up successful!');
    } else {
        // Handle login logic
        console.log('Login:', { username, password });
        return res.send('Login successful!');
    }
});

module.exports = router;

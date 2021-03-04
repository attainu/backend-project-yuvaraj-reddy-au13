const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/', (req, res)=>{
    // const loginPath = path.join(__dirname, 'login.hbs')
    res.render('login', {
        layout : false
    });
})

router.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})


module.exports = router;
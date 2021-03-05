const express = require('express');
const router = express.Router();
const path = require('path')
const { ensureAuth, ensureGuest } = require('../auth_middleware/authmid')


router.get('/',  (req, res)=>{
    // const loginPath = path.join(__dirname, 'login.hbs')
    res.render('login', {
        layout : false
    });
})

router.get('/dashboard', ensureAuth, (req, res)=>{
    res.render('dashboard',{
        layout : false
    })
})


module.exports = router;
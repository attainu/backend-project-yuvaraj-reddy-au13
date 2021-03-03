const express = require('express');
const passport = require('passport');
const router = express.Router();
const password = require('passport')
const path = require('path')


router.get('/google', passport.authenticate('google', {scope : ['profile']}) )

router.get('/google/callback', passport.authenticate('google', {failureRedirect : '/'}), (req, res)=>{
    res.redirect('/dashbord')
})


module.exports = router;
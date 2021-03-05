const express = require('express');
const passport = require('passport');
const router = express.Router();



router.get('/google', passport.authenticate('google', {scope : ['profile', 'email']}) )
// router.get('/google', (req, res)=>{
//     res.send('logging in with google')
// })

router.get('/google/callback', passport.authenticate('google', {failureRedirect : '/'}) ,(req, res)=>{
    res.redirect('/dashboard')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})


// router.get('/google',
//   passport.authenticate('google', { scope:
//       [ 'email', 'profile' ] }
// ));

// router.get( '/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/'
// }));

module.exports = router;

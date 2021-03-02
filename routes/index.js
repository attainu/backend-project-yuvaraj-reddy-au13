const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('render login')
})

router.get('/dashboard', (req, res)=>{
    res.send('render dashboard')
})


module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/manufacturers',(req,res)=>{
    res.send('厂家')
})

module.exports = router;
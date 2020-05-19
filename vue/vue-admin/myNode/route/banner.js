const express = require('express');
const router = express.Router();
const mysql = require('../mysql.js')
// connection.end();
router.get('/ad',(req, res) => {
    mysql.query('select * from nideshop_ad', function (error, results, fields) {
        if (error) throw error;
        res.send({
            data:results
        })
        // res.json(results)
    });
})

module.exports = router;
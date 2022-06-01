const express = require('express');
const exportModule = require('../logger/logger')
const format = require('../validator/formatter')
const helpe = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    exportModule.welcome()
    format.trim()
    format.changetoLowerCase()
    format.changeToUpperCase()
    helpe.printDate()
    helpe.printMonth()
    helpe.getBatchInfo()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
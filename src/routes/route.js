const express = require('express');
const exportModule = require('../logger/logger')
const format = require('../validator/formatter')
const helpe = require('../util/helper')
const lodash = require("lodash");
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
router.get('/hello', function (req, res) {
    const arrayMonths=['January','February','March','April','May','June','July','August','September','October','November','December']
    console.log(lodash.chunk(arrayMonths,3))
    const arrayOddNumber = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arrayOddNumber))
    const array1=[1,2]
    const array2=[2,3]
    const array3=[3,4]
    const array4=[4,5]
    const array5=[5,6]
     let x = lodash.union(array1,array2,array3,array4,array5)
     console.log(x)
     const arrayMovies = [["Horror","The Shining"],["Drama","Titanic"],["Thriller","Shutter Island"],["Fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(arrayMovies))
    res.send('My hello api!')
});
module.exports = router;
// adding this comment for no reason
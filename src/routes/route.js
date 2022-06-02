const express = require('express');
const externalModule = require('./logger')
const underscore = require('underscore')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    let firstElement = underscore.first(['ranjeet','ankita','shivam'])
    console.log('the first element recived is '+firstElement)
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

router.get('/sol1', function (req, res) {
    const arr =[1,2,3,5,6,7] 
    let total =0
    for(var i in arr){
        total += arr[i]
    }
    let lastDigit = arr.pop()
    let sumOfNumber = lastDigit * (lastDigit + 1)/2
     let missingNumber = sumOfNumber - total

     res.send(  { data: missingNumber  }  );
});

router.get('/sol2',function (req,res){
    const arr = [33,34, 35, 37, 38]
    
    let len = arr.length
    
    let total = 0
    for(var i in arr){
        total += arr[i]
    }
    let first = arr[0]
    let last = arr.pop()
    let sum = (len+1) * (first + last)/2
    let missingNumber = sum - total
    res.send(  { data: missingNumber  }  )
}
)
module.exports = router;
// adding this comment for no reason
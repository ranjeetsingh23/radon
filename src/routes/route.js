const express = require('express');
const { indexOf } = require('underscore');
// const myHelper = require('../util/helper')
// const underscore = require('underscore')
//const lodash = require('lodash')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
  //  let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

//  router.get('/candidates/:canidatesName', function(req, res){
//      console.log('The request objects is '+ JSON.stringify(req.params))
//      console.log('Candidates name is '+req.params.candidateName)
//      res.send('Done')
// })

router.get('/movies',function(req,res){
    const arrMovies =['‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’']
    res.send(arrMovies)
}
)
router.get('/movies/:indexNumber',function(req,res){
    const arrMovies =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let a = arrMovies.length
    if(arrMovies[req.params.indexNumber]>a){
        console.log("Number is greater")
    }else{
    res.send(arrMovies[req.params.indexNumber])
    }
}
)
router.get('/films',function(req,res){
    const arrString = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       res.send(arrString)

})
router.get('/films/:filmid',function(req,res){
    const arrString = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    //    const result = arrString.find(ele => ele.arrString.id === 'filmid')
    // if (arrString){
    //   return console.log(arrString.id+ ' '+arrString.name)
    // }else{
    //    return console.log("no id available "+'filmid')
    // }
      res.send("done");
})
module.exports = router;
// adding this comment for no reason
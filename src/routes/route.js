const express = require('express');
const { indexOf } = require('underscore');
const router = express.Router();


router.get('/movies',function(req,res){
    const arrMovies =['‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’']
    res.send(arrMovies)
}
)
router.get('/movies/:indexNumber',function(req,res){
    const arrMovies =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let num =arrMovies[req.params.indexNumber]
    if(num !==arrMovies.length){
       res.send(  num || " use a valid index." )
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
       let f = arrString[req.params.filmid -1]
       if(f !== arrString.length){
           res.send(f || "no movies exists with this id")
       }
})
module.exports = router;
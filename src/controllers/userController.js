const BookModel= require("../models/bookModel")

const addBooks= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

module.exports.addBooks= addBooks
module.exports.getBooksData= getBooksData

const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")


const createBook = async function (req, res) {

    let book = req.body
    let author_id = await authorModel.find().select({ _id: 1 })
    let authorIdArr = author_id.map((x) => { return x._id.toString() })

    let publishId = await publisherModel.find().select({ _id: 1 })
    let publishIdArr = publishId.map((x) => { return x._id.toString() })

    if (book.author_id != undefined) {
        if (authorIdArr.includes(book.author_id)) {
            if (book.publishId != undefined) {
                if (publishIdArr.includes(book.publisher_id)) {
                    let bookCreated = await bookModel.create(book)
                    return res.send({ data: bookCreated })
                }
                return res.send({ data: "Invalid Publisher ID" })
            }
            return res.send({ data: "Publisher ID Required" })
        }
        return res.send({ data: "Invalid Author ID" })
    }
    return res.send({ data: "Author ID Required" })
}




const getBooksWithAuthor_PublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate([{ path: 'author' }, { path: 'publisher' }])
    res.send({ data: specificBook })

}
const updateIsHardCover = async function (req, res) {
    let data = await publisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 })
    idArry = data.map((obj) => { return obj._id.toString() })
    let up = await bookModel.updateMany({ publisher_id: { $in: idArry } }, { $set: { isHardCover: true } })
    let upBook = await bookModel.find()
    res.send({ data: up, upBook })
}

const authorRating = async function (req, res) {
    let data = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    idArry = data.map((obj) => { return obj._id.toString() })
    let up = await bookModel.updateMany({ author_id: idArry  }, { $inc: { price: +10 } })
    res.send({ data: up })
}

module.exports.createBook = createBook
module.exports.authorRating = authorRating
module.exports.updateIsHardCover = updateIsHardCover
module.exports.getBooksWithAuthor_PublisherDetails = getBooksWithAuthor_PublisherDetails

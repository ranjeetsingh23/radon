const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "RanjeetAuthor",
        required: true
    },
    price: Number,
    ratings: Number,
    publisher:{
        type: ObjectId,
        ref: "RanjeetPublisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('RanjeetBook', bookSchema)

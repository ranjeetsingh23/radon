const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName:{ 
        type : String,
        required : true,
        unique : true
    },
    authorName: String,
    category: {
        type: String,
        enum: ["Love story", "Suspense", "Romantic", "Finance", "Trading", "Development", "Science","Others"]
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 

const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
    author_id:{
        type: Number,
        required: true
    },
    authorName: {type:String,
        trim: true
    },
    age: {type:Number},
    address: {type:String}
   
}, { timestamps: true });


module.exports = mongoose.model('Author', authorSchema) 
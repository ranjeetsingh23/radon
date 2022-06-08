const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let author_id=data.author_id
    if(!author_id) return res.send({msg: "Author id is mandatory"})
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getBook = async function(req,res){
    let authorData = await authorModel.find({authorName:"Chetan Bhagat"}).select("author_id")
    let bookData = await bookModel.find({author_id:authorData[0].author_id}) 
    res.send({msg: bookData})
}

 const findAndUpdate = async function(req,res){

     let books = await bookModel.findOneAndUpdate(  {bookName: "Two states" } , {$set: {price : 100} }, { new: true});
     let authorData= await authorModel.find({author_id:books.author_id}).select("authorName")
     let price = books.price
     res.send({msg: authorData,price})
 }


const booksCost = async function(req,res){
    const bookData = await bookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id:1, _id:0 })
    const id = bookData.map(inp => inp.author_id)

    let temp = []

    for(let i=0;i<id.length;i++){
        let x = id[i]
        const author = await authorModel.find({ author_id:x}).select({authorName:1, _id:0})
        temp.push(author)
    }
    const author_name = temp.flat()
    res.send({msg: author_name})
}




module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBook = getBook
module.exports.findAndUpdate = findAndUpdate
module.exports.booksCost = booksCost


// const bookList = async function(req,res){
//     let allBooks = await BookModel.find().select({bookName: 1,authorName: 1, _id:0 })
//     res.send({ msg: allBooks})
// }

// const getBooksInYear = async function(req,res){
//     let year= req.body.year
//     let booksInYear = await BookModel.find({year:year})
//     res.send({msg: booksInYear})
// }

// const getParticularBooks = async function(req,res){
//     let data=req.body
//     let particulaBooks = await BookModel.find(data)
//     res.send({msg : particulaBooks})
// }
// const getXINRBooks = async function(req,res){
//      let inrBooks= await BookModel.find({
//         $or:[ {"price.indianPrice":{$eq:"100INR"}},  {"price.indianPrice":{$eq:"200INR"}}, {"price.indianPrice":{$eq:"500INR"}}]
//     })
//     res.send({msg: inrBooks})
// }

// const getRandomBooks = async function(req,res){
//     let randomBooks = await BookModel.find({
//         $or: [ {stockAvailable : true} , {totalPages: {$gt: 500}} ]
//     })
//     res.send({msg: randomBooks})
// }


// module.exports.bookList = bookList
// module.exports.getRandomBooks = getRandomBooks
// module.exports.getXINRBooks = getXINRBooks
// module.exports.getBooksInYear=getBooksInYear
// module.exports.getParticularBooks = getParticularBooks












/*const getBooksData= async function (req, res) {

    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*///i  }) 
    
    // ASYNC AWAIT
    
    // let a= 2+4
    // a= a + 10
    // console.log(a)
    // let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    // console.log(allBooks)
    // let b = 14
    // b= b+ 10
    // console.log(b)
    // res.send({msg: allBooks})
//}



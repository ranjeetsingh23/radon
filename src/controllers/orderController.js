const { count } = require("console")
const OrderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const createOrder = async function(req, res) {
  let orderDetails = req.body
  let userId = orderDetails.userId

  let user = await userModel.findById(userId)
  if(!user) {
      return res.send({status: false, message: "user doesnt exist"})
  }

  let productId = orderDetails.productId
  let product = await productModel.findById(productId)
  if(!product) {
      return res.send({status: false, message: "product doesnt exist"})
  }
  
  //Scenario 1 : Paid app and user balance is greater than or equal to product price
  if(!req.isfreeappuser && user.balance >= product.price) {
      user.balance = user.balance - product.price
      await user.save()

      orderDetails.amount = product.price
      orderDetails.isFreeAppUser = false
      let orderCreated = await orderModel.create(orderDetails)
      return res.send({status: true, data :orderCreated})
  } else if(!req.appTypeFree) {
  //Scenario 2 : Paid app and user balance is less than product price
      return res.send({status: false, message:"User deosnt have sufficient balance"})
  } else {
  //Scenario 3 : Free app
      orderDetails.amount = 0
      orderDetails.isFreeAppUser = true
      let orderCreated = await orderModel.create(orderDetails)
      res.send({status: true, data: orderCreated})
  }
}






// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createOrder = createOrder
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor

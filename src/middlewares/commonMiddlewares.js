
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

const CheckisFreeAppUser = async function (req, res, next) {

    if ( !req.headers['isfreeappuser']) {
       return res.send({msg:"Free App user header is mandatory"})
    }
    next()
}


const checkValidation = async function (req,res,next){

}
module.exports.CheckisFreeAppUser = CheckisFreeAppUser


const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const tokenIsPresent_Valid = async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
      console.log(token)
  next()  
}

 const userExist = async function(req,res,next){
         let userId = req.params.userId;
   let userDetails = await userModel.findById(userId);
   if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
    next()
  }


module.exports.userExist = userExist

module.exports.tokenIsPresent_Valid = tokenIsPresent_Valid
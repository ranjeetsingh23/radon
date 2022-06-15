const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");
const authenticate =  function (req, res, next) {
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

 const authorise =async function(req, res, next) {
    let userToBeModified = req.params.userId
          let userDetails = await userModel.findById(userToBeModified);
           if (!userDetails)
                return res.send({ status: false, msg: "No such user exists" });

    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-radon");
    // comapre the logged in user's id and the id in request
   
 // userId for the logged-in user
  let userLoggedIn = decodedToken.userId
 //  userId comparision to check if the logged-in user is requesting for their own data
   if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next()
}



module.exports.authenticate = authenticate

module.exports.authorise = authorise
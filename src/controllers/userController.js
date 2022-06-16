const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try{
  let data = requestIdleCallback.body;
  if(Object.keys.length(data) != 0){
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(200).send({ msg: savedData });
  }else{
    res.status(400).send({msg: "Bad Request"})
  }
  }
  catch{
    res.status(500).send({msg: "Error", error:error.message})
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });
  // }//catch(error){
  //   //console.log(error.message)
  //       res.status(500).send({msg: "Error" , error: error.message})
  // }

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
  }catch(error){
         res.status(500).send({msg: "Error", error: error.message})
  }
}

const getUserData = async function (req, res) {

  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  res.status(200).send({ status: true, data: userDetails });
}catch(error){
  res.status(500).send({msg:"Error" , error:error.message})
}
};

const updateUser = async function (req, res) {
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
try{
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.status(200).send({ status: true, data: updatedUser });
}catch(error){
  res.status(500).send({msg: "Error" , error:error.message})
}
};
const postMessage = async function (req, res) {
  try{
    let message = req.body.message
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.status(200).send({status: true, data: updatedUser})
  }catch(error){
    res.status(500).send({msg: "Error" , error:error.message})
  }
}
const deleteUser = async function (req, res) {
try{
  let userData = req.params.userId;
  let deletedUser = await userModel.findOneAndUpdate({ _id: userData }, { $set: { isDeleted: true } }, { new: true });
  res.status(200).send({ status: deletedUser, data: deletedUser });
}catch(error){
  res.status(500).send({msg: "Error", error:error.message})

}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser = deleteUser;
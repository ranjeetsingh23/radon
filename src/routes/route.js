const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const commonMiddleware = require("../commonMiddleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//API to createUser
router.post("/users", userController.createUser)

//API to Login User
router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", commonMiddleware.tokenIsPresent_Valid, userController.getUserData)

router.put("/users/:userId", commonMiddleware.tokenIsPresent_Valid, commonMiddleware.userExist, userController.updateUser)

router.delete("/users/:userId", commonMiddleware.tokenIsPresent_Valid, commonMiddleware.userExist, userController.deleteUser)

module.exports = router;
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
router.get("/users/:userId", commonMiddleware.authenticate,commonMiddleware.authorise,userController.getUserData)

router.post("/users/:userId/posts", commonMiddleware.authenticate,commonMiddleware.authorise,userController.postMessage)

router.put("/users/:userId", commonMiddleware.authenticate,commonMiddleware.authorise, userController.updateUser)

router.delete("/users/:userId", commonMiddleware.authenticate,commonMiddleware.authorise, userController.deleteUser)

module.exports = router;
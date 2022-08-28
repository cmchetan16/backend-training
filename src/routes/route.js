const express = require('express');
const router = express.Router();
const userController= require("../controllers/newUserController")
const mid = require("../middleWare/middleWare")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.login)

// //The userId is sent by front end
 router.get("/users/:userId", mid.mid1, userController.avilable)

router.put("/users/:userId", mid.mid1, userController.updateUser)
router.delete("/deleteUser/:userId", mid.mid1, userController.deleteUser )

module.exports = router;
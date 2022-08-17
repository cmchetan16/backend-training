const { Router } = require('express');
const express = require('express');
const router = express.Router();
const bookModel = require("../models/bookModel")
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post('/createBook', BookController.createBook  )

router.get('/bookData', BookController.bookData)

router.post('/getBooksInYear', BookController.getBooksInYear)

router.post('/getparticularBooks', BookController.getparticularBooks)

router.get('/getXINRBooks', BookController.getXINRBooks)

router.get('/getRandomBooks', BookController.getRandomBooks)

// router.put("/random", BookController.random)

// router.post("/booksdetail", BookController.createBook)

module.exports = router;
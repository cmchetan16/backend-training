const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)
router.get("/books", bookController.books)
router.get("/allBooks", bookController.allBooks)
router.put("/booksInfo", bookController.booksInfo)
router.put("/inc", bookController.inc)


// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/publishers", publisherController.publishers)
router.get("/getpublisher", publisherController.getpublisher)

module.exports = router;
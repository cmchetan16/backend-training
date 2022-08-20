const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
// const publisher= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function(req, res){
    let book = req.body
    let authorId = book. author_id
    let publisherId = book.publisher_id

//     if(!authorId){return res.send({data: "AuthorId is required"})}
//  if(!mongoose.isValidObjectId(author_id))   
}







// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
// module.exports.publishers = publishers 

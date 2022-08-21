const { default: mongoose } = require("mongoose");
const authorModel = require("../models/authorModel");
// const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");
// const publishermodel = require("../models/publisherModel");
// const publisher= require("../models/publisherModel")

const createBook = async function (req, res) {
  let book = req.body;
  let bookCreated = await bookModel.create(book);
  res.send({ data: bookCreated });
};
const books = async function (req, res) {
  let bookies = await bookModel.find();
  res.send({ data: bookies });
};

const getBooksData = async function (req, res) {
  let book = req.body;
  let authorId = book.author_id;
  let publisherId = book.publisher_id;

  if (!authorId || !publisherId) {
    return res.send({ data: "AuthorId is required" });
  }
  if (
    !mongoose.isValidObjectId(authorId) ||
    !mongoose.isValidObjectId(publisherId)
  ) {
    return res.send({ msg: "Please Enter valid ID" });
  }
  let newAuthorId = await authorModel.findById(authorId);
  if (!newAuthorId) {
    return res.send({ msg: "this is not a valid ID" });
  }
};

const allBooks= async function(req, res){
let details = await bookModel.find().populate(["author_id", "publisher_id"])
res.send({msg: details})
}

const booksInfo = async function (req, res){
  let publisher = req.body
  let name = publisher.name
  let updateID= await bookModel.updateMany({$set : {hardCover : 0}},{new:true})
  let updateId = await publisherModel.find({name: {$in: name}}).select({_id: 1})
  // res.send({msg: update})
 let changeHardCover = await bookModel.find({publisher_id:{$in: updateId}}).updateMany({$set: {hardCover: true}})
  res.send(changeHardCover)
}


// -------------------------------------------------------------
const inc = async function(req, res){
  let update = await bookModel.updateMany({"ratings": {$gt: 3.5}}, {$inc: {"price": +10}})
  res.send({update})
}

// }) 
// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.books = books;
module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.allBooks = allBooks
module.exports.booksInfo=booksInfo
module.exports.inc=inc
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
// module.exports.publishers = publishers

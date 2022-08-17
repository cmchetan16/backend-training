

const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookData= async function (req, res) {
    let allBooks =await bookModel.find().select({bookName:1, authorName : 1, _id: 0})
    res.send({msg :allBooks}) }

    const getBooksInYear = async function(req , res){
        let year = req.body.year
        let allBooks1 = await bookModel.find({year: { $eq: year}})
        res.send({msg :allBooks1})
    }

    const getparticularBooks = async function(req , res){
        let particularBooks = await bookModel.find(req.body)
        res.send({msg : particularBooks})
    }
     
    const getXINRBooks = async function( req , res){
        let indianBooks = await bookModel.find({$in : ["100" , "200" , "500"]})
   
      res.send({msg : indianBooks})
    }
const getRandomBooks = async function(req , res){
        let randomBooks = await bookModel.find({$and : [{stockAvailable : false }, { totalpages :{$gt : 200 }}]})
        res.send({msg : randomBooks})
    }





    // let random = async function(req, res){
    //     let update = await bookModel.findOneAndUpdate({_id: "62fc1e7cef5b8c101dcd045d"}, {$set: {authorName: "aabh cdjvdnkj"}}, {new: true})
    //     res.send({msg: update})
    // }

// module.exports.random= random
module.exports.createBook= createBook
module.exports.bookData= bookData
module.exports.getBooksInYear= getBooksInYear
module.exports.getparticularBooks= getparticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
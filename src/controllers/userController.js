const UserModel= require("../models/userModel")



const createBook = async function(req, res){
    let bookData = req.body
    let booksData = await UserModel.create(bookData)
    res.send({msg: book-details})
}

module.exports.createBook= createBook
// module.exports.createBooks= createBooks
module.exports.bookData= bookData



// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
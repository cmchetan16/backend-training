const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
// ==========================================================================
const createBooks = async function(req, res){
    let bookData = req.body
    let booksData = await UserModel.create(bookData)
    res.send({msg: booksData})
}

module.exports.createBooks= createBooks



module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
const publisherModel= require("../models/publisherModel")

const publishers= async function (req, res) {
    let public = req.body
    let publisher = await publisherModel.create(public)
    res.send({data: publisher})
}

const getpublisher = async function(req, res){
    let pub = await publisherModel.find()
    res.send({data: pub})

}


module.exports.publishers= publishers
module.exports.getpublisher= getpublisher
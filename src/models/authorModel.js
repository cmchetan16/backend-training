const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id: String,
    author_name: String,
    age:Number,
    address:String,
    rating: {type: Number,
    default: 4.5
}

}, { timestamps: true });

module.exports = mongoose.model('Authorrr', authorSchema)

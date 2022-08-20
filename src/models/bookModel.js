const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author_id: {
        type: ObjectId,
        ref: "Authorrr"
    }, 
    price: Number,
    ratings: Number,
    publisher: String,
    publisher_id: {
        type: ObjectId,
        ref: "publish"
    },
    hardCover: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBooks', bookSchema)

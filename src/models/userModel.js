const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });




// String, Number
// Boolean, Object/json, array
// ======================================================================



const bookSchema = new mongoose.Schema({
    bookname: {type:String,
        unique:true,
        required:true},
        authorName: String,
        category: {
            type: String,
            enum: ['Crime', 'Comedy', 'Romantic', 'Thriller']
        },
        year: Number,
    }, {timestamps: true});
    
    module.exports = mongoose.model('book', bookSchema) //users
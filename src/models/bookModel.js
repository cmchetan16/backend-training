


const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        require:true
    }, 
    authorName: String,
    
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    // sales: {type: Number, default: 10}
year:{
    type: String,
    default:"2021"
    // require:
},
totalpages:Number,
stockAvailable:Boolean
}, 

 { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)  //(new file -book modle)


// module.exports = mongoose.model ('libro', bookSchema)
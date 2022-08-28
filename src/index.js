const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://cmchetan:j6aKrClpVQqg8I2K@cluster0.np1nzo5.mongodb.net/middleware?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




// app.use (
//     function (req, res, next) {
//         // console.log ("inside GLOBAL MW");
//         // res.send({msg:"done"})
//         let obj = 
//         {
//             name: "chetan",
//             city: "delhi",
//             "add-pincode": "250001"
//         }
//         obj.age= 16
//         obj["age"]=16

//         console.log(obj.name)
//         console.log(obj["name"])
//         console.log(obj.city)
//         console.log(obj["city"])
//         console.log(obj["add-pincode"])
//         // console.log(obj.add-pincode)
//         // console.log(obj.name)
//         console.log(obj.age)
//         console.log(obj["age"])
// //res.send(obj["name"])  
//     }
//     //next ()
//   );

  app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

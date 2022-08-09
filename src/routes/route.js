const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
// ==================================1======================================
router.get('/movies', function (req, res){
    let movie = ["The Gray Man", "Joker", "Batman", "inception"]
    res.send(movie)
    // console.log(movies)
})
// ==============================2=========================================
router.get('/movie/:indexNumber', function (req, res){
    let newMovie = ["The Gray Man", "Joker", "Batman", "inception"]
let index = req.params.indexNumber
// let value=Object(requestParams)
res.send(newMovie[index])

})
// ===============================3==========================================
router.get('/movies/:indexNumber', function (req, res){
    let movie = ["The Gray Man", "Joker", "Batman", "inception"]
    let index = req.params.indexNumber
if(index > movie.length){
    return res.send("Use a Valid Index")
}else{
    res.send(movie[index])
}
})
// ===================================4=======================================
router.get('/films', function (req, res){
    let film = [ {"id": 1, "name": "The Shining"}, 
        {"id": 2,"name": "Joker"}, 
        {"id": 3,"name": "Inception"}, 
        {"id": 4,"name": "Finding Nemo"}]
        res.send(film)   
    })
    // ================================5========================================
    router.get('/filmss/:indexNumber', function (req, res){
       
        let film = [ {"id": 1, "name": "The Shining"}, 
            {"id": 2,"name": "Joker"}, 
            {"id": 3,"name": "Inception"}, 
            {"id": 4,"name": "Finding Nemo"}]
            let index = req.params.indexNumber
        if(index>film.length){
        return res.send("there is no such movie present")
        }else{
        return res.send(film[index])
        }
        })
        module.exports = router;




        //     // res.send(film)   
        // })












    // router.get('/student-details/:name', function(req, res){

// }

    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    // let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

// module.exports = router;
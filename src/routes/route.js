const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

router.post('/test-you', function(req, res){
res.send(["hy"])
})

router.post('/chetan-16',function(req, res){
let userName = req.body.name
let information = req.body.info.age
let info1 = req.body.info.location
console.log(userName, information, info1)
    res.send(["hy my name is chetan"])
    let c = req.body
    // console.log(c)
})

router.post('/chetannew', function(req, res){
    let array = [16, 25, 36, 45]
    let nea = req.body.newa
    array.push(nea)
    console.log(array)
    res.send(array)


})

let players =
  [
    {
      "name": "manish",
      "dob": "1/1/1995",
      "gender": "male",
      "city": "jalandhar",
      "sports": [
        "swimming"
      ]
    },
    {
      "name": "gopal",
      "dob": "1/09/1995",
      "gender": "male",
      "city": "delhi",
      "sports": [
        "soccer"
      ],
    },
    {
      "name": "lokesh",
      "dob": "1/1/1990",
      "gender": "male",
      "city": "mumbai",
      "sports": [
        "soccer"
      ],
    },
  ]



router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    let newplayer = req.body
    let news = newplayer.name

    for(i =0; i<players.length; i++){
        if(players[i].name == news){
            // console.log("player already listed")
            return res.send("player is already listed")
            // break
        }
        }
  players.push(newplayer)
//   res.send({ data: players, status: true })
res.send({players})
    })

module.exports = router;
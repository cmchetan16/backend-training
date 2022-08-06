const express = require('express');
const abc = require('../introduction/intro')
const welcome = require('../logger/logger.js')
const info = require('../util/helper.js')
const format = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')

welcome.hello()

info.currentDate()
info.currentMonth()
info.batch()

format.trim()
format.changeToLowerCase()
format.changeToUpperCase()

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason
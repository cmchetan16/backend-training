


let trim = function (){
    let a = "        Chetan    Manocha        "
    console.log(a.trim() )
}
let toLowerCase = function(){
    let a = "CHETAN MANOCHA"
    console.log(a.toLowerCase())
}
let toUpperCase = function(){
    let a = "chetan manocha"
    console.log(a.toUpperCase())
}


module.exports.trim = trim
module.exports.changeToLowerCase = toLowerCase
module.exports.changeToUpperCase= toUpperCase

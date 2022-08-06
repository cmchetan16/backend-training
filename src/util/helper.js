function dob (){
    let date = new Date()
    console.log(date.getDate())
}

function dom(){
    const month = ["Jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    let a = new Date();
    let s = month[a.getMonth()]
    console.log(s)
}
let getbatchinfo= function (){
    const a = "Plutonium";
    const b = "W3D5";
    const topic = "Nodejs module system";
    console.log(
        a + " , " + b + " , " + "the topic begin taught today is " +  topic );
}
// dob ()
// dom ()

module.exports.currentDate = dob
module.exports.currentMonth = dom
module.exports.batch = getbatchinfo
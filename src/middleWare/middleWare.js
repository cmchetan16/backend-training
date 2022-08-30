const jwt = require("jsonwebtoken");
const mid1 = (req, res, next) => {
  try{
  const token = req.headers["x-auth-token"];

  if (!token) {
    return res.status(401).send({ status: false, msg: "Unauthorized" });
  }

// const decodedtokenId= tokenValidator.userId
// console.log(decodedtokenId)



  const userId = req.params.userId;   //no need to write here
  const tokenValidator = jwt.verify(
    token,"amncjbcjhjcjhchjecjkdjcejhjecjjjwdjw");
//console.log(tokenValidator)
// const decodedtokenId= tokenValidator.userId
// if(decodedtokenId == userId){
//   console.log("autorize user")
// }else{
//   console.log("not autorize user")
// }

    if(tokenValidator.userId != userId){
      return res.status(403).send({status: false, msg: "Token or User is not valid "})
    }
    // console.log(decodedtokenId)
  next();
} catch (err) {
  console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
}
};
module.exports.mid1 = mid1;

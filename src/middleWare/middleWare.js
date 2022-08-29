const jwt = require("jsonwebtoken");

const mid1 = (req, res, next) => {
  const token = req.headers["x-auth-token"];

  if (!token) {
    return res.send({ msg: "token is required" });
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
      return res.send({msg: "Token or User is not valid "})
    }
    // console.log(decodedtokenId)
  next();
};
module.exports.mid1 = mid1;

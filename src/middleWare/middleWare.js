const jwt = require("jsonwebtoken");

const mid1 = (req, res, next) => {
  const token = req.headers["x-auth-token"];

  if (!token) {
    return res.send({ msg: "token is required" });
  }

  const tokenValidator = jwt.verify(
    token,"amncjbcjhjcjhchjecjkdjcejhjecjjjwdjw");
    
  if (!tokenValidator) {
    return res.send({ msg: "token is not valid" });
  }
  next();
};
module.exports.mid1 = mid1;

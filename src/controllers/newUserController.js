const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { use } = require("../routes/route");

const createUsers = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send(savedData);
};
// --------------------------------------------------------------------
const login = async function (req, res) {
  let userEmail = req.body.emailId;
  let password = req.body.password;
  let details = await userModel.findOne({
    emailId: userEmail,
    password: password,
  });
  if (!details) {
    return res.send({ msg: "User not found" });
  }
  let tokenCreate = jwt.sign(
    { userId: details._id.toString() },
    "amncjbcjhjcjhchjecjkdjcejhjecjjjwdjw"
  );
  res.setHeader("x-auth-token", tokenCreate);
  res.send({ status: true, token: tokenCreate });
};

const avilable = async function (req, res) {
  // const token = req.headers["x-auth-token"];

  const userId = req.params.userId;
  const user = await userModel.findById(userId);
  if (!user) {
    return res.send({ msg: "user is not avilable" });
  }
  res.send(user);
};
// --------------------------------------------------------------------
const updateUser = async function (req, res) {
  let body = req.body;
  let token = req.headers["x-auth-token"];
  // let bodies =

  const userId = req.params.userId;

  const data = await userModel.findByIdAndUpdate(
    userId,
    { $set: req.body },
    { new: true }
  );
  if (!data) {
    return res.send({ msg: "User not found" });
  }
  res.send(data);
};
//------------------------------------------------------------
const deleteUsers = async (req, res) => {
  const userId = req.params.userId;

  const data = await userModel.findByIdAndUpdate(userId, {
    $set: { isDeleted: true },
  });
  if (!data) return res.send("user not found");
  res.send("user is deleted..........");
};
module.exports.updateUser = updateUser;
module.exports.createUser = createUsers;
module.exports.login = login;
module.exports.avilable = avilable;
module.exports.deleteUser = deleteUsers;

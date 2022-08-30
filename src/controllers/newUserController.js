const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { use } = require("../routes/route");

const createUsers = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send(savedData);
  } catch (err) {
    console.log("This is the error :", err.message);
    res.status(500).send({ msg: "Error", error: err.message });
  }
};
// --------------------------------------------------------------------
const login = async function (req, res) {
  try {
    let userEmail = req.body.emailId;
    let password = req.body.password;
    let details = await userModel.findOne({
      emailId: userEmail,
      password: password,
    });
    if (!details) {
      return res.status(404).send({ msg: "Email or Pwd is wrong" });
    }
    let tokenCreate = jwt.sign(
      { userId: details._id.toString() },
      "amncjbcjhjcjhchjecjkdjcejhjecjjjwdjw"
      // name: "chetan", }
    );
    res.setHeader("x-auth-token", tokenCreate);
    res.status(201).send({ status: true, token: tokenCreate });
  } catch (err) {
    console.log("This is the error :", err.message);
    res.status(500).send({ msg: "Error", error: err.message });
  }
};

const avilable = async function (req, res) {
  // const token = req.headers["x-auth-token"];
  try {
    const userId = req.params.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({ msg: "user is not avilable" });
    }
    res.status(302).send(user);
  } catch (err) {
    console.log("This is the error :", err.message);
    res.status(500).send({ msg: "Error", error: err.message });
  }
};
// --------------------------------------------------------------------
const updateUser = async function (req, res) {
  try {
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
      return res.status(400).send({ msg: "User not found" });
    }
    res.status(202).send(data);
  } catch (err) {
    console.log("This is the error :", err.message);
    res.status(500).send({ msg: "Error", error: err.message });
  }
};
//------------------------------------------------------------
const deleteUsers = async (req, res) => {
  const userId = req.params.userId;
  try {
    const data = await userModel.findByIdAndUpdate(userId, {
      $set: { isDeleted: true },
    });
    if (!data) return res.status(403).send("user not found");
    res.status(202).send({ status: "true", msg: data });
  } catch (err) {
    console.log("This is the error :", err.message);
    res.status(500).send({ msg: "Error", error: err.message });
  }
};
module.exports.updateUser = updateUser;
module.exports.createUser = createUsers;
module.exports.login = login;
module.exports.avilable = avilable;
module.exports.deleteUser = deleteUsers;

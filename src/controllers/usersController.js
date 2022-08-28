//const { count } = require("console")//
const usersModel = require("../models/usersModel");

const createUser = async function (req, res) {
  let data = req.body;
  const newUser = await usersModel.create(data);
  res.send(newUser);
};
module.exports.createUser = createUser;

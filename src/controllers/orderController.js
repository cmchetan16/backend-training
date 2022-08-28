//const { count } = require("console")
const orderModel = require("../models/orderModel");
const { default: mongoose } = require("mongoose");
const usersModel = require("../models/usersModel");
const productModel = require("../models/productModel");

const order = async function (req, res) {
  let data = req.body;
  let head = req.headers;
  let user_id = data.user_id;
  let product_id = data.product_Id;

  if (head.isfreeappuser === "true")
    data.isFreeAppUser = true; //converting string true into boolean
  else data.isFreeAppUser = false; //converting string false into boolean

  if (!data.user_id) {
    return res.send({ msg: "UserId is not valid" });
  }
  if (!data.product_Id) {
    return res.send({ msg: "productId is not valid" });
  }
  if (!mongoose.isValidObjectId(user_id)) {
    return res.send({ msg: "Please Enter valid ObjectID" });
  }

  if (!mongoose.isValidObjectId(product_id)) {
    return res.send({ msg: "Please Enter valid ObjID" });
  }
  const userData = await usersModel.findById(user_id);
  if (!userData) {
    return res.send({ msg: "User not found" });
  }

  if (userData.isFreeAppUser != data.isFreeAppUser) {
    return res.send({ msg: "isFreeAppUser value is diffrent" });
  }
  const productData = await productModel.findById(product_id);
  if (!productData) {
    return res.send({ msg: "Product not found" });
  }

  const price = productData.price;
  if (userData.isFreeAppUser == false) {
    if (userData.balance >= price) {
      await usersModel.findByIdAndUpdate(data.user_id, {
        $inc: { balance: -price },
      });
      data.amount = price;
      const bill = await orderModel.create(data);
      return res.send(bill);
    } else {
      return res.send({ msg: "you dont have enough money" });
    }
  } else {
    data.amount = 0; //nw key
    const bill = await orderModel.create(data);
    return res.send(bill);
  }
};
module.exports.orders = order;

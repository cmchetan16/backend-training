const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const moment = require("moment");

const orderSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "Users",
  },
  amount: Number,
  isFreeAppUser: Boolean,
  date: String,
  productId: {
    type: ObjectId,
    ref: "Product",
  },
  date: {
    type: String,
    default: moment().format("DD/MM/YYYY"),
  },
});
module.exports = mongoose.model("order", orderSchema);

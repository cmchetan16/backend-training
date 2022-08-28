const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  balance: Number, // Default balance at user registration is 100
  address: String,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  isFreeAppUser: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("newUsers", usersSchema);

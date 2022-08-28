const { count } = require("console");
const productModel = require("../models/productModel");

const products = async function (req, res) {
  let product = req.body;
  let saveProduct = await productModel.create(product);
  res.send({ saveProduct });
};

module.exports.products = products;

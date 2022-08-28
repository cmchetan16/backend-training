const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const usersController = require("../controllers/usersController");
const orderController = require("../controllers/orderController");
const mid = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});
// -----------------------1----------------------------

router.post("/User",mid.mid1, usersController.createUser);

router.post("/products", productController.products);

router.post("/order",mid.mid1, orderController.orders);

module.exports = router;

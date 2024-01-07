const Products = require("../models/Products");

const controller = {
  index: (req, res) => {
    res.render("index", { products: Products.findAll() });
  },
};

module.exports = controller;

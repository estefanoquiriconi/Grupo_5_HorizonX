const db = require("../database/models");

const controller = {
  index: async (req, res) => {
    const products = await db.Product.findAll({
      include : ["category", "images"]
    });
    res.render("index", { products });
  },
};

module.exports = controller;

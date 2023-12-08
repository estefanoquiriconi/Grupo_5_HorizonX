const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  index: (req, res) => {
    res.render("products/products", { products });
  },

  detail: (req, res) => {
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    if (product) {
      res.render("products/detail", { product });
    } else {
      res.send("No existe el producto que buscas!!");
    }
  },

  create: (req, res) => {
    res.render("products/create");
  },

  store: (req, res) => {
    const newProduct = {
      id: uuidv4(),
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
      image: req.file?.filename || "default-product-image.png",
    };
    products.push(newProduct);

    let productsJSON = JSON.stringify(products, null, " ");
    fs.writeFileSync(productsFilePath, productsJSON);

    res.redirect("/products");
  },

  edit: (req, res) => {
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    if (product) {
      res.render("products/edit", { product });
    } else {
      res.send("<h1>NO EXISTE EL PRODUCTO!!</h1>");
    }
  },

  productCart: (req, res) => {
    res.render("products/productCart");
  },
};

module.exports = controller;

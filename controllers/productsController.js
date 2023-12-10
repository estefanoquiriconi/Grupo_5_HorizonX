const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const jFunc = require('../public/js/jsonFuncs');
const jsonFuncs = require("../public/js/jsonFuncs");

const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  index: (req, res) => {
    res.render("products/products", { products, cat : req.query.cat });
  },

  detail: (req, res) => {
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    if (product) {
      res.render("products/detail", { product });
    } else {
      res.send("¡No existe el producto que buscas!");
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
      res.send("¡No existe el producto que desea modificar!");
    }
  },

  update: (req,res) => {
    /* correcion no se puede modificar un producto que no exista
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    if (product) {
    let save = products.find( e => e.id == req.params.id)*/
    if (save) {
      save.name = req.body.brand;
      save.brand = req.body.model;
      save.category = req.body.category;
      save.description = req.body.description;
      save.color = req.body.color;
      save.price = req.body.price;

    }
    jsonFuncs.updateData(products,productsFilePath)
  /*} else {
    res.send("¡No existe el producto que desea modificar!");
  }*/
   
    res.redirect('/products/detail/'+req.params.id)

  },

  productCart: (req, res) => {
    res.render("products/productCart");
  },

  delete: (req,res) => {
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    if (product) {
      res.render("products/delete", { product });
    } else {
      res.send("El producto que deseas eliminar no existe!!");
    }
  }
};

module.exports = controller;

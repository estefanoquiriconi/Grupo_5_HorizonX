const fs = require("fs");
const path = require("path");
const Products = require("../models/Products");
const { validationResult } = require("express-validator");

const jsonFuncs = require("../public/js/jsonFuncs");
let cartList = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/cart.json"), "utf-8")
);

const controller = {
  index: (req, res) => {
    res.render("products/products", {
      products: Products.findAll(),
      cat: req.query.cat,
    });
  },

  detail: (req, res) => {
    const id = req.params.id;
    const product = Products.getById(id);
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
    const validations = validationResult(req);

    if (validations.errors.length > 0) {
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, "../public/images/products/", req.file.filename)
        );
      }
      return res.render("products/create", {
        errors: validations.mapped(),
        oldData: req.body,
      });
    }

    const productData = {
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
      image: req.file?.filename || "default-product-image.png",
    };

    Products.create(productData);

    res.redirect("/products");
  },

  edit: (req, res) => {
    const id = req.params.id;
    const product = Products.getById(id);
    if (product) {
      res.render("products/edit", { product });
    } else {
      res.send("¡No existe el producto que desea modificar!");
    }
  },

  update: (req, res) => {
    const validations = validationResult(req);

    if (validations.errors.length > 0) {
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, "../public/images/products/", req.file.filename)
        );
      }
      return res.render("products/edit", {
        errors: validations.mapped(),
        product: req.body,
      });
    }

    const id = req.params.id;
    const product = Products.getById(id);
    const updateProductData = {
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,
      color: req.body.color,
      price: req.body.price,
      image: req.file?.filename || product.image
    };

    if (Products.update(id, updateProductData)) {
      res.redirect("/products/detail/" + req.params.id);
    } else {
      res.send("¡No existe el producto que desea modificar!");
    }
  },

  productCart: (req, res) => {
    if (cartList.length != 0) {
      res.render("products/productCart", { products: cartList });
    } else {
      res.render("products/cartEmpty");
    }
  },

  delete: (req, res) => {
    const id = req.params.id;
    Products.detele(id);
    res.redirect("/products");
  },

  buy: (req, res) => {
    const id = req.query.id;
    const product = Products.getById(id);
    jsonFuncs.newData(
      product,
      cartList,
      path.resolve(__dirname, "../data/cart.json")
    );
    res.redirect("/products/productCart");
  },

  cartRemove: (req, res) => {
    let id = req.query.id;
    let i = 0;
    cartList = cartList.filter((e) => {
      if (i == 1) {
        return true;
      }
      if (e.id == id) {
        i = 1;
        return false;
      }
      return true;
    });
    jsonFuncs.updateData(
      cartList,
      path.resolve(__dirname, "../data/cart.json")
    );
    res.redirect("/products/productCart");
  },
};

module.exports = controller;

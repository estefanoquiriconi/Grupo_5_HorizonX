const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const fileName = path.resolve(__dirname, "../data/products.json");

const Products = {
  getData: function () {
    return JSON.parse(fs.readFileSync(fileName, "utf-8"));
  },

  findAll: function () {
    return this.getData();
  },

  getById: function (id) {
    return this.findAll().find((product) => product.id === id);
  },

  create: function (productData) {
    let allProducts = this.findAll();
    let newProduct = {
      id: uuidv4(),
      ...productData,
    };
    allProducts.push(newProduct);
    fs.writeFileSync(fileName, JSON.stringify(allProducts, null, " "));

    return newProduct;
  },

  detele: function (id) {
    let finalProducts = this.findAll().filter((product) => product.id !== id);
    fs.writeFileSync(fileName, JSON.stringify(finalProducts, null, " "));
    return true;
  },

  update: function (id, updateProductData) {
    let allProducts = this.findAll();
    let updateProductIndex = allProducts.findIndex((user) => user.id === id);
    if (updateProductIndex !== -1) {
      allProducts[updateProductIndex] = {
        ...allProducts[updateProductIndex],
        ...updateProductData,
      };
      fs.writeFileSync(fileName, JSON.stringify(allProducts, null, " "));
      return true;
    } else {
      return null;
    }
  },
};

module.exports = Products;

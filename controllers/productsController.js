const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const { Op } = require("sequelize");

// const Products = require("../models/Products");
// const jsonFuncs = require("../public/js/jsonFuncs");
// let cartList = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "../data/cart.json"), "utf-8")
// );


const controller = {
  index: async (req, res) => {
    const {category} = req.params;
    let products;
    try {
      if(category){
         products = await db.Product.findAll({
          include: ["category", "images", "brand"],
          where : {
            '$category.name$' : category
          }
        });
      }else {
         products = await db.Product.findAll({
          include: ["category", "images", "brand"],
        });
      }
      res.render("products/products", { products, search : category});
    } catch (error) {
      console.error(error);
    }
  },

  detail: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await db.Product.findByPk(id, {
        include: ["images", "brand", "color"],
      });
      if (!product) return res.redirect("/"); //product not found, redirect to home
      res.render("products/detail", { product });
    } catch (error) {
      console.error(error);
    }
  },

  create: async (req, res) => {
    try {
      res.render("products/create", {
        brands: await db.Brand.findAll(),
        colors: await db.Color.findAll(),
        categories: await db.Category.findAll(),
      });
    } catch (error) {
      console.error(error);
    }
  },

  store: async (req, res) => {
    const validations = validationResult(req);
    const { name, brand, color, category, description, stock_quantity, price } =
      req.body;
    try {
      if (!validations.isEmpty()) {
        if (req.files) {
          req.files.forEach((file) => {
            fs.unlinkSync(
              path.join(__dirname, "../public/images/products/", file.filename)
            );
          });
        }

        return res.render("products/create", {
          errors: validations.mapped(),
          oldData: req.body,
          brands: await db.Brand.findAll(),
          colors: await db.Color.findAll(),
          categories: await db.Category.findAll(),
        });
      }

      const productData = {
        name,
        brand_id: brand,
        color_id: color,
        category_id: category,
        description,
        stock_quantity,
        price,
      };

      const createdProduct = await db.Product.create(productData);

      if (req.files.length > 0) {
        for (const file of req.files) {
          await db.ProductImage.create({
            product_id: createdProduct.id,
            image_filename: file.filename,
          });
        }
      } else {
        await db.ProductImage.create({
          product_id: createdProduct.id,
          image_filename: "default-product-image.png",
        });
      }

      res.redirect("/products");
    } catch (error) {
      console.error(error);
    }
  },

  edit: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await db.Product.findByPk(id, {include: ["images"]});
      if (!product) return res.redirect("/");
      res.render("products/edit", {
        product,
        brands: await db.Brand.findAll(),
        categories: await db.Category.findAll(),
        colors: await db.Color.findAll(),
      });

    }
    catch (error) {
      console.error(error);
    }
  },

  update: async (req, res) => {
    const validations = validationResult(req);
    const { id } = req.params;
    const { name, brand, color, category, description, stock_quantity, price } =
      req.body;
    try {
      if (!validations.isEmpty()) {
        if (req.files) {
          req.files.forEach((file) => {
            fs.unlinkSync(
              path.join(__dirname, "../public/images/products/", file.filename)
            );
          });
        }

        return res.render("products/edit", {
          errors: validations.mapped(),
          product: {
            ...req.body,
            brand_id: brand,
            color_id: color,
            category_id: category,
          },
          brands: await db.Brand.findAll(),
          categories: await db.Category.findAll(),
          colors: await db.Color.findAll(),
        });
      }

      const newProductData = {
        name,
        brand_id: brand,
        color_id: color,
        category_id: category,
        description,
        stock_quantity,
        price,
      };

      await db.Product.update(newProductData, {
        where: {
          id: id,
        },
      });
      if (req.files.length > 0) {
        for (const file of req.files) {
          await db.ProductImage.create({
            product_id: id,
            image_filename: file.filename,
          });
        }
      }

      //Si el producto tiene más de una imagen, eliminar la por defecto
      const product = await db.Product.findByPk(id, {
        include: ["images"],
      });
      if (product.images.length > 1) {
        await db.ProductImage.destroy({
          where: {
            product_id: id,
            image_filename: "default-product-image.png",
          },
        });
      }

      res.redirect("/products/detail/" + id);
    } catch (error) {
      console.error(error);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const images = await db.ProductImage.findAll({
        where: {
          product_id: id,
        },
      });
      images.forEach((image) => {
        if (image.image_filename != "default-product-image.png") {
          fs.unlinkSync(
            path.join(
              __dirname,
              "../public/images/products/",
              image.image_filename
            )
          );
        }
      });
      await db.ProductImage.destroy({
        where: {
          product_id: id,
        },
      });
      await db.Product.destroy({
        where: {
          id: id,
        },
      });
      res.redirect("/products");
    } catch (error) {
      console.error(error);
    }
  },

  deleteImage: async (req, res) => {
    const { id } = req.params;
    const image = await db.ProductImage.findByPk(id);
    const idProduct = image.product_id;
    const products = await db.Product.findByPk(idProduct, {
      include: ["images"],
    });
    if (!image) return res.redirect("/products");
    try {
      if (products.images.length > 1) {
        isDeleted = await db.ProductImage.destroy({
          where: {
            id: id,
          },
        });
        fs.unlinkSync(
          path.join(
            __dirname,
            "../public/images/products/",
            image.image_filename
          )
        );
      }
      res.status(200);
    } catch (error) {
      console.log(error);
    }
  },

  search: async (req, res) => {
    try {
      const search = req.query.q;
      const products = await db.Product.findAll({
      include: ['brand', 'category', 'images'],
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { '$brand.name$': { [Op.like]: `%${search}%` } },
        ],
      },
    })
    console.log(products);
    res.render("products/products", {
      products,
      cat: req.query.cat,
      search
    });
    } catch (error) {
      console.log(error);
    }
    
  },
  
  // productCart: (req, res) => {
  //   if (cartList.length != 0) {
  //     res.render("products/productCart", { products: cartList });
  //   } else {
  //     res.render("products/cartEmpty");
  //   }
  // },

  // buy: (req, res) => {
  //   const id = req.query.id;
  //   const product = Products.getById(id);
  //   jsonFuncs.newData(
  //     product,
  //     cartList,
  //     path.resolve(__dirname, "../data/cart.json")
  //   );
  //   res.redirect("/products/productCart");
  // },

  // cartRemove: (req, res) => {
  //   let id = req.query.id;
  //   let i = 0;
  //   cartList = cartList.filter((e) => {
  //     if (i == 1) {
  //       return true;
  //     }
  //     if (e.id == id) {
  //       i = 1;
  //       return false;
  //     }
  //     return true;
  //   });
  //   jsonFuncs.updateData(
  //     cartList,
  //     path.resolve(__dirname, "../data/cart.json")
  //   );
  //   res.redirect("/products/productCart");
  // },
};

module.exports = controller;

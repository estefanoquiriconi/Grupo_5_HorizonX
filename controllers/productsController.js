const fs = require("fs");
const path = require("path");
const { Product, Category, Brand, Color, ProductImage } = require("../database/models");
const { validationResult } = require("express-validator");
const { Op } = require("sequelize");

const controller = {
  index: async (req, res) => {
    const {category} = req.params;
    let products;
    try {
      if(category){
         products = await Product.findAll({
          include: ["category", "images", "brand"],
          where : {
            '$category.name$' : category
          }
        });
      }else {
         products = await Product.findAll({
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
      const product = await Product.findByPk(id, {
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
        brands: await Brand.findAll(),
        colors: await Color.findAll(),
        categories: await Category.findAll(),
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
          brands: await Brand.findAll(),
          colors: await Color.findAll(),
          categories: await Category.findAll(),
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

      const createdProduct = await Product.create(productData);

      if (req.files.length > 0) {
        for (const file of req.files) {
          await ProductImage.create({
            product_id: createdProduct.id,
            image_filename: file.filename,
          });
        }
      } else {
        await ProductImage.create({
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
      const product = await Product.findByPk(id, {include: ["images"]});
      if (!product) return res.redirect("/");
      res.render("products/edit", {
        product,
        brands: await Brand.findAll(),
        categories: await Category.findAll(),
        colors: await Color.findAll(),
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
          brands: await Brand.findAll(),
          categories: await Category.findAll(),
          colors: await Color.findAll(),
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

      await Product.update(newProductData, {
        where: {
          id: id,
        },
      });
      if (req.files.length > 0) {
        for (const file of req.files) {
          await ProductImage.create({
            product_id: id,
            image_filename: file.filename,
          });
        }
      }

      //Si el producto tiene más de una imagen, eliminar la por defecto
      const product = await Product.findByPk(id, {
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
      const images = await ProductImage.findAll({
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
      await ProductImage.destroy({
        where: {
          product_id: id,
        },
      });
      await Product.destroy({
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
    const image = await ProductImage.findByPk(id);
    const idProduct = image.product_id;
    const products = await Product.findByPk(idProduct, {
      include: ["images"],
    });
    if (!image) return res.redirect("/products");
    try {
      if (products.images.length > 1) {
        isDeleted = await ProductImage.destroy({
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
      const products = await Product.findAll({
      include: ['brand', 'category', 'images'],
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { '$brand.name$': { [Op.like]: `%${search}%` } },
          { '$category.name$': { [Op.like]: `%${search}%` } }
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

};

module.exports = controller;

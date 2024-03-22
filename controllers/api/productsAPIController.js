const { Product, ProductImage } = require('../../database/models')
const BASE_URL = 'http://localhost:8080'

const productsAPIController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: ['category', 'brand', 'color', 'images'],
        attributes: {
          exclude: ['category_id', 'brand_id', 'color_id'],
        },
      })

      const productsByCategory = {}

      products.forEach((product) => {
        const category = product.category.name
        if (productsByCategory[category]) {
          productsByCategory[category]++
        } else {
          productsByCategory[category] = 1
        }
        product.setDataValue('detail', `${BASE_URL}/api/products/` + product.id)
        product.price = Number(product.price).toLocaleString('es-AR', {
          minimumFractionDigits: 2,
        })
        product.images.forEach((image) =>
          image.setDataValue('url', `${BASE_URL}/api/productImage/` + image.id)
        )
      })

      res.json({
        meta: {
          status: 200,
          count: products.length,
          url: `${BASE_URL}/api/products`,
        },
        data: {
          countByCategory: productsByCategory,
          products,
        },
      })
    } catch (error) {
      console.error(error)
    }
  },

  show: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.productId, {
        include: [
          'category',
          'brand',
          'color',
          {
            model: ProductImage,
            as: 'images',
            attributes: ['id', 'image_filename'],
          },
        ],
        attributes: {
          exclude: ['category_id', 'brand_id', 'color_id'],
        },
      })
      res.json(product)
    } catch (error) {
      console.error(error)
    }
  },

  last: async (req, res) => {
    try {
      const lastProduct = await Product.findOne({
        order: [['id', 'DESC']],
        include: [
          'category',
          'brand',
          'color',
          {
            model: ProductImage,
            as: 'images',
            attributes: ['id', 'image_filename'],
          },
        ],
        attributes: {
          exclude: ['category_id', 'brand_id', 'color_id'],
        },
      })
      lastProduct.images.forEach((image) =>
        image.setDataValue('url', `${BASE_URL}/api/productImage/` + image.id)
      )
      res.json(lastProduct)
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = productsAPIController

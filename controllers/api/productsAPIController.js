const { Product, ProductImage } = require('../../database/models')

const productsAPIController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: ['category'],
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
      })

      products.forEach((product) => {
        product.setDataValue(
          'detail',
          'http://localhost:8080/api/products/' + product.id
        )
      })

      res.json({
        meta: {
          status: 200,
          count: products.length,
          url: 'http://localhost:8080/api/products',
        },
        countByCategory: productsByCategory,
        products,
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
}

module.exports = productsAPIController

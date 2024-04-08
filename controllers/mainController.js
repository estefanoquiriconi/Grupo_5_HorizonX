const { Product, Category } = require('../database/models')

const mainController = {
  index: async (req, res) => {
    try {
      res.render('index', {
        products: await Product.findAll({
          include: ['category', 'images', 'brand'],
          order: [['id', 'DESC']],
          limit : 20
        }),
        categories: await Category.findAll(),
      })
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = mainController

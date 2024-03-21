const { Category } = require('../../database/models')

const categoriesAPIController = {
  index: async (req, res) => {
    return res.json(await Category.findAll())
  },

  show: async (req, res) => {
    return res.json(await Category.findByPk(req.params.categoryId));
  }
}

module.exports = categoriesAPIController

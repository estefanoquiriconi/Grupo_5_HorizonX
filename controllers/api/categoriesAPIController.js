const { Category } = require('../../database/models')
const BASE_URL = 'http://localhost:8080'

const categoriesAPIController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll()
      categories.forEach((category) => {
        category.name =
          category.name.charAt(0).toUpperCase() + category.name.slice(1)
        category.setDataValue(
          'detail',
          `${BASE_URL}/api/categories/` + category.id
        )
      })
      return res.json({
        meta: {
          status: 200,
          count: categories.length,
          url: `${BASE_URL}/api/categories`,
        },
        data: categories,
      })
    } catch (error) {
      console.error(error)
    }
  },

  show: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.categoryId)
      return res.json(category)
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = categoriesAPIController

const { Category, Product } = require('../../database/models')
const { validationResult } = require('express-validator')
const BASE_URL = 'http://localhost:8080'

async function productsCountCategoryArray(array) {
  let countArray = []
  for (let index = 0; index < array.length; index++) {
    const element = await Product.count({
      where: { category_id: array[index].id },
    })
    console.log(element)
    countArray.push(element)
  }
  return countArray
}

const categoriesAPIController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll({})
      const count = await productsCountCategoryArray(categories)
      console.log(categories.length)
      categories.forEach((category, i) => {
        category.name =
          category.name.charAt(0).toUpperCase() + category.name.slice(1)
        category.setDataValue(
          'detail',
          `${BASE_URL}/api/categories/` + category.id
        )
        category.setDataValue('productCount', count[i])
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
      return res.status(500).json({
        success: false,
        message: 'Hubo un error al obtener las categorías',
        error: error.message,
      })
    }
  },

  show: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.categoryId)
      const count = await Product.count({
        where: { category_id: req.params.categoryId },
      })
      category.setDataValue('productCount', count)
      if (!category) {
        return res.status(404).json({
          success: false,
          message: 'La categoría no se encontró',
        })
      }
      return res.json(category)
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Hubo un error al mostrar la categoría',
        error: error.message,
      })
    }
  },

  store: async (req, res) => {
    const validations = validationResult(req)
    const { name } = req.body

    if (!validations.isEmpty())
      return res.status(400).json({
        success: false,
        errors: validations.mapped(),
      })

    try {
      const category = await Category.create({ name })
      return res.status(201).json({
        success: true,
        message: 'La categoría se ha creado correctamente',
        category,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Hubo un erro al crear la categoría',
        error: error.message,
      })
    }
  },

  update: async (req, res) => {
    const validations = validationResult(req)
    const { categoryId } = req.params
    const { name } = req.body

    if (!validations.isEmpty())
      return res.status(400).json({
        success: false,
        errors: validations.mapped(),
      })

    try {
      const [affectedRow] = await Category.update(
        { name },
        {
          where: {
            id: categoryId,
          },
        }
      )
      if (affectedRow === 0) {
        return res.status(400).json({
          success: false,
          message: 'La categoría no se encontró o no se pudo actualizar',
        })
      }
      return res.status(200).json({
        success: true,
        message: 'La categoría se ha actualizado correctamente',
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Hubo un error al intentar actualizar la categoría',
        error: error.message,
      })
    }
  },

  destroy: async (req, res) => {
    const { categoryId } = req.params
    try {
      const affectedRow = await Category.destroy({
        where: {
          id: categoryId,
        },
      })
      if (affectedRow === 0) {
        return res.status(400).json({
          success: false,
          message: 'La categoría no se encontró o no se pudo eliminar',
        })
      }
      return res.status(200).json({
        success: true,
        message: 'La categoría se ha eliminado correctamente',
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Hubo un error al intentar eliminar la categoría',
        error: error.message,
      })
    }
  },

  count: async (req, res) => {
    try {
      return res.status(200).json({
        total: await Category.count(),
      })
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = categoriesAPIController

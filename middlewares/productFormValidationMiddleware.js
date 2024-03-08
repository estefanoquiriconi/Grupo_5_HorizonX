const { body } = require('express-validator')
const path = require('path')

module.exports = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Debes ingresar un nombre')
    .bail()
    .isLength({ min: 5 })
    .withMessage('El nombre debe tener al menos 5 caracteres'),

  body('brand').notEmpty().withMessage('Debes seleccionar una marca'),
  body('color').notEmpty().withMessage('Debes seleccionar un color'),
  body('category').notEmpty().withMessage('Debes seleccionar una categoría'),

  body('price')
    .notEmpty()
    .withMessage('Debes ingresar un precio')
    .bail()
    .isFloat({ min: 1 })
    .withMessage('El precio debe ser mayor a 0'),

  body('stock_quantity')
    .notEmpty()
    .withMessage('Debes ingresar el stock')
    .bail()
    .isInt({ min: 1 })
    .withMessage('El stock debe ser mayor a 0'),

  body('description')
    .notEmpty()
    .withMessage('Debes ingresar una descripción')
    .bail()
    .isLength({ min: 20 })
    .withMessage('La descripción debe tener al menos 20 caracteres'),

  body('image').custom((value, { req }) => {
    let files = req.files
    let acceptedExtensions = ['.jpg', '.jpeg', '.png']
    files.forEach((file) => {
      let fileExtension = path.extname(file.originalname).toLowerCase()
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(', ')}`
        )
      }
    })
    return true
  }),
]

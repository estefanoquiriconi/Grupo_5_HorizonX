const { body } = require('express-validator')

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .bail()
    .isString()
    .withMessage('El nombre debe ser un texto')
    .bail()
    .isLength({ min: 3 })
    .withMessage('El nombre debe contener cómo mínimo 3 caracteres'),
]
